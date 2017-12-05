package com.xj.domain.query.base;

import com.xj.domain.base.BRailwayadmin;
import com.xj.domain.base.BRailwaysubbureau;

/**
 * 铁路分局管理
 * @author Administrator
 *
 */
public class SubbureauListQuery {
	private BRailwaysubbureau railwaysubbureau;
	private BRailwayadmin railwayadmin;
	private String showKey;
	public String getShowKey() {
		return showKey;
	}
	public void setShowKey(String showKey) {
		this.showKey = showKey;
	}
	public BRailwaysubbureau getRailwaysubbureau() {
		return railwaysubbureau;
	}
	public void setRailwaysubbureau(BRailwaysubbureau railwaysubbureau) {
		this.railwaysubbureau = railwaysubbureau;
	}
	public BRailwayadmin getRailwayadmin() {
		return railwayadmin;
	}
	public void setRailwayadmin(BRailwayadmin railwayadmin) {
		this.railwayadmin = railwayadmin;
	}
	
}
