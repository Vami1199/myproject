package com.xj.web.action.base.wagonsys;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.xj.common.JsonUtils;
import com.xj.domain.base.BRailwaywagonsys;
import com.xj.service.base.BWagonsysService;

/**
 * 车皮系统参数CRUD
 * @author Administrator
 *
 */
@Controller
public class Wagonsys {

	@Autowired
	BWagonsysService wagonsysService;
	
	@RequestMapping("/base/addWagonsys.do")
	public void addWagonsys(BRailwaywagonsys wagonsys,HttpServletResponse response) throws IOException{
		System.out.println(wagonsys);
		int flag = wagonsysService.add(wagonsys);
		if(flag == 1){
			JsonUtils.returnJson(response, "{success:true}");
		}else if(flag == 2){
			JsonUtils.returnJson(response, "{success:false,msg:'产品编号重复,请重新输入产品编号!'}");
		}else{
			JsonUtils.returnJson(response, "{success:false,msg:'添加失败,请重新输入!'}");
		}
	}
	@RequestMapping(value = "/base/updateWagonsys.do")
	public void updateWagonsys(BRailwaywagonsys wagonsys,HttpServletResponse response) throws IOException{
		int flag = wagonsysService.update(wagonsys);
		if(flag == 1){
			JsonUtils.returnJson(response, "{success:true}");
		}else{
			JsonUtils.returnJson(response, "{success:false,msg:'修改失败,请稍后重新输入!'}");
		}
	}
	
	
	@RequestMapping(value = "/base/deleteWagonsys.do")
	public void deleteWagonsys(HttpServletResponse response,String ids) throws Exception{
		System.out.println("传递来的id字符串是" + ids);
		String regex = "-";
		//将字符串分割成数组
		String[] split = ids.split(regex);
		Boolean flag = true;
		for (String id : split) {
			System.out.println("传入的id是:"+id);
			Integer i = wagonsysService.deleteById(id);
			System.out.println(i);
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
