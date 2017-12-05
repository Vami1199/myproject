package com.xj.service.base.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.xj.dao.BProvinceDao;
import com.xj.domain.base.BProvince;
import com.xj.domain.base.BProvinceQuery;
import com.xj.service.base.BProvinceService;
@Service
@Transactional
public class BProvinceServiceImpl implements BProvinceService{
	@Autowired
	BProvinceDao provinceDao;
	public List<BProvince> findAll(BProvinceQuery provinceQuery) {
		List<BProvince> list = provinceDao.selectByExample(provinceQuery);
		return list;
	}

}
