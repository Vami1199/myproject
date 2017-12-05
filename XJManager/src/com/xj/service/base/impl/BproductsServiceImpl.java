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
import com.xj.dao.BCoaltypeDao;
import com.xj.dao.BCompanyDao;
import com.xj.dao.BProductsDao;
import com.xj.domain.base.BCoaltype;
import com.xj.domain.base.BCompany;
import com.xj.domain.base.BProducts;
import com.xj.domain.base.BProductsQuery;
import com.xj.domain.query.base.ProductListQuery;
import com.xj.service.base.BproductsService;
@Service
@Transactional
public class BproductsServiceImpl implements BproductsService{
	@Autowired
	BProductsDao productsDao;
	@Autowired
	BCompanyDao companyDao;
	@Resource
	BCoaltypeDao coaltypeDao;
	public String findAll(BProductsQuery productsQuery) {
		//首先获取所有的产品信息
		List<BProducts> list = productsDao.selectByExample(productsQuery);
		System.out.println("查询到的集合是"+list);
		//创建query对象集合
		List<ProductListQuery> listQuery = new ArrayList<ProductListQuery>();
		//遍历list集合
		for(BProducts products:list){
			//将BProducts存入ProductsListQuery中
			ProductListQuery productListQuery = new ProductListQuery();
			productListQuery.setProducts(products);
			if(products.getpCoaltype() !=null && products.getpCoaltype()==1){
				productListQuery.setVarieties("动力煤");
			}else{
				productListQuery.setVarieties("其他品种");
			}

			if(products.getpApplicationrange() !=null && products.getpApplicationrange()==1){
				productListQuery.setApplicationrange("生产");
			}else if(products.getpApplicationrange() !=null && products.getpApplicationrange()==2){
				productListQuery.setApplicationrange("产销");	
			}else if(products.getpApplicationrange() !=null && products.getpApplicationrange()==3){
				productListQuery.setApplicationrange("销售");
			}else{
				productListQuery.setApplicationrange("其他");
			}
			//通过主键查询到对应的对象,也就是商品信息里的Productionunit
			if(products.getpProductionunit() != null && !products.getpProductionunit().equals("")){
				BCompany company = companyDao.selectByPrimaryKey(products.getpProductionunit());
				//将公司名存入查询对象中
				productListQuery.setCoName(company.getCoName());
			}
			if(products.getpCoaltype() != null){
				BCoaltype coaltype = coaltypeDao.selectByPrimaryKey(products.getpCoaltype());
				System.out.println("煤种是:"+coaltype.getCtName());
				productListQuery.setCtName(coaltype.getCtName());
			}
			listQuery.add(productListQuery);
		}
		int i = productsDao.countByExample(productsQuery);
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("totalCount",i);
		String[] arr = {"ProductListQuery","Hash","modifydate","createby","createdate","modifyby","pRemark"};
		String json = JsonUtils.addJson(listQuery,arr,map);
		json=json.substring(1, json.length()-1);
		System.out.println("最后查出的产品是"+json);
		return json;
	}
	public Integer add(BProducts products) {
		BProducts pro = productsDao.selectByPrimaryKey(products.getpId());
		if(pro != null){
			//如果通过kay能查出一个对象,说明主键重复,返回一个2表示
			return 2;
		}
		int i = productsDao.insert(products);
		return i;
	}
	
	public Integer update(BProducts products){
		int i = productsDao.updateByPrimaryKey(products);
		return i;
	}
	public Integer deleteById(String id) {
		int i = productsDao.deleteByPrimaryKey(Integer.parseInt(id));
		return i;
	}

}
