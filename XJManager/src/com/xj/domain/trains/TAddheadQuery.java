package com.xj.domain.trains;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class TAddheadQuery {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Integer pageNo = 1;

    protected Integer startRow;

    protected Integer pageSize = 10;

    protected String fields;

    public TAddheadQuery() {
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

        public Criteria andAhIdIsNull() {
            addCriterion("ah_id is null");
            return (Criteria) this;
        }

        public Criteria andAhIdIsNotNull() {
            addCriterion("ah_id is not null");
            return (Criteria) this;
        }

        public Criteria andAhIdEqualTo(String value) {
            addCriterion("ah_id =", value, "ahId");
            return (Criteria) this;
        }

        public Criteria andAhIdNotEqualTo(String value) {
            addCriterion("ah_id <>", value, "ahId");
            return (Criteria) this;
        }

        public Criteria andAhIdGreaterThan(String value) {
            addCriterion("ah_id >", value, "ahId");
            return (Criteria) this;
        }

        public Criteria andAhIdGreaterThanOrEqualTo(String value) {
            addCriterion("ah_id >=", value, "ahId");
            return (Criteria) this;
        }

        public Criteria andAhIdLessThan(String value) {
            addCriterion("ah_id <", value, "ahId");
            return (Criteria) this;
        }

        public Criteria andAhIdLessThanOrEqualTo(String value) {
            addCriterion("ah_id <=", value, "ahId");
            return (Criteria) this;
        }

        public Criteria andAhIdLike(String value) {
            addCriterion("ah_id like", value, "ahId");
            return (Criteria) this;
        }

        public Criteria andAhIdNotLike(String value) {
            addCriterion("ah_id not like", value, "ahId");
            return (Criteria) this;
        }

        public Criteria andAhIdIn(List<String> values) {
            addCriterion("ah_id in", values, "ahId");
            return (Criteria) this;
        }

        public Criteria andAhIdNotIn(List<String> values) {
            addCriterion("ah_id not in", values, "ahId");
            return (Criteria) this;
        }

        public Criteria andAhIdBetween(String value1, String value2) {
            addCriterion("ah_id between", value1, value2, "ahId");
            return (Criteria) this;
        }

        public Criteria andAhIdNotBetween(String value1, String value2) {
            addCriterion("ah_id not between", value1, value2, "ahId");
            return (Criteria) this;
        }

        public Criteria andAhNumIsNull() {
            addCriterion("ah_num is null");
            return (Criteria) this;
        }

        public Criteria andAhNumIsNotNull() {
            addCriterion("ah_num is not null");
            return (Criteria) this;
        }

        public Criteria andAhNumEqualTo(String value) {
            addCriterion("ah_num =", value, "ahNum");
            return (Criteria) this;
        }

        public Criteria andAhNumNotEqualTo(String value) {
            addCriterion("ah_num <>", value, "ahNum");
            return (Criteria) this;
        }

        public Criteria andAhNumGreaterThan(String value) {
            addCriterion("ah_num >", value, "ahNum");
            return (Criteria) this;
        }

        public Criteria andAhNumGreaterThanOrEqualTo(String value) {
            addCriterion("ah_num >=", value, "ahNum");
            return (Criteria) this;
        }

        public Criteria andAhNumLessThan(String value) {
            addCriterion("ah_num <", value, "ahNum");
            return (Criteria) this;
        }

        public Criteria andAhNumLessThanOrEqualTo(String value) {
            addCriterion("ah_num <=", value, "ahNum");
            return (Criteria) this;
        }

        public Criteria andAhNumLike(String value) {
            addCriterion("ah_num like", value, "ahNum");
            return (Criteria) this;
        }

        public Criteria andAhNumNotLike(String value) {
            addCriterion("ah_num not like", value, "ahNum");
            return (Criteria) this;
        }

        public Criteria andAhNumIn(List<String> values) {
            addCriterion("ah_num in", values, "ahNum");
            return (Criteria) this;
        }

        public Criteria andAhNumNotIn(List<String> values) {
            addCriterion("ah_num not in", values, "ahNum");
            return (Criteria) this;
        }

        public Criteria andAhNumBetween(String value1, String value2) {
            addCriterion("ah_num between", value1, value2, "ahNum");
            return (Criteria) this;
        }

        public Criteria andAhNumNotBetween(String value1, String value2) {
            addCriterion("ah_num not between", value1, value2, "ahNum");
            return (Criteria) this;
        }

        public Criteria andAhStartIsNull() {
            addCriterion("ah_start is null");
            return (Criteria) this;
        }

        public Criteria andAhStartIsNotNull() {
            addCriterion("ah_start is not null");
            return (Criteria) this;
        }

        public Criteria andAhStartEqualTo(String value) {
            addCriterion("ah_start =", value, "ahStart");
            return (Criteria) this;
        }

        public Criteria andAhStartNotEqualTo(String value) {
            addCriterion("ah_start <>", value, "ahStart");
            return (Criteria) this;
        }

        public Criteria andAhStartGreaterThan(String value) {
            addCriterion("ah_start >", value, "ahStart");
            return (Criteria) this;
        }

        public Criteria andAhStartGreaterThanOrEqualTo(String value) {
            addCriterion("ah_start >=", value, "ahStart");
            return (Criteria) this;
        }

        public Criteria andAhStartLessThan(String value) {
            addCriterion("ah_start <", value, "ahStart");
            return (Criteria) this;
        }

        public Criteria andAhStartLessThanOrEqualTo(String value) {
            addCriterion("ah_start <=", value, "ahStart");
            return (Criteria) this;
        }

        public Criteria andAhStartLike(String value) {
            addCriterion("ah_start like", value, "ahStart");
            return (Criteria) this;
        }

        public Criteria andAhStartNotLike(String value) {
            addCriterion("ah_start not like", value, "ahStart");
            return (Criteria) this;
        }

        public Criteria andAhStartIn(List<String> values) {
            addCriterion("ah_start in", values, "ahStart");
            return (Criteria) this;
        }

        public Criteria andAhStartNotIn(List<String> values) {
            addCriterion("ah_start not in", values, "ahStart");
            return (Criteria) this;
        }

        public Criteria andAhStartBetween(String value1, String value2) {
            addCriterion("ah_start between", value1, value2, "ahStart");
            return (Criteria) this;
        }

        public Criteria andAhStartNotBetween(String value1, String value2) {
            addCriterion("ah_start not between", value1, value2, "ahStart");
            return (Criteria) this;
        }

        public Criteria andAhSourceIsNull() {
            addCriterion("ah_source is null");
            return (Criteria) this;
        }

        public Criteria andAhSourceIsNotNull() {
            addCriterion("ah_source is not null");
            return (Criteria) this;
        }

        public Criteria andAhSourceEqualTo(String value) {
            addCriterion("ah_source =", value, "ahSource");
            return (Criteria) this;
        }

        public Criteria andAhSourceNotEqualTo(String value) {
            addCriterion("ah_source <>", value, "ahSource");
            return (Criteria) this;
        }

        public Criteria andAhSourceGreaterThan(String value) {
            addCriterion("ah_source >", value, "ahSource");
            return (Criteria) this;
        }

        public Criteria andAhSourceGreaterThanOrEqualTo(String value) {
            addCriterion("ah_source >=", value, "ahSource");
            return (Criteria) this;
        }

        public Criteria andAhSourceLessThan(String value) {
            addCriterion("ah_source <", value, "ahSource");
            return (Criteria) this;
        }

        public Criteria andAhSourceLessThanOrEqualTo(String value) {
            addCriterion("ah_source <=", value, "ahSource");
            return (Criteria) this;
        }

        public Criteria andAhSourceLike(String value) {
            addCriterion("ah_source like", value, "ahSource");
            return (Criteria) this;
        }

        public Criteria andAhSourceNotLike(String value) {
            addCriterion("ah_source not like", value, "ahSource");
            return (Criteria) this;
        }

        public Criteria andAhSourceIn(List<String> values) {
            addCriterion("ah_source in", values, "ahSource");
            return (Criteria) this;
        }

        public Criteria andAhSourceNotIn(List<String> values) {
            addCriterion("ah_source not in", values, "ahSource");
            return (Criteria) this;
        }

        public Criteria andAhSourceBetween(String value1, String value2) {
            addCriterion("ah_source between", value1, value2, "ahSource");
            return (Criteria) this;
        }

        public Criteria andAhSourceNotBetween(String value1, String value2) {
            addCriterion("ah_source not between", value1, value2, "ahSource");
            return (Criteria) this;
        }

        public Criteria andAhTimeIsNull() {
            addCriterion("ah_time is null");
            return (Criteria) this;
        }

        public Criteria andAhTimeIsNotNull() {
            addCriterion("ah_time is not null");
            return (Criteria) this;
        }

        public Criteria andAhTimeEqualTo(Date value) {
            addCriterionForJDBCDate("ah_time =", value, "ahTime");
            return (Criteria) this;
        }

        public Criteria andAhTimeNotEqualTo(Date value) {
            addCriterionForJDBCDate("ah_time <>", value, "ahTime");
            return (Criteria) this;
        }

        public Criteria andAhTimeGreaterThan(Date value) {
            addCriterionForJDBCDate("ah_time >", value, "ahTime");
            return (Criteria) this;
        }

        public Criteria andAhTimeGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("ah_time >=", value, "ahTime");
            return (Criteria) this;
        }

        public Criteria andAhTimeLessThan(Date value) {
            addCriterionForJDBCDate("ah_time <", value, "ahTime");
            return (Criteria) this;
        }

        public Criteria andAhTimeLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("ah_time <=", value, "ahTime");
            return (Criteria) this;
        }

        public Criteria andAhTimeIn(List<Date> values) {
            addCriterionForJDBCDate("ah_time in", values, "ahTime");
            return (Criteria) this;
        }

        public Criteria andAhTimeNotIn(List<Date> values) {
            addCriterionForJDBCDate("ah_time not in", values, "ahTime");
            return (Criteria) this;
        }

        public Criteria andAhTimeBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("ah_time between", value1, value2, "ahTime");
            return (Criteria) this;
        }

        public Criteria andAhTimeNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("ah_time not between", value1, value2, "ahTime");
            return (Criteria) this;
        }

        public Criteria andAhDispatcherIsNull() {
            addCriterion("ah_dispatcher is null");
            return (Criteria) this;
        }

        public Criteria andAhDispatcherIsNotNull() {
            addCriterion("ah_dispatcher is not null");
            return (Criteria) this;
        }

        public Criteria andAhDispatcherEqualTo(String value) {
            addCriterion("ah_dispatcher =", value, "ahDispatcher");
            return (Criteria) this;
        }

        public Criteria andAhDispatcherNotEqualTo(String value) {
            addCriterion("ah_dispatcher <>", value, "ahDispatcher");
            return (Criteria) this;
        }

        public Criteria andAhDispatcherGreaterThan(String value) {
            addCriterion("ah_dispatcher >", value, "ahDispatcher");
            return (Criteria) this;
        }

        public Criteria andAhDispatcherGreaterThanOrEqualTo(String value) {
            addCriterion("ah_dispatcher >=", value, "ahDispatcher");
            return (Criteria) this;
        }

        public Criteria andAhDispatcherLessThan(String value) {
            addCriterion("ah_dispatcher <", value, "ahDispatcher");
            return (Criteria) this;
        }

        public Criteria andAhDispatcherLessThanOrEqualTo(String value) {
            addCriterion("ah_dispatcher <=", value, "ahDispatcher");
            return (Criteria) this;
        }

        public Criteria andAhDispatcherLike(String value) {
            addCriterion("ah_dispatcher like", value, "ahDispatcher");
            return (Criteria) this;
        }

        public Criteria andAhDispatcherNotLike(String value) {
            addCriterion("ah_dispatcher not like", value, "ahDispatcher");
            return (Criteria) this;
        }

        public Criteria andAhDispatcherIn(List<String> values) {
            addCriterion("ah_dispatcher in", values, "ahDispatcher");
            return (Criteria) this;
        }

        public Criteria andAhDispatcherNotIn(List<String> values) {
            addCriterion("ah_dispatcher not in", values, "ahDispatcher");
            return (Criteria) this;
        }

        public Criteria andAhDispatcherBetween(String value1, String value2) {
            addCriterion("ah_dispatcher between", value1, value2, "ahDispatcher");
            return (Criteria) this;
        }

        public Criteria andAhDispatcherNotBetween(String value1, String value2) {
            addCriterion("ah_dispatcher not between", value1, value2, "ahDispatcher");
            return (Criteria) this;
        }

        public Criteria andAhReceivetimeIsNull() {
            addCriterion("ah_receivetime is null");
            return (Criteria) this;
        }

        public Criteria andAhReceivetimeIsNotNull() {
            addCriterion("ah_receivetime is not null");
            return (Criteria) this;
        }

        public Criteria andAhReceivetimeEqualTo(String value) {
            addCriterion("ah_receivetime =", value, "ahReceivetime");
            return (Criteria) this;
        }

        public Criteria andAhReceivetimeNotEqualTo(String value) {
            addCriterion("ah_receivetime <>", value, "ahReceivetime");
            return (Criteria) this;
        }

        public Criteria andAhReceivetimeGreaterThan(String value) {
            addCriterion("ah_receivetime >", value, "ahReceivetime");
            return (Criteria) this;
        }

        public Criteria andAhReceivetimeGreaterThanOrEqualTo(String value) {
            addCriterion("ah_receivetime >=", value, "ahReceivetime");
            return (Criteria) this;
        }

        public Criteria andAhReceivetimeLessThan(String value) {
            addCriterion("ah_receivetime <", value, "ahReceivetime");
            return (Criteria) this;
        }

        public Criteria andAhReceivetimeLessThanOrEqualTo(String value) {
            addCriterion("ah_receivetime <=", value, "ahReceivetime");
            return (Criteria) this;
        }

        public Criteria andAhReceivetimeLike(String value) {
            addCriterion("ah_receivetime like", value, "ahReceivetime");
            return (Criteria) this;
        }

        public Criteria andAhReceivetimeNotLike(String value) {
            addCriterion("ah_receivetime not like", value, "ahReceivetime");
            return (Criteria) this;
        }

        public Criteria andAhReceivetimeIn(List<String> values) {
            addCriterion("ah_receivetime in", values, "ahReceivetime");
            return (Criteria) this;
        }

        public Criteria andAhReceivetimeNotIn(List<String> values) {
            addCriterion("ah_receivetime not in", values, "ahReceivetime");
            return (Criteria) this;
        }

        public Criteria andAhReceivetimeBetween(String value1, String value2) {
            addCriterion("ah_receivetime between", value1, value2, "ahReceivetime");
            return (Criteria) this;
        }

        public Criteria andAhReceivetimeNotBetween(String value1, String value2) {
            addCriterion("ah_receivetime not between", value1, value2, "ahReceivetime");
            return (Criteria) this;
        }

        public Criteria andAhIntimeIsNull() {
            addCriterion("ah_intime is null");
            return (Criteria) this;
        }

        public Criteria andAhIntimeIsNotNull() {
            addCriterion("ah_intime is not null");
            return (Criteria) this;
        }

        public Criteria andAhIntimeEqualTo(String value) {
            addCriterion("ah_intime =", value, "ahIntime");
            return (Criteria) this;
        }

        public Criteria andAhIntimeNotEqualTo(String value) {
            addCriterion("ah_intime <>", value, "ahIntime");
            return (Criteria) this;
        }

        public Criteria andAhIntimeGreaterThan(String value) {
            addCriterion("ah_intime >", value, "ahIntime");
            return (Criteria) this;
        }

        public Criteria andAhIntimeGreaterThanOrEqualTo(String value) {
            addCriterion("ah_intime >=", value, "ahIntime");
            return (Criteria) this;
        }

        public Criteria andAhIntimeLessThan(String value) {
            addCriterion("ah_intime <", value, "ahIntime");
            return (Criteria) this;
        }

        public Criteria andAhIntimeLessThanOrEqualTo(String value) {
            addCriterion("ah_intime <=", value, "ahIntime");
            return (Criteria) this;
        }

        public Criteria andAhIntimeLike(String value) {
            addCriterion("ah_intime like", value, "ahIntime");
            return (Criteria) this;
        }

        public Criteria andAhIntimeNotLike(String value) {
            addCriterion("ah_intime not like", value, "ahIntime");
            return (Criteria) this;
        }

        public Criteria andAhIntimeIn(List<String> values) {
            addCriterion("ah_intime in", values, "ahIntime");
            return (Criteria) this;
        }

        public Criteria andAhIntimeNotIn(List<String> values) {
            addCriterion("ah_intime not in", values, "ahIntime");
            return (Criteria) this;
        }

        public Criteria andAhIntimeBetween(String value1, String value2) {
            addCriterion("ah_intime between", value1, value2, "ahIntime");
            return (Criteria) this;
        }

        public Criteria andAhIntimeNotBetween(String value1, String value2) {
            addCriterion("ah_intime not between", value1, value2, "ahIntime");
            return (Criteria) this;
        }

        public Criteria andAhStarttimeIsNull() {
            addCriterion("ah_starttime is null");
            return (Criteria) this;
        }

        public Criteria andAhStarttimeIsNotNull() {
            addCriterion("ah_starttime is not null");
            return (Criteria) this;
        }

        public Criteria andAhStarttimeEqualTo(String value) {
            addCriterion("ah_starttime =", value, "ahStarttime");
            return (Criteria) this;
        }

        public Criteria andAhStarttimeNotEqualTo(String value) {
            addCriterion("ah_starttime <>", value, "ahStarttime");
            return (Criteria) this;
        }

        public Criteria andAhStarttimeGreaterThan(String value) {
            addCriterion("ah_starttime >", value, "ahStarttime");
            return (Criteria) this;
        }

        public Criteria andAhStarttimeGreaterThanOrEqualTo(String value) {
            addCriterion("ah_starttime >=", value, "ahStarttime");
            return (Criteria) this;
        }

        public Criteria andAhStarttimeLessThan(String value) {
            addCriterion("ah_starttime <", value, "ahStarttime");
            return (Criteria) this;
        }

        public Criteria andAhStarttimeLessThanOrEqualTo(String value) {
            addCriterion("ah_starttime <=", value, "ahStarttime");
            return (Criteria) this;
        }

        public Criteria andAhStarttimeLike(String value) {
            addCriterion("ah_starttime like", value, "ahStarttime");
            return (Criteria) this;
        }

        public Criteria andAhStarttimeNotLike(String value) {
            addCriterion("ah_starttime not like", value, "ahStarttime");
            return (Criteria) this;
        }

        public Criteria andAhStarttimeIn(List<String> values) {
            addCriterion("ah_starttime in", values, "ahStarttime");
            return (Criteria) this;
        }

        public Criteria andAhStarttimeNotIn(List<String> values) {
            addCriterion("ah_starttime not in", values, "ahStarttime");
            return (Criteria) this;
        }

        public Criteria andAhStarttimeBetween(String value1, String value2) {
            addCriterion("ah_starttime between", value1, value2, "ahStarttime");
            return (Criteria) this;
        }

        public Criteria andAhStarttimeNotBetween(String value1, String value2) {
            addCriterion("ah_starttime not between", value1, value2, "ahStarttime");
            return (Criteria) this;
        }

        public Criteria andAhEndtimeIsNull() {
            addCriterion("ah_endtime is null");
            return (Criteria) this;
        }

        public Criteria andAhEndtimeIsNotNull() {
            addCriterion("ah_endtime is not null");
            return (Criteria) this;
        }

        public Criteria andAhEndtimeEqualTo(String value) {
            addCriterion("ah_endtime =", value, "ahEndtime");
            return (Criteria) this;
        }

        public Criteria andAhEndtimeNotEqualTo(String value) {
            addCriterion("ah_endtime <>", value, "ahEndtime");
            return (Criteria) this;
        }

        public Criteria andAhEndtimeGreaterThan(String value) {
            addCriterion("ah_endtime >", value, "ahEndtime");
            return (Criteria) this;
        }

        public Criteria andAhEndtimeGreaterThanOrEqualTo(String value) {
            addCriterion("ah_endtime >=", value, "ahEndtime");
            return (Criteria) this;
        }

        public Criteria andAhEndtimeLessThan(String value) {
            addCriterion("ah_endtime <", value, "ahEndtime");
            return (Criteria) this;
        }

        public Criteria andAhEndtimeLessThanOrEqualTo(String value) {
            addCriterion("ah_endtime <=", value, "ahEndtime");
            return (Criteria) this;
        }

        public Criteria andAhEndtimeLike(String value) {
            addCriterion("ah_endtime like", value, "ahEndtime");
            return (Criteria) this;
        }

        public Criteria andAhEndtimeNotLike(String value) {
            addCriterion("ah_endtime not like", value, "ahEndtime");
            return (Criteria) this;
        }

        public Criteria andAhEndtimeIn(List<String> values) {
            addCriterion("ah_endtime in", values, "ahEndtime");
            return (Criteria) this;
        }

        public Criteria andAhEndtimeNotIn(List<String> values) {
            addCriterion("ah_endtime not in", values, "ahEndtime");
            return (Criteria) this;
        }

        public Criteria andAhEndtimeBetween(String value1, String value2) {
            addCriterion("ah_endtime between", value1, value2, "ahEndtime");
            return (Criteria) this;
        }

        public Criteria andAhEndtimeNotBetween(String value1, String value2) {
            addCriterion("ah_endtime not between", value1, value2, "ahEndtime");
            return (Criteria) this;
        }

        public Criteria andAhInformtimeIsNull() {
            addCriterion("ah_informtime is null");
            return (Criteria) this;
        }

        public Criteria andAhInformtimeIsNotNull() {
            addCriterion("ah_informtime is not null");
            return (Criteria) this;
        }

        public Criteria andAhInformtimeEqualTo(String value) {
            addCriterion("ah_informtime =", value, "ahInformtime");
            return (Criteria) this;
        }

        public Criteria andAhInformtimeNotEqualTo(String value) {
            addCriterion("ah_informtime <>", value, "ahInformtime");
            return (Criteria) this;
        }

        public Criteria andAhInformtimeGreaterThan(String value) {
            addCriterion("ah_informtime >", value, "ahInformtime");
            return (Criteria) this;
        }

        public Criteria andAhInformtimeGreaterThanOrEqualTo(String value) {
            addCriterion("ah_informtime >=", value, "ahInformtime");
            return (Criteria) this;
        }

        public Criteria andAhInformtimeLessThan(String value) {
            addCriterion("ah_informtime <", value, "ahInformtime");
            return (Criteria) this;
        }

        public Criteria andAhInformtimeLessThanOrEqualTo(String value) {
            addCriterion("ah_informtime <=", value, "ahInformtime");
            return (Criteria) this;
        }

        public Criteria andAhInformtimeLike(String value) {
            addCriterion("ah_informtime like", value, "ahInformtime");
            return (Criteria) this;
        }

        public Criteria andAhInformtimeNotLike(String value) {
            addCriterion("ah_informtime not like", value, "ahInformtime");
            return (Criteria) this;
        }

        public Criteria andAhInformtimeIn(List<String> values) {
            addCriterion("ah_informtime in", values, "ahInformtime");
            return (Criteria) this;
        }

        public Criteria andAhInformtimeNotIn(List<String> values) {
            addCriterion("ah_informtime not in", values, "ahInformtime");
            return (Criteria) this;
        }

        public Criteria andAhInformtimeBetween(String value1, String value2) {
            addCriterion("ah_informtime between", value1, value2, "ahInformtime");
            return (Criteria) this;
        }

        public Criteria andAhInformtimeNotBetween(String value1, String value2) {
            addCriterion("ah_informtime not between", value1, value2, "ahInformtime");
            return (Criteria) this;
        }

        public Criteria andAhTrailertimeIsNull() {
            addCriterion("ah_trailertime is null");
            return (Criteria) this;
        }

        public Criteria andAhTrailertimeIsNotNull() {
            addCriterion("ah_trailertime is not null");
            return (Criteria) this;
        }

        public Criteria andAhTrailertimeEqualTo(String value) {
            addCriterion("ah_trailertime =", value, "ahTrailertime");
            return (Criteria) this;
        }

        public Criteria andAhTrailertimeNotEqualTo(String value) {
            addCriterion("ah_trailertime <>", value, "ahTrailertime");
            return (Criteria) this;
        }

        public Criteria andAhTrailertimeGreaterThan(String value) {
            addCriterion("ah_trailertime >", value, "ahTrailertime");
            return (Criteria) this;
        }

        public Criteria andAhTrailertimeGreaterThanOrEqualTo(String value) {
            addCriterion("ah_trailertime >=", value, "ahTrailertime");
            return (Criteria) this;
        }

        public Criteria andAhTrailertimeLessThan(String value) {
            addCriterion("ah_trailertime <", value, "ahTrailertime");
            return (Criteria) this;
        }

        public Criteria andAhTrailertimeLessThanOrEqualTo(String value) {
            addCriterion("ah_trailertime <=", value, "ahTrailertime");
            return (Criteria) this;
        }

        public Criteria andAhTrailertimeLike(String value) {
            addCriterion("ah_trailertime like", value, "ahTrailertime");
            return (Criteria) this;
        }

        public Criteria andAhTrailertimeNotLike(String value) {
            addCriterion("ah_trailertime not like", value, "ahTrailertime");
            return (Criteria) this;
        }

        public Criteria andAhTrailertimeIn(List<String> values) {
            addCriterion("ah_trailertime in", values, "ahTrailertime");
            return (Criteria) this;
        }

        public Criteria andAhTrailertimeNotIn(List<String> values) {
            addCriterion("ah_trailertime not in", values, "ahTrailertime");
            return (Criteria) this;
        }

        public Criteria andAhTrailertimeBetween(String value1, String value2) {
            addCriterion("ah_trailertime between", value1, value2, "ahTrailertime");
            return (Criteria) this;
        }

        public Criteria andAhTrailertimeNotBetween(String value1, String value2) {
            addCriterion("ah_trailertime not between", value1, value2, "ahTrailertime");
            return (Criteria) this;
        }

        public Criteria andAhWagonnumIsNull() {
            addCriterion("ah_wagonnum is null");
            return (Criteria) this;
        }

        public Criteria andAhWagonnumIsNotNull() {
            addCriterion("ah_wagonnum is not null");
            return (Criteria) this;
        }

        public Criteria andAhWagonnumEqualTo(Integer value) {
            addCriterion("ah_wagonnum =", value, "ahWagonnum");
            return (Criteria) this;
        }

        public Criteria andAhWagonnumNotEqualTo(Integer value) {
            addCriterion("ah_wagonnum <>", value, "ahWagonnum");
            return (Criteria) this;
        }

        public Criteria andAhWagonnumGreaterThan(Integer value) {
            addCriterion("ah_wagonnum >", value, "ahWagonnum");
            return (Criteria) this;
        }

        public Criteria andAhWagonnumGreaterThanOrEqualTo(Integer value) {
            addCriterion("ah_wagonnum >=", value, "ahWagonnum");
            return (Criteria) this;
        }

        public Criteria andAhWagonnumLessThan(Integer value) {
            addCriterion("ah_wagonnum <", value, "ahWagonnum");
            return (Criteria) this;
        }

        public Criteria andAhWagonnumLessThanOrEqualTo(Integer value) {
            addCriterion("ah_wagonnum <=", value, "ahWagonnum");
            return (Criteria) this;
        }

        public Criteria andAhWagonnumIn(List<Integer> values) {
            addCriterion("ah_wagonnum in", values, "ahWagonnum");
            return (Criteria) this;
        }

        public Criteria andAhWagonnumNotIn(List<Integer> values) {
            addCriterion("ah_wagonnum not in", values, "ahWagonnum");
            return (Criteria) this;
        }

        public Criteria andAhWagonnumBetween(Integer value1, Integer value2) {
            addCriterion("ah_wagonnum between", value1, value2, "ahWagonnum");
            return (Criteria) this;
        }

        public Criteria andAhWagonnumNotBetween(Integer value1, Integer value2) {
            addCriterion("ah_wagonnum not between", value1, value2, "ahWagonnum");
            return (Criteria) this;
        }

        public Criteria andAhHeadnumIsNull() {
            addCriterion("ah_headnum is null");
            return (Criteria) this;
        }

        public Criteria andAhHeadnumIsNotNull() {
            addCriterion("ah_headnum is not null");
            return (Criteria) this;
        }

        public Criteria andAhHeadnumEqualTo(String value) {
            addCriterion("ah_headnum =", value, "ahHeadnum");
            return (Criteria) this;
        }

        public Criteria andAhHeadnumNotEqualTo(String value) {
            addCriterion("ah_headnum <>", value, "ahHeadnum");
            return (Criteria) this;
        }

        public Criteria andAhHeadnumGreaterThan(String value) {
            addCriterion("ah_headnum >", value, "ahHeadnum");
            return (Criteria) this;
        }

        public Criteria andAhHeadnumGreaterThanOrEqualTo(String value) {
            addCriterion("ah_headnum >=", value, "ahHeadnum");
            return (Criteria) this;
        }

        public Criteria andAhHeadnumLessThan(String value) {
            addCriterion("ah_headnum <", value, "ahHeadnum");
            return (Criteria) this;
        }

        public Criteria andAhHeadnumLessThanOrEqualTo(String value) {
            addCriterion("ah_headnum <=", value, "ahHeadnum");
            return (Criteria) this;
        }

        public Criteria andAhHeadnumLike(String value) {
            addCriterion("ah_headnum like", value, "ahHeadnum");
            return (Criteria) this;
        }

        public Criteria andAhHeadnumNotLike(String value) {
            addCriterion("ah_headnum not like", value, "ahHeadnum");
            return (Criteria) this;
        }

        public Criteria andAhHeadnumIn(List<String> values) {
            addCriterion("ah_headnum in", values, "ahHeadnum");
            return (Criteria) this;
        }

        public Criteria andAhHeadnumNotIn(List<String> values) {
            addCriterion("ah_headnum not in", values, "ahHeadnum");
            return (Criteria) this;
        }

        public Criteria andAhHeadnumBetween(String value1, String value2) {
            addCriterion("ah_headnum between", value1, value2, "ahHeadnum");
            return (Criteria) this;
        }

        public Criteria andAhHeadnumNotBetween(String value1, String value2) {
            addCriterion("ah_headnum not between", value1, value2, "ahHeadnum");
            return (Criteria) this;
        }

        public Criteria andAhTruckuserIsNull() {
            addCriterion("ah_truckuser is null");
            return (Criteria) this;
        }

        public Criteria andAhTruckuserIsNotNull() {
            addCriterion("ah_truckuser is not null");
            return (Criteria) this;
        }

        public Criteria andAhTruckuserEqualTo(String value) {
            addCriterion("ah_truckuser =", value, "ahTruckuser");
            return (Criteria) this;
        }

        public Criteria andAhTruckuserNotEqualTo(String value) {
            addCriterion("ah_truckuser <>", value, "ahTruckuser");
            return (Criteria) this;
        }

        public Criteria andAhTruckuserGreaterThan(String value) {
            addCriterion("ah_truckuser >", value, "ahTruckuser");
            return (Criteria) this;
        }

        public Criteria andAhTruckuserGreaterThanOrEqualTo(String value) {
            addCriterion("ah_truckuser >=", value, "ahTruckuser");
            return (Criteria) this;
        }

        public Criteria andAhTruckuserLessThan(String value) {
            addCriterion("ah_truckuser <", value, "ahTruckuser");
            return (Criteria) this;
        }

        public Criteria andAhTruckuserLessThanOrEqualTo(String value) {
            addCriterion("ah_truckuser <=", value, "ahTruckuser");
            return (Criteria) this;
        }

        public Criteria andAhTruckuserLike(String value) {
            addCriterion("ah_truckuser like", value, "ahTruckuser");
            return (Criteria) this;
        }

        public Criteria andAhTruckuserNotLike(String value) {
            addCriterion("ah_truckuser not like", value, "ahTruckuser");
            return (Criteria) this;
        }

        public Criteria andAhTruckuserIn(List<String> values) {
            addCriterion("ah_truckuser in", values, "ahTruckuser");
            return (Criteria) this;
        }

        public Criteria andAhTruckuserNotIn(List<String> values) {
            addCriterion("ah_truckuser not in", values, "ahTruckuser");
            return (Criteria) this;
        }

        public Criteria andAhTruckuserBetween(String value1, String value2) {
            addCriterion("ah_truckuser between", value1, value2, "ahTruckuser");
            return (Criteria) this;
        }

        public Criteria andAhTruckuserNotBetween(String value1, String value2) {
            addCriterion("ah_truckuser not between", value1, value2, "ahTruckuser");
            return (Criteria) this;
        }

        public Criteria andAhQualityIsNull() {
            addCriterion("ah_quality is null");
            return (Criteria) this;
        }

        public Criteria andAhQualityIsNotNull() {
            addCriterion("ah_quality is not null");
            return (Criteria) this;
        }

        public Criteria andAhQualityEqualTo(String value) {
            addCriterion("ah_quality =", value, "ahQuality");
            return (Criteria) this;
        }

        public Criteria andAhQualityNotEqualTo(String value) {
            addCriterion("ah_quality <>", value, "ahQuality");
            return (Criteria) this;
        }

        public Criteria andAhQualityGreaterThan(String value) {
            addCriterion("ah_quality >", value, "ahQuality");
            return (Criteria) this;
        }

        public Criteria andAhQualityGreaterThanOrEqualTo(String value) {
            addCriterion("ah_quality >=", value, "ahQuality");
            return (Criteria) this;
        }

        public Criteria andAhQualityLessThan(String value) {
            addCriterion("ah_quality <", value, "ahQuality");
            return (Criteria) this;
        }

        public Criteria andAhQualityLessThanOrEqualTo(String value) {
            addCriterion("ah_quality <=", value, "ahQuality");
            return (Criteria) this;
        }

        public Criteria andAhQualityLike(String value) {
            addCriterion("ah_quality like", value, "ahQuality");
            return (Criteria) this;
        }

        public Criteria andAhQualityNotLike(String value) {
            addCriterion("ah_quality not like", value, "ahQuality");
            return (Criteria) this;
        }

        public Criteria andAhQualityIn(List<String> values) {
            addCriterion("ah_quality in", values, "ahQuality");
            return (Criteria) this;
        }

        public Criteria andAhQualityNotIn(List<String> values) {
            addCriterion("ah_quality not in", values, "ahQuality");
            return (Criteria) this;
        }

        public Criteria andAhQualityBetween(String value1, String value2) {
            addCriterion("ah_quality between", value1, value2, "ahQuality");
            return (Criteria) this;
        }

        public Criteria andAhQualityNotBetween(String value1, String value2) {
            addCriterion("ah_quality not between", value1, value2, "ahQuality");
            return (Criteria) this;
        }

        public Criteria andAhRoaduserIsNull() {
            addCriterion("ah_roaduser is null");
            return (Criteria) this;
        }

        public Criteria andAhRoaduserIsNotNull() {
            addCriterion("ah_roaduser is not null");
            return (Criteria) this;
        }

        public Criteria andAhRoaduserEqualTo(String value) {
            addCriterion("ah_roaduser =", value, "ahRoaduser");
            return (Criteria) this;
        }

        public Criteria andAhRoaduserNotEqualTo(String value) {
            addCriterion("ah_roaduser <>", value, "ahRoaduser");
            return (Criteria) this;
        }

        public Criteria andAhRoaduserGreaterThan(String value) {
            addCriterion("ah_roaduser >", value, "ahRoaduser");
            return (Criteria) this;
        }

        public Criteria andAhRoaduserGreaterThanOrEqualTo(String value) {
            addCriterion("ah_roaduser >=", value, "ahRoaduser");
            return (Criteria) this;
        }

        public Criteria andAhRoaduserLessThan(String value) {
            addCriterion("ah_roaduser <", value, "ahRoaduser");
            return (Criteria) this;
        }

        public Criteria andAhRoaduserLessThanOrEqualTo(String value) {
            addCriterion("ah_roaduser <=", value, "ahRoaduser");
            return (Criteria) this;
        }

        public Criteria andAhRoaduserLike(String value) {
            addCriterion("ah_roaduser like", value, "ahRoaduser");
            return (Criteria) this;
        }

        public Criteria andAhRoaduserNotLike(String value) {
            addCriterion("ah_roaduser not like", value, "ahRoaduser");
            return (Criteria) this;
        }

        public Criteria andAhRoaduserIn(List<String> values) {
            addCriterion("ah_roaduser in", values, "ahRoaduser");
            return (Criteria) this;
        }

        public Criteria andAhRoaduserNotIn(List<String> values) {
            addCriterion("ah_roaduser not in", values, "ahRoaduser");
            return (Criteria) this;
        }

        public Criteria andAhRoaduserBetween(String value1, String value2) {
            addCriterion("ah_roaduser between", value1, value2, "ahRoaduser");
            return (Criteria) this;
        }

        public Criteria andAhRoaduserNotBetween(String value1, String value2) {
            addCriterion("ah_roaduser not between", value1, value2, "ahRoaduser");
            return (Criteria) this;
        }

        public Criteria andAhSalesIsNull() {
            addCriterion("ah_sales is null");
            return (Criteria) this;
        }

        public Criteria andAhSalesIsNotNull() {
            addCriterion("ah_sales is not null");
            return (Criteria) this;
        }

        public Criteria andAhSalesEqualTo(String value) {
            addCriterion("ah_sales =", value, "ahSales");
            return (Criteria) this;
        }

        public Criteria andAhSalesNotEqualTo(String value) {
            addCriterion("ah_sales <>", value, "ahSales");
            return (Criteria) this;
        }

        public Criteria andAhSalesGreaterThan(String value) {
            addCriterion("ah_sales >", value, "ahSales");
            return (Criteria) this;
        }

        public Criteria andAhSalesGreaterThanOrEqualTo(String value) {
            addCriterion("ah_sales >=", value, "ahSales");
            return (Criteria) this;
        }

        public Criteria andAhSalesLessThan(String value) {
            addCriterion("ah_sales <", value, "ahSales");
            return (Criteria) this;
        }

        public Criteria andAhSalesLessThanOrEqualTo(String value) {
            addCriterion("ah_sales <=", value, "ahSales");
            return (Criteria) this;
        }

        public Criteria andAhSalesLike(String value) {
            addCriterion("ah_sales like", value, "ahSales");
            return (Criteria) this;
        }

        public Criteria andAhSalesNotLike(String value) {
            addCriterion("ah_sales not like", value, "ahSales");
            return (Criteria) this;
        }

        public Criteria andAhSalesIn(List<String> values) {
            addCriterion("ah_sales in", values, "ahSales");
            return (Criteria) this;
        }

        public Criteria andAhSalesNotIn(List<String> values) {
            addCriterion("ah_sales not in", values, "ahSales");
            return (Criteria) this;
        }

        public Criteria andAhSalesBetween(String value1, String value2) {
            addCriterion("ah_sales between", value1, value2, "ahSales");
            return (Criteria) this;
        }

        public Criteria andAhSalesNotBetween(String value1, String value2) {
            addCriterion("ah_sales not between", value1, value2, "ahSales");
            return (Criteria) this;
        }

        public Criteria andAhUserIsNull() {
            addCriterion("ah_user is null");
            return (Criteria) this;
        }

        public Criteria andAhUserIsNotNull() {
            addCriterion("ah_user is not null");
            return (Criteria) this;
        }

        public Criteria andAhUserEqualTo(String value) {
            addCriterion("ah_user =", value, "ahUser");
            return (Criteria) this;
        }

        public Criteria andAhUserNotEqualTo(String value) {
            addCriterion("ah_user <>", value, "ahUser");
            return (Criteria) this;
        }

        public Criteria andAhUserGreaterThan(String value) {
            addCriterion("ah_user >", value, "ahUser");
            return (Criteria) this;
        }

        public Criteria andAhUserGreaterThanOrEqualTo(String value) {
            addCriterion("ah_user >=", value, "ahUser");
            return (Criteria) this;
        }

        public Criteria andAhUserLessThan(String value) {
            addCriterion("ah_user <", value, "ahUser");
            return (Criteria) this;
        }

        public Criteria andAhUserLessThanOrEqualTo(String value) {
            addCriterion("ah_user <=", value, "ahUser");
            return (Criteria) this;
        }

        public Criteria andAhUserLike(String value) {
            addCriterion("ah_user like", value, "ahUser");
            return (Criteria) this;
        }

        public Criteria andAhUserNotLike(String value) {
            addCriterion("ah_user not like", value, "ahUser");
            return (Criteria) this;
        }

        public Criteria andAhUserIn(List<String> values) {
            addCriterion("ah_user in", values, "ahUser");
            return (Criteria) this;
        }

        public Criteria andAhUserNotIn(List<String> values) {
            addCriterion("ah_user not in", values, "ahUser");
            return (Criteria) this;
        }

        public Criteria andAhUserBetween(String value1, String value2) {
            addCriterion("ah_user between", value1, value2, "ahUser");
            return (Criteria) this;
        }

        public Criteria andAhUserNotBetween(String value1, String value2) {
            addCriterion("ah_user not between", value1, value2, "ahUser");
            return (Criteria) this;
        }

        public Criteria andAhDepartmentIsNull() {
            addCriterion("ah_department is null");
            return (Criteria) this;
        }

        public Criteria andAhDepartmentIsNotNull() {
            addCriterion("ah_department is not null");
            return (Criteria) this;
        }

        public Criteria andAhDepartmentEqualTo(String value) {
            addCriterion("ah_department =", value, "ahDepartment");
            return (Criteria) this;
        }

        public Criteria andAhDepartmentNotEqualTo(String value) {
            addCriterion("ah_department <>", value, "ahDepartment");
            return (Criteria) this;
        }

        public Criteria andAhDepartmentGreaterThan(String value) {
            addCriterion("ah_department >", value, "ahDepartment");
            return (Criteria) this;
        }

        public Criteria andAhDepartmentGreaterThanOrEqualTo(String value) {
            addCriterion("ah_department >=", value, "ahDepartment");
            return (Criteria) this;
        }

        public Criteria andAhDepartmentLessThan(String value) {
            addCriterion("ah_department <", value, "ahDepartment");
            return (Criteria) this;
        }

        public Criteria andAhDepartmentLessThanOrEqualTo(String value) {
            addCriterion("ah_department <=", value, "ahDepartment");
            return (Criteria) this;
        }

        public Criteria andAhDepartmentLike(String value) {
            addCriterion("ah_department like", value, "ahDepartment");
            return (Criteria) this;
        }

        public Criteria andAhDepartmentNotLike(String value) {
            addCriterion("ah_department not like", value, "ahDepartment");
            return (Criteria) this;
        }

        public Criteria andAhDepartmentIn(List<String> values) {
            addCriterion("ah_department in", values, "ahDepartment");
            return (Criteria) this;
        }

        public Criteria andAhDepartmentNotIn(List<String> values) {
            addCriterion("ah_department not in", values, "ahDepartment");
            return (Criteria) this;
        }

        public Criteria andAhDepartmentBetween(String value1, String value2) {
            addCriterion("ah_department between", value1, value2, "ahDepartment");
            return (Criteria) this;
        }

        public Criteria andAhDepartmentNotBetween(String value1, String value2) {
            addCriterion("ah_department not between", value1, value2, "ahDepartment");
            return (Criteria) this;
        }

        public Criteria andAhSettimeIsNull() {
            addCriterion("ah_settime is null");
            return (Criteria) this;
        }

        public Criteria andAhSettimeIsNotNull() {
            addCriterion("ah_settime is not null");
            return (Criteria) this;
        }

        public Criteria andAhSettimeEqualTo(Date value) {
            addCriterionForJDBCDate("ah_settime =", value, "ahSettime");
            return (Criteria) this;
        }

        public Criteria andAhSettimeNotEqualTo(Date value) {
            addCriterionForJDBCDate("ah_settime <>", value, "ahSettime");
            return (Criteria) this;
        }

        public Criteria andAhSettimeGreaterThan(Date value) {
            addCriterionForJDBCDate("ah_settime >", value, "ahSettime");
            return (Criteria) this;
        }

        public Criteria andAhSettimeGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("ah_settime >=", value, "ahSettime");
            return (Criteria) this;
        }

        public Criteria andAhSettimeLessThan(Date value) {
            addCriterionForJDBCDate("ah_settime <", value, "ahSettime");
            return (Criteria) this;
        }

        public Criteria andAhSettimeLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("ah_settime <=", value, "ahSettime");
            return (Criteria) this;
        }

        public Criteria andAhSettimeIn(List<Date> values) {
            addCriterionForJDBCDate("ah_settime in", values, "ahSettime");
            return (Criteria) this;
        }

        public Criteria andAhSettimeNotIn(List<Date> values) {
            addCriterionForJDBCDate("ah_settime not in", values, "ahSettime");
            return (Criteria) this;
        }

        public Criteria andAhSettimeBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("ah_settime between", value1, value2, "ahSettime");
            return (Criteria) this;
        }

        public Criteria andAhSettimeNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("ah_settime not between", value1, value2, "ahSettime");
            return (Criteria) this;
        }

        public Criteria andAhWeightIsNull() {
            addCriterion("ah_weight is null");
            return (Criteria) this;
        }

        public Criteria andAhWeightIsNotNull() {
            addCriterion("ah_weight is not null");
            return (Criteria) this;
        }

        public Criteria andAhWeightEqualTo(Long value) {
            addCriterion("ah_weight =", value, "ahWeight");
            return (Criteria) this;
        }

        public Criteria andAhWeightNotEqualTo(Long value) {
            addCriterion("ah_weight <>", value, "ahWeight");
            return (Criteria) this;
        }

        public Criteria andAhWeightGreaterThan(Long value) {
            addCriterion("ah_weight >", value, "ahWeight");
            return (Criteria) this;
        }

        public Criteria andAhWeightGreaterThanOrEqualTo(Long value) {
            addCriterion("ah_weight >=", value, "ahWeight");
            return (Criteria) this;
        }

        public Criteria andAhWeightLessThan(Long value) {
            addCriterion("ah_weight <", value, "ahWeight");
            return (Criteria) this;
        }

        public Criteria andAhWeightLessThanOrEqualTo(Long value) {
            addCriterion("ah_weight <=", value, "ahWeight");
            return (Criteria) this;
        }

        public Criteria andAhWeightIn(List<Long> values) {
            addCriterion("ah_weight in", values, "ahWeight");
            return (Criteria) this;
        }

        public Criteria andAhWeightNotIn(List<Long> values) {
            addCriterion("ah_weight not in", values, "ahWeight");
            return (Criteria) this;
        }

        public Criteria andAhWeightBetween(Long value1, Long value2) {
            addCriterion("ah_weight between", value1, value2, "ahWeight");
            return (Criteria) this;
        }

        public Criteria andAhWeightNotBetween(Long value1, Long value2) {
            addCriterion("ah_weight not between", value1, value2, "ahWeight");
            return (Criteria) this;
        }

        public Criteria andAhAssayIsNull() {
            addCriterion("ah_assay is null");
            return (Criteria) this;
        }

        public Criteria andAhAssayIsNotNull() {
            addCriterion("ah_assay is not null");
            return (Criteria) this;
        }

        public Criteria andAhAssayEqualTo(Long value) {
            addCriterion("ah_assay =", value, "ahAssay");
            return (Criteria) this;
        }

        public Criteria andAhAssayNotEqualTo(Long value) {
            addCriterion("ah_assay <>", value, "ahAssay");
            return (Criteria) this;
        }

        public Criteria andAhAssayGreaterThan(Long value) {
            addCriterion("ah_assay >", value, "ahAssay");
            return (Criteria) this;
        }

        public Criteria andAhAssayGreaterThanOrEqualTo(Long value) {
            addCriterion("ah_assay >=", value, "ahAssay");
            return (Criteria) this;
        }

        public Criteria andAhAssayLessThan(Long value) {
            addCriterion("ah_assay <", value, "ahAssay");
            return (Criteria) this;
        }

        public Criteria andAhAssayLessThanOrEqualTo(Long value) {
            addCriterion("ah_assay <=", value, "ahAssay");
            return (Criteria) this;
        }

        public Criteria andAhAssayIn(List<Long> values) {
            addCriterion("ah_assay in", values, "ahAssay");
            return (Criteria) this;
        }

        public Criteria andAhAssayNotIn(List<Long> values) {
            addCriterion("ah_assay not in", values, "ahAssay");
            return (Criteria) this;
        }

        public Criteria andAhAssayBetween(Long value1, Long value2) {
            addCriterion("ah_assay between", value1, value2, "ahAssay");
            return (Criteria) this;
        }

        public Criteria andAhAssayNotBetween(Long value1, Long value2) {
            addCriterion("ah_assay not between", value1, value2, "ahAssay");
            return (Criteria) this;
        }

        public Criteria andAhPredictIsNull() {
            addCriterion("ah_predict is null");
            return (Criteria) this;
        }

        public Criteria andAhPredictIsNotNull() {
            addCriterion("ah_predict is not null");
            return (Criteria) this;
        }

        public Criteria andAhPredictEqualTo(Long value) {
            addCriterion("ah_predict =", value, "ahPredict");
            return (Criteria) this;
        }

        public Criteria andAhPredictNotEqualTo(Long value) {
            addCriterion("ah_predict <>", value, "ahPredict");
            return (Criteria) this;
        }

        public Criteria andAhPredictGreaterThan(Long value) {
            addCriterion("ah_predict >", value, "ahPredict");
            return (Criteria) this;
        }

        public Criteria andAhPredictGreaterThanOrEqualTo(Long value) {
            addCriterion("ah_predict >=", value, "ahPredict");
            return (Criteria) this;
        }

        public Criteria andAhPredictLessThan(Long value) {
            addCriterion("ah_predict <", value, "ahPredict");
            return (Criteria) this;
        }

        public Criteria andAhPredictLessThanOrEqualTo(Long value) {
            addCriterion("ah_predict <=", value, "ahPredict");
            return (Criteria) this;
        }

        public Criteria andAhPredictIn(List<Long> values) {
            addCriterion("ah_predict in", values, "ahPredict");
            return (Criteria) this;
        }

        public Criteria andAhPredictNotIn(List<Long> values) {
            addCriterion("ah_predict not in", values, "ahPredict");
            return (Criteria) this;
        }

        public Criteria andAhPredictBetween(Long value1, Long value2) {
            addCriterion("ah_predict between", value1, value2, "ahPredict");
            return (Criteria) this;
        }

        public Criteria andAhPredictNotBetween(Long value1, Long value2) {
            addCriterion("ah_predict not between", value1, value2, "ahPredict");
            return (Criteria) this;
        }

        public Criteria andAhIsdepartIsNull() {
            addCriterion("ah_isdepart is null");
            return (Criteria) this;
        }

        public Criteria andAhIsdepartIsNotNull() {
            addCriterion("ah_isdepart is not null");
            return (Criteria) this;
        }

        public Criteria andAhIsdepartEqualTo(Byte value) {
            addCriterion("ah_isdepart =", value, "ahIsdepart");
            return (Criteria) this;
        }

        public Criteria andAhIsdepartNotEqualTo(Byte value) {
            addCriterion("ah_isdepart <>", value, "ahIsdepart");
            return (Criteria) this;
        }

        public Criteria andAhIsdepartGreaterThan(Byte value) {
            addCriterion("ah_isdepart >", value, "ahIsdepart");
            return (Criteria) this;
        }

        public Criteria andAhIsdepartGreaterThanOrEqualTo(Byte value) {
            addCriterion("ah_isdepart >=", value, "ahIsdepart");
            return (Criteria) this;
        }

        public Criteria andAhIsdepartLessThan(Byte value) {
            addCriterion("ah_isdepart <", value, "ahIsdepart");
            return (Criteria) this;
        }

        public Criteria andAhIsdepartLessThanOrEqualTo(Byte value) {
            addCriterion("ah_isdepart <=", value, "ahIsdepart");
            return (Criteria) this;
        }

        public Criteria andAhIsdepartIn(List<Byte> values) {
            addCriterion("ah_isdepart in", values, "ahIsdepart");
            return (Criteria) this;
        }

        public Criteria andAhIsdepartNotIn(List<Byte> values) {
            addCriterion("ah_isdepart not in", values, "ahIsdepart");
            return (Criteria) this;
        }

        public Criteria andAhIsdepartBetween(Byte value1, Byte value2) {
            addCriterion("ah_isdepart between", value1, value2, "ahIsdepart");
            return (Criteria) this;
        }

        public Criteria andAhIsdepartNotBetween(Byte value1, Byte value2) {
            addCriterion("ah_isdepart not between", value1, value2, "ahIsdepart");
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