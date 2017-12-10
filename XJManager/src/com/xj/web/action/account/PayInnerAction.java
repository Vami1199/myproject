package com.xj.web.action.account;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.xj.common.JsonUtils;
import com.xj.common.UUIDUtils;
import com.xj.domain.account.PayInnerList;
import com.xj.domain.account.PayInnerListQuery;
import com.xj.domain.account.PayInnerListQuery.Criteria;
import com.xj.domain.query.PageQuery;
import com.xj.domain.query.account.PayInnerListQueryOwn;
import com.xj.service.account.PayInnerService;

@Controller
public class PayInnerAction {
	@Autowired
	PayInnerService payInnerService;
	
	/**
	 * 供应商结算管理 查询集合
	 * @param response
	 * @param pageQuery
	 * @param listQuery
	 * @param request
	 * @throws IOException
	 */
	@RequestMapping(value = "/account/payInnerList.do")
	public void payInnerList(HttpServletResponse response,PageQuery pageQuery,PayInnerListQueryOwn listQuery,HttpServletRequest request) throws IOException{
		PayInnerListQuery payInnerListQuery = new PayInnerListQuery();
		payInnerListQuery.setPageNo(pageQuery.getPage());
		payInnerListQuery.setPageSize(pageQuery.getLimit());
		payInnerListQuery.setStartRow(pageQuery.getStart());
		PayInnerList payInnerList = listQuery.getPayInnerList();
		Criteria criteria = payInnerListQuery.createCriteria();
	
		System.out.println(payInnerList);
		if (payInnerList != null) {
			if (StringUtils.isNotBlank(payInnerList.getPayInProductName())&&payInnerList.getPayInProductName()!=null) {
				criteria.andPayInProductNameEqualTo(payInnerList.getPayInProductName());
			}
			/*if (StringUtils.isNotBlank(listQuery.getBuyerName())&& listQuery.getBuyerName()!=null) {
				criteria.andPayInBuyEqualTo(payInnerList.getPayInBuy());
			}
			if (StringUtils.isNotBlank(listQuery.getSalerName())&&listQuery.getSalerName()!=null) {
				criteria.andPayInSaleEqualTo(payInnerList.getPayInSale());
			}*/
			if (payInnerList.getPayInBuy()!=null) {
				criteria.andPayInBuyEqualTo(payInnerList.getPayInBuy());
			}
			if (payInnerList.getPayInSale()!=null) {
				criteria.andPayInSaleEqualTo(payInnerList.getPayInSale());
			}
		}
		String json = payInnerService.findByExp(payInnerListQuery);
		JsonUtils.returnJson(response, json);
	}
	/**
	 * 添加供应商预算
	 * @param response
	 * @param listQuery
	 * @throws IOException 
	 */
	@RequestMapping(value="/account/addSupplierAccount.do")
	public void addSupplierAccount(HttpServletResponse response,PayInnerListQueryOwn listQuery) throws IOException{
		PayInnerList payInnerList = listQuery.getPayInnerList();
		payInnerList.setPayInId(Integer.valueOf(UUIDUtils.returnUUID()));
		int flag = payInnerService.add(payInnerList);
		if (flag == 1) {
			JsonUtils.returnJson(response, "{success:true}");
		} else {
			JsonUtils.returnJson(response, "{success:false,msg:'添加失败,请重新输入!'}");
		}
	}
	/**
	 * 更新供销商运算
	 * @param response
	 * @param listQuery
	 * @throws IOException
	 */
	@RequestMapping(value="/account/updateSupplierAccount.do")
	public void updateSupplierAccount(HttpServletResponse response,PayInnerListQueryOwn listQuery) throws IOException{
		System.out.println("listquery是:" + listQuery);
		PayInnerList payInnerList = listQuery.getPayInnerList();
		int flag = payInnerService.update(payInnerList);
		if(flag == 1){
			JsonUtils.returnJson(response, "{success:true}");
		}else{
			JsonUtils.returnJson(response, "{success:false,msg:'修改失败，请重新输入!'}");
		}
	}
	/**
	 * 删除
	 * @param response
	 * @param ids
	 * @throws IOException
	 */
	@RequestMapping(value="/account/deleteSupplierAccount.do")
	public void deleteSupplierAccount(HttpServletResponse response) throws IOException{
		String ids = "1-2-3";
		System.out.println("传递来的id字符串是" + ids);
		String regex = "-";
		String[] split = ids.split(regex);
		Boolean flag = true;
		for (String id : split) {
			System.out.println("传入的id是:"+id);
			Integer i = payInnerService.deleteById(Integer.valueOf(id));
			if (i!=1) {
				flag = false;
			}
			String json = "";
			if (flag) {
				json = "{success:true}";
			} else {
				json = "{success:false}";
			}
			JsonUtils.returnJson(response, json);
		}
	}
	
}
