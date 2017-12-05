package com.xj.service.base;

import java.util.List;

import com.xj.domain.base.BBank;
import com.xj.domain.base.BBankQuery;

public interface BBankService {

	int add(BBank bank);

	List<BBank> findByExp(BBankQuery bankQuery);

	int update(BBank bank);

	Integer deleteById(String id);
	
}
