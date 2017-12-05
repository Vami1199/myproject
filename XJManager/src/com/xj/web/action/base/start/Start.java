package com.xj.web.action.base.start;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.xj.common.JsonUtils;
import com.xj.domain.base.BMinesource;
import com.xj.domain.base.BStartstation;
import com.xj.domain.base.BStation;
import com.xj.domain.query.base.StartListQuery;
import com.xj.service.base.BStartService;
/**
 * 发站CRUD
 * @author LXY
 *
 */
@Controller
public class Start {
	@Autowired
	BStartService startService;
	@RequestMapping(value = "/base/addStart.do")
	public void addStart(StartListQuery listQuery,HttpServletResponse response) throws IOException{
		BStartstation start = listQuery.getStart();
		BMinesource source = listQuery.getSource();
		BStation station = listQuery.getStation();
		start.setStartName(station.getsName());
		start.setStartSourceid(source.getSourceId());
		start.setStartStationid(station.getsId());
		
		int flag = startService.add(start);
		if(flag == 1){
			JsonUtils.returnJson(response, "{success:true}");
		}else{
			JsonUtils.returnJson(response, "{success:false,msg:'添加失败,请重新输入!'}");
		}
	}
	
	@RequestMapping(value = "/base/updateStart.do")
	public void updateStart(StartListQuery listQuery,HttpServletResponse response) throws IOException{
		BStartstation start = listQuery.getStart();
		BMinesource source = listQuery.getSource();
		BStation station = listQuery.getStation();
		start.setStartName(station.getsName());
		start.setStartSourceid(source.getSourceId());
		start.setStartStationid(station.getsId());
		int flag = startService.update(start);
		if(flag == 1){
			JsonUtils.returnJson(response, "{success:true}");
		}else{
			JsonUtils.returnJson(response, "{success:false,msg:'修改失败,请重新输入!'}");
		}
	}
	
	@RequestMapping(value = "/base/deleteStart.do")
	public void deleteStart(HttpServletResponse response,String ids) throws Exception{
		System.out.println("传递来的id字符串是" + ids);
		String regex = "-";
		//将字符串分割成数组
		String[] split = ids.split(regex);
		Boolean flag = true;
		for (String id : split) {
			System.out.println("传入的id是:"+id);
			Integer i = startService.deleteById(id);
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
