package com.xj.web.action.base.custmoer;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.xj.common.JsonUtils;
import com.xj.dao.BBankDao;
import com.xj.dao.BLinkmanDao;
import com.xj.dao.ReciveDao;
import com.xj.domain.base.BBankQuery;
import com.xj.domain.base.BBankQuery.Criteria;
import com.xj.domain.base.BCustomer;
import com.xj.domain.base.BLinkmanQuery;
import com.xj.domain.base.BStation;
import com.xj.domain.base.ReciveQuery;
import com.xj.domain.query.base.CustomerListQuery;
import com.xj.service.base.BCustomerService;
/***
 * 客户管理CRUD
 * @author LXY
 *
 */
@Controller
public class Customer {
	@Autowired
	BCustomerService customerService;
	@Autowired
	BBankDao bankDao;
	@Autowired
	BLinkmanDao linkmanDao;
	@Autowired
	ReciveDao reciveDao;
	@RequestMapping(value="/base/addCustomer.do")
	public void addCustomer(HttpServletResponse response,CustomerListQuery listQuery) throws IOException{
		BCustomer customer = listQuery.getCustomer();
		BStation station = listQuery.getStation();
		String coName = listQuery.getCoName();
		String coId = listQuery.getCoId();
		customer.setcSid(station.getsName());
		customer.setcInnerid(coId);
		customer.setcInnername(coName);
		int flag = customerService.add(customer);
		if(flag == 1){
			JsonUtils.returnJson(response, "{success:true}");
		}else if(flag == 2){
			JsonUtils.returnJson(response, "{success:false,msg:'客户编号重复,请重新输入!'}");
		}else{
			JsonUtils.returnJson(response, "{success:false,msg:'添加失败,请重新输入!'}");
		}
	}
	
	@RequestMapping(value = "/base/updateCustomer.do")
	public void updateCustomer(HttpServletResponse response,CustomerListQuery listQuery) throws IOException{
		BCustomer customer = listQuery.getCustomer();
		BStation station = listQuery.getStation();
		String coName = listQuery.getCoName();
		String coId = listQuery.getCoId();
		customer.setcSid(station.getsName());
		customer.setcInnerid(coId);
		customer.setcInnername(coName);
		int flag = customerService.update(customer);
		if(flag == 1){
			JsonUtils.returnJson(response, "{success:true}");
		}else{
			JsonUtils.returnJson(response, "{success:false,msg:'添加修改,请重试!'}");
		}
	}
	
	@RequestMapping(value = "/base/deleteCustomer.do")
	public void deleteCustomer(HttpServletResponse response,String ids) throws IOException{
		System.out.println("传递来的id字符串是" + ids);
		String regex = "-";
		//将字符串分割成数组
		String[] split = ids.split(regex);
		Boolean flag = true;
		for (String id : split) {
			System.out.println("传入的id是:"+id);
			Integer i = customerService.deleteById(id);
			//删除关联的银行
			BBankQuery bankQuery = new BBankQuery();
			Criteria criteria = bankQuery.createCriteria();
			criteria.andBCidEqualTo(Integer.parseInt(id));
			bankDao.deleteByExample(bankQuery);
			//删除关联的联系人
			BLinkmanQuery linkmanQuery = new BLinkmanQuery();
			com.xj.domain.base.BLinkmanQuery.Criteria linkmanCriteria = linkmanQuery.createCriteria();
			linkmanCriteria.andLCidEqualTo(Integer.parseInt(id));
			linkmanDao.deleteByExample(linkmanQuery);
			//删除关联的收货单位
			ReciveQuery reciveQuery = new ReciveQuery();
			com.xj.domain.base.ReciveQuery.Criteria reciveCriteria = reciveQuery.createCriteria();
			reciveCriteria.andCusidEqualTo(Integer.parseInt(id));
			reciveDao.deleteByExample(reciveQuery);
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
