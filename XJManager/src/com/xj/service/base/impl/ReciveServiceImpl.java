package com.xj.service.base.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.xj.common.UUIDUtils;
import com.xj.dao.ReciveDao;
import com.xj.domain.base.Recive;
import com.xj.domain.base.ReciveQuery;
import com.xj.domain.base.ReciveQuery.Criteria;
import com.xj.service.base.ReciveService;
@Service
@Transactional
public class ReciveServiceImpl implements ReciveService{
	@Autowired
	ReciveDao reciveDao;
	public int add(String string, String cusId) {
		Recive recive = new Recive();
		recive.setCusid(Integer.parseInt(cusId));
		recive.setRecCusId(Integer.parseInt(string));
		recive.setRecid(UUIDUtils.returnUUID());
		int flag = reciveDao.insert(recive);
		return flag;
	}
	public List<Recive> findByExp(ReciveQuery query) {
		List<Recive> list = reciveDao.selectByExample(query);
		return list;
	}
	public int findCountByExp(ReciveQuery query) {
		int i = reciveDao.countByExample(query);
		return i;
	}
	public Integer deleteByExp(String id, String cusID) {
		ReciveQuery query = new ReciveQuery();
		Criteria criteria = query.createCriteria();
		criteria.andCusidEqualTo(Integer.parseInt(cusID));
		criteria.andRecCusIdEqualTo(Integer.parseInt(id));
		int i = reciveDao.deleteByExample(query);
		return i;
	}

}
