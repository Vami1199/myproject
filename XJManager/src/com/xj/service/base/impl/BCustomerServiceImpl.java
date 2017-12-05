package com.xj.service.base.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.xj.common.JsonUtils;
import com.xj.common.UUIDUtils;
import com.xj.dao.BBankDao;
import com.xj.dao.BCustomerDao;
import com.xj.dao.BProvinceDao;
import com.xj.domain.base.BBank;
import com.xj.domain.base.BBankQuery;
import com.xj.domain.base.BBankQuery.Criteria;
import com.xj.domain.base.BCustomer;
import com.xj.domain.base.BCustomerQuery;
import com.xj.domain.base.BProvince;
import com.xj.domain.query.base.CustomerListQuery;
import com.xj.service.base.BCustomerService;
@Service
@Transactional
public class BCustomerServiceImpl implements BCustomerService{
	@Autowired
	BCustomerDao customerDao;
	@Autowired
	BProvinceDao provinceDao;
	@Autowired
	BBankDao bankDao;
	public int add(BCustomer customer) {
		//把客户信息的银行信息存入银行表
		BBank bank = new BBank();
		bank.setbId(UUIDUtils.returnUUID());
		bank.setbCid(customer.getcId());
		bank.setbName(customer.getcBank());
		bank.setbAccount(customer.getcAccount());
		bankDao.insert(bank);
		BCustomer key = customerDao.selectByPrimaryKey(customer.getcId());
		if(key!=null){
			return 2;
		}
		int flag = customerDao.insert(customer);
		return flag;
	}
	public String findByExp(BCustomerQuery customerQuery) {
		List<BCustomer> list = customerDao.selectByExample(customerQuery);
		List<CustomerListQuery> queryList = new ArrayList<CustomerListQuery>();
		for(BCustomer customer:list){
			CustomerListQuery query = new CustomerListQuery();
			if(customer.getcProvince() != null && StringUtils.isNotBlank(customer.getcProvince())){
				BProvince province = provinceDao.selectByPrimaryKey(Integer.parseInt(customer.getcProvince()));
				query.setProvinceName(province.getpName());
			}
			query.setCustomer(customer);
			queryList.add(query);
		}
		int count = customerDao.countByExample(customerQuery);
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("totalCount",count);
		String[] arr = {"Hash","serialVersionUID"};
		String json = JsonUtils.addJson(queryList,arr,map);
		json=json.substring(1, json.length()-1);
		return json;
	}
	public int update(BCustomer customer) {
		BBank bank = new BBank();
		bank.setbCid(customer.getcId());
		bank.setbName(customer.getcBank());
		bank.setbAccount(customer.getcAccount());
		BBankQuery bankQuery = new BBankQuery();
		Criteria criteria = bankQuery.createCriteria();
		//由于页面上没有银行的id,无法通过id修改银行数据,理论上银行账号不会重复,所以用银行账号作为条件
		criteria.andBAccountEqualTo(bank.getbAccount());
		bankDao.updateByExample(bank,bankQuery);
		int flag = customerDao.updateByPrimaryKey(customer);
		return flag;
	}
	public Integer deleteById(String id) {
		int flag = customerDao.deleteByPrimaryKey(Integer.parseInt(id));
		return flag;
	}
}
