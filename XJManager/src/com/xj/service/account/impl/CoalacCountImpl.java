package com.xj.service.account.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;

import com.fr.web.core.A.b;
import com.xj.common.JsonUtils;
import com.xj.dao.BCompanyDao;
import com.xj.dao.BCustomerDao;
import com.xj.dao.PayListDao;
import com.xj.domain.account.PayList;
import com.xj.domain.account.PayListQuery;
import com.xj.domain.base.BCompany;
import com.xj.domain.base.BCustomer;
import com.xj.domain.query.account.PayListQueryOwn;
import com.xj.service.account.CoalacCountService;



@Controller
@Transactional
public class CoalacCountImpl implements CoalacCountService{
@Autowired
PayListDao payListDao;
@Autowired
BCustomerDao bCustomerDao;
@Autowired
BCompanyDao bCompanyDao;

	public String findByExp(PayListQuery payListQuery) {
		List<PayList> payList = payListDao.selectByExample(payListQuery);
		System.out.println("payList是"+payList);
		
		List<PayListQueryOwn> payListQueryOwns=new ArrayList<PayListQueryOwn>();
		for (PayList payListEvery : payList) {
			PayListQueryOwn payListQueryOwn=new PayListQueryOwn();
			payListQueryOwn.setPayList(payListEvery);
			BCustomer bcustomer = bCustomerDao.selectByPrimaryKey(payListEvery.getPayCustomerid());
			BCustomer reciver = bCustomerDao.selectByPrimaryKey(payListEvery.getPayReciever());
			BCompany company = bCompanyDao.selectByPrimaryKey(payListEvery.getPayDepartment());
			if(bcustomer!=null){
				payListQueryOwn.setbCustomerName(bcustomer.getcName());
			}
			if(reciver!=null){
				payListQueryOwn.setReciveName(reciver.getcName());
			}
			if(company!=null){
				payListQueryOwn.setDepartmentName(company.getCoName());
			}
			payListQueryOwns.add(payListQueryOwn);
		}
		
		int count = payListDao.countByExample(payListQuery);
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("totalCount",count);
		String[] arr = {"Hash","serialVersionUID"};
		String json = JsonUtils.addJson(payListQueryOwns,arr,map);
		json=json.substring(1, json.length()-1);
		System.out.println("JSON是"+json);
		return json;
		
	}

	public int add(PayList payList) {
		int flag = payListDao.insert(payList);	
		return flag;
	}

	public int update(PayList payList) {
		int flag=payListDao.updateByPrimaryKeySelective(payList);
		return flag;
	}
	/**
	 * 删除铁运结算
	 */
	public Integer deleteById(String id) {
		int i = payListDao.deleteByPrimaryKey(id);
		return i;
	}
}
