package com.xj.service.base.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.xj.common.UUIDUtils;
import com.xj.dao.BLinkmanDao;
import com.xj.domain.base.BLinkman;
import com.xj.domain.base.BLinkmanQuery;
import com.xj.service.base.BLinkmanService;
@Service
@Transactional
public class BLinkmanServiceImpl implements BLinkmanService{
	@Autowired
	BLinkmanDao linkmanDao;
	public int add(BLinkman linkman) {
		String lid = UUIDUtils.returnUUID();
		linkman.setlId(lid);
		int flag = linkmanDao.insert(linkman);
		return flag;
	}
	public List<BLinkman> findByExp(BLinkmanQuery linkmanQuery) {
		List<BLinkman> list = linkmanDao.selectByExample(linkmanQuery);
		return list;
	}
	public int update(BLinkman linkman) {
		int flag = linkmanDao.updateByPrimaryKey(linkman);
		return flag;
	}
	public Integer deleteById(String id) {
		int flag = linkmanDao.deleteByPrimaryKey(id);
		return flag;
	}
}
