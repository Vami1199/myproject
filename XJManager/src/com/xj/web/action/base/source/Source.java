package com.xj.web.action.base.source;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.xj.common.JsonUtils;
import com.xj.domain.base.BMinesource;
import com.xj.domain.query.base.SourceListQuery;
import com.xj.service.base.BMineSourceService;

@Controller
public class Source {
	@Autowired
	BMineSourceService sourceService;
	
	
	
	/***
	 * 矿别添加
	 * @param response
	 * @param query
	 * @param coId
	 * @throws IOException 
	 */
	@RequestMapping(value = "/base/addSource.do")
	public void addSource(HttpServletResponse response,SourceListQuery query,String coId) throws IOException{
		BMinesource source = query.getSource();
		source.setSourceCompanyid(coId);
		int i = sourceService.add(source);
		if(i == 1){
			JsonUtils.returnJson(response, "{success:true}");
		}else{
			JsonUtils.returnJson(response, "{success:false}");
		}
	}
	
	@RequestMapping(value = "/base/updateSource.do")
	public void updateSource(HttpServletResponse response,SourceListQuery query,String coId) throws IOException{
		BMinesource source = query.getSource();
		source.setSourceCompanyid(coId);
		int i = sourceService.update(source);
		if(i == 1){
			JsonUtils.returnJson(response, "{success:true}");
		}else{
			JsonUtils.returnJson(response, "{success:false}");
		}
	}
	
	@RequestMapping(value = "/base/deleteSource.do")
	public void deleteProduct(HttpServletResponse response,String ids) throws Exception{
		System.out.println("传递来的id字符串是" + ids);
		String regex = "-";
		//将字符串分割成数组
		String[] split = ids.split(regex);
		Boolean flag = true;
		for (String id : split) {
			System.out.println("传入的id是:"+id);
			Integer i = sourceService.deleteById(id);
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
