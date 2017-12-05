package com.xj.service.base;

import com.xj.domain.base.BRailwayadmin;
import com.xj.domain.base.BRailwayadminQuery;

public interface BStationadminService {

	String findAll(BRailwayadminQuery railwayadminQuery);

	Integer add(BRailwayadmin admin);

	Integer update(BRailwayadmin admin);

	Integer deleteById(String id);


}
