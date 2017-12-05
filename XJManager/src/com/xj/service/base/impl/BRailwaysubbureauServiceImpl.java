package com.xj.service.base.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.xj.common.JsonUtils;
import com.xj.dao.BRailwayadminDao;
import com.xj.dao.BRailwaysubbureauDao;
import com.xj.domain.base.BRailwayadmin;
import com.xj.domain.base.BRailwaysubbureau;
import com.xj.domain.base.BRailwaysubbureauQuery;
import com.xj.domain.query.base.SubbureauListQuery;
import com.xj.service.base.BRailwaysubbureauService;
@Service
@Transactional
public class BRailwaysubbureauServiceImpl implements BRailwaysubbureauService{
	@Autowired
	BRailwaysubbureauDao subbureauDao;
	@Autowired
	BRailwayadminDao adminDao;
	public String findByExp(BRailwaysubbureauQuery subbureauQuery) {
		//查询所有铁路分局
		List<BRailwaysubbureau> list = subbureauDao.selectByExample(subbureauQuery);
		List<SubbureauListQuery> queryList = new ArrayList<SubbureauListQuery>();
		for(BRailwaysubbureau subbureau : list){
			BRailwayadmin railwayadmin = adminDao.selectByPrimaryKey(subbureau.getSubbureauAdminid());
			//创建查询对象
			SubbureauListQuery query = new SubbureauListQuery();
			if(subbureau.getSubbureauIskey() == 1){
				query.setShowKey("是");
			}else{
				query.setShowKey("否");
			}
			query.setRailwaysubbureau(subbureau);
			query.setRailwayadmin(railwayadmin);
			queryList.add(query);
		}
		//查询总条目
		int count = subbureauDao.countByExample(subbureauQuery);
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("totalCount",count);
		String[] arr = {"Hash","serialVersionUID"};
		String json = JsonUtils.addJson(queryList,arr,map);
		json=json.substring(1, json.length()-1);
		return json;
	}
	public int add(BRailwaysubbureau railwaysubbureau) {
		BRailwaysubbureau byKey = subbureauDao.selectByPrimaryKey(railwaysubbureau.getSubbureauId());
		if(byKey != null){
			return 2;
		}
		int flag = subbureauDao.insert(railwaysubbureau);
		return flag;
	}
	public int update(BRailwaysubbureau railwaysubbureau) {
		int flag = subbureauDao.updateByPrimaryKey(railwaysubbureau);
		return flag;
	
	}
	public Integer deleteById(String id) {
		int i = subbureauDao.deleteByPrimaryKey(Integer.parseInt(id));
		return i;
	}
}
