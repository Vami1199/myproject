package com.xj.domain.freight;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class FAdvanceQuery {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Integer pageNo = 1;

    protected Integer startRow;

    protected Integer pageSize = 10;

    protected String fields;

    public FAdvanceQuery() {
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

        public Criteria andAdIdIsNull() {
            addCriterion("ad_id is null");
            return (Criteria) this;
        }

        public Criteria andAdIdIsNotNull() {
            addCriterion("ad_id is not null");
            return (Criteria) this;
        }

        public Criteria andAdIdEqualTo(String value) {
            addCriterion("ad_id =", value, "adId");
            return (Criteria) this;
        }

        public Criteria andAdIdNotEqualTo(String value) {
            addCriterion("ad_id <>", value, "adId");
            return (Criteria) this;
        }

        public Criteria andAdIdGreaterThan(String value) {
            addCriterion("ad_id >", value, "adId");
            return (Criteria) this;
        }

        public Criteria andAdIdGreaterThanOrEqualTo(String value) {
            addCriterion("ad_id >=", value, "adId");
            return (Criteria) this;
        }

        public Criteria andAdIdLessThan(String value) {
            addCriterion("ad_id <", value, "adId");
            return (Criteria) this;
        }

        public Criteria andAdIdLessThanOrEqualTo(String value) {
            addCriterion("ad_id <=", value, "adId");
            return (Criteria) this;
        }

        public Criteria andAdIdLike(String value) {
            addCriterion("ad_id like", value, "adId");
            return (Criteria) this;
        }

        public Criteria andAdIdNotLike(String value) {
            addCriterion("ad_id not like", value, "adId");
            return (Criteria) this;
        }

        public Criteria andAdIdIn(List<String> values) {
            addCriterion("ad_id in", values, "adId");
            return (Criteria) this;
        }

        public Criteria andAdIdNotIn(List<String> values) {
            addCriterion("ad_id not in", values, "adId");
            return (Criteria) this;
        }

        public Criteria andAdIdBetween(String value1, String value2) {
            addCriterion("ad_id between", value1, value2, "adId");
            return (Criteria) this;
        }

        public Criteria andAdIdNotBetween(String value1, String value2) {
            addCriterion("ad_id not between", value1, value2, "adId");
            return (Criteria) this;
        }

        public Criteria andAdTypeIsNull() {
            addCriterion("ad_type is null");
            return (Criteria) this;
        }

        public Criteria andAdTypeIsNotNull() {
            addCriterion("ad_type is not null");
            return (Criteria) this;
        }

        public Criteria andAdTypeEqualTo(Byte value) {
            addCriterion("ad_type =", value, "adType");
            return (Criteria) this;
        }

        public Criteria andAdTypeNotEqualTo(Byte value) {
            addCriterion("ad_type <>", value, "adType");
            return (Criteria) this;
        }

        public Criteria andAdTypeGreaterThan(Byte value) {
            addCriterion("ad_type >", value, "adType");
            return (Criteria) this;
        }

        public Criteria andAdTypeGreaterThanOrEqualTo(Byte value) {
            addCriterion("ad_type >=", value, "adType");
            return (Criteria) this;
        }

        public Criteria andAdTypeLessThan(Byte value) {
            addCriterion("ad_type <", value, "adType");
            return (Criteria) this;
        }

        public Criteria andAdTypeLessThanOrEqualTo(Byte value) {
            addCriterion("ad_type <=", value, "adType");
            return (Criteria) this;
        }

        public Criteria andAdTypeIn(List<Byte> values) {
            addCriterion("ad_type in", values, "adType");
            return (Criteria) this;
        }

        public Criteria andAdTypeNotIn(List<Byte> values) {
            addCriterion("ad_type not in", values, "adType");
            return (Criteria) this;
        }

        public Criteria andAdTypeBetween(Byte value1, Byte value2) {
            addCriterion("ad_type between", value1, value2, "adType");
            return (Criteria) this;
        }

        public Criteria andAdTypeNotBetween(Byte value1, Byte value2) {
            addCriterion("ad_type not between", value1, value2, "adType");
            return (Criteria) this;
        }

        public Criteria andAdStationIsNull() {
            addCriterion("ad_station is null");
            return (Criteria) this;
        }

        public Criteria andAdStationIsNotNull() {
            addCriterion("ad_station is not null");
            return (Criteria) this;
        }

        public Criteria andAdStationEqualTo(Byte value) {
            addCriterion("ad_station =", value, "adStation");
            return (Criteria) this;
        }

        public Criteria andAdStationNotEqualTo(Byte value) {
            addCriterion("ad_station <>", value, "adStation");
            return (Criteria) this;
        }

        public Criteria andAdStationGreaterThan(Byte value) {
            addCriterion("ad_station >", value, "adStation");
            return (Criteria) this;
        }

        public Criteria andAdStationGreaterThanOrEqualTo(Byte value) {
            addCriterion("ad_station >=", value, "adStation");
            return (Criteria) this;
        }

        public Criteria andAdStationLessThan(Byte value) {
            addCriterion("ad_station <", value, "adStation");
            return (Criteria) this;
        }

        public Criteria andAdStationLessThanOrEqualTo(Byte value) {
            addCriterion("ad_station <=", value, "adStation");
            return (Criteria) this;
        }

        public Criteria andAdStationIn(List<Byte> values) {
            addCriterion("ad_station in", values, "adStation");
            return (Criteria) this;
        }

        public Criteria andAdStationNotIn(List<Byte> values) {
            addCriterion("ad_station not in", values, "adStation");
            return (Criteria) this;
        }

        public Criteria andAdStationBetween(Byte value1, Byte value2) {
            addCriterion("ad_station between", value1, value2, "adStation");
            return (Criteria) this;
        }

        public Criteria andAdStationNotBetween(Byte value1, Byte value2) {
            addCriterion("ad_station not between", value1, value2, "adStation");
            return (Criteria) this;
        }

        public Criteria andAdPriceIsNull() {
            addCriterion("ad_price is null");
            return (Criteria) this;
        }

        public Criteria andAdPriceIsNotNull() {
            addCriterion("ad_price is not null");
            return (Criteria) this;
        }

        public Criteria andAdPriceEqualTo(Long value) {
            addCriterion("ad_price =", value, "adPrice");
            return (Criteria) this;
        }

        public Criteria andAdPriceNotEqualTo(Long value) {
            addCriterion("ad_price <>", value, "adPrice");
            return (Criteria) this;
        }

        public Criteria andAdPriceGreaterThan(Long value) {
            addCriterion("ad_price >", value, "adPrice");
            return (Criteria) this;
        }

        public Criteria andAdPriceGreaterThanOrEqualTo(Long value) {
            addCriterion("ad_price >=", value, "adPrice");
            return (Criteria) this;
        }

        public Criteria andAdPriceLessThan(Long value) {
            addCriterion("ad_price <", value, "adPrice");
            return (Criteria) this;
        }

        public Criteria andAdPriceLessThanOrEqualTo(Long value) {
            addCriterion("ad_price <=", value, "adPrice");
            return (Criteria) this;
        }

        public Criteria andAdPriceIn(List<Long> values) {
            addCriterion("ad_price in", values, "adPrice");
            return (Criteria) this;
        }

        public Criteria andAdPriceNotIn(List<Long> values) {
            addCriterion("ad_price not in", values, "adPrice");
            return (Criteria) this;
        }

        public Criteria andAdPriceBetween(Long value1, Long value2) {
            addCriterion("ad_price between", value1, value2, "adPrice");
            return (Criteria) this;
        }

        public Criteria andAdPriceNotBetween(Long value1, Long value2) {
            addCriterion("ad_price not between", value1, value2, "adPrice");
            return (Criteria) this;
        }

        public Criteria andAdUserIsNull() {
            addCriterion("ad_user is null");
            return (Criteria) this;
        }

        public Criteria andAdUserIsNotNull() {
            addCriterion("ad_user is not null");
            return (Criteria) this;
        }

        public Criteria andAdUserEqualTo(String value) {
            addCriterion("ad_user =", value, "adUser");
            return (Criteria) this;
        }

        public Criteria andAdUserNotEqualTo(String value) {
            addCriterion("ad_user <>", value, "adUser");
            return (Criteria) this;
        }

        public Criteria andAdUserGreaterThan(String value) {
            addCriterion("ad_user >", value, "adUser");
            return (Criteria) this;
        }

        public Criteria andAdUserGreaterThanOrEqualTo(String value) {
            addCriterion("ad_user >=", value, "adUser");
            return (Criteria) this;
        }

        public Criteria andAdUserLessThan(String value) {
            addCriterion("ad_user <", value, "adUser");
            return (Criteria) this;
        }

        public Criteria andAdUserLessThanOrEqualTo(String value) {
            addCriterion("ad_user <=", value, "adUser");
            return (Criteria) this;
        }

        public Criteria andAdUserLike(String value) {
            addCriterion("ad_user like", value, "adUser");
            return (Criteria) this;
        }

        public Criteria andAdUserNotLike(String value) {
            addCriterion("ad_user not like", value, "adUser");
            return (Criteria) this;
        }

        public Criteria andAdUserIn(List<String> values) {
            addCriterion("ad_user in", values, "adUser");
            return (Criteria) this;
        }

        public Criteria andAdUserNotIn(List<String> values) {
            addCriterion("ad_user not in", values, "adUser");
            return (Criteria) this;
        }

        public Criteria andAdUserBetween(String value1, String value2) {
            addCriterion("ad_user between", value1, value2, "adUser");
            return (Criteria) this;
        }

        public Criteria andAdUserNotBetween(String value1, String value2) {
            addCriterion("ad_user not between", value1, value2, "adUser");
            return (Criteria) this;
        }

        public Criteria andAdDateIsNull() {
            addCriterion("ad_date is null");
            return (Criteria) this;
        }

        public Criteria andAdDateIsNotNull() {
            addCriterion("ad_date is not null");
            return (Criteria) this;
        }

        public Criteria andAdDateEqualTo(Date value) {
            addCriterionForJDBCDate("ad_date =", value, "adDate");
            return (Criteria) this;
        }

        public Criteria andAdDateNotEqualTo(Date value) {
            addCriterionForJDBCDate("ad_date <>", value, "adDate");
            return (Criteria) this;
        }

        public Criteria andAdDateGreaterThan(Date value) {
            addCriterionForJDBCDate("ad_date >", value, "adDate");
            return (Criteria) this;
        }

        public Criteria andAdDateGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("ad_date >=", value, "adDate");
            return (Criteria) this;
        }

        public Criteria andAdDateLessThan(Date value) {
            addCriterionForJDBCDate("ad_date <", value, "adDate");
            return (Criteria) this;
        }

        public Criteria andAdDateLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("ad_date <=", value, "adDate");
            return (Criteria) this;
        }

        public Criteria andAdDateIn(List<Date> values) {
            addCriterionForJDBCDate("ad_date in", values, "adDate");
            return (Criteria) this;
        }

        public Criteria andAdDateNotIn(List<Date> values) {
            addCriterionForJDBCDate("ad_date not in", values, "adDate");
            return (Criteria) this;
        }

        public Criteria andAdDateBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("ad_date between", value1, value2, "adDate");
            return (Criteria) this;
        }

        public Criteria andAdDateNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("ad_date not between", value1, value2, "adDate");
            return (Criteria) this;
        }

        public Criteria andAdColorIsNull() {
            addCriterion("ad_color is null");
            return (Criteria) this;
        }

        public Criteria andAdColorIsNotNull() {
            addCriterion("ad_color is not null");
            return (Criteria) this;
        }

        public Criteria andAdColorEqualTo(Byte value) {
            addCriterion("ad_color =", value, "adColor");
            return (Criteria) this;
        }

        public Criteria andAdColorNotEqualTo(Byte value) {
            addCriterion("ad_color <>", value, "adColor");
            return (Criteria) this;
        }

        public Criteria andAdColorGreaterThan(Byte value) {
            addCriterion("ad_color >", value, "adColor");
            return (Criteria) this;
        }

        public Criteria andAdColorGreaterThanOrEqualTo(Byte value) {
            addCriterion("ad_color >=", value, "adColor");
            return (Criteria) this;
        }

        public Criteria andAdColorLessThan(Byte value) {
            addCriterion("ad_color <", value, "adColor");
            return (Criteria) this;
        }

        public Criteria andAdColorLessThanOrEqualTo(Byte value) {
            addCriterion("ad_color <=", value, "adColor");
            return (Criteria) this;
        }

        public Criteria andAdColorIn(List<Byte> values) {
            addCriterion("ad_color in", values, "adColor");
            return (Criteria) this;
        }

        public Criteria andAdColorNotIn(List<Byte> values) {
            addCriterion("ad_color not in", values, "adColor");
            return (Criteria) this;
        }

        public Criteria andAdColorBetween(Byte value1, Byte value2) {
            addCriterion("ad_color between", value1, value2, "adColor");
            return (Criteria) this;
        }

        public Criteria andAdColorNotBetween(Byte value1, Byte value2) {
            addCriterion("ad_color not between", value1, value2, "adColor");
            return (Criteria) this;
        }

        public Criteria andAdStateIsNull() {
            addCriterion("ad_state is null");
            return (Criteria) this;
        }

        public Criteria andAdStateIsNotNull() {
            addCriterion("ad_state is not null");
            return (Criteria) this;
        }

        public Criteria andAdStateEqualTo(Byte value) {
            addCriterion("ad_state =", value, "adState");
            return (Criteria) this;
        }

        public Criteria andAdStateNotEqualTo(Byte value) {
            addCriterion("ad_state <>", value, "adState");
            return (Criteria) this;
        }

        public Criteria andAdStateGreaterThan(Byte value) {
            addCriterion("ad_state >", value, "adState");
            return (Criteria) this;
        }

        public Criteria andAdStateGreaterThanOrEqualTo(Byte value) {
            addCriterion("ad_state >=", value, "adState");
            return (Criteria) this;
        }

        public Criteria andAdStateLessThan(Byte value) {
            addCriterion("ad_state <", value, "adState");
            return (Criteria) this;
        }

        public Criteria andAdStateLessThanOrEqualTo(Byte value) {
            addCriterion("ad_state <=", value, "adState");
            return (Criteria) this;
        }

        public Criteria andAdStateIn(List<Byte> values) {
            addCriterion("ad_state in", values, "adState");
            return (Criteria) this;
        }

        public Criteria andAdStateNotIn(List<Byte> values) {
            addCriterion("ad_state not in", values, "adState");
            return (Criteria) this;
        }

        public Criteria andAdStateBetween(Byte value1, Byte value2) {
            addCriterion("ad_state between", value1, value2, "adState");
            return (Criteria) this;
        }

        public Criteria andAdStateNotBetween(Byte value1, Byte value2) {
            addCriterion("ad_state not between", value1, value2, "adState");
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