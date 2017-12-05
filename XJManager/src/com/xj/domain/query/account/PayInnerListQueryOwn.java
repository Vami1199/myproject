package com.xj.domain.query.account;

import com.xj.domain.account.PayInnerList;
import com.xj.domain.account.PayList;

public class PayInnerListQueryOwn {
	
	private PayInnerList payInnerList;
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


	
	public PayInnerList getPayInnerList() {
		return payInnerList;
	}

	public void setPayInnerList(PayInnerList payInnerList) {
		this.payInnerList = payInnerList;
	}

	public String toString() {
		return "PayInnerListQueryOwn [payInnerList=" + payInnerList + "]";
	}
	
}
