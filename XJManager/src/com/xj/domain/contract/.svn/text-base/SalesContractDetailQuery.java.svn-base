package com.xj.domain.contract;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class SalesContractDetailQuery {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Integer pageNo = 1;

    protected Integer startRow;

    protected Integer pageSize = 10;

    protected String fields;

    public SalesContractDetailQuery() {
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

        public Criteria andScdIdIsNull() {
            addCriterion("scd_id is null");
            return (Criteria) this;
        }

        public Criteria andScdIdIsNotNull() {
            addCriterion("scd_id is not null");
            return (Criteria) this;
        }

        public Criteria andScdIdEqualTo(String value) {
            addCriterion("scd_id =", value, "scdId");
            return (Criteria) this;
        }

        public Criteria andScdIdNotEqualTo(String value) {
            addCriterion("scd_id <>", value, "scdId");
            return (Criteria) this;
        }

        public Criteria andScdIdGreaterThan(String value) {
            addCriterion("scd_id >", value, "scdId");
            return (Criteria) this;
        }

        public Criteria andScdIdGreaterThanOrEqualTo(String value) {
            addCriterion("scd_id >=", value, "scdId");
            return (Criteria) this;
        }

        public Criteria andScdIdLessThan(String value) {
            addCriterion("scd_id <", value, "scdId");
            return (Criteria) this;
        }

        public Criteria andScdIdLessThanOrEqualTo(String value) {
            addCriterion("scd_id <=", value, "scdId");
            return (Criteria) this;
        }

        public Criteria andScdIdLike(String value) {
            addCriterion("scd_id like", value, "scdId");
            return (Criteria) this;
        }

        public Criteria andScdIdNotLike(String value) {
            addCriterion("scd_id not like", value, "scdId");
            return (Criteria) this;
        }

        public Criteria andScdIdIn(List<String> values) {
            addCriterion("scd_id in", values, "scdId");
            return (Criteria) this;
        }

        public Criteria andScdIdNotIn(List<String> values) {
            addCriterion("scd_id not in", values, "scdId");
            return (Criteria) this;
        }

        public Criteria andScdIdBetween(String value1, String value2) {
            addCriterion("scd_id between", value1, value2, "scdId");
            return (Criteria) this;
        }

        public Criteria andScdIdNotBetween(String value1, String value2) {
            addCriterion("scd_id not between", value1, value2, "scdId");
            return (Criteria) this;
        }

        public Criteria andScdScidIsNull() {
            addCriterion("scd_scid is null");
            return (Criteria) this;
        }

        public Criteria andScdScidIsNotNull() {
            addCriterion("scd_scid is not null");
            return (Criteria) this;
        }

        public Criteria andScdScidEqualTo(String value) {
            addCriterion("scd_scid =", value, "scdScid");
            return (Criteria) this;
        }

        public Criteria andScdScidNotEqualTo(String value) {
            addCriterion("scd_scid <>", value, "scdScid");
            return (Criteria) this;
        }

        public Criteria andScdScidGreaterThan(String value) {
            addCriterion("scd_scid >", value, "scdScid");
            return (Criteria) this;
        }

        public Criteria andScdScidGreaterThanOrEqualTo(String value) {
            addCriterion("scd_scid >=", value, "scdScid");
            return (Criteria) this;
        }

        public Criteria andScdScidLessThan(String value) {
            addCriterion("scd_scid <", value, "scdScid");
            return (Criteria) this;
        }

        public Criteria andScdScidLessThanOrEqualTo(String value) {
            addCriterion("scd_scid <=", value, "scdScid");
            return (Criteria) this;
        }

        public Criteria andScdScidLike(String value) {
            addCriterion("scd_scid like", value, "scdScid");
            return (Criteria) this;
        }

        public Criteria andScdScidNotLike(String value) {
            addCriterion("scd_scid not like", value, "scdScid");
            return (Criteria) this;
        }

        public Criteria andScdScidIn(List<String> values) {
            addCriterion("scd_scid in", values, "scdScid");
            return (Criteria) this;
        }

        public Criteria andScdScidNotIn(List<String> values) {
            addCriterion("scd_scid not in", values, "scdScid");
            return (Criteria) this;
        }

        public Criteria andScdScidBetween(String value1, String value2) {
            addCriterion("scd_scid between", value1, value2, "scdScid");
            return (Criteria) this;
        }

        public Criteria andScdScidNotBetween(String value1, String value2) {
            addCriterion("scd_scid not between", value1, value2, "scdScid");
            return (Criteria) this;
        }

        public Criteria andScdReceivingunitIsNull() {
            addCriterion("scd_receivingUnit is null");
            return (Criteria) this;
        }

        public Criteria andScdReceivingunitIsNotNull() {
            addCriterion("scd_receivingUnit is not null");
            return (Criteria) this;
        }

        public Criteria andScdReceivingunitEqualTo(String value) {
            addCriterion("scd_receivingUnit =", value, "scdReceivingunit");
            return (Criteria) this;
        }

        public Criteria andScdReceivingunitNotEqualTo(String value) {
            addCriterion("scd_receivingUnit <>", value, "scdReceivingunit");
            return (Criteria) this;
        }

        public Criteria andScdReceivingunitGreaterThan(String value) {
            addCriterion("scd_receivingUnit >", value, "scdReceivingunit");
            return (Criteria) this;
        }

        public Criteria andScdReceivingunitGreaterThanOrEqualTo(String value) {
            addCriterion("scd_receivingUnit >=", value, "scdReceivingunit");
            return (Criteria) this;
        }

        public Criteria andScdReceivingunitLessThan(String value) {
            addCriterion("scd_receivingUnit <", value, "scdReceivingunit");
            return (Criteria) this;
        }

        public Criteria andScdReceivingunitLessThanOrEqualTo(String value) {
            addCriterion("scd_receivingUnit <=", value, "scdReceivingunit");
            return (Criteria) this;
        }

        public Criteria andScdReceivingunitLike(String value) {
            addCriterion("scd_receivingUnit like", value, "scdReceivingunit");
            return (Criteria) this;
        }

        public Criteria andScdReceivingunitNotLike(String value) {
            addCriterion("scd_receivingUnit not like", value, "scdReceivingunit");
            return (Criteria) this;
        }

        public Criteria andScdReceivingunitIn(List<String> values) {
            addCriterion("scd_receivingUnit in", values, "scdReceivingunit");
            return (Criteria) this;
        }

        public Criteria andScdReceivingunitNotIn(List<String> values) {
            addCriterion("scd_receivingUnit not in", values, "scdReceivingunit");
            return (Criteria) this;
        }

        public Criteria andScdReceivingunitBetween(String value1, String value2) {
            addCriterion("scd_receivingUnit between", value1, value2, "scdReceivingunit");
            return (Criteria) this;
        }

        public Criteria andScdReceivingunitNotBetween(String value1, String value2) {
            addCriterion("scd_receivingUnit not between", value1, value2, "scdReceivingunit");
            return (Criteria) this;
        }

        public Criteria andScdHairstandingIsNull() {
            addCriterion("scd_hairStanding is null");
            return (Criteria) this;
        }

        public Criteria andScdHairstandingIsNotNull() {
            addCriterion("scd_hairStanding is not null");
            return (Criteria) this;
        }

        public Criteria andScdHairstandingEqualTo(String value) {
            addCriterion("scd_hairStanding =", value, "scdHairstanding");
            return (Criteria) this;
        }

        public Criteria andScdHairstandingNotEqualTo(String value) {
            addCriterion("scd_hairStanding <>", value, "scdHairstanding");
            return (Criteria) this;
        }

        public Criteria andScdHairstandingGreaterThan(String value) {
            addCriterion("scd_hairStanding >", value, "scdHairstanding");
            return (Criteria) this;
        }

        public Criteria andScdHairstandingGreaterThanOrEqualTo(String value) {
            addCriterion("scd_hairStanding >=", value, "scdHairstanding");
            return (Criteria) this;
        }

        public Criteria andScdHairstandingLessThan(String value) {
            addCriterion("scd_hairStanding <", value, "scdHairstanding");
            return (Criteria) this;
        }

        public Criteria andScdHairstandingLessThanOrEqualTo(String value) {
            addCriterion("scd_hairStanding <=", value, "scdHairstanding");
            return (Criteria) this;
        }

        public Criteria andScdHairstandingLike(String value) {
            addCriterion("scd_hairStanding like", value, "scdHairstanding");
            return (Criteria) this;
        }

        public Criteria andScdHairstandingNotLike(String value) {
            addCriterion("scd_hairStanding not like", value, "scdHairstanding");
            return (Criteria) this;
        }

        public Criteria andScdHairstandingIn(List<String> values) {
            addCriterion("scd_hairStanding in", values, "scdHairstanding");
            return (Criteria) this;
        }

        public Criteria andScdHairstandingNotIn(List<String> values) {
            addCriterion("scd_hairStanding not in", values, "scdHairstanding");
            return (Criteria) this;
        }

        public Criteria andScdHairstandingBetween(String value1, String value2) {
            addCriterion("scd_hairStanding between", value1, value2, "scdHairstanding");
            return (Criteria) this;
        }

        public Criteria andScdHairstandingNotBetween(String value1, String value2) {
            addCriterion("scd_hairStanding not between", value1, value2, "scdHairstanding");
            return (Criteria) this;
        }

        public Criteria andScdArrivestationIsNull() {
            addCriterion("scd_arriveStation is null");
            return (Criteria) this;
        }

        public Criteria andScdArrivestationIsNotNull() {
            addCriterion("scd_arriveStation is not null");
            return (Criteria) this;
        }

        public Criteria andScdArrivestationEqualTo(String value) {
            addCriterion("scd_arriveStation =", value, "scdArrivestation");
            return (Criteria) this;
        }

        public Criteria andScdArrivestationNotEqualTo(String value) {
            addCriterion("scd_arriveStation <>", value, "scdArrivestation");
            return (Criteria) this;
        }

        public Criteria andScdArrivestationGreaterThan(String value) {
            addCriterion("scd_arriveStation >", value, "scdArrivestation");
            return (Criteria) this;
        }

        public Criteria andScdArrivestationGreaterThanOrEqualTo(String value) {
            addCriterion("scd_arriveStation >=", value, "scdArrivestation");
            return (Criteria) this;
        }

        public Criteria andScdArrivestationLessThan(String value) {
            addCriterion("scd_arriveStation <", value, "scdArrivestation");
            return (Criteria) this;
        }

        public Criteria andScdArrivestationLessThanOrEqualTo(String value) {
            addCriterion("scd_arriveStation <=", value, "scdArrivestation");
            return (Criteria) this;
        }

        public Criteria andScdArrivestationLike(String value) {
            addCriterion("scd_arriveStation like", value, "scdArrivestation");
            return (Criteria) this;
        }

        public Criteria andScdArrivestationNotLike(String value) {
            addCriterion("scd_arriveStation not like", value, "scdArrivestation");
            return (Criteria) this;
        }

        public Criteria andScdArrivestationIn(List<String> values) {
            addCriterion("scd_arriveStation in", values, "scdArrivestation");
            return (Criteria) this;
        }

        public Criteria andScdArrivestationNotIn(List<String> values) {
            addCriterion("scd_arriveStation not in", values, "scdArrivestation");
            return (Criteria) this;
        }

        public Criteria andScdArrivestationBetween(String value1, String value2) {
            addCriterion("scd_arriveStation between", value1, value2, "scdArrivestation");
            return (Criteria) this;
        }

        public Criteria andScdArrivestationNotBetween(String value1, String value2) {
            addCriterion("scd_arriveStation not between", value1, value2, "scdArrivestation");
            return (Criteria) this;
        }

        public Criteria andScdProductnameIsNull() {
            addCriterion("scd_productName is null");
            return (Criteria) this;
        }

        public Criteria andScdProductnameIsNotNull() {
            addCriterion("scd_productName is not null");
            return (Criteria) this;
        }

        public Criteria andScdProductnameEqualTo(String value) {
            addCriterion("scd_productName =", value, "scdProductname");
            return (Criteria) this;
        }

        public Criteria andScdProductnameNotEqualTo(String value) {
            addCriterion("scd_productName <>", value, "scdProductname");
            return (Criteria) this;
        }

        public Criteria andScdProductnameGreaterThan(String value) {
            addCriterion("scd_productName >", value, "scdProductname");
            return (Criteria) this;
        }

        public Criteria andScdProductnameGreaterThanOrEqualTo(String value) {
            addCriterion("scd_productName >=", value, "scdProductname");
            return (Criteria) this;
        }

        public Criteria andScdProductnameLessThan(String value) {
            addCriterion("scd_productName <", value, "scdProductname");
            return (Criteria) this;
        }

        public Criteria andScdProductnameLessThanOrEqualTo(String value) {
            addCriterion("scd_productName <=", value, "scdProductname");
            return (Criteria) this;
        }

        public Criteria andScdProductnameLike(String value) {
            addCriterion("scd_productName like", value, "scdProductname");
            return (Criteria) this;
        }

        public Criteria andScdProductnameNotLike(String value) {
            addCriterion("scd_productName not like", value, "scdProductname");
            return (Criteria) this;
        }

        public Criteria andScdProductnameIn(List<String> values) {
            addCriterion("scd_productName in", values, "scdProductname");
            return (Criteria) this;
        }

        public Criteria andScdProductnameNotIn(List<String> values) {
            addCriterion("scd_productName not in", values, "scdProductname");
            return (Criteria) this;
        }

        public Criteria andScdProductnameBetween(String value1, String value2) {
            addCriterion("scd_productName between", value1, value2, "scdProductname");
            return (Criteria) this;
        }

        public Criteria andScdProductnameNotBetween(String value1, String value2) {
            addCriterion("scd_productName not between", value1, value2, "scdProductname");
            return (Criteria) this;
        }

        public Criteria andScdQualitystandardIsNull() {
            addCriterion("scd_qualityStandard is null");
            return (Criteria) this;
        }

        public Criteria andScdQualitystandardIsNotNull() {
            addCriterion("scd_qualityStandard is not null");
            return (Criteria) this;
        }

        public Criteria andScdQualitystandardEqualTo(String value) {
            addCriterion("scd_qualityStandard =", value, "scdQualitystandard");
            return (Criteria) this;
        }

        public Criteria andScdQualitystandardNotEqualTo(String value) {
            addCriterion("scd_qualityStandard <>", value, "scdQualitystandard");
            return (Criteria) this;
        }

        public Criteria andScdQualitystandardGreaterThan(String value) {
            addCriterion("scd_qualityStandard >", value, "scdQualitystandard");
            return (Criteria) this;
        }

        public Criteria andScdQualitystandardGreaterThanOrEqualTo(String value) {
            addCriterion("scd_qualityStandard >=", value, "scdQualitystandard");
            return (Criteria) this;
        }

        public Criteria andScdQualitystandardLessThan(String value) {
            addCriterion("scd_qualityStandard <", value, "scdQualitystandard");
            return (Criteria) this;
        }

        public Criteria andScdQualitystandardLessThanOrEqualTo(String value) {
            addCriterion("scd_qualityStandard <=", value, "scdQualitystandard");
            return (Criteria) this;
        }

        public Criteria andScdQualitystandardLike(String value) {
            addCriterion("scd_qualityStandard like", value, "scdQualitystandard");
            return (Criteria) this;
        }

        public Criteria andScdQualitystandardNotLike(String value) {
            addCriterion("scd_qualityStandard not like", value, "scdQualitystandard");
            return (Criteria) this;
        }

        public Criteria andScdQualitystandardIn(List<String> values) {
            addCriterion("scd_qualityStandard in", values, "scdQualitystandard");
            return (Criteria) this;
        }

        public Criteria andScdQualitystandardNotIn(List<String> values) {
            addCriterion("scd_qualityStandard not in", values, "scdQualitystandard");
            return (Criteria) this;
        }

        public Criteria andScdQualitystandardBetween(String value1, String value2) {
            addCriterion("scd_qualityStandard between", value1, value2, "scdQualitystandard");
            return (Criteria) this;
        }

        public Criteria andScdQualitystandardNotBetween(String value1, String value2) {
            addCriterion("scd_qualityStandard not between", value1, value2, "scdQualitystandard");
            return (Criteria) this;
        }

        public Criteria andScdUnitpriceIsNull() {
            addCriterion("scd_unitPrice is null");
            return (Criteria) this;
        }

        public Criteria andScdUnitpriceIsNotNull() {
            addCriterion("scd_unitPrice is not null");
            return (Criteria) this;
        }

        public Criteria andScdUnitpriceEqualTo(Long value) {
            addCriterion("scd_unitPrice =", value, "scdUnitprice");
            return (Criteria) this;
        }

        public Criteria andScdUnitpriceNotEqualTo(Long value) {
            addCriterion("scd_unitPrice <>", value, "scdUnitprice");
            return (Criteria) this;
        }

        public Criteria andScdUnitpriceGreaterThan(Long value) {
            addCriterion("scd_unitPrice >", value, "scdUnitprice");
            return (Criteria) this;
        }

        public Criteria andScdUnitpriceGreaterThanOrEqualTo(Long value) {
            addCriterion("scd_unitPrice >=", value, "scdUnitprice");
            return (Criteria) this;
        }

        public Criteria andScdUnitpriceLessThan(Long value) {
            addCriterion("scd_unitPrice <", value, "scdUnitprice");
            return (Criteria) this;
        }

        public Criteria andScdUnitpriceLessThanOrEqualTo(Long value) {
            addCriterion("scd_unitPrice <=", value, "scdUnitprice");
            return (Criteria) this;
        }

        public Criteria andScdUnitpriceIn(List<Long> values) {
            addCriterion("scd_unitPrice in", values, "scdUnitprice");
            return (Criteria) this;
        }

        public Criteria andScdUnitpriceNotIn(List<Long> values) {
            addCriterion("scd_unitPrice not in", values, "scdUnitprice");
            return (Criteria) this;
        }

        public Criteria andScdUnitpriceBetween(Long value1, Long value2) {
            addCriterion("scd_unitPrice between", value1, value2, "scdUnitprice");
            return (Criteria) this;
        }

        public Criteria andScdUnitpriceNotBetween(Long value1, Long value2) {
            addCriterion("scd_unitPrice not between", value1, value2, "scdUnitprice");
            return (Criteria) this;
        }

        public Criteria andScdIndextypeIsNull() {
            addCriterion("scd_indexType is null");
            return (Criteria) this;
        }

        public Criteria andScdIndextypeIsNotNull() {
            addCriterion("scd_indexType is not null");
            return (Criteria) this;
        }

        public Criteria andScdIndextypeEqualTo(String value) {
            addCriterion("scd_indexType =", value, "scdIndextype");
            return (Criteria) this;
        }

        public Criteria andScdIndextypeNotEqualTo(String value) {
            addCriterion("scd_indexType <>", value, "scdIndextype");
            return (Criteria) this;
        }

        public Criteria andScdIndextypeGreaterThan(String value) {
            addCriterion("scd_indexType >", value, "scdIndextype");
            return (Criteria) this;
        }

        public Criteria andScdIndextypeGreaterThanOrEqualTo(String value) {
            addCriterion("scd_indexType >=", value, "scdIndextype");
            return (Criteria) this;
        }

        public Criteria andScdIndextypeLessThan(String value) {
            addCriterion("scd_indexType <", value, "scdIndextype");
            return (Criteria) this;
        }

        public Criteria andScdIndextypeLessThanOrEqualTo(String value) {
            addCriterion("scd_indexType <=", value, "scdIndextype");
            return (Criteria) this;
        }

        public Criteria andScdIndextypeLike(String value) {
            addCriterion("scd_indexType like", value, "scdIndextype");
            return (Criteria) this;
        }

        public Criteria andScdIndextypeNotLike(String value) {
            addCriterion("scd_indexType not like", value, "scdIndextype");
            return (Criteria) this;
        }

        public Criteria andScdIndextypeIn(List<String> values) {
            addCriterion("scd_indexType in", values, "scdIndextype");
            return (Criteria) this;
        }

        public Criteria andScdIndextypeNotIn(List<String> values) {
            addCriterion("scd_indexType not in", values, "scdIndextype");
            return (Criteria) this;
        }

        public Criteria andScdIndextypeBetween(String value1, String value2) {
            addCriterion("scd_indexType between", value1, value2, "scdIndextype");
            return (Criteria) this;
        }

        public Criteria andScdIndextypeNotBetween(String value1, String value2) {
            addCriterion("scd_indexType not between", value1, value2, "scdIndextype");
            return (Criteria) this;
        }

        public Criteria andScdIndexnameIsNull() {
            addCriterion("scd_indexName is null");
            return (Criteria) this;
        }

        public Criteria andScdIndexnameIsNotNull() {
            addCriterion("scd_indexName is not null");
            return (Criteria) this;
        }

        public Criteria andScdIndexnameEqualTo(String value) {
            addCriterion("scd_indexName =", value, "scdIndexname");
            return (Criteria) this;
        }

        public Criteria andScdIndexnameNotEqualTo(String value) {
            addCriterion("scd_indexName <>", value, "scdIndexname");
            return (Criteria) this;
        }

        public Criteria andScdIndexnameGreaterThan(String value) {
            addCriterion("scd_indexName >", value, "scdIndexname");
            return (Criteria) this;
        }

        public Criteria andScdIndexnameGreaterThanOrEqualTo(String value) {
            addCriterion("scd_indexName >=", value, "scdIndexname");
            return (Criteria) this;
        }

        public Criteria andScdIndexnameLessThan(String value) {
            addCriterion("scd_indexName <", value, "scdIndexname");
            return (Criteria) this;
        }

        public Criteria andScdIndexnameLessThanOrEqualTo(String value) {
            addCriterion("scd_indexName <=", value, "scdIndexname");
            return (Criteria) this;
        }

        public Criteria andScdIndexnameLike(String value) {
            addCriterion("scd_indexName like", value, "scdIndexname");
            return (Criteria) this;
        }

        public Criteria andScdIndexnameNotLike(String value) {
            addCriterion("scd_indexName not like", value, "scdIndexname");
            return (Criteria) this;
        }

        public Criteria andScdIndexnameIn(List<String> values) {
            addCriterion("scd_indexName in", values, "scdIndexname");
            return (Criteria) this;
        }

        public Criteria andScdIndexnameNotIn(List<String> values) {
            addCriterion("scd_indexName not in", values, "scdIndexname");
            return (Criteria) this;
        }

        public Criteria andScdIndexnameBetween(String value1, String value2) {
            addCriterion("scd_indexName between", value1, value2, "scdIndexname");
            return (Criteria) this;
        }

        public Criteria andScdIndexnameNotBetween(String value1, String value2) {
            addCriterion("scd_indexName not between", value1, value2, "scdIndexname");
            return (Criteria) this;
        }

        public Criteria andScdShippingtypeIsNull() {
            addCriterion("scd_shippingType is null");
            return (Criteria) this;
        }

        public Criteria andScdShippingtypeIsNotNull() {
            addCriterion("scd_shippingType is not null");
            return (Criteria) this;
        }

        public Criteria andScdShippingtypeEqualTo(String value) {
            addCriterion("scd_shippingType =", value, "scdShippingtype");
            return (Criteria) this;
        }

        public Criteria andScdShippingtypeNotEqualTo(String value) {
            addCriterion("scd_shippingType <>", value, "scdShippingtype");
            return (Criteria) this;
        }

        public Criteria andScdShippingtypeGreaterThan(String value) {
            addCriterion("scd_shippingType >", value, "scdShippingtype");
            return (Criteria) this;
        }

        public Criteria andScdShippingtypeGreaterThanOrEqualTo(String value) {
            addCriterion("scd_shippingType >=", value, "scdShippingtype");
            return (Criteria) this;
        }

        public Criteria andScdShippingtypeLessThan(String value) {
            addCriterion("scd_shippingType <", value, "scdShippingtype");
            return (Criteria) this;
        }

        public Criteria andScdShippingtypeLessThanOrEqualTo(String value) {
            addCriterion("scd_shippingType <=", value, "scdShippingtype");
            return (Criteria) this;
        }

        public Criteria andScdShippingtypeLike(String value) {
            addCriterion("scd_shippingType like", value, "scdShippingtype");
            return (Criteria) this;
        }

        public Criteria andScdShippingtypeNotLike(String value) {
            addCriterion("scd_shippingType not like", value, "scdShippingtype");
            return (Criteria) this;
        }

        public Criteria andScdShippingtypeIn(List<String> values) {
            addCriterion("scd_shippingType in", values, "scdShippingtype");
            return (Criteria) this;
        }

        public Criteria andScdShippingtypeNotIn(List<String> values) {
            addCriterion("scd_shippingType not in", values, "scdShippingtype");
            return (Criteria) this;
        }

        public Criteria andScdShippingtypeBetween(String value1, String value2) {
            addCriterion("scd_shippingType between", value1, value2, "scdShippingtype");
            return (Criteria) this;
        }

        public Criteria andScdShippingtypeNotBetween(String value1, String value2) {
            addCriterion("scd_shippingType not between", value1, value2, "scdShippingtype");
            return (Criteria) this;
        }

        public Criteria andScdMeasuringunitIsNull() {
            addCriterion("scd_measuringUnit is null");
            return (Criteria) this;
        }

        public Criteria andScdMeasuringunitIsNotNull() {
            addCriterion("scd_measuringUnit is not null");
            return (Criteria) this;
        }

        public Criteria andScdMeasuringunitEqualTo(String value) {
            addCriterion("scd_measuringUnit =", value, "scdMeasuringunit");
            return (Criteria) this;
        }

        public Criteria andScdMeasuringunitNotEqualTo(String value) {
            addCriterion("scd_measuringUnit <>", value, "scdMeasuringunit");
            return (Criteria) this;
        }

        public Criteria andScdMeasuringunitGreaterThan(String value) {
            addCriterion("scd_measuringUnit >", value, "scdMeasuringunit");
            return (Criteria) this;
        }

        public Criteria andScdMeasuringunitGreaterThanOrEqualTo(String value) {
            addCriterion("scd_measuringUnit >=", value, "scdMeasuringunit");
            return (Criteria) this;
        }

        public Criteria andScdMeasuringunitLessThan(String value) {
            addCriterion("scd_measuringUnit <", value, "scdMeasuringunit");
            return (Criteria) this;
        }

        public Criteria andScdMeasuringunitLessThanOrEqualTo(String value) {
            addCriterion("scd_measuringUnit <=", value, "scdMeasuringunit");
            return (Criteria) this;
        }

        public Criteria andScdMeasuringunitLike(String value) {
            addCriterion("scd_measuringUnit like", value, "scdMeasuringunit");
            return (Criteria) this;
        }

        public Criteria andScdMeasuringunitNotLike(String value) {
            addCriterion("scd_measuringUnit not like", value, "scdMeasuringunit");
            return (Criteria) this;
        }

        public Criteria andScdMeasuringunitIn(List<String> values) {
            addCriterion("scd_measuringUnit in", values, "scdMeasuringunit");
            return (Criteria) this;
        }

        public Criteria andScdMeasuringunitNotIn(List<String> values) {
            addCriterion("scd_measuringUnit not in", values, "scdMeasuringunit");
            return (Criteria) this;
        }

        public Criteria andScdMeasuringunitBetween(String value1, String value2) {
            addCriterion("scd_measuringUnit between", value1, value2, "scdMeasuringunit");
            return (Criteria) this;
        }

        public Criteria andScdMeasuringunitNotBetween(String value1, String value2) {
            addCriterion("scd_measuringUnit not between", value1, value2, "scdMeasuringunit");
            return (Criteria) this;
        }

        public Criteria andScdCalorificvalueIsNull() {
            addCriterion("scd_calorificValue is null");
            return (Criteria) this;
        }

        public Criteria andScdCalorificvalueIsNotNull() {
            addCriterion("scd_calorificValue is not null");
            return (Criteria) this;
        }

        public Criteria andScdCalorificvalueEqualTo(Long value) {
            addCriterion("scd_calorificValue =", value, "scdCalorificvalue");
            return (Criteria) this;
        }

        public Criteria andScdCalorificvalueNotEqualTo(Long value) {
            addCriterion("scd_calorificValue <>", value, "scdCalorificvalue");
            return (Criteria) this;
        }

        public Criteria andScdCalorificvalueGreaterThan(Long value) {
            addCriterion("scd_calorificValue >", value, "scdCalorificvalue");
            return (Criteria) this;
        }

        public Criteria andScdCalorificvalueGreaterThanOrEqualTo(Long value) {
            addCriterion("scd_calorificValue >=", value, "scdCalorificvalue");
            return (Criteria) this;
        }

        public Criteria andScdCalorificvalueLessThan(Long value) {
            addCriterion("scd_calorificValue <", value, "scdCalorificvalue");
            return (Criteria) this;
        }

        public Criteria andScdCalorificvalueLessThanOrEqualTo(Long value) {
            addCriterion("scd_calorificValue <=", value, "scdCalorificvalue");
            return (Criteria) this;
        }

        public Criteria andScdCalorificvalueIn(List<Long> values) {
            addCriterion("scd_calorificValue in", values, "scdCalorificvalue");
            return (Criteria) this;
        }

        public Criteria andScdCalorificvalueNotIn(List<Long> values) {
            addCriterion("scd_calorificValue not in", values, "scdCalorificvalue");
            return (Criteria) this;
        }

        public Criteria andScdCalorificvalueBetween(Long value1, Long value2) {
            addCriterion("scd_calorificValue between", value1, value2, "scdCalorificvalue");
            return (Criteria) this;
        }

        public Criteria andScdCalorificvalueNotBetween(Long value1, Long value2) {
            addCriterion("scd_calorificValue not between", value1, value2, "scdCalorificvalue");
            return (Criteria) this;
        }

        public Criteria andScdTotalmoistureIsNull() {
            addCriterion("scd_totalMoisture is null");
            return (Criteria) this;
        }

        public Criteria andScdTotalmoistureIsNotNull() {
            addCriterion("scd_totalMoisture is not null");
            return (Criteria) this;
        }

        public Criteria andScdTotalmoistureEqualTo(Long value) {
            addCriterion("scd_totalMoisture =", value, "scdTotalmoisture");
            return (Criteria) this;
        }

        public Criteria andScdTotalmoistureNotEqualTo(Long value) {
            addCriterion("scd_totalMoisture <>", value, "scdTotalmoisture");
            return (Criteria) this;
        }

        public Criteria andScdTotalmoistureGreaterThan(Long value) {
            addCriterion("scd_totalMoisture >", value, "scdTotalmoisture");
            return (Criteria) this;
        }

        public Criteria andScdTotalmoistureGreaterThanOrEqualTo(Long value) {
            addCriterion("scd_totalMoisture >=", value, "scdTotalmoisture");
            return (Criteria) this;
        }

        public Criteria andScdTotalmoistureLessThan(Long value) {
            addCriterion("scd_totalMoisture <", value, "scdTotalmoisture");
            return (Criteria) this;
        }

        public Criteria andScdTotalmoistureLessThanOrEqualTo(Long value) {
            addCriterion("scd_totalMoisture <=", value, "scdTotalmoisture");
            return (Criteria) this;
        }

        public Criteria andScdTotalmoistureIn(List<Long> values) {
            addCriterion("scd_totalMoisture in", values, "scdTotalmoisture");
            return (Criteria) this;
        }

        public Criteria andScdTotalmoistureNotIn(List<Long> values) {
            addCriterion("scd_totalMoisture not in", values, "scdTotalmoisture");
            return (Criteria) this;
        }

        public Criteria andScdTotalmoistureBetween(Long value1, Long value2) {
            addCriterion("scd_totalMoisture between", value1, value2, "scdTotalmoisture");
            return (Criteria) this;
        }

        public Criteria andScdTotalmoistureNotBetween(Long value1, Long value2) {
            addCriterion("scd_totalMoisture not between", value1, value2, "scdTotalmoisture");
            return (Criteria) this;
        }

        public Criteria andScdVolatilematterIsNull() {
            addCriterion("scd_volatileMatter is null");
            return (Criteria) this;
        }

        public Criteria andScdVolatilematterIsNotNull() {
            addCriterion("scd_volatileMatter is not null");
            return (Criteria) this;
        }

        public Criteria andScdVolatilematterEqualTo(Long value) {
            addCriterion("scd_volatileMatter =", value, "scdVolatilematter");
            return (Criteria) this;
        }

        public Criteria andScdVolatilematterNotEqualTo(Long value) {
            addCriterion("scd_volatileMatter <>", value, "scdVolatilematter");
            return (Criteria) this;
        }

        public Criteria andScdVolatilematterGreaterThan(Long value) {
            addCriterion("scd_volatileMatter >", value, "scdVolatilematter");
            return (Criteria) this;
        }

        public Criteria andScdVolatilematterGreaterThanOrEqualTo(Long value) {
            addCriterion("scd_volatileMatter >=", value, "scdVolatilematter");
            return (Criteria) this;
        }

        public Criteria andScdVolatilematterLessThan(Long value) {
            addCriterion("scd_volatileMatter <", value, "scdVolatilematter");
            return (Criteria) this;
        }

        public Criteria andScdVolatilematterLessThanOrEqualTo(Long value) {
            addCriterion("scd_volatileMatter <=", value, "scdVolatilematter");
            return (Criteria) this;
        }

        public Criteria andScdVolatilematterIn(List<Long> values) {
            addCriterion("scd_volatileMatter in", values, "scdVolatilematter");
            return (Criteria) this;
        }

        public Criteria andScdVolatilematterNotIn(List<Long> values) {
            addCriterion("scd_volatileMatter not in", values, "scdVolatilematter");
            return (Criteria) this;
        }

        public Criteria andScdVolatilematterBetween(Long value1, Long value2) {
            addCriterion("scd_volatileMatter between", value1, value2, "scdVolatilematter");
            return (Criteria) this;
        }

        public Criteria andScdVolatilematterNotBetween(Long value1, Long value2) {
            addCriterion("scd_volatileMatter not between", value1, value2, "scdVolatilematter");
            return (Criteria) this;
        }

        public Criteria andScdSupplytotalIsNull() {
            addCriterion("scd_supplyTotal is null");
            return (Criteria) this;
        }

        public Criteria andScdSupplytotalIsNotNull() {
            addCriterion("scd_supplyTotal is not null");
            return (Criteria) this;
        }

        public Criteria andScdSupplytotalEqualTo(Long value) {
            addCriterion("scd_supplyTotal =", value, "scdSupplytotal");
            return (Criteria) this;
        }

        public Criteria andScdSupplytotalNotEqualTo(Long value) {
            addCriterion("scd_supplyTotal <>", value, "scdSupplytotal");
            return (Criteria) this;
        }

        public Criteria andScdSupplytotalGreaterThan(Long value) {
            addCriterion("scd_supplyTotal >", value, "scdSupplytotal");
            return (Criteria) this;
        }

        public Criteria andScdSupplytotalGreaterThanOrEqualTo(Long value) {
            addCriterion("scd_supplyTotal >=", value, "scdSupplytotal");
            return (Criteria) this;
        }

        public Criteria andScdSupplytotalLessThan(Long value) {
            addCriterion("scd_supplyTotal <", value, "scdSupplytotal");
            return (Criteria) this;
        }

        public Criteria andScdSupplytotalLessThanOrEqualTo(Long value) {
            addCriterion("scd_supplyTotal <=", value, "scdSupplytotal");
            return (Criteria) this;
        }

        public Criteria andScdSupplytotalIn(List<Long> values) {
            addCriterion("scd_supplyTotal in", values, "scdSupplytotal");
            return (Criteria) this;
        }

        public Criteria andScdSupplytotalNotIn(List<Long> values) {
            addCriterion("scd_supplyTotal not in", values, "scdSupplytotal");
            return (Criteria) this;
        }

        public Criteria andScdSupplytotalBetween(Long value1, Long value2) {
            addCriterion("scd_supplyTotal between", value1, value2, "scdSupplytotal");
            return (Criteria) this;
        }

        public Criteria andScdSupplytotalNotBetween(Long value1, Long value2) {
            addCriterion("scd_supplyTotal not between", value1, value2, "scdSupplytotal");
            return (Criteria) this;
        }

        public Criteria andScdJanuaryIsNull() {
            addCriterion("scd_january is null");
            return (Criteria) this;
        }

        public Criteria andScdJanuaryIsNotNull() {
            addCriterion("scd_january is not null");
            return (Criteria) this;
        }

        public Criteria andScdJanuaryEqualTo(Long value) {
            addCriterion("scd_january =", value, "scdJanuary");
            return (Criteria) this;
        }

        public Criteria andScdJanuaryNotEqualTo(Long value) {
            addCriterion("scd_january <>", value, "scdJanuary");
            return (Criteria) this;
        }

        public Criteria andScdJanuaryGreaterThan(Long value) {
            addCriterion("scd_january >", value, "scdJanuary");
            return (Criteria) this;
        }

        public Criteria andScdJanuaryGreaterThanOrEqualTo(Long value) {
            addCriterion("scd_january >=", value, "scdJanuary");
            return (Criteria) this;
        }

        public Criteria andScdJanuaryLessThan(Long value) {
            addCriterion("scd_january <", value, "scdJanuary");
            return (Criteria) this;
        }

        public Criteria andScdJanuaryLessThanOrEqualTo(Long value) {
            addCriterion("scd_january <=", value, "scdJanuary");
            return (Criteria) this;
        }

        public Criteria andScdJanuaryIn(List<Long> values) {
            addCriterion("scd_january in", values, "scdJanuary");
            return (Criteria) this;
        }

        public Criteria andScdJanuaryNotIn(List<Long> values) {
            addCriterion("scd_january not in", values, "scdJanuary");
            return (Criteria) this;
        }

        public Criteria andScdJanuaryBetween(Long value1, Long value2) {
            addCriterion("scd_january between", value1, value2, "scdJanuary");
            return (Criteria) this;
        }

        public Criteria andScdJanuaryNotBetween(Long value1, Long value2) {
            addCriterion("scd_january not between", value1, value2, "scdJanuary");
            return (Criteria) this;
        }

        public Criteria andScdFebruaryIsNull() {
            addCriterion("scd_february is null");
            return (Criteria) this;
        }

        public Criteria andScdFebruaryIsNotNull() {
            addCriterion("scd_february is not null");
            return (Criteria) this;
        }

        public Criteria andScdFebruaryEqualTo(Long value) {
            addCriterion("scd_february =", value, "scdFebruary");
            return (Criteria) this;
        }

        public Criteria andScdFebruaryNotEqualTo(Long value) {
            addCriterion("scd_february <>", value, "scdFebruary");
            return (Criteria) this;
        }

        public Criteria andScdFebruaryGreaterThan(Long value) {
            addCriterion("scd_february >", value, "scdFebruary");
            return (Criteria) this;
        }

        public Criteria andScdFebruaryGreaterThanOrEqualTo(Long value) {
            addCriterion("scd_february >=", value, "scdFebruary");
            return (Criteria) this;
        }

        public Criteria andScdFebruaryLessThan(Long value) {
            addCriterion("scd_february <", value, "scdFebruary");
            return (Criteria) this;
        }

        public Criteria andScdFebruaryLessThanOrEqualTo(Long value) {
            addCriterion("scd_february <=", value, "scdFebruary");
            return (Criteria) this;
        }

        public Criteria andScdFebruaryIn(List<Long> values) {
            addCriterion("scd_february in", values, "scdFebruary");
            return (Criteria) this;
        }

        public Criteria andScdFebruaryNotIn(List<Long> values) {
            addCriterion("scd_february not in", values, "scdFebruary");
            return (Criteria) this;
        }

        public Criteria andScdFebruaryBetween(Long value1, Long value2) {
            addCriterion("scd_february between", value1, value2, "scdFebruary");
            return (Criteria) this;
        }

        public Criteria andScdFebruaryNotBetween(Long value1, Long value2) {
            addCriterion("scd_february not between", value1, value2, "scdFebruary");
            return (Criteria) this;
        }

        public Criteria andScdMarchIsNull() {
            addCriterion("scd_march is null");
            return (Criteria) this;
        }

        public Criteria andScdMarchIsNotNull() {
            addCriterion("scd_march is not null");
            return (Criteria) this;
        }

        public Criteria andScdMarchEqualTo(Long value) {
            addCriterion("scd_march =", value, "scdMarch");
            return (Criteria) this;
        }

        public Criteria andScdMarchNotEqualTo(Long value) {
            addCriterion("scd_march <>", value, "scdMarch");
            return (Criteria) this;
        }

        public Criteria andScdMarchGreaterThan(Long value) {
            addCriterion("scd_march >", value, "scdMarch");
            return (Criteria) this;
        }

        public Criteria andScdMarchGreaterThanOrEqualTo(Long value) {
            addCriterion("scd_march >=", value, "scdMarch");
            return (Criteria) this;
        }

        public Criteria andScdMarchLessThan(Long value) {
            addCriterion("scd_march <", value, "scdMarch");
            return (Criteria) this;
        }

        public Criteria andScdMarchLessThanOrEqualTo(Long value) {
            addCriterion("scd_march <=", value, "scdMarch");
            return (Criteria) this;
        }

        public Criteria andScdMarchIn(List<Long> values) {
            addCriterion("scd_march in", values, "scdMarch");
            return (Criteria) this;
        }

        public Criteria andScdMarchNotIn(List<Long> values) {
            addCriterion("scd_march not in", values, "scdMarch");
            return (Criteria) this;
        }

        public Criteria andScdMarchBetween(Long value1, Long value2) {
            addCriterion("scd_march between", value1, value2, "scdMarch");
            return (Criteria) this;
        }

        public Criteria andScdMarchNotBetween(Long value1, Long value2) {
            addCriterion("scd_march not between", value1, value2, "scdMarch");
            return (Criteria) this;
        }

        public Criteria andScdAprilIsNull() {
            addCriterion("scd_april is null");
            return (Criteria) this;
        }

        public Criteria andScdAprilIsNotNull() {
            addCriterion("scd_april is not null");
            return (Criteria) this;
        }

        public Criteria andScdAprilEqualTo(Long value) {
            addCriterion("scd_april =", value, "scdApril");
            return (Criteria) this;
        }

        public Criteria andScdAprilNotEqualTo(Long value) {
            addCriterion("scd_april <>", value, "scdApril");
            return (Criteria) this;
        }

        public Criteria andScdAprilGreaterThan(Long value) {
            addCriterion("scd_april >", value, "scdApril");
            return (Criteria) this;
        }

        public Criteria andScdAprilGreaterThanOrEqualTo(Long value) {
            addCriterion("scd_april >=", value, "scdApril");
            return (Criteria) this;
        }

        public Criteria andScdAprilLessThan(Long value) {
            addCriterion("scd_april <", value, "scdApril");
            return (Criteria) this;
        }

        public Criteria andScdAprilLessThanOrEqualTo(Long value) {
            addCriterion("scd_april <=", value, "scdApril");
            return (Criteria) this;
        }

        public Criteria andScdAprilIn(List<Long> values) {
            addCriterion("scd_april in", values, "scdApril");
            return (Criteria) this;
        }

        public Criteria andScdAprilNotIn(List<Long> values) {
            addCriterion("scd_april not in", values, "scdApril");
            return (Criteria) this;
        }

        public Criteria andScdAprilBetween(Long value1, Long value2) {
            addCriterion("scd_april between", value1, value2, "scdApril");
            return (Criteria) this;
        }

        public Criteria andScdAprilNotBetween(Long value1, Long value2) {
            addCriterion("scd_april not between", value1, value2, "scdApril");
            return (Criteria) this;
        }

        public Criteria andScdMayIsNull() {
            addCriterion("scd_may is null");
            return (Criteria) this;
        }

        public Criteria andScdMayIsNotNull() {
            addCriterion("scd_may is not null");
            return (Criteria) this;
        }

        public Criteria andScdMayEqualTo(Long value) {
            addCriterion("scd_may =", value, "scdMay");
            return (Criteria) this;
        }

        public Criteria andScdMayNotEqualTo(Long value) {
            addCriterion("scd_may <>", value, "scdMay");
            return (Criteria) this;
        }

        public Criteria andScdMayGreaterThan(Long value) {
            addCriterion("scd_may >", value, "scdMay");
            return (Criteria) this;
        }

        public Criteria andScdMayGreaterThanOrEqualTo(Long value) {
            addCriterion("scd_may >=", value, "scdMay");
            return (Criteria) this;
        }

        public Criteria andScdMayLessThan(Long value) {
            addCriterion("scd_may <", value, "scdMay");
            return (Criteria) this;
        }

        public Criteria andScdMayLessThanOrEqualTo(Long value) {
            addCriterion("scd_may <=", value, "scdMay");
            return (Criteria) this;
        }

        public Criteria andScdMayIn(List<Long> values) {
            addCriterion("scd_may in", values, "scdMay");
            return (Criteria) this;
        }

        public Criteria andScdMayNotIn(List<Long> values) {
            addCriterion("scd_may not in", values, "scdMay");
            return (Criteria) this;
        }

        public Criteria andScdMayBetween(Long value1, Long value2) {
            addCriterion("scd_may between", value1, value2, "scdMay");
            return (Criteria) this;
        }

        public Criteria andScdMayNotBetween(Long value1, Long value2) {
            addCriterion("scd_may not between", value1, value2, "scdMay");
            return (Criteria) this;
        }

        public Criteria andScdJuneIsNull() {
            addCriterion("scd_june is null");
            return (Criteria) this;
        }

        public Criteria andScdJuneIsNotNull() {
            addCriterion("scd_june is not null");
            return (Criteria) this;
        }

        public Criteria andScdJuneEqualTo(Long value) {
            addCriterion("scd_june =", value, "scdJune");
            return (Criteria) this;
        }

        public Criteria andScdJuneNotEqualTo(Long value) {
            addCriterion("scd_june <>", value, "scdJune");
            return (Criteria) this;
        }

        public Criteria andScdJuneGreaterThan(Long value) {
            addCriterion("scd_june >", value, "scdJune");
            return (Criteria) this;
        }

        public Criteria andScdJuneGreaterThanOrEqualTo(Long value) {
            addCriterion("scd_june >=", value, "scdJune");
            return (Criteria) this;
        }

        public Criteria andScdJuneLessThan(Long value) {
            addCriterion("scd_june <", value, "scdJune");
            return (Criteria) this;
        }

        public Criteria andScdJuneLessThanOrEqualTo(Long value) {
            addCriterion("scd_june <=", value, "scdJune");
            return (Criteria) this;
        }

        public Criteria andScdJuneIn(List<Long> values) {
            addCriterion("scd_june in", values, "scdJune");
            return (Criteria) this;
        }

        public Criteria andScdJuneNotIn(List<Long> values) {
            addCriterion("scd_june not in", values, "scdJune");
            return (Criteria) this;
        }

        public Criteria andScdJuneBetween(Long value1, Long value2) {
            addCriterion("scd_june between", value1, value2, "scdJune");
            return (Criteria) this;
        }

        public Criteria andScdJuneNotBetween(Long value1, Long value2) {
            addCriterion("scd_june not between", value1, value2, "scdJune");
            return (Criteria) this;
        }

        public Criteria andScdJulyIsNull() {
            addCriterion("scd_july is null");
            return (Criteria) this;
        }

        public Criteria andScdJulyIsNotNull() {
            addCriterion("scd_july is not null");
            return (Criteria) this;
        }

        public Criteria andScdJulyEqualTo(Long value) {
            addCriterion("scd_july =", value, "scdJuly");
            return (Criteria) this;
        }

        public Criteria andScdJulyNotEqualTo(Long value) {
            addCriterion("scd_july <>", value, "scdJuly");
            return (Criteria) this;
        }

        public Criteria andScdJulyGreaterThan(Long value) {
            addCriterion("scd_july >", value, "scdJuly");
            return (Criteria) this;
        }

        public Criteria andScdJulyGreaterThanOrEqualTo(Long value) {
            addCriterion("scd_july >=", value, "scdJuly");
            return (Criteria) this;
        }

        public Criteria andScdJulyLessThan(Long value) {
            addCriterion("scd_july <", value, "scdJuly");
            return (Criteria) this;
        }

        public Criteria andScdJulyLessThanOrEqualTo(Long value) {
            addCriterion("scd_july <=", value, "scdJuly");
            return (Criteria) this;
        }

        public Criteria andScdJulyIn(List<Long> values) {
            addCriterion("scd_july in", values, "scdJuly");
            return (Criteria) this;
        }

        public Criteria andScdJulyNotIn(List<Long> values) {
            addCriterion("scd_july not in", values, "scdJuly");
            return (Criteria) this;
        }

        public Criteria andScdJulyBetween(Long value1, Long value2) {
            addCriterion("scd_july between", value1, value2, "scdJuly");
            return (Criteria) this;
        }

        public Criteria andScdJulyNotBetween(Long value1, Long value2) {
            addCriterion("scd_july not between", value1, value2, "scdJuly");
            return (Criteria) this;
        }

        public Criteria andScdAugustIsNull() {
            addCriterion("scd_august is null");
            return (Criteria) this;
        }

        public Criteria andScdAugustIsNotNull() {
            addCriterion("scd_august is not null");
            return (Criteria) this;
        }

        public Criteria andScdAugustEqualTo(Long value) {
            addCriterion("scd_august =", value, "scdAugust");
            return (Criteria) this;
        }

        public Criteria andScdAugustNotEqualTo(Long value) {
            addCriterion("scd_august <>", value, "scdAugust");
            return (Criteria) this;
        }

        public Criteria andScdAugustGreaterThan(Long value) {
            addCriterion("scd_august >", value, "scdAugust");
            return (Criteria) this;
        }

        public Criteria andScdAugustGreaterThanOrEqualTo(Long value) {
            addCriterion("scd_august >=", value, "scdAugust");
            return (Criteria) this;
        }

        public Criteria andScdAugustLessThan(Long value) {
            addCriterion("scd_august <", value, "scdAugust");
            return (Criteria) this;
        }

        public Criteria andScdAugustLessThanOrEqualTo(Long value) {
            addCriterion("scd_august <=", value, "scdAugust");
            return (Criteria) this;
        }

        public Criteria andScdAugustIn(List<Long> values) {
            addCriterion("scd_august in", values, "scdAugust");
            return (Criteria) this;
        }

        public Criteria andScdAugustNotIn(List<Long> values) {
            addCriterion("scd_august not in", values, "scdAugust");
            return (Criteria) this;
        }

        public Criteria andScdAugustBetween(Long value1, Long value2) {
            addCriterion("scd_august between", value1, value2, "scdAugust");
            return (Criteria) this;
        }

        public Criteria andScdAugustNotBetween(Long value1, Long value2) {
            addCriterion("scd_august not between", value1, value2, "scdAugust");
            return (Criteria) this;
        }

        public Criteria andScdSeptemberIsNull() {
            addCriterion("scd_september is null");
            return (Criteria) this;
        }

        public Criteria andScdSeptemberIsNotNull() {
            addCriterion("scd_september is not null");
            return (Criteria) this;
        }

        public Criteria andScdSeptemberEqualTo(Long value) {
            addCriterion("scd_september =", value, "scdSeptember");
            return (Criteria) this;
        }

        public Criteria andScdSeptemberNotEqualTo(Long value) {
            addCriterion("scd_september <>", value, "scdSeptember");
            return (Criteria) this;
        }

        public Criteria andScdSeptemberGreaterThan(Long value) {
            addCriterion("scd_september >", value, "scdSeptember");
            return (Criteria) this;
        }

        public Criteria andScdSeptemberGreaterThanOrEqualTo(Long value) {
            addCriterion("scd_september >=", value, "scdSeptember");
            return (Criteria) this;
        }

        public Criteria andScdSeptemberLessThan(Long value) {
            addCriterion("scd_september <", value, "scdSeptember");
            return (Criteria) this;
        }

        public Criteria andScdSeptemberLessThanOrEqualTo(Long value) {
            addCriterion("scd_september <=", value, "scdSeptember");
            return (Criteria) this;
        }

        public Criteria andScdSeptemberIn(List<Long> values) {
            addCriterion("scd_september in", values, "scdSeptember");
            return (Criteria) this;
        }

        public Criteria andScdSeptemberNotIn(List<Long> values) {
            addCriterion("scd_september not in", values, "scdSeptember");
            return (Criteria) this;
        }

        public Criteria andScdSeptemberBetween(Long value1, Long value2) {
            addCriterion("scd_september between", value1, value2, "scdSeptember");
            return (Criteria) this;
        }

        public Criteria andScdSeptemberNotBetween(Long value1, Long value2) {
            addCriterion("scd_september not between", value1, value2, "scdSeptember");
            return (Criteria) this;
        }

        public Criteria andScdOctoberIsNull() {
            addCriterion("scd_october is null");
            return (Criteria) this;
        }

        public Criteria andScdOctoberIsNotNull() {
            addCriterion("scd_october is not null");
            return (Criteria) this;
        }

        public Criteria andScdOctoberEqualTo(Long value) {
            addCriterion("scd_october =", value, "scdOctober");
            return (Criteria) this;
        }

        public Criteria andScdOctoberNotEqualTo(Long value) {
            addCriterion("scd_october <>", value, "scdOctober");
            return (Criteria) this;
        }

        public Criteria andScdOctoberGreaterThan(Long value) {
            addCriterion("scd_october >", value, "scdOctober");
            return (Criteria) this;
        }

        public Criteria andScdOctoberGreaterThanOrEqualTo(Long value) {
            addCriterion("scd_october >=", value, "scdOctober");
            return (Criteria) this;
        }

        public Criteria andScdOctoberLessThan(Long value) {
            addCriterion("scd_october <", value, "scdOctober");
            return (Criteria) this;
        }

        public Criteria andScdOctoberLessThanOrEqualTo(Long value) {
            addCriterion("scd_october <=", value, "scdOctober");
            return (Criteria) this;
        }

        public Criteria andScdOctoberIn(List<Long> values) {
            addCriterion("scd_october in", values, "scdOctober");
            return (Criteria) this;
        }

        public Criteria andScdOctoberNotIn(List<Long> values) {
            addCriterion("scd_october not in", values, "scdOctober");
            return (Criteria) this;
        }

        public Criteria andScdOctoberBetween(Long value1, Long value2) {
            addCriterion("scd_october between", value1, value2, "scdOctober");
            return (Criteria) this;
        }

        public Criteria andScdOctoberNotBetween(Long value1, Long value2) {
            addCriterion("scd_october not between", value1, value2, "scdOctober");
            return (Criteria) this;
        }

        public Criteria andScdNovemberIsNull() {
            addCriterion("scd_november is null");
            return (Criteria) this;
        }

        public Criteria andScdNovemberIsNotNull() {
            addCriterion("scd_november is not null");
            return (Criteria) this;
        }

        public Criteria andScdNovemberEqualTo(Long value) {
            addCriterion("scd_november =", value, "scdNovember");
            return (Criteria) this;
        }

        public Criteria andScdNovemberNotEqualTo(Long value) {
            addCriterion("scd_november <>", value, "scdNovember");
            return (Criteria) this;
        }

        public Criteria andScdNovemberGreaterThan(Long value) {
            addCriterion("scd_november >", value, "scdNovember");
            return (Criteria) this;
        }

        public Criteria andScdNovemberGreaterThanOrEqualTo(Long value) {
            addCriterion("scd_november >=", value, "scdNovember");
            return (Criteria) this;
        }

        public Criteria andScdNovemberLessThan(Long value) {
            addCriterion("scd_november <", value, "scdNovember");
            return (Criteria) this;
        }

        public Criteria andScdNovemberLessThanOrEqualTo(Long value) {
            addCriterion("scd_november <=", value, "scdNovember");
            return (Criteria) this;
        }

        public Criteria andScdNovemberIn(List<Long> values) {
            addCriterion("scd_november in", values, "scdNovember");
            return (Criteria) this;
        }

        public Criteria andScdNovemberNotIn(List<Long> values) {
            addCriterion("scd_november not in", values, "scdNovember");
            return (Criteria) this;
        }

        public Criteria andScdNovemberBetween(Long value1, Long value2) {
            addCriterion("scd_november between", value1, value2, "scdNovember");
            return (Criteria) this;
        }

        public Criteria andScdNovemberNotBetween(Long value1, Long value2) {
            addCriterion("scd_november not between", value1, value2, "scdNovember");
            return (Criteria) this;
        }

        public Criteria andScdDecemberIsNull() {
            addCriterion("scd_december is null");
            return (Criteria) this;
        }

        public Criteria andScdDecemberIsNotNull() {
            addCriterion("scd_december is not null");
            return (Criteria) this;
        }

        public Criteria andScdDecemberEqualTo(Long value) {
            addCriterion("scd_december =", value, "scdDecember");
            return (Criteria) this;
        }

        public Criteria andScdDecemberNotEqualTo(Long value) {
            addCriterion("scd_december <>", value, "scdDecember");
            return (Criteria) this;
        }

        public Criteria andScdDecemberGreaterThan(Long value) {
            addCriterion("scd_december >", value, "scdDecember");
            return (Criteria) this;
        }

        public Criteria andScdDecemberGreaterThanOrEqualTo(Long value) {
            addCriterion("scd_december >=", value, "scdDecember");
            return (Criteria) this;
        }

        public Criteria andScdDecemberLessThan(Long value) {
            addCriterion("scd_december <", value, "scdDecember");
            return (Criteria) this;
        }

        public Criteria andScdDecemberLessThanOrEqualTo(Long value) {
            addCriterion("scd_december <=", value, "scdDecember");
            return (Criteria) this;
        }

        public Criteria andScdDecemberIn(List<Long> values) {
            addCriterion("scd_december in", values, "scdDecember");
            return (Criteria) this;
        }

        public Criteria andScdDecemberNotIn(List<Long> values) {
            addCriterion("scd_december not in", values, "scdDecember");
            return (Criteria) this;
        }

        public Criteria andScdDecemberBetween(Long value1, Long value2) {
            addCriterion("scd_december between", value1, value2, "scdDecember");
            return (Criteria) this;
        }

        public Criteria andScdDecemberNotBetween(Long value1, Long value2) {
            addCriterion("scd_december not between", value1, value2, "scdDecember");
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