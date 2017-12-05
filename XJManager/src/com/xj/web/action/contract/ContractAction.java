package com.xj.web.action.contract;

import java.io.IOException;
import java.text.ParseException;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.xj.common.DateUtils;
import com.xj.common.JsonUtils;
import com.xj.dao.BCustomerDao;
import com.xj.domain.base.BCustomer;
import com.xj.domain.base.BCustomerQuery;
import com.xj.domain.contract.SalesContract;
import com.xj.domain.contract.SalesContractQuery;
import com.xj.domain.contract.SalesContractQuery.Criteria;
import com.xj.domain.query.contract.ContractListQuery;
import com.xj.service.contract.ContractService;

@Controller
public class ContractAction {
	@Autowired
	ContractService contractService;
	@Autowired
	BCustomerDao customerDao;
	/**
	 * 查询合同
	 * @param response
	 * @throws IOException 
	 * @throws ParseException 
	 */
	@RequestMapping("/contract/contractList.do")
	public void contractList(HttpServletResponse response,ContractListQuery listQuery) throws IOException, ParseException{
		System.out.println("传入的查询对象是"+listQuery);
		SalesContractQuery contractQuery = new SalesContractQuery();
		Criteria criteria = contractQuery.createCriteria();
		if(StringUtils.isNotBlank(listQuery.getStartDate())||listQuery.getStartDate()!=null){
			criteria.andScYearLessThanOrEqualTo(DateUtils.StringToDate("20"+listQuery.getStartDate()));
		}
		if(StringUtils.isNotBlank(listQuery.getEndDate())||listQuery.getEndDate()!=null){
			criteria.andScYearGreaterThanOrEqualTo(DateUtils.StringToDate("20"+listQuery.getEndDate()));
		}
		if(StringUtils.isNotBlank(listQuery.getCustomerShort())||listQuery.getCustomerShort()!=null){
			//创建用户查询对象
			BCustomerQuery customerQuery = new BCustomerQuery();
			//查询和用户输入的简称相同的用户id
			customerQuery.createCriteria().andCShortEqualTo("%"+listQuery.getCustomerShort()+"%");
			List<BCustomer> selectByExample = customerDao.selectByExample(customerQuery);
			//如果不等于null就把用户id赋值给合同中的用户id
			if(selectByExample!=null){
				criteria.andScBuyerEqualTo(selectByExample.get(0).getcId());
			}
		}
		if(listQuery.getSalesContract()!= null){
			SalesContract contract = listQuery.getSalesContract();
			if(StringUtils.isNotBlank(contract.getScId())){
				criteria.andScIdEqualTo(contract.getScId());
			}
			if(contract.getScContracttype()!= null){
				criteria.andScContracttypeEqualTo(contract.getScContracttype());
			}
			
			if(contract.getScShippingtype()!=null){
				criteria.andScShippingtypeEqualTo(contract.getScShippingtype());
			}
		}
		String json = contractService.findByExp(contractQuery);
		JsonUtils.returnJson(response, json);
	}
	
	@RequestMapping(value = "/contract/addContract.do")
	public void addContract(HttpServletResponse response,ContractListQuery listQuery) throws ParseException{
		//首先判断scMastercontractid是否为空,如果为空,说明是主合同,设置scMastercontractid为1,如果不为空,说明是补充合同,设置为2
		SalesContract contract = listQuery.getSalesContract();
		if(StringUtils.isNotBlank(contract.getScMastercontractid())){
			contract.setScIsmain((byte)1);
		}else{
			contract.setScIsmain((byte)2);
		}
		
		//转换传来的各项日期
		Date startDate = DateUtils.StringToDate(listQuery.getStartDate());
		Date endDate = DateUtils.StringToDate(listQuery.getEndDate());
		Date year = DateUtils.StringToDate(listQuery.getYear());
		Date makeTime = DateUtils.StringToDate(listQuery.getMakeTime());
		
		
	}
}
