package com.xj.service.base.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.xj.common.UUIDUtils;
import com.xj.dao.BBankDao;
import com.xj.domain.base.BBank;
import com.xj.domain.base.BBankQuery;
import com.xj.service.base.BBankService;
@Service
@Transactional
public class BBankServiceImpl implements BBankService{
	@Autowired
	BBankDao bankDao;
	public int add(BBank bank) {
		bank.setbId(UUIDUtils.returnUUID());
		int flag = bankDao.insert(bank);
		return flag;
	}
	public List<BBank> findByExp(BBankQuery bankQuery) {
		List<BBank> list = bankDao.selectByExample(bankQuery);
		return list;
	}
	public int update(BBank bank) {
		return bankDao.updateByPrimaryKey(bank);
	}
	public Integer deleteById(String id) {
		// TODO Auto-generated method stub
		return bankDao.deleteByPrimaryKey(id);
	}
}
