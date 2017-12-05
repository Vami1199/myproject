package com.xj.domain.trainsplan;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class PAddnewcustomerQuery {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Integer pageNo = 1;

    protected Integer startRow;

    protected Integer pageSize = 10;

    protected String fields;

    public PAddnewcustomerQuery() {
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

        public Criteria andAwcIdIsNull() {
            addCriterion("awc_id is null");
            return (Criteria) this;
        }

        public Criteria andAwcIdIsNotNull() {
            addCriterion("awc_id is not null");
            return (Criteria) this;
        }

        public Criteria andAwcIdEqualTo(String value) {
            addCriterion("awc_id =", value, "awcId");
            return (Criteria) this;
        }

        public Criteria andAwcIdNotEqualTo(String value) {
            addCriterion("awc_id <>", value, "awcId");
            return (Criteria) this;
        }

        public Criteria andAwcIdGreaterThan(String value) {
            addCriterion("awc_id >", value, "awcId");
            return (Criteria) this;
        }

        public Criteria andAwcIdGreaterThanOrEqualTo(String value) {
            addCriterion("awc_id >=", value, "awcId");
            return (Criteria) this;
        }

        public Criteria andAwcIdLessThan(String value) {
            addCriterion("awc_id <", value, "awcId");
            return (Criteria) this;
        }

        public Criteria andAwcIdLessThanOrEqualTo(String value) {
            addCriterion("awc_id <=", value, "awcId");
            return (Criteria) this;
        }

        public Criteria andAwcIdLike(String value) {
            addCriterion("awc_id like", value, "awcId");
            return (Criteria) this;
        }

        public Criteria andAwcIdNotLike(String value) {
            addCriterion("awc_id not like", value, "awcId");
            return (Criteria) this;
        }

        public Criteria andAwcIdIn(List<String> values) {
            addCriterion("awc_id in", values, "awcId");
            return (Criteria) this;
        }

        public Criteria andAwcIdNotIn(List<String> values) {
            addCriterion("awc_id not in", values, "awcId");
            return (Criteria) this;
        }

        public Criteria andAwcIdBetween(String value1, String value2) {
            addCriterion("awc_id between", value1, value2, "awcId");
            return (Criteria) this;
        }

        public Criteria andAwcIdNotBetween(String value1, String value2) {
            addCriterion("awc_id not between", value1, value2, "awcId");
            return (Criteria) this;
        }

        public Criteria andAwcContractidIsNull() {
            addCriterion("awc_contractid is null");
            return (Criteria) this;
        }

        public Criteria andAwcContractidIsNotNull() {
            addCriterion("awc_contractid is not null");
            return (Criteria) this;
        }

        public Criteria andAwcContractidEqualTo(String value) {
            addCriterion("awc_contractid =", value, "awcContractid");
            return (Criteria) this;
        }

        public Criteria andAwcContractidNotEqualTo(String value) {
            addCriterion("awc_contractid <>", value, "awcContractid");
            return (Criteria) this;
        }

        public Criteria andAwcContractidGreaterThan(String value) {
            addCriterion("awc_contractid >", value, "awcContractid");
            return (Criteria) this;
        }

        public Criteria andAwcContractidGreaterThanOrEqualTo(String value) {
            addCriterion("awc_contractid >=", value, "awcContractid");
            return (Criteria) this;
        }

        public Criteria andAwcContractidLessThan(String value) {
            addCriterion("awc_contractid <", value, "awcContractid");
            return (Criteria) this;
        }

        public Criteria andAwcContractidLessThanOrEqualTo(String value) {
            addCriterion("awc_contractid <=", value, "awcContractid");
            return (Criteria) this;
        }

        public Criteria andAwcContractidLike(String value) {
            addCriterion("awc_contractid like", value, "awcContractid");
            return (Criteria) this;
        }

        public Criteria andAwcContractidNotLike(String value) {
            addCriterion("awc_contractid not like", value, "awcContractid");
            return (Criteria) this;
        }

        public Criteria andAwcContractidIn(List<String> values) {
            addCriterion("awc_contractid in", values, "awcContractid");
            return (Criteria) this;
        }

        public Criteria andAwcContractidNotIn(List<String> values) {
            addCriterion("awc_contractid not in", values, "awcContractid");
            return (Criteria) this;
        }

        public Criteria andAwcContractidBetween(String value1, String value2) {
            addCriterion("awc_contractid between", value1, value2, "awcContractid");
            return (Criteria) this;
        }

        public Criteria andAwcContractidNotBetween(String value1, String value2) {
            addCriterion("awc_contractid not between", value1, value2, "awcContractid");
            return (Criteria) this;
        }

        public Criteria andAwcArriveIsNull() {
            addCriterion("awc_arrive is null");
            return (Criteria) this;
        }

        public Criteria andAwcArriveIsNotNull() {
            addCriterion("awc_arrive is not null");
            return (Criteria) this;
        }

        public Criteria andAwcArriveEqualTo(String value) {
            addCriterion("awc_arrive =", value, "awcArrive");
            return (Criteria) this;
        }

        public Criteria andAwcArriveNotEqualTo(String value) {
            addCriterion("awc_arrive <>", value, "awcArrive");
            return (Criteria) this;
        }

        public Criteria andAwcArriveGreaterThan(String value) {
            addCriterion("awc_arrive >", value, "awcArrive");
            return (Criteria) this;
        }

        public Criteria andAwcArriveGreaterThanOrEqualTo(String value) {
            addCriterion("awc_arrive >=", value, "awcArrive");
            return (Criteria) this;
        }

        public Criteria andAwcArriveLessThan(String value) {
            addCriterion("awc_arrive <", value, "awcArrive");
            return (Criteria) this;
        }

        public Criteria andAwcArriveLessThanOrEqualTo(String value) {
            addCriterion("awc_arrive <=", value, "awcArrive");
            return (Criteria) this;
        }

        public Criteria andAwcArriveLike(String value) {
            addCriterion("awc_arrive like", value, "awcArrive");
            return (Criteria) this;
        }

        public Criteria andAwcArriveNotLike(String value) {
            addCriterion("awc_arrive not like", value, "awcArrive");
            return (Criteria) this;
        }

        public Criteria andAwcArriveIn(List<String> values) {
            addCriterion("awc_arrive in", values, "awcArrive");
            return (Criteria) this;
        }

        public Criteria andAwcArriveNotIn(List<String> values) {
            addCriterion("awc_arrive not in", values, "awcArrive");
            return (Criteria) this;
        }

        public Criteria andAwcArriveBetween(String value1, String value2) {
            addCriterion("awc_arrive between", value1, value2, "awcArrive");
            return (Criteria) this;
        }

        public Criteria andAwcArriveNotBetween(String value1, String value2) {
            addCriterion("awc_arrive not between", value1, value2, "awcArrive");
            return (Criteria) this;
        }

        public Criteria andAwcPaycompanyIsNull() {
            addCriterion("awc_paycompany is null");
            return (Criteria) this;
        }

        public Criteria andAwcPaycompanyIsNotNull() {
            addCriterion("awc_paycompany is not null");
            return (Criteria) this;
        }

        public Criteria andAwcPaycompanyEqualTo(String value) {
            addCriterion("awc_paycompany =", value, "awcPaycompany");
            return (Criteria) this;
        }

        public Criteria andAwcPaycompanyNotEqualTo(String value) {
            addCriterion("awc_paycompany <>", value, "awcPaycompany");
            return (Criteria) this;
        }

        public Criteria andAwcPaycompanyGreaterThan(String value) {
            addCriterion("awc_paycompany >", value, "awcPaycompany");
            return (Criteria) this;
        }

        public Criteria andAwcPaycompanyGreaterThanOrEqualTo(String value) {
            addCriterion("awc_paycompany >=", value, "awcPaycompany");
            return (Criteria) this;
        }

        public Criteria andAwcPaycompanyLessThan(String value) {
            addCriterion("awc_paycompany <", value, "awcPaycompany");
            return (Criteria) this;
        }

        public Criteria andAwcPaycompanyLessThanOrEqualTo(String value) {
            addCriterion("awc_paycompany <=", value, "awcPaycompany");
            return (Criteria) this;
        }

        public Criteria andAwcPaycompanyLike(String value) {
            addCriterion("awc_paycompany like", value, "awcPaycompany");
            return (Criteria) this;
        }

        public Criteria andAwcPaycompanyNotLike(String value) {
            addCriterion("awc_paycompany not like", value, "awcPaycompany");
            return (Criteria) this;
        }

        public Criteria andAwcPaycompanyIn(List<String> values) {
            addCriterion("awc_paycompany in", values, "awcPaycompany");
            return (Criteria) this;
        }

        public Criteria andAwcPaycompanyNotIn(List<String> values) {
            addCriterion("awc_paycompany not in", values, "awcPaycompany");
            return (Criteria) this;
        }

        public Criteria andAwcPaycompanyBetween(String value1, String value2) {
            addCriterion("awc_paycompany between", value1, value2, "awcPaycompany");
            return (Criteria) this;
        }

        public Criteria andAwcPaycompanyNotBetween(String value1, String value2) {
            addCriterion("awc_paycompany not between", value1, value2, "awcPaycompany");
            return (Criteria) this;
        }

        public Criteria andAwcTakecompanyidIsNull() {
            addCriterion("awc_takecompanyid is null");
            return (Criteria) this;
        }

        public Criteria andAwcTakecompanyidIsNotNull() {
            addCriterion("awc_takecompanyid is not null");
            return (Criteria) this;
        }

        public Criteria andAwcTakecompanyidEqualTo(Long value) {
            addCriterion("awc_takecompanyid =", value, "awcTakecompanyid");
            return (Criteria) this;
        }

        public Criteria andAwcTakecompanyidNotEqualTo(Long value) {
            addCriterion("awc_takecompanyid <>", value, "awcTakecompanyid");
            return (Criteria) this;
        }

        public Criteria andAwcTakecompanyidGreaterThan(Long value) {
            addCriterion("awc_takecompanyid >", value, "awcTakecompanyid");
            return (Criteria) this;
        }

        public Criteria andAwcTakecompanyidGreaterThanOrEqualTo(Long value) {
            addCriterion("awc_takecompanyid >=", value, "awcTakecompanyid");
            return (Criteria) this;
        }

        public Criteria andAwcTakecompanyidLessThan(Long value) {
            addCriterion("awc_takecompanyid <", value, "awcTakecompanyid");
            return (Criteria) this;
        }

        public Criteria andAwcTakecompanyidLessThanOrEqualTo(Long value) {
            addCriterion("awc_takecompanyid <=", value, "awcTakecompanyid");
            return (Criteria) this;
        }

        public Criteria andAwcTakecompanyidIn(List<Long> values) {
            addCriterion("awc_takecompanyid in", values, "awcTakecompanyid");
            return (Criteria) this;
        }

        public Criteria andAwcTakecompanyidNotIn(List<Long> values) {
            addCriterion("awc_takecompanyid not in", values, "awcTakecompanyid");
            return (Criteria) this;
        }

        public Criteria andAwcTakecompanyidBetween(Long value1, Long value2) {
            addCriterion("awc_takecompanyid between", value1, value2, "awcTakecompanyid");
            return (Criteria) this;
        }

        public Criteria andAwcTakecompanyidNotBetween(Long value1, Long value2) {
            addCriterion("awc_takecompanyid not between", value1, value2, "awcTakecompanyid");
            return (Criteria) this;
        }

        public Criteria andAwcTakecompanyIsNull() {
            addCriterion("awc_takecompany is null");
            return (Criteria) this;
        }

        public Criteria andAwcTakecompanyIsNotNull() {
            addCriterion("awc_takecompany is not null");
            return (Criteria) this;
        }

        public Criteria andAwcTakecompanyEqualTo(String value) {
            addCriterion("awc_takecompany =", value, "awcTakecompany");
            return (Criteria) this;
        }

        public Criteria andAwcTakecompanyNotEqualTo(String value) {
            addCriterion("awc_takecompany <>", value, "awcTakecompany");
            return (Criteria) this;
        }

        public Criteria andAwcTakecompanyGreaterThan(String value) {
            addCriterion("awc_takecompany >", value, "awcTakecompany");
            return (Criteria) this;
        }

        public Criteria andAwcTakecompanyGreaterThanOrEqualTo(String value) {
            addCriterion("awc_takecompany >=", value, "awcTakecompany");
            return (Criteria) this;
        }

        public Criteria andAwcTakecompanyLessThan(String value) {
            addCriterion("awc_takecompany <", value, "awcTakecompany");
            return (Criteria) this;
        }

        public Criteria andAwcTakecompanyLessThanOrEqualTo(String value) {
            addCriterion("awc_takecompany <=", value, "awcTakecompany");
            return (Criteria) this;
        }

        public Criteria andAwcTakecompanyLike(String value) {
            addCriterion("awc_takecompany like", value, "awcTakecompany");
            return (Criteria) this;
        }

        public Criteria andAwcTakecompanyNotLike(String value) {
            addCriterion("awc_takecompany not like", value, "awcTakecompany");
            return (Criteria) this;
        }

        public Criteria andAwcTakecompanyIn(List<String> values) {
            addCriterion("awc_takecompany in", values, "awcTakecompany");
            return (Criteria) this;
        }

        public Criteria andAwcTakecompanyNotIn(List<String> values) {
            addCriterion("awc_takecompany not in", values, "awcTakecompany");
            return (Criteria) this;
        }

        public Criteria andAwcTakecompanyBetween(String value1, String value2) {
            addCriterion("awc_takecompany between", value1, value2, "awcTakecompany");
            return (Criteria) this;
        }

        public Criteria andAwcTakecompanyNotBetween(String value1, String value2) {
            addCriterion("awc_takecompany not between", value1, value2, "awcTakecompany");
            return (Criteria) this;
        }

        public Criteria andAwcCustomerflagIsNull() {
            addCriterion("awc_customerflag is null");
            return (Criteria) this;
        }

        public Criteria andAwcCustomerflagIsNotNull() {
            addCriterion("awc_customerflag is not null");
            return (Criteria) this;
        }

        public Criteria andAwcCustomerflagEqualTo(Byte value) {
            addCriterion("awc_customerflag =", value, "awcCustomerflag");
            return (Criteria) this;
        }

        public Criteria andAwcCustomerflagNotEqualTo(Byte value) {
            addCriterion("awc_customerflag <>", value, "awcCustomerflag");
            return (Criteria) this;
        }

        public Criteria andAwcCustomerflagGreaterThan(Byte value) {
            addCriterion("awc_customerflag >", value, "awcCustomerflag");
            return (Criteria) this;
        }

        public Criteria andAwcCustomerflagGreaterThanOrEqualTo(Byte value) {
            addCriterion("awc_customerflag >=", value, "awcCustomerflag");
            return (Criteria) this;
        }

        public Criteria andAwcCustomerflagLessThan(Byte value) {
            addCriterion("awc_customerflag <", value, "awcCustomerflag");
            return (Criteria) this;
        }

        public Criteria andAwcCustomerflagLessThanOrEqualTo(Byte value) {
            addCriterion("awc_customerflag <=", value, "awcCustomerflag");
            return (Criteria) this;
        }

        public Criteria andAwcCustomerflagIn(List<Byte> values) {
            addCriterion("awc_customerflag in", values, "awcCustomerflag");
            return (Criteria) this;
        }

        public Criteria andAwcCustomerflagNotIn(List<Byte> values) {
            addCriterion("awc_customerflag not in", values, "awcCustomerflag");
            return (Criteria) this;
        }

        public Criteria andAwcCustomerflagBetween(Byte value1, Byte value2) {
            addCriterion("awc_customerflag between", value1, value2, "awcCustomerflag");
            return (Criteria) this;
        }

        public Criteria andAwcCustomerflagNotBetween(Byte value1, Byte value2) {
            addCriterion("awc_customerflag not between", value1, value2, "awcCustomerflag");
            return (Criteria) this;
        }

        public Criteria andAwcStarttimeIsNull() {
            addCriterion("awc_starttime is null");
            return (Criteria) this;
        }

        public Criteria andAwcStarttimeIsNotNull() {
            addCriterion("awc_starttime is not null");
            return (Criteria) this;
        }

        public Criteria andAwcStarttimeEqualTo(Date value) {
            addCriterionForJDBCDate("awc_starttime =", value, "awcStarttime");
            return (Criteria) this;
        }

        public Criteria andAwcStarttimeNotEqualTo(Date value) {
            addCriterionForJDBCDate("awc_starttime <>", value, "awcStarttime");
            return (Criteria) this;
        }

        public Criteria andAwcStarttimeGreaterThan(Date value) {
            addCriterionForJDBCDate("awc_starttime >", value, "awcStarttime");
            return (Criteria) this;
        }

        public Criteria andAwcStarttimeGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("awc_starttime >=", value, "awcStarttime");
            return (Criteria) this;
        }

        public Criteria andAwcStarttimeLessThan(Date value) {
            addCriterionForJDBCDate("awc_starttime <", value, "awcStarttime");
            return (Criteria) this;
        }

        public Criteria andAwcStarttimeLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("awc_starttime <=", value, "awcStarttime");
            return (Criteria) this;
        }

        public Criteria andAwcStarttimeIn(List<Date> values) {
            addCriterionForJDBCDate("awc_starttime in", values, "awcStarttime");
            return (Criteria) this;
        }

        public Criteria andAwcStarttimeNotIn(List<Date> values) {
            addCriterionForJDBCDate("awc_starttime not in", values, "awcStarttime");
            return (Criteria) this;
        }

        public Criteria andAwcStarttimeBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("awc_starttime between", value1, value2, "awcStarttime");
            return (Criteria) this;
        }

        public Criteria andAwcStarttimeNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("awc_starttime not between", value1, value2, "awcStarttime");
            return (Criteria) this;
        }

        public Criteria andAwcEndtimeIsNull() {
            addCriterion("awc_endtime is null");
            return (Criteria) this;
        }

        public Criteria andAwcEndtimeIsNotNull() {
            addCriterion("awc_endtime is not null");
            return (Criteria) this;
        }

        public Criteria andAwcEndtimeEqualTo(Date value) {
            addCriterionForJDBCDate("awc_endtime =", value, "awcEndtime");
            return (Criteria) this;
        }

        public Criteria andAwcEndtimeNotEqualTo(Date value) {
            addCriterionForJDBCDate("awc_endtime <>", value, "awcEndtime");
            return (Criteria) this;
        }

        public Criteria andAwcEndtimeGreaterThan(Date value) {
            addCriterionForJDBCDate("awc_endtime >", value, "awcEndtime");
            return (Criteria) this;
        }

        public Criteria andAwcEndtimeGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("awc_endtime >=", value, "awcEndtime");
            return (Criteria) this;
        }

        public Criteria andAwcEndtimeLessThan(Date value) {
            addCriterionForJDBCDate("awc_endtime <", value, "awcEndtime");
            return (Criteria) this;
        }

        public Criteria andAwcEndtimeLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("awc_endtime <=", value, "awcEndtime");
            return (Criteria) this;
        }

        public Criteria andAwcEndtimeIn(List<Date> values) {
            addCriterionForJDBCDate("awc_endtime in", values, "awcEndtime");
            return (Criteria) this;
        }

        public Criteria andAwcEndtimeNotIn(List<Date> values) {
            addCriterionForJDBCDate("awc_endtime not in", values, "awcEndtime");
            return (Criteria) this;
        }

        public Criteria andAwcEndtimeBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("awc_endtime between", value1, value2, "awcEndtime");
            return (Criteria) this;
        }

        public Criteria andAwcEndtimeNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("awc_endtime not between", value1, value2, "awcEndtime");
            return (Criteria) this;
        }

        public Criteria andAwcStartIsNull() {
            addCriterion("awc_start is null");
            return (Criteria) this;
        }

        public Criteria andAwcStartIsNotNull() {
            addCriterion("awc_start is not null");
            return (Criteria) this;
        }

        public Criteria andAwcStartEqualTo(String value) {
            addCriterion("awc_start =", value, "awcStart");
            return (Criteria) this;
        }

        public Criteria andAwcStartNotEqualTo(String value) {
            addCriterion("awc_start <>", value, "awcStart");
            return (Criteria) this;
        }

        public Criteria andAwcStartGreaterThan(String value) {
            addCriterion("awc_start >", value, "awcStart");
            return (Criteria) this;
        }

        public Criteria andAwcStartGreaterThanOrEqualTo(String value) {
            addCriterion("awc_start >=", value, "awcStart");
            return (Criteria) this;
        }

        public Criteria andAwcStartLessThan(String value) {
            addCriterion("awc_start <", value, "awcStart");
            return (Criteria) this;
        }

        public Criteria andAwcStartLessThanOrEqualTo(String value) {
            addCriterion("awc_start <=", value, "awcStart");
            return (Criteria) this;
        }

        public Criteria andAwcStartLike(String value) {
            addCriterion("awc_start like", value, "awcStart");
            return (Criteria) this;
        }

        public Criteria andAwcStartNotLike(String value) {
            addCriterion("awc_start not like", value, "awcStart");
            return (Criteria) this;
        }

        public Criteria andAwcStartIn(List<String> values) {
            addCriterion("awc_start in", values, "awcStart");
            return (Criteria) this;
        }

        public Criteria andAwcStartNotIn(List<String> values) {
            addCriterion("awc_start not in", values, "awcStart");
            return (Criteria) this;
        }

        public Criteria andAwcStartBetween(String value1, String value2) {
            addCriterion("awc_start between", value1, value2, "awcStart");
            return (Criteria) this;
        }

        public Criteria andAwcStartNotBetween(String value1, String value2) {
            addCriterion("awc_start not between", value1, value2, "awcStart");
            return (Criteria) this;
        }

        public Criteria andAwcEndIsNull() {
            addCriterion("awc_end is null");
            return (Criteria) this;
        }

        public Criteria andAwcEndIsNotNull() {
            addCriterion("awc_end is not null");
            return (Criteria) this;
        }

        public Criteria andAwcEndEqualTo(String value) {
            addCriterion("awc_end =", value, "awcEnd");
            return (Criteria) this;
        }

        public Criteria andAwcEndNotEqualTo(String value) {
            addCriterion("awc_end <>", value, "awcEnd");
            return (Criteria) this;
        }

        public Criteria andAwcEndGreaterThan(String value) {
            addCriterion("awc_end >", value, "awcEnd");
            return (Criteria) this;
        }

        public Criteria andAwcEndGreaterThanOrEqualTo(String value) {
            addCriterion("awc_end >=", value, "awcEnd");
            return (Criteria) this;
        }

        public Criteria andAwcEndLessThan(String value) {
            addCriterion("awc_end <", value, "awcEnd");
            return (Criteria) this;
        }

        public Criteria andAwcEndLessThanOrEqualTo(String value) {
            addCriterion("awc_end <=", value, "awcEnd");
            return (Criteria) this;
        }

        public Criteria andAwcEndLike(String value) {
            addCriterion("awc_end like", value, "awcEnd");
            return (Criteria) this;
        }

        public Criteria andAwcEndNotLike(String value) {
            addCriterion("awc_end not like", value, "awcEnd");
            return (Criteria) this;
        }

        public Criteria andAwcEndIn(List<String> values) {
            addCriterion("awc_end in", values, "awcEnd");
            return (Criteria) this;
        }

        public Criteria andAwcEndNotIn(List<String> values) {
            addCriterion("awc_end not in", values, "awcEnd");
            return (Criteria) this;
        }

        public Criteria andAwcEndBetween(String value1, String value2) {
            addCriterion("awc_end between", value1, value2, "awcEnd");
            return (Criteria) this;
        }

        public Criteria andAwcEndNotBetween(String value1, String value2) {
            addCriterion("awc_end not between", value1, value2, "awcEnd");
            return (Criteria) this;
        }

        public Criteria andAwcProvinceIsNull() {
            addCriterion("awc_province is null");
            return (Criteria) this;
        }

        public Criteria andAwcProvinceIsNotNull() {
            addCriterion("awc_province is not null");
            return (Criteria) this;
        }

        public Criteria andAwcProvinceEqualTo(String value) {
            addCriterion("awc_province =", value, "awcProvince");
            return (Criteria) this;
        }

        public Criteria andAwcProvinceNotEqualTo(String value) {
            addCriterion("awc_province <>", value, "awcProvince");
            return (Criteria) this;
        }

        public Criteria andAwcProvinceGreaterThan(String value) {
            addCriterion("awc_province >", value, "awcProvince");
            return (Criteria) this;
        }

        public Criteria andAwcProvinceGreaterThanOrEqualTo(String value) {
            addCriterion("awc_province >=", value, "awcProvince");
            return (Criteria) this;
        }

        public Criteria andAwcProvinceLessThan(String value) {
            addCriterion("awc_province <", value, "awcProvince");
            return (Criteria) this;
        }

        public Criteria andAwcProvinceLessThanOrEqualTo(String value) {
            addCriterion("awc_province <=", value, "awcProvince");
            return (Criteria) this;
        }

        public Criteria andAwcProvinceLike(String value) {
            addCriterion("awc_province like", value, "awcProvince");
            return (Criteria) this;
        }

        public Criteria andAwcProvinceNotLike(String value) {
            addCriterion("awc_province not like", value, "awcProvince");
            return (Criteria) this;
        }

        public Criteria andAwcProvinceIn(List<String> values) {
            addCriterion("awc_province in", values, "awcProvince");
            return (Criteria) this;
        }

        public Criteria andAwcProvinceNotIn(List<String> values) {
            addCriterion("awc_province not in", values, "awcProvince");
            return (Criteria) this;
        }

        public Criteria andAwcProvinceBetween(String value1, String value2) {
            addCriterion("awc_province between", value1, value2, "awcProvince");
            return (Criteria) this;
        }

        public Criteria andAwcProvinceNotBetween(String value1, String value2) {
            addCriterion("awc_province not between", value1, value2, "awcProvince");
            return (Criteria) this;
        }

        public Criteria andAwcIndustryIsNull() {
            addCriterion("awc_industry is null");
            return (Criteria) this;
        }

        public Criteria andAwcIndustryIsNotNull() {
            addCriterion("awc_industry is not null");
            return (Criteria) this;
        }

        public Criteria andAwcIndustryEqualTo(String value) {
            addCriterion("awc_industry =", value, "awcIndustry");
            return (Criteria) this;
        }

        public Criteria andAwcIndustryNotEqualTo(String value) {
            addCriterion("awc_industry <>", value, "awcIndustry");
            return (Criteria) this;
        }

        public Criteria andAwcIndustryGreaterThan(String value) {
            addCriterion("awc_industry >", value, "awcIndustry");
            return (Criteria) this;
        }

        public Criteria andAwcIndustryGreaterThanOrEqualTo(String value) {
            addCriterion("awc_industry >=", value, "awcIndustry");
            return (Criteria) this;
        }

        public Criteria andAwcIndustryLessThan(String value) {
            addCriterion("awc_industry <", value, "awcIndustry");
            return (Criteria) this;
        }

        public Criteria andAwcIndustryLessThanOrEqualTo(String value) {
            addCriterion("awc_industry <=", value, "awcIndustry");
            return (Criteria) this;
        }

        public Criteria andAwcIndustryLike(String value) {
            addCriterion("awc_industry like", value, "awcIndustry");
            return (Criteria) this;
        }

        public Criteria andAwcIndustryNotLike(String value) {
            addCriterion("awc_industry not like", value, "awcIndustry");
            return (Criteria) this;
        }

        public Criteria andAwcIndustryIn(List<String> values) {
            addCriterion("awc_industry in", values, "awcIndustry");
            return (Criteria) this;
        }

        public Criteria andAwcIndustryNotIn(List<String> values) {
            addCriterion("awc_industry not in", values, "awcIndustry");
            return (Criteria) this;
        }

        public Criteria andAwcIndustryBetween(String value1, String value2) {
            addCriterion("awc_industry between", value1, value2, "awcIndustry");
            return (Criteria) this;
        }

        public Criteria andAwcIndustryNotBetween(String value1, String value2) {
            addCriterion("awc_industry not between", value1, value2, "awcIndustry");
            return (Criteria) this;
        }

        public Criteria andAwcProductIsNull() {
            addCriterion("awc_product is null");
            return (Criteria) this;
        }

        public Criteria andAwcProductIsNotNull() {
            addCriterion("awc_product is not null");
            return (Criteria) this;
        }

        public Criteria andAwcProductEqualTo(String value) {
            addCriterion("awc_product =", value, "awcProduct");
            return (Criteria) this;
        }

        public Criteria andAwcProductNotEqualTo(String value) {
            addCriterion("awc_product <>", value, "awcProduct");
            return (Criteria) this;
        }

        public Criteria andAwcProductGreaterThan(String value) {
            addCriterion("awc_product >", value, "awcProduct");
            return (Criteria) this;
        }

        public Criteria andAwcProductGreaterThanOrEqualTo(String value) {
            addCriterion("awc_product >=", value, "awcProduct");
            return (Criteria) this;
        }

        public Criteria andAwcProductLessThan(String value) {
            addCriterion("awc_product <", value, "awcProduct");
            return (Criteria) this;
        }

        public Criteria andAwcProductLessThanOrEqualTo(String value) {
            addCriterion("awc_product <=", value, "awcProduct");
            return (Criteria) this;
        }

        public Criteria andAwcProductLike(String value) {
            addCriterion("awc_product like", value, "awcProduct");
            return (Criteria) this;
        }

        public Criteria andAwcProductNotLike(String value) {
            addCriterion("awc_product not like", value, "awcProduct");
            return (Criteria) this;
        }

        public Criteria andAwcProductIn(List<String> values) {
            addCriterion("awc_product in", values, "awcProduct");
            return (Criteria) this;
        }

        public Criteria andAwcProductNotIn(List<String> values) {
            addCriterion("awc_product not in", values, "awcProduct");
            return (Criteria) this;
        }

        public Criteria andAwcProductBetween(String value1, String value2) {
            addCriterion("awc_product between", value1, value2, "awcProduct");
            return (Criteria) this;
        }

        public Criteria andAwcProductNotBetween(String value1, String value2) {
            addCriterion("awc_product not between", value1, value2, "awcProduct");
            return (Criteria) this;
        }

        public Criteria andAwcTrainnumberIsNull() {
            addCriterion("awc_trainnumber is null");
            return (Criteria) this;
        }

        public Criteria andAwcTrainnumberIsNotNull() {
            addCriterion("awc_trainnumber is not null");
            return (Criteria) this;
        }

        public Criteria andAwcTrainnumberEqualTo(Integer value) {
            addCriterion("awc_trainnumber =", value, "awcTrainnumber");
            return (Criteria) this;
        }

        public Criteria andAwcTrainnumberNotEqualTo(Integer value) {
            addCriterion("awc_trainnumber <>", value, "awcTrainnumber");
            return (Criteria) this;
        }

        public Criteria andAwcTrainnumberGreaterThan(Integer value) {
            addCriterion("awc_trainnumber >", value, "awcTrainnumber");
            return (Criteria) this;
        }

        public Criteria andAwcTrainnumberGreaterThanOrEqualTo(Integer value) {
            addCriterion("awc_trainnumber >=", value, "awcTrainnumber");
            return (Criteria) this;
        }

        public Criteria andAwcTrainnumberLessThan(Integer value) {
            addCriterion("awc_trainnumber <", value, "awcTrainnumber");
            return (Criteria) this;
        }

        public Criteria andAwcTrainnumberLessThanOrEqualTo(Integer value) {
            addCriterion("awc_trainnumber <=", value, "awcTrainnumber");
            return (Criteria) this;
        }

        public Criteria andAwcTrainnumberIn(List<Integer> values) {
            addCriterion("awc_trainnumber in", values, "awcTrainnumber");
            return (Criteria) this;
        }

        public Criteria andAwcTrainnumberNotIn(List<Integer> values) {
            addCriterion("awc_trainnumber not in", values, "awcTrainnumber");
            return (Criteria) this;
        }

        public Criteria andAwcTrainnumberBetween(Integer value1, Integer value2) {
            addCriterion("awc_trainnumber between", value1, value2, "awcTrainnumber");
            return (Criteria) this;
        }

        public Criteria andAwcTrainnumberNotBetween(Integer value1, Integer value2) {
            addCriterion("awc_trainnumber not between", value1, value2, "awcTrainnumber");
            return (Criteria) this;
        }

        public Criteria andAwcWeightIsNull() {
            addCriterion("awc_weight is null");
            return (Criteria) this;
        }

        public Criteria andAwcWeightIsNotNull() {
            addCriterion("awc_weight is not null");
            return (Criteria) this;
        }

        public Criteria andAwcWeightEqualTo(Long value) {
            addCriterion("awc_weight =", value, "awcWeight");
            return (Criteria) this;
        }

        public Criteria andAwcWeightNotEqualTo(Long value) {
            addCriterion("awc_weight <>", value, "awcWeight");
            return (Criteria) this;
        }

        public Criteria andAwcWeightGreaterThan(Long value) {
            addCriterion("awc_weight >", value, "awcWeight");
            return (Criteria) this;
        }

        public Criteria andAwcWeightGreaterThanOrEqualTo(Long value) {
            addCriterion("awc_weight >=", value, "awcWeight");
            return (Criteria) this;
        }

        public Criteria andAwcWeightLessThan(Long value) {
            addCriterion("awc_weight <", value, "awcWeight");
            return (Criteria) this;
        }

        public Criteria andAwcWeightLessThanOrEqualTo(Long value) {
            addCriterion("awc_weight <=", value, "awcWeight");
            return (Criteria) this;
        }

        public Criteria andAwcWeightIn(List<Long> values) {
            addCriterion("awc_weight in", values, "awcWeight");
            return (Criteria) this;
        }

        public Criteria andAwcWeightNotIn(List<Long> values) {
            addCriterion("awc_weight not in", values, "awcWeight");
            return (Criteria) this;
        }

        public Criteria andAwcWeightBetween(Long value1, Long value2) {
            addCriterion("awc_weight between", value1, value2, "awcWeight");
            return (Criteria) this;
        }

        public Criteria andAwcWeightNotBetween(Long value1, Long value2) {
            addCriterion("awc_weight not between", value1, value2, "awcWeight");
            return (Criteria) this;
        }

        public Criteria andAwcRnumberIsNull() {
            addCriterion("awc_rnumber is null");
            return (Criteria) this;
        }

        public Criteria andAwcRnumberIsNotNull() {
            addCriterion("awc_rnumber is not null");
            return (Criteria) this;
        }

        public Criteria andAwcRnumberEqualTo(Integer value) {
            addCriterion("awc_rnumber =", value, "awcRnumber");
            return (Criteria) this;
        }

        public Criteria andAwcRnumberNotEqualTo(Integer value) {
            addCriterion("awc_rnumber <>", value, "awcRnumber");
            return (Criteria) this;
        }

        public Criteria andAwcRnumberGreaterThan(Integer value) {
            addCriterion("awc_rnumber >", value, "awcRnumber");
            return (Criteria) this;
        }

        public Criteria andAwcRnumberGreaterThanOrEqualTo(Integer value) {
            addCriterion("awc_rnumber >=", value, "awcRnumber");
            return (Criteria) this;
        }

        public Criteria andAwcRnumberLessThan(Integer value) {
            addCriterion("awc_rnumber <", value, "awcRnumber");
            return (Criteria) this;
        }

        public Criteria andAwcRnumberLessThanOrEqualTo(Integer value) {
            addCriterion("awc_rnumber <=", value, "awcRnumber");
            return (Criteria) this;
        }

        public Criteria andAwcRnumberIn(List<Integer> values) {
            addCriterion("awc_rnumber in", values, "awcRnumber");
            return (Criteria) this;
        }

        public Criteria andAwcRnumberNotIn(List<Integer> values) {
            addCriterion("awc_rnumber not in", values, "awcRnumber");
            return (Criteria) this;
        }

        public Criteria andAwcRnumberBetween(Integer value1, Integer value2) {
            addCriterion("awc_rnumber between", value1, value2, "awcRnumber");
            return (Criteria) this;
        }

        public Criteria andAwcRnumberNotBetween(Integer value1, Integer value2) {
            addCriterion("awc_rnumber not between", value1, value2, "awcRnumber");
            return (Criteria) this;
        }

        public Criteria andAwcRweightIsNull() {
            addCriterion("awc_rweight is null");
            return (Criteria) this;
        }

        public Criteria andAwcRweightIsNotNull() {
            addCriterion("awc_rweight is not null");
            return (Criteria) this;
        }

        public Criteria andAwcRweightEqualTo(Long value) {
            addCriterion("awc_rweight =", value, "awcRweight");
            return (Criteria) this;
        }

        public Criteria andAwcRweightNotEqualTo(Long value) {
            addCriterion("awc_rweight <>", value, "awcRweight");
            return (Criteria) this;
        }

        public Criteria andAwcRweightGreaterThan(Long value) {
            addCriterion("awc_rweight >", value, "awcRweight");
            return (Criteria) this;
        }

        public Criteria andAwcRweightGreaterThanOrEqualTo(Long value) {
            addCriterion("awc_rweight >=", value, "awcRweight");
            return (Criteria) this;
        }

        public Criteria andAwcRweightLessThan(Long value) {
            addCriterion("awc_rweight <", value, "awcRweight");
            return (Criteria) this;
        }

        public Criteria andAwcRweightLessThanOrEqualTo(Long value) {
            addCriterion("awc_rweight <=", value, "awcRweight");
            return (Criteria) this;
        }

        public Criteria andAwcRweightIn(List<Long> values) {
            addCriterion("awc_rweight in", values, "awcRweight");
            return (Criteria) this;
        }

        public Criteria andAwcRweightNotIn(List<Long> values) {
            addCriterion("awc_rweight not in", values, "awcRweight");
            return (Criteria) this;
        }

        public Criteria andAwcRweightBetween(Long value1, Long value2) {
            addCriterion("awc_rweight between", value1, value2, "awcRweight");
            return (Criteria) this;
        }

        public Criteria andAwcRweightNotBetween(Long value1, Long value2) {
            addCriterion("awc_rweight not between", value1, value2, "awcRweight");
            return (Criteria) this;
        }

        public Criteria andAwcMidIsNull() {
            addCriterion("awc_mid is null");
            return (Criteria) this;
        }

        public Criteria andAwcMidIsNotNull() {
            addCriterion("awc_mid is not null");
            return (Criteria) this;
        }

        public Criteria andAwcMidEqualTo(String value) {
            addCriterion("awc_mid =", value, "awcMid");
            return (Criteria) this;
        }

        public Criteria andAwcMidNotEqualTo(String value) {
            addCriterion("awc_mid <>", value, "awcMid");
            return (Criteria) this;
        }

        public Criteria andAwcMidGreaterThan(String value) {
            addCriterion("awc_mid >", value, "awcMid");
            return (Criteria) this;
        }

        public Criteria andAwcMidGreaterThanOrEqualTo(String value) {
            addCriterion("awc_mid >=", value, "awcMid");
            return (Criteria) this;
        }

        public Criteria andAwcMidLessThan(String value) {
            addCriterion("awc_mid <", value, "awcMid");
            return (Criteria) this;
        }

        public Criteria andAwcMidLessThanOrEqualTo(String value) {
            addCriterion("awc_mid <=", value, "awcMid");
            return (Criteria) this;
        }

        public Criteria andAwcMidLike(String value) {
            addCriterion("awc_mid like", value, "awcMid");
            return (Criteria) this;
        }

        public Criteria andAwcMidNotLike(String value) {
            addCriterion("awc_mid not like", value, "awcMid");
            return (Criteria) this;
        }

        public Criteria andAwcMidIn(List<String> values) {
            addCriterion("awc_mid in", values, "awcMid");
            return (Criteria) this;
        }

        public Criteria andAwcMidNotIn(List<String> values) {
            addCriterion("awc_mid not in", values, "awcMid");
            return (Criteria) this;
        }

        public Criteria andAwcMidBetween(String value1, String value2) {
            addCriterion("awc_mid between", value1, value2, "awcMid");
            return (Criteria) this;
        }

        public Criteria andAwcMidNotBetween(String value1, String value2) {
            addCriterion("awc_mid not between", value1, value2, "awcMid");
            return (Criteria) this;
        }

        public Criteria andAwcBatchIsNull() {
            addCriterion("awc_batch is null");
            return (Criteria) this;
        }

        public Criteria andAwcBatchIsNotNull() {
            addCriterion("awc_batch is not null");
            return (Criteria) this;
        }

        public Criteria andAwcBatchEqualTo(String value) {
            addCriterion("awc_batch =", value, "awcBatch");
            return (Criteria) this;
        }

        public Criteria andAwcBatchNotEqualTo(String value) {
            addCriterion("awc_batch <>", value, "awcBatch");
            return (Criteria) this;
        }

        public Criteria andAwcBatchGreaterThan(String value) {
            addCriterion("awc_batch >", value, "awcBatch");
            return (Criteria) this;
        }

        public Criteria andAwcBatchGreaterThanOrEqualTo(String value) {
            addCriterion("awc_batch >=", value, "awcBatch");
            return (Criteria) this;
        }

        public Criteria andAwcBatchLessThan(String value) {
            addCriterion("awc_batch <", value, "awcBatch");
            return (Criteria) this;
        }

        public Criteria andAwcBatchLessThanOrEqualTo(String value) {
            addCriterion("awc_batch <=", value, "awcBatch");
            return (Criteria) this;
        }

        public Criteria andAwcBatchLike(String value) {
            addCriterion("awc_batch like", value, "awcBatch");
            return (Criteria) this;
        }

        public Criteria andAwcBatchNotLike(String value) {
            addCriterion("awc_batch not like", value, "awcBatch");
            return (Criteria) this;
        }

        public Criteria andAwcBatchIn(List<String> values) {
            addCriterion("awc_batch in", values, "awcBatch");
            return (Criteria) this;
        }

        public Criteria andAwcBatchNotIn(List<String> values) {
            addCriterion("awc_batch not in", values, "awcBatch");
            return (Criteria) this;
        }

        public Criteria andAwcBatchBetween(String value1, String value2) {
            addCriterion("awc_batch between", value1, value2, "awcBatch");
            return (Criteria) this;
        }

        public Criteria andAwcBatchNotBetween(String value1, String value2) {
            addCriterion("awc_batch not between", value1, value2, "awcBatch");
            return (Criteria) this;
        }

        public Criteria andAwcRealtrainIsNull() {
            addCriterion("awc_realtrain is null");
            return (Criteria) this;
        }

        public Criteria andAwcRealtrainIsNotNull() {
            addCriterion("awc_realtrain is not null");
            return (Criteria) this;
        }

        public Criteria andAwcRealtrainEqualTo(Integer value) {
            addCriterion("awc_realtrain =", value, "awcRealtrain");
            return (Criteria) this;
        }

        public Criteria andAwcRealtrainNotEqualTo(Integer value) {
            addCriterion("awc_realtrain <>", value, "awcRealtrain");
            return (Criteria) this;
        }

        public Criteria andAwcRealtrainGreaterThan(Integer value) {
            addCriterion("awc_realtrain >", value, "awcRealtrain");
            return (Criteria) this;
        }

        public Criteria andAwcRealtrainGreaterThanOrEqualTo(Integer value) {
            addCriterion("awc_realtrain >=", value, "awcRealtrain");
            return (Criteria) this;
        }

        public Criteria andAwcRealtrainLessThan(Integer value) {
            addCriterion("awc_realtrain <", value, "awcRealtrain");
            return (Criteria) this;
        }

        public Criteria andAwcRealtrainLessThanOrEqualTo(Integer value) {
            addCriterion("awc_realtrain <=", value, "awcRealtrain");
            return (Criteria) this;
        }

        public Criteria andAwcRealtrainIn(List<Integer> values) {
            addCriterion("awc_realtrain in", values, "awcRealtrain");
            return (Criteria) this;
        }

        public Criteria andAwcRealtrainNotIn(List<Integer> values) {
            addCriterion("awc_realtrain not in", values, "awcRealtrain");
            return (Criteria) this;
        }

        public Criteria andAwcRealtrainBetween(Integer value1, Integer value2) {
            addCriterion("awc_realtrain between", value1, value2, "awcRealtrain");
            return (Criteria) this;
        }

        public Criteria andAwcRealtrainNotBetween(Integer value1, Integer value2) {
            addCriterion("awc_realtrain not between", value1, value2, "awcRealtrain");
            return (Criteria) this;
        }

        public Criteria andAwcRealweightIsNull() {
            addCriterion("awc_realweight is null");
            return (Criteria) this;
        }

        public Criteria andAwcRealweightIsNotNull() {
            addCriterion("awc_realweight is not null");
            return (Criteria) this;
        }

        public Criteria andAwcRealweightEqualTo(Long value) {
            addCriterion("awc_realweight =", value, "awcRealweight");
            return (Criteria) this;
        }

        public Criteria andAwcRealweightNotEqualTo(Long value) {
            addCriterion("awc_realweight <>", value, "awcRealweight");
            return (Criteria) this;
        }

        public Criteria andAwcRealweightGreaterThan(Long value) {
            addCriterion("awc_realweight >", value, "awcRealweight");
            return (Criteria) this;
        }

        public Criteria andAwcRealweightGreaterThanOrEqualTo(Long value) {
            addCriterion("awc_realweight >=", value, "awcRealweight");
            return (Criteria) this;
        }

        public Criteria andAwcRealweightLessThan(Long value) {
            addCriterion("awc_realweight <", value, "awcRealweight");
            return (Criteria) this;
        }

        public Criteria andAwcRealweightLessThanOrEqualTo(Long value) {
            addCriterion("awc_realweight <=", value, "awcRealweight");
            return (Criteria) this;
        }

        public Criteria andAwcRealweightIn(List<Long> values) {
            addCriterion("awc_realweight in", values, "awcRealweight");
            return (Criteria) this;
        }

        public Criteria andAwcRealweightNotIn(List<Long> values) {
            addCriterion("awc_realweight not in", values, "awcRealweight");
            return (Criteria) this;
        }

        public Criteria andAwcRealweightBetween(Long value1, Long value2) {
            addCriterion("awc_realweight between", value1, value2, "awcRealweight");
            return (Criteria) this;
        }

        public Criteria andAwcRealweightNotBetween(Long value1, Long value2) {
            addCriterion("awc_realweight not between", value1, value2, "awcRealweight");
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