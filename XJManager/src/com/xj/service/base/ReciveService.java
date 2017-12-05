package com.xj.service.base;

import java.util.List;

import com.xj.domain.base.Recive;
import com.xj.domain.base.ReciveQuery;

public interface ReciveService {

	int add(String string, String cusId);

	List<Recive> findByExp(ReciveQuery query);

	int findCountByExp(ReciveQuery query);

	Integer deleteByExp(String id, String cusID);
	
}
