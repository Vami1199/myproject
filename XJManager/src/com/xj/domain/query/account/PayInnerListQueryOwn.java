package com.xj.domain.query.account;

import com.xj.domain.account.PayInnerList;
import com.xj.domain.account.PayList;

public class PayInnerListQueryOwn {
	
	private PayInnerList payInnerList;
	private String mainName;//单位名称
	private String salerName;//销货单位
	private String buyerName;//购货单位

	
	
	
	public String getBuyerName() {
		return buyerName;
	}

	public void setBuyerName(String buyerName) {
		this.buyerName = buyerName;
	}

	public String getSalerName() {
		return salerName;
	}
	
	public void setSalerName(String salerName) {
		this.salerName = salerName;
	}
	public String getMainName() {
		return mainName;
	}
	
	public void setMainName(String mainName) {
		this.mainName = mainName;
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
