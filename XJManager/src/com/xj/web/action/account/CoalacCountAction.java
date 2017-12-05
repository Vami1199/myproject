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
import com.xj.domain.account.PayList;
import com.xj.domain.account.PayListQuery;
import com.xj.domain.account.PayListQuery.Criteria;
import com.xj.domain.query.PageQuery;
import com.xj.domain.query.account.PayListQueryOwn;
import com.xj.service.account.CoalacCountService;

@Controller
public class CoalacCountAction {
	@Autowired
	CoalacCountService cocalaCountService;
	
	/**
	 * 铁运结算管理 查询集合
	 * @param response
	 * @param pageQuery
	 * @param listQuery
	 * @param request
	 * @throws IOException
	 */
	@RequestMapping(value = "/account/coalaccountList.do")
	public void cocalCountList(HttpServletResponse response,PageQuery pageQuery,PayListQueryOwn listQuery,HttpServletRequest request) throws IOException {
		PayListQuery payListQuery= new PayListQuery();
		//payListQuery.setOrderByClause("pay_id");
		payListQuery.setPageNo(pageQuery.getPage());
		payListQuery.setPageSize(pageQuery.getLimit());
		payListQuery.setStartRow(pageQuery.getStart());
		
		PayList payList = listQuery.getPayList();
		
		Criteria criteria = payListQuery.createCriteria();
		System.out.println(payList);
		if (payList != null) {
			if (payList.getPayTdate()!= null) {
				criteria.andPayDateEqualTo(payList.getPayTdate());
			}
			if (StringUtils.isNotBlank(payList.getPayAuditor())&&payList.getPayAuditor()!=null) {
				criteria.andPayAuditorLike("%" + payList.getPayAuditor() + "%");
			}
			if (StringUtils.isNotBlank(payList.getPayDepartment())&&payList.getPayDepartment()!=null) {
				criteria.andPayDepartmentLike("%" + payList.getPayDepartment() + "%");
			}
			if (payList.getPayReciever()!=null) {
				criteria.andPayRecieverEqualTo(payList.getPayReciever());
			}
			if (payList.getPayCustomerid()!=null) {
				criteria.andPayCustomeridEqualTo(payList.getPayCustomerid());
			}
			
		}
		String json = cocalaCountService.findByExp(payListQuery);
		JsonUtils.returnJson(response, json);
	}
	
	/**
	 * 添加铁路结算
	 * @param response
	 * @param listQuery
	 * @throws IOException
	 */
	@RequestMapping(value = "/account/addCoalacCount.do")
	public void addCocalCount(HttpServletResponse response, PayListQueryOwn listQuery) throws IOException{
		PayList payList = listQuery.getPayList();
		payList.setPayId(UUIDUtils.returnUUID());
		int flag=cocalaCountService.add(payList);
		if(flag == 1){
			JsonUtils.returnJson(response, "{success:true}");
		}else{
			JsonUtils.returnJson(response, "{success:false,msg:'添加失败,请重新输入!'}");
		}
	}
	/**
	 * 修改铁路运算
	 * @param response
	 * @param listQuery
	 * @throws IOException
	 */
	@RequestMapping(value="/account/updateCoalacCount.do")
	public void updateCocalCount(HttpServletResponse response, PayListQueryOwn listQuery) throws IOException{
		System.out.println("listQuery是"+listQuery);
		PayList payList = listQuery.getPayList();
		int flag=cocalaCountService.update(payList);
		if(flag == 1){
			JsonUtils.returnJson(response, "{success:true}");
		}else{
			JsonUtils.returnJson(response, "{success:false,msg:'修改失败，请重新输入!'}");
		}
	}
	
	/**
	 * 删除铁运结算
	 * @param response
	 * @param ids
	 * @throws IOException 
	 */
	@RequestMapping(value="/account/deleteCoalacCount.do")
	public void deleteCoalacCount(HttpServletResponse response,String ids) throws IOException{
		System.out.println("传递来的id字符串是" + ids);
		String regex = "-";
		String[] split = ids.split(regex);
		Boolean flag = true;
		for (String id : split) {
			System.out.println("传入的id是:"+id);
			Integer i = cocalaCountService.deleteById(id);
			if (i!=1) {
				flag = false;
			}
		}
		String json = "";
		if (flag) {
			json = "{success:true}";
		}else {
			json = "{success:false}";
		}
		JsonUtils.returnJson(response, json);
	}
}
