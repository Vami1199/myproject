package com.xj.web.action.base.custmoer.modules;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.xj.common.JsonUtils;
import com.xj.dao.BCustomerDao;
import com.xj.domain.base.BCustomer;
import com.xj.domain.base.Recive;
import com.xj.domain.base.ReciveQuery;
import com.xj.domain.base.ReciveQuery.Criteria;
import com.xj.domain.query.PageQuery;
import com.xj.domain.query.base.ReciveQueryList;
import com.xj.service.base.ReciveService;

@Controller
public class ReciveAction {
	@Autowired
	ReciveService reciveService;
	@Autowired
	BCustomerDao customerDao;
	@RequestMapping("/base/customer/addRecive.do")
	public void addRecive(HttpServletResponse response,String recCusId,String cusId) throws IOException{
		System.out.println(recCusId);
		System.out.println(cusId);
		String regex = "-";
		String[] split = recCusId.split(regex);
		int flag = 0;
		for (String string : split) {
			flag = reciveService.add(string,cusId);
		}
		if(flag == 1){
			JsonUtils.returnJson(response, "{success:true}");
		}else{
			JsonUtils.returnJson(response, "{success:false,msg:'添加失败,请重新输入!'}");
		}
	}
	
	@RequestMapping("/base/customer/reciveList.do")
	public void reciveList(String customerId,HttpServletResponse response,PageQuery pageQuery) throws IOException{
		ReciveQuery query = new ReciveQuery();
		query.setPageNo(pageQuery.getPage());
		query.setPageSize(pageQuery.getLimit());
		query.setStartRow(pageQuery.getStart());
		Criteria criteria = query.createCriteria();
		criteria.andCusidEqualTo(Integer.parseInt(customerId));
		int totalCount = reciveService.findCountByExp(query);
		List<Recive> list = reciveService.findByExp(query);
		List<ReciveQueryList> queryList = new ArrayList<ReciveQueryList>();
		for (Recive recive : list) {
			ReciveQueryList reciveQueryList = new ReciveQueryList();
			BCustomer customer = customerDao.selectByPrimaryKey(recive.getRecCusId());
			reciveQueryList.setCustomer(customer);
			reciveQueryList.setRecive(recive);
			queryList.add(reciveQueryList);
		}
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("totalCount",totalCount);
		String[] arr = {"Hash","serialVersionUID"};
		String json = JsonUtils.addJson(queryList,arr,map);
		json=json.substring(1, json.length()-1);
		JsonUtils.returnJson(response, json);
	}
	
	@RequestMapping(value = "/base/customer/deleteRecive.do")
	public void deleteRecive(HttpServletResponse response,String ids,String cusID) throws IOException{
		System.out.println("传递来的id字符串是" + ids);
		System.out.println("关联的客户id是:"+cusID);
		String regex = "-";
		//将字符串分割成数组
		String[] split = ids.split(regex);
		Boolean flag = true;
		for (String id : split) {
			System.out.println("传入的id是:"+id);
			Integer i = reciveService.deleteByExp(id,cusID);
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
