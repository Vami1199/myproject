package com.xj.service.contract;

import com.xj.domain.contract.SalesContractQuery;

public interface ContractService {

	String findByExp(SalesContractQuery contractQuery);
	
}
