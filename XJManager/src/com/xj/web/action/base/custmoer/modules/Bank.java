package com.xj.web.action.base.custmoer.modules;

import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.xj.common.JsonUtils;
import com.xj.domain.base.BBank;
import com.xj.domain.base.BBankQuery;
import com.xj.domain.base.BBankQuery.Criteria;
import com.xj.service.base.BBankService;

/**
 * 客户开户行CRUD
 * @author Administrator
 *
 */
@Controller
public class Bank {
	@Resource
	BBankService bankService;
	@RequestMapping(value = "/base/customer/addBank.do")
	public void addBank(HttpServletResponse response,BBank bank) throws IOException{
		System.out.println("联系人:"+bank);
		int flag = bankService.add(bank);
		if(flag == 1){
			JsonUtils.returnJson(response, "{success:true}");
		}else{
			JsonUtils.returnJson(response, "{success:false,msg:'添加失败,请重新输入!'}");
		}
	}
	
	@RequestMapping(value = "/base/customer/bankList.do")
	public void bankList(HttpServletResponse response,String customerId) throws IOException{
		BBankQuery bankQuery = new BBankQuery();
		Criteria criteria = bankQuery.createCriteria();
		criteria.andBCidEqualTo(Integer.parseInt(customerId));
		List<BBank> list = bankService.findByExp(bankQuery);
		if(list != null){
			String jsonList = JsonUtils.createJsonList(list);
			JsonUtils.returnJson(response, jsonList);
		}
	}
	
	@RequestMapping(value = "/base/customer/updateBank.do")
	public void updateBank(HttpServletResponse response,BBank bank) throws IOException{
		System.out.println("银行:"+bank);
		int flag = bankService.update(bank);
		if(flag == 1){
			JsonUtils.returnJson(response, "{success:true}");
		}else{
			JsonUtils.returnJson(response, "{success:false,msg:'修改失败,请重新输入!'}");
		}
	}
	
	@RequestMapping(value = "/base/customer/deleteBank.do")
	public void deleteBank(HttpServletResponse response,String ids) throws IOException{
		System.out.println("传递来的id字符串是" + ids);
		String regex = "-";
		//将字符串分割成数组
		String[] split = ids.split(regex);
		Boolean flag = true;
		for (String id : split) {
			Integer i = bankService.deleteById(id);
			if(i != 1){
				flag = false;
			}
		}
		String json = "";
		if(flag){
			json = "{success:true}";

		}else{
			json = "{success:false}";
		}
		JsonUtils.returnJson(response,json);
	}
}
