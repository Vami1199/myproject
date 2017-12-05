package com.xj.domain.query.contract;

import com.xj.domain.contract.SalesContract;

/**
 * 合同的查询对象
 * @author Administrator
 *
 */
public class ContractListQuery {
	private SalesContract salesContract;
	private String customerShort;
	private String startDate;
	private String endDate;
	private String year;
	private String makeTime;
	public String getYear() {
		return year;
	}

	public void setYear(String year) {
		this.year = year;
	}

	public String getMakeTime() {
		return makeTime;
	}

	public void setMakeTime(String makeTime) {
		this.makeTime = makeTime;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public String getCustomerShort() {
		return customerShort;
	}

	public void setCustomerShort(String customerShort) {
		this.customerShort = customerShort;
	}

	public SalesContract getSalesContract() {
		return salesContract;
	}

	public void setSalesContract(SalesContract salesContract) {
		this.salesContract = salesContract;
	}

	@Override
	public String toString() {
		return "ContractListQuery [salesContract=" + salesContract
				+ ", customerShort=" + customerShort + ", startDate="
				+ startDate + ", endDate=" + endDate + "]";
	}
	
}
