package com.xj.domain.query.base;

import com.xj.domain.base.BProvince;
import com.xj.domain.base.BRailwayadmin;
import com.xj.domain.base.BStation;

public class StationListQuery {
	private BStation station;
	private BRailwayadmin stationadmin;
	private BProvince province;
	public BProvince getProvince() {
		return province;
	}
	public void setProvince(BProvince province) {
		this.province = province;
	}
	public BStation getStation() {
		return station;
	}
	public void setStation(BStation station) {
		this.station = station;
	}
	public BRailwayadmin getStationadmin() {
		return stationadmin;
	}
	public void setStationadmin(BRailwayadmin stationadmin) {
		this.stationadmin = stationadmin;
	}
	
}
