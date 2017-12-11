package com.xj.web.action.account;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.xj.common.JsonUtils;
import com.xj.common.UUIDUtils;
import com.xj.domain.account.PayPiList;
import com.xj.domain.account.PayPiListQuery;
import com.xj.domain.account.PayPiListQuery.Criteria;
import com.xj.domain.query.PageQuery;
import com.xj.domain.query.account.PayPiListQueryOwn;
import com.xj.service.account.BudgetAccountService;

/**
 * 供应商预结算
 * @author DXJ
 *
 */
@Controller
public class BudgetAccount {
	@Autowired
	BudgetAccountService budgetAccountService; 

	@RequestMapping(value = "/account/budgetList.do")
	public void budgetList(HttpServletResponse response,PageQuery pageQuery,PayPiListQueryOwn listQuery,HttpServletRequest request) throws IOException{
		PayPiListQuery payPiListQuery = new PayPiListQuery();
		payPiListQuery.setPageNo(pageQuery.getPage());
		payPiListQuery.setPageSize(pageQuery.getLimit());
		payPiListQuery.setStartRow(pageQuery.getStart());
		
		PayPiList payPiList = listQuery.getPayPiList();
		Criteria criteria =  payPiListQuery.createCriteria();
		System.out.println(payPiList);
		if (payPiList !=null) {
			if (payPiList.getPayPiDate()!= null) {
				criteria.andPayPiDateEqualTo(payPiList.getPayPiDate());
			}
			if (payPiList.getPayPiMain()!=null) {
				criteria.andPayPiMainEqualTo(payPiList.getPayPiMain());
			}
			if (payPiList.getPayPiBuy()!=null) {
				criteria.andPayPiBuyEqualTo(payPiList.getPayPiBuy());
			}
			if (payPiList.getPayPiSale()!=null) {
				criteria.andPayPiSaleEqualTo(payPiList.getPayPiSale());
			}
		}
		String json = budgetAccountService.findByExp(payPiListQuery);
		JsonUtils.returnJson(response, json);
	}
	/**
	 * 添加预结算
	 * @param response
	 * @param listQuery
	 * @throws IOException
	 */
	@RequestMapping(value="/account/addBudget.do")
	public void addBudget(HttpServletResponse response,PayPiListQueryOwn listQuery) throws IOException{
		PayPiList payPiList = listQuery.getPayPiList();
		
		//payPiList.setPayPiId(Integer.valueOf(UUIDUtils.returnUUID()));
		payPiList.setPayPiId(1);
		int i = budgetAccountService.add(payPiList);
		if (i==1) {
			JsonUtils.returnJson(response, "{success:true}");
		}else{
			JsonUtils.returnJson(response, "{success:false,msg:'添加失败,请重新输入!'}");
		}
	}
	/**
	 * 修改预结算
	 * @param response
	 * @param listQuery
	 * @throws IOException
	 */
	@RequestMapping(value="account/updateBudget.do")
	public void updateBudget(HttpServletResponse response,PayPiListQueryOwn listQuery) throws IOException{
		System.out.println("listQuery是："+listQuery);
		PayPiList payPiList = listQuery.getPayPiList();
		int i = budgetAccountService.update(payPiList);
		if (i==1) {
			JsonUtils.returnJson(response, "{success:true}");
		}else{
			JsonUtils.returnJson(response, "{success:false,msg:'修改失败，请重新输入!'}");
		}
	}
	/**
	 * 删除预结算
	 * @param response
	 * @param ids
	 * @throws IOException
	 */
	@RequestMapping(value="/account/deleteBudget.do")
	public void deleteBudget(HttpServletResponse response,String ids) throws IOException{
		System.out.println("传递来的id字符串是:"+ids);
		String regex = "-";
		String[] split = ids.split(regex);
		Boolean flag = true;
		for (String id : split) {
			System.out.println("传入的id是:"+id);
			Integer i = budgetAccountService.deleteById(Integer.valueOf(id));
			if (i!=1) {
				flag = false;
			}
		}
		String json = "";
		if (flag) {
			json = "{success:true}";
		}else {
			json="{success:false}";
		}
		JsonUtils.returnJson(response, json);	
	}
}
