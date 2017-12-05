package com.xj.service.account;

import com.xj.domain.account.PayInnerList;
import com.xj.domain.account.PayInnerListQuery;

public interface PayInnerService {
	String findByExp(PayInnerListQuery payInnerListQuery);
	
	int add(PayInnerList payInnerList);
	
	int update(PayInnerList payInnerList);
	
	Integer deleteById(Integer id);
}
