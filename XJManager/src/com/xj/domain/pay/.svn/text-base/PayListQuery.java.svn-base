package com.xj.domain.pay;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class PayListQuery {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Integer pageNo = 1;

    protected Integer startRow;

    protected Integer pageSize = 10;

    protected String fields;

    public PayListQuery() {
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

        public Criteria andPayIdIsNull() {
            addCriterion("pay_id is null");
            return (Criteria) this;
        }

        public Criteria andPayIdIsNotNull() {
            addCriterion("pay_id is not null");
            return (Criteria) this;
        }

        public Criteria andPayIdEqualTo(String value) {
            addCriterion("pay_id =", value, "payId");
            return (Criteria) this;
        }

        public Criteria andPayIdNotEqualTo(String value) {
            addCriterion("pay_id <>", value, "payId");
            return (Criteria) this;
        }

        public Criteria andPayIdGreaterThan(String value) {
            addCriterion("pay_id >", value, "payId");
            return (Criteria) this;
        }

        public Criteria andPayIdGreaterThanOrEqualTo(String value) {
            addCriterion("pay_id >=", value, "payId");
            return (Criteria) this;
        }

        public Criteria andPayIdLessThan(String value) {
            addCriterion("pay_id <", value, "payId");
            return (Criteria) this;
        }

        public Criteria andPayIdLessThanOrEqualTo(String value) {
            addCriterion("pay_id <=", value, "payId");
            return (Criteria) this;
        }

        public Criteria andPayIdLike(String value) {
            addCriterion("pay_id like", value, "payId");
            return (Criteria) this;
        }

        public Criteria andPayIdNotLike(String value) {
            addCriterion("pay_id not like", value, "payId");
            return (Criteria) this;
        }

        public Criteria andPayIdIn(List<String> values) {
            addCriterion("pay_id in", values, "payId");
            return (Criteria) this;
        }

        public Criteria andPayIdNotIn(List<String> values) {
            addCriterion("pay_id not in", values, "payId");
            return (Criteria) this;
        }

        public Criteria andPayIdBetween(String value1, String value2) {
            addCriterion("pay_id between", value1, value2, "payId");
            return (Criteria) this;
        }

        public Criteria andPayIdNotBetween(String value1, String value2) {
            addCriterion("pay_id not between", value1, value2, "payId");
            return (Criteria) this;
        }

        public Criteria andPayDateIsNull() {
            addCriterion("pay_date is null");
            return (Criteria) this;
        }

        public Criteria andPayDateIsNotNull() {
            addCriterion("pay_date is not null");
            return (Criteria) this;
        }

        public Criteria andPayDateEqualTo(Date value) {
            addCriterionForJDBCDate("pay_date =", value, "payDate");
            return (Criteria) this;
        }

        public Criteria andPayDateNotEqualTo(Date value) {
            addCriterionForJDBCDate("pay_date <>", value, "payDate");
            return (Criteria) this;
        }

        public Criteria andPayDateGreaterThan(Date value) {
            addCriterionForJDBCDate("pay_date >", value, "payDate");
            return (Criteria) this;
        }

        public Criteria andPayDateGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("pay_date >=", value, "payDate");
            return (Criteria) this;
        }

        public Criteria andPayDateLessThan(Date value) {
            addCriterionForJDBCDate("pay_date <", value, "payDate");
            return (Criteria) this;
        }

        public Criteria andPayDateLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("pay_date <=", value, "payDate");
            return (Criteria) this;
        }

        public Criteria andPayDateIn(List<Date> values) {
            addCriterionForJDBCDate("pay_date in", values, "payDate");
            return (Criteria) this;
        }

        public Criteria andPayDateNotIn(List<Date> values) {
            addCriterionForJDBCDate("pay_date not in", values, "payDate");
            return (Criteria) this;
        }

        public Criteria andPayDateBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("pay_date between", value1, value2, "payDate");
            return (Criteria) this;
        }

        public Criteria andPayDateNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("pay_date not between", value1, value2, "payDate");
            return (Criteria) this;
        }

        public Criteria andPayCustomeridIsNull() {
            addCriterion("pay_customerid is null");
            return (Criteria) this;
        }

        public Criteria andPayCustomeridIsNotNull() {
            addCriterion("pay_customerid is not null");
            return (Criteria) this;
        }

        public Criteria andPayCustomeridEqualTo(Integer value) {
            addCriterion("pay_customerid =", value, "payCustomerid");
            return (Criteria) this;
        }

        public Criteria andPayCustomeridNotEqualTo(Integer value) {
            addCriterion("pay_customerid <>", value, "payCustomerid");
            return (Criteria) this;
        }

        public Criteria andPayCustomeridGreaterThan(Integer value) {
            addCriterion("pay_customerid >", value, "payCustomerid");
            return (Criteria) this;
        }

        public Criteria andPayCustomeridGreaterThanOrEqualTo(Integer value) {
            addCriterion("pay_customerid >=", value, "payCustomerid");
            return (Criteria) this;
        }

        public Criteria andPayCustomeridLessThan(Integer value) {
            addCriterion("pay_customerid <", value, "payCustomerid");
            return (Criteria) this;
        }

        public Criteria andPayCustomeridLessThanOrEqualTo(Integer value) {
            addCriterion("pay_customerid <=", value, "payCustomerid");
            return (Criteria) this;
        }

        public Criteria andPayCustomeridIn(List<Integer> values) {
            addCriterion("pay_customerid in", values, "payCustomerid");
            return (Criteria) this;
        }

        public Criteria andPayCustomeridNotIn(List<Integer> values) {
            addCriterion("pay_customerid not in", values, "payCustomerid");
            return (Criteria) this;
        }

        public Criteria andPayCustomeridBetween(Integer value1, Integer value2) {
            addCriterion("pay_customerid between", value1, value2, "payCustomerid");
            return (Criteria) this;
        }

        public Criteria andPayCustomeridNotBetween(Integer value1, Integer value2) {
            addCriterion("pay_customerid not between", value1, value2, "payCustomerid");
            return (Criteria) this;
        }

        public Criteria andPayRecieverIsNull() {
            addCriterion("pay_reciever is null");
            return (Criteria) this;
        }

        public Criteria andPayRecieverIsNotNull() {
            addCriterion("pay_reciever is not null");
            return (Criteria) this;
        }

        public Criteria andPayRecieverEqualTo(String value) {
            addCriterion("pay_reciever =", value, "payReciever");
            return (Criteria) this;
        }

        public Criteria andPayRecieverNotEqualTo(String value) {
            addCriterion("pay_reciever <>", value, "payReciever");
            return (Criteria) this;
        }

        public Criteria andPayRecieverGreaterThan(String value) {
            addCriterion("pay_reciever >", value, "payReciever");
            return (Criteria) this;
        }

        public Criteria andPayRecieverGreaterThanOrEqualTo(String value) {
            addCriterion("pay_reciever >=", value, "payReciever");
            return (Criteria) this;
        }

        public Criteria andPayRecieverLessThan(String value) {
            addCriterion("pay_reciever <", value, "payReciever");
            return (Criteria) this;
        }

        public Criteria andPayRecieverLessThanOrEqualTo(String value) {
            addCriterion("pay_reciever <=", value, "payReciever");
            return (Criteria) this;
        }

        public Criteria andPayRecieverLike(String value) {
            addCriterion("pay_reciever like", value, "payReciever");
            return (Criteria) this;
        }

        public Criteria andPayRecieverNotLike(String value) {
            addCriterion("pay_reciever not like", value, "payReciever");
            return (Criteria) this;
        }

        public Criteria andPayRecieverIn(List<String> values) {
            addCriterion("pay_reciever in", values, "payReciever");
            return (Criteria) this;
        }

        public Criteria andPayRecieverNotIn(List<String> values) {
            addCriterion("pay_reciever not in", values, "payReciever");
            return (Criteria) this;
        }

        public Criteria andPayRecieverBetween(String value1, String value2) {
            addCriterion("pay_reciever between", value1, value2, "payReciever");
            return (Criteria) this;
        }

        public Criteria andPayRecieverNotBetween(String value1, String value2) {
            addCriterion("pay_reciever not between", value1, value2, "payReciever");
            return (Criteria) this;
        }

        public Criteria andPayTdateIsNull() {
            addCriterion("pay_tdate is null");
            return (Criteria) this;
        }

        public Criteria andPayTdateIsNotNull() {
            addCriterion("pay_tdate is not null");
            return (Criteria) this;
        }

        public Criteria andPayTdateEqualTo(Date value) {
            addCriterionForJDBCDate("pay_tdate =", value, "payTdate");
            return (Criteria) this;
        }

        public Criteria andPayTdateNotEqualTo(Date value) {
            addCriterionForJDBCDate("pay_tdate <>", value, "payTdate");
            return (Criteria) this;
        }

        public Criteria andPayTdateGreaterThan(Date value) {
            addCriterionForJDBCDate("pay_tdate >", value, "payTdate");
            return (Criteria) this;
        }

        public Criteria andPayTdateGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("pay_tdate >=", value, "payTdate");
            return (Criteria) this;
        }

        public Criteria andPayTdateLessThan(Date value) {
            addCriterionForJDBCDate("pay_tdate <", value, "payTdate");
            return (Criteria) this;
        }

        public Criteria andPayTdateLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("pay_tdate <=", value, "payTdate");
            return (Criteria) this;
        }

        public Criteria andPayTdateIn(List<Date> values) {
            addCriterionForJDBCDate("pay_tdate in", values, "payTdate");
            return (Criteria) this;
        }

        public Criteria andPayTdateNotIn(List<Date> values) {
            addCriterionForJDBCDate("pay_tdate not in", values, "payTdate");
            return (Criteria) this;
        }

        public Criteria andPayTdateBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("pay_tdate between", value1, value2, "payTdate");
            return (Criteria) this;
        }

        public Criteria andPayTdateNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("pay_tdate not between", value1, value2, "payTdate");
            return (Criteria) this;
        }

        public Criteria andPayCountIsNull() {
            addCriterion("pay_count is null");
            return (Criteria) this;
        }

        public Criteria andPayCountIsNotNull() {
            addCriterion("pay_count is not null");
            return (Criteria) this;
        }

        public Criteria andPayCountEqualTo(Integer value) {
            addCriterion("pay_count =", value, "payCount");
            return (Criteria) this;
        }

        public Criteria andPayCountNotEqualTo(Integer value) {
            addCriterion("pay_count <>", value, "payCount");
            return (Criteria) this;
        }

        public Criteria andPayCountGreaterThan(Integer value) {
            addCriterion("pay_count >", value, "payCount");
            return (Criteria) this;
        }

        public Criteria andPayCountGreaterThanOrEqualTo(Integer value) {
            addCriterion("pay_count >=", value, "payCount");
            return (Criteria) this;
        }

        public Criteria andPayCountLessThan(Integer value) {
            addCriterion("pay_count <", value, "payCount");
            return (Criteria) this;
        }

        public Criteria andPayCountLessThanOrEqualTo(Integer value) {
            addCriterion("pay_count <=", value, "payCount");
            return (Criteria) this;
        }

        public Criteria andPayCountIn(List<Integer> values) {
            addCriterion("pay_count in", values, "payCount");
            return (Criteria) this;
        }

        public Criteria andPayCountNotIn(List<Integer> values) {
            addCriterion("pay_count not in", values, "payCount");
            return (Criteria) this;
        }

        public Criteria andPayCountBetween(Integer value1, Integer value2) {
            addCriterion("pay_count between", value1, value2, "payCount");
            return (Criteria) this;
        }

        public Criteria andPayCountNotBetween(Integer value1, Integer value2) {
            addCriterion("pay_count not between", value1, value2, "payCount");
            return (Criteria) this;
        }

        public Criteria andPayWeightIsNull() {
            addCriterion("pay_weight is null");
            return (Criteria) this;
        }

        public Criteria andPayWeightIsNotNull() {
            addCriterion("pay_weight is not null");
            return (Criteria) this;
        }

        public Criteria andPayWeightEqualTo(Integer value) {
            addCriterion("pay_weight =", value, "payWeight");
            return (Criteria) this;
        }

        public Criteria andPayWeightNotEqualTo(Integer value) {
            addCriterion("pay_weight <>", value, "payWeight");
            return (Criteria) this;
        }

        public Criteria andPayWeightGreaterThan(Integer value) {
            addCriterion("pay_weight >", value, "payWeight");
            return (Criteria) this;
        }

        public Criteria andPayWeightGreaterThanOrEqualTo(Integer value) {
            addCriterion("pay_weight >=", value, "payWeight");
            return (Criteria) this;
        }

        public Criteria andPayWeightLessThan(Integer value) {
            addCriterion("pay_weight <", value, "payWeight");
            return (Criteria) this;
        }

        public Criteria andPayWeightLessThanOrEqualTo(Integer value) {
            addCriterion("pay_weight <=", value, "payWeight");
            return (Criteria) this;
        }

        public Criteria andPayWeightIn(List<Integer> values) {
            addCriterion("pay_weight in", values, "payWeight");
            return (Criteria) this;
        }

        public Criteria andPayWeightNotIn(List<Integer> values) {
            addCriterion("pay_weight not in", values, "payWeight");
            return (Criteria) this;
        }

        public Criteria andPayWeightBetween(Integer value1, Integer value2) {
            addCriterion("pay_weight between", value1, value2, "payWeight");
            return (Criteria) this;
        }

        public Criteria andPayWeightNotBetween(Integer value1, Integer value2) {
            addCriterion("pay_weight not between", value1, value2, "payWeight");
            return (Criteria) this;
        }

        public Criteria andPayCalorificIsNull() {
            addCriterion("pay_calorific is null");
            return (Criteria) this;
        }

        public Criteria andPayCalorificIsNotNull() {
            addCriterion("pay_calorific is not null");
            return (Criteria) this;
        }

        public Criteria andPayCalorificEqualTo(Integer value) {
            addCriterion("pay_calorific =", value, "payCalorific");
            return (Criteria) this;
        }

        public Criteria andPayCalorificNotEqualTo(Integer value) {
            addCriterion("pay_calorific <>", value, "payCalorific");
            return (Criteria) this;
        }

        public Criteria andPayCalorificGreaterThan(Integer value) {
            addCriterion("pay_calorific >", value, "payCalorific");
            return (Criteria) this;
        }

        public Criteria andPayCalorificGreaterThanOrEqualTo(Integer value) {
            addCriterion("pay_calorific >=", value, "payCalorific");
            return (Criteria) this;
        }

        public Criteria andPayCalorificLessThan(Integer value) {
            addCriterion("pay_calorific <", value, "payCalorific");
            return (Criteria) this;
        }

        public Criteria andPayCalorificLessThanOrEqualTo(Integer value) {
            addCriterion("pay_calorific <=", value, "payCalorific");
            return (Criteria) this;
        }

        public Criteria andPayCalorificIn(List<Integer> values) {
            addCriterion("pay_calorific in", values, "payCalorific");
            return (Criteria) this;
        }

        public Criteria andPayCalorificNotIn(List<Integer> values) {
            addCriterion("pay_calorific not in", values, "payCalorific");
            return (Criteria) this;
        }

        public Criteria andPayCalorificBetween(Integer value1, Integer value2) {
            addCriterion("pay_calorific between", value1, value2, "payCalorific");
            return (Criteria) this;
        }

        public Criteria andPayCalorificNotBetween(Integer value1, Integer value2) {
            addCriterion("pay_calorific not between", value1, value2, "payCalorific");
            return (Criteria) this;
        }

        public Criteria andPayPriceIsNull() {
            addCriterion("pay_price is null");
            return (Criteria) this;
        }

        public Criteria andPayPriceIsNotNull() {
            addCriterion("pay_price is not null");
            return (Criteria) this;
        }

        public Criteria andPayPriceEqualTo(Long value) {
            addCriterion("pay_price =", value, "payPrice");
            return (Criteria) this;
        }

        public Criteria andPayPriceNotEqualTo(Long value) {
            addCriterion("pay_price <>", value, "payPrice");
            return (Criteria) this;
        }

        public Criteria andPayPriceGreaterThan(Long value) {
            addCriterion("pay_price >", value, "payPrice");
            return (Criteria) this;
        }

        public Criteria andPayPriceGreaterThanOrEqualTo(Long value) {
            addCriterion("pay_price >=", value, "payPrice");
            return (Criteria) this;
        }

        public Criteria andPayPriceLessThan(Long value) {
            addCriterion("pay_price <", value, "payPrice");
            return (Criteria) this;
        }

        public Criteria andPayPriceLessThanOrEqualTo(Long value) {
            addCriterion("pay_price <=", value, "payPrice");
            return (Criteria) this;
        }

        public Criteria andPayPriceIn(List<Long> values) {
            addCriterion("pay_price in", values, "payPrice");
            return (Criteria) this;
        }

        public Criteria andPayPriceNotIn(List<Long> values) {
            addCriterion("pay_price not in", values, "payPrice");
            return (Criteria) this;
        }

        public Criteria andPayPriceBetween(Long value1, Long value2) {
            addCriterion("pay_price between", value1, value2, "payPrice");
            return (Criteria) this;
        }

        public Criteria andPayPriceNotBetween(Long value1, Long value2) {
            addCriterion("pay_price not between", value1, value2, "payPrice");
            return (Criteria) this;
        }

        public Criteria andPayTotalIsNull() {
            addCriterion("pay_total is null");
            return (Criteria) this;
        }

        public Criteria andPayTotalIsNotNull() {
            addCriterion("pay_total is not null");
            return (Criteria) this;
        }

        public Criteria andPayTotalEqualTo(Long value) {
            addCriterion("pay_total =", value, "payTotal");
            return (Criteria) this;
        }

        public Criteria andPayTotalNotEqualTo(Long value) {
            addCriterion("pay_total <>", value, "payTotal");
            return (Criteria) this;
        }

        public Criteria andPayTotalGreaterThan(Long value) {
            addCriterion("pay_total >", value, "payTotal");
            return (Criteria) this;
        }

        public Criteria andPayTotalGreaterThanOrEqualTo(Long value) {
            addCriterion("pay_total >=", value, "payTotal");
            return (Criteria) this;
        }

        public Criteria andPayTotalLessThan(Long value) {
            addCriterion("pay_total <", value, "payTotal");
            return (Criteria) this;
        }

        public Criteria andPayTotalLessThanOrEqualTo(Long value) {
            addCriterion("pay_total <=", value, "payTotal");
            return (Criteria) this;
        }

        public Criteria andPayTotalIn(List<Long> values) {
            addCriterion("pay_total in", values, "payTotal");
            return (Criteria) this;
        }

        public Criteria andPayTotalNotIn(List<Long> values) {
            addCriterion("pay_total not in", values, "payTotal");
            return (Criteria) this;
        }

        public Criteria andPayTotalBetween(Long value1, Long value2) {
            addCriterion("pay_total between", value1, value2, "payTotal");
            return (Criteria) this;
        }

        public Criteria andPayTotalNotBetween(Long value1, Long value2) {
            addCriterion("pay_total not between", value1, value2, "payTotal");
            return (Criteria) this;
        }

        public Criteria andPayDedicatedIsNull() {
            addCriterion("pay_dedicated is null");
            return (Criteria) this;
        }

        public Criteria andPayDedicatedIsNotNull() {
            addCriterion("pay_dedicated is not null");
            return (Criteria) this;
        }

        public Criteria andPayDedicatedEqualTo(Long value) {
            addCriterion("pay_dedicated =", value, "payDedicated");
            return (Criteria) this;
        }

        public Criteria andPayDedicatedNotEqualTo(Long value) {
            addCriterion("pay_dedicated <>", value, "payDedicated");
            return (Criteria) this;
        }

        public Criteria andPayDedicatedGreaterThan(Long value) {
            addCriterion("pay_dedicated >", value, "payDedicated");
            return (Criteria) this;
        }

        public Criteria andPayDedicatedGreaterThanOrEqualTo(Long value) {
            addCriterion("pay_dedicated >=", value, "payDedicated");
            return (Criteria) this;
        }

        public Criteria andPayDedicatedLessThan(Long value) {
            addCriterion("pay_dedicated <", value, "payDedicated");
            return (Criteria) this;
        }

        public Criteria andPayDedicatedLessThanOrEqualTo(Long value) {
            addCriterion("pay_dedicated <=", value, "payDedicated");
            return (Criteria) this;
        }

        public Criteria andPayDedicatedIn(List<Long> values) {
            addCriterion("pay_dedicated in", values, "payDedicated");
            return (Criteria) this;
        }

        public Criteria andPayDedicatedNotIn(List<Long> values) {
            addCriterion("pay_dedicated not in", values, "payDedicated");
            return (Criteria) this;
        }

        public Criteria andPayDedicatedBetween(Long value1, Long value2) {
            addCriterion("pay_dedicated between", value1, value2, "payDedicated");
            return (Criteria) this;
        }

        public Criteria andPayDedicatedNotBetween(Long value1, Long value2) {
            addCriterion("pay_dedicated not between", value1, value2, "payDedicated");
            return (Criteria) this;
        }

        public Criteria andPayTransportIsNull() {
            addCriterion("pay_transport is null");
            return (Criteria) this;
        }

        public Criteria andPayTransportIsNotNull() {
            addCriterion("pay_transport is not null");
            return (Criteria) this;
        }

        public Criteria andPayTransportEqualTo(Long value) {
            addCriterion("pay_transport =", value, "payTransport");
            return (Criteria) this;
        }

        public Criteria andPayTransportNotEqualTo(Long value) {
            addCriterion("pay_transport <>", value, "payTransport");
            return (Criteria) this;
        }

        public Criteria andPayTransportGreaterThan(Long value) {
            addCriterion("pay_transport >", value, "payTransport");
            return (Criteria) this;
        }

        public Criteria andPayTransportGreaterThanOrEqualTo(Long value) {
            addCriterion("pay_transport >=", value, "payTransport");
            return (Criteria) this;
        }

        public Criteria andPayTransportLessThan(Long value) {
            addCriterion("pay_transport <", value, "payTransport");
            return (Criteria) this;
        }

        public Criteria andPayTransportLessThanOrEqualTo(Long value) {
            addCriterion("pay_transport <=", value, "payTransport");
            return (Criteria) this;
        }

        public Criteria andPayTransportIn(List<Long> values) {
            addCriterion("pay_transport in", values, "payTransport");
            return (Criteria) this;
        }

        public Criteria andPayTransportNotIn(List<Long> values) {
            addCriterion("pay_transport not in", values, "payTransport");
            return (Criteria) this;
        }

        public Criteria andPayTransportBetween(Long value1, Long value2) {
            addCriterion("pay_transport between", value1, value2, "payTransport");
            return (Criteria) this;
        }

        public Criteria andPayTransportNotBetween(Long value1, Long value2) {
            addCriterion("pay_transport not between", value1, value2, "payTransport");
            return (Criteria) this;
        }

        public Criteria andPayTrainIsNull() {
            addCriterion("pay_train is null");
            return (Criteria) this;
        }

        public Criteria andPayTrainIsNotNull() {
            addCriterion("pay_train is not null");
            return (Criteria) this;
        }

        public Criteria andPayTrainEqualTo(Long value) {
            addCriterion("pay_train =", value, "payTrain");
            return (Criteria) this;
        }

        public Criteria andPayTrainNotEqualTo(Long value) {
            addCriterion("pay_train <>", value, "payTrain");
            return (Criteria) this;
        }

        public Criteria andPayTrainGreaterThan(Long value) {
            addCriterion("pay_train >", value, "payTrain");
            return (Criteria) this;
        }

        public Criteria andPayTrainGreaterThanOrEqualTo(Long value) {
            addCriterion("pay_train >=", value, "payTrain");
            return (Criteria) this;
        }

        public Criteria andPayTrainLessThan(Long value) {
            addCriterion("pay_train <", value, "payTrain");
            return (Criteria) this;
        }

        public Criteria andPayTrainLessThanOrEqualTo(Long value) {
            addCriterion("pay_train <=", value, "payTrain");
            return (Criteria) this;
        }

        public Criteria andPayTrainIn(List<Long> values) {
            addCriterion("pay_train in", values, "payTrain");
            return (Criteria) this;
        }

        public Criteria andPayTrainNotIn(List<Long> values) {
            addCriterion("pay_train not in", values, "payTrain");
            return (Criteria) this;
        }

        public Criteria andPayTrainBetween(Long value1, Long value2) {
            addCriterion("pay_train between", value1, value2, "payTrain");
            return (Criteria) this;
        }

        public Criteria andPayTrainNotBetween(Long value1, Long value2) {
            addCriterion("pay_train not between", value1, value2, "payTrain");
            return (Criteria) this;
        }

        public Criteria andPayServeIsNull() {
            addCriterion("pay_serve is null");
            return (Criteria) this;
        }

        public Criteria andPayServeIsNotNull() {
            addCriterion("pay_serve is not null");
            return (Criteria) this;
        }

        public Criteria andPayServeEqualTo(Long value) {
            addCriterion("pay_serve =", value, "payServe");
            return (Criteria) this;
        }

        public Criteria andPayServeNotEqualTo(Long value) {
            addCriterion("pay_serve <>", value, "payServe");
            return (Criteria) this;
        }

        public Criteria andPayServeGreaterThan(Long value) {
            addCriterion("pay_serve >", value, "payServe");
            return (Criteria) this;
        }

        public Criteria andPayServeGreaterThanOrEqualTo(Long value) {
            addCriterion("pay_serve >=", value, "payServe");
            return (Criteria) this;
        }

        public Criteria andPayServeLessThan(Long value) {
            addCriterion("pay_serve <", value, "payServe");
            return (Criteria) this;
        }

        public Criteria andPayServeLessThanOrEqualTo(Long value) {
            addCriterion("pay_serve <=", value, "payServe");
            return (Criteria) this;
        }

        public Criteria andPayServeIn(List<Long> values) {
            addCriterion("pay_serve in", values, "payServe");
            return (Criteria) this;
        }

        public Criteria andPayServeNotIn(List<Long> values) {
            addCriterion("pay_serve not in", values, "payServe");
            return (Criteria) this;
        }

        public Criteria andPayServeBetween(Long value1, Long value2) {
            addCriterion("pay_serve between", value1, value2, "payServe");
            return (Criteria) this;
        }

        public Criteria andPayServeNotBetween(Long value1, Long value2) {
            addCriterion("pay_serve not between", value1, value2, "payServe");
            return (Criteria) this;
        }

        public Criteria andPayDepartmentIsNull() {
            addCriterion("pay_department is null");
            return (Criteria) this;
        }

        public Criteria andPayDepartmentIsNotNull() {
            addCriterion("pay_department is not null");
            return (Criteria) this;
        }

        public Criteria andPayDepartmentEqualTo(String value) {
            addCriterion("pay_department =", value, "payDepartment");
            return (Criteria) this;
        }

        public Criteria andPayDepartmentNotEqualTo(String value) {
            addCriterion("pay_department <>", value, "payDepartment");
            return (Criteria) this;
        }

        public Criteria andPayDepartmentGreaterThan(String value) {
            addCriterion("pay_department >", value, "payDepartment");
            return (Criteria) this;
        }

        public Criteria andPayDepartmentGreaterThanOrEqualTo(String value) {
            addCriterion("pay_department >=", value, "payDepartment");
            return (Criteria) this;
        }

        public Criteria andPayDepartmentLessThan(String value) {
            addCriterion("pay_department <", value, "payDepartment");
            return (Criteria) this;
        }

        public Criteria andPayDepartmentLessThanOrEqualTo(String value) {
            addCriterion("pay_department <=", value, "payDepartment");
            return (Criteria) this;
        }

        public Criteria andPayDepartmentLike(String value) {
            addCriterion("pay_department like", value, "payDepartment");
            return (Criteria) this;
        }

        public Criteria andPayDepartmentNotLike(String value) {
            addCriterion("pay_department not like", value, "payDepartment");
            return (Criteria) this;
        }

        public Criteria andPayDepartmentIn(List<String> values) {
            addCriterion("pay_department in", values, "payDepartment");
            return (Criteria) this;
        }

        public Criteria andPayDepartmentNotIn(List<String> values) {
            addCriterion("pay_department not in", values, "payDepartment");
            return (Criteria) this;
        }

        public Criteria andPayDepartmentBetween(String value1, String value2) {
            addCriterion("pay_department between", value1, value2, "payDepartment");
            return (Criteria) this;
        }

        public Criteria andPayDepartmentNotBetween(String value1, String value2) {
            addCriterion("pay_department not between", value1, value2, "payDepartment");
            return (Criteria) this;
        }

        public Criteria andPayUserIsNull() {
            addCriterion("pay_user is null");
            return (Criteria) this;
        }

        public Criteria andPayUserIsNotNull() {
            addCriterion("pay_user is not null");
            return (Criteria) this;
        }

        public Criteria andPayUserEqualTo(String value) {
            addCriterion("pay_user =", value, "payUser");
            return (Criteria) this;
        }

        public Criteria andPayUserNotEqualTo(String value) {
            addCriterion("pay_user <>", value, "payUser");
            return (Criteria) this;
        }

        public Criteria andPayUserGreaterThan(String value) {
            addCriterion("pay_user >", value, "payUser");
            return (Criteria) this;
        }

        public Criteria andPayUserGreaterThanOrEqualTo(String value) {
            addCriterion("pay_user >=", value, "payUser");
            return (Criteria) this;
        }

        public Criteria andPayUserLessThan(String value) {
            addCriterion("pay_user <", value, "payUser");
            return (Criteria) this;
        }

        public Criteria andPayUserLessThanOrEqualTo(String value) {
            addCriterion("pay_user <=", value, "payUser");
            return (Criteria) this;
        }

        public Criteria andPayUserLike(String value) {
            addCriterion("pay_user like", value, "payUser");
            return (Criteria) this;
        }

        public Criteria andPayUserNotLike(String value) {
            addCriterion("pay_user not like", value, "payUser");
            return (Criteria) this;
        }

        public Criteria andPayUserIn(List<String> values) {
            addCriterion("pay_user in", values, "payUser");
            return (Criteria) this;
        }

        public Criteria andPayUserNotIn(List<String> values) {
            addCriterion("pay_user not in", values, "payUser");
            return (Criteria) this;
        }

        public Criteria andPayUserBetween(String value1, String value2) {
            addCriterion("pay_user between", value1, value2, "payUser");
            return (Criteria) this;
        }

        public Criteria andPayUserNotBetween(String value1, String value2) {
            addCriterion("pay_user not between", value1, value2, "payUser");
            return (Criteria) this;
        }

        public Criteria andPayAuditorIsNull() {
            addCriterion("pay_auditor is null");
            return (Criteria) this;
        }

        public Criteria andPayAuditorIsNotNull() {
            addCriterion("pay_auditor is not null");
            return (Criteria) this;
        }

        public Criteria andPayAuditorEqualTo(String value) {
            addCriterion("pay_auditor =", value, "payAuditor");
            return (Criteria) this;
        }

        public Criteria andPayAuditorNotEqualTo(String value) {
            addCriterion("pay_auditor <>", value, "payAuditor");
            return (Criteria) this;
        }

        public Criteria andPayAuditorGreaterThan(String value) {
            addCriterion("pay_auditor >", value, "payAuditor");
            return (Criteria) this;
        }

        public Criteria andPayAuditorGreaterThanOrEqualTo(String value) {
            addCriterion("pay_auditor >=", value, "payAuditor");
            return (Criteria) this;
        }

        public Criteria andPayAuditorLessThan(String value) {
            addCriterion("pay_auditor <", value, "payAuditor");
            return (Criteria) this;
        }

        public Criteria andPayAuditorLessThanOrEqualTo(String value) {
            addCriterion("pay_auditor <=", value, "payAuditor");
            return (Criteria) this;
        }

        public Criteria andPayAuditorLike(String value) {
            addCriterion("pay_auditor like", value, "payAuditor");
            return (Criteria) this;
        }

        public Criteria andPayAuditorNotLike(String value) {
            addCriterion("pay_auditor not like", value, "payAuditor");
            return (Criteria) this;
        }

        public Criteria andPayAuditorIn(List<String> values) {
            addCriterion("pay_auditor in", values, "payAuditor");
            return (Criteria) this;
        }

        public Criteria andPayAuditorNotIn(List<String> values) {
            addCriterion("pay_auditor not in", values, "payAuditor");
            return (Criteria) this;
        }

        public Criteria andPayAuditorBetween(String value1, String value2) {
            addCriterion("pay_auditor between", value1, value2, "payAuditor");
            return (Criteria) this;
        }

        public Criteria andPayAuditorNotBetween(String value1, String value2) {
            addCriterion("pay_auditor not between", value1, value2, "payAuditor");
            return (Criteria) this;
        }

        public Criteria andPayDeciderIsNull() {
            addCriterion("pay_decider is null");
            return (Criteria) this;
        }

        public Criteria andPayDeciderIsNotNull() {
            addCriterion("pay_decider is not null");
            return (Criteria) this;
        }

        public Criteria andPayDeciderEqualTo(String value) {
            addCriterion("pay_decider =", value, "payDecider");
            return (Criteria) this;
        }

        public Criteria andPayDeciderNotEqualTo(String value) {
            addCriterion("pay_decider <>", value, "payDecider");
            return (Criteria) this;
        }

        public Criteria andPayDeciderGreaterThan(String value) {
            addCriterion("pay_decider >", value, "payDecider");
            return (Criteria) this;
        }

        public Criteria andPayDeciderGreaterThanOrEqualTo(String value) {
            addCriterion("pay_decider >=", value, "payDecider");
            return (Criteria) this;
        }

        public Criteria andPayDeciderLessThan(String value) {
            addCriterion("pay_decider <", value, "payDecider");
            return (Criteria) this;
        }

        public Criteria andPayDeciderLessThanOrEqualTo(String value) {
            addCriterion("pay_decider <=", value, "payDecider");
            return (Criteria) this;
        }

        public Criteria andPayDeciderLike(String value) {
            addCriterion("pay_decider like", value, "payDecider");
            return (Criteria) this;
        }

        public Criteria andPayDeciderNotLike(String value) {
            addCriterion("pay_decider not like", value, "payDecider");
            return (Criteria) this;
        }

        public Criteria andPayDeciderIn(List<String> values) {
            addCriterion("pay_decider in", values, "payDecider");
            return (Criteria) this;
        }

        public Criteria andPayDeciderNotIn(List<String> values) {
            addCriterion("pay_decider not in", values, "payDecider");
            return (Criteria) this;
        }

        public Criteria andPayDeciderBetween(String value1, String value2) {
            addCriterion("pay_decider between", value1, value2, "payDecider");
            return (Criteria) this;
        }

        public Criteria andPayDeciderNotBetween(String value1, String value2) {
            addCriterion("pay_decider not between", value1, value2, "payDecider");
            return (Criteria) this;
        }

        public Criteria andPayStateIsNull() {
            addCriterion("pay_state is null");
            return (Criteria) this;
        }

        public Criteria andPayStateIsNotNull() {
            addCriterion("pay_state is not null");
            return (Criteria) this;
        }

        public Criteria andPayStateEqualTo(String value) {
            addCriterion("pay_state =", value, "payState");
            return (Criteria) this;
        }

        public Criteria andPayStateNotEqualTo(String value) {
            addCriterion("pay_state <>", value, "payState");
            return (Criteria) this;
        }

        public Criteria andPayStateGreaterThan(String value) {
            addCriterion("pay_state >", value, "payState");
            return (Criteria) this;
        }

        public Criteria andPayStateGreaterThanOrEqualTo(String value) {
            addCriterion("pay_state >=", value, "payState");
            return (Criteria) this;
        }

        public Criteria andPayStateLessThan(String value) {
            addCriterion("pay_state <", value, "payState");
            return (Criteria) this;
        }

        public Criteria andPayStateLessThanOrEqualTo(String value) {
            addCriterion("pay_state <=", value, "payState");
            return (Criteria) this;
        }

        public Criteria andPayStateLike(String value) {
            addCriterion("pay_state like", value, "payState");
            return (Criteria) this;
        }

        public Criteria andPayStateNotLike(String value) {
            addCriterion("pay_state not like", value, "payState");
            return (Criteria) this;
        }

        public Criteria andPayStateIn(List<String> values) {
            addCriterion("pay_state in", values, "payState");
            return (Criteria) this;
        }

        public Criteria andPayStateNotIn(List<String> values) {
            addCriterion("pay_state not in", values, "payState");
            return (Criteria) this;
        }

        public Criteria andPayStateBetween(String value1, String value2) {
            addCriterion("pay_state between", value1, value2, "payState");
            return (Criteria) this;
        }

        public Criteria andPayStateNotBetween(String value1, String value2) {
            addCriterion("pay_state not between", value1, value2, "payState");
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