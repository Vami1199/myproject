package com.xj.service.base.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.xj.common.JsonUtils;
import com.xj.dao.BMinesourceDao;
import com.xj.dao.BStartstationDao;
import com.xj.domain.base.BMinesource;
import com.xj.domain.base.BStartstation;
import com.xj.domain.base.BStartstationQuery;
import com.xj.domain.query.base.StartListQuery;
import com.xj.service.base.BStartService;
@Service
@Transactional
public class BStartServiceImpl implements BStartService{
	@Autowired
	BStartstationDao startstationDao;
	@Autowired
	BMinesourceDao sourceDao;
	public String findByExp(BStartstationQuery query) {
		List<BStartstation> list = startstationDao.selectByExample(query);
		List<StartListQuery> queryList = new ArrayList<StartListQuery>();
		for (BStartstation start : list) {
			StartListQuery listQuery = new StartListQuery();
			BMinesource source = sourceDao.selectByPrimaryKey(start.getStartSourceid());
			listQuery.setStart(start);
			listQuery.setSource(source);
			queryList.add(listQuery);
		}
		int i = startstationDao.countByExample(query);
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("totalCount",i);
		String json = JsonUtils.addJson(queryList,null,map);
		json=json.substring(1, json.length()-1);
		return json;
	}
	public int add(BStartstation start) {
		int flag = startstationDao.insert(start);
		return flag;
	}
	public int update(BStartstation start) {
		int flag = startstationDao.updateByPrimaryKey(start);
		return flag;
	}
	public Integer deleteById(String id) {
		int flag = startstationDao.deleteByPrimaryKey(Integer.parseInt(id));
		return flag;
	}

}
