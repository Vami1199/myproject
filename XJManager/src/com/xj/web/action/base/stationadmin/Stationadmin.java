package com.xj.web.action.base.stationadmin;



import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.xj.common.JsonUtils;
import com.xj.domain.base.BRailwayadmin;
import com.xj.service.base.BStationadminService;
/**
 * 对产品进行增删改查的类
 * @author Administrator
 *
 */
@Controller
public class Stationadmin {
	@Autowired
	BStationadminService stationadminService ;
	/**
	 * 产品添加
	 */
	@RequestMapping(value = "/base/addStationadmin.do")
	public void addStationadmin(BRailwayadmin admin,HttpServletResponse response) throws Exception{
		Integer add = stationadminService.add(admin);
		if(add == 1){
			JsonUtils.returnJson(response, "{success:true}");
		}else{
			JsonUtils.returnJson(response, "{success:false}");
		}
	}
	/***
	 * 产品修改
	 * @param query
	 * @param response
	 * @throws Exception
	 */
	@RequestMapping(value = "/base/updateStationadmin.do")
	public void updateProduct(BRailwayadmin admin,HttpServletResponse response) throws Exception{
		Integer update = stationadminService.update(admin);
		if(update == 1){
			JsonUtils.returnJson(response, "{success:true}");
		}else{
			JsonUtils.returnJson(response, "{success:false}");
		}
		
	}
	/***
	 * 产品删除
	 * @param reponse
	 * @param ids 前台传来的多个id拼接的字符串
	 * @throws Exception 
 	 */
	@RequestMapping(value = "/base/deleteStationadmin")
	public void deleteStation(HttpServletResponse response,String ids) throws Exception{
		System.out.println("传递来的id字符串是" + ids);
		String regex = "-";
		//将字符串分割成数组
		String[] split = ids.split(regex);
		Boolean flag = true;
		for (String id : split) {
			System.out.println("传入的id是:"+id);
			Integer i = stationadminService.deleteById(id);
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
