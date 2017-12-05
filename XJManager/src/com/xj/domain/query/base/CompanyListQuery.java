package com.xj.domain.query.base;

import com.xj.domain.base.BCompany;

public class CompanyListQuery {
	private final String success = "true";
	private BCompany company;
	public BCompany getCompany() {
		return company;
	}
	public void setCompany(BCompany company) {
		this.company = company;
	}
	public String getSuccess() {
		return success;
	}
	
}
