package com.xj.domain.land;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class LWeightQuery {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Integer pageNo = 1;

    protected Integer startRow;

    protected Integer pageSize = 10;

    protected String fields;

    public LWeightQuery() {
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

        public Criteria andEIdIsNull() {
            addCriterion("e_id is null");
            return (Criteria) this;
        }

        public Criteria andEIdIsNotNull() {
            addCriterion("e_id is not null");
            return (Criteria) this;
        }

        public Criteria andEIdEqualTo(Integer value) {
            addCriterion("e_id =", value, "eId");
            return (Criteria) this;
        }

        public Criteria andEIdNotEqualTo(Integer value) {
            addCriterion("e_id <>", value, "eId");
            return (Criteria) this;
        }

        public Criteria andEIdGreaterThan(Integer value) {
            addCriterion("e_id >", value, "eId");
            return (Criteria) this;
        }

        public Criteria andEIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("e_id >=", value, "eId");
            return (Criteria) this;
        }

        public Criteria andEIdLessThan(Integer value) {
            addCriterion("e_id <", value, "eId");
            return (Criteria) this;
        }

        public Criteria andEIdLessThanOrEqualTo(Integer value) {
            addCriterion("e_id <=", value, "eId");
            return (Criteria) this;
        }

        public Criteria andEIdIn(List<Integer> values) {
            addCriterion("e_id in", values, "eId");
            return (Criteria) this;
        }

        public Criteria andEIdNotIn(List<Integer> values) {
            addCriterion("e_id not in", values, "eId");
            return (Criteria) this;
        }

        public Criteria andEIdBetween(Integer value1, Integer value2) {
            addCriterion("e_id between", value1, value2, "eId");
            return (Criteria) this;
        }

        public Criteria andEIdNotBetween(Integer value1, Integer value2) {
            addCriterion("e_id not between", value1, value2, "eId");
            return (Criteria) this;
        }

        public Criteria andEApplyidIsNull() {
            addCriterion("e_applyid is null");
            return (Criteria) this;
        }

        public Criteria andEApplyidIsNotNull() {
            addCriterion("e_applyid is not null");
            return (Criteria) this;
        }

        public Criteria andEApplyidEqualTo(Integer value) {
            addCriterion("e_applyid =", value, "eApplyid");
            return (Criteria) this;
        }

        public Criteria andEApplyidNotEqualTo(Integer value) {
            addCriterion("e_applyid <>", value, "eApplyid");
            return (Criteria) this;
        }

        public Criteria andEApplyidGreaterThan(Integer value) {
            addCriterion("e_applyid >", value, "eApplyid");
            return (Criteria) this;
        }

        public Criteria andEApplyidGreaterThanOrEqualTo(Integer value) {
            addCriterion("e_applyid >=", value, "eApplyid");
            return (Criteria) this;
        }

        public Criteria andEApplyidLessThan(Integer value) {
            addCriterion("e_applyid <", value, "eApplyid");
            return (Criteria) this;
        }

        public Criteria andEApplyidLessThanOrEqualTo(Integer value) {
            addCriterion("e_applyid <=", value, "eApplyid");
            return (Criteria) this;
        }

        public Criteria andEApplyidIn(List<Integer> values) {
            addCriterion("e_applyid in", values, "eApplyid");
            return (Criteria) this;
        }

        public Criteria andEApplyidNotIn(List<Integer> values) {
            addCriterion("e_applyid not in", values, "eApplyid");
            return (Criteria) this;
        }

        public Criteria andEApplyidBetween(Integer value1, Integer value2) {
            addCriterion("e_applyid between", value1, value2, "eApplyid");
            return (Criteria) this;
        }

        public Criteria andEApplyidNotBetween(Integer value1, Integer value2) {
            addCriterion("e_applyid not between", value1, value2, "eApplyid");
            return (Criteria) this;
        }

        public Criteria andEEmptydateIsNull() {
            addCriterion("e_emptydate is null");
            return (Criteria) this;
        }

        public Criteria andEEmptydateIsNotNull() {
            addCriterion("e_emptydate is not null");
            return (Criteria) this;
        }

        public Criteria andEEmptydateEqualTo(Date value) {
            addCriterionForJDBCDate("e_emptydate =", value, "eEmptydate");
            return (Criteria) this;
        }

        public Criteria andEEmptydateNotEqualTo(Date value) {
            addCriterionForJDBCDate("e_emptydate <>", value, "eEmptydate");
            return (Criteria) this;
        }

        public Criteria andEEmptydateGreaterThan(Date value) {
            addCriterionForJDBCDate("e_emptydate >", value, "eEmptydate");
            return (Criteria) this;
        }

        public Criteria andEEmptydateGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("e_emptydate >=", value, "eEmptydate");
            return (Criteria) this;
        }

        public Criteria andEEmptydateLessThan(Date value) {
            addCriterionForJDBCDate("e_emptydate <", value, "eEmptydate");
            return (Criteria) this;
        }

        public Criteria andEEmptydateLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("e_emptydate <=", value, "eEmptydate");
            return (Criteria) this;
        }

        public Criteria andEEmptydateIn(List<Date> values) {
            addCriterionForJDBCDate("e_emptydate in", values, "eEmptydate");
            return (Criteria) this;
        }

        public Criteria andEEmptydateNotIn(List<Date> values) {
            addCriterionForJDBCDate("e_emptydate not in", values, "eEmptydate");
            return (Criteria) this;
        }

        public Criteria andEEmptydateBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("e_emptydate between", value1, value2, "eEmptydate");
            return (Criteria) this;
        }

        public Criteria andEEmptydateNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("e_emptydate not between", value1, value2, "eEmptydate");
            return (Criteria) this;
        }

        public Criteria andEFulldateIsNull() {
            addCriterion("e_fulldate is null");
            return (Criteria) this;
        }

        public Criteria andEFulldateIsNotNull() {
            addCriterion("e_fulldate is not null");
            return (Criteria) this;
        }

        public Criteria andEFulldateEqualTo(Date value) {
            addCriterionForJDBCDate("e_fulldate =", value, "eFulldate");
            return (Criteria) this;
        }

        public Criteria andEFulldateNotEqualTo(Date value) {
            addCriterionForJDBCDate("e_fulldate <>", value, "eFulldate");
            return (Criteria) this;
        }

        public Criteria andEFulldateGreaterThan(Date value) {
            addCriterionForJDBCDate("e_fulldate >", value, "eFulldate");
            return (Criteria) this;
        }

        public Criteria andEFulldateGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("e_fulldate >=", value, "eFulldate");
            return (Criteria) this;
        }

        public Criteria andEFulldateLessThan(Date value) {
            addCriterionForJDBCDate("e_fulldate <", value, "eFulldate");
            return (Criteria) this;
        }

        public Criteria andEFulldateLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("e_fulldate <=", value, "eFulldate");
            return (Criteria) this;
        }

        public Criteria andEFulldateIn(List<Date> values) {
            addCriterionForJDBCDate("e_fulldate in", values, "eFulldate");
            return (Criteria) this;
        }

        public Criteria andEFulldateNotIn(List<Date> values) {
            addCriterionForJDBCDate("e_fulldate not in", values, "eFulldate");
            return (Criteria) this;
        }

        public Criteria andEFulldateBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("e_fulldate between", value1, value2, "eFulldate");
            return (Criteria) this;
        }

        public Criteria andEFulldateNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("e_fulldate not between", value1, value2, "eFulldate");
            return (Criteria) this;
        }

        public Criteria andESourceIsNull() {
            addCriterion("e_source is null");
            return (Criteria) this;
        }

        public Criteria andESourceIsNotNull() {
            addCriterion("e_source is not null");
            return (Criteria) this;
        }

        public Criteria andESourceEqualTo(String value) {
            addCriterion("e_source =", value, "eSource");
            return (Criteria) this;
        }

        public Criteria andESourceNotEqualTo(String value) {
            addCriterion("e_source <>", value, "eSource");
            return (Criteria) this;
        }

        public Criteria andESourceGreaterThan(String value) {
            addCriterion("e_source >", value, "eSource");
            return (Criteria) this;
        }

        public Criteria andESourceGreaterThanOrEqualTo(String value) {
            addCriterion("e_source >=", value, "eSource");
            return (Criteria) this;
        }

        public Criteria andESourceLessThan(String value) {
            addCriterion("e_source <", value, "eSource");
            return (Criteria) this;
        }

        public Criteria andESourceLessThanOrEqualTo(String value) {
            addCriterion("e_source <=", value, "eSource");
            return (Criteria) this;
        }

        public Criteria andESourceLike(String value) {
            addCriterion("e_source like", value, "eSource");
            return (Criteria) this;
        }

        public Criteria andESourceNotLike(String value) {
            addCriterion("e_source not like", value, "eSource");
            return (Criteria) this;
        }

        public Criteria andESourceIn(List<String> values) {
            addCriterion("e_source in", values, "eSource");
            return (Criteria) this;
        }

        public Criteria andESourceNotIn(List<String> values) {
            addCriterion("e_source not in", values, "eSource");
            return (Criteria) this;
        }

        public Criteria andESourceBetween(String value1, String value2) {
            addCriterion("e_source between", value1, value2, "eSource");
            return (Criteria) this;
        }

        public Criteria andESourceNotBetween(String value1, String value2) {
            addCriterion("e_source not between", value1, value2, "eSource");
            return (Criteria) this;
        }

        public Criteria andEOrderIsNull() {
            addCriterion("e_order is null");
            return (Criteria) this;
        }

        public Criteria andEOrderIsNotNull() {
            addCriterion("e_order is not null");
            return (Criteria) this;
        }

        public Criteria andEOrderEqualTo(Byte value) {
            addCriterion("e_order =", value, "eOrder");
            return (Criteria) this;
        }

        public Criteria andEOrderNotEqualTo(Byte value) {
            addCriterion("e_order <>", value, "eOrder");
            return (Criteria) this;
        }

        public Criteria andEOrderGreaterThan(Byte value) {
            addCriterion("e_order >", value, "eOrder");
            return (Criteria) this;
        }

        public Criteria andEOrderGreaterThanOrEqualTo(Byte value) {
            addCriterion("e_order >=", value, "eOrder");
            return (Criteria) this;
        }

        public Criteria andEOrderLessThan(Byte value) {
            addCriterion("e_order <", value, "eOrder");
            return (Criteria) this;
        }

        public Criteria andEOrderLessThanOrEqualTo(Byte value) {
            addCriterion("e_order <=", value, "eOrder");
            return (Criteria) this;
        }

        public Criteria andEOrderIn(List<Byte> values) {
            addCriterion("e_order in", values, "eOrder");
            return (Criteria) this;
        }

        public Criteria andEOrderNotIn(List<Byte> values) {
            addCriterion("e_order not in", values, "eOrder");
            return (Criteria) this;
        }

        public Criteria andEOrderBetween(Byte value1, Byte value2) {
            addCriterion("e_order between", value1, value2, "eOrder");
            return (Criteria) this;
        }

        public Criteria andEOrderNotBetween(Byte value1, Byte value2) {
            addCriterion("e_order not between", value1, value2, "eOrder");
            return (Criteria) this;
        }

        public Criteria andEOrdernumIsNull() {
            addCriterion("e_ordernum is null");
            return (Criteria) this;
        }

        public Criteria andEOrdernumIsNotNull() {
            addCriterion("e_ordernum is not null");
            return (Criteria) this;
        }

        public Criteria andEOrdernumEqualTo(String value) {
            addCriterion("e_ordernum =", value, "eOrdernum");
            return (Criteria) this;
        }

        public Criteria andEOrdernumNotEqualTo(String value) {
            addCriterion("e_ordernum <>", value, "eOrdernum");
            return (Criteria) this;
        }

        public Criteria andEOrdernumGreaterThan(String value) {
            addCriterion("e_ordernum >", value, "eOrdernum");
            return (Criteria) this;
        }

        public Criteria andEOrdernumGreaterThanOrEqualTo(String value) {
            addCriterion("e_ordernum >=", value, "eOrdernum");
            return (Criteria) this;
        }

        public Criteria andEOrdernumLessThan(String value) {
            addCriterion("e_ordernum <", value, "eOrdernum");
            return (Criteria) this;
        }

        public Criteria andEOrdernumLessThanOrEqualTo(String value) {
            addCriterion("e_ordernum <=", value, "eOrdernum");
            return (Criteria) this;
        }

        public Criteria andEOrdernumLike(String value) {
            addCriterion("e_ordernum like", value, "eOrdernum");
            return (Criteria) this;
        }

        public Criteria andEOrdernumNotLike(String value) {
            addCriterion("e_ordernum not like", value, "eOrdernum");
            return (Criteria) this;
        }

        public Criteria andEOrdernumIn(List<String> values) {
            addCriterion("e_ordernum in", values, "eOrdernum");
            return (Criteria) this;
        }

        public Criteria andEOrdernumNotIn(List<String> values) {
            addCriterion("e_ordernum not in", values, "eOrdernum");
            return (Criteria) this;
        }

        public Criteria andEOrdernumBetween(String value1, String value2) {
            addCriterion("e_ordernum between", value1, value2, "eOrdernum");
            return (Criteria) this;
        }

        public Criteria andEOrdernumNotBetween(String value1, String value2) {
            addCriterion("e_ordernum not between", value1, value2, "eOrdernum");
            return (Criteria) this;
        }

        public Criteria andECustomeridIsNull() {
            addCriterion("e_customerid is null");
            return (Criteria) this;
        }

        public Criteria andECustomeridIsNotNull() {
            addCriterion("e_customerid is not null");
            return (Criteria) this;
        }

        public Criteria andECustomeridEqualTo(Integer value) {
            addCriterion("e_customerid =", value, "eCustomerid");
            return (Criteria) this;
        }

        public Criteria andECustomeridNotEqualTo(Integer value) {
            addCriterion("e_customerid <>", value, "eCustomerid");
            return (Criteria) this;
        }

        public Criteria andECustomeridGreaterThan(Integer value) {
            addCriterion("e_customerid >", value, "eCustomerid");
            return (Criteria) this;
        }

        public Criteria andECustomeridGreaterThanOrEqualTo(Integer value) {
            addCriterion("e_customerid >=", value, "eCustomerid");
            return (Criteria) this;
        }

        public Criteria andECustomeridLessThan(Integer value) {
            addCriterion("e_customerid <", value, "eCustomerid");
            return (Criteria) this;
        }

        public Criteria andECustomeridLessThanOrEqualTo(Integer value) {
            addCriterion("e_customerid <=", value, "eCustomerid");
            return (Criteria) this;
        }

        public Criteria andECustomeridIn(List<Integer> values) {
            addCriterion("e_customerid in", values, "eCustomerid");
            return (Criteria) this;
        }

        public Criteria andECustomeridNotIn(List<Integer> values) {
            addCriterion("e_customerid not in", values, "eCustomerid");
            return (Criteria) this;
        }

        public Criteria andECustomeridBetween(Integer value1, Integer value2) {
            addCriterion("e_customerid between", value1, value2, "eCustomerid");
            return (Criteria) this;
        }

        public Criteria andECustomeridNotBetween(Integer value1, Integer value2) {
            addCriterion("e_customerid not between", value1, value2, "eCustomerid");
            return (Criteria) this;
        }

        public Criteria andERecieverIsNull() {
            addCriterion("e_reciever is null");
            return (Criteria) this;
        }

        public Criteria andERecieverIsNotNull() {
            addCriterion("e_reciever is not null");
            return (Criteria) this;
        }

        public Criteria andERecieverEqualTo(String value) {
            addCriterion("e_reciever =", value, "eReciever");
            return (Criteria) this;
        }

        public Criteria andERecieverNotEqualTo(String value) {
            addCriterion("e_reciever <>", value, "eReciever");
            return (Criteria) this;
        }

        public Criteria andERecieverGreaterThan(String value) {
            addCriterion("e_reciever >", value, "eReciever");
            return (Criteria) this;
        }

        public Criteria andERecieverGreaterThanOrEqualTo(String value) {
            addCriterion("e_reciever >=", value, "eReciever");
            return (Criteria) this;
        }

        public Criteria andERecieverLessThan(String value) {
            addCriterion("e_reciever <", value, "eReciever");
            return (Criteria) this;
        }

        public Criteria andERecieverLessThanOrEqualTo(String value) {
            addCriterion("e_reciever <=", value, "eReciever");
            return (Criteria) this;
        }

        public Criteria andERecieverLike(String value) {
            addCriterion("e_reciever like", value, "eReciever");
            return (Criteria) this;
        }

        public Criteria andERecieverNotLike(String value) {
            addCriterion("e_reciever not like", value, "eReciever");
            return (Criteria) this;
        }

        public Criteria andERecieverIn(List<String> values) {
            addCriterion("e_reciever in", values, "eReciever");
            return (Criteria) this;
        }

        public Criteria andERecieverNotIn(List<String> values) {
            addCriterion("e_reciever not in", values, "eReciever");
            return (Criteria) this;
        }

        public Criteria andERecieverBetween(String value1, String value2) {
            addCriterion("e_reciever between", value1, value2, "eReciever");
            return (Criteria) this;
        }

        public Criteria andERecieverNotBetween(String value1, String value2) {
            addCriterion("e_reciever not between", value1, value2, "eReciever");
            return (Criteria) this;
        }

        public Criteria andEBournIsNull() {
            addCriterion("e_bourn is null");
            return (Criteria) this;
        }

        public Criteria andEBournIsNotNull() {
            addCriterion("e_bourn is not null");
            return (Criteria) this;
        }

        public Criteria andEBournEqualTo(String value) {
            addCriterion("e_bourn =", value, "eBourn");
            return (Criteria) this;
        }

        public Criteria andEBournNotEqualTo(String value) {
            addCriterion("e_bourn <>", value, "eBourn");
            return (Criteria) this;
        }

        public Criteria andEBournGreaterThan(String value) {
            addCriterion("e_bourn >", value, "eBourn");
            return (Criteria) this;
        }

        public Criteria andEBournGreaterThanOrEqualTo(String value) {
            addCriterion("e_bourn >=", value, "eBourn");
            return (Criteria) this;
        }

        public Criteria andEBournLessThan(String value) {
            addCriterion("e_bourn <", value, "eBourn");
            return (Criteria) this;
        }

        public Criteria andEBournLessThanOrEqualTo(String value) {
            addCriterion("e_bourn <=", value, "eBourn");
            return (Criteria) this;
        }

        public Criteria andEBournLike(String value) {
            addCriterion("e_bourn like", value, "eBourn");
            return (Criteria) this;
        }

        public Criteria andEBournNotLike(String value) {
            addCriterion("e_bourn not like", value, "eBourn");
            return (Criteria) this;
        }

        public Criteria andEBournIn(List<String> values) {
            addCriterion("e_bourn in", values, "eBourn");
            return (Criteria) this;
        }

        public Criteria andEBournNotIn(List<String> values) {
            addCriterion("e_bourn not in", values, "eBourn");
            return (Criteria) this;
        }

        public Criteria andEBournBetween(String value1, String value2) {
            addCriterion("e_bourn between", value1, value2, "eBourn");
            return (Criteria) this;
        }

        public Criteria andEBournNotBetween(String value1, String value2) {
            addCriterion("e_bourn not between", value1, value2, "eBourn");
            return (Criteria) this;
        }

        public Criteria andEHarborIsNull() {
            addCriterion("e_harbor is null");
            return (Criteria) this;
        }

        public Criteria andEHarborIsNotNull() {
            addCriterion("e_harbor is not null");
            return (Criteria) this;
        }

        public Criteria andEHarborEqualTo(Byte value) {
            addCriterion("e_harbor =", value, "eHarbor");
            return (Criteria) this;
        }

        public Criteria andEHarborNotEqualTo(Byte value) {
            addCriterion("e_harbor <>", value, "eHarbor");
            return (Criteria) this;
        }

        public Criteria andEHarborGreaterThan(Byte value) {
            addCriterion("e_harbor >", value, "eHarbor");
            return (Criteria) this;
        }

        public Criteria andEHarborGreaterThanOrEqualTo(Byte value) {
            addCriterion("e_harbor >=", value, "eHarbor");
            return (Criteria) this;
        }

        public Criteria andEHarborLessThan(Byte value) {
            addCriterion("e_harbor <", value, "eHarbor");
            return (Criteria) this;
        }

        public Criteria andEHarborLessThanOrEqualTo(Byte value) {
            addCriterion("e_harbor <=", value, "eHarbor");
            return (Criteria) this;
        }

        public Criteria andEHarborIn(List<Byte> values) {
            addCriterion("e_harbor in", values, "eHarbor");
            return (Criteria) this;
        }

        public Criteria andEHarborNotIn(List<Byte> values) {
            addCriterion("e_harbor not in", values, "eHarbor");
            return (Criteria) this;
        }

        public Criteria andEHarborBetween(Byte value1, Byte value2) {
            addCriterion("e_harbor between", value1, value2, "eHarbor");
            return (Criteria) this;
        }

        public Criteria andEHarborNotBetween(Byte value1, Byte value2) {
            addCriterion("e_harbor not between", value1, value2, "eHarbor");
            return (Criteria) this;
        }

        public Criteria andETypeIsNull() {
            addCriterion("e_type is null");
            return (Criteria) this;
        }

        public Criteria andETypeIsNotNull() {
            addCriterion("e_type is not null");
            return (Criteria) this;
        }

        public Criteria andETypeEqualTo(Byte value) {
            addCriterion("e_type =", value, "eType");
            return (Criteria) this;
        }

        public Criteria andETypeNotEqualTo(Byte value) {
            addCriterion("e_type <>", value, "eType");
            return (Criteria) this;
        }

        public Criteria andETypeGreaterThan(Byte value) {
            addCriterion("e_type >", value, "eType");
            return (Criteria) this;
        }

        public Criteria andETypeGreaterThanOrEqualTo(Byte value) {
            addCriterion("e_type >=", value, "eType");
            return (Criteria) this;
        }

        public Criteria andETypeLessThan(Byte value) {
            addCriterion("e_type <", value, "eType");
            return (Criteria) this;
        }

        public Criteria andETypeLessThanOrEqualTo(Byte value) {
            addCriterion("e_type <=", value, "eType");
            return (Criteria) this;
        }

        public Criteria andETypeIn(List<Byte> values) {
            addCriterion("e_type in", values, "eType");
            return (Criteria) this;
        }

        public Criteria andETypeNotIn(List<Byte> values) {
            addCriterion("e_type not in", values, "eType");
            return (Criteria) this;
        }

        public Criteria andETypeBetween(Byte value1, Byte value2) {
            addCriterion("e_type between", value1, value2, "eType");
            return (Criteria) this;
        }

        public Criteria andETypeNotBetween(Byte value1, Byte value2) {
            addCriterion("e_type not between", value1, value2, "eType");
            return (Criteria) this;
        }

        public Criteria andELengthIsNull() {
            addCriterion("e_length is null");
            return (Criteria) this;
        }

        public Criteria andELengthIsNotNull() {
            addCriterion("e_length is not null");
            return (Criteria) this;
        }

        public Criteria andELengthEqualTo(Integer value) {
            addCriterion("e_length =", value, "eLength");
            return (Criteria) this;
        }

        public Criteria andELengthNotEqualTo(Integer value) {
            addCriterion("e_length <>", value, "eLength");
            return (Criteria) this;
        }

        public Criteria andELengthGreaterThan(Integer value) {
            addCriterion("e_length >", value, "eLength");
            return (Criteria) this;
        }

        public Criteria andELengthGreaterThanOrEqualTo(Integer value) {
            addCriterion("e_length >=", value, "eLength");
            return (Criteria) this;
        }

        public Criteria andELengthLessThan(Integer value) {
            addCriterion("e_length <", value, "eLength");
            return (Criteria) this;
        }

        public Criteria andELengthLessThanOrEqualTo(Integer value) {
            addCriterion("e_length <=", value, "eLength");
            return (Criteria) this;
        }

        public Criteria andELengthIn(List<Integer> values) {
            addCriterion("e_length in", values, "eLength");
            return (Criteria) this;
        }

        public Criteria andELengthNotIn(List<Integer> values) {
            addCriterion("e_length not in", values, "eLength");
            return (Criteria) this;
        }

        public Criteria andELengthBetween(Integer value1, Integer value2) {
            addCriterion("e_length between", value1, value2, "eLength");
            return (Criteria) this;
        }

        public Criteria andELengthNotBetween(Integer value1, Integer value2) {
            addCriterion("e_length not between", value1, value2, "eLength");
            return (Criteria) this;
        }

        public Criteria andEPriceIsNull() {
            addCriterion("e_price is null");
            return (Criteria) this;
        }

        public Criteria andEPriceIsNotNull() {
            addCriterion("e_price is not null");
            return (Criteria) this;
        }

        public Criteria andEPriceEqualTo(Long value) {
            addCriterion("e_price =", value, "ePrice");
            return (Criteria) this;
        }

        public Criteria andEPriceNotEqualTo(Long value) {
            addCriterion("e_price <>", value, "ePrice");
            return (Criteria) this;
        }

        public Criteria andEPriceGreaterThan(Long value) {
            addCriterion("e_price >", value, "ePrice");
            return (Criteria) this;
        }

        public Criteria andEPriceGreaterThanOrEqualTo(Long value) {
            addCriterion("e_price >=", value, "ePrice");
            return (Criteria) this;
        }

        public Criteria andEPriceLessThan(Long value) {
            addCriterion("e_price <", value, "ePrice");
            return (Criteria) this;
        }

        public Criteria andEPriceLessThanOrEqualTo(Long value) {
            addCriterion("e_price <=", value, "ePrice");
            return (Criteria) this;
        }

        public Criteria andEPriceIn(List<Long> values) {
            addCriterion("e_price in", values, "ePrice");
            return (Criteria) this;
        }

        public Criteria andEPriceNotIn(List<Long> values) {
            addCriterion("e_price not in", values, "ePrice");
            return (Criteria) this;
        }

        public Criteria andEPriceBetween(Long value1, Long value2) {
            addCriterion("e_price between", value1, value2, "ePrice");
            return (Criteria) this;
        }

        public Criteria andEPriceNotBetween(Long value1, Long value2) {
            addCriterion("e_price not between", value1, value2, "ePrice");
            return (Criteria) this;
        }

        public Criteria andEGoodsIsNull() {
            addCriterion("e_goods is null");
            return (Criteria) this;
        }

        public Criteria andEGoodsIsNotNull() {
            addCriterion("e_goods is not null");
            return (Criteria) this;
        }

        public Criteria andEGoodsEqualTo(Byte value) {
            addCriterion("e_goods =", value, "eGoods");
            return (Criteria) this;
        }

        public Criteria andEGoodsNotEqualTo(Byte value) {
            addCriterion("e_goods <>", value, "eGoods");
            return (Criteria) this;
        }

        public Criteria andEGoodsGreaterThan(Byte value) {
            addCriterion("e_goods >", value, "eGoods");
            return (Criteria) this;
        }

        public Criteria andEGoodsGreaterThanOrEqualTo(Byte value) {
            addCriterion("e_goods >=", value, "eGoods");
            return (Criteria) this;
        }

        public Criteria andEGoodsLessThan(Byte value) {
            addCriterion("e_goods <", value, "eGoods");
            return (Criteria) this;
        }

        public Criteria andEGoodsLessThanOrEqualTo(Byte value) {
            addCriterion("e_goods <=", value, "eGoods");
            return (Criteria) this;
        }

        public Criteria andEGoodsIn(List<Byte> values) {
            addCriterion("e_goods in", values, "eGoods");
            return (Criteria) this;
        }

        public Criteria andEGoodsNotIn(List<Byte> values) {
            addCriterion("e_goods not in", values, "eGoods");
            return (Criteria) this;
        }

        public Criteria andEGoodsBetween(Byte value1, Byte value2) {
            addCriterion("e_goods between", value1, value2, "eGoods");
            return (Criteria) this;
        }

        public Criteria andEGoodsNotBetween(Byte value1, Byte value2) {
            addCriterion("e_goods not between", value1, value2, "eGoods");
            return (Criteria) this;
        }

        public Criteria andEProductIsNull() {
            addCriterion("e_product is null");
            return (Criteria) this;
        }

        public Criteria andEProductIsNotNull() {
            addCriterion("e_product is not null");
            return (Criteria) this;
        }

        public Criteria andEProductEqualTo(Byte value) {
            addCriterion("e_product =", value, "eProduct");
            return (Criteria) this;
        }

        public Criteria andEProductNotEqualTo(Byte value) {
            addCriterion("e_product <>", value, "eProduct");
            return (Criteria) this;
        }

        public Criteria andEProductGreaterThan(Byte value) {
            addCriterion("e_product >", value, "eProduct");
            return (Criteria) this;
        }

        public Criteria andEProductGreaterThanOrEqualTo(Byte value) {
            addCriterion("e_product >=", value, "eProduct");
            return (Criteria) this;
        }

        public Criteria andEProductLessThan(Byte value) {
            addCriterion("e_product <", value, "eProduct");
            return (Criteria) this;
        }

        public Criteria andEProductLessThanOrEqualTo(Byte value) {
            addCriterion("e_product <=", value, "eProduct");
            return (Criteria) this;
        }

        public Criteria andEProductIn(List<Byte> values) {
            addCriterion("e_product in", values, "eProduct");
            return (Criteria) this;
        }

        public Criteria andEProductNotIn(List<Byte> values) {
            addCriterion("e_product not in", values, "eProduct");
            return (Criteria) this;
        }

        public Criteria andEProductBetween(Byte value1, Byte value2) {
            addCriterion("e_product between", value1, value2, "eProduct");
            return (Criteria) this;
        }

        public Criteria andEProductNotBetween(Byte value1, Byte value2) {
            addCriterion("e_product not between", value1, value2, "eProduct");
            return (Criteria) this;
        }

        public Criteria andEUnitIsNull() {
            addCriterion("e_unit is null");
            return (Criteria) this;
        }

        public Criteria andEUnitIsNotNull() {
            addCriterion("e_unit is not null");
            return (Criteria) this;
        }

        public Criteria andEUnitEqualTo(String value) {
            addCriterion("e_unit =", value, "eUnit");
            return (Criteria) this;
        }

        public Criteria andEUnitNotEqualTo(String value) {
            addCriterion("e_unit <>", value, "eUnit");
            return (Criteria) this;
        }

        public Criteria andEUnitGreaterThan(String value) {
            addCriterion("e_unit >", value, "eUnit");
            return (Criteria) this;
        }

        public Criteria andEUnitGreaterThanOrEqualTo(String value) {
            addCriterion("e_unit >=", value, "eUnit");
            return (Criteria) this;
        }

        public Criteria andEUnitLessThan(String value) {
            addCriterion("e_unit <", value, "eUnit");
            return (Criteria) this;
        }

        public Criteria andEUnitLessThanOrEqualTo(String value) {
            addCriterion("e_unit <=", value, "eUnit");
            return (Criteria) this;
        }

        public Criteria andEUnitLike(String value) {
            addCriterion("e_unit like", value, "eUnit");
            return (Criteria) this;
        }

        public Criteria andEUnitNotLike(String value) {
            addCriterion("e_unit not like", value, "eUnit");
            return (Criteria) this;
        }

        public Criteria andEUnitIn(List<String> values) {
            addCriterion("e_unit in", values, "eUnit");
            return (Criteria) this;
        }

        public Criteria andEUnitNotIn(List<String> values) {
            addCriterion("e_unit not in", values, "eUnit");
            return (Criteria) this;
        }

        public Criteria andEUnitBetween(String value1, String value2) {
            addCriterion("e_unit between", value1, value2, "eUnit");
            return (Criteria) this;
        }

        public Criteria andEUnitNotBetween(String value1, String value2) {
            addCriterion("e_unit not between", value1, value2, "eUnit");
            return (Criteria) this;
        }

        public Criteria andETotalnumIsNull() {
            addCriterion("e_totalnum is null");
            return (Criteria) this;
        }

        public Criteria andETotalnumIsNotNull() {
            addCriterion("e_totalnum is not null");
            return (Criteria) this;
        }

        public Criteria andETotalnumEqualTo(Integer value) {
            addCriterion("e_totalnum =", value, "eTotalnum");
            return (Criteria) this;
        }

        public Criteria andETotalnumNotEqualTo(Integer value) {
            addCriterion("e_totalnum <>", value, "eTotalnum");
            return (Criteria) this;
        }

        public Criteria andETotalnumGreaterThan(Integer value) {
            addCriterion("e_totalnum >", value, "eTotalnum");
            return (Criteria) this;
        }

        public Criteria andETotalnumGreaterThanOrEqualTo(Integer value) {
            addCriterion("e_totalnum >=", value, "eTotalnum");
            return (Criteria) this;
        }

        public Criteria andETotalnumLessThan(Integer value) {
            addCriterion("e_totalnum <", value, "eTotalnum");
            return (Criteria) this;
        }

        public Criteria andETotalnumLessThanOrEqualTo(Integer value) {
            addCriterion("e_totalnum <=", value, "eTotalnum");
            return (Criteria) this;
        }

        public Criteria andETotalnumIn(List<Integer> values) {
            addCriterion("e_totalnum in", values, "eTotalnum");
            return (Criteria) this;
        }

        public Criteria andETotalnumNotIn(List<Integer> values) {
            addCriterion("e_totalnum not in", values, "eTotalnum");
            return (Criteria) this;
        }

        public Criteria andETotalnumBetween(Integer value1, Integer value2) {
            addCriterion("e_totalnum between", value1, value2, "eTotalnum");
            return (Criteria) this;
        }

        public Criteria andETotalnumNotBetween(Integer value1, Integer value2) {
            addCriterion("e_totalnum not between", value1, value2, "eTotalnum");
            return (Criteria) this;
        }

        public Criteria andESurplusIsNull() {
            addCriterion("e_surplus is null");
            return (Criteria) this;
        }

        public Criteria andESurplusIsNotNull() {
            addCriterion("e_surplus is not null");
            return (Criteria) this;
        }

        public Criteria andESurplusEqualTo(Integer value) {
            addCriterion("e_surplus =", value, "eSurplus");
            return (Criteria) this;
        }

        public Criteria andESurplusNotEqualTo(Integer value) {
            addCriterion("e_surplus <>", value, "eSurplus");
            return (Criteria) this;
        }

        public Criteria andESurplusGreaterThan(Integer value) {
            addCriterion("e_surplus >", value, "eSurplus");
            return (Criteria) this;
        }

        public Criteria andESurplusGreaterThanOrEqualTo(Integer value) {
            addCriterion("e_surplus >=", value, "eSurplus");
            return (Criteria) this;
        }

        public Criteria andESurplusLessThan(Integer value) {
            addCriterion("e_surplus <", value, "eSurplus");
            return (Criteria) this;
        }

        public Criteria andESurplusLessThanOrEqualTo(Integer value) {
            addCriterion("e_surplus <=", value, "eSurplus");
            return (Criteria) this;
        }

        public Criteria andESurplusIn(List<Integer> values) {
            addCriterion("e_surplus in", values, "eSurplus");
            return (Criteria) this;
        }

        public Criteria andESurplusNotIn(List<Integer> values) {
            addCriterion("e_surplus not in", values, "eSurplus");
            return (Criteria) this;
        }

        public Criteria andESurplusBetween(Integer value1, Integer value2) {
            addCriterion("e_surplus between", value1, value2, "eSurplus");
            return (Criteria) this;
        }

        public Criteria andESurplusNotBetween(Integer value1, Integer value2) {
            addCriterion("e_surplus not between", value1, value2, "eSurplus");
            return (Criteria) this;
        }

        public Criteria andEEntrepotIsNull() {
            addCriterion("e_entrepot is null");
            return (Criteria) this;
        }

        public Criteria andEEntrepotIsNotNull() {
            addCriterion("e_entrepot is not null");
            return (Criteria) this;
        }

        public Criteria andEEntrepotEqualTo(String value) {
            addCriterion("e_entrepot =", value, "eEntrepot");
            return (Criteria) this;
        }

        public Criteria andEEntrepotNotEqualTo(String value) {
            addCriterion("e_entrepot <>", value, "eEntrepot");
            return (Criteria) this;
        }

        public Criteria andEEntrepotGreaterThan(String value) {
            addCriterion("e_entrepot >", value, "eEntrepot");
            return (Criteria) this;
        }

        public Criteria andEEntrepotGreaterThanOrEqualTo(String value) {
            addCriterion("e_entrepot >=", value, "eEntrepot");
            return (Criteria) this;
        }

        public Criteria andEEntrepotLessThan(String value) {
            addCriterion("e_entrepot <", value, "eEntrepot");
            return (Criteria) this;
        }

        public Criteria andEEntrepotLessThanOrEqualTo(String value) {
            addCriterion("e_entrepot <=", value, "eEntrepot");
            return (Criteria) this;
        }

        public Criteria andEEntrepotLike(String value) {
            addCriterion("e_entrepot like", value, "eEntrepot");
            return (Criteria) this;
        }

        public Criteria andEEntrepotNotLike(String value) {
            addCriterion("e_entrepot not like", value, "eEntrepot");
            return (Criteria) this;
        }

        public Criteria andEEntrepotIn(List<String> values) {
            addCriterion("e_entrepot in", values, "eEntrepot");
            return (Criteria) this;
        }

        public Criteria andEEntrepotNotIn(List<String> values) {
            addCriterion("e_entrepot not in", values, "eEntrepot");
            return (Criteria) this;
        }

        public Criteria andEEntrepotBetween(String value1, String value2) {
            addCriterion("e_entrepot between", value1, value2, "eEntrepot");
            return (Criteria) this;
        }

        public Criteria andEEntrepotNotBetween(String value1, String value2) {
            addCriterion("e_entrepot not between", value1, value2, "eEntrepot");
            return (Criteria) this;
        }

        public Criteria andEEmptytimeIsNull() {
            addCriterion("e_emptytime is null");
            return (Criteria) this;
        }

        public Criteria andEEmptytimeIsNotNull() {
            addCriterion("e_emptytime is not null");
            return (Criteria) this;
        }

        public Criteria andEEmptytimeEqualTo(String value) {
            addCriterion("e_emptytime =", value, "eEmptytime");
            return (Criteria) this;
        }

        public Criteria andEEmptytimeNotEqualTo(String value) {
            addCriterion("e_emptytime <>", value, "eEmptytime");
            return (Criteria) this;
        }

        public Criteria andEEmptytimeGreaterThan(String value) {
            addCriterion("e_emptytime >", value, "eEmptytime");
            return (Criteria) this;
        }

        public Criteria andEEmptytimeGreaterThanOrEqualTo(String value) {
            addCriterion("e_emptytime >=", value, "eEmptytime");
            return (Criteria) this;
        }

        public Criteria andEEmptytimeLessThan(String value) {
            addCriterion("e_emptytime <", value, "eEmptytime");
            return (Criteria) this;
        }

        public Criteria andEEmptytimeLessThanOrEqualTo(String value) {
            addCriterion("e_emptytime <=", value, "eEmptytime");
            return (Criteria) this;
        }

        public Criteria andEEmptytimeLike(String value) {
            addCriterion("e_emptytime like", value, "eEmptytime");
            return (Criteria) this;
        }

        public Criteria andEEmptytimeNotLike(String value) {
            addCriterion("e_emptytime not like", value, "eEmptytime");
            return (Criteria) this;
        }

        public Criteria andEEmptytimeIn(List<String> values) {
            addCriterion("e_emptytime in", values, "eEmptytime");
            return (Criteria) this;
        }

        public Criteria andEEmptytimeNotIn(List<String> values) {
            addCriterion("e_emptytime not in", values, "eEmptytime");
            return (Criteria) this;
        }

        public Criteria andEEmptytimeBetween(String value1, String value2) {
            addCriterion("e_emptytime between", value1, value2, "eEmptytime");
            return (Criteria) this;
        }

        public Criteria andEEmptytimeNotBetween(String value1, String value2) {
            addCriterion("e_emptytime not between", value1, value2, "eEmptytime");
            return (Criteria) this;
        }

        public Criteria andEFulltimeIsNull() {
            addCriterion("e_fulltime is null");
            return (Criteria) this;
        }

        public Criteria andEFulltimeIsNotNull() {
            addCriterion("e_fulltime is not null");
            return (Criteria) this;
        }

        public Criteria andEFulltimeEqualTo(String value) {
            addCriterion("e_fulltime =", value, "eFulltime");
            return (Criteria) this;
        }

        public Criteria andEFulltimeNotEqualTo(String value) {
            addCriterion("e_fulltime <>", value, "eFulltime");
            return (Criteria) this;
        }

        public Criteria andEFulltimeGreaterThan(String value) {
            addCriterion("e_fulltime >", value, "eFulltime");
            return (Criteria) this;
        }

        public Criteria andEFulltimeGreaterThanOrEqualTo(String value) {
            addCriterion("e_fulltime >=", value, "eFulltime");
            return (Criteria) this;
        }

        public Criteria andEFulltimeLessThan(String value) {
            addCriterion("e_fulltime <", value, "eFulltime");
            return (Criteria) this;
        }

        public Criteria andEFulltimeLessThanOrEqualTo(String value) {
            addCriterion("e_fulltime <=", value, "eFulltime");
            return (Criteria) this;
        }

        public Criteria andEFulltimeLike(String value) {
            addCriterion("e_fulltime like", value, "eFulltime");
            return (Criteria) this;
        }

        public Criteria andEFulltimeNotLike(String value) {
            addCriterion("e_fulltime not like", value, "eFulltime");
            return (Criteria) this;
        }

        public Criteria andEFulltimeIn(List<String> values) {
            addCriterion("e_fulltime in", values, "eFulltime");
            return (Criteria) this;
        }

        public Criteria andEFulltimeNotIn(List<String> values) {
            addCriterion("e_fulltime not in", values, "eFulltime");
            return (Criteria) this;
        }

        public Criteria andEFulltimeBetween(String value1, String value2) {
            addCriterion("e_fulltime between", value1, value2, "eFulltime");
            return (Criteria) this;
        }

        public Criteria andEFulltimeNotBetween(String value1, String value2) {
            addCriterion("e_fulltime not between", value1, value2, "eFulltime");
            return (Criteria) this;
        }

        public Criteria andECartypeIsNull() {
            addCriterion("e_cartype is null");
            return (Criteria) this;
        }

        public Criteria andECartypeIsNotNull() {
            addCriterion("e_cartype is not null");
            return (Criteria) this;
        }

        public Criteria andECartypeEqualTo(String value) {
            addCriterion("e_cartype =", value, "eCartype");
            return (Criteria) this;
        }

        public Criteria andECartypeNotEqualTo(String value) {
            addCriterion("e_cartype <>", value, "eCartype");
            return (Criteria) this;
        }

        public Criteria andECartypeGreaterThan(String value) {
            addCriterion("e_cartype >", value, "eCartype");
            return (Criteria) this;
        }

        public Criteria andECartypeGreaterThanOrEqualTo(String value) {
            addCriterion("e_cartype >=", value, "eCartype");
            return (Criteria) this;
        }

        public Criteria andECartypeLessThan(String value) {
            addCriterion("e_cartype <", value, "eCartype");
            return (Criteria) this;
        }

        public Criteria andECartypeLessThanOrEqualTo(String value) {
            addCriterion("e_cartype <=", value, "eCartype");
            return (Criteria) this;
        }

        public Criteria andECartypeLike(String value) {
            addCriterion("e_cartype like", value, "eCartype");
            return (Criteria) this;
        }

        public Criteria andECartypeNotLike(String value) {
            addCriterion("e_cartype not like", value, "eCartype");
            return (Criteria) this;
        }

        public Criteria andECartypeIn(List<String> values) {
            addCriterion("e_cartype in", values, "eCartype");
            return (Criteria) this;
        }

        public Criteria andECartypeNotIn(List<String> values) {
            addCriterion("e_cartype not in", values, "eCartype");
            return (Criteria) this;
        }

        public Criteria andECartypeBetween(String value1, String value2) {
            addCriterion("e_cartype between", value1, value2, "eCartype");
            return (Criteria) this;
        }

        public Criteria andECartypeNotBetween(String value1, String value2) {
            addCriterion("e_cartype not between", value1, value2, "eCartype");
            return (Criteria) this;
        }

        public Criteria andECarnumIsNull() {
            addCriterion("e_carnum is null");
            return (Criteria) this;
        }

        public Criteria andECarnumIsNotNull() {
            addCriterion("e_carnum is not null");
            return (Criteria) this;
        }

        public Criteria andECarnumEqualTo(String value) {
            addCriterion("e_carnum =", value, "eCarnum");
            return (Criteria) this;
        }

        public Criteria andECarnumNotEqualTo(String value) {
            addCriterion("e_carnum <>", value, "eCarnum");
            return (Criteria) this;
        }

        public Criteria andECarnumGreaterThan(String value) {
            addCriterion("e_carnum >", value, "eCarnum");
            return (Criteria) this;
        }

        public Criteria andECarnumGreaterThanOrEqualTo(String value) {
            addCriterion("e_carnum >=", value, "eCarnum");
            return (Criteria) this;
        }

        public Criteria andECarnumLessThan(String value) {
            addCriterion("e_carnum <", value, "eCarnum");
            return (Criteria) this;
        }

        public Criteria andECarnumLessThanOrEqualTo(String value) {
            addCriterion("e_carnum <=", value, "eCarnum");
            return (Criteria) this;
        }

        public Criteria andECarnumLike(String value) {
            addCriterion("e_carnum like", value, "eCarnum");
            return (Criteria) this;
        }

        public Criteria andECarnumNotLike(String value) {
            addCriterion("e_carnum not like", value, "eCarnum");
            return (Criteria) this;
        }

        public Criteria andECarnumIn(List<String> values) {
            addCriterion("e_carnum in", values, "eCarnum");
            return (Criteria) this;
        }

        public Criteria andECarnumNotIn(List<String> values) {
            addCriterion("e_carnum not in", values, "eCarnum");
            return (Criteria) this;
        }

        public Criteria andECarnumBetween(String value1, String value2) {
            addCriterion("e_carnum between", value1, value2, "eCarnum");
            return (Criteria) this;
        }

        public Criteria andECarnumNotBetween(String value1, String value2) {
            addCriterion("e_carnum not between", value1, value2, "eCarnum");
            return (Criteria) this;
        }

        public Criteria andEWeightIsNull() {
            addCriterion("e_weight is null");
            return (Criteria) this;
        }

        public Criteria andEWeightIsNotNull() {
            addCriterion("e_weight is not null");
            return (Criteria) this;
        }

        public Criteria andEWeightEqualTo(Integer value) {
            addCriterion("e_weight =", value, "eWeight");
            return (Criteria) this;
        }

        public Criteria andEWeightNotEqualTo(Integer value) {
            addCriterion("e_weight <>", value, "eWeight");
            return (Criteria) this;
        }

        public Criteria andEWeightGreaterThan(Integer value) {
            addCriterion("e_weight >", value, "eWeight");
            return (Criteria) this;
        }

        public Criteria andEWeightGreaterThanOrEqualTo(Integer value) {
            addCriterion("e_weight >=", value, "eWeight");
            return (Criteria) this;
        }

        public Criteria andEWeightLessThan(Integer value) {
            addCriterion("e_weight <", value, "eWeight");
            return (Criteria) this;
        }

        public Criteria andEWeightLessThanOrEqualTo(Integer value) {
            addCriterion("e_weight <=", value, "eWeight");
            return (Criteria) this;
        }

        public Criteria andEWeightIn(List<Integer> values) {
            addCriterion("e_weight in", values, "eWeight");
            return (Criteria) this;
        }

        public Criteria andEWeightNotIn(List<Integer> values) {
            addCriterion("e_weight not in", values, "eWeight");
            return (Criteria) this;
        }

        public Criteria andEWeightBetween(Integer value1, Integer value2) {
            addCriterion("e_weight between", value1, value2, "eWeight");
            return (Criteria) this;
        }

        public Criteria andEWeightNotBetween(Integer value1, Integer value2) {
            addCriterion("e_weight not between", value1, value2, "eWeight");
            return (Criteria) this;
        }

        public Criteria andEWargonIsNull() {
            addCriterion("e_wargon is null");
            return (Criteria) this;
        }

        public Criteria andEWargonIsNotNull() {
            addCriterion("e_wargon is not null");
            return (Criteria) this;
        }

        public Criteria andEWargonEqualTo(Integer value) {
            addCriterion("e_wargon =", value, "eWargon");
            return (Criteria) this;
        }

        public Criteria andEWargonNotEqualTo(Integer value) {
            addCriterion("e_wargon <>", value, "eWargon");
            return (Criteria) this;
        }

        public Criteria andEWargonGreaterThan(Integer value) {
            addCriterion("e_wargon >", value, "eWargon");
            return (Criteria) this;
        }

        public Criteria andEWargonGreaterThanOrEqualTo(Integer value) {
            addCriterion("e_wargon >=", value, "eWargon");
            return (Criteria) this;
        }

        public Criteria andEWargonLessThan(Integer value) {
            addCriterion("e_wargon <", value, "eWargon");
            return (Criteria) this;
        }

        public Criteria andEWargonLessThanOrEqualTo(Integer value) {
            addCriterion("e_wargon <=", value, "eWargon");
            return (Criteria) this;
        }

        public Criteria andEWargonIn(List<Integer> values) {
            addCriterion("e_wargon in", values, "eWargon");
            return (Criteria) this;
        }

        public Criteria andEWargonNotIn(List<Integer> values) {
            addCriterion("e_wargon not in", values, "eWargon");
            return (Criteria) this;
        }

        public Criteria andEWargonBetween(Integer value1, Integer value2) {
            addCriterion("e_wargon between", value1, value2, "eWargon");
            return (Criteria) this;
        }

        public Criteria andEWargonNotBetween(Integer value1, Integer value2) {
            addCriterion("e_wargon not between", value1, value2, "eWargon");
            return (Criteria) this;
        }

        public Criteria andETransportIsNull() {
            addCriterion("e_transport is null");
            return (Criteria) this;
        }

        public Criteria andETransportIsNotNull() {
            addCriterion("e_transport is not null");
            return (Criteria) this;
        }

        public Criteria andETransportEqualTo(String value) {
            addCriterion("e_transport =", value, "eTransport");
            return (Criteria) this;
        }

        public Criteria andETransportNotEqualTo(String value) {
            addCriterion("e_transport <>", value, "eTransport");
            return (Criteria) this;
        }

        public Criteria andETransportGreaterThan(String value) {
            addCriterion("e_transport >", value, "eTransport");
            return (Criteria) this;
        }

        public Criteria andETransportGreaterThanOrEqualTo(String value) {
            addCriterion("e_transport >=", value, "eTransport");
            return (Criteria) this;
        }

        public Criteria andETransportLessThan(String value) {
            addCriterion("e_transport <", value, "eTransport");
            return (Criteria) this;
        }

        public Criteria andETransportLessThanOrEqualTo(String value) {
            addCriterion("e_transport <=", value, "eTransport");
            return (Criteria) this;
        }

        public Criteria andETransportLike(String value) {
            addCriterion("e_transport like", value, "eTransport");
            return (Criteria) this;
        }

        public Criteria andETransportNotLike(String value) {
            addCriterion("e_transport not like", value, "eTransport");
            return (Criteria) this;
        }

        public Criteria andETransportIn(List<String> values) {
            addCriterion("e_transport in", values, "eTransport");
            return (Criteria) this;
        }

        public Criteria andETransportNotIn(List<String> values) {
            addCriterion("e_transport not in", values, "eTransport");
            return (Criteria) this;
        }

        public Criteria andETransportBetween(String value1, String value2) {
            addCriterion("e_transport between", value1, value2, "eTransport");
            return (Criteria) this;
        }

        public Criteria andETransportNotBetween(String value1, String value2) {
            addCriterion("e_transport not between", value1, value2, "eTransport");
            return (Criteria) this;
        }

        public Criteria andEUserIsNull() {
            addCriterion("e_user is null");
            return (Criteria) this;
        }

        public Criteria andEUserIsNotNull() {
            addCriterion("e_user is not null");
            return (Criteria) this;
        }

        public Criteria andEUserEqualTo(String value) {
            addCriterion("e_user =", value, "eUser");
            return (Criteria) this;
        }

        public Criteria andEUserNotEqualTo(String value) {
            addCriterion("e_user <>", value, "eUser");
            return (Criteria) this;
        }

        public Criteria andEUserGreaterThan(String value) {
            addCriterion("e_user >", value, "eUser");
            return (Criteria) this;
        }

        public Criteria andEUserGreaterThanOrEqualTo(String value) {
            addCriterion("e_user >=", value, "eUser");
            return (Criteria) this;
        }

        public Criteria andEUserLessThan(String value) {
            addCriterion("e_user <", value, "eUser");
            return (Criteria) this;
        }

        public Criteria andEUserLessThanOrEqualTo(String value) {
            addCriterion("e_user <=", value, "eUser");
            return (Criteria) this;
        }

        public Criteria andEUserLike(String value) {
            addCriterion("e_user like", value, "eUser");
            return (Criteria) this;
        }

        public Criteria andEUserNotLike(String value) {
            addCriterion("e_user not like", value, "eUser");
            return (Criteria) this;
        }

        public Criteria andEUserIn(List<String> values) {
            addCriterion("e_user in", values, "eUser");
            return (Criteria) this;
        }

        public Criteria andEUserNotIn(List<String> values) {
            addCriterion("e_user not in", values, "eUser");
            return (Criteria) this;
        }

        public Criteria andEUserBetween(String value1, String value2) {
            addCriterion("e_user between", value1, value2, "eUser");
            return (Criteria) this;
        }

        public Criteria andEUserNotBetween(String value1, String value2) {
            addCriterion("e_user not between", value1, value2, "eUser");
            return (Criteria) this;
        }

        public Criteria andEOperatorIsNull() {
            addCriterion("e_operator is null");
            return (Criteria) this;
        }

        public Criteria andEOperatorIsNotNull() {
            addCriterion("e_operator is not null");
            return (Criteria) this;
        }

        public Criteria andEOperatorEqualTo(String value) {
            addCriterion("e_operator =", value, "eOperator");
            return (Criteria) this;
        }

        public Criteria andEOperatorNotEqualTo(String value) {
            addCriterion("e_operator <>", value, "eOperator");
            return (Criteria) this;
        }

        public Criteria andEOperatorGreaterThan(String value) {
            addCriterion("e_operator >", value, "eOperator");
            return (Criteria) this;
        }

        public Criteria andEOperatorGreaterThanOrEqualTo(String value) {
            addCriterion("e_operator >=", value, "eOperator");
            return (Criteria) this;
        }

        public Criteria andEOperatorLessThan(String value) {
            addCriterion("e_operator <", value, "eOperator");
            return (Criteria) this;
        }

        public Criteria andEOperatorLessThanOrEqualTo(String value) {
            addCriterion("e_operator <=", value, "eOperator");
            return (Criteria) this;
        }

        public Criteria andEOperatorLike(String value) {
            addCriterion("e_operator like", value, "eOperator");
            return (Criteria) this;
        }

        public Criteria andEOperatorNotLike(String value) {
            addCriterion("e_operator not like", value, "eOperator");
            return (Criteria) this;
        }

        public Criteria andEOperatorIn(List<String> values) {
            addCriterion("e_operator in", values, "eOperator");
            return (Criteria) this;
        }

        public Criteria andEOperatorNotIn(List<String> values) {
            addCriterion("e_operator not in", values, "eOperator");
            return (Criteria) this;
        }

        public Criteria andEOperatorBetween(String value1, String value2) {
            addCriterion("e_operator between", value1, value2, "eOperator");
            return (Criteria) this;
        }

        public Criteria andEOperatorNotBetween(String value1, String value2) {
            addCriterion("e_operator not between", value1, value2, "eOperator");
            return (Criteria) this;
        }

        public Criteria andEInspectorIsNull() {
            addCriterion("e_inspector is null");
            return (Criteria) this;
        }

        public Criteria andEInspectorIsNotNull() {
            addCriterion("e_inspector is not null");
            return (Criteria) this;
        }

        public Criteria andEInspectorEqualTo(String value) {
            addCriterion("e_inspector =", value, "eInspector");
            return (Criteria) this;
        }

        public Criteria andEInspectorNotEqualTo(String value) {
            addCriterion("e_inspector <>", value, "eInspector");
            return (Criteria) this;
        }

        public Criteria andEInspectorGreaterThan(String value) {
            addCriterion("e_inspector >", value, "eInspector");
            return (Criteria) this;
        }

        public Criteria andEInspectorGreaterThanOrEqualTo(String value) {
            addCriterion("e_inspector >=", value, "eInspector");
            return (Criteria) this;
        }

        public Criteria andEInspectorLessThan(String value) {
            addCriterion("e_inspector <", value, "eInspector");
            return (Criteria) this;
        }

        public Criteria andEInspectorLessThanOrEqualTo(String value) {
            addCriterion("e_inspector <=", value, "eInspector");
            return (Criteria) this;
        }

        public Criteria andEInspectorLike(String value) {
            addCriterion("e_inspector like", value, "eInspector");
            return (Criteria) this;
        }

        public Criteria andEInspectorNotLike(String value) {
            addCriterion("e_inspector not like", value, "eInspector");
            return (Criteria) this;
        }

        public Criteria andEInspectorIn(List<String> values) {
            addCriterion("e_inspector in", values, "eInspector");
            return (Criteria) this;
        }

        public Criteria andEInspectorNotIn(List<String> values) {
            addCriterion("e_inspector not in", values, "eInspector");
            return (Criteria) this;
        }

        public Criteria andEInspectorBetween(String value1, String value2) {
            addCriterion("e_inspector between", value1, value2, "eInspector");
            return (Criteria) this;
        }

        public Criteria andEInspectorNotBetween(String value1, String value2) {
            addCriterion("e_inspector not between", value1, value2, "eInspector");
            return (Criteria) this;
        }

        public Criteria andEFlagIsNull() {
            addCriterion("e_flag is null");
            return (Criteria) this;
        }

        public Criteria andEFlagIsNotNull() {
            addCriterion("e_flag is not null");
            return (Criteria) this;
        }

        public Criteria andEFlagEqualTo(Byte value) {
            addCriterion("e_flag =", value, "eFlag");
            return (Criteria) this;
        }

        public Criteria andEFlagNotEqualTo(Byte value) {
            addCriterion("e_flag <>", value, "eFlag");
            return (Criteria) this;
        }

        public Criteria andEFlagGreaterThan(Byte value) {
            addCriterion("e_flag >", value, "eFlag");
            return (Criteria) this;
        }

        public Criteria andEFlagGreaterThanOrEqualTo(Byte value) {
            addCriterion("e_flag >=", value, "eFlag");
            return (Criteria) this;
        }

        public Criteria andEFlagLessThan(Byte value) {
            addCriterion("e_flag <", value, "eFlag");
            return (Criteria) this;
        }

        public Criteria andEFlagLessThanOrEqualTo(Byte value) {
            addCriterion("e_flag <=", value, "eFlag");
            return (Criteria) this;
        }

        public Criteria andEFlagIn(List<Byte> values) {
            addCriterion("e_flag in", values, "eFlag");
            return (Criteria) this;
        }

        public Criteria andEFlagNotIn(List<Byte> values) {
            addCriterion("e_flag not in", values, "eFlag");
            return (Criteria) this;
        }

        public Criteria andEFlagBetween(Byte value1, Byte value2) {
            addCriterion("e_flag between", value1, value2, "eFlag");
            return (Criteria) this;
        }

        public Criteria andEFlagNotBetween(Byte value1, Byte value2) {
            addCriterion("e_flag not between", value1, value2, "eFlag");
            return (Criteria) this;
        }

        public Criteria andEStateIsNull() {
            addCriterion("e_state is null");
            return (Criteria) this;
        }

        public Criteria andEStateIsNotNull() {
            addCriterion("e_state is not null");
            return (Criteria) this;
        }

        public Criteria andEStateEqualTo(Byte value) {
            addCriterion("e_state =", value, "eState");
            return (Criteria) this;
        }

        public Criteria andEStateNotEqualTo(Byte value) {
            addCriterion("e_state <>", value, "eState");
            return (Criteria) this;
        }

        public Criteria andEStateGreaterThan(Byte value) {
            addCriterion("e_state >", value, "eState");
            return (Criteria) this;
        }

        public Criteria andEStateGreaterThanOrEqualTo(Byte value) {
            addCriterion("e_state >=", value, "eState");
            return (Criteria) this;
        }

        public Criteria andEStateLessThan(Byte value) {
            addCriterion("e_state <", value, "eState");
            return (Criteria) this;
        }

        public Criteria andEStateLessThanOrEqualTo(Byte value) {
            addCriterion("e_state <=", value, "eState");
            return (Criteria) this;
        }

        public Criteria andEStateIn(List<Byte> values) {
            addCriterion("e_state in", values, "eState");
            return (Criteria) this;
        }

        public Criteria andEStateNotIn(List<Byte> values) {
            addCriterion("e_state not in", values, "eState");
            return (Criteria) this;
        }

        public Criteria andEStateBetween(Byte value1, Byte value2) {
            addCriterion("e_state between", value1, value2, "eState");
            return (Criteria) this;
        }

        public Criteria andEStateNotBetween(Byte value1, Byte value2) {
            addCriterion("e_state not between", value1, value2, "eState");
            return (Criteria) this;
        }

        public Criteria andEConditionIsNull() {
            addCriterion("e_condition is null");
            return (Criteria) this;
        }

        public Criteria andEConditionIsNotNull() {
            addCriterion("e_condition is not null");
            return (Criteria) this;
        }

        public Criteria andEConditionEqualTo(Byte value) {
            addCriterion("e_condition =", value, "eCondition");
            return (Criteria) this;
        }

        public Criteria andEConditionNotEqualTo(Byte value) {
            addCriterion("e_condition <>", value, "eCondition");
            return (Criteria) this;
        }

        public Criteria andEConditionGreaterThan(Byte value) {
            addCriterion("e_condition >", value, "eCondition");
            return (Criteria) this;
        }

        public Criteria andEConditionGreaterThanOrEqualTo(Byte value) {
            addCriterion("e_condition >=", value, "eCondition");
            return (Criteria) this;
        }

        public Criteria andEConditionLessThan(Byte value) {
            addCriterion("e_condition <", value, "eCondition");
            return (Criteria) this;
        }

        public Criteria andEConditionLessThanOrEqualTo(Byte value) {
            addCriterion("e_condition <=", value, "eCondition");
            return (Criteria) this;
        }

        public Criteria andEConditionIn(List<Byte> values) {
            addCriterion("e_condition in", values, "eCondition");
            return (Criteria) this;
        }

        public Criteria andEConditionNotIn(List<Byte> values) {
            addCriterion("e_condition not in", values, "eCondition");
            return (Criteria) this;
        }

        public Criteria andEConditionBetween(Byte value1, Byte value2) {
            addCriterion("e_condition between", value1, value2, "eCondition");
            return (Criteria) this;
        }

        public Criteria andEConditionNotBetween(Byte value1, Byte value2) {
            addCriterion("e_condition not between", value1, value2, "eCondition");
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