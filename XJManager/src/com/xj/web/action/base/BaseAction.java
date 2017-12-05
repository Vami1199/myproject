package com.xj.web.action.base;

import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.xj.common.JsonUtils;
import com.xj.domain.base.BCoaltype;
import com.xj.domain.base.BCoaltypeQuery;
import com.xj.domain.base.BCompany;
import com.xj.domain.base.BCompanyQuery;
import com.xj.domain.base.BCustomer;
import com.xj.domain.base.BCustomerQuery;
import com.xj.domain.base.BMinesource;
import com.xj.domain.base.BMinesourceQuery;
import com.xj.domain.base.BCompanyQuery.Criteria;
import com.xj.domain.base.BProducts;
import com.xj.domain.base.BProductsQuery;
import com.xj.domain.base.BProvince;
import com.xj.domain.base.BProvinceQuery;
import com.xj.domain.base.BRailwayadminQuery;
import com.xj.domain.base.BRailwaysubbureauQuery;
import com.xj.domain.base.BRailwaywagon;
import com.xj.domain.base.BRailwaywagonQuery;
import com.xj.domain.base.BRailwaywagonsys;
import com.xj.domain.base.BRailwaywagonsysQuery;
import com.xj.domain.base.BStartstationQuery;
import com.xj.domain.base.BStation;
import com.xj.domain.base.BStationQuery;
import com.xj.domain.query.PageQuery;
import com.xj.domain.query.base.CustomerListQuery;
import com.xj.domain.query.base.ProductListQuery;
import com.xj.domain.query.base.SourceListQuery;
import com.xj.domain.query.base.StationListQuery;
import com.xj.service.base.BCoalTypeService;
import com.xj.service.base.BCompanyService;
import com.xj.service.base.BCustomerService;
import com.xj.service.base.BMineSourceService;
import com.xj.service.base.BProvinceService;
import com.xj.service.base.BRailwaysubbureauService;
import com.xj.service.base.BStartService;
import com.xj.service.base.BStationService;
import com.xj.service.base.BWagonService;
import com.xj.service.base.BWagonsysService;
import com.xj.service.base.BproductsService;
import com.xj.service.base.BStationadminService;
/**
 * 基础信息管理各模块查询List集合页面
 * @author Administrator
 *
 */
@Controller
public class BaseAction {
	@Autowired
	BproductsService productsService;
	@Resource
	BRailwaysubbureauService railwaysubbureauService;
	@Autowired
	BCoalTypeService coalTypeService;
	@Resource
	BCompanyService companyService;
	@Autowired
	BMineSourceService sourceService;
	@Resource
	BStationadminService stationadminService;
	@Autowired
	BStationService stationService;
	@Resource
	BProvinceService provinceService;
	@Autowired
	BWagonService wagonService;
	@Resource
	BWagonsysService wagonsysService;
	@Autowired
	BStartService startService;
	@Resource
	BCustomerService customerService;
	/**
	 * 产品信息管理
	 * @param pageNo	页码
	 * @param pCoaltype	品种类型
	 * @param pApplicationrange 适用范围
	 * @param pAvailability 是否可用
	 * @param model
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping(value = "/base/productList.do")
	public void productList(HttpServletResponse response,ProductListQuery query,PageQuery pageQuery) throws IOException{
		BProducts products = query.getProducts();
		BProductsQuery productsQuery = new BProductsQuery();
		productsQuery.setPageNo(pageQuery.getPage());
		productsQuery.setPageSize(pageQuery.getLimit());
		productsQuery.setStartRow(pageQuery.getStart());
		com.xj.domain.base.BProductsQuery.Criteria criteria = productsQuery.createCriteria();
		//判断各个元素是否为空,如果不为空就当做条件加入查询条件中
		if(products.getpId() != null){
			System.out.println("pid是"+products.getpId());
			criteria.andPIdEqualTo(products.getpId());
		}
		if(StringUtils.isNotBlank(products.getpName())){
			criteria.andPNameLike("%"+products.getpName()+"%");
		}
		if(products.getpCoaltype()!= null){
			criteria.andPCoaltypeEqualTo(products.getpCoaltype());
		}
		if(products.getpVarieties()!=null){
			System.out.println();
			criteria.andPVarietiesEqualTo(products.getpVarieties());
		}
		if(products.getpApplicationrange()!=null){
			criteria.andPApplicationrangeEqualTo(products.getpApplicationrange());
		}
		if(products.getpAvailability()!=null){
			criteria.andPAvailabilityEqualTo(products.getpAvailability());
		}
		//查询所有对象
		String json = productsService.findAll(productsQuery);
		JsonUtils.returnJson(response, json);
		
	}
	
	
	/**
	 * 煤炭品种类型管理
	 * @param response
	 */
	@RequestMapping(value="/base/coalTypeList.do")
	public void coalTypeList(HttpServletResponse response){
		BCoaltypeQuery coaltypeQuery = new BCoaltypeQuery();
		List<BCoaltype> list = coalTypeService.findAll(coaltypeQuery);
		String[] arr = {"ctRemark"};
		String json = JsonUtils.createJsonList(list, arr);
		try {
			JsonUtils.returnJson(response, json);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}	
	}
	
