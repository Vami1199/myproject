package com.xj.service.base;


import com.xj.domain.base.BRailwaywagon;
import com.xj.domain.base.BRailwaywagonQuery;

public interface BWagonService {

	String findByExp(BRailwaywagonQuery wagonQuery);

	int add(BRailwaywagon wagon);

	int update(BRailwaywagon wagon);

	Integer deleteById(String id);

}
