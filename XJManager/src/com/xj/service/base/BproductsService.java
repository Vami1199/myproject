package com.xj.service.base;


import com.xj.domain.base.BProducts;
import com.xj.domain.base.BProductsQuery;


public interface BproductsService {

	String findAll(BProductsQuery productsQuery);

	Integer add(BProducts products);

	Integer update(BProducts products);

	Integer deleteById(String id);

}