	/**
	 * 部门管理
	 */
	@RequestMapping(value = "/base/companyList.do")
	public void companyList(BCompany company,HttpServletResponse response){
		BCompanyQuery companyQuery = new BCompanyQuery();
		Criteria criteria = companyQuery.createCriteria();
		//判断各个元素是否为空,如果不为空就当做条件加入查询条件中
		if(StringUtils.isNotBlank(company.getCoId())){
			criteria.andCoIdLike("%"+company.getCoId()+"%");
		}
		if(StringUtils.isNotBlank(company.getCoShort())){
			criteria.andCoShortLike("%"+company.getCoShort()+"%");
		}
		if(StringUtils.isNotBlank(company.getCoPhone())){
			criteria.andCoPhoneLike("%"+company.getCoPhone()+"%");
		}
		if(StringUtils.isNotBlank(company.getCoFax())){
			criteria.andCoFaxLike("%"+company.getCoFax()+"%");
		}
		if(company.getCoPostcode()!=null){
			criteria.andCoPostcodeEqualTo(company.getCoPostcode());
		}
		if(StringUtils.isNotBlank(company.getCoLinkman())){
			criteria.andCoLinkmanLike("%"+company.getCoLinkman()+"%");
		}
		List<BCompany> list = companyService.findAll(companyQuery);
		String[] arr = {"createdate","modifydate","createby","modifyby"};
		String jsonList = JsonUtils.createJsonList(list,arr);
		System.out.println("查询到的部门信息是"+jsonList);
		/*jsonList = jsonList.substring(1, jsonList.length()-1);*/
		try {
			JsonUtils.returnJson(response,jsonList);
		} catch (Exception e) {
			String str = "{success:true}";
			try {
				JsonUtils.returnJson(response, str);
			} catch (IOException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			e.printStackTrace();
		}
		
	}
	
	/***
	 * 矿别信息管理
	 * @param sourceListQuery
	 * @param response
	 * @throws IOException 
	 */
	@RequestMapping(value = "/base/sourceList.do")
	public void sourceList(HttpServletResponse response,PageQuery pageQuery,SourceListQuery listQuery) throws IOException{
		BMinesourceQuery sourceQuery = new BMinesourceQuery();
		com.xj.domain.base.BMinesourceQuery.Criteria criteria = sourceQuery.createCriteria();
		if(listQuery.getSource()!=null){
			BMinesource source = listQuery.getSource();
			System.out.println("传来的矿别信息是:"+source);
			if(source.getSourceId()!=null){
				criteria.andSourceIdEqualTo(source.getSourceId());
			}
			if(StringUtils.isNotBlank(source.getSourceName())){
				criteria.andSourceNameLike("%"+source.getSourceName()+"%");
				
			}
			if(StringUtils.isNotBlank(source.getSourceCompanyid())){
				criteria.andSourceCompanyidLike("%"+source.getSourceCompanyid()+"%");
			}
		}
		sourceQuery.setPageNo(pageQuery.getPage());
		sourceQuery.setPageSize(pageQuery.getLimit());
		sourceQuery.setStartRow(pageQuery.getStart());
		String json = sourceService.findAll(sourceQuery);
		JsonUtils.returnJson(response, json);
		
	}
	/***
	 * 铁路局管理
	 * @param response
	 * @param pageQuery
	 * @throws IOException 
	 */
	@RequestMapping(value = "/base/stationadminList.do")
	public void stationadminList(HttpServletResponse response,PageQuery pageQuery) throws IOException{
		BRailwayadminQuery railwayadminQuery = new BRailwayadminQuery();
		railwayadminQuery.setPageNo(pageQuery.getPage());
		railwayadminQuery.setPageSize(pageQuery.getLimit());
		railwayadminQuery.setStartRow(pageQuery.getStart());
		String json = stationadminService.findAll(railwayadminQuery);
		JsonUtils.returnJson(response, json);
	}
	/***
	 * 车站管理
	 * @param response
	 * @param pageQuery
	 * @throws IOException 
	 */
	@RequestMapping(value = "/base/stationList.do")
	public void stationList(HttpServletResponse response,PageQuery pageQuery,StationListQuery query) throws IOException{
		BStationQuery stationQuery = new BStationQuery();
		stationQuery.setOrderByClause("s_sort");
		stationQuery.setPageNo(pageQuery.getPage());
		stationQuery.setPageSize(pageQuery.getLimit());
		stationQuery.setStartRow(pageQuery.getStart());
		BStation station = query.getStation();
		com.xj.domain.base.BStationQuery.Criteria criteria = stationQuery.createCriteria();
		System.out.println(station);
		if(station!=null){
			if(StringUtils.isNotBlank(station.getsSort())&&station.getsSort()!=null){
				criteria.andSSortLike("%"+station.getsSort()+"%");
			}
			if(StringUtils.isNotBlank(station.getsName())&&station.getsName()!=null){
				criteria.andSNameLike("%"+station.getsName()+"%");
			}
			if(station.getsRailwaysbureau()!=null){
				criteria.andSRailwaysbureauEqualTo(station.getsRailwaysbureau());
			}
			if(station.getsDeparturestation()!=null){
				criteria.andSDeparturestationEqualTo(station.getsDeparturestation());
			}
			if(station.getsProvince()!=null){
				criteria.andSProvinceEqualTo(station.getsProvince());
			}
			if(station.getsRailwaystation()!=null){
				criteria.andSRailwaystationEqualTo(station.getsRailwaystation());
			}
			if(station.getsMouth()!=null){
				criteria.andSMouthEqualTo(station.getsMouth());
			}
			
		}
		
		
		String json = stationService.findByExp(stationQuery);
		JsonUtils.returnJson(response, json);
	}
	/***
	 * 铁路分局管理
	 * @param response
	 * @param pageQuery
	 * @throws IOException 
	 */
	@RequestMapping(value = "/base/subbureaustationList.do")
	public void subbureaustationList(HttpServletResponse response,PageQuery pageQuery) throws IOException{
		BRailwaysubbureauQuery subbureauQuery = new BRailwaysubbureauQuery();
		subbureauQuery.setPageNo(pageQuery.getPage());
		subbureauQuery.setPageSize(pageQuery.getLimit());
		subbureauQuery.setStartRow(pageQuery.getStart());
		String json = railwaysubbureauService.findByExp(subbureauQuery);
		System.out.println("查询到的铁路分局对象是:"+json);
		JsonUtils.returnJson(response, json);
	}
	/**
	 * 省份查询
	 * @param response
	 */
	@RequestMapping(value = "/base/provinceList.do")
	public void provinceList(HttpServletResponse response){
		BProvinceQuery provinceQuery = new BProvinceQuery();
		List<BProvince> list = provinceService.findAll(provinceQuery);
		String[] arr = {"createdate","modifydate","createby","modifyby","serialVersionUID"};
		String jsonList = JsonUtils.createJsonList(list, arr);
		try {
			JsonUtils.returnJson(response, jsonList);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	/**
	 * 车皮管理
	 * @param wagon
	 * @param response
	 * @param pageQuery
	 * @throws IOException
	 */
	@RequestMapping(value = "/base/wagonList.do")
	public void wagonList(BRailwaywagon wagon,HttpServletResponse response,PageQuery pageQuery) throws IOException{
		BRailwaywagonQuery wagonQuery = new BRailwaywagonQuery();
		com.xj.domain.base.BRailwaywagonQuery.Criteria criteria = wagonQuery.createCriteria();
		if(wagon.getCsId()!=null){
			criteria.andCsIdEqualTo(wagon.getCsId());
		}
		if(wagon.getCsType()!=null){
			criteria.andCsTypeEqualTo(wagon.getCsType());
		}
		wagonQuery.setPageNo(pageQuery.getPage());
		wagonQuery.setPageSize(pageQuery.getLimit());
		wagonQuery.setStartRow(pageQuery.getStart());
		String json = wagonService.findByExp(wagonQuery);
		JsonUtils.returnJson(response, json);
	}
	/***
	 * 车皮系统参数信息管理
	 * @param wagon
	 * @param response
	 * @param pageQuery
	 * @throws IOException 
	 */
	@RequestMapping(value="/base/wagonsysList.do")
	public void wagonsysList(BRailwaywagonsys wagonsys,HttpServletResponse response,PageQuery pageQuery) throws IOException{
		BRailwaywagonsysQuery query = new BRailwaywagonsysQuery();
		query.setPageNo(pageQuery.getPage());
		query.setPageSize(pageQuery.getLimit());
		query.setStartRow(pageQuery.getStart());
		query.setOrderByClause("rw_start");
		String json = wagonsysService.findByExp(query);
		JsonUtils.returnJson(response, json);
	}
	/**
	 * 发站管理
	 * @param response
	 * @param pageQuery
	 * @throws IOException
	 */
	@RequestMapping(value = "/base/startList.do")
	public void startList(HttpServletResponse response,PageQuery pageQuery) throws IOException{
		BStartstationQuery query = new BStartstationQuery();
		query.setPageNo(pageQuery.getPage());
		query.setPageSize(pageQuery.getLimit());
		query.setStartRow(pageQuery.getStart());
		String json = startService.findByExp(query);	
		JsonUtils.returnJson(response, json);
	}
	/***
	 * 客户管理
	 * @param response
	 * @param pageQuery
	 * @param listQuery
	 * @throws IOException 
	 */
	@RequestMapping(value = "/base/customerList.do")
	public void customerList(HttpServletResponse response,PageQuery pageQuery,CustomerListQuery listQuery,HttpServletRequest request) throws IOException{
		BCustomerQuery customerQuery = new BCustomerQuery();
		com.xj.domain.base.BCustomerQuery.Criteria criteria = customerQuery.createCriteria();
		if(listQuery!=null){
			if(listQuery.getCustomer()!=null){
				BCustomer customer = listQuery.getCustomer();
				if(customer.getcId() != null){
					criteria.andCIdEqualTo(customer.getcId());
				}
				if(StringUtils.isNotBlank(customer.getcShort())){
					criteria.andCShortLike("%"+customer.getcShort()+"%");
				}
				if(StringUtils.isNotBlank(customer.getcLinkman())){
					criteria.andCLinkmanLike("%"+customer.getcLinkman()+"%");
				}
				if(customer.getcCompanytype() != null){
					criteria.andCCompanytypeEqualTo(customer.getcCompanytype());
				}
				if(customer.getcType() != null){
					criteria.andCTypeEqualTo(customer.getcType());
				}
				if(customer.getcIid() != null){
					criteria.andCIidEqualTo(customer.getcIid());
				}
				if(customer.getcDepartment() != null){
					criteria.andCDepartmentEqualTo(customer.getcDepartment());
				}
				if(StringUtils.isNotBlank(customer.getcTaxnumber())){
					criteria.andCTaxnumberLike("%"+customer.getcTaxnumber()+"%");
				}
				if(customer.getcIdentifying() != null){
					criteria.andCIdentifyingEqualTo(customer.getcIdentifying());
				}
			}
			
		}
		customerQuery.setPageNo(pageQuery.getPage());
		customerQuery.setPageSize(pageQuery.getLimit());
		customerQuery.setStartRow(pageQuery.getStart());
		String json = customerService.findByExp(customerQuery);
		JsonUtils.returnJson(response, json);
	}	
}
