package com.xj.domain.plan;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class PlanMonthQuery {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Integer pageNo = 1;

    protected Integer startRow;

    protected Integer pageSize = 10;

    protected String fields;

    public PlanMonthQuery() {
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

        public Criteria andMYearEqualTo(Integer value) {
            addCriterion("m_year =", value, "mYear");
            return (Criteria) this;
        }

        public Criteria andMYearNotEqualTo(Integer value) {
            addCriterion("m_year <>", value, "mYear");
            return (Criteria) this;
        }

        public Criteria andMYearGreaterThan(Integer value) {
            addCriterion("m_year >", value, "mYear");
            return (Criteria) this;
        }

        public Criteria andMYearGreaterThanOrEqualTo(Integer value) {
            addCriterion("m_year >=", value, "mYear");
            return (Criteria) this;
        }

        public Criteria andMYearLessThan(Integer value) {
            addCriterion("m_year <", value, "mYear");
            return (Criteria) this;
        }

        public Criteria andMYearLessThanOrEqualTo(Integer value) {
            addCriterion("m_year <=", value, "mYear");
            return (Criteria) this;
        }

        public Criteria andMYearIn(List<Integer> values) {
            addCriterion("m_year in", values, "mYear");
            return (Criteria) this;
        }

        public Criteria andMYearNotIn(List<Integer> values) {
            addCriterion("m_year not in", values, "mYear");
            return (Criteria) this;
        }

        public Criteria andMYearBetween(Integer value1, Integer value2) {
            addCriterion("m_year between", value1, value2, "mYear");
            return (Criteria) this;
        }

        public Criteria andMYearNotBetween(Integer value1, Integer value2) {
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

        public Criteria andMMonthEqualTo(Integer value) {
            addCriterion("m_month =", value, "mMonth");
            return (Criteria) this;
        }

        public Criteria andMMonthNotEqualTo(Integer value) {
            addCriterion("m_month <>", value, "mMonth");
            return (Criteria) this;
        }

        public Criteria andMMonthGreaterThan(Integer value) {
            addCriterion("m_month >", value, "mMonth");
            return (Criteria) this;
        }

        public Criteria andMMonthGreaterThanOrEqualTo(Integer value) {
            addCriterion("m_month >=", value, "mMonth");
            return (Criteria) this;
        }

        public Criteria andMMonthLessThan(Integer value) {
            addCriterion("m_month <", value, "mMonth");
            return (Criteria) this;
        }

        public Criteria andMMonthLessThanOrEqualTo(Integer value) {
            addCriterion("m_month <=", value, "mMonth");
            return (Criteria) this;
        }

        public Criteria andMMonthIn(List<Integer> values) {
            addCriterion("m_month in", values, "mMonth");
            return (Criteria) this;
        }

        public Criteria andMMonthNotIn(List<Integer> values) {
            addCriterion("m_month not in", values, "mMonth");
            return (Criteria) this;
        }

        public Criteria andMMonthBetween(Integer value1, Integer value2) {
            addCriterion("m_month between", value1, value2, "mMonth");
            return (Criteria) this;
        }

        public Criteria andMMonthNotBetween(Integer value1, Integer value2) {
            addCriterion("m_month not between", value1, value2, "mMonth");
            return (Criteria) this;
        }

        public Criteria andMPlantypeIsNull() {
            addCriterion("m_plantype is null");
            return (Criteria) this;
        }

        public Criteria andMPlantypeIsNotNull() {
            addCriterion("m_plantype is not null");
            return (Criteria) this;
        }

        public Criteria andMPlantypeEqualTo(Byte value) {
            addCriterion("m_plantype =", value, "mPlantype");
            return (Criteria) this;
        }

        public Criteria andMPlantypeNotEqualTo(Byte value) {
            addCriterion("m_plantype <>", value, "mPlantype");
            return (Criteria) this;
        }

        public Criteria andMPlantypeGreaterThan(Byte value) {
            addCriterion("m_plantype >", value, "mPlantype");
            return (Criteria) this;
        }

        public Criteria andMPlantypeGreaterThanOrEqualTo(Byte value) {
            addCriterion("m_plantype >=", value, "mPlantype");
            return (Criteria) this;
        }

        public Criteria andMPlantypeLessThan(Byte value) {
            addCriterion("m_plantype <", value, "mPlantype");
            return (Criteria) this;
        }

        public Criteria andMPlantypeLessThanOrEqualTo(Byte value) {
            addCriterion("m_plantype <=", value, "mPlantype");
            return (Criteria) this;
        }

        public Criteria andMPlantypeIn(List<Byte> values) {
            addCriterion("m_plantype in", values, "mPlantype");
            return (Criteria) this;
        }

        public Criteria andMPlantypeNotIn(List<Byte> values) {
            addCriterion("m_plantype not in", values, "mPlantype");
            return (Criteria) this;
        }

        public Criteria andMPlantypeBetween(Byte value1, Byte value2) {
            addCriterion("m_plantype between", value1, value2, "mPlantype");
            return (Criteria) this;
        }

        public Criteria andMPlantypeNotBetween(Byte value1, Byte value2) {
            addCriterion("m_plantype not between", value1, value2, "mPlantype");
            return (Criteria) this;
        }

        public Criteria andMCountIsNull() {
            addCriterion("m_count is null");
            return (Criteria) this;
        }

        public Criteria andMCountIsNotNull() {
            addCriterion("m_count is not null");
            return (Criteria) this;
        }

        public Criteria andMCountEqualTo(Integer value) {
            addCriterion("m_count =", value, "mCount");
            return (Criteria) this;
        }

        public Criteria andMCountNotEqualTo(Integer value) {
            addCriterion("m_count <>", value, "mCount");
            return (Criteria) this;
        }

        public Criteria andMCountGreaterThan(Integer value) {
            addCriterion("m_count >", value, "mCount");
            return (Criteria) this;
        }

        public Criteria andMCountGreaterThanOrEqualTo(Integer value) {
            addCriterion("m_count >=", value, "mCount");
            return (Criteria) this;
        }

        public Criteria andMCountLessThan(Integer value) {
            addCriterion("m_count <", value, "mCount");
            return (Criteria) this;
        }

        public Criteria andMCountLessThanOrEqualTo(Integer value) {
            addCriterion("m_count <=", value, "mCount");
            return (Criteria) this;
        }

        public Criteria andMCountIn(List<Integer> values) {
            addCriterion("m_count in", values, "mCount");
            return (Criteria) this;
        }

        public Criteria andMCountNotIn(List<Integer> values) {
            addCriterion("m_count not in", values, "mCount");
            return (Criteria) this;
        }

        public Criteria andMCountBetween(Integer value1, Integer value2) {
            addCriterion("m_count between", value1, value2, "mCount");
            return (Criteria) this;
        }

        public Criteria andMCountNotBetween(Integer value1, Integer value2) {
            addCriterion("m_count not between", value1, value2, "mCount");
            return (Criteria) this;
        }

        public Criteria andMTransportIsNull() {
            addCriterion("m_transport is null");
            return (Criteria) this;
        }

        public Criteria andMTransportIsNotNull() {
            addCriterion("m_transport is not null");
            return (Criteria) this;
        }

        public Criteria andMTransportEqualTo(Byte value) {
            addCriterion("m_transport =", value, "mTransport");
            return (Criteria) this;
        }

        public Criteria andMTransportNotEqualTo(Byte value) {
            addCriterion("m_transport <>", value, "mTransport");
            return (Criteria) this;
        }

        public Criteria andMTransportGreaterThan(Byte value) {
            addCriterion("m_transport >", value, "mTransport");
            return (Criteria) this;
        }

        public Criteria andMTransportGreaterThanOrEqualTo(Byte value) {
            addCriterion("m_transport >=", value, "mTransport");
            return (Criteria) this;
        }

        public Criteria andMTransportLessThan(Byte value) {
            addCriterion("m_transport <", value, "mTransport");
            return (Criteria) this;
        }

        public Criteria andMTransportLessThanOrEqualTo(Byte value) {
            addCriterion("m_transport <=", value, "mTransport");
            return (Criteria) this;
        }

        public Criteria andMTransportIn(List<Byte> values) {
            addCriterion("m_transport in", values, "mTransport");
            return (Criteria) this;
        }

        public Criteria andMTransportNotIn(List<Byte> values) {
            addCriterion("m_transport not in", values, "mTransport");
            return (Criteria) this;
        }

        public Criteria andMTransportBetween(Byte value1, Byte value2) {
            addCriterion("m_transport between", value1, value2, "mTransport");
            return (Criteria) this;
        }

        public Criteria andMTransportNotBetween(Byte value1, Byte value2) {
            addCriterion("m_transport not between", value1, value2, "mTransport");
            return (Criteria) this;
        }

        public Criteria andYUserIsNull() {
            addCriterion("y_user is null");
            return (Criteria) this;
        }

        public Criteria andYUserIsNotNull() {
            addCriterion("y_user is not null");
            return (Criteria) this;
        }

        public Criteria andYUserEqualTo(String value) {
            addCriterion("y_user =", value, "yUser");
            return (Criteria) this;
        }

        public Criteria andYUserNotEqualTo(String value) {
            addCriterion("y_user <>", value, "yUser");
            return (Criteria) this;
        }

        public Criteria andYUserGreaterThan(String value) {
            addCriterion("y_user >", value, "yUser");
            return (Criteria) this;
        }

        public Criteria andYUserGreaterThanOrEqualTo(String value) {
            addCriterion("y_user >=", value, "yUser");
            return (Criteria) this;
        }

        public Criteria andYUserLessThan(String value) {
            addCriterion("y_user <", value, "yUser");
            return (Criteria) this;
        }

        public Criteria andYUserLessThanOrEqualTo(String value) {
            addCriterion("y_user <=", value, "yUser");
            return (Criteria) this;
        }

        public Criteria andYUserLike(String value) {
            addCriterion("y_user like", value, "yUser");
            return (Criteria) this;
        }

        public Criteria andYUserNotLike(String value) {
            addCriterion("y_user not like", value, "yUser");
            return (Criteria) this;
        }

        public Criteria andYUserIn(List<String> values) {
            addCriterion("y_user in", values, "yUser");
            return (Criteria) this;
        }

        public Criteria andYUserNotIn(List<String> values) {
            addCriterion("y_user not in", values, "yUser");
            return (Criteria) this;
        }

        public Criteria andYUserBetween(String value1, String value2) {
            addCriterion("y_user between", value1, value2, "yUser");
            return (Criteria) this;
        }

        public Criteria andYUserNotBetween(String value1, String value2) {
            addCriterion("y_user not between", value1, value2, "yUser");
            return (Criteria) this;
        }

        public Criteria andYDateIsNull() {
            addCriterion("y_date is null");
            return (Criteria) this;
        }

        public Criteria andYDateIsNotNull() {
            addCriterion("y_date is not null");
            return (Criteria) this;
        }

        public Criteria andYDateEqualTo(Date value) {
            addCriterionForJDBCDate("y_date =", value, "yDate");
            return (Criteria) this;
        }

        public Criteria andYDateNotEqualTo(Date value) {
            addCriterionForJDBCDate("y_date <>", value, "yDate");
            return (Criteria) this;
        }

        public Criteria andYDateGreaterThan(Date value) {
            addCriterionForJDBCDate("y_date >", value, "yDate");
            return (Criteria) this;
        }

        public Criteria andYDateGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("y_date >=", value, "yDate");
            return (Criteria) this;
        }

        public Criteria andYDateLessThan(Date value) {
            addCriterionForJDBCDate("y_date <", value, "yDate");
            return (Criteria) this;
        }

        public Criteria andYDateLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("y_date <=", value, "yDate");
            return (Criteria) this;
        }

        public Criteria andYDateIn(List<Date> values) {
            addCriterionForJDBCDate("y_date in", values, "yDate");
            return (Criteria) this;
        }

        public Criteria andYDateNotIn(List<Date> values) {
            addCriterionForJDBCDate("y_date not in", values, "yDate");
            return (Criteria) this;
        }

        public Criteria andYDateBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("y_date between", value1, value2, "yDate");
            return (Criteria) this;
        }

        public Criteria andYDateNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("y_date not between", value1, value2, "yDate");
            return (Criteria) this;
        }

        public Criteria andYDepartmentIsNull() {
            addCriterion("y_department is null");
            return (Criteria) this;
        }

        public Criteria andYDepartmentIsNotNull() {
            addCriterion("y_department is not null");
            return (Criteria) this;
        }

        public Criteria andYDepartmentEqualTo(String value) {
            addCriterion("y_department =", value, "yDepartment");
            return (Criteria) this;
        }

        public Criteria andYDepartmentNotEqualTo(String value) {
            addCriterion("y_department <>", value, "yDepartment");
            return (Criteria) this;
        }

        public Criteria andYDepartmentGreaterThan(String value) {
            addCriterion("y_department >", value, "yDepartment");
            return (Criteria) this;
        }

        public Criteria andYDepartmentGreaterThanOrEqualTo(String value) {
            addCriterion("y_department >=", value, "yDepartment");
            return (Criteria) this;
        }

        public Criteria andYDepartmentLessThan(String value) {
            addCriterion("y_department <", value, "yDepartment");
            return (Criteria) this;
        }

        public Criteria andYDepartmentLessThanOrEqualTo(String value) {
            addCriterion("y_department <=", value, "yDepartment");
            return (Criteria) this;
        }

        public Criteria andYDepartmentLike(String value) {
            addCriterion("y_department like", value, "yDepartment");
            return (Criteria) this;
        }

        public Criteria andYDepartmentNotLike(String value) {
            addCriterion("y_department not like", value, "yDepartment");
            return (Criteria) this;
        }

        public Criteria andYDepartmentIn(List<String> values) {
            addCriterion("y_department in", values, "yDepartment");
            return (Criteria) this;
        }

        public Criteria andYDepartmentNotIn(List<String> values) {
            addCriterion("y_department not in", values, "yDepartment");
            return (Criteria) this;
        }

        public Criteria andYDepartmentBetween(String value1, String value2) {
            addCriterion("y_department between", value1, value2, "yDepartment");
            return (Criteria) this;
        }

        public Criteria andYDepartmentNotBetween(String value1, String value2) {
            addCriterion("y_department not between", value1, value2, "yDepartment");
            return (Criteria) this;
        }

        public Criteria andYStateIsNull() {
            addCriterion("y_state is null");
            return (Criteria) this;
        }

        public Criteria andYStateIsNotNull() {
            addCriterion("y_state is not null");
            return (Criteria) this;
        }

        public Criteria andYStateEqualTo(Byte value) {
            addCriterion("y_state =", value, "yState");
            return (Criteria) this;
        }

        public Criteria andYStateNotEqualTo(Byte value) {
            addCriterion("y_state <>", value, "yState");
            return (Criteria) this;
        }

        public Criteria andYStateGreaterThan(Byte value) {
            addCriterion("y_state >", value, "yState");
            return (Criteria) this;
        }

        public Criteria andYStateGreaterThanOrEqualTo(Byte value) {
            addCriterion("y_state >=", value, "yState");
            return (Criteria) this;
        }

        public Criteria andYStateLessThan(Byte value) {
            addCriterion("y_state <", value, "yState");
            return (Criteria) this;
        }

        public Criteria andYStateLessThanOrEqualTo(Byte value) {
            addCriterion("y_state <=", value, "yState");
            return (Criteria) this;
        }

        public Criteria andYStateIn(List<Byte> values) {
            addCriterion("y_state in", values, "yState");
            return (Criteria) this;
        }

        public Criteria andYStateNotIn(List<Byte> values) {
            addCriterion("y_state not in", values, "yState");
            return (Criteria) this;
        }

        public Criteria andYStateBetween(Byte value1, Byte value2) {
            addCriterion("y_state between", value1, value2, "yState");
            return (Criteria) this;
        }

        public Criteria andYStateNotBetween(Byte value1, Byte value2) {
            addCriterion("y_state not between", value1, value2, "yState");
            return (Criteria) this;
        }

        public Criteria andCreatedateIsNull() {
            addCriterion("CreateDate is null");
            return (Criteria) this;
        }

        public Criteria andCreatedateIsNotNull() {
            addCriterion("CreateDate is not null");
            return (Criteria) this;
        }

        public Criteria andCreatedateEqualTo(Date value) {
            addCriterion("CreateDate =", value, "createdate");
            return (Criteria) this;
        }

        public Criteria andCreatedateNotEqualTo(Date value) {
            addCriterion("CreateDate <>", value, "createdate");
            return (Criteria) this;
        }

        public Criteria andCreatedateGreaterThan(Date value) {
            addCriterion("CreateDate >", value, "createdate");
            return (Criteria) this;
        }

        public Criteria andCreatedateGreaterThanOrEqualTo(Date value) {
            addCriterion("CreateDate >=", value, "createdate");
            return (Criteria) this;
        }

        public Criteria andCreatedateLessThan(Date value) {
            addCriterion("CreateDate <", value, "createdate");
            return (Criteria) this;
        }

        public Criteria andCreatedateLessThanOrEqualTo(Date value) {
            addCriterion("CreateDate <=", value, "createdate");
            return (Criteria) this;
        }

        public Criteria andCreatedateIn(List<Date> values) {
            addCriterion("CreateDate in", values, "createdate");
            return (Criteria) this;
        }

        public Criteria andCreatedateNotIn(List<Date> values) {
            addCriterion("CreateDate not in", values, "createdate");
            return (Criteria) this;
        }

        public Criteria andCreatedateBetween(Date value1, Date value2) {
            addCriterion("CreateDate between", value1, value2, "createdate");
            return (Criteria) this;
        }

        public Criteria andCreatedateNotBetween(Date value1, Date value2) {
            addCriterion("CreateDate not between", value1, value2, "createdate");
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