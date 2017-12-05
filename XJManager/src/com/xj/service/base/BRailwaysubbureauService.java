package com.xj.service.base;

import com.xj.domain.base.BRailwaysubbureau;
import com.xj.domain.base.BRailwaysubbureauQuery;

public interface BRailwaysubbureauService {

	String findByExp(BRailwaysubbureauQuery subbureauQuery);

	int add(BRailwaysubbureau railwaysubbureau);

	int update(BRailwaysubbureau railwaysubbureau);

	Integer deleteById(String id);

}
