package com.xj.domain.query.base;

import com.xj.domain.base.BCustomer;
import com.xj.domain.base.BStation;

public class CustomerListQuery {
	private BCustomer customer;
	private BStation station;
	private String coId;
	private String coName;
	private String provinceName;

	public String getProvinceName() {
		return provinceName;
	}

	public void setProvinceName(String provinceName) {
		this.provinceName = provinceName;
	}

	public BStation getStation() {
		return station;
	}

	public void setStation(BStation station) {
		this.station = station;
	}

	public String getCoId() {
		return coId;
	}

	public void setCoId(String coId) {
		this.coId = coId;
	}

	public String getCoName() {
		return coName;
	}

	public void setCoName(String coName) {
		this.coName = coName;
	}

	public BCustomer getCustomer() {
		return customer;
	}

	public void setCustomer(BCustomer customer) {
		this.customer = customer;
	}
	
}
