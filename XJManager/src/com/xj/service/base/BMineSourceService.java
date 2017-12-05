package com.xj.service.base;

import com.xj.domain.base.BMinesource;
import com.xj.domain.base.BMinesourceQuery;

public interface BMineSourceService {
	String findAll(BMinesourceQuery sourceQuery);

	int add(BMinesource source);

	int update(BMinesource source);

	Integer deleteById(String id);
}
