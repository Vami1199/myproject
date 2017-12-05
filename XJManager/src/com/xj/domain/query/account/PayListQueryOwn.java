package com.xj.domain.query.account;

import com.xj.domain.account.PayList;

public class PayListQueryOwn {
	
	private PayList payList;
	private String bCustomerName;
	private String reciveName;
	private String departmentName;
	
	
	public String getbCustomerName() {
		return bCustomerName;
	}

	public void setbCustomerName(String bCustomerName) {
		this.bCustomerName = bCustomerName;
	}

	

	public String getReciveName() {
		return reciveName;
	}

	public void setReciveName(String reciveName) {
		this.reciveName = reciveName;
	}

	public String getDepartmentName() {
		return departmentName;
	}

	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}

	public PayList getPayList() {
		return payList;
	}

	public void setPayList(PayList payList) {
		this.payList = payList;
	}

	
	public String toString() {
		return "PayListQueryOwn [payList=" + payList + "]";
	}
	
}
