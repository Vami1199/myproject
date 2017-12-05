package com.xj.web.action.base.product;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.xj.common.JsonUtils;
import com.xj.dao.BCoaltypeDao;
import com.xj.domain.base.BCoaltype;
import com.xj.domain.base.BCoaltypeQuery;
import com.xj.domain.base.BCoaltypeQuery.Criteria;
import com.xj.domain.base.BProducts;
import com.xj.domain.query.base.ProductListQuery;
/**
 * 对产品进行增删改查的类
 * @author Administrator
 *
 */
import com.xj.service.base.BproductsService;
@Controller
public class Product {
	@Autowired
	BproductsService productsService;
	@Autowired
	BCoaltypeDao coaltypeDao;
	/**
	 * 产品添加
	 */
	@RequestMapping(value = "/base/addProduct.do")
	public void addProduct(ProductListQuery query,HttpServletResponse response) throws Exception{
		System.out.println(query);
		BProducts products = query.getProducts();
		products.setpProductionunit(query.getCoId());
		if(query.getCtName().length() > 1){
			BCoaltypeQuery coal = new BCoaltypeQuery();
			Criteria c = coal.createCriteria();
			c.andCtNameEqualTo(query.getCtName());
			List<BCoaltype> list = coaltypeDao.selectByExample(coal);
			products.setpCoaltype(list.get(0).getCtId());
		}else{
			products.setpCoaltype(Integer.parseInt(query.getCtName()));
		}
		Integer add = productsService.add(products);
		System.out.println(add);
		if(add == 1){
			JsonUtils.returnJson(response, "{success:true}");
		}else if(add == 2){
			JsonUtils.returnJson(response, "{success:false,msg:'产品编号重复,请重新输入产品编号!'}");
		}else{
			JsonUtils.returnJson(response, "{success:false,msg:'添加失败,请重新输入!}");
		}
	}
	/***
	 * 产品修改
	 * @param query
	 * @param response
	 * @throws Exception
	 */
	@RequestMapping(value = "/base/updateProduct.do")
	public void updateProduct(ProductListQuery query,HttpServletResponse response) throws Exception{
		BProducts products = query.getProducts();
		products.setpProductionunit(query.getCoId());
		if(query.getCtName().length() > 1){
			BCoaltypeQuery coal = new BCoaltypeQuery();
			Criteria c = coal.createCriteria();
			c.andCtNameEqualTo(query.getCtName());
			List<BCoaltype> list = coaltypeDao.selectByExample(coal);
			products.setpCoaltype(list.get(0).getCtId());
		}else{
			products.setpCoaltype(Integer.parseInt(query.getCtName()));
		}
		Integer update = productsService.update(products);
		System.out.println(update);
		if(update == 1){
			JsonUtils.returnJson(response, "{success:true}");
		}else{
			JsonUtils.returnJson(response, "{success:false}");
		}
		
	}
	/***
	 * 产品删除
	 * @param reponse
	 * @param ids 前台传来的多个id拼接的字符串
	 * @throws Exception 
 	 */
	@RequestMapping(value = "/base/deleteProduct")
	public void deleteProduct(HttpServletResponse response,String ids) throws Exception{
		System.out.println("传递来的id字符串是" + ids);
		String regex = "-";
		//将字符串分割成数组
		String[] split = ids.split(regex);
		Boolean flag = true;
		for (String id : split) {
			System.out.println("传入的id是:"+id);
			Integer i = productsService.deleteById(id);
			System.out.println(i);
			if(i != 1){
				flag = false;
			}
		}
		String json = "";
		if(flag){
			json = "{success:true}";

		}else{
			json = "{success:false}";
		}
		JsonUtils.returnJson(response,json);
	}
}
