package com.xj.web.action.base.wagon;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.xj.common.JsonUtils;
import com.xj.domain.base.BRailwaywagon;
import com.xj.service.base.BWagonService;
/**
 * 车皮CRUD
 * @author LXY
 *
 */
@Controller
public class Wagon {
	@Autowired
	BWagonService wagonService;
	
	@RequestMapping("/base/addWagon.do")
	public void addWagon(BRailwaywagon wagon,HttpServletResponse response) throws IOException{
		System.out.println(wagon);
		int flag = wagonService.add(wagon);
		if(flag == 1){
			JsonUtils.returnJson(response, "{success:true}");
		}else if(flag == 2){
			JsonUtils.returnJson(response, "{success:false,msg:'产品编号重复,请重新输入产品编号!'}");
		}else{
			JsonUtils.returnJson(response, "{success:false,msg:'添加失败,请重新输入!'}");
		}
	}
	@RequestMapping(value = "/base/updateWagon.do")
	public void updateWagon(BRailwaywagon wagon,HttpServletResponse response) throws IOException{
		int flag = wagonService.update(wagon);
		if(flag == 1){
			JsonUtils.returnJson(response, "{success:true}");
		}else{
			JsonUtils.returnJson(response, "{success:false,msg:'修改失败,请稍后重新输入!'}");
		}
	}
	
	
	@RequestMapping(value = "/base/deleteWagon.do")
	public void deleteWagon(HttpServletResponse response,String ids) throws Exception{
		System.out.println("传递来的id字符串是" + ids);
		String regex = "-";
		//将字符串分割成数组
		String[] split = ids.split(regex);
		Boolean flag = true;
		for (String id : split) {
			System.out.println("传入的id是:"+id);
			Integer i = wagonService.deleteById(id);
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
