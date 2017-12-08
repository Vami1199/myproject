package com.xj.service.account.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;

import com.xj.common.JsonUtils;
import com.xj.dao.BCustomerDao;
import com.xj.dao.PayPiListDao;
import com.xj.domain.account.PayList;
import com.xj.domain.account.PayPiList;
import com.xj.domain.account.PayPiListQuery;
import com.xj.domain.base.BCompany;
import com.xj.domain.base.BCustomer;
import com.xj.domain.query.account.PayListQueryOwn;
import com.xj.domain.query.account.PayPiListQueryOwn;
import com.xj.service.account.BudgetAccountService;

@Controller
@Transactional
public class BudgetAccountImp implements BudgetAccountService {

	@Autowired
	PayPiListDao payPiListDao;
	@Autowired
	BCustomerDao bCustomerDao;
	
	
	public String findByExp(PayPiListQuery payPiListQuery) {
		List<PayPiList> payPiList = payPiListDao.selectByExample(payPiListQuery);
		System.out.println("payPiList是："+payPiList);
		List<PayPiListQueryOwn> payPiListQueryOwns = new ArrayList<PayPiListQueryOwn>();
		for (PayPiList payPiListEvery : payPiList) {
			PayPiListQueryOwn payPiListQueryOwn = new PayPiListQueryOwn();
			payPiListQueryOwn.setPayPiList(payPiListEvery);
			BCustomer mainName = bCustomerDao.selectByPrimaryKey(payPiListEvery.getPayPiMain());
			BCustomer salerName =bCustomerDao.selectByPrimaryKey(payPiListEvery.getPayPiSale());
			BCustomer buyerName =bCustomerDao.selectByPrimaryKey(payPiListEvery.getPayPiBuy());
			if (mainName != null) {
				payPiListQueryOwn.setMainName(mainName.getcName());
			}
			if (salerName != null) {
				payPiListQueryOwn.setSalerName(salerName.getcName());
			}
			if (buyerName != null) {
				payPiListQueryOwn.setBuyerName(buyerName.getcName());
			}
			payPiListQueryOwns.add(payPiListQueryOwn);
		}
		
		int count = payPiListDao.countByExample(payPiListQuery);
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("totalCount",count);
		String[] arr = {"Hash","serialVersionUID"};
		String json = JsonUtils.addJson(payPiListQueryOwns,arr,map);
		json=json.substring(1, json.length()-1);
		System.out.println("JSON是"+json);
		return json;
	}

	public int add(PayPiList payPiList) {
		int i = payPiListDao.insertSelective(payPiList);
		return i;
	}

	public int update(PayPiList payPiList) {
		int i = payPiListDao.updateByPrimaryKeySelective(payPiList);
		return i;
	}

	public Integer deleteById(Integer id) {
		int i = payPiListDao.deleteByPrimaryKey(id);
		return i;
	}

}
