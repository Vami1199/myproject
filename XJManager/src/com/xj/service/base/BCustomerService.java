package com.xj.service.base;

import com.xj.domain.base.BCustomer;
import com.xj.domain.base.BCustomerQuery;

public interface BCustomerService {

	int add(BCustomer customer);

	String findByExp(BCustomerQuery customerQuery);

	int update(BCustomer customer);

	Integer deleteById(String id);

}
