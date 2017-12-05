package com.xj.service.account;

import com.xj.domain.account.PayList;
import com.xj.domain.account.PayListQuery;

public interface CoalacCountService {
	
	String findByExp (PayListQuery payListQuery);

	int add(PayList payList);

	int update(PayList payList);

	Integer deleteById(String id);
	
}
