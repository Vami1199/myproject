package com.xj.domain.query.base;

import com.xj.domain.base.BCustomer;
import com.xj.domain.base.Recive;

public class ReciveQueryList {
	private Recive recive = new Recive();
	private BCustomer customer = new BCustomer();
	public Recive getRecive() {
		return recive;
	}
	public void setRecive(Recive recive) {
		this.recive = recive;
	}
	public BCustomer getCustomer() {
		return customer;
	}
	public void setCustomer(BCustomer customer) {
		this.customer = customer;
	}
	
}
