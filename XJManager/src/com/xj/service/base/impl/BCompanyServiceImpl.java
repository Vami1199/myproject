package com.xj.service.base.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.xj.dao.BCompanyDao;
import com.xj.domain.base.BCompany;
import com.xj.domain.base.BCompanyQuery;
import com.xj.service.base.BCompanyService;
@Service
@Transactional
public class BCompanyServiceImpl implements BCompanyService{
	@Autowired
	BCompanyDao companyDao;
	public List<BCompany> findAll(BCompanyQuery companyQuery) {
		List<BCompany> list = companyDao.selectByExample(companyQuery);
		
		
		return list;
	}
	public BCompany findById(String sourceCompanyid) {
		BCompany company = companyDao.selectByPrimaryKey(sourceCompanyid);
		return company;
	}

}
