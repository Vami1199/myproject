package com.xj.service.base;

import java.util.List;

import com.xj.domain.base.BCompany;
import com.xj.domain.base.BCompanyQuery;

public interface BCompanyService {

	List<BCompany> findAll(BCompanyQuery companyQuery);

	BCompany findById(String sourceCompanyid);

}
