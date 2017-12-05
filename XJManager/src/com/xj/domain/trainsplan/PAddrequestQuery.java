package com.xj.domain.trainsplan;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class PAddrequestQuery {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Integer pageNo = 1;

    protected Integer startRow;

    protected Integer pageSize = 10;

    protected String fields;

    public PAddrequestQuery() {
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

        public Criteria andAddIdIsNull() {
            addCriterion("add_id is null");
            return (Criteria) this;
        }

        public Criteria andAddIdIsNotNull() {
            addCriterion("add_id is not null");
            return (Criteria) this;
        }

        public Criteria andAddIdEqualTo(String value) {
            addCriterion("add_id =", value, "addId");
            return (Criteria) this;
        }

        public Criteria andAddIdNotEqualTo(String value) {
            addCriterion("add_id <>", value, "addId");
            return (Criteria) this;
        }

        public Criteria andAddIdGreaterThan(String value) {
            addCriterion("add_id >", value, "addId");
            return (Criteria) this;
        }

        public Criteria andAddIdGreaterThanOrEqualTo(String value) {
            addCriterion("add_id >=", value, "addId");
            return (Criteria) this;
        }

        public Criteria andAddIdLessThan(String value) {
            addCriterion("add_id <", value, "addId");
            return (Criteria) this;
        }

        public Criteria andAddIdLessThanOrEqualTo(String value) {
            addCriterion("add_id <=", value, "addId");
            return (Criteria) this;
        }

        public Criteria andAddIdLike(String value) {
            addCriterion("add_id like", value, "addId");
            return (Criteria) this;
        }

        public Criteria andAddIdNotLike(String value) {
            addCriterion("add_id not like", value, "addId");
            return (Criteria) this;
        }

        public Criteria andAddIdIn(List<String> values) {
            addCriterion("add_id in", values, "addId");
            return (Criteria) this;
        }

        public Criteria andAddIdNotIn(List<String> values) {
            addCriterion("add_id not in", values, "addId");
            return (Criteria) this;
        }

        public Criteria andAddIdBetween(String value1, String value2) {
            addCriterion("add_id between", value1, value2, "addId");
            return (Criteria) this;
        }

        public Criteria andAddIdNotBetween(String value1, String value2) {
            addCriterion("add_id not between", value1, value2, "addId");
            return (Criteria) this;
        }

        public Criteria andAddContractidIsNull() {
            addCriterion("add_contractid is null");
            return (Criteria) this;
        }

        public Criteria andAddContractidIsNotNull() {
            addCriterion("add_contractid is not null");
            return (Criteria) this;
        }

        public Criteria andAddContractidEqualTo(String value) {
            addCriterion("add_contractid =", value, "addContractid");
            return (Criteria) this;
        }

        public Criteria andAddContractidNotEqualTo(String value) {
            addCriterion("add_contractid <>", value, "addContractid");
            return (Criteria) this;
        }

        public Criteria andAddContractidGreaterThan(String value) {
            addCriterion("add_contractid >", value, "addContractid");
            return (Criteria) this;
        }

        public Criteria andAddContractidGreaterThanOrEqualTo(String value) {
            addCriterion("add_contractid >=", value, "addContractid");
            return (Criteria) this;
        }

        public Criteria andAddContractidLessThan(String value) {
            addCriterion("add_contractid <", value, "addContractid");
            return (Criteria) this;
        }

        public Criteria andAddContractidLessThanOrEqualTo(String value) {
            addCriterion("add_contractid <=", value, "addContractid");
            return (Criteria) this;
        }

        public Criteria andAddContractidLike(String value) {
            addCriterion("add_contractid like", value, "addContractid");
            return (Criteria) this;
        }

        public Criteria andAddContractidNotLike(String value) {
            addCriterion("add_contractid not like", value, "addContractid");
            return (Criteria) this;
        }

        public Criteria andAddContractidIn(List<String> values) {
            addCriterion("add_contractid in", values, "addContractid");
            return (Criteria) this;
        }

        public Criteria andAddContractidNotIn(List<String> values) {
            addCriterion("add_contractid not in", values, "addContractid");
            return (Criteria) this;
        }

        public Criteria andAddContractidBetween(String value1, String value2) {
            addCriterion("add_contractid between", value1, value2, "addContractid");
            return (Criteria) this;
        }

        public Criteria andAddContractidNotBetween(String value1, String value2) {
            addCriterion("add_contractid not between", value1, value2, "addContractid");
            return (Criteria) this;
        }

        public Criteria andAddArriveIsNull() {
            addCriterion("add_arrive is null");
            return (Criteria) this;
        }

        public Criteria andAddArriveIsNotNull() {
            addCriterion("add_arrive is not null");
            return (Criteria) this;
        }

        public Criteria andAddArriveEqualTo(String value) {
            addCriterion("add_arrive =", value, "addArrive");
            return (Criteria) this;
        }

        public Criteria andAddArriveNotEqualTo(String value) {
            addCriterion("add_arrive <>", value, "addArrive");
            return (Criteria) this;
        }

        public Criteria andAddArriveGreaterThan(String value) {
            addCriterion("add_arrive >", value, "addArrive");
            return (Criteria) this;
        }

        public Criteria andAddArriveGreaterThanOrEqualTo(String value) {
            addCriterion("add_arrive >=", value, "addArrive");
            return (Criteria) this;
        }

        public Criteria andAddArriveLessThan(String value) {
            addCriterion("add_arrive <", value, "addArrive");
            return (Criteria) this;
        }

        public Criteria andAddArriveLessThanOrEqualTo(String value) {
            addCriterion("add_arrive <=", value, "addArrive");
            return (Criteria) this;
        }

        public Criteria andAddArriveLike(String value) {
            addCriterion("add_arrive like", value, "addArrive");
            return (Criteria) this;
        }

        public Criteria andAddArriveNotLike(String value) {
            addCriterion("add_arrive not like", value, "addArrive");
            return (Criteria) this;
        }

        public Criteria andAddArriveIn(List<String> values) {
            addCriterion("add_arrive in", values, "addArrive");
            return (Criteria) this;
        }

        public Criteria andAddArriveNotIn(List<String> values) {
            addCriterion("add_arrive not in", values, "addArrive");
            return (Criteria) this;
        }

        public Criteria andAddArriveBetween(String value1, String value2) {
            addCriterion("add_arrive between", value1, value2, "addArrive");
            return (Criteria) this;
        }

        public Criteria andAddArriveNotBetween(String value1, String value2) {
            addCriterion("add_arrive not between", value1, value2, "addArrive");
            return (Criteria) this;
        }

        public Criteria andAddPaycompanyIsNull() {
            addCriterion("add_paycompany is null");
            return (Criteria) this;
        }

        public Criteria andAddPaycompanyIsNotNull() {
            addCriterion("add_paycompany is not null");
            return (Criteria) this;
        }

        public Criteria andAddPaycompanyEqualTo(String value) {
            addCriterion("add_paycompany =", value, "addPaycompany");
            return (Criteria) this;
        }

        public Criteria andAddPaycompanyNotEqualTo(String value) {
            addCriterion("add_paycompany <>", value, "addPaycompany");
            return (Criteria) this;
        }

        public Criteria andAddPaycompanyGreaterThan(String value) {
            addCriterion("add_paycompany >", value, "addPaycompany");
            return (Criteria) this;
        }

        public Criteria andAddPaycompanyGreaterThanOrEqualTo(String value) {
            addCriterion("add_paycompany >=", value, "addPaycompany");
            return (Criteria) this;
        }

        public Criteria andAddPaycompanyLessThan(String value) {
            addCriterion("add_paycompany <", value, "addPaycompany");
            return (Criteria) this;
        }

        public Criteria andAddPaycompanyLessThanOrEqualTo(String value) {
            addCriterion("add_paycompany <=", value, "addPaycompany");
            return (Criteria) this;
        }

        public Criteria andAddPaycompanyLike(String value) {
            addCriterion("add_paycompany like", value, "addPaycompany");
            return (Criteria) this;
        }

        public Criteria andAddPaycompanyNotLike(String value) {
            addCriterion("add_paycompany not like", value, "addPaycompany");
            return (Criteria) this;
        }

        public Criteria andAddPaycompanyIn(List<String> values) {
            addCriterion("add_paycompany in", values, "addPaycompany");
            return (Criteria) this;
        }

        public Criteria andAddPaycompanyNotIn(List<String> values) {
            addCriterion("add_paycompany not in", values, "addPaycompany");
            return (Criteria) this;
        }

        public Criteria andAddPaycompanyBetween(String value1, String value2) {
            addCriterion("add_paycompany between", value1, value2, "addPaycompany");
            return (Criteria) this;
        }

        public Criteria andAddPaycompanyNotBetween(String value1, String value2) {
            addCriterion("add_paycompany not between", value1, value2, "addPaycompany");
            return (Criteria) this;
        }

        public Criteria andAddTakecompanyIsNull() {
            addCriterion("add_takecompany is null");
            return (Criteria) this;
        }

        public Criteria andAddTakecompanyIsNotNull() {
            addCriterion("add_takecompany is not null");
            return (Criteria) this;
        }

        public Criteria andAddTakecompanyEqualTo(String value) {
            addCriterion("add_takecompany =", value, "addTakecompany");
            return (Criteria) this;
        }

        public Criteria andAddTakecompanyNotEqualTo(String value) {
            addCriterion("add_takecompany <>", value, "addTakecompany");
            return (Criteria) this;
        }

        public Criteria andAddTakecompanyGreaterThan(String value) {
            addCriterion("add_takecompany >", value, "addTakecompany");
            return (Criteria) this;
        }

        public Criteria andAddTakecompanyGreaterThanOrEqualTo(String value) {
            addCriterion("add_takecompany >=", value, "addTakecompany");
            return (Criteria) this;
        }

        public Criteria andAddTakecompanyLessThan(String value) {
            addCriterion("add_takecompany <", value, "addTakecompany");
            return (Criteria) this;
        }

        public Criteria andAddTakecompanyLessThanOrEqualTo(String value) {
            addCriterion("add_takecompany <=", value, "addTakecompany");
            return (Criteria) this;
        }

        public Criteria andAddTakecompanyLike(String value) {
            addCriterion("add_takecompany like", value, "addTakecompany");
            return (Criteria) this;
        }

        public Criteria andAddTakecompanyNotLike(String value) {
            addCriterion("add_takecompany not like", value, "addTakecompany");
            return (Criteria) this;
        }

        public Criteria andAddTakecompanyIn(List<String> values) {
            addCriterion("add_takecompany in", values, "addTakecompany");
            return (Criteria) this;
        }

        public Criteria andAddTakecompanyNotIn(List<String> values) {
            addCriterion("add_takecompany not in", values, "addTakecompany");
            return (Criteria) this;
        }

        public Criteria andAddTakecompanyBetween(String value1, String value2) {
            addCriterion("add_takecompany between", value1, value2, "addTakecompany");
            return (Criteria) this;
        }

        public Criteria andAddTakecompanyNotBetween(String value1, String value2) {
            addCriterion("add_takecompany not between", value1, value2, "addTakecompany");
            return (Criteria) this;
        }

        public Criteria andAddStarttimeIsNull() {
            addCriterion("add_starttime is null");
            return (Criteria) this;
        }

        public Criteria andAddStarttimeIsNotNull() {
            addCriterion("add_starttime is not null");
            return (Criteria) this;
        }

        public Criteria andAddStarttimeEqualTo(Date value) {
            addCriterionForJDBCDate("add_starttime =", value, "addStarttime");
            return (Criteria) this;
        }

        public Criteria andAddStarttimeNotEqualTo(Date value) {
            addCriterionForJDBCDate("add_starttime <>", value, "addStarttime");
            return (Criteria) this;
        }

        public Criteria andAddStarttimeGreaterThan(Date value) {
            addCriterionForJDBCDate("add_starttime >", value, "addStarttime");
            return (Criteria) this;
        }

        public Criteria andAddStarttimeGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("add_starttime >=", value, "addStarttime");
            return (Criteria) this;
        }

        public Criteria andAddStarttimeLessThan(Date value) {
            addCriterionForJDBCDate("add_starttime <", value, "addStarttime");
            return (Criteria) this;
        }

        public Criteria andAddStarttimeLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("add_starttime <=", value, "addStarttime");
            return (Criteria) this;
        }

        public Criteria andAddStarttimeIn(List<Date> values) {
            addCriterionForJDBCDate("add_starttime in", values, "addStarttime");
            return (Criteria) this;
        }

        public Criteria andAddStarttimeNotIn(List<Date> values) {
            addCriterionForJDBCDate("add_starttime not in", values, "addStarttime");
            return (Criteria) this;
        }

        public Criteria andAddStarttimeBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("add_starttime between", value1, value2, "addStarttime");
            return (Criteria) this;
        }

        public Criteria andAddStarttimeNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("add_starttime not between", value1, value2, "addStarttime");
            return (Criteria) this;
        }

        public Criteria andAddEndtimeIsNull() {
            addCriterion("add_endtime is null");
            return (Criteria) this;
        }

        public Criteria andAddEndtimeIsNotNull() {
            addCriterion("add_endtime is not null");
            return (Criteria) this;
        }

        public Criteria andAddEndtimeEqualTo(Date value) {
            addCriterionForJDBCDate("add_endtime =", value, "addEndtime");
            return (Criteria) this;
        }

        public Criteria andAddEndtimeNotEqualTo(Date value) {
            addCriterionForJDBCDate("add_endtime <>", value, "addEndtime");
            return (Criteria) this;
        }

        public Criteria andAddEndtimeGreaterThan(Date value) {
            addCriterionForJDBCDate("add_endtime >", value, "addEndtime");
            return (Criteria) this;
        }

        public Criteria andAddEndtimeGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("add_endtime >=", value, "addEndtime");
            return (Criteria) this;
        }

        public Criteria andAddEndtimeLessThan(Date value) {
            addCriterionForJDBCDate("add_endtime <", value, "addEndtime");
            return (Criteria) this;
        }

        public Criteria andAddEndtimeLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("add_endtime <=", value, "addEndtime");
            return (Criteria) this;
        }

        public Criteria andAddEndtimeIn(List<Date> values) {
            addCriterionForJDBCDate("add_endtime in", values, "addEndtime");
            return (Criteria) this;
        }

        public Criteria andAddEndtimeNotIn(List<Date> values) {
            addCriterionForJDBCDate("add_endtime not in", values, "addEndtime");
            return (Criteria) this;
        }

        public Criteria andAddEndtimeBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("add_endtime between", value1, value2, "addEndtime");
            return (Criteria) this;
        }

        public Criteria andAddEndtimeNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("add_endtime not between", value1, value2, "addEndtime");
            return (Criteria) this;
        }

        public Criteria andAddStartIsNull() {
            addCriterion("add_start is null");
            return (Criteria) this;
        }

        public Criteria andAddStartIsNotNull() {
            addCriterion("add_start is not null");
            return (Criteria) this;
        }

        public Criteria andAddStartEqualTo(String value) {
            addCriterion("add_start =", value, "addStart");
            return (Criteria) this;
        }

        public Criteria andAddStartNotEqualTo(String value) {
            addCriterion("add_start <>", value, "addStart");
            return (Criteria) this;
        }

        public Criteria andAddStartGreaterThan(String value) {
            addCriterion("add_start >", value, "addStart");
            return (Criteria) this;
        }

        public Criteria andAddStartGreaterThanOrEqualTo(String value) {
            addCriterion("add_start >=", value, "addStart");
            return (Criteria) this;
        }

        public Criteria andAddStartLessThan(String value) {
            addCriterion("add_start <", value, "addStart");
            return (Criteria) this;
        }

        public Criteria andAddStartLessThanOrEqualTo(String value) {
            addCriterion("add_start <=", value, "addStart");
            return (Criteria) this;
        }

        public Criteria andAddStartLike(String value) {
            addCriterion("add_start like", value, "addStart");
            return (Criteria) this;
        }

        public Criteria andAddStartNotLike(String value) {
            addCriterion("add_start not like", value, "addStart");
            return (Criteria) this;
        }

        public Criteria andAddStartIn(List<String> values) {
            addCriterion("add_start in", values, "addStart");
            return (Criteria) this;
        }

        public Criteria andAddStartNotIn(List<String> values) {
            addCriterion("add_start not in", values, "addStart");
            return (Criteria) this;
        }

        public Criteria andAddStartBetween(String value1, String value2) {
            addCriterion("add_start between", value1, value2, "addStart");
            return (Criteria) this;
        }

        public Criteria andAddStartNotBetween(String value1, String value2) {
            addCriterion("add_start not between", value1, value2, "addStart");
            return (Criteria) this;
        }

        public Criteria andAddEndIsNull() {
            addCriterion("add_end is null");
            return (Criteria) this;
        }

        public Criteria andAddEndIsNotNull() {
            addCriterion("add_end is not null");
            return (Criteria) this;
        }

        public Criteria andAddEndEqualTo(String value) {
            addCriterion("add_end =", value, "addEnd");
            return (Criteria) this;
        }

        public Criteria andAddEndNotEqualTo(String value) {
            addCriterion("add_end <>", value, "addEnd");
            return (Criteria) this;
        }

        public Criteria andAddEndGreaterThan(String value) {
            addCriterion("add_end >", value, "addEnd");
            return (Criteria) this;
        }

        public Criteria andAddEndGreaterThanOrEqualTo(String value) {
            addCriterion("add_end >=", value, "addEnd");
            return (Criteria) this;
        }

        public Criteria andAddEndLessThan(String value) {
            addCriterion("add_end <", value, "addEnd");
            return (Criteria) this;
        }

        public Criteria andAddEndLessThanOrEqualTo(String value) {
            addCriterion("add_end <=", value, "addEnd");
            return (Criteria) this;
        }

        public Criteria andAddEndLike(String value) {
            addCriterion("add_end like", value, "addEnd");
            return (Criteria) this;
        }

        public Criteria andAddEndNotLike(String value) {
            addCriterion("add_end not like", value, "addEnd");
            return (Criteria) this;
        }

        public Criteria andAddEndIn(List<String> values) {
            addCriterion("add_end in", values, "addEnd");
            return (Criteria) this;
        }

        public Criteria andAddEndNotIn(List<String> values) {
            addCriterion("add_end not in", values, "addEnd");
            return (Criteria) this;
        }

        public Criteria andAddEndBetween(String value1, String value2) {
            addCriterion("add_end between", value1, value2, "addEnd");
            return (Criteria) this;
        }

        public Criteria andAddEndNotBetween(String value1, String value2) {
            addCriterion("add_end not between", value1, value2, "addEnd");
            return (Criteria) this;
        }

        public Criteria andAddProvinceIsNull() {
            addCriterion("add_province is null");
            return (Criteria) this;
        }

        public Criteria andAddProvinceIsNotNull() {
            addCriterion("add_province is not null");
            return (Criteria) this;
        }

        public Criteria andAddProvinceEqualTo(String value) {
            addCriterion("add_province =", value, "addProvince");
            return (Criteria) this;
        }

        public Criteria andAddProvinceNotEqualTo(String value) {
            addCriterion("add_province <>", value, "addProvince");
            return (Criteria) this;
        }

        public Criteria andAddProvinceGreaterThan(String value) {
            addCriterion("add_province >", value, "addProvince");
            return (Criteria) this;
        }

        public Criteria andAddProvinceGreaterThanOrEqualTo(String value) {
            addCriterion("add_province >=", value, "addProvince");
            return (Criteria) this;
        }

        public Criteria andAddProvinceLessThan(String value) {
            addCriterion("add_province <", value, "addProvince");
            return (Criteria) this;
        }

        public Criteria andAddProvinceLessThanOrEqualTo(String value) {
            addCriterion("add_province <=", value, "addProvince");
            return (Criteria) this;
        }

        public Criteria andAddProvinceLike(String value) {
            addCriterion("add_province like", value, "addProvince");
            return (Criteria) this;
        }

        public Criteria andAddProvinceNotLike(String value) {
            addCriterion("add_province not like", value, "addProvince");
            return (Criteria) this;
        }

        public Criteria andAddProvinceIn(List<String> values) {
            addCriterion("add_province in", values, "addProvince");
            return (Criteria) this;
        }

        public Criteria andAddProvinceNotIn(List<String> values) {
            addCriterion("add_province not in", values, "addProvince");
            return (Criteria) this;
        }

        public Criteria andAddProvinceBetween(String value1, String value2) {
            addCriterion("add_province between", value1, value2, "addProvince");
            return (Criteria) this;
        }

        public Criteria andAddProvinceNotBetween(String value1, String value2) {
            addCriterion("add_province not between", value1, value2, "addProvince");
            return (Criteria) this;
        }

        public Criteria andAddIndustryIsNull() {
            addCriterion("add_industry is null");
            return (Criteria) this;
        }

        public Criteria andAddIndustryIsNotNull() {
            addCriterion("add_industry is not null");
            return (Criteria) this;
        }

        public Criteria andAddIndustryEqualTo(String value) {
            addCriterion("add_industry =", value, "addIndustry");
            return (Criteria) this;
        }

        public Criteria andAddIndustryNotEqualTo(String value) {
            addCriterion("add_industry <>", value, "addIndustry");
            return (Criteria) this;
        }

        public Criteria andAddIndustryGreaterThan(String value) {
            addCriterion("add_industry >", value, "addIndustry");
            return (Criteria) this;
        }

        public Criteria andAddIndustryGreaterThanOrEqualTo(String value) {
            addCriterion("add_industry >=", value, "addIndustry");
            return (Criteria) this;
        }

        public Criteria andAddIndustryLessThan(String value) {
            addCriterion("add_industry <", value, "addIndustry");
            return (Criteria) this;
        }

        public Criteria andAddIndustryLessThanOrEqualTo(String value) {
            addCriterion("add_industry <=", value, "addIndustry");
            return (Criteria) this;
        }

        public Criteria andAddIndustryLike(String value) {
            addCriterion("add_industry like", value, "addIndustry");
            return (Criteria) this;
        }

        public Criteria andAddIndustryNotLike(String value) {
            addCriterion("add_industry not like", value, "addIndustry");
            return (Criteria) this;
        }

        public Criteria andAddIndustryIn(List<String> values) {
            addCriterion("add_industry in", values, "addIndustry");
            return (Criteria) this;
        }

        public Criteria andAddIndustryNotIn(List<String> values) {
            addCriterion("add_industry not in", values, "addIndustry");
            return (Criteria) this;
        }

        public Criteria andAddIndustryBetween(String value1, String value2) {
            addCriterion("add_industry between", value1, value2, "addIndustry");
            return (Criteria) this;
        }

        public Criteria andAddIndustryNotBetween(String value1, String value2) {
            addCriterion("add_industry not between", value1, value2, "addIndustry");
            return (Criteria) this;
        }

        public Criteria andAddTrainnumberIsNull() {
            addCriterion("add_trainnumber is null");
            return (Criteria) this;
        }

        public Criteria andAddTrainnumberIsNotNull() {
            addCriterion("add_trainnumber is not null");
            return (Criteria) this;
        }

        public Criteria andAddTrainnumberEqualTo(Integer value) {
            addCriterion("add_trainnumber =", value, "addTrainnumber");
            return (Criteria) this;
        }

        public Criteria andAddTrainnumberNotEqualTo(Integer value) {
            addCriterion("add_trainnumber <>", value, "addTrainnumber");
            return (Criteria) this;
        }

        public Criteria andAddTrainnumberGreaterThan(Integer value) {
            addCriterion("add_trainnumber >", value, "addTrainnumber");
            return (Criteria) this;
        }

        public Criteria andAddTrainnumberGreaterThanOrEqualTo(Integer value) {
            addCriterion("add_trainnumber >=", value, "addTrainnumber");
            return (Criteria) this;
        }

        public Criteria andAddTrainnumberLessThan(Integer value) {
            addCriterion("add_trainnumber <", value, "addTrainnumber");
            return (Criteria) this;
        }

        public Criteria andAddTrainnumberLessThanOrEqualTo(Integer value) {
            addCriterion("add_trainnumber <=", value, "addTrainnumber");
            return (Criteria) this;
        }

        public Criteria andAddTrainnumberIn(List<Integer> values) {
            addCriterion("add_trainnumber in", values, "addTrainnumber");
            return (Criteria) this;
        }

        public Criteria andAddTrainnumberNotIn(List<Integer> values) {
            addCriterion("add_trainnumber not in", values, "addTrainnumber");
            return (Criteria) this;
        }

        public Criteria andAddTrainnumberBetween(Integer value1, Integer value2) {
            addCriterion("add_trainnumber between", value1, value2, "addTrainnumber");
            return (Criteria) this;
        }

        public Criteria andAddTrainnumberNotBetween(Integer value1, Integer value2) {
            addCriterion("add_trainnumber not between", value1, value2, "addTrainnumber");
            return (Criteria) this;
        }

        public Criteria andAddWerghtIsNull() {
            addCriterion("add_werght is null");
            return (Criteria) this;
        }

        public Criteria andAddWerghtIsNotNull() {
            addCriterion("add_werght is not null");
            return (Criteria) this;
        }

        public Criteria andAddWerghtEqualTo(Long value) {
            addCriterion("add_werght =", value, "addWerght");
            return (Criteria) this;
        }

        public Criteria andAddWerghtNotEqualTo(Long value) {
            addCriterion("add_werght <>", value, "addWerght");
            return (Criteria) this;
        }

        public Criteria andAddWerghtGreaterThan(Long value) {
            addCriterion("add_werght >", value, "addWerght");
            return (Criteria) this;
        }

        public Criteria andAddWerghtGreaterThanOrEqualTo(Long value) {
            addCriterion("add_werght >=", value, "addWerght");
            return (Criteria) this;
        }

        public Criteria andAddWerghtLessThan(Long value) {
            addCriterion("add_werght <", value, "addWerght");
            return (Criteria) this;
        }

        public Criteria andAddWerghtLessThanOrEqualTo(Long value) {
            addCriterion("add_werght <=", value, "addWerght");
            return (Criteria) this;
        }

        public Criteria andAddWerghtIn(List<Long> values) {
            addCriterion("add_werght in", values, "addWerght");
            return (Criteria) this;
        }

        public Criteria andAddWerghtNotIn(List<Long> values) {
            addCriterion("add_werght not in", values, "addWerght");
            return (Criteria) this;
        }

        public Criteria andAddWerghtBetween(Long value1, Long value2) {
            addCriterion("add_werght between", value1, value2, "addWerght");
            return (Criteria) this;
        }

        public Criteria andAddWerghtNotBetween(Long value1, Long value2) {
            addCriterion("add_werght not between", value1, value2, "addWerght");
            return (Criteria) this;
        }

        public Criteria andAddMidIsNull() {
            addCriterion("add_mid is null");
            return (Criteria) this;
        }

        public Criteria andAddMidIsNotNull() {
            addCriterion("add_mid is not null");
            return (Criteria) this;
        }

        public Criteria andAddMidEqualTo(String value) {
            addCriterion("add_mid =", value, "addMid");
            return (Criteria) this;
        }

        public Criteria andAddMidNotEqualTo(String value) {
            addCriterion("add_mid <>", value, "addMid");
            return (Criteria) this;
        }

        public Criteria andAddMidGreaterThan(String value) {
            addCriterion("add_mid >", value, "addMid");
            return (Criteria) this;
        }

        public Criteria andAddMidGreaterThanOrEqualTo(String value) {
            addCriterion("add_mid >=", value, "addMid");
            return (Criteria) this;
        }

        public Criteria andAddMidLessThan(String value) {
            addCriterion("add_mid <", value, "addMid");
            return (Criteria) this;
        }

        public Criteria andAddMidLessThanOrEqualTo(String value) {
            addCriterion("add_mid <=", value, "addMid");
            return (Criteria) this;
        }

        public Criteria andAddMidLike(String value) {
            addCriterion("add_mid like", value, "addMid");
            return (Criteria) this;
        }

        public Criteria andAddMidNotLike(String value) {
            addCriterion("add_mid not like", value, "addMid");
            return (Criteria) this;
        }

        public Criteria andAddMidIn(List<String> values) {
            addCriterion("add_mid in", values, "addMid");
            return (Criteria) this;
        }

        public Criteria andAddMidNotIn(List<String> values) {
            addCriterion("add_mid not in", values, "addMid");
            return (Criteria) this;
        }

        public Criteria andAddMidBetween(String value1, String value2) {
            addCriterion("add_mid between", value1, value2, "addMid");
            return (Criteria) this;
        }

        public Criteria andAddMidNotBetween(String value1, String value2) {
            addCriterion("add_mid not between", value1, value2, "addMid");
            return (Criteria) this;
        }

        public Criteria andAddBatchIsNull() {
            addCriterion("add_batch is null");
            return (Criteria) this;
        }

        public Criteria andAddBatchIsNotNull() {
            addCriterion("add_batch is not null");
            return (Criteria) this;
        }

        public Criteria andAddBatchEqualTo(String value) {
            addCriterion("add_batch =", value, "addBatch");
            return (Criteria) this;
        }

        public Criteria andAddBatchNotEqualTo(String value) {
            addCriterion("add_batch <>", value, "addBatch");
            return (Criteria) this;
        }

        public Criteria andAddBatchGreaterThan(String value) {
            addCriterion("add_batch >", value, "addBatch");
            return (Criteria) this;
        }

        public Criteria andAddBatchGreaterThanOrEqualTo(String value) {
            addCriterion("add_batch >=", value, "addBatch");
            return (Criteria) this;
        }

        public Criteria andAddBatchLessThan(String value) {
            addCriterion("add_batch <", value, "addBatch");
            return (Criteria) this;
        }

        public Criteria andAddBatchLessThanOrEqualTo(String value) {
            addCriterion("add_batch <=", value, "addBatch");
            return (Criteria) this;
        }

        public Criteria andAddBatchLike(String value) {
            addCriterion("add_batch like", value, "addBatch");
            return (Criteria) this;
        }

        public Criteria andAddBatchNotLike(String value) {
            addCriterion("add_batch not like", value, "addBatch");
            return (Criteria) this;
        }

        public Criteria andAddBatchIn(List<String> values) {
            addCriterion("add_batch in", values, "addBatch");
            return (Criteria) this;
        }

        public Criteria andAddBatchNotIn(List<String> values) {
            addCriterion("add_batch not in", values, "addBatch");
            return (Criteria) this;
        }

        public Criteria andAddBatchBetween(String value1, String value2) {
            addCriterion("add_batch between", value1, value2, "addBatch");
            return (Criteria) this;
        }

        public Criteria andAddBatchNotBetween(String value1, String value2) {
            addCriterion("add_batch not between", value1, value2, "addBatch");
            return (Criteria) this;
        }

        public Criteria andAddRnumberIsNull() {
            addCriterion("add_rnumber is null");
            return (Criteria) this;
        }

        public Criteria andAddRnumberIsNotNull() {
            addCriterion("add_rnumber is not null");
            return (Criteria) this;
        }

        public Criteria andAddRnumberEqualTo(Integer value) {
            addCriterion("add_rnumber =", value, "addRnumber");
            return (Criteria) this;
        }

        public Criteria andAddRnumberNotEqualTo(Integer value) {
            addCriterion("add_rnumber <>", value, "addRnumber");
            return (Criteria) this;
        }

        public Criteria andAddRnumberGreaterThan(Integer value) {
            addCriterion("add_rnumber >", value, "addRnumber");
            return (Criteria) this;
        }

        public Criteria andAddRnumberGreaterThanOrEqualTo(Integer value) {
            addCriterion("add_rnumber >=", value, "addRnumber");
            return (Criteria) this;
        }

        public Criteria andAddRnumberLessThan(Integer value) {
            addCriterion("add_rnumber <", value, "addRnumber");
            return (Criteria) this;
        }

        public Criteria andAddRnumberLessThanOrEqualTo(Integer value) {
            addCriterion("add_rnumber <=", value, "addRnumber");
            return (Criteria) this;
        }

        public Criteria andAddRnumberIn(List<Integer> values) {
            addCriterion("add_rnumber in", values, "addRnumber");
            return (Criteria) this;
        }

        public Criteria andAddRnumberNotIn(List<Integer> values) {
            addCriterion("add_rnumber not in", values, "addRnumber");
            return (Criteria) this;
        }

        public Criteria andAddRnumberBetween(Integer value1, Integer value2) {
            addCriterion("add_rnumber between", value1, value2, "addRnumber");
            return (Criteria) this;
        }

        public Criteria andAddRnumberNotBetween(Integer value1, Integer value2) {
            addCriterion("add_rnumber not between", value1, value2, "addRnumber");
            return (Criteria) this;
        }

        public Criteria andAddRweightIsNull() {
            addCriterion("add_rweight is null");
            return (Criteria) this;
        }

        public Criteria andAddRweightIsNotNull() {
            addCriterion("add_rweight is not null");
            return (Criteria) this;
        }

        public Criteria andAddRweightEqualTo(Long value) {
            addCriterion("add_rweight =", value, "addRweight");
            return (Criteria) this;
        }

        public Criteria andAddRweightNotEqualTo(Long value) {
            addCriterion("add_rweight <>", value, "addRweight");
            return (Criteria) this;
        }

        public Criteria andAddRweightGreaterThan(Long value) {
            addCriterion("add_rweight >", value, "addRweight");
            return (Criteria) this;
        }

        public Criteria andAddRweightGreaterThanOrEqualTo(Long value) {
            addCriterion("add_rweight >=", value, "addRweight");
            return (Criteria) this;
        }

        public Criteria andAddRweightLessThan(Long value) {
            addCriterion("add_rweight <", value, "addRweight");
            return (Criteria) this;
        }

        public Criteria andAddRweightLessThanOrEqualTo(Long value) {
            addCriterion("add_rweight <=", value, "addRweight");
            return (Criteria) this;
        }

        public Criteria andAddRweightIn(List<Long> values) {
            addCriterion("add_rweight in", values, "addRweight");
            return (Criteria) this;
        }

        public Criteria andAddRweightNotIn(List<Long> values) {
            addCriterion("add_rweight not in", values, "addRweight");
            return (Criteria) this;
        }

        public Criteria andAddRweightBetween(Long value1, Long value2) {
            addCriterion("add_rweight between", value1, value2, "addRweight");
            return (Criteria) this;
        }

        public Criteria andAddRweightNotBetween(Long value1, Long value2) {
            addCriterion("add_rweight not between", value1, value2, "addRweight");
            return (Criteria) this;
        }

        public Criteria andAddRealtrainIsNull() {
            addCriterion("add_realtrain is null");
            return (Criteria) this;
        }

        public Criteria andAddRealtrainIsNotNull() {
            addCriterion("add_realtrain is not null");
            return (Criteria) this;
        }

        public Criteria andAddRealtrainEqualTo(Integer value) {
            addCriterion("add_realtrain =", value, "addRealtrain");
            return (Criteria) this;
        }

        public Criteria andAddRealtrainNotEqualTo(Integer value) {
            addCriterion("add_realtrain <>", value, "addRealtrain");
            return (Criteria) this;
        }

        public Criteria andAddRealtrainGreaterThan(Integer value) {
            addCriterion("add_realtrain >", value, "addRealtrain");
            return (Criteria) this;
        }

        public Criteria andAddRealtrainGreaterThanOrEqualTo(Integer value) {
            addCriterion("add_realtrain >=", value, "addRealtrain");
            return (Criteria) this;
        }

        public Criteria andAddRealtrainLessThan(Integer value) {
            addCriterion("add_realtrain <", value, "addRealtrain");
            return (Criteria) this;
        }

        public Criteria andAddRealtrainLessThanOrEqualTo(Integer value) {
            addCriterion("add_realtrain <=", value, "addRealtrain");
            return (Criteria) this;
        }

        public Criteria andAddRealtrainIn(List<Integer> values) {
            addCriterion("add_realtrain in", values, "addRealtrain");
            return (Criteria) this;
        }

        public Criteria andAddRealtrainNotIn(List<Integer> values) {
            addCriterion("add_realtrain not in", values, "addRealtrain");
            return (Criteria) this;
        }

        public Criteria andAddRealtrainBetween(Integer value1, Integer value2) {
            addCriterion("add_realtrain between", value1, value2, "addRealtrain");
            return (Criteria) this;
        }

        public Criteria andAddRealtrainNotBetween(Integer value1, Integer value2) {
            addCriterion("add_realtrain not between", value1, value2, "addRealtrain");
            return (Criteria) this;
        }

        public Criteria andAddRealweightIsNull() {
            addCriterion("add_realweight is null");
            return (Criteria) this;
        }

        public Criteria andAddRealweightIsNotNull() {
            addCriterion("add_realweight is not null");
            return (Criteria) this;
        }

        public Criteria andAddRealweightEqualTo(Long value) {
            addCriterion("add_realweight =", value, "addRealweight");
            return (Criteria) this;
        }

        public Criteria andAddRealweightNotEqualTo(Long value) {
            addCriterion("add_realweight <>", value, "addRealweight");
            return (Criteria) this;
        }

        public Criteria andAddRealweightGreaterThan(Long value) {
            addCriterion("add_realweight >", value, "addRealweight");
            return (Criteria) this;
        }

        public Criteria andAddRealweightGreaterThanOrEqualTo(Long value) {
            addCriterion("add_realweight >=", value, "addRealweight");
            return (Criteria) this;
        }

        public Criteria andAddRealweightLessThan(Long value) {
            addCriterion("add_realweight <", value, "addRealweight");
            return (Criteria) this;
        }

        public Criteria andAddRealweightLessThanOrEqualTo(Long value) {
            addCriterion("add_realweight <=", value, "addRealweight");
            return (Criteria) this;
        }

        public Criteria andAddRealweightIn(List<Long> values) {
            addCriterion("add_realweight in", values, "addRealweight");
            return (Criteria) this;
        }

        public Criteria andAddRealweightNotIn(List<Long> values) {
            addCriterion("add_realweight not in", values, "addRealweight");
            return (Criteria) this;
        }

        public Criteria andAddRealweightBetween(Long value1, Long value2) {
            addCriterion("add_realweight between", value1, value2, "addRealweight");
            return (Criteria) this;
        }

        public Criteria andAddRealweightNotBetween(Long value1, Long value2) {
            addCriterion("add_realweight not between", value1, value2, "addRealweight");
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