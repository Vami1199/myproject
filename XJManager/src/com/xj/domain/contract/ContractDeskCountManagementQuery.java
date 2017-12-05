package com.xj.domain.contract;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class ContractDeskCountManagementQuery {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Integer pageNo = 1;

    protected Integer startRow;

    protected Integer pageSize = 10;

    protected String fields;

    public ContractDeskCountManagementQuery() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    public void setPageNo(Integer pageNo) {
        this.pageNo=pageNo;
        this.startRow = (pageNo-1)*this.pageSize;
    }

    public Integer getPageNo() {
        return pageNo;
    }

    public void setStartRow(Integer startRow) {
        this.startRow=startRow;
    }

    public Integer getStartRow() {
        return startRow;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize=pageSize;
        this.startRow = (pageNo-1)*this.pageSize;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setFields(String fields) {
        this.fields=fields;
    }

    public String getFields() {
        return fields;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andCmContractidIsNull() {
            addCriterion("cm_contractId is null");
            return (Criteria) this;
        }

        public Criteria andCmContractidIsNotNull() {
            addCriterion("cm_contractId is not null");
            return (Criteria) this;
        }

        public Criteria andCmContractidEqualTo(Integer value) {
            addCriterion("cm_contractId =", value, "cmContractid");
            return (Criteria) this;
        }

        public Criteria andCmContractidNotEqualTo(Integer value) {
            addCriterion("cm_contractId <>", value, "cmContractid");
            return (Criteria) this;
        }

        public Criteria andCmContractidGreaterThan(Integer value) {
            addCriterion("cm_contractId >", value, "cmContractid");
            return (Criteria) this;
        }

        public Criteria andCmContractidGreaterThanOrEqualTo(Integer value) {
            addCriterion("cm_contractId >=", value, "cmContractid");
            return (Criteria) this;
        }

        public Criteria andCmContractidLessThan(Integer value) {
            addCriterion("cm_contractId <", value, "cmContractid");
            return (Criteria) this;
        }

        public Criteria andCmContractidLessThanOrEqualTo(Integer value) {
            addCriterion("cm_contractId <=", value, "cmContractid");
            return (Criteria) this;
        }

        public Criteria andCmContractidIn(List<Integer> values) {
            addCriterion("cm_contractId in", values, "cmContractid");
            return (Criteria) this;
        }

        public Criteria andCmContractidNotIn(List<Integer> values) {
            addCriterion("cm_contractId not in", values, "cmContractid");
            return (Criteria) this;
        }

        public Criteria andCmContractidBetween(Integer value1, Integer value2) {
            addCriterion("cm_contractId between", value1, value2, "cmContractid");
            return (Criteria) this;
        }

        public Criteria andCmContractidNotBetween(Integer value1, Integer value2) {
            addCriterion("cm_contractId not between", value1, value2, "cmContractid");
            return (Criteria) this;
        }

        public Criteria andCmProductidIsNull() {
            addCriterion("cm_productId is null");
            return (Criteria) this;
        }

        public Criteria andCmProductidIsNotNull() {
            addCriterion("cm_productId is not null");
            return (Criteria) this;
        }

        public Criteria andCmProductidEqualTo(Integer value) {
            addCriterion("cm_productId =", value, "cmProductid");
            return (Criteria) this;
        }

        public Criteria andCmProductidNotEqualTo(Integer value) {
            addCriterion("cm_productId <>", value, "cmProductid");
            return (Criteria) this;
        }

        public Criteria andCmProductidGreaterThan(Integer value) {
            addCriterion("cm_productId >", value, "cmProductid");
            return (Criteria) this;
        }

        public Criteria andCmProductidGreaterThanOrEqualTo(Integer value) {
            addCriterion("cm_productId >=", value, "cmProductid");
            return (Criteria) this;
        }

        public Criteria andCmProductidLessThan(Integer value) {
            addCriterion("cm_productId <", value, "cmProductid");
            return (Criteria) this;
        }

        public Criteria andCmProductidLessThanOrEqualTo(Integer value) {
            addCriterion("cm_productId <=", value, "cmProductid");
            return (Criteria) this;
        }

        public Criteria andCmProductidIn(List<Integer> values) {
            addCriterion("cm_productId in", values, "cmProductid");
            return (Criteria) this;
        }

        public Criteria andCmProductidNotIn(List<Integer> values) {
            addCriterion("cm_productId not in", values, "cmProductid");
            return (Criteria) this;
        }

        public Criteria andCmProductidBetween(Integer value1, Integer value2) {
            addCriterion("cm_productId between", value1, value2, "cmProductid");
            return (Criteria) this;
        }

        public Criteria andCmProductidNotBetween(Integer value1, Integer value2) {
            addCriterion("cm_productId not between", value1, value2, "cmProductid");
            return (Criteria) this;
        }

        public Criteria andCmProductnameIsNull() {
            addCriterion("cm_productName is null");
            return (Criteria) this;
        }

        public Criteria andCmProductnameIsNotNull() {
            addCriterion("cm_productName is not null");
            return (Criteria) this;
        }

        public Criteria andCmProductnameEqualTo(String value) {
            addCriterion("cm_productName =", value, "cmProductname");
            return (Criteria) this;
        }

        public Criteria andCmProductnameNotEqualTo(String value) {
            addCriterion("cm_productName <>", value, "cmProductname");
            return (Criteria) this;
        }

        public Criteria andCmProductnameGreaterThan(String value) {
            addCriterion("cm_productName >", value, "cmProductname");
            return (Criteria) this;
        }

        public Criteria andCmProductnameGreaterThanOrEqualTo(String value) {
            addCriterion("cm_productName >=", value, "cmProductname");
            return (Criteria) this;
        }

        public Criteria andCmProductnameLessThan(String value) {
            addCriterion("cm_productName <", value, "cmProductname");
            return (Criteria) this;
        }

        public Criteria andCmProductnameLessThanOrEqualTo(String value) {
            addCriterion("cm_productName <=", value, "cmProductname");
            return (Criteria) this;
        }

        public Criteria andCmProductnameLike(String value) {
            addCriterion("cm_productName like", value, "cmProductname");
            return (Criteria) this;
        }

        public Criteria andCmProductnameNotLike(String value) {
            addCriterion("cm_productName not like", value, "cmProductname");
            return (Criteria) this;
        }

        public Criteria andCmProductnameIn(List<String> values) {
            addCriterion("cm_productName in", values, "cmProductname");
            return (Criteria) this;
        }

        public Criteria andCmProductnameNotIn(List<String> values) {
            addCriterion("cm_productName not in", values, "cmProductname");
            return (Criteria) this;
        }

        public Criteria andCmProductnameBetween(String value1, String value2) {
            addCriterion("cm_productName between", value1, value2, "cmProductname");
            return (Criteria) this;
        }

        public Criteria andCmProductnameNotBetween(String value1, String value2) {
            addCriterion("cm_productName not between", value1, value2, "cmProductname");
            return (Criteria) this;
        }

        public Criteria andCmDeliveryenterprisenameIsNull() {
            addCriterion("cm_deliveryEnterPriseName is null");
            return (Criteria) this;
        }

        public Criteria andCmDeliveryenterprisenameIsNotNull() {
            addCriterion("cm_deliveryEnterPriseName is not null");
            return (Criteria) this;
        }

        public Criteria andCmDeliveryenterprisenameEqualTo(String value) {
            addCriterion("cm_deliveryEnterPriseName =", value, "cmDeliveryenterprisename");
            return (Criteria) this;
        }

        public Criteria andCmDeliveryenterprisenameNotEqualTo(String value) {
            addCriterion("cm_deliveryEnterPriseName <>", value, "cmDeliveryenterprisename");
            return (Criteria) this;
        }

        public Criteria andCmDeliveryenterprisenameGreaterThan(String value) {
            addCriterion("cm_deliveryEnterPriseName >", value, "cmDeliveryenterprisename");
            return (Criteria) this;
        }

        public Criteria andCmDeliveryenterprisenameGreaterThanOrEqualTo(String value) {
            addCriterion("cm_deliveryEnterPriseName >=", value, "cmDeliveryenterprisename");
            return (Criteria) this;
        }

        public Criteria andCmDeliveryenterprisenameLessThan(String value) {
            addCriterion("cm_deliveryEnterPriseName <", value, "cmDeliveryenterprisename");
            return (Criteria) this;
        }

        public Criteria andCmDeliveryenterprisenameLessThanOrEqualTo(String value) {
            addCriterion("cm_deliveryEnterPriseName <=", value, "cmDeliveryenterprisename");
            return (Criteria) this;
        }

        public Criteria andCmDeliveryenterprisenameLike(String value) {
            addCriterion("cm_deliveryEnterPriseName like", value, "cmDeliveryenterprisename");
            return (Criteria) this;
        }

        public Criteria andCmDeliveryenterprisenameNotLike(String value) {
            addCriterion("cm_deliveryEnterPriseName not like", value, "cmDeliveryenterprisename");
            return (Criteria) this;
        }

        public Criteria andCmDeliveryenterprisenameIn(List<String> values) {
            addCriterion("cm_deliveryEnterPriseName in", values, "cmDeliveryenterprisename");
            return (Criteria) this;
        }

        public Criteria andCmDeliveryenterprisenameNotIn(List<String> values) {
            addCriterion("cm_deliveryEnterPriseName not in", values, "cmDeliveryenterprisename");
            return (Criteria) this;
        }

        public Criteria andCmDeliveryenterprisenameBetween(String value1, String value2) {
            addCriterion("cm_deliveryEnterPriseName between", value1, value2, "cmDeliveryenterprisename");
            return (Criteria) this;
        }

        public Criteria andCmDeliveryenterprisenameNotBetween(String value1, String value2) {
            addCriterion("cm_deliveryEnterPriseName not between", value1, value2, "cmDeliveryenterprisename");
            return (Criteria) this;
        }

        public Criteria andCmReceivingunitIsNull() {
            addCriterion("cm_receivingUnit is null");
            return (Criteria) this;
        }

        public Criteria andCmReceivingunitIsNotNull() {
            addCriterion("cm_receivingUnit is not null");
            return (Criteria) this;
        }

        public Criteria andCmReceivingunitEqualTo(String value) {
            addCriterion("cm_receivingUnit =", value, "cmReceivingunit");
            return (Criteria) this;
        }

        public Criteria andCmReceivingunitNotEqualTo(String value) {
            addCriterion("cm_receivingUnit <>", value, "cmReceivingunit");
            return (Criteria) this;
        }

        public Criteria andCmReceivingunitGreaterThan(String value) {
            addCriterion("cm_receivingUnit >", value, "cmReceivingunit");
            return (Criteria) this;
        }

        public Criteria andCmReceivingunitGreaterThanOrEqualTo(String value) {
            addCriterion("cm_receivingUnit >=", value, "cmReceivingunit");
            return (Criteria) this;
        }

        public Criteria andCmReceivingunitLessThan(String value) {
            addCriterion("cm_receivingUnit <", value, "cmReceivingunit");
            return (Criteria) this;
        }

        public Criteria andCmReceivingunitLessThanOrEqualTo(String value) {
            addCriterion("cm_receivingUnit <=", value, "cmReceivingunit");
            return (Criteria) this;
        }

        public Criteria andCmReceivingunitLike(String value) {
            addCriterion("cm_receivingUnit like", value, "cmReceivingunit");
            return (Criteria) this;
        }

        public Criteria andCmReceivingunitNotLike(String value) {
            addCriterion("cm_receivingUnit not like", value, "cmReceivingunit");
            return (Criteria) this;
        }

        public Criteria andCmReceivingunitIn(List<String> values) {
            addCriterion("cm_receivingUnit in", values, "cmReceivingunit");
            return (Criteria) this;
        }

        public Criteria andCmReceivingunitNotIn(List<String> values) {
            addCriterion("cm_receivingUnit not in", values, "cmReceivingunit");
            return (Criteria) this;
        }

        public Criteria andCmReceivingunitBetween(String value1, String value2) {
            addCriterion("cm_receivingUnit between", value1, value2, "cmReceivingunit");
            return (Criteria) this;
        }

        public Criteria andCmReceivingunitNotBetween(String value1, String value2) {
            addCriterion("cm_receivingUnit not between", value1, value2, "cmReceivingunit");
            return (Criteria) this;
        }

        public Criteria andCmProvincenameIsNull() {
            addCriterion("cm_provinceName is null");
            return (Criteria) this;
        }

        public Criteria andCmProvincenameIsNotNull() {
            addCriterion("cm_provinceName is not null");
            return (Criteria) this;
        }

        public Criteria andCmProvincenameEqualTo(String value) {
            addCriterion("cm_provinceName =", value, "cmProvincename");
            return (Criteria) this;
        }

        public Criteria andCmProvincenameNotEqualTo(String value) {
            addCriterion("cm_provinceName <>", value, "cmProvincename");
            return (Criteria) this;
        }

        public Criteria andCmProvincenameGreaterThan(String value) {
            addCriterion("cm_provinceName >", value, "cmProvincename");
            return (Criteria) this;
        }

        public Criteria andCmProvincenameGreaterThanOrEqualTo(String value) {
            addCriterion("cm_provinceName >=", value, "cmProvincename");
            return (Criteria) this;
        }

        public Criteria andCmProvincenameLessThan(String value) {
            addCriterion("cm_provinceName <", value, "cmProvincename");
            return (Criteria) this;
        }

        public Criteria andCmProvincenameLessThanOrEqualTo(String value) {
            addCriterion("cm_provinceName <=", value, "cmProvincename");
            return (Criteria) this;
        }

        public Criteria andCmProvincenameLike(String value) {
            addCriterion("cm_provinceName like", value, "cmProvincename");
            return (Criteria) this;
        }

        public Criteria andCmProvincenameNotLike(String value) {
            addCriterion("cm_provinceName not like", value, "cmProvincename");
            return (Criteria) this;
        }

        public Criteria andCmProvincenameIn(List<String> values) {
            addCriterion("cm_provinceName in", values, "cmProvincename");
            return (Criteria) this;
        }

        public Criteria andCmProvincenameNotIn(List<String> values) {
            addCriterion("cm_provinceName not in", values, "cmProvincename");
            return (Criteria) this;
        }

        public Criteria andCmProvincenameBetween(String value1, String value2) {
            addCriterion("cm_provinceName between", value1, value2, "cmProvincename");
            return (Criteria) this;
        }

        public Criteria andCmProvincenameNotBetween(String value1, String value2) {
            addCriterion("cm_provinceName not between", value1, value2, "cmProvincename");
            return (Criteria) this;
        }

        public Criteria andCmCitynameIsNull() {
            addCriterion("cm_cityName is null");
            return (Criteria) this;
        }

        public Criteria andCmCitynameIsNotNull() {
            addCriterion("cm_cityName is not null");
            return (Criteria) this;
        }

        public Criteria andCmCitynameEqualTo(String value) {
            addCriterion("cm_cityName =", value, "cmCityname");
            return (Criteria) this;
        }

        public Criteria andCmCitynameNotEqualTo(String value) {
            addCriterion("cm_cityName <>", value, "cmCityname");
            return (Criteria) this;
        }

        public Criteria andCmCitynameGreaterThan(String value) {
            addCriterion("cm_cityName >", value, "cmCityname");
            return (Criteria) this;
        }

        public Criteria andCmCitynameGreaterThanOrEqualTo(String value) {
            addCriterion("cm_cityName >=", value, "cmCityname");
            return (Criteria) this;
        }

        public Criteria andCmCitynameLessThan(String value) {
            addCriterion("cm_cityName <", value, "cmCityname");
            return (Criteria) this;
        }

        public Criteria andCmCitynameLessThanOrEqualTo(String value) {
            addCriterion("cm_cityName <=", value, "cmCityname");
            return (Criteria) this;
        }

        public Criteria andCmCitynameLike(String value) {
            addCriterion("cm_cityName like", value, "cmCityname");
            return (Criteria) this;
        }

        public Criteria andCmCitynameNotLike(String value) {
            addCriterion("cm_cityName not like", value, "cmCityname");
            return (Criteria) this;
        }

        public Criteria andCmCitynameIn(List<String> values) {
            addCriterion("cm_cityName in", values, "cmCityname");
            return (Criteria) this;
        }

        public Criteria andCmCitynameNotIn(List<String> values) {
            addCriterion("cm_cityName not in", values, "cmCityname");
            return (Criteria) this;
        }

        public Criteria andCmCitynameBetween(String value1, String value2) {
            addCriterion("cm_cityName between", value1, value2, "cmCityname");
            return (Criteria) this;
        }

        public Criteria andCmCitynameNotBetween(String value1, String value2) {
            addCriterion("cm_cityName not between", value1, value2, "cmCityname");
            return (Criteria) this;
        }

        public Criteria andCmAdressIsNull() {
            addCriterion("cm_adress is null");
            return (Criteria) this;
        }

        public Criteria andCmAdressIsNotNull() {
            addCriterion("cm_adress is not null");
            return (Criteria) this;
        }

        public Criteria andCmAdressEqualTo(String value) {
            addCriterion("cm_adress =", value, "cmAdress");
            return (Criteria) this;
        }

        public Criteria andCmAdressNotEqualTo(String value) {
            addCriterion("cm_adress <>", value, "cmAdress");
            return (Criteria) this;
        }

        public Criteria andCmAdressGreaterThan(String value) {
            addCriterion("cm_adress >", value, "cmAdress");
            return (Criteria) this;
        }

        public Criteria andCmAdressGreaterThanOrEqualTo(String value) {
            addCriterion("cm_adress >=", value, "cmAdress");
            return (Criteria) this;
        }

        public Criteria andCmAdressLessThan(String value) {
            addCriterion("cm_adress <", value, "cmAdress");
            return (Criteria) this;
        }

        public Criteria andCmAdressLessThanOrEqualTo(String value) {
            addCriterion("cm_adress <=", value, "cmAdress");
            return (Criteria) this;
        }

        public Criteria andCmAdressLike(String value) {
            addCriterion("cm_adress like", value, "cmAdress");
            return (Criteria) this;
        }

        public Criteria andCmAdressNotLike(String value) {
            addCriterion("cm_adress not like", value, "cmAdress");
            return (Criteria) this;
        }

        public Criteria andCmAdressIn(List<String> values) {
            addCriterion("cm_adress in", values, "cmAdress");
            return (Criteria) this;
        }

        public Criteria andCmAdressNotIn(List<String> values) {
            addCriterion("cm_adress not in", values, "cmAdress");
            return (Criteria) this;
        }

        public Criteria andCmAdressBetween(String value1, String value2) {
            addCriterion("cm_adress between", value1, value2, "cmAdress");
            return (Criteria) this;
        }

        public Criteria andCmAdressNotBetween(String value1, String value2) {
            addCriterion("cm_adress not between", value1, value2, "cmAdress");
            return (Criteria) this;
        }

        public Criteria andCreatedateIsNull() {
            addCriterion("Createdate is null");
            return (Criteria) this;
        }

        public Criteria andCreatedateIsNotNull() {
            addCriterion("Createdate is not null");
            return (Criteria) this;
        }

        public Criteria andCreatedateEqualTo(Date value) {
            addCriterion("Createdate =", value, "createdate");
            return (Criteria) this;
        }

        public Criteria andCreatedateNotEqualTo(Date value) {
            addCriterion("Createdate <>", value, "createdate");
            return (Criteria) this;
        }

        public Criteria andCreatedateGreaterThan(Date value) {
            addCriterion("Createdate >", value, "createdate");
            return (Criteria) this;
        }

        public Criteria andCreatedateGreaterThanOrEqualTo(Date value) {
            addCriterion("Createdate >=", value, "createdate");
            return (Criteria) this;
        }

        public Criteria andCreatedateLessThan(Date value) {
            addCriterion("Createdate <", value, "createdate");
            return (Criteria) this;
        }

        public Criteria andCreatedateLessThanOrEqualTo(Date value) {
            addCriterion("Createdate <=", value, "createdate");
            return (Criteria) this;
        }

        public Criteria andCreatedateIn(List<Date> values) {
            addCriterion("Createdate in", values, "createdate");
            return (Criteria) this;
        }

        public Criteria andCreatedateNotIn(List<Date> values) {
            addCriterion("Createdate not in", values, "createdate");
            return (Criteria) this;
        }

        public Criteria andCreatedateBetween(Date value1, Date value2) {
            addCriterion("Createdate between", value1, value2, "createdate");
            return (Criteria) this;
        }

        public Criteria andCreatedateNotBetween(Date value1, Date value2) {
            addCriterion("Createdate not between", value1, value2, "createdate");
            return (Criteria) this;
        }

        public Criteria andModifydateIsNull() {
            addCriterion("ModifyDate is null");
            return (Criteria) this;
        }

        public Criteria andModifydateIsNotNull() {
            addCriterion("ModifyDate is not null");
            return (Criteria) this;
        }

        public Criteria andModifydateEqualTo(Date value) {
            addCriterion("ModifyDate =", value, "modifydate");
            return (Criteria) this;
        }

        public Criteria andModifydateNotEqualTo(Date value) {
            addCriterion("ModifyDate <>", value, "modifydate");
            return (Criteria) this;
        }

        public Criteria andModifydateGreaterThan(Date value) {
            addCriterion("ModifyDate >", value, "modifydate");
            return (Criteria) this;
        }

        public Criteria andModifydateGreaterThanOrEqualTo(Date value) {
            addCriterion("ModifyDate >=", value, "modifydate");
            return (Criteria) this;
        }

        public Criteria andModifydateLessThan(Date value) {
            addCriterion("ModifyDate <", value, "modifydate");
            return (Criteria) this;
        }

        public Criteria andModifydateLessThanOrEqualTo(Date value) {
            addCriterion("ModifyDate <=", value, "modifydate");
            return (Criteria) this;
        }

        public Criteria andModifydateIn(List<Date> values) {
            addCriterion("ModifyDate in", values, "modifydate");
            return (Criteria) this;
        }

        public Criteria andModifydateNotIn(List<Date> values) {
            addCriterion("ModifyDate not in", values, "modifydate");
            return (Criteria) this;
        }

        public Criteria andModifydateBetween(Date value1, Date value2) {
            addCriterion("ModifyDate between", value1, value2, "modifydate");
            return (Criteria) this;
        }

        public Criteria andModifydateNotBetween(Date value1, Date value2) {
            addCriterion("ModifyDate not between", value1, value2, "modifydate");
            return (Criteria) this;
        }

        public Criteria andCreatebyIsNull() {
            addCriterion("CreateBy is null");
            return (Criteria) this;
        }

        public Criteria andCreatebyIsNotNull() {
            addCriterion("CreateBy is not null");
            return (Criteria) this;
        }

        public Criteria andCreatebyEqualTo(String value) {
            addCriterion("CreateBy =", value, "createby");
            return (Criteria) this;
        }

        public Criteria andCreatebyNotEqualTo(String value) {
            addCriterion("CreateBy <>", value, "createby");
            return (Criteria) this;
        }

        public Criteria andCreatebyGreaterThan(String value) {
            addCriterion("CreateBy >", value, "createby");
            return (Criteria) this;
        }

        public Criteria andCreatebyGreaterThanOrEqualTo(String value) {
            addCriterion("CreateBy >=", value, "createby");
            return (Criteria) this;
        }

        public Criteria andCreatebyLessThan(String value) {
            addCriterion("CreateBy <", value, "createby");
            return (Criteria) this;
        }

        public Criteria andCreatebyLessThanOrEqualTo(String value) {
            addCriterion("CreateBy <=", value, "createby");
            return (Criteria) this;
        }

        public Criteria andCreatebyLike(String value) {
            addCriterion("CreateBy like", value, "createby");
            return (Criteria) this;
        }

        public Criteria andCreatebyNotLike(String value) {
            addCriterion("CreateBy not like", value, "createby");
            return (Criteria) this;
        }

        public Criteria andCreatebyIn(List<String> values) {
            addCriterion("CreateBy in", values, "createby");
            return (Criteria) this;
        }

        public Criteria andCreatebyNotIn(List<String> values) {
            addCriterion("CreateBy not in", values, "createby");
            return (Criteria) this;
        }

        public Criteria andCreatebyBetween(String value1, String value2) {
            addCriterion("CreateBy between", value1, value2, "createby");
            return (Criteria) this;
        }

        public Criteria andCreatebyNotBetween(String value1, String value2) {
            addCriterion("CreateBy not between", value1, value2, "createby");
            return (Criteria) this;
        }

        public Criteria andModifybyIsNull() {
            addCriterion("ModifyBy is null");
            return (Criteria) this;
        }

        public Criteria andModifybyIsNotNull() {
            addCriterion("ModifyBy is not null");
            return (Criteria) this;
        }

        public Criteria andModifybyEqualTo(String value) {
            addCriterion("ModifyBy =", value, "modifyby");
            return (Criteria) this;
        }

        public Criteria andModifybyNotEqualTo(String value) {
            addCriterion("ModifyBy <>", value, "modifyby");
            return (Criteria) this;
        }

        public Criteria andModifybyGreaterThan(String value) {
            addCriterion("ModifyBy >", value, "modifyby");
            return (Criteria) this;
        }

        public Criteria andModifybyGreaterThanOrEqualTo(String value) {
            addCriterion("ModifyBy >=", value, "modifyby");
            return (Criteria) this;
        }

        public Criteria andModifybyLessThan(String value) {
            addCriterion("ModifyBy <", value, "modifyby");
            return (Criteria) this;
        }

        public Criteria andModifybyLessThanOrEqualTo(String value) {
            addCriterion("ModifyBy <=", value, "modifyby");
            return (Criteria) this;
        }

        public Criteria andModifybyLike(String value) {
            addCriterion("ModifyBy like", value, "modifyby");
            return (Criteria) this;
        }

        public Criteria andModifybyNotLike(String value) {
            addCriterion("ModifyBy not like", value, "modifyby");
            return (Criteria) this;
        }

        public Criteria andModifybyIn(List<String> values) {
            addCriterion("ModifyBy in", values, "modifyby");
            return (Criteria) this;
        }

        public Criteria andModifybyNotIn(List<String> values) {
            addCriterion("ModifyBy not in", values, "modifyby");
            return (Criteria) this;
        }

        public Criteria andModifybyBetween(String value1, String value2) {
            addCriterion("ModifyBy between", value1, value2, "modifyby");
            return (Criteria) this;
        }

        public Criteria andModifybyNotBetween(String value1, String value2) {
            addCriterion("ModifyBy not between", value1, value2, "modifyby");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}