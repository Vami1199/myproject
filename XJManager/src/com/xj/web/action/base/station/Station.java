package com.xj.web.action.base.station;

import java.io.IOException;
import java.util.Arrays;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.xj.common.JsonUtils;
import com.xj.common.PinYin4jUtils;
import com.xj.domain.base.BStation;
import com.xj.domain.query.base.StationListQuery;
import com.xj.service.base.BStationService;

/***
 * 车站管理CRUD
 * @author LXY
 *
 */
@Controller
public class Station {
	@Resource
	BStationService stationService;
	@RequestMapping(value = "/base/addStation.do")
	public void addStation(StationListQuery query,HttpServletResponse response) throws IOException{
		BStation station = query.getStation();
		//获取名字
		String name = station.getsName();
		//获取拼音首字母
		String[] string = PinYin4jUtils.getHeadByString(name,true);
		String sort = Arrays.toString(string);
		sort = sort.substring(1, sort.length()-1);
		String regex = ",";
		String[] arr = sort.split(regex);
		sort = "";
		for (String string2 : arr) {
			sort += string2; 
		}
		sort = sort.replace(" ", "");
		System.out.println("首字母为:"+sort);
		station.setsSort(sort);
		int flag = stationService.insert(station);
		if(flag == 1){
			JsonUtils.returnJson(response, "{success:true}");
		}else{
			JsonUtils.returnJson(response, "{success:false,msg:'添加失败,请稍后重新输入!'}");
		}
	}
	
	@RequestMapping("/base/updateStation")
	public void updateStation(StationListQuery query,HttpServletResponse response) throws IOException{
		BStation station = query.getStation();
		//获取名字
		String name = station.getsName();
		//获取拼音首字母
		String[] string = PinYin4jUtils.getHeadByString(name,true);
		String sort = Arrays.toString(string);
		sort = sort.substring(1, sort.length()-1);
		String regex = ",";
		String[] arr = sort.split(regex);
		sort = "";
		for (String string2 : arr) {
			sort += string2; 
		}
		sort = sort.replace(" ", "");
		System.out.println("首字母为:"+sort);
		station.setsSort(sort);
		int flag = stationService.update(station);
		if(flag == 1){
			JsonUtils.returnJson(response, "{success:true}");
		}else{
			JsonUtils.returnJson(response, "{success:false,msg:'修改失败,请稍后重新输入!'}");
		}
	}
	@RequestMapping(value = "/base/deleteStation.do")
	public void deleteStation(HttpServletResponse response,String ids) throws Exception{
		System.out.println("传递来的id字符串是" + ids);
		String regex = "-";
		//将字符串分割成数组
		String[] split = ids.split(regex);
		Boolean flag = true;
		for (String id : split) {
			System.out.println("传入的id是:"+id);
			Integer i = stationService.deleteById(id);
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
