package com.xj.service.base.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.xj.common.JsonUtils;
import com.xj.dao.BRailwayadminDao;
import com.xj.domain.base.BRailwayadmin;
import com.xj.domain.base.BRailwayadminQuery;
import com.xj.service.base.BStationadminService;
@Transactional
@Service
public class BStationadminServiceImpl implements BStationadminService{
	@Autowired
	BRailwayadminDao  railwayadminDao;
	public String findAll(BRailwayadminQuery railwayadminQuery) {
			List<BRailwayadmin> list = railwayadminDao.selectByExample(railwayadminQuery);
			int i = railwayadminDao.countByExample(railwayadminQuery);
			Map<String,Object> map = new HashMap<String, Object>();
			map.put("totalCount",i);
			String[] arr = {"createdate","modifydate","createby","modifyby","sourceCompanyname",
					"sourceCompanyshort","coPhone","coPostcode","coFax","coLeader","coAddress",
					"coLinkman","Hash","serialVersionUID"};
			String json = JsonUtils.addJson(list,arr,map);
			json=json.substring(1, json.length()-1);
			//正确的json串{"totalCount":15,"queryList":[{"source":{"sourceCompanyname":"","sourceCompanyid":"1","modifydate":null,"sourceRemark":"","sourceName":"新集一矿","sourceSulphur":0.38,"createby":"","createdate":null,"modifyby":"","sourceCompanyshort":"","sourceId":1},"company":null},{"source":{"sourceCompanyname":"","sourceCompanyid":"2","modifydate":null,"sourceRemark":"","sourceName":"新集二矿","sourceSulphur":0.38,"createby":"","createdate":null,"modifyby":"","sourceCompanyshort":"","sourceId":2},"company":null},{"source":{"sourceCompanyname":"","sourceCompanyid":"3","modifydate":null,"sourceRemark":"","sourceName":"新集三矿","sourceSulphur":0.38,"createby":"","createdate":null,"modifyby":"","sourceCompanyshort":"","sourceId":3},"company":null},{"source":{"sourceCompanyname":"","sourceCompanyid":"1","modifydate":null,"sourceRemark":"","sourceName":"新集四矿","sourceSulphur":0.38,"createby":"","createdate":null,"modifyby":"","sourceCompanyshort":"","sourceId":4},"company":null},{"source":{"sourceCompanyname":"","sourceCompanyid":"2","modifydate":null,"sourceRemark":"","sourceName":"新集五矿","sourceSulphur":0.38,"createby":"","createdate":null,"modifyby":"","sourceCompanyshort":"","sourceId":5},"company":null}]}

			System.out.println("查询到的铁路局集合是:"+json);
		return json;
	}
	public Integer add(BRailwayadmin admin) {
		int i = railwayadminDao.insert(admin);
		return i;
	}
	public Integer update(BRailwayadmin admin) {
		int i = railwayadminDao.updateByPrimaryKey(admin);
		return i;
	}
	public Integer deleteById(String id) {
		int i = railwayadminDao.deleteByPrimaryKey(Integer.parseInt(id));
		return i;
	}

}
