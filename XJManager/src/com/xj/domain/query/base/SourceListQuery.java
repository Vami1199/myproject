package com.xj.domain.query.base;

import com.xj.domain.base.BCompany;
import com.xj.domain.base.BMinesource;
/**
 * 矿别信息的封装查询类
 * @author Administrator
 *
 */
public class SourceListQuery {
	private BMinesource source;
	private BCompany company;
	
	public BMinesource getSource() {
		return source;
	}
	public void setSource(BMinesource source) {
		this.source = source;
	}
	public BCompany getCompany() {
		return company;
	}
	public void setCompany(BCompany company) {
		this.company = company;
	}
	@Override
	public String toString() {
		return "SourceListQuery [source=" + source + ", company=" + company + "]";
	}
	
}
