package com.xj.domain.query.base;

import com.xj.domain.base.BMinesource;
import com.xj.domain.base.BStartstation;
import com.xj.domain.base.BStation;

public class StartListQuery {
	private BStartstation start;
	private BMinesource source;
	private BStation station;
	public BStartstation getStart() {
		return start;
	}
	public void setStart(BStartstation start) {
		this.start = start;
	}
	public BMinesource getSource() {
		return source;
	}
	public void setSource(BMinesource source) {
		this.source = source;
	}
	public BStation getStation() {
		return station;
	}
	public void setStation(BStation station) {
		this.station = station;
	}
	
}
