package com.xj.service.base;

import com.xj.domain.base.BRailwaywagonsys;
import com.xj.domain.base.BRailwaywagonsysQuery;

public interface BWagonsysService {

	String findByExp(BRailwaywagonsysQuery query);

	int add(BRailwaywagonsys wagonsys);

	int update(BRailwaywagonsys wagonsys);

	Integer deleteById(String id);

}
