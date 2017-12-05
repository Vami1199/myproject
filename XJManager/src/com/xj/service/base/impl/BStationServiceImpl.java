package com.xj.service.base.impl;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.xj.common.JsonUtils;
import com.xj.dao.BProvinceDao;
import com.xj.dao.BRailwayadminDao;
import com.xj.dao.BStationDao;
import com.xj.domain.base.BProvince;
import com.xj.domain.base.BRailwayadmin;
import com.xj.domain.base.BStation;
import com.xj.domain.base.BStationQuery;
import com.xj.domain.query.base.StationListQuery;
import com.xj.service.base.BStationService;

@Service
@Transactional
public class BStationServiceImpl implements BStationService{
	@Autowired
	BStationDao stationDao;
	@Autowired 
	BRailwayadminDao railwayadminDao;
	@Autowired
	BProvinceDao provinceDao;
	public String findByExp(BStationQuery stationQuery) {
		List<BStation> list = stationDao.selectByExample(stationQuery);
		List<StationListQuery> queryList = new ArrayList<StationListQuery>();
		for (BStation bStation : list) {
			StationListQuery query = new StationListQuery();
			BRailwayadmin railwayadmin = railwayadminDao.selectByPrimaryKey(bStation.getsRailwaystation());
			BProvince province = provinceDao.selectByPrimaryKey(bStation.getsProvince());
			query.setProvince(province);
			query.setStationadmin(railwayadmin);
			query.setStation(bStation);
			queryList.add(query);
		}
		int count = stationDao.countByExample(stationQuery);
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("totalCount",count);
		String[] arr = {"Hash","serialVersionUID"};
		String json = JsonUtils.addJson(queryList,arr,map);
		json=json.substring(1, json.length()-1);
		return json;
	}
	public int insert(BStation station) {
		int flag = stationDao.insert(station);
		return flag;
	}
	public int update(BStation station) {
		int flag = stationDao.updateByPrimaryKey(station);
		return flag;
	}
	public Integer deleteById(String id) {
		int i = stationDao.deleteByPrimaryKey(Integer.parseInt(id));
		return i;
	}

}
