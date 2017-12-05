package com.xj.service.base.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.xj.dao.BCoaltypeDao;
import com.xj.domain.base.BCoaltype;
import com.xj.domain.base.BCoaltypeQuery;
import com.xj.service.base.BCoalTypeService;
@Service
@Transactional
public class BCoalTypeServiceImpl implements BCoalTypeService{
	@Resource
	BCoaltypeDao coaltypeDao;
	public List<BCoaltype> findAll(BCoaltypeQuery coaltypeQuery) {
		List<BCoaltype> list = coaltypeDao.selectByExampleWithBLOBs(coaltypeQuery);
		return list;
	}

}
