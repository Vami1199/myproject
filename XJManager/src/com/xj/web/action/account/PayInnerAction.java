package com.xj.web.action.account;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
		payInnerList.setPayInId(Integer .valueOf(UUIDUtils.returnUUID()));
		int flag = payInnerService.add(payInnerList);
		if (flag == 1) {
			JsonUtils.returnJson(response, "{success:true}");
		} else {
			JsonUtils.returnJson(response, "{success:false,msg:'添加失败,请重新输入!'}");
		}
	}
	
	
}
