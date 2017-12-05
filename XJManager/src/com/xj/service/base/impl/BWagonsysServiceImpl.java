package com.xj.service.base.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.xj.common.JsonUtils;
import com.xj.common.UUIDUtils;
import com.xj.dao.BRailwaywagonsysDao;
import com.xj.domain.base.BRailwaywagonsys;
import com.xj.domain.base.BRailwaywagonsysQuery;
import com.xj.domain.query.base.WagonsysListQuery;
import com.xj.service.base.BWagonsysService;
@Service
@Transactional
public class BWagonsysServiceImpl implements BWagonsysService{
	@Autowired
	BRailwaywagonsysDao railwaywagonsysDao;
	public String findByExp(BRailwaywagonsysQuery query) {
		List<BRailwaywagonsys> list = railwaywagonsysDao.selectByExample(query);
		List<WagonsysListQuery> queryList = new ArrayList<WagonsysListQuery>();
		for (BRailwaywagonsys bRailwaywagonsys : list) {
			WagonsysListQuery listQuery = new WagonsysListQuery();
			listQuery.setWagonsys(bRailwaywagonsys);
			queryList.add(listQuery);
		}
		int i = railwaywagonsysDao.countByExample(query);
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("totalCount",i);
		String json = JsonUtils.addJson(list,null,map);
		json=json.substring(1, json.length()-1);
		return json;
	}
	public int add(BRailwaywagonsys wagonsys) {
		BRailwaywagonsys key = railwaywagonsysDao.selectByPrimaryKey(wagonsys.getRwId());
		if(key != null){
			return 2;
		}
		String id = UUIDUtils.returnUUID();
		wagonsys.setRwId(id);
		int flag = railwaywagonsysDao.insert(wagonsys);
		
		return flag;
	}
	public int update(BRailwaywagonsys wagonsys) {
		int flag = railwaywagonsysDao.updateByPrimaryKey(wagonsys);
		return flag;
	}
	public Integer deleteById(String id) {
		int flag = railwaywagonsysDao.deleteByPrimaryKey(id);
		return flag;
	}

}
