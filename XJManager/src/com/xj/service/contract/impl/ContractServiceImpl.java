package com.xj.service.contract.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.xj.common.JsonUtils;
import com.xj.dao.SalesContractDao;
import com.xj.domain.contract.SalesContract;
import com.xj.domain.contract.SalesContractQuery;
import com.xj.domain.query.contract.ContractListQuery;
import com.xj.service.contract.ContractService;
@Service
@Transactional
public class ContractServiceImpl implements ContractService{
	@Autowired
	SalesContractDao contractDao;
	public String findByExp(SalesContractQuery contractQuery) {
		List<SalesContract> list = contractDao.selectByExample(contractQuery);
		List<ContractListQuery> queryList = new ArrayList<ContractListQuery>();
		for(SalesContract contract:list){
			System.out.println("查出的合同信息是:"+contract);
			ContractListQuery query = new ContractListQuery();
			query.setSalesContract(contract);
			queryList.add(query);
		}
		int count = contractDao.countByExample(contractQuery);
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("totalCount",count);
		String[] arr = {"Hash","serialVersionUID"};
		String json = JsonUtils.addJson(queryList,arr,map);
		json=json.substring(1, json.length()-1);
		return json;
	}

}
