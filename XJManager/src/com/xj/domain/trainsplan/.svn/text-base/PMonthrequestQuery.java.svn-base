package com.xj.domain.trainsplan;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class PMonthrequestQuery {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Integer pageNo = 1;

    protected Integer startRow;

    protected Integer pageSize = 10;

    protected String fields;

    public PMonthrequestQuery() {
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

        public Criteria andMIdIsNull() {
            addCriterion("m_id is null");
            return (Criteria) this;
        }

        public Criteria andMIdIsNotNull() {
            addCriterion("m_id is not null");
            return (Criteria) this;
        }

        public Criteria andMIdEqualTo(String value) {
            addCriterion("m_id =", value, "mId");
            return (Criteria) this;
        }

        public Criteria andMIdNotEqualTo(String value) {
            addCriterion("m_id <>", value, "mId");
            return (Criteria) this;
        }

        public Criteria andMIdGreaterThan(String value) {
            addCriterion("m_id >", value, "mId");
            return (Criteria) this;
        }

        public Criteria andMIdGreaterThanOrEqualTo(String value) {
            addCriterion("m_id >=", value, "mId");
            return (Criteria) this;
        }

        public Criteria andMIdLessThan(String value) {
            addCriterion("m_id <", value, "mId");
            return (Criteria) this;
        }

        public Criteria andMIdLessThanOrEqualTo(String value) {
            addCriterion("m_id <=", value, "mId");
            return (Criteria) this;
        }

        public Criteria andMIdLike(String value) {
            addCriterion("m_id like", value, "mId");
            return (Criteria) this;
        }

        public Criteria andMIdNotLike(String value) {
            addCriterion("m_id not like", value, "mId");
            return (Criteria) this;
        }

        public Criteria andMIdIn(List<String> values) {
            addCriterion("m_id in", values, "mId");
            return (Criteria) this;
        }

        public Criteria andMIdNotIn(List<String> values) {
            addCriterion("m_id not in", values, "mId");
            return (Criteria) this;
        }

        public Criteria andMIdBetween(String value1, String value2) {
            addCriterion("m_id between", value1, value2, "mId");
            return (Criteria) this;
        }

        public Criteria andMIdNotBetween(String value1, String value2) {
            addCriterion("m_id not between", value1, value2, "mId");
            return (Criteria) this;
        }

        public Criteria andMYearIsNull() {
            addCriterion("m_year is null");
            return (Criteria) this;
        }

        public Criteria andMYearIsNotNull() {
            addCriterion("m_year is not null");
            return (Criteria) this;
        }

        public Criteria andMYearEqualTo(String value) {
            addCriterion("m_year =", value, "mYear");
            return (Criteria) this;
        }

        public Criteria andMYearNotEqualTo(String value) {
            addCriterion("m_year <>", value, "mYear");
            return (Criteria) this;
        }

        public Criteria andMYearGreaterThan(String value) {
            addCriterion("m_year >", value, "mYear");
            return (Criteria) this;
        }

        public Criteria andMYearGreaterThanOrEqualTo(String value) {
            addCriterion("m_year >=", value, "mYear");
            return (Criteria) this;
        }

        public Criteria andMYearLessThan(String value) {
            addCriterion("m_year <", value, "mYear");
            return (Criteria) this;
        }

        public Criteria andMYearLessThanOrEqualTo(String value) {
            addCriterion("m_year <=", value, "mYear");
            return (Criteria) this;
        }

        public Criteria andMYearLike(String value) {
            addCriterion("m_year like", value, "mYear");
            return (Criteria) this;
        }

        public Criteria andMYearNotLike(String value) {
            addCriterion("m_year not like", value, "mYear");
            return (Criteria) this;
        }

        public Criteria andMYearIn(List<String> values) {
            addCriterion("m_year in", values, "mYear");
            return (Criteria) this;
        }

        public Criteria andMYearNotIn(List<String> values) {
            addCriterion("m_year not in", values, "mYear");
            return (Criteria) this;
        }

        public Criteria andMYearBetween(String value1, String value2) {
            addCriterion("m_year between", value1, value2, "mYear");
            return (Criteria) this;
        }

        public Criteria andMYearNotBetween(String value1, String value2) {
            addCriterion("m_year not between", value1, value2, "mYear");
            return (Criteria) this;
        }

        public Criteria andMMonthIsNull() {
            addCriterion("m_month is null");
            return (Criteria) this;
        }

        public Criteria andMMonthIsNotNull() {
            addCriterion("m_month is not null");
            return (Criteria) this;
        }

        public Criteria andMMonthEqualTo(String value) {
            addCriterion("m_month =", value, "mMonth");
            return (Criteria) this;
        }

        public Criteria andMMonthNotEqualTo(String value) {
            addCriterion("m_month <>", value, "mMonth");
            return (Criteria) this;
        }

        public Criteria andMMonthGreaterThan(String value) {
            addCriterion("m_month >", value, "mMonth");
            return (Criteria) this;
        }

        public Criteria andMMonthGreaterThanOrEqualTo(String value) {
            addCriterion("m_month >=", value, "mMonth");
            return (Criteria) this;
        }

        public Criteria andMMonthLessThan(String value) {
            addCriterion("m_month <", value, "mMonth");
            return (Criteria) this;
        }

        public Criteria andMMonthLessThanOrEqualTo(String value) {
            addCriterion("m_month <=", value, "mMonth");
            return (Criteria) this;
        }

        public Criteria andMMonthLike(String value) {
            addCriterion("m_month like", value, "mMonth");
            return (Criteria) this;
        }

        public Criteria andMMonthNotLike(String value) {
            addCriterion("m_month not like", value, "mMonth");
            return (Criteria) this;
        }

        public Criteria andMMonthIn(List<String> values) {
            addCriterion("m_month in", values, "mMonth");
            return (Criteria) this;
        }

        public Criteria andMMonthNotIn(List<String> values) {
            addCriterion("m_month not in", values, "mMonth");
            return (Criteria) this;
        }

        public Criteria andMMonthBetween(String value1, String value2) {
            addCriterion("m_month between", value1, value2, "mMonth");
            return (Criteria) this;
        }

        public Criteria andMMonthNotBetween(String value1, String value2) {
            addCriterion("m_month not between", value1, value2, "mMonth");
            return (Criteria) this;
        }

        public Criteria andMDateIsNull() {
            addCriterion("m_date is null");
            return (Criteria) this;
        }

        public Criteria andMDateIsNotNull() {
            addCriterion("m_date is not null");
            return (Criteria) this;
        }

        public Criteria andMDateEqualTo(Date value) {
            addCriterionForJDBCDate("m_date =", value, "mDate");
            return (Criteria) this;
        }

        public Criteria andMDateNotEqualTo(Date value) {
            addCriterionForJDBCDate("m_date <>", value, "mDate");
            return (Criteria) this;
        }

        public Criteria andMDateGreaterThan(Date value) {
            addCriterionForJDBCDate("m_date >", value, "mDate");
            return (Criteria) this;
        }

        public Criteria andMDateGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("m_date >=", value, "mDate");
            return (Criteria) this;
        }

        public Criteria andMDateLessThan(Date value) {
            addCriterionForJDBCDate("m_date <", value, "mDate");
            return (Criteria) this;
        }

        public Criteria andMDateLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("m_date <=", value, "mDate");
            return (Criteria) this;
        }

        public Criteria andMDateIn(List<Date> values) {
            addCriterionForJDBCDate("m_date in", values, "mDate");
            return (Criteria) this;
        }

        public Criteria andMDateNotIn(List<Date> values) {
            addCriterionForJDBCDate("m_date not in", values, "mDate");
            return (Criteria) this;
        }

        public Criteria andMDateBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("m_date between", value1, value2, "mDate");
            return (Criteria) this;
        }

        public Criteria andMDateNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("m_date not between", value1, value2, "mDate");
            return (Criteria) this;
        }

        public Criteria andMFlagIsNull() {
            addCriterion("m_flag is null");
            return (Criteria) this;
        }

        public Criteria andMFlagIsNotNull() {
            addCriterion("m_flag is not null");
            return (Criteria) this;
        }

        public Criteria andMFlagEqualTo(Byte value) {
            addCriterion("m_flag =", value, "mFlag");
            return (Criteria) this;
        }

        public Criteria andMFlagNotEqualTo(Byte value) {
            addCriterion("m_flag <>", value, "mFlag");
            return (Criteria) this;
        }

        public Criteria andMFlagGreaterThan(Byte value) {
            addCriterion("m_flag >", value, "mFlag");
            return (Criteria) this;
        }

        public Criteria andMFlagGreaterThanOrEqualTo(Byte value) {
            addCriterion("m_flag >=", value, "mFlag");
            return (Criteria) this;
        }

        public Criteria andMFlagLessThan(Byte value) {
            addCriterion("m_flag <", value, "mFlag");
            return (Criteria) this;
        }

        public Criteria andMFlagLessThanOrEqualTo(Byte value) {
            addCriterion("m_flag <=", value, "mFlag");
            return (Criteria) this;
        }

        public Criteria andMFlagIn(List<Byte> values) {
            addCriterion("m_flag in", values, "mFlag");
            return (Criteria) this;
        }

        public Criteria andMFlagNotIn(List<Byte> values) {
            addCriterion("m_flag not in", values, "mFlag");
            return (Criteria) this;
        }

        public Criteria andMFlagBetween(Byte value1, Byte value2) {
            addCriterion("m_flag between", value1, value2, "mFlag");
            return (Criteria) this;
        }

        public Criteria andMFlagNotBetween(Byte value1, Byte value2) {
            addCriterion("m_flag not between", value1, value2, "mFlag");
            return (Criteria) this;
        }

        public Criteria andMAdminidIsNull() {
            addCriterion("m_adminid is null");
            return (Criteria) this;
        }

        public Criteria andMAdminidIsNotNull() {
            addCriterion("m_adminid is not null");
            return (Criteria) this;
        }

        public Criteria andMAdminidEqualTo(Integer value) {
            addCriterion("m_adminid =", value, "mAdminid");
            return (Criteria) this;
        }

        public Criteria andMAdminidNotEqualTo(Integer value) {
            addCriterion("m_adminid <>", value, "mAdminid");
            return (Criteria) this;
        }

        public Criteria andMAdminidGreaterThan(Integer value) {
            addCriterion("m_adminid >", value, "mAdminid");
            return (Criteria) this;
        }

        public Criteria andMAdminidGreaterThanOrEqualTo(Integer value) {
            addCriterion("m_adminid >=", value, "mAdminid");
            return (Criteria) this;
        }

        public Criteria andMAdminidLessThan(Integer value) {
            addCriterion("m_adminid <", value, "mAdminid");
            return (Criteria) this;
        }

        public Criteria andMAdminidLessThanOrEqualTo(Integer value) {
            addCriterion("m_adminid <=", value, "mAdminid");
            return (Criteria) this;
        }

        public Criteria andMAdminidIn(List<Integer> values) {
            addCriterion("m_adminid in", values, "mAdminid");
            return (Criteria) this;
        }

        public Criteria andMAdminidNotIn(List<Integer> values) {
            addCriterion("m_adminid not in", values, "mAdminid");
            return (Criteria) this;
        }

        public Criteria andMAdminidBetween(Integer value1, Integer value2) {
            addCriterion("m_adminid between", value1, value2, "mAdminid");
            return (Criteria) this;
        }

        public Criteria andMAdminidNotBetween(Integer value1, Integer value2) {
            addCriterion("m_adminid not between", value1, value2, "mAdminid");
            return (Criteria) this;
        }

        public Criteria andMUserIsNull() {
            addCriterion("m_user is null");
            return (Criteria) this;
        }

        public Criteria andMUserIsNotNull() {
            addCriterion("m_user is not null");
            return (Criteria) this;
        }

        public Criteria andMUserEqualTo(String value) {
            addCriterion("m_user =", value, "mUser");
            return (Criteria) this;
        }

        public Criteria andMUserNotEqualTo(String value) {
            addCriterion("m_user <>", value, "mUser");
            return (Criteria) this;
        }

        public Criteria andMUserGreaterThan(String value) {
            addCriterion("m_user >", value, "mUser");
            return (Criteria) this;
        }

        public Criteria andMUserGreaterThanOrEqualTo(String value) {
            addCriterion("m_user >=", value, "mUser");
            return (Criteria) this;
        }

        public Criteria andMUserLessThan(String value) {
            addCriterion("m_user <", value, "mUser");
            return (Criteria) this;
        }

        public Criteria andMUserLessThanOrEqualTo(String value) {
            addCriterion("m_user <=", value, "mUser");
            return (Criteria) this;
        }

        public Criteria andMUserLike(String value) {
            addCriterion("m_user like", value, "mUser");
            return (Criteria) this;
        }

        public Criteria andMUserNotLike(String value) {
            addCriterion("m_user not like", value, "mUser");
            return (Criteria) this;
        }

        public Criteria andMUserIn(List<String> values) {
            addCriterion("m_user in", values, "mUser");
            return (Criteria) this;
        }

        public Criteria andMUserNotIn(List<String> values) {
            addCriterion("m_user not in", values, "mUser");
            return (Criteria) this;
        }

        public Criteria andMUserBetween(String value1, String value2) {
            addCriterion("m_user between", value1, value2, "mUser");
            return (Criteria) this;
        }

        public Criteria andMUserNotBetween(String value1, String value2) {
            addCriterion("m_user not between", value1, value2, "mUser");
            return (Criteria) this;
        }

        public Criteria andMTrainsIsNull() {
            addCriterion("m_trains is null");
            return (Criteria) this;
        }

        public Criteria andMTrainsIsNotNull() {
            addCriterion("m_trains is not null");
            return (Criteria) this;
        }

        public Criteria andMTrainsEqualTo(Integer value) {
            addCriterion("m_trains =", value, "mTrains");
            return (Criteria) this;
        }

        public Criteria andMTrainsNotEqualTo(Integer value) {
            addCriterion("m_trains <>", value, "mTrains");
            return (Criteria) this;
        }

        public Criteria andMTrainsGreaterThan(Integer value) {
            addCriterion("m_trains >", value, "mTrains");
            return (Criteria) this;
        }

        public Criteria andMTrainsGreaterThanOrEqualTo(Integer value) {
            addCriterion("m_trains >=", value, "mTrains");
            return (Criteria) this;
        }

        public Criteria andMTrainsLessThan(Integer value) {
            addCriterion("m_trains <", value, "mTrains");
            return (Criteria) this;
        }

        public Criteria andMTrainsLessThanOrEqualTo(Integer value) {
            addCriterion("m_trains <=", value, "mTrains");
            return (Criteria) this;
        }

        public Criteria andMTrainsIn(List<Integer> values) {
            addCriterion("m_trains in", values, "mTrains");
            return (Criteria) this;
        }

        public Criteria andMTrainsNotIn(List<Integer> values) {
            addCriterion("m_trains not in", values, "mTrains");
            return (Criteria) this;
        }

        public Criteria andMTrainsBetween(Integer value1, Integer value2) {
            addCriterion("m_trains between", value1, value2, "mTrains");
            return (Criteria) this;
        }

        public Criteria andMTrainsNotBetween(Integer value1, Integer value2) {
            addCriterion("m_trains not between", value1, value2, "mTrains");
            return (Criteria) this;
        }

        public Criteria andMWeightIsNull() {
            addCriterion("m_weight is null");
            return (Criteria) this;
        }

        public Criteria andMWeightIsNotNull() {
            addCriterion("m_weight is not null");
            return (Criteria) this;
        }

        public Criteria andMWeightEqualTo(Long value) {
            addCriterion("m_weight =", value, "mWeight");
            return (Criteria) this;
        }

        public Criteria andMWeightNotEqualTo(Long value) {
            addCriterion("m_weight <>", value, "mWeight");
            return (Criteria) this;
        }

        public Criteria andMWeightGreaterThan(Long value) {
            addCriterion("m_weight >", value, "mWeight");
            return (Criteria) this;
        }

        public Criteria andMWeightGreaterThanOrEqualTo(Long value) {
            addCriterion("m_weight >=", value, "mWeight");
            return (Criteria) this;
        }

        public Criteria andMWeightLessThan(Long value) {
            addCriterion("m_weight <", value, "mWeight");
            return (Criteria) this;
        }

        public Criteria andMWeightLessThanOrEqualTo(Long value) {
            addCriterion("m_weight <=", value, "mWeight");
            return (Criteria) this;
        }

        public Criteria andMWeightIn(List<Long> values) {
            addCriterion("m_weight in", values, "mWeight");
            return (Criteria) this;
        }

        public Criteria andMWeightNotIn(List<Long> values) {
            addCriterion("m_weight not in", values, "mWeight");
            return (Criteria) this;
        }

        public Criteria andMWeightBetween(Long value1, Long value2) {
            addCriterion("m_weight between", value1, value2, "mWeight");
            return (Criteria) this;
        }

        public Criteria andMWeightNotBetween(Long value1, Long value2) {
            addCriterion("m_weight not between", value1, value2, "mWeight");
            return (Criteria) this;
        }

        public Criteria andMStateIsNull() {
            addCriterion("m_state is null");
            return (Criteria) this;
        }

        public Criteria andMStateIsNotNull() {
            addCriterion("m_state is not null");
            return (Criteria) this;
        }

        public Criteria andMStateEqualTo(Byte value) {
            addCriterion("m_state =", value, "mState");
            return (Criteria) this;
        }

        public Criteria andMStateNotEqualTo(Byte value) {
            addCriterion("m_state <>", value, "mState");
            return (Criteria) this;
        }

        public Criteria andMStateGreaterThan(Byte value) {
            addCriterion("m_state >", value, "mState");
            return (Criteria) this;
        }

        public Criteria andMStateGreaterThanOrEqualTo(Byte value) {
            addCriterion("m_state >=", value, "mState");
            return (Criteria) this;
        }

        public Criteria andMStateLessThan(Byte value) {
            addCriterion("m_state <", value, "mState");
            return (Criteria) this;
        }

        public Criteria andMStateLessThanOrEqualTo(Byte value) {
            addCriterion("m_state <=", value, "mState");
            return (Criteria) this;
        }

        public Criteria andMStateIn(List<Byte> values) {
            addCriterion("m_state in", values, "mState");
            return (Criteria) this;
        }

        public Criteria andMStateNotIn(List<Byte> values) {
            addCriterion("m_state not in", values, "mState");
            return (Criteria) this;
        }

        public Criteria andMStateBetween(Byte value1, Byte value2) {
            addCriterion("m_state between", value1, value2, "mState");
            return (Criteria) this;
        }

        public Criteria andMStateNotBetween(Byte value1, Byte value2) {
            addCriterion("m_state not between", value1, value2, "mState");
            return (Criteria) this;
        }

        public Criteria andMRnumberIsNull() {
            addCriterion("m_rnumber is null");
            return (Criteria) this;
        }

        public Criteria andMRnumberIsNotNull() {
            addCriterion("m_rnumber is not null");
            return (Criteria) this;
        }

        public Criteria andMRnumberEqualTo(Integer value) {
            addCriterion("m_rnumber =", value, "mRnumber");
            return (Criteria) this;
        }

        public Criteria andMRnumberNotEqualTo(Integer value) {
            addCriterion("m_rnumber <>", value, "mRnumber");
            return (Criteria) this;
        }

        public Criteria andMRnumberGreaterThan(Integer value) {
            addCriterion("m_rnumber >", value, "mRnumber");
            return (Criteria) this;
        }

        public Criteria andMRnumberGreaterThanOrEqualTo(Integer value) {
            addCriterion("m_rnumber >=", value, "mRnumber");
            return (Criteria) this;
        }

        public Criteria andMRnumberLessThan(Integer value) {
            addCriterion("m_rnumber <", value, "mRnumber");
            return (Criteria) this;
        }

        public Criteria andMRnumberLessThanOrEqualTo(Integer value) {
            addCriterion("m_rnumber <=", value, "mRnumber");
            return (Criteria) this;
        }

        public Criteria andMRnumberIn(List<Integer> values) {
            addCriterion("m_rnumber in", values, "mRnumber");
            return (Criteria) this;
        }

        public Criteria andMRnumberNotIn(List<Integer> values) {
            addCriterion("m_rnumber not in", values, "mRnumber");
            return (Criteria) this;
        }

        public Criteria andMRnumberBetween(Integer value1, Integer value2) {
            addCriterion("m_rnumber between", value1, value2, "mRnumber");
            return (Criteria) this;
        }

        public Criteria andMRnumberNotBetween(Integer value1, Integer value2) {
            addCriterion("m_rnumber not between", value1, value2, "mRnumber");
            return (Criteria) this;
        }

        public Criteria andMRweightIsNull() {
            addCriterion("m_rweight is null");
            return (Criteria) this;
        }

        public Criteria andMRweightIsNotNull() {
            addCriterion("m_rweight is not null");
            return (Criteria) this;
        }

        public Criteria andMRweightEqualTo(Long value) {
            addCriterion("m_rweight =", value, "mRweight");
            return (Criteria) this;
        }

        public Criteria andMRweightNotEqualTo(Long value) {
            addCriterion("m_rweight <>", value, "mRweight");
            return (Criteria) this;
        }

        public Criteria andMRweightGreaterThan(Long value) {
            addCriterion("m_rweight >", value, "mRweight");
            return (Criteria) this;
        }

        public Criteria andMRweightGreaterThanOrEqualTo(Long value) {
            addCriterion("m_rweight >=", value, "mRweight");
            return (Criteria) this;
        }

        public Criteria andMRweightLessThan(Long value) {
            addCriterion("m_rweight <", value, "mRweight");
            return (Criteria) this;
        }

        public Criteria andMRweightLessThanOrEqualTo(Long value) {
            addCriterion("m_rweight <=", value, "mRweight");
            return (Criteria) this;
        }

        public Criteria andMRweightIn(List<Long> values) {
            addCriterion("m_rweight in", values, "mRweight");
            return (Criteria) this;
        }

        public Criteria andMRweightNotIn(List<Long> values) {
            addCriterion("m_rweight not in", values, "mRweight");
            return (Criteria) this;
        }

        public Criteria andMRweightBetween(Long value1, Long value2) {
            addCriterion("m_rweight between", value1, value2, "mRweight");
            return (Criteria) this;
        }

        public Criteria andMRweightNotBetween(Long value1, Long value2) {
            addCriterion("m_rweight not between", value1, value2, "mRweight");
            return (Criteria) this;
        }

        public Criteria andMRealtrainIsNull() {
            addCriterion("m_realtrain is null");
            return (Criteria) this;
        }

        public Criteria andMRealtrainIsNotNull() {
            addCriterion("m_realtrain is not null");
            return (Criteria) this;
        }

        public Criteria andMRealtrainEqualTo(Integer value) {
            addCriterion("m_realtrain =", value, "mRealtrain");
            return (Criteria) this;
        }

        public Criteria andMRealtrainNotEqualTo(Integer value) {
            addCriterion("m_realtrain <>", value, "mRealtrain");
            return (Criteria) this;
        }

        public Criteria andMRealtrainGreaterThan(Integer value) {
            addCriterion("m_realtrain >", value, "mRealtrain");
            return (Criteria) this;
        }

        public Criteria andMRealtrainGreaterThanOrEqualTo(Integer value) {
            addCriterion("m_realtrain >=", value, "mRealtrain");
            return (Criteria) this;
        }

        public Criteria andMRealtrainLessThan(Integer value) {
            addCriterion("m_realtrain <", value, "mRealtrain");
            return (Criteria) this;
        }

        public Criteria andMRealtrainLessThanOrEqualTo(Integer value) {
            addCriterion("m_realtrain <=", value, "mRealtrain");
            return (Criteria) this;
        }

        public Criteria andMRealtrainIn(List<Integer> values) {
            addCriterion("m_realtrain in", values, "mRealtrain");
            return (Criteria) this;
        }

        public Criteria andMRealtrainNotIn(List<Integer> values) {
            addCriterion("m_realtrain not in", values, "mRealtrain");
            return (Criteria) this;
        }

        public Criteria andMRealtrainBetween(Integer value1, Integer value2) {
            addCriterion("m_realtrain between", value1, value2, "mRealtrain");
            return (Criteria) this;
        }

        public Criteria andMRealtrainNotBetween(Integer value1, Integer value2) {
            addCriterion("m_realtrain not between", value1, value2, "mRealtrain");
            return (Criteria) this;
        }

        public Criteria andMRealweightIsNull() {
            addCriterion("m_realweight is null");
            return (Criteria) this;
        }

        public Criteria andMRealweightIsNotNull() {
            addCriterion("m_realweight is not null");
            return (Criteria) this;
        }

        public Criteria andMRealweightEqualTo(Long value) {
            addCriterion("m_realweight =", value, "mRealweight");
            return (Criteria) this;
        }

        public Criteria andMRealweightNotEqualTo(Long value) {
            addCriterion("m_realweight <>", value, "mRealweight");
            return (Criteria) this;
        }

        public Criteria andMRealweightGreaterThan(Long value) {
            addCriterion("m_realweight >", value, "mRealweight");
            return (Criteria) this;
        }

        public Criteria andMRealweightGreaterThanOrEqualTo(Long value) {
            addCriterion("m_realweight >=", value, "mRealweight");
            return (Criteria) this;
        }

        public Criteria andMRealweightLessThan(Long value) {
            addCriterion("m_realweight <", value, "mRealweight");
            return (Criteria) this;
        }

        public Criteria andMRealweightLessThanOrEqualTo(Long value) {
            addCriterion("m_realweight <=", value, "mRealweight");
            return (Criteria) this;
        }

        public Criteria andMRealweightIn(List<Long> values) {
            addCriterion("m_realweight in", values, "mRealweight");
            return (Criteria) this;
        }

        public Criteria andMRealweightNotIn(List<Long> values) {
            addCriterion("m_realweight not in", values, "mRealweight");
            return (Criteria) this;
        }

        public Criteria andMRealweightBetween(Long value1, Long value2) {
            addCriterion("m_realweight between", value1, value2, "mRealweight");
            return (Criteria) this;
        }

        public Criteria andMRealweightNotBetween(Long value1, Long value2) {
            addCriterion("m_realweight not between", value1, value2, "mRealweight");
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