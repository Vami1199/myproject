package com.xj.service.account.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;

import com.xj.common.JsonUtils;
import com.xj.dao.PayInnerListDao;
import com.xj.domain.account.PayInnerList;
import com.xj.domain.account.PayInnerListQuery;
import com.xj.domain.query.account.PayInnerListQueryOwn;
import com.xj.service.account.PayInnerService;

@Controller
@Transactional
public class PayInnerImpl implements PayInnerService{
	@Autowired
	PayInnerListDao payInnerListDao;
	
	public String findByExp(PayInnerListQuery payInnerListQuery){
		List<PayInnerList> payInnerList =  payInnerListDao.selectByExample(payInnerListQuery);
		System.out.println("payInnerList是："+payInnerList);
		List<PayInnerListQueryOwn> payInnerListQueryOwns = new ArrayList<PayInnerListQueryOwn>();
		for (PayInnerList payInnerListEvery : payInnerList) {
			PayInnerListQueryOwn payInnerListQueryOwn = new PayInnerListQueryOwn();
			payInnerListQueryOwn.setPayInnerList(payInnerListEvery);
		}
		int count = payInnerListDao.countByExample(payInnerListQuery);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("totalCount", count);
		String[] arr = {"Hash","serialVersionUID"};
		String json = JsonUtils.addJson(payInnerListQueryOwns, arr, map);
		json = json.substring(1, json.length()-1);
		System.out.println("JSON是"+json);
		return json;
		
	}

	public int add(PayInnerList payInnerList) {
		int flag = payInnerListDao.insert(payInnerList);
		return flag;
	}

	public int update(PayInnerList payInnerList) {
		int flag = payInnerListDao.updateByPrimaryKeySelective(payInnerList);
		return flag;
	}

	public Integer deleteById(Integer id) {
		int i = payInnerListDao.deleteByPrimaryKey(id);
		return i;
	}

	
}
