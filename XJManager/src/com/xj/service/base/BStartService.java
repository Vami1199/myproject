package com.xj.service.base;

import com.xj.domain.base.BStartstation;
import com.xj.domain.base.BStartstationQuery;

public interface BStartService {

	String findByExp(BStartstationQuery query);

	int add(BStartstation start);

	int update(BStartstation start);

	Integer deleteById(String id);

}
