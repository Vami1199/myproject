package com.xj.service.account;

import com.xj.domain.account.PayPiList;
import com.xj.domain.account.PayPiListQuery;

public interface BudgetAccountService {
	String findByExp (PayPiListQuery payPiListQuery);

	int add(PayPiList payPiList);

	int update(PayPiList payPiList);

	Integer deleteById(Integer id);
}
