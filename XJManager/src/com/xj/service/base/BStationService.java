package com.xj.service.base;

import com.xj.domain.base.BStation;
import com.xj.domain.base.BStationQuery;

public interface BStationService {

	String findByExp(BStationQuery stationQuery);

	int insert(BStation station);

	int update(BStation station);

	Integer deleteById(String id);

}
