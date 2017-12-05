package com.xj.web.action.base.custmoer.modules;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.xj.common.JsonUtils;
import com.xj.domain.base.BLinkman;
import com.xj.domain.base.BLinkmanQuery;
import com.xj.domain.base.BLinkmanQuery.Criteria;
import com.xj.service.base.BLinkmanService;

/**
 * 客户联系人CRUD
 * @author Administrator
 *
 */
@Controller
public class Linkman {
	@Autowired
	BLinkmanService linkmanService;
	
	@RequestMapping(value = "/base/customer/addLinkman.do")
	public void addLinkman(HttpServletResponse response,BLinkman linkman) throws IOException{
		System.out.println("联系人:"+linkman);
		int flag = linkmanService.add(linkman);
		if(flag == 1){
			JsonUtils.returnJson(response, "{success:true}");
		}else{
			JsonUtils.returnJson(response, "{success:false,msg:'添加失败,请重新输入!'}");
		}
	}
	@RequestMapping(value = "/base/customer/linkmanList.do")
	public void linkmanList(HttpServletResponse response,String customerId) throws IOException{
		BLinkmanQuery linkmanQuery = new BLinkmanQuery();
		Criteria criteria = linkmanQuery.createCriteria();
		criteria.andLCidEqualTo(Integer.parseInt(customerId));
		List<BLinkman> list = linkmanService.findByExp(linkmanQuery);
		if(list != null){
			String jsonList = JsonUtils.createJsonList(list);
			JsonUtils.returnJson(response, jsonList);
		}
	}
	
	@RequestMapping(value = "/base/customer/updateLinkman.do")
	public void updateLinkman(HttpServletResponse response,BLinkman linkman) throws IOException{
		int flag = linkmanService.update(linkman);
		if(flag == 1){
			JsonUtils.returnJson(response, "{success:true}");
		}else{
			JsonUtils.returnJson(response, "{success:false,msg:'修改失败,请重新输入!'}");
		}
	}
	
	@RequestMapping(value = "/base/customer/deleteLinkman.do")
	public void deleteLinkman(HttpServletResponse response,String ids) throws IOException{
		System.out.println("传递来的id字符串是" + ids);
		String regex = "-";
		//将字符串分割成数组
		String[] split = ids.split(regex);
		Boolean flag = true;
		for (String id : split) {
			Integer i = linkmanService.deleteById(id);
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
