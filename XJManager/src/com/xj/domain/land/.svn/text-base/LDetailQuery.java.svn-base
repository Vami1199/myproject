package com.xj.domain.land;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class LDetailQuery {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Integer pageNo = 1;

    protected Integer startRow;

    protected Integer pageSize = 10;

    protected String fields;

    public LDetailQuery() {
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

        public Criteria andApIdIsNull() {
            addCriterion("ap_id is null");
            return (Criteria) this;
        }

        public Criteria andApIdIsNotNull() {
            addCriterion("ap_id is not null");
            return (Criteria) this;
        }

        public Criteria andApIdEqualTo(Integer value) {
            addCriterion("ap_id =", value, "apId");
            return (Criteria) this;
        }

        public Criteria andApIdNotEqualTo(Integer value) {
            addCriterion("ap_id <>", value, "apId");
            return (Criteria) this;
        }

        public Criteria andApIdGreaterThan(Integer value) {
            addCriterion("ap_id >", value, "apId");
            return (Criteria) this;
        }

        public Criteria andApIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("ap_id >=", value, "apId");
            return (Criteria) this;
        }

        public Criteria andApIdLessThan(Integer value) {
            addCriterion("ap_id <", value, "apId");
            return (Criteria) this;
        }

        public Criteria andApIdLessThanOrEqualTo(Integer value) {
            addCriterion("ap_id <=", value, "apId");
            return (Criteria) this;
        }

        public Criteria andApIdIn(List<Integer> values) {
            addCriterion("ap_id in", values, "apId");
            return (Criteria) this;
        }

        public Criteria andApIdNotIn(List<Integer> values) {
            addCriterion("ap_id not in", values, "apId");
            return (Criteria) this;
        }

        public Criteria andApIdBetween(Integer value1, Integer value2) {
            addCriterion("ap_id between", value1, value2, "apId");
            return (Criteria) this;
        }

        public Criteria andApIdNotBetween(Integer value1, Integer value2) {
            addCriterion("ap_id not between", value1, value2, "apId");
            return (Criteria) this;
        }

        public Criteria andDeIdIsNull() {
            addCriterion("de_id is null");
            return (Criteria) this;
        }

        public Criteria andDeIdIsNotNull() {
            addCriterion("de_id is not null");
            return (Criteria) this;
        }

        public Criteria andDeIdEqualTo(Integer value) {
            addCriterion("de_id =", value, "deId");
            return (Criteria) this;
        }

        public Criteria andDeIdNotEqualTo(Integer value) {
            addCriterion("de_id <>", value, "deId");
            return (Criteria) this;
        }

        public Criteria andDeIdGreaterThan(Integer value) {
            addCriterion("de_id >", value, "deId");
            return (Criteria) this;
        }

        public Criteria andDeIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("de_id >=", value, "deId");
            return (Criteria) this;
        }

        public Criteria andDeIdLessThan(Integer value) {
            addCriterion("de_id <", value, "deId");
            return (Criteria) this;
        }

        public Criteria andDeIdLessThanOrEqualTo(Integer value) {
            addCriterion("de_id <=", value, "deId");
            return (Criteria) this;
        }

        public Criteria andDeIdIn(List<Integer> values) {
            addCriterion("de_id in", values, "deId");
            return (Criteria) this;
        }

        public Criteria andDeIdNotIn(List<Integer> values) {
            addCriterion("de_id not in", values, "deId");
            return (Criteria) this;
        }

        public Criteria andDeIdBetween(Integer value1, Integer value2) {
            addCriterion("de_id between", value1, value2, "deId");
            return (Criteria) this;
        }

        public Criteria andDeIdNotBetween(Integer value1, Integer value2) {
            addCriterion("de_id not between", value1, value2, "deId");
            return (Criteria) this;
        }

        public Criteria andDeApidIsNull() {
            addCriterion("de_apid is null");
            return (Criteria) this;
        }

        public Criteria andDeApidIsNotNull() {
            addCriterion("de_apid is not null");
            return (Criteria) this;
        }

        public Criteria andDeApidEqualTo(Integer value) {
            addCriterion("de_apid =", value, "deApid");
            return (Criteria) this;
        }

        public Criteria andDeApidNotEqualTo(Integer value) {
            addCriterion("de_apid <>", value, "deApid");
            return (Criteria) this;
        }

        public Criteria andDeApidGreaterThan(Integer value) {
            addCriterion("de_apid >", value, "deApid");
            return (Criteria) this;
        }

        public Criteria andDeApidGreaterThanOrEqualTo(Integer value) {
            addCriterion("de_apid >=", value, "deApid");
            return (Criteria) this;
        }

        public Criteria andDeApidLessThan(Integer value) {
            addCriterion("de_apid <", value, "deApid");
            return (Criteria) this;
        }

        public Criteria andDeApidLessThanOrEqualTo(Integer value) {
            addCriterion("de_apid <=", value, "deApid");
            return (Criteria) this;
        }

        public Criteria andDeApidIn(List<Integer> values) {
            addCriterion("de_apid in", values, "deApid");
            return (Criteria) this;
        }

        public Criteria andDeApidNotIn(List<Integer> values) {
            addCriterion("de_apid not in", values, "deApid");
            return (Criteria) this;
        }

        public Criteria andDeApidBetween(Integer value1, Integer value2) {
            addCriterion("de_apid between", value1, value2, "deApid");
            return (Criteria) this;
        }

        public Criteria andDeApidNotBetween(Integer value1, Integer value2) {
            addCriterion("de_apid not between", value1, value2, "deApid");
            return (Criteria) this;
        }

        public Criteria andDeAddressIsNull() {
            addCriterion("de_address is null");
            return (Criteria) this;
        }

        public Criteria andDeAddressIsNotNull() {
            addCriterion("de_address is not null");
            return (Criteria) this;
        }

        public Criteria andDeAddressEqualTo(String value) {
            addCriterion("de_address =", value, "deAddress");
            return (Criteria) this;
        }

        public Criteria andDeAddressNotEqualTo(String value) {
            addCriterion("de_address <>", value, "deAddress");
            return (Criteria) this;
        }

        public Criteria andDeAddressGreaterThan(String value) {
            addCriterion("de_address >", value, "deAddress");
            return (Criteria) this;
        }

        public Criteria andDeAddressGreaterThanOrEqualTo(String value) {
            addCriterion("de_address >=", value, "deAddress");
            return (Criteria) this;
        }

        public Criteria andDeAddressLessThan(String value) {
            addCriterion("de_address <", value, "deAddress");
            return (Criteria) this;
        }

        public Criteria andDeAddressLessThanOrEqualTo(String value) {
            addCriterion("de_address <=", value, "deAddress");
            return (Criteria) this;
        }

        public Criteria andDeAddressLike(String value) {
            addCriterion("de_address like", value, "deAddress");
            return (Criteria) this;
        }

        public Criteria andDeAddressNotLike(String value) {
            addCriterion("de_address not like", value, "deAddress");
            return (Criteria) this;
        }

        public Criteria andDeAddressIn(List<String> values) {
            addCriterion("de_address in", values, "deAddress");
            return (Criteria) this;
        }

        public Criteria andDeAddressNotIn(List<String> values) {
            addCriterion("de_address not in", values, "deAddress");
            return (Criteria) this;
        }

        public Criteria andDeAddressBetween(String value1, String value2) {
            addCriterion("de_address between", value1, value2, "deAddress");
            return (Criteria) this;
        }

        public Criteria andDeAddressNotBetween(String value1, String value2) {
            addCriterion("de_address not between", value1, value2, "deAddress");
            return (Criteria) this;
        }

        public Criteria andDeProductIsNull() {
            addCriterion("de_product is null");
            return (Criteria) this;
        }

        public Criteria andDeProductIsNotNull() {
            addCriterion("de_product is not null");
            return (Criteria) this;
        }

        public Criteria andDeProductEqualTo(String value) {
            addCriterion("de_product =", value, "deProduct");
            return (Criteria) this;
        }

        public Criteria andDeProductNotEqualTo(String value) {
            addCriterion("de_product <>", value, "deProduct");
            return (Criteria) this;
        }

        public Criteria andDeProductGreaterThan(String value) {
            addCriterion("de_product >", value, "deProduct");
            return (Criteria) this;
        }

        public Criteria andDeProductGreaterThanOrEqualTo(String value) {
            addCriterion("de_product >=", value, "deProduct");
            return (Criteria) this;
        }

        public Criteria andDeProductLessThan(String value) {
            addCriterion("de_product <", value, "deProduct");
            return (Criteria) this;
        }

        public Criteria andDeProductLessThanOrEqualTo(String value) {
            addCriterion("de_product <=", value, "deProduct");
            return (Criteria) this;
        }

        public Criteria andDeProductLike(String value) {
            addCriterion("de_product like", value, "deProduct");
            return (Criteria) this;
        }

        public Criteria andDeProductNotLike(String value) {
            addCriterion("de_product not like", value, "deProduct");
            return (Criteria) this;
        }

        public Criteria andDeProductIn(List<String> values) {
            addCriterion("de_product in", values, "deProduct");
            return (Criteria) this;
        }

        public Criteria andDeProductNotIn(List<String> values) {
            addCriterion("de_product not in", values, "deProduct");
            return (Criteria) this;
        }

        public Criteria andDeProductBetween(String value1, String value2) {
            addCriterion("de_product between", value1, value2, "deProduct");
            return (Criteria) this;
        }

        public Criteria andDeProductNotBetween(String value1, String value2) {
            addCriterion("de_product not between", value1, value2, "deProduct");
            return (Criteria) this;
        }

        public Criteria andDePriceIsNull() {
            addCriterion("de_price is null");
            return (Criteria) this;
        }

        public Criteria andDePriceIsNotNull() {
            addCriterion("de_price is not null");
            return (Criteria) this;
        }

        public Criteria andDePriceEqualTo(Long value) {
            addCriterion("de_price =", value, "dePrice");
            return (Criteria) this;
        }

        public Criteria andDePriceNotEqualTo(Long value) {
            addCriterion("de_price <>", value, "dePrice");
            return (Criteria) this;
        }

        public Criteria andDePriceGreaterThan(Long value) {
            addCriterion("de_price >", value, "dePrice");
            return (Criteria) this;
        }

        public Criteria andDePriceGreaterThanOrEqualTo(Long value) {
            addCriterion("de_price >=", value, "dePrice");
            return (Criteria) this;
        }

        public Criteria andDePriceLessThan(Long value) {
            addCriterion("de_price <", value, "dePrice");
            return (Criteria) this;
        }

        public Criteria andDePriceLessThanOrEqualTo(Long value) {
            addCriterion("de_price <=", value, "dePrice");
            return (Criteria) this;
        }

        public Criteria andDePriceIn(List<Long> values) {
            addCriterion("de_price in", values, "dePrice");
            return (Criteria) this;
        }

        public Criteria andDePriceNotIn(List<Long> values) {
            addCriterion("de_price not in", values, "dePrice");
            return (Criteria) this;
        }

        public Criteria andDePriceBetween(Long value1, Long value2) {
            addCriterion("de_price between", value1, value2, "dePrice");
            return (Criteria) this;
        }

        public Criteria andDePriceNotBetween(Long value1, Long value2) {
            addCriterion("de_price not between", value1, value2, "dePrice");
            return (Criteria) this;
        }

        public Criteria andDeCountIsNull() {
            addCriterion("de_count is null");
            return (Criteria) this;
        }

        public Criteria andDeCountIsNotNull() {
            addCriterion("de_count is not null");
            return (Criteria) this;
        }

        public Criteria andDeCountEqualTo(Long value) {
            addCriterion("de_count =", value, "deCount");
            return (Criteria) this;
        }

        public Criteria andDeCountNotEqualTo(Long value) {
            addCriterion("de_count <>", value, "deCount");
            return (Criteria) this;
        }

        public Criteria andDeCountGreaterThan(Long value) {
            addCriterion("de_count >", value, "deCount");
            return (Criteria) this;
        }

        public Criteria andDeCountGreaterThanOrEqualTo(Long value) {
            addCriterion("de_count >=", value, "deCount");
            return (Criteria) this;
        }

        public Criteria andDeCountLessThan(Long value) {
            addCriterion("de_count <", value, "deCount");
            return (Criteria) this;
        }

        public Criteria andDeCountLessThanOrEqualTo(Long value) {
            addCriterion("de_count <=", value, "deCount");
            return (Criteria) this;
        }

        public Criteria andDeCountIn(List<Long> values) {
            addCriterion("de_count in", values, "deCount");
            return (Criteria) this;
        }

        public Criteria andDeCountNotIn(List<Long> values) {
            addCriterion("de_count not in", values, "deCount");
            return (Criteria) this;
        }

        public Criteria andDeCountBetween(Long value1, Long value2) {
            addCriterion("de_count between", value1, value2, "deCount");
            return (Criteria) this;
        }

        public Criteria andDeCountNotBetween(Long value1, Long value2) {
            addCriterion("de_count not between", value1, value2, "deCount");
            return (Criteria) this;
        }

        public Criteria andDeTotalIsNull() {
            addCriterion("de_total is null");
            return (Criteria) this;
        }

        public Criteria andDeTotalIsNotNull() {
            addCriterion("de_total is not null");
            return (Criteria) this;
        }

        public Criteria andDeTotalEqualTo(Long value) {
            addCriterion("de_total =", value, "deTotal");
            return (Criteria) this;
        }

        public Criteria andDeTotalNotEqualTo(Long value) {
            addCriterion("de_total <>", value, "deTotal");
            return (Criteria) this;
        }

        public Criteria andDeTotalGreaterThan(Long value) {
            addCriterion("de_total >", value, "deTotal");
            return (Criteria) this;
        }

        public Criteria andDeTotalGreaterThanOrEqualTo(Long value) {
            addCriterion("de_total >=", value, "deTotal");
            return (Criteria) this;
        }

        public Criteria andDeTotalLessThan(Long value) {
            addCriterion("de_total <", value, "deTotal");
            return (Criteria) this;
        }

        public Criteria andDeTotalLessThanOrEqualTo(Long value) {
            addCriterion("de_total <=", value, "deTotal");
            return (Criteria) this;
        }

        public Criteria andDeTotalIn(List<Long> values) {
            addCriterion("de_total in", values, "deTotal");
            return (Criteria) this;
        }

        public Criteria andDeTotalNotIn(List<Long> values) {
            addCriterion("de_total not in", values, "deTotal");
            return (Criteria) this;
        }

        public Criteria andDeTotalBetween(Long value1, Long value2) {
            addCriterion("de_total between", value1, value2, "deTotal");
            return (Criteria) this;
        }

        public Criteria andDeTotalNotBetween(Long value1, Long value2) {
            addCriterion("de_total not between", value1, value2, "deTotal");
            return (Criteria) this;
        }

        public Criteria andDeFreightIsNull() {
            addCriterion("de_freight is null");
            return (Criteria) this;
        }

        public Criteria andDeFreightIsNotNull() {
            addCriterion("de_freight is not null");
            return (Criteria) this;
        }

        public Criteria andDeFreightEqualTo(Long value) {
            addCriterion("de_freight =", value, "deFreight");
            return (Criteria) this;
        }

        public Criteria andDeFreightNotEqualTo(Long value) {
            addCriterion("de_freight <>", value, "deFreight");
            return (Criteria) this;
        }

        public Criteria andDeFreightGreaterThan(Long value) {
            addCriterion("de_freight >", value, "deFreight");
            return (Criteria) this;
        }

        public Criteria andDeFreightGreaterThanOrEqualTo(Long value) {
            addCriterion("de_freight >=", value, "deFreight");
            return (Criteria) this;
        }

        public Criteria andDeFreightLessThan(Long value) {
            addCriterion("de_freight <", value, "deFreight");
            return (Criteria) this;
        }

        public Criteria andDeFreightLessThanOrEqualTo(Long value) {
            addCriterion("de_freight <=", value, "deFreight");
            return (Criteria) this;
        }

        public Criteria andDeFreightIn(List<Long> values) {
            addCriterion("de_freight in", values, "deFreight");
            return (Criteria) this;
        }

        public Criteria andDeFreightNotIn(List<Long> values) {
            addCriterion("de_freight not in", values, "deFreight");
            return (Criteria) this;
        }

        public Criteria andDeFreightBetween(Long value1, Long value2) {
            addCriterion("de_freight between", value1, value2, "deFreight");
            return (Criteria) this;
        }

        public Criteria andDeFreightNotBetween(Long value1, Long value2) {
            addCriterion("de_freight not between", value1, value2, "deFreight");
            return (Criteria) this;
        }

        public Criteria andDeCarriageIsNull() {
            addCriterion("de_carriage is null");
            return (Criteria) this;
        }

        public Criteria andDeCarriageIsNotNull() {
            addCriterion("de_carriage is not null");
            return (Criteria) this;
        }

        public Criteria andDeCarriageEqualTo(Long value) {
            addCriterion("de_carriage =", value, "deCarriage");
            return (Criteria) this;
        }

        public Criteria andDeCarriageNotEqualTo(Long value) {
            addCriterion("de_carriage <>", value, "deCarriage");
            return (Criteria) this;
        }

        public Criteria andDeCarriageGreaterThan(Long value) {
            addCriterion("de_carriage >", value, "deCarriage");
            return (Criteria) this;
        }

        public Criteria andDeCarriageGreaterThanOrEqualTo(Long value) {
            addCriterion("de_carriage >=", value, "deCarriage");
            return (Criteria) this;
        }

        public Criteria andDeCarriageLessThan(Long value) {
            addCriterion("de_carriage <", value, "deCarriage");
            return (Criteria) this;
        }

        public Criteria andDeCarriageLessThanOrEqualTo(Long value) {
            addCriterion("de_carriage <=", value, "deCarriage");
            return (Criteria) this;
        }

        public Criteria andDeCarriageIn(List<Long> values) {
            addCriterion("de_carriage in", values, "deCarriage");
            return (Criteria) this;
        }

        public Criteria andDeCarriageNotIn(List<Long> values) {
            addCriterion("de_carriage not in", values, "deCarriage");
            return (Criteria) this;
        }

        public Criteria andDeCarriageBetween(Long value1, Long value2) {
            addCriterion("de_carriage between", value1, value2, "deCarriage");
            return (Criteria) this;
        }

        public Criteria andDeCarriageNotBetween(Long value1, Long value2) {
            addCriterion("de_carriage not between", value1, value2, "deCarriage");
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