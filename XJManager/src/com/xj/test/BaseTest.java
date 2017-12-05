package com.xj.test;


import java.text.ParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.xj.common.DateUtils;
import com.xj.common.JsonUtils;
import com.xj.common.SpringJunitTest;
import com.xj.dao.BCoaltypeDao;
import com.xj.dao.BCompanyDao;
import com.xj.dao.BCustomerDao;
import com.xj.dao.BMinesourceDao;
import com.xj.dao.BProductsDao;
import com.xj.dao.SalesContractDao;
import com.xj.domain.base.BCoaltype;
import com.xj.domain.base.BCompany;
import com.xj.domain.base.BMinesource;
import com.xj.domain.base.BMinesourceQuery;
import com.xj.domain.base.BProducts;
import com.xj.domain.base.BProductsQuery;
import com.xj.domain.contract.SalesContract;
import com.xj.domain.contract.SalesContractQuery;
import com.xj.domain.contract.SalesContractQuery.Criteria;
import com.xj.domain.query.base.ProductListQuery;
import com.xj.domain.query.base.SourceListQuery;
import com.xj.domain.query.contract.ContractListQuery;
import com.xj.service.base.BCompanyService;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import net.sf.json.JsonConfig;

/**
 * 测试基础数据
 * @author Administrator
 *
 */
public class BaseTest extends SpringJunitTest{
	public static void main(String[] args) {
	}
	@Resource
	private BCustomerDao customerDao;
	@Autowired
	private BProductsDao pd;
	@Autowired
	BCompanyDao companyDao;
	@Autowired
	BCoaltypeDao coaltypeDao;
	@Autowired
	BCompanyService companyService;
	@Autowired
	BMinesourceDao sourceDao;
	@Test
	public void testM(){
				BProductsQuery productsQuery = new BProductsQuery();
				//首先获取所有的产品信息
				List<BProducts> list = pd.selectByExampleWithBLOBs(productsQuery);
				//创建query对象集合
				List<ProductListQuery> listQuery = new ArrayList<ProductListQuery>();
				//遍历list集合
				for(BProducts products:list){
					//将BProducts存入ProductsListQuery中
					ProductListQuery productListQuery = new ProductListQuery();
					productListQuery.setProducts(products);
					//通过主键查询到对应的对象,也就是商品信息里的Productionunit
					BCompany company = companyDao.selectByPrimaryKey(products.getpProductionunit());
					//将公司名存入查询对象中
					productListQuery.setCoName(company.getCoName());
					BCoaltype coaltype = coaltypeDao.selectByPrimaryKey(products.getpCoaltype());
					productListQuery.setCtName(coaltype.getCtName());
					listQuery.add(productListQuery);
					
				}
		String[] arr = {"ProductListQuery","Hash","modifydate","createby","createdate","modifyby","pRemark"};
		//把集合转为json
		String jsonList = JsonUtils.createJsonList(listQuery,arr);
		System.out.println(jsonList);
	}
	@Test
	public void test(){
		BMinesourceQuery sourceQuery = new BMinesourceQuery();
		sourceQuery.setPageNo(1);
		sourceQuery.setPageSize(5);
		sourceQuery.setStartRow(0);
		System.out.println("查询的矿别对象是:" + sourceQuery.getPageNo()+"..."+sourceQuery.getPageSize()+"..."+sourceQuery.getStartRow());
		List<BMinesource> list = sourceDao.selectByExample(sourceQuery);
		List<SourceListQuery> queryList = new ArrayList<SourceListQuery>();
		for(BMinesource source : list){
			SourceListQuery query = new SourceListQuery();
			query.setSource(source);
			BCompany company = companyService.findById(source.getSourceCompanyid());
			query.setCompany(company);
			queryList.add(query);
		}
			int i = sourceDao.countByExample(sourceQuery);
			System.out.println("查询到的矿别集合是:"+list);
			JsonConfig js = new JsonConfig();
			String[] arr = {"createdate","modifydate","createby","modifyby","sourceCompanyname",
					"sourceCompanyshort","coPhone","coPostcode","coFax","coLeader","coAddress",
					"coLinkman","Hash","serialVersionUID"};
			js.setExcludes(arr);
			JSONArray ja = new JSONArray();
			JSONObject json = new JSONObject();
	        json.put("totalCount",i);
	        ja.element(json);
			ja.element(queryList, js);
			String string = ja.toString();
			System.out.println(string);
			String replace = string.replace("[", "");
			System.out.println(replace);
			replace = replace.replace("]", "");
			System.out.println(replace);
			replace = "["+replace+"]";
			System.out.println("最后得到的json是:" + replace);
	}
	@Autowired
	SalesContractDao contractDao;
	@Test
	public void test1() throws ParseException{
		SalesContractQuery contractQuery = new SalesContractQuery();
		Criteria criteria = contractQuery.createCriteria();
		criteria.andScYearLessThanOrEqualTo(DateUtils.StringToDate("2019年11月01日"));
		List<SalesContract> list = contractDao.selectByExample(contractQuery);
		for(SalesContract contract:list){
			System.out.println("查出的合同信息是:"+contract);
			
		}
	}
}
