package com.xj.service.base.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.xj.common.JsonUtils;
import com.xj.dao.BMinesourceDao;
import com.xj.domain.base.BCompany;
import com.xj.domain.base.BMinesource;
import com.xj.domain.base.BMinesourceQuery;
import com.xj.domain.query.base.SourceListQuery;
import com.xj.service.base.BCompanyService;
import com.xj.service.base.BMineSourceService;
@Service
@Transactional

public class BMineSourceServcieImpl implements BMineSourceService{
	@Autowired
	BMinesourceDao sourceDao;
	@Resource
	BCompanyService companyService;
	public String findAll(BMinesourceQuery sourceQuery) {
		System.out.println("查询的矿别对象是:" + sourceQuery.getPageNo()+"..."+sourceQuery.getPageSize()+"..."+sourceQuery.getStartRow());
		List<BMinesource> list = sourceDao.selectByExample(sourceQuery);
		List<SourceListQuery> queryList = new ArrayList<SourceListQuery>();
		for(BMinesource source : list){
			SourceListQuery query = new SourceListQuery();
			query.setSource(source);
			BCompany company = companyService.findById(source.getSourceCompanyid());
			System.out.println("查询到的公司是:"+company);
			query.setCompany(company);
			queryList.add(query);
		}
			int i = sourceDao.countByExample(sourceQuery);
			Map<String,Object> map = new HashMap<String, Object>();
			map.put("totalCount",i);
			String[] arr = {"createdate","modifydate","createby","modifyby","sourceCompanyname",
					"sourceCompanyshort","coPhone","coPostcode","coFax","coLeader","coAddress",
					"coLinkman","Hash","serialVersionUID"};
			String json = JsonUtils.addJson(queryList,arr, map);
			json=json.substring(1, json.length()-1);
			//正确的json串{"totalCount":15,"queryList":[{"source":{"sourceCompanyname":"","sourceCompanyid":"1","modifydate":null,"sourceRemark":"","sourceName":"新集一矿","sourceSulphur":0.38,"createby":"","createdate":null,"modifyby":"","sourceCompanyshort":"","sourceId":1},"company":null},{"source":{"sourceCompanyname":"","sourceCompanyid":"2","modifydate":null,"sourceRemark":"","sourceName":"新集二矿","sourceSulphur":0.38,"createby":"","createdate":null,"modifyby":"","sourceCompanyshort":"","sourceId":2},"company":null},{"source":{"sourceCompanyname":"","sourceCompanyid":"3","modifydate":null,"sourceRemark":"","sourceName":"新集三矿","sourceSulphur":0.38,"createby":"","createdate":null,"modifyby":"","sourceCompanyshort":"","sourceId":3},"company":null},{"source":{"sourceCompanyname":"","sourceCompanyid":"1","modifydate":null,"sourceRemark":"","sourceName":"新集四矿","sourceSulphur":0.38,"createby":"","createdate":null,"modifyby":"","sourceCompanyshort":"","sourceId":4},"company":null},{"source":{"sourceCompanyname":"","sourceCompanyid":"2","modifydate":null,"sourceRemark":"","sourceName":"新集五矿","sourceSulphur":0.38,"createby":"","createdate":null,"modifyby":"","sourceCompanyshort":"","sourceId":5},"company":null}]}

			System.out.println("查询到的矿别集合是:"+json);
		return json;
	}
	public int add(BMinesource source) {
		int i = sourceDao.insert(source);
		return i;
	}
	public int update(BMinesource source) {
		int i = sourceDao.updateByPrimaryKey(source);
		return i;
	}
	public Integer deleteById(String id) {
		int i = sourceDao.deleteByPrimaryKey(Integer.parseInt(id));
		return i;
	}
	
}
