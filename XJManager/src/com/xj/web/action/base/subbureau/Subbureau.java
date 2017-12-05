package com.xj.web.action.base.subbureau;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.xj.common.JsonUtils;
import com.xj.domain.base.BRailwaysubbureau;
import com.xj.domain.query.base.SubbureauListQuery;
import com.xj.service.base.BRailwaysubbureauService;

/**
 * 铁路分局CRUD
 * @author LXY
 *
 */
@Controller
public class Subbureau {
	@Autowired
	BRailwaysubbureauService subbureauService;
	
	@RequestMapping("/base/addSubbureau.do")
	public void addSubbureau(SubbureauListQuery query,HttpServletResponse response) throws IOException{
		BRailwaysubbureau railwaysubbureau = query.getRailwaysubbureau();
		int flag = subbureauService.add(railwaysubbureau);
		if(flag == 1){
			JsonUtils.returnJson(response, "{success:true}");
		}else if(flag == 2){
			JsonUtils.returnJson(response, "{success:false,msg:'产品编号重复,请重新输入产品编号!'}");
		}else{
			JsonUtils.returnJson(response, "{success:false,msg:'添加失败,请重新输入!'}");
		}
	}
	@RequestMapping(value = "/base/updateSubbureau.do")
	public void updateSubbureau(SubbureauListQuery query,HttpServletResponse response) throws IOException{
		BRailwaysubbureau railwaysubbureau = query.getRailwaysubbureau();
		int flag = subbureauService.update(railwaysubbureau);
		if(flag == 1){
			JsonUtils.returnJson(response, "{success:true}");
		}else{
			JsonUtils.returnJson(response, "{success:false,msg:'修改失败,请稍后重新输入!'}");
		}
	}
	
	
	@RequestMapping(value = "/base/deleteSubbureau.do")
	public void deleteProduct(HttpServletResponse response,String ids) throws Exception{
		System.out.println("传递来的id字符串是" + ids);
		String regex = "-";
		//将字符串分割成数组
		String[] split = ids.split(regex);
		Boolean flag = true;
		for (String id : split) {
			System.out.println("传入的id是:"+id);
			Integer i = subbureauService.deleteById(id);
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
