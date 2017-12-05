package com.xj.domain.query.base;
import com.xj.domain.base.BProducts;

public class ProductListQuery {
	private BProducts products = new BProducts();
	private String coName;
	private String ctName;
	private String Varieties;
	private String Applicationrange;
	private String coId;



	public String getCoId() {
		return coId;
	}
	public void setCoId(String coId) {
		this.coId = coId;
	}
	public String getVarieties() {
		return Varieties;
	}
	public void setVarieties(String varieties) {
		Varieties = varieties;
	}
	public String getApplicationrange() {
		return Applicationrange;
	}
	public void setApplicationrange(String applicationrange) {
		Applicationrange = applicationrange;
	}
	public BProducts getProducts() {
		return products;
	}
	public void setProducts(BProducts products) {
		this.products = products;
	}
	public String getCoName() {
		return coName;
	}
	public void setCoName(String coName) {
		this.coName = coName;
	}
	public String getCtName() {
		return ctName;
	}
	public void setCtName(String ctName) {
		this.ctName = ctName;
	}
	@Override
	public String toString() {
		return "ProductListQuery [products=" + products + ", coName=" + coName + ", ctName=" + ctName + "]";
	}

}
