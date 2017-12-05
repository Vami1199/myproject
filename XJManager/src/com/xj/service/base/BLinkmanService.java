package com.xj.service.base;

import java.util.List;

import com.xj.domain.base.BLinkman;
import com.xj.domain.base.BLinkmanQuery;

public interface BLinkmanService {

	int add(BLinkman linkman);

	List<BLinkman> findByExp(BLinkmanQuery linkmanQuery);

	int update(BLinkman linkman);

	Integer deleteById(String id);

}
