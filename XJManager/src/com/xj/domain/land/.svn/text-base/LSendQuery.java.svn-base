package com.xj.domain.land;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class LSendQuery {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Integer pageNo = 1;

    protected Integer startRow;

    protected Integer pageSize = 10;

    protected String fields;

    public LSendQuery() {
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

        protected void addCriterionForJDBCDate(String condition, Date value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            addCriterion(condition, new java.sql.Date(value.getTime()), property);
        }

        protected void addCriterionForJDBCDate(String condition, List<Date> values, String property) {
            if (values == null || values.size() == 0) {
                throw new RuntimeException("Value list for " + property + " cannot be null or empty");
            }
            List<java.sql.Date> dateList = new ArrayList<java.sql.Date>();
            Iterator<Date> iter = values.iterator();
            while (iter.hasNext()) {
                dateList.add(new java.sql.Date(iter.next().getTime()));
            }
            addCriterion(condition, dateList, property);
        }

        protected void addCriterionForJDBCDate(String condition, Date value1, Date value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            addCriterion(condition, new java.sql.Date(value1.getTime()), new java.sql.Date(value2.getTime()), property);
        }

        public Criteria andSIdIsNull() {
            addCriterion("s_id is null");
            return (Criteria) this;
        }

        public Criteria andSIdIsNotNull() {
            addCriterion("s_id is not null");
            return (Criteria) this;
        }

        public Criteria andSIdEqualTo(Integer value) {
            addCriterion("s_id =", value, "sId");
            return (Criteria) this;
        }

        public Criteria andSIdNotEqualTo(Integer value) {
            addCriterion("s_id <>", value, "sId");
            return (Criteria) this;
        }

        public Criteria andSIdGreaterThan(Integer value) {
            addCriterion("s_id >", value, "sId");
            return (Criteria) this;
        }

        public Criteria andSIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("s_id >=", value, "sId");
            return (Criteria) this;
        }

        public Criteria andSIdLessThan(Integer value) {
            addCriterion("s_id <", value, "sId");
            return (Criteria) this;
        }

        public Criteria andSIdLessThanOrEqualTo(Integer value) {
            addCriterion("s_id <=", value, "sId");
            return (Criteria) this;
        }

        public Criteria andSIdIn(List<Integer> values) {
            addCriterion("s_id in", values, "sId");
            return (Criteria) this;
        }

        public Criteria andSIdNotIn(List<Integer> values) {
            addCriterion("s_id not in", values, "sId");
            return (Criteria) this;
        }

        public Criteria andSIdBetween(Integer value1, Integer value2) {
            addCriterion("s_id between", value1, value2, "sId");
            return (Criteria) this;
        }

        public Criteria andSIdNotBetween(Integer value1, Integer value2) {
            addCriterion("s_id not between", value1, value2, "sId");
            return (Criteria) this;
        }

        public Criteria andSApplydateIsNull() {
            addCriterion("s_applydate is null");
            return (Criteria) this;
        }

        public Criteria andSApplydateIsNotNull() {
            addCriterion("s_applydate is not null");
            return (Criteria) this;
        }

        public Criteria andSApplydateEqualTo(Date value) {
            addCriterionForJDBCDate("s_applydate =", value, "sApplydate");
            return (Criteria) this;
        }

        public Criteria andSApplydateNotEqualTo(Date value) {
            addCriterionForJDBCDate("s_applydate <>", value, "sApplydate");
            return (Criteria) this;
        }

        public Criteria andSApplydateGreaterThan(Date value) {
            addCriterionForJDBCDate("s_applydate >", value, "sApplydate");
            return (Criteria) this;
        }

        public Criteria andSApplydateGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("s_applydate >=", value, "sApplydate");
            return (Criteria) this;
        }

        public Criteria andSApplydateLessThan(Date value) {
            addCriterionForJDBCDate("s_applydate <", value, "sApplydate");
            return (Criteria) this;
        }

        public Criteria andSApplydateLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("s_applydate <=", value, "sApplydate");
            return (Criteria) this;
        }

        public Criteria andSApplydateIn(List<Date> values) {
            addCriterionForJDBCDate("s_applydate in", values, "sApplydate");
            return (Criteria) this;
        }

        public Criteria andSApplydateNotIn(List<Date> values) {
            addCriterionForJDBCDate("s_applydate not in", values, "sApplydate");
            return (Criteria) this;
        }

        public Criteria andSApplydateBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("s_applydate between", value1, value2, "sApplydate");
            return (Criteria) this;
        }

        public Criteria andSApplydateNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("s_applydate not between", value1, value2, "sApplydate");
            return (Criteria) this;
        }

        public Criteria andSCustypeIsNull() {
            addCriterion("s_custype is null");
            return (Criteria) this;
        }

        public Criteria andSCustypeIsNotNull() {
            addCriterion("s_custype is not null");
            return (Criteria) this;
        }

        public Criteria andSCustypeEqualTo(Byte value) {
            addCriterion("s_custype =", value, "sCustype");
            return (Criteria) this;
        }

        public Criteria andSCustypeNotEqualTo(Byte value) {
            addCriterion("s_custype <>", value, "sCustype");
            return (Criteria) this;
        }

        public Criteria andSCustypeGreaterThan(Byte value) {
            addCriterion("s_custype >", value, "sCustype");
            return (Criteria) this;
        }

        public Criteria andSCustypeGreaterThanOrEqualTo(Byte value) {
            addCriterion("s_custype >=", value, "sCustype");
            return (Criteria) this;
        }

        public Criteria andSCustypeLessThan(Byte value) {
            addCriterion("s_custype <", value, "sCustype");
            return (Criteria) this;
        }

        public Criteria andSCustypeLessThanOrEqualTo(Byte value) {
            addCriterion("s_custype <=", value, "sCustype");
            return (Criteria) this;
        }

        public Criteria andSCustypeIn(List<Byte> values) {
            addCriterion("s_custype in", values, "sCustype");
            return (Criteria) this;
        }

        public Criteria andSCustypeNotIn(List<Byte> values) {
            addCriterion("s_custype not in", values, "sCustype");
            return (Criteria) this;
        }

        public Criteria andSCustypeBetween(Byte value1, Byte value2) {
            addCriterion("s_custype between", value1, value2, "sCustype");
            return (Criteria) this;
        }

        public Criteria andSCustypeNotBetween(Byte value1, Byte value2) {
            addCriterion("s_custype not between", value1, value2, "sCustype");
            return (Criteria) this;
        }

        public Criteria andSOrdertypeIsNull() {
            addCriterion("s_ordertype is null");
            return (Criteria) this;
        }

        public Criteria andSOrdertypeIsNotNull() {
            addCriterion("s_ordertype is not null");
            return (Criteria) this;
        }

        public Criteria andSOrdertypeEqualTo(Byte value) {
            addCriterion("s_ordertype =", value, "sOrdertype");
            return (Criteria) this;
        }

        public Criteria andSOrdertypeNotEqualTo(Byte value) {
            addCriterion("s_ordertype <>", value, "sOrdertype");
            return (Criteria) this;
        }

        public Criteria andSOrdertypeGreaterThan(Byte value) {
            addCriterion("s_ordertype >", value, "sOrdertype");
            return (Criteria) this;
        }

        public Criteria andSOrdertypeGreaterThanOrEqualTo(Byte value) {
            addCriterion("s_ordertype >=", value, "sOrdertype");
            return (Criteria) this;
        }

        public Criteria andSOrdertypeLessThan(Byte value) {
            addCriterion("s_ordertype <", value, "sOrdertype");
            return (Criteria) this;
        }

        public Criteria andSOrdertypeLessThanOrEqualTo(Byte value) {
            addCriterion("s_ordertype <=", value, "sOrdertype");
            return (Criteria) this;
        }

        public Criteria andSOrdertypeIn(List<Byte> values) {
            addCriterion("s_ordertype in", values, "sOrdertype");
            return (Criteria) this;
        }

        public Criteria andSOrdertypeNotIn(List<Byte> values) {
            addCriterion("s_ordertype not in", values, "sOrdertype");
            return (Criteria) this;
        }

        public Criteria andSOrdertypeBetween(Byte value1, Byte value2) {
            addCriterion("s_ordertype between", value1, value2, "sOrdertype");
            return (Criteria) this;
        }

        public Criteria andSOrdertypeNotBetween(Byte value1, Byte value2) {
            addCriterion("s_ordertype not between", value1, value2, "sOrdertype");
            return (Criteria) this;
        }

        public Criteria andSOrdernumIsNull() {
            addCriterion("s_ordernum is null");
            return (Criteria) this;
        }

        public Criteria andSOrdernumIsNotNull() {
            addCriterion("s_ordernum is not null");
            return (Criteria) this;
        }

        public Criteria andSOrdernumEqualTo(String value) {
            addCriterion("s_ordernum =", value, "sOrdernum");
            return (Criteria) this;
        }

        public Criteria andSOrdernumNotEqualTo(String value) {
            addCriterion("s_ordernum <>", value, "sOrdernum");
            return (Criteria) this;
        }

        public Criteria andSOrdernumGreaterThan(String value) {
            addCriterion("s_ordernum >", value, "sOrdernum");
            return (Criteria) this;
        }

        public Criteria andSOrdernumGreaterThanOrEqualTo(String value) {
            addCriterion("s_ordernum >=", value, "sOrdernum");
            return (Criteria) this;
        }

        public Criteria andSOrdernumLessThan(String value) {
            addCriterion("s_ordernum <", value, "sOrdernum");
            return (Criteria) this;
        }

        public Criteria andSOrdernumLessThanOrEqualTo(String value) {
            addCriterion("s_ordernum <=", value, "sOrdernum");
            return (Criteria) this;
        }

        public Criteria andSOrdernumLike(String value) {
            addCriterion("s_ordernum like", value, "sOrdernum");
            return (Criteria) this;
        }

        public Criteria andSOrdernumNotLike(String value) {
            addCriterion("s_ordernum not like", value, "sOrdernum");
            return (Criteria) this;
        }

        public Criteria andSOrdernumIn(List<String> values) {
            addCriterion("s_ordernum in", values, "sOrdernum");
            return (Criteria) this;
        }

        public Criteria andSOrdernumNotIn(List<String> values) {
            addCriterion("s_ordernum not in", values, "sOrdernum");
            return (Criteria) this;
        }

        public Criteria andSOrdernumBetween(String value1, String value2) {
            addCriterion("s_ordernum between", value1, value2, "sOrdernum");
            return (Criteria) this;
        }

        public Criteria andSOrdernumNotBetween(String value1, String value2) {
            addCriterion("s_ordernum not between", value1, value2, "sOrdernum");
            return (Criteria) this;
        }

        public Criteria andSCustomeridIsNull() {
            addCriterion("s_customerid is null");
            return (Criteria) this;
        }

        public Criteria andSCustomeridIsNotNull() {
            addCriterion("s_customerid is not null");
            return (Criteria) this;
        }

        public Criteria andSCustomeridEqualTo(Integer value) {
            addCriterion("s_customerid =", value, "sCustomerid");
            return (Criteria) this;
        }

        public Criteria andSCustomeridNotEqualTo(Integer value) {
            addCriterion("s_customerid <>", value, "sCustomerid");
            return (Criteria) this;
        }

        public Criteria andSCustomeridGreaterThan(Integer value) {
            addCriterion("s_customerid >", value, "sCustomerid");
            return (Criteria) this;
        }

        public Criteria andSCustomeridGreaterThanOrEqualTo(Integer value) {
            addCriterion("s_customerid >=", value, "sCustomerid");
            return (Criteria) this;
        }

        public Criteria andSCustomeridLessThan(Integer value) {
            addCriterion("s_customerid <", value, "sCustomerid");
            return (Criteria) this;
        }

        public Criteria andSCustomeridLessThanOrEqualTo(Integer value) {
            addCriterion("s_customerid <=", value, "sCustomerid");
            return (Criteria) this;
        }

        public Criteria andSCustomeridIn(List<Integer> values) {
            addCriterion("s_customerid in", values, "sCustomerid");
            return (Criteria) this;
        }

        public Criteria andSCustomeridNotIn(List<Integer> values) {
            addCriterion("s_customerid not in", values, "sCustomerid");
            return (Criteria) this;
        }

        public Criteria andSCustomeridBetween(Integer value1, Integer value2) {
            addCriterion("s_customerid between", value1, value2, "sCustomerid");
            return (Criteria) this;
        }

        public Criteria andSCustomeridNotBetween(Integer value1, Integer value2) {
            addCriterion("s_customerid not between", value1, value2, "sCustomerid");
            return (Criteria) this;
        }

        public Criteria andSAddressIsNull() {
            addCriterion("s_address is null");
            return (Criteria) this;
        }

        public Criteria andSAddressIsNotNull() {
            addCriterion("s_address is not null");
            return (Criteria) this;
        }

        public Criteria andSAddressEqualTo(String value) {
            addCriterion("s_address =", value, "sAddress");
            return (Criteria) this;
        }

        public Criteria andSAddressNotEqualTo(String value) {
            addCriterion("s_address <>", value, "sAddress");
            return (Criteria) this;
        }

        public Criteria andSAddressGreaterThan(String value) {
            addCriterion("s_address >", value, "sAddress");
            return (Criteria) this;
        }

        public Criteria andSAddressGreaterThanOrEqualTo(String value) {
            addCriterion("s_address >=", value, "sAddress");
            return (Criteria) this;
        }

        public Criteria andSAddressLessThan(String value) {
            addCriterion("s_address <", value, "sAddress");
            return (Criteria) this;
        }

        public Criteria andSAddressLessThanOrEqualTo(String value) {
            addCriterion("s_address <=", value, "sAddress");
            return (Criteria) this;
        }

        public Criteria andSAddressLike(String value) {
            addCriterion("s_address like", value, "sAddress");
            return (Criteria) this;
        }

        public Criteria andSAddressNotLike(String value) {
            addCriterion("s_address not like", value, "sAddress");
            return (Criteria) this;
        }

        public Criteria andSAddressIn(List<String> values) {
            addCriterion("s_address in", values, "sAddress");
            return (Criteria) this;
        }

        public Criteria andSAddressNotIn(List<String> values) {
            addCriterion("s_address not in", values, "sAddress");
            return (Criteria) this;
        }

        public Criteria andSAddressBetween(String value1, String value2) {
            addCriterion("s_address between", value1, value2, "sAddress");
            return (Criteria) this;
        }

        public Criteria andSAddressNotBetween(String value1, String value2) {
            addCriterion("s_address not between", value1, value2, "sAddress");
            return (Criteria) this;
        }

        public Criteria andSProductIsNull() {
            addCriterion("s_product is null");
            return (Criteria) this;
        }

        public Criteria andSProductIsNotNull() {
            addCriterion("s_product is not null");
            return (Criteria) this;
        }

        public Criteria andSProductEqualTo(String value) {
            addCriterion("s_product =", value, "sProduct");
            return (Criteria) this;
        }

        public Criteria andSProductNotEqualTo(String value) {
            addCriterion("s_product <>", value, "sProduct");
            return (Criteria) this;
        }

        public Criteria andSProductGreaterThan(String value) {
            addCriterion("s_product >", value, "sProduct");
            return (Criteria) this;
        }

        public Criteria andSProductGreaterThanOrEqualTo(String value) {
            addCriterion("s_product >=", value, "sProduct");
            return (Criteria) this;
        }

        public Criteria andSProductLessThan(String value) {
            addCriterion("s_product <", value, "sProduct");
            return (Criteria) this;
        }

        public Criteria andSProductLessThanOrEqualTo(String value) {
            addCriterion("s_product <=", value, "sProduct");
            return (Criteria) this;
        }

        public Criteria andSProductLike(String value) {
            addCriterion("s_product like", value, "sProduct");
            return (Criteria) this;
        }

        public Criteria andSProductNotLike(String value) {
            addCriterion("s_product not like", value, "sProduct");
            return (Criteria) this;
        }

        public Criteria andSProductIn(List<String> values) {
            addCriterion("s_product in", values, "sProduct");
            return (Criteria) this;
        }

        public Criteria andSProductNotIn(List<String> values) {
            addCriterion("s_product not in", values, "sProduct");
            return (Criteria) this;
        }

        public Criteria andSProductBetween(String value1, String value2) {
            addCriterion("s_product between", value1, value2, "sProduct");
            return (Criteria) this;
        }

        public Criteria andSProductNotBetween(String value1, String value2) {
            addCriterion("s_product not between", value1, value2, "sProduct");
            return (Criteria) this;
        }

        public Criteria andSSourceIsNull() {
            addCriterion("s_source is null");
            return (Criteria) this;
        }

        public Criteria andSSourceIsNotNull() {
            addCriterion("s_source is not null");
            return (Criteria) this;
        }

        public Criteria andSSourceEqualTo(String value) {
            addCriterion("s_source =", value, "sSource");
            return (Criteria) this;
        }

        public Criteria andSSourceNotEqualTo(String value) {
            addCriterion("s_source <>", value, "sSource");
            return (Criteria) this;
        }

        public Criteria andSSourceGreaterThan(String value) {
            addCriterion("s_source >", value, "sSource");
            return (Criteria) this;
        }

        public Criteria andSSourceGreaterThanOrEqualTo(String value) {
            addCriterion("s_source >=", value, "sSource");
            return (Criteria) this;
        }

        public Criteria andSSourceLessThan(String value) {
            addCriterion("s_source <", value, "sSource");
            return (Criteria) this;
        }

        public Criteria andSSourceLessThanOrEqualTo(String value) {
            addCriterion("s_source <=", value, "sSource");
            return (Criteria) this;
        }

        public Criteria andSSourceLike(String value) {
            addCriterion("s_source like", value, "sSource");
            return (Criteria) this;
        }

        public Criteria andSSourceNotLike(String value) {
            addCriterion("s_source not like", value, "sSource");
            return (Criteria) this;
        }

        public Criteria andSSourceIn(List<String> values) {
            addCriterion("s_source in", values, "sSource");
            return (Criteria) this;
        }

        public Criteria andSSourceNotIn(List<String> values) {
            addCriterion("s_source not in", values, "sSource");
            return (Criteria) this;
        }

        public Criteria andSSourceBetween(String value1, String value2) {
            addCriterion("s_source between", value1, value2, "sSource");
            return (Criteria) this;
        }

        public Criteria andSSourceNotBetween(String value1, String value2) {
            addCriterion("s_source not between", value1, value2, "sSource");
            return (Criteria) this;
        }

        public Criteria andSSenddateIsNull() {
            addCriterion("s_senddate is null");
            return (Criteria) this;
        }

        public Criteria andSSenddateIsNotNull() {
            addCriterion("s_senddate is not null");
            return (Criteria) this;
        }

        public Criteria andSSenddateEqualTo(Date value) {
            addCriterionForJDBCDate("s_senddate =", value, "sSenddate");
            return (Criteria) this;
        }

        public Criteria andSSenddateNotEqualTo(Date value) {
            addCriterionForJDBCDate("s_senddate <>", value, "sSenddate");
            return (Criteria) this;
        }

        public Criteria andSSenddateGreaterThan(Date value) {
            addCriterionForJDBCDate("s_senddate >", value, "sSenddate");
            return (Criteria) this;
        }

        public Criteria andSSenddateGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("s_senddate >=", value, "sSenddate");
            return (Criteria) this;
        }

        public Criteria andSSenddateLessThan(Date value) {
            addCriterionForJDBCDate("s_senddate <", value, "sSenddate");
            return (Criteria) this;
        }

        public Criteria andSSenddateLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("s_senddate <=", value, "sSenddate");
            return (Criteria) this;
        }

        public Criteria andSSenddateIn(List<Date> values) {
            addCriterionForJDBCDate("s_senddate in", values, "sSenddate");
            return (Criteria) this;
        }

        public Criteria andSSenddateNotIn(List<Date> values) {
            addCriterionForJDBCDate("s_senddate not in", values, "sSenddate");
            return (Criteria) this;
        }

        public Criteria andSSenddateBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("s_senddate between", value1, value2, "sSenddate");
            return (Criteria) this;
        }

        public Criteria andSSenddateNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("s_senddate not between", value1, value2, "sSenddate");
            return (Criteria) this;
        }

        public Criteria andSBaydateIsNull() {
            addCriterion("s_baydate is null");
            return (Criteria) this;
        }

        public Criteria andSBaydateIsNotNull() {
            addCriterion("s_baydate is not null");
            return (Criteria) this;
        }

        public Criteria andSBaydateEqualTo(Date value) {
            addCriterionForJDBCDate("s_baydate =", value, "sBaydate");
            return (Criteria) this;
        }

        public Criteria andSBaydateNotEqualTo(Date value) {
            addCriterionForJDBCDate("s_baydate <>", value, "sBaydate");
            return (Criteria) this;
        }

        public Criteria andSBaydateGreaterThan(Date value) {
            addCriterionForJDBCDate("s_baydate >", value, "sBaydate");
            return (Criteria) this;
        }

        public Criteria andSBaydateGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("s_baydate >=", value, "sBaydate");
            return (Criteria) this;
        }

        public Criteria andSBaydateLessThan(Date value) {
            addCriterionForJDBCDate("s_baydate <", value, "sBaydate");
            return (Criteria) this;
        }

        public Criteria andSBaydateLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("s_baydate <=", value, "sBaydate");
            return (Criteria) this;
        }

        public Criteria andSBaydateIn(List<Date> values) {
            addCriterionForJDBCDate("s_baydate in", values, "sBaydate");
            return (Criteria) this;
        }

        public Criteria andSBaydateNotIn(List<Date> values) {
            addCriterionForJDBCDate("s_baydate not in", values, "sBaydate");
            return (Criteria) this;
        }

        public Criteria andSBaydateBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("s_baydate between", value1, value2, "sBaydate");
            return (Criteria) this;
        }

        public Criteria andSBaydateNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("s_baydate not between", value1, value2, "sBaydate");
            return (Criteria) this;
        }

        public Criteria andSResidueIsNull() {
            addCriterion("s_residue is null");
            return (Criteria) this;
        }

        public Criteria andSResidueIsNotNull() {
            addCriterion("s_residue is not null");
            return (Criteria) this;
        }

        public Criteria andSResidueEqualTo(Integer value) {
            addCriterion("s_residue =", value, "sResidue");
            return (Criteria) this;
        }

        public Criteria andSResidueNotEqualTo(Integer value) {
            addCriterion("s_residue <>", value, "sResidue");
            return (Criteria) this;
        }

        public Criteria andSResidueGreaterThan(Integer value) {
            addCriterion("s_residue >", value, "sResidue");
            return (Criteria) this;
        }

        public Criteria andSResidueGreaterThanOrEqualTo(Integer value) {
            addCriterion("s_residue >=", value, "sResidue");
            return (Criteria) this;
        }

        public Criteria andSResidueLessThan(Integer value) {
            addCriterion("s_residue <", value, "sResidue");
            return (Criteria) this;
        }

        public Criteria andSResidueLessThanOrEqualTo(Integer value) {
            addCriterion("s_residue <=", value, "sResidue");
            return (Criteria) this;
        }

        public Criteria andSResidueIn(List<Integer> values) {
            addCriterion("s_residue in", values, "sResidue");
            return (Criteria) this;
        }

        public Criteria andSResidueNotIn(List<Integer> values) {
            addCriterion("s_residue not in", values, "sResidue");
            return (Criteria) this;
        }

        public Criteria andSResidueBetween(Integer value1, Integer value2) {
            addCriterion("s_residue between", value1, value2, "sResidue");
            return (Criteria) this;
        }

        public Criteria andSResidueNotBetween(Integer value1, Integer value2) {
            addCriterion("s_residue not between", value1, value2, "sResidue");
            return (Criteria) this;
        }

        public Criteria andSApplycountIsNull() {
            addCriterion("s_applycount is null");
            return (Criteria) this;
        }

        public Criteria andSApplycountIsNotNull() {
            addCriterion("s_applycount is not null");
            return (Criteria) this;
        }

        public Criteria andSApplycountEqualTo(Integer value) {
            addCriterion("s_applycount =", value, "sApplycount");
            return (Criteria) this;
        }

        public Criteria andSApplycountNotEqualTo(Integer value) {
            addCriterion("s_applycount <>", value, "sApplycount");
            return (Criteria) this;
        }

        public Criteria andSApplycountGreaterThan(Integer value) {
            addCriterion("s_applycount >", value, "sApplycount");
            return (Criteria) this;
        }

        public Criteria andSApplycountGreaterThanOrEqualTo(Integer value) {
            addCriterion("s_applycount >=", value, "sApplycount");
            return (Criteria) this;
        }

        public Criteria andSApplycountLessThan(Integer value) {
            addCriterion("s_applycount <", value, "sApplycount");
            return (Criteria) this;
        }

        public Criteria andSApplycountLessThanOrEqualTo(Integer value) {
            addCriterion("s_applycount <=", value, "sApplycount");
            return (Criteria) this;
        }

        public Criteria andSApplycountIn(List<Integer> values) {
            addCriterion("s_applycount in", values, "sApplycount");
            return (Criteria) this;
        }

        public Criteria andSApplycountNotIn(List<Integer> values) {
            addCriterion("s_applycount not in", values, "sApplycount");
            return (Criteria) this;
        }

        public Criteria andSApplycountBetween(Integer value1, Integer value2) {
            addCriterion("s_applycount between", value1, value2, "sApplycount");
            return (Criteria) this;
        }

        public Criteria andSApplycountNotBetween(Integer value1, Integer value2) {
            addCriterion("s_applycount not between", value1, value2, "sApplycount");
            return (Criteria) this;
        }

        public Criteria andSAskcarsIsNull() {
            addCriterion("s_askcars is null");
            return (Criteria) this;
        }

        public Criteria andSAskcarsIsNotNull() {
            addCriterion("s_askcars is not null");
            return (Criteria) this;
        }

        public Criteria andSAskcarsEqualTo(Integer value) {
            addCriterion("s_askcars =", value, "sAskcars");
            return (Criteria) this;
        }

        public Criteria andSAskcarsNotEqualTo(Integer value) {
            addCriterion("s_askcars <>", value, "sAskcars");
            return (Criteria) this;
        }

        public Criteria andSAskcarsGreaterThan(Integer value) {
            addCriterion("s_askcars >", value, "sAskcars");
            return (Criteria) this;
        }

        public Criteria andSAskcarsGreaterThanOrEqualTo(Integer value) {
            addCriterion("s_askcars >=", value, "sAskcars");
            return (Criteria) this;
        }

        public Criteria andSAskcarsLessThan(Integer value) {
            addCriterion("s_askcars <", value, "sAskcars");
            return (Criteria) this;
        }

        public Criteria andSAskcarsLessThanOrEqualTo(Integer value) {
            addCriterion("s_askcars <=", value, "sAskcars");
            return (Criteria) this;
        }

        public Criteria andSAskcarsIn(List<Integer> values) {
            addCriterion("s_askcars in", values, "sAskcars");
            return (Criteria) this;
        }

        public Criteria andSAskcarsNotIn(List<Integer> values) {
            addCriterion("s_askcars not in", values, "sAskcars");
            return (Criteria) this;
        }

        public Criteria andSAskcarsBetween(Integer value1, Integer value2) {
            addCriterion("s_askcars between", value1, value2, "sAskcars");
            return (Criteria) this;
        }

        public Criteria andSAskcarsNotBetween(Integer value1, Integer value2) {
            addCriterion("s_askcars not between", value1, value2, "sAskcars");
            return (Criteria) this;
        }

        public Criteria andSPriceIsNull() {
            addCriterion("s_price is null");
            return (Criteria) this;
        }

        public Criteria andSPriceIsNotNull() {
            addCriterion("s_price is not null");
            return (Criteria) this;
        }

        public Criteria andSPriceEqualTo(Long value) {
            addCriterion("s_price =", value, "sPrice");
            return (Criteria) this;
        }

        public Criteria andSPriceNotEqualTo(Long value) {
            addCriterion("s_price <>", value, "sPrice");
            return (Criteria) this;
        }

        public Criteria andSPriceGreaterThan(Long value) {
            addCriterion("s_price >", value, "sPrice");
            return (Criteria) this;
        }

        public Criteria andSPriceGreaterThanOrEqualTo(Long value) {
            addCriterion("s_price >=", value, "sPrice");
            return (Criteria) this;
        }

        public Criteria andSPriceLessThan(Long value) {
            addCriterion("s_price <", value, "sPrice");
            return (Criteria) this;
        }

        public Criteria andSPriceLessThanOrEqualTo(Long value) {
            addCriterion("s_price <=", value, "sPrice");
            return (Criteria) this;
        }

        public Criteria andSPriceIn(List<Long> values) {
            addCriterion("s_price in", values, "sPrice");
            return (Criteria) this;
        }

        public Criteria andSPriceNotIn(List<Long> values) {
            addCriterion("s_price not in", values, "sPrice");
            return (Criteria) this;
        }

        public Criteria andSPriceBetween(Long value1, Long value2) {
            addCriterion("s_price between", value1, value2, "sPrice");
            return (Criteria) this;
        }

        public Criteria andSPriceNotBetween(Long value1, Long value2) {
            addCriterion("s_price not between", value1, value2, "sPrice");
            return (Criteria) this;
        }

        public Criteria andSTotalIsNull() {
            addCriterion("s_total is null");
            return (Criteria) this;
        }

        public Criteria andSTotalIsNotNull() {
            addCriterion("s_total is not null");
            return (Criteria) this;
        }

        public Criteria andSTotalEqualTo(Long value) {
            addCriterion("s_total =", value, "sTotal");
            return (Criteria) this;
        }

        public Criteria andSTotalNotEqualTo(Long value) {
            addCriterion("s_total <>", value, "sTotal");
            return (Criteria) this;
        }

        public Criteria andSTotalGreaterThan(Long value) {
            addCriterion("s_total >", value, "sTotal");
            return (Criteria) this;
        }

        public Criteria andSTotalGreaterThanOrEqualTo(Long value) {
            addCriterion("s_total >=", value, "sTotal");
            return (Criteria) this;
        }

        public Criteria andSTotalLessThan(Long value) {
            addCriterion("s_total <", value, "sTotal");
            return (Criteria) this;
        }

        public Criteria andSTotalLessThanOrEqualTo(Long value) {
            addCriterion("s_total <=", value, "sTotal");
            return (Criteria) this;
        }

        public Criteria andSTotalIn(List<Long> values) {
            addCriterion("s_total in", values, "sTotal");
            return (Criteria) this;
        }

        public Criteria andSTotalNotIn(List<Long> values) {
            addCriterion("s_total not in", values, "sTotal");
            return (Criteria) this;
        }

        public Criteria andSTotalBetween(Long value1, Long value2) {
            addCriterion("s_total between", value1, value2, "sTotal");
            return (Criteria) this;
        }

        public Criteria andSTotalNotBetween(Long value1, Long value2) {
            addCriterion("s_total not between", value1, value2, "sTotal");
            return (Criteria) this;
        }

        public Criteria andSUserIsNull() {
            addCriterion("s_user is null");
            return (Criteria) this;
        }

        public Criteria andSUserIsNotNull() {
            addCriterion("s_user is not null");
            return (Criteria) this;
        }

        public Criteria andSUserEqualTo(String value) {
            addCriterion("s_user =", value, "sUser");
            return (Criteria) this;
        }

        public Criteria andSUserNotEqualTo(String value) {
            addCriterion("s_user <>", value, "sUser");
            return (Criteria) this;
        }

        public Criteria andSUserGreaterThan(String value) {
            addCriterion("s_user >", value, "sUser");
            return (Criteria) this;
        }

        public Criteria andSUserGreaterThanOrEqualTo(String value) {
            addCriterion("s_user >=", value, "sUser");
            return (Criteria) this;
        }

        public Criteria andSUserLessThan(String value) {
            addCriterion("s_user <", value, "sUser");
            return (Criteria) this;
        }

        public Criteria andSUserLessThanOrEqualTo(String value) {
            addCriterion("s_user <=", value, "sUser");
            return (Criteria) this;
        }

        public Criteria andSUserLike(String value) {
            addCriterion("s_user like", value, "sUser");
            return (Criteria) this;
        }

        public Criteria andSUserNotLike(String value) {
            addCriterion("s_user not like", value, "sUser");
            return (Criteria) this;
        }

        public Criteria andSUserIn(List<String> values) {
            addCriterion("s_user in", values, "sUser");
            return (Criteria) this;
        }

        public Criteria andSUserNotIn(List<String> values) {
            addCriterion("s_user not in", values, "sUser");
            return (Criteria) this;
        }

        public Criteria andSUserBetween(String value1, String value2) {
            addCriterion("s_user between", value1, value2, "sUser");
            return (Criteria) this;
        }

        public Criteria andSUserNotBetween(String value1, String value2) {
            addCriterion("s_user not between", value1, value2, "sUser");
            return (Criteria) this;
        }

        public Criteria andSTransportIsNull() {
            addCriterion("s_transport is null");
            return (Criteria) this;
        }

        public Criteria andSTransportIsNotNull() {
            addCriterion("s_transport is not null");
            return (Criteria) this;
        }

        public Criteria andSTransportEqualTo(Byte value) {
            addCriterion("s_transport =", value, "sTransport");
            return (Criteria) this;
        }

        public Criteria andSTransportNotEqualTo(Byte value) {
            addCriterion("s_transport <>", value, "sTransport");
            return (Criteria) this;
        }

        public Criteria andSTransportGreaterThan(Byte value) {
            addCriterion("s_transport >", value, "sTransport");
            return (Criteria) this;
        }

        public Criteria andSTransportGreaterThanOrEqualTo(Byte value) {
            addCriterion("s_transport >=", value, "sTransport");
            return (Criteria) this;
        }

        public Criteria andSTransportLessThan(Byte value) {
            addCriterion("s_transport <", value, "sTransport");
            return (Criteria) this;
        }

        public Criteria andSTransportLessThanOrEqualTo(Byte value) {
            addCriterion("s_transport <=", value, "sTransport");
            return (Criteria) this;
        }

        public Criteria andSTransportIn(List<Byte> values) {
            addCriterion("s_transport in", values, "sTransport");
            return (Criteria) this;
        }

        public Criteria andSTransportNotIn(List<Byte> values) {
            addCriterion("s_transport not in", values, "sTransport");
            return (Criteria) this;
        }

        public Criteria andSTransportBetween(Byte value1, Byte value2) {
            addCriterion("s_transport between", value1, value2, "sTransport");
            return (Criteria) this;
        }

        public Criteria andSTransportNotBetween(Byte value1, Byte value2) {
            addCriterion("s_transport not between", value1, value2, "sTransport");
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