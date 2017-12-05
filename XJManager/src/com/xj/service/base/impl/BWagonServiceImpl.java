package com.xj.service.base.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.xj.common.JsonUtils;
import com.xj.dao.BRailwaywagonDao;
import com.xj.domain.base.BRailwaywagon;
import com.xj.domain.base.BRailwaywagonQuery;
import com.xj.domain.query.base.WagonListQuery;
import com.xj.service.base.BWagonService;
@Service
@Transactional
public class BWagonServiceImpl implements BWagonService{
	@Autowired
	BRailwaywagonDao wagonDao;
	public String findByExp(BRailwaywagonQuery wagonQuery) {
		List<BRailwaywagon> list = wagonDao.selectByExample(wagonQuery);
		List<WagonListQuery> queryList = new ArrayList<WagonListQuery>();
		for (BRailwaywagon bRailwaywagon : list) {
			WagonListQuery query = new WagonListQuery();
			query.setWagon(bRailwaywagon);
			queryList.add(query);
		}
		int i = wagonDao.countByExample(wagonQuery);
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("totalCount",i);
		String json = JsonUtils.addJson(list,null,map);
		json=json.substring(1, json.length()-1);
		return json;
	}
	public int add(BRailwaywagon wagon) {
		
			BRailwaywagon byPrimaryKey = wagonDao.selectByPrimaryKey(wagon.getCsId());
			if(byPrimaryKey != null){
				return 2;
			}
		
			int i = wagonDao.insert(wagon);
			return i;
		
	}
	public int update(BRailwaywagon wagon) {
		int i = wagonDao.updateByPrimaryKey(wagon);
		return i;
	}
	public Integer deleteById(String id) {
		int i = wagonDao.deleteByPrimaryKey(Integer.parseInt(id));
		return i;
	}

}
