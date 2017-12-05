package com.xj.domain.trainsplan;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class PDayrequestQuery {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Integer pageNo = 1;

    protected Integer startRow;

    protected Integer pageSize = 10;

    protected String fields;

    public PDayrequestQuery() {
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

        public Criteria andDIdIsNull() {
            addCriterion("d_id is null");
            return (Criteria) this;
        }

        public Criteria andDIdIsNotNull() {
            addCriterion("d_id is not null");
            return (Criteria) this;
        }

        public Criteria andDIdEqualTo(String value) {
            addCriterion("d_id =", value, "dId");
            return (Criteria) this;
        }

        public Criteria andDIdNotEqualTo(String value) {
            addCriterion("d_id <>", value, "dId");
            return (Criteria) this;
        }

        public Criteria andDIdGreaterThan(String value) {
            addCriterion("d_id >", value, "dId");
            return (Criteria) this;
        }

        public Criteria andDIdGreaterThanOrEqualTo(String value) {
            addCriterion("d_id >=", value, "dId");
            return (Criteria) this;
        }

        public Criteria andDIdLessThan(String value) {
            addCriterion("d_id <", value, "dId");
            return (Criteria) this;
        }

        public Criteria andDIdLessThanOrEqualTo(String value) {
            addCriterion("d_id <=", value, "dId");
            return (Criteria) this;
        }

        public Criteria andDIdLike(String value) {
            addCriterion("d_id like", value, "dId");
            return (Criteria) this;
        }

        public Criteria andDIdNotLike(String value) {
            addCriterion("d_id not like", value, "dId");
            return (Criteria) this;
        }

        public Criteria andDIdIn(List<String> values) {
            addCriterion("d_id in", values, "dId");
            return (Criteria) this;
        }

        public Criteria andDIdNotIn(List<String> values) {
            addCriterion("d_id not in", values, "dId");
            return (Criteria) this;
        }

        public Criteria andDIdBetween(String value1, String value2) {
            addCriterion("d_id between", value1, value2, "dId");
            return (Criteria) this;
        }

        public Criteria andDIdNotBetween(String value1, String value2) {
            addCriterion("d_id not between", value1, value2, "dId");
            return (Criteria) this;
        }

        public Criteria andDDateIsNull() {
            addCriterion("d_date is null");
            return (Criteria) this;
        }

        public Criteria andDDateIsNotNull() {
            addCriterion("d_date is not null");
            return (Criteria) this;
        }

        public Criteria andDDateEqualTo(Date value) {
            addCriterionForJDBCDate("d_date =", value, "dDate");
            return (Criteria) this;
        }

        public Criteria andDDateNotEqualTo(Date value) {
            addCriterionForJDBCDate("d_date <>", value, "dDate");
            return (Criteria) this;
        }

        public Criteria andDDateGreaterThan(Date value) {
            addCriterionForJDBCDate("d_date >", value, "dDate");
            return (Criteria) this;
        }

        public Criteria andDDateGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("d_date >=", value, "dDate");
            return (Criteria) this;
        }

        public Criteria andDDateLessThan(Date value) {
            addCriterionForJDBCDate("d_date <", value, "dDate");
            return (Criteria) this;
        }

        public Criteria andDDateLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("d_date <=", value, "dDate");
            return (Criteria) this;
        }

        public Criteria andDDateIn(List<Date> values) {
            addCriterionForJDBCDate("d_date in", values, "dDate");
            return (Criteria) this;
        }

        public Criteria andDDateNotIn(List<Date> values) {
            addCriterionForJDBCDate("d_date not in", values, "dDate");
            return (Criteria) this;
        }

        public Criteria andDDateBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("d_date between", value1, value2, "dDate");
            return (Criteria) this;
        }

        public Criteria andDDateNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("d_date not between", value1, value2, "dDate");
            return (Criteria) this;
        }

        public Criteria andDUserIsNull() {
            addCriterion("d_user is null");
            return (Criteria) this;
        }

        public Criteria andDUserIsNotNull() {
            addCriterion("d_user is not null");
            return (Criteria) this;
        }

        public Criteria andDUserEqualTo(String value) {
            addCriterion("d_user =", value, "dUser");
            return (Criteria) this;
        }

        public Criteria andDUserNotEqualTo(String value) {
            addCriterion("d_user <>", value, "dUser");
            return (Criteria) this;
        }

        public Criteria andDUserGreaterThan(String value) {
            addCriterion("d_user >", value, "dUser");
            return (Criteria) this;
        }

        public Criteria andDUserGreaterThanOrEqualTo(String value) {
            addCriterion("d_user >=", value, "dUser");
            return (Criteria) this;
        }

        public Criteria andDUserLessThan(String value) {
            addCriterion("d_user <", value, "dUser");
            return (Criteria) this;
        }

        public Criteria andDUserLessThanOrEqualTo(String value) {
            addCriterion("d_user <=", value, "dUser");
            return (Criteria) this;
        }

        public Criteria andDUserLike(String value) {
            addCriterion("d_user like", value, "dUser");
            return (Criteria) this;
        }

        public Criteria andDUserNotLike(String value) {
            addCriterion("d_user not like", value, "dUser");
            return (Criteria) this;
        }

        public Criteria andDUserIn(List<String> values) {
            addCriterion("d_user in", values, "dUser");
            return (Criteria) this;
        }

        public Criteria andDUserNotIn(List<String> values) {
            addCriterion("d_user not in", values, "dUser");
            return (Criteria) this;
        }

        public Criteria andDUserBetween(String value1, String value2) {
            addCriterion("d_user between", value1, value2, "dUser");
            return (Criteria) this;
        }

        public Criteria andDUserNotBetween(String value1, String value2) {
            addCriterion("d_user not between", value1, value2, "dUser");
            return (Criteria) this;
        }

        public Criteria andDAuditorIsNull() {
            addCriterion("d_auditor is null");
            return (Criteria) this;
        }

        public Criteria andDAuditorIsNotNull() {
            addCriterion("d_auditor is not null");
            return (Criteria) this;
        }

        public Criteria andDAuditorEqualTo(String value) {
            addCriterion("d_auditor =", value, "dAuditor");
            return (Criteria) this;
        }

        public Criteria andDAuditorNotEqualTo(String value) {
            addCriterion("d_auditor <>", value, "dAuditor");
            return (Criteria) this;
        }

        public Criteria andDAuditorGreaterThan(String value) {
            addCriterion("d_auditor >", value, "dAuditor");
            return (Criteria) this;
        }

        public Criteria andDAuditorGreaterThanOrEqualTo(String value) {
            addCriterion("d_auditor >=", value, "dAuditor");
            return (Criteria) this;
        }

        public Criteria andDAuditorLessThan(String value) {
            addCriterion("d_auditor <", value, "dAuditor");
            return (Criteria) this;
        }

        public Criteria andDAuditorLessThanOrEqualTo(String value) {
            addCriterion("d_auditor <=", value, "dAuditor");
            return (Criteria) this;
        }

        public Criteria andDAuditorLike(String value) {
            addCriterion("d_auditor like", value, "dAuditor");
            return (Criteria) this;
        }

        public Criteria andDAuditorNotLike(String value) {
            addCriterion("d_auditor not like", value, "dAuditor");
            return (Criteria) this;
        }

        public Criteria andDAuditorIn(List<String> values) {
            addCriterion("d_auditor in", values, "dAuditor");
            return (Criteria) this;
        }

        public Criteria andDAuditorNotIn(List<String> values) {
            addCriterion("d_auditor not in", values, "dAuditor");
            return (Criteria) this;
        }

        public Criteria andDAuditorBetween(String value1, String value2) {
            addCriterion("d_auditor between", value1, value2, "dAuditor");
            return (Criteria) this;
        }

        public Criteria andDAuditorNotBetween(String value1, String value2) {
            addCriterion("d_auditor not between", value1, value2, "dAuditor");
            return (Criteria) this;
        }

        public Criteria andDStartIsNull() {
            addCriterion("d_start is null");
            return (Criteria) this;
        }

        public Criteria andDStartIsNotNull() {
            addCriterion("d_start is not null");
            return (Criteria) this;
        }

        public Criteria andDStartEqualTo(String value) {
            addCriterion("d_start =", value, "dStart");
            return (Criteria) this;
        }

        public Criteria andDStartNotEqualTo(String value) {
            addCriterion("d_start <>", value, "dStart");
            return (Criteria) this;
        }

        public Criteria andDStartGreaterThan(String value) {
            addCriterion("d_start >", value, "dStart");
            return (Criteria) this;
        }

        public Criteria andDStartGreaterThanOrEqualTo(String value) {
            addCriterion("d_start >=", value, "dStart");
            return (Criteria) this;
        }

        public Criteria andDStartLessThan(String value) {
            addCriterion("d_start <", value, "dStart");
            return (Criteria) this;
        }

        public Criteria andDStartLessThanOrEqualTo(String value) {
            addCriterion("d_start <=", value, "dStart");
            return (Criteria) this;
        }

        public Criteria andDStartLike(String value) {
            addCriterion("d_start like", value, "dStart");
            return (Criteria) this;
        }

        public Criteria andDStartNotLike(String value) {
            addCriterion("d_start not like", value, "dStart");
            return (Criteria) this;
        }

        public Criteria andDStartIn(List<String> values) {
            addCriterion("d_start in", values, "dStart");
            return (Criteria) this;
        }

        public Criteria andDStartNotIn(List<String> values) {
            addCriterion("d_start not in", values, "dStart");
            return (Criteria) this;
        }

        public Criteria andDStartBetween(String value1, String value2) {
            addCriterion("d_start between", value1, value2, "dStart");
            return (Criteria) this;
        }

        public Criteria andDStartNotBetween(String value1, String value2) {
            addCriterion("d_start not between", value1, value2, "dStart");
            return (Criteria) this;
        }

        public Criteria andDTrainnumberIsNull() {
            addCriterion("d_trainnumber is null");
            return (Criteria) this;
        }

        public Criteria andDTrainnumberIsNotNull() {
            addCriterion("d_trainnumber is not null");
            return (Criteria) this;
        }

        public Criteria andDTrainnumberEqualTo(Integer value) {
            addCriterion("d_trainnumber =", value, "dTrainnumber");
            return (Criteria) this;
        }

        public Criteria andDTrainnumberNotEqualTo(Integer value) {
            addCriterion("d_trainnumber <>", value, "dTrainnumber");
            return (Criteria) this;
        }

        public Criteria andDTrainnumberGreaterThan(Integer value) {
            addCriterion("d_trainnumber >", value, "dTrainnumber");
            return (Criteria) this;
        }

        public Criteria andDTrainnumberGreaterThanOrEqualTo(Integer value) {
            addCriterion("d_trainnumber >=", value, "dTrainnumber");
            return (Criteria) this;
        }

        public Criteria andDTrainnumberLessThan(Integer value) {
            addCriterion("d_trainnumber <", value, "dTrainnumber");
            return (Criteria) this;
        }

        public Criteria andDTrainnumberLessThanOrEqualTo(Integer value) {
            addCriterion("d_trainnumber <=", value, "dTrainnumber");
            return (Criteria) this;
        }

        public Criteria andDTrainnumberIn(List<Integer> values) {
            addCriterion("d_trainnumber in", values, "dTrainnumber");
            return (Criteria) this;
        }

        public Criteria andDTrainnumberNotIn(List<Integer> values) {
            addCriterion("d_trainnumber not in", values, "dTrainnumber");
            return (Criteria) this;
        }

        public Criteria andDTrainnumberBetween(Integer value1, Integer value2) {
            addCriterion("d_trainnumber between", value1, value2, "dTrainnumber");
            return (Criteria) this;
        }

        public Criteria andDTrainnumberNotBetween(Integer value1, Integer value2) {
            addCriterion("d_trainnumber not between", value1, value2, "dTrainnumber");
            return (Criteria) this;
        }

        public Criteria andDRnumberIsNull() {
            addCriterion("d_rnumber is null");
            return (Criteria) this;
        }

        public Criteria andDRnumberIsNotNull() {
            addCriterion("d_rnumber is not null");
            return (Criteria) this;
        }

        public Criteria andDRnumberEqualTo(Integer value) {
            addCriterion("d_rnumber =", value, "dRnumber");
            return (Criteria) this;
        }

        public Criteria andDRnumberNotEqualTo(Integer value) {
            addCriterion("d_rnumber <>", value, "dRnumber");
            return (Criteria) this;
        }

        public Criteria andDRnumberGreaterThan(Integer value) {
            addCriterion("d_rnumber >", value, "dRnumber");
            return (Criteria) this;
        }

        public Criteria andDRnumberGreaterThanOrEqualTo(Integer value) {
            addCriterion("d_rnumber >=", value, "dRnumber");
            return (Criteria) this;
        }

        public Criteria andDRnumberLessThan(Integer value) {
            addCriterion("d_rnumber <", value, "dRnumber");
            return (Criteria) this;
        }

        public Criteria andDRnumberLessThanOrEqualTo(Integer value) {
            addCriterion("d_rnumber <=", value, "dRnumber");
            return (Criteria) this;
        }

        public Criteria andDRnumberIn(List<Integer> values) {
            addCriterion("d_rnumber in", values, "dRnumber");
            return (Criteria) this;
        }

        public Criteria andDRnumberNotIn(List<Integer> values) {
            addCriterion("d_rnumber not in", values, "dRnumber");
            return (Criteria) this;
        }

        public Criteria andDRnumberBetween(Integer value1, Integer value2) {
            addCriterion("d_rnumber between", value1, value2, "dRnumber");
            return (Criteria) this;
        }

        public Criteria andDRnumberNotBetween(Integer value1, Integer value2) {
            addCriterion("d_rnumber not between", value1, value2, "dRnumber");
            return (Criteria) this;
        }

        public Criteria andDRealtrainIsNull() {
            addCriterion("d_realtrain is null");
            return (Criteria) this;
        }

        public Criteria andDRealtrainIsNotNull() {
            addCriterion("d_realtrain is not null");
            return (Criteria) this;
        }

        public Criteria andDRealtrainEqualTo(Integer value) {
            addCriterion("d_realtrain =", value, "dRealtrain");
            return (Criteria) this;
        }

        public Criteria andDRealtrainNotEqualTo(Integer value) {
            addCriterion("d_realtrain <>", value, "dRealtrain");
            return (Criteria) this;
        }

        public Criteria andDRealtrainGreaterThan(Integer value) {
            addCriterion("d_realtrain >", value, "dRealtrain");
            return (Criteria) this;
        }

        public Criteria andDRealtrainGreaterThanOrEqualTo(Integer value) {
            addCriterion("d_realtrain >=", value, "dRealtrain");
            return (Criteria) this;
        }

        public Criteria andDRealtrainLessThan(Integer value) {
            addCriterion("d_realtrain <", value, "dRealtrain");
            return (Criteria) this;
        }

        public Criteria andDRealtrainLessThanOrEqualTo(Integer value) {
            addCriterion("d_realtrain <=", value, "dRealtrain");
            return (Criteria) this;
        }

        public Criteria andDRealtrainIn(List<Integer> values) {
            addCriterion("d_realtrain in", values, "dRealtrain");
            return (Criteria) this;
        }

        public Criteria andDRealtrainNotIn(List<Integer> values) {
            addCriterion("d_realtrain not in", values, "dRealtrain");
            return (Criteria) this;
        }

        public Criteria andDRealtrainBetween(Integer value1, Integer value2) {
            addCriterion("d_realtrain between", value1, value2, "dRealtrain");
            return (Criteria) this;
        }

        public Criteria andDRealtrainNotBetween(Integer value1, Integer value2) {
            addCriterion("d_realtrain not between", value1, value2, "dRealtrain");
            return (Criteria) this;
        }

        public Criteria andDWeightIsNull() {
            addCriterion("d_weight is null");
            return (Criteria) this;
        }

        public Criteria andDWeightIsNotNull() {
            addCriterion("d_weight is not null");
            return (Criteria) this;
        }

        public Criteria andDWeightEqualTo(Long value) {
            addCriterion("d_weight =", value, "dWeight");
            return (Criteria) this;
        }

        public Criteria andDWeightNotEqualTo(Long value) {
            addCriterion("d_weight <>", value, "dWeight");
            return (Criteria) this;
        }

        public Criteria andDWeightGreaterThan(Long value) {
            addCriterion("d_weight >", value, "dWeight");
            return (Criteria) this;
        }

        public Criteria andDWeightGreaterThanOrEqualTo(Long value) {
            addCriterion("d_weight >=", value, "dWeight");
            return (Criteria) this;
        }

        public Criteria andDWeightLessThan(Long value) {
            addCriterion("d_weight <", value, "dWeight");
            return (Criteria) this;
        }

        public Criteria andDWeightLessThanOrEqualTo(Long value) {
            addCriterion("d_weight <=", value, "dWeight");
            return (Criteria) this;
        }

        public Criteria andDWeightIn(List<Long> values) {
            addCriterion("d_weight in", values, "dWeight");
            return (Criteria) this;
        }

        public Criteria andDWeightNotIn(List<Long> values) {
            addCriterion("d_weight not in", values, "dWeight");
            return (Criteria) this;
        }

        public Criteria andDWeightBetween(Long value1, Long value2) {
            addCriterion("d_weight between", value1, value2, "dWeight");
            return (Criteria) this;
        }

        public Criteria andDWeightNotBetween(Long value1, Long value2) {
            addCriterion("d_weight not between", value1, value2, "dWeight");
            return (Criteria) this;
        }

        public Criteria andDStateIsNull() {
            addCriterion("d_state is null");
            return (Criteria) this;
        }

        public Criteria andDStateIsNotNull() {
            addCriterion("d_state is not null");
            return (Criteria) this;
        }

        public Criteria andDStateEqualTo(Byte value) {
            addCriterion("d_state =", value, "dState");
            return (Criteria) this;
        }

        public Criteria andDStateNotEqualTo(Byte value) {
            addCriterion("d_state <>", value, "dState");
            return (Criteria) this;
        }

        public Criteria andDStateGreaterThan(Byte value) {
            addCriterion("d_state >", value, "dState");
            return (Criteria) this;
        }

        public Criteria andDStateGreaterThanOrEqualTo(Byte value) {
            addCriterion("d_state >=", value, "dState");
            return (Criteria) this;
        }

        public Criteria andDStateLessThan(Byte value) {
            addCriterion("d_state <", value, "dState");
            return (Criteria) this;
        }

        public Criteria andDStateLessThanOrEqualTo(Byte value) {
            addCriterion("d_state <=", value, "dState");
            return (Criteria) this;
        }

        public Criteria andDStateIn(List<Byte> values) {
            addCriterion("d_state in", values, "dState");
            return (Criteria) this;
        }

        public Criteria andDStateNotIn(List<Byte> values) {
            addCriterion("d_state not in", values, "dState");
            return (Criteria) this;
        }

        public Criteria andDStateBetween(Byte value1, Byte value2) {
            addCriterion("d_state between", value1, value2, "dState");
            return (Criteria) this;
        }

        public Criteria andDStateNotBetween(Byte value1, Byte value2) {
            addCriterion("d_state not between", value1, value2, "dState");
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