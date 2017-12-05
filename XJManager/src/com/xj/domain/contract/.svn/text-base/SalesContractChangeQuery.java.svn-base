package com.xj.domain.contract;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class SalesContractChangeQuery {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Integer pageNo = 1;

    protected Integer startRow;

    protected Integer pageSize = 10;

    protected String fields;

    public SalesContractChangeQuery() {
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

        public Criteria andScContractidIsNull() {
            addCriterion("sc_contractId is null");
            return (Criteria) this;
        }

        public Criteria andScContractidIsNotNull() {
            addCriterion("sc_contractId is not null");
            return (Criteria) this;
        }

        public Criteria andScContractidEqualTo(Integer value) {
            addCriterion("sc_contractId =", value, "scContractid");
            return (Criteria) this;
        }

        public Criteria andScContractidNotEqualTo(Integer value) {
            addCriterion("sc_contractId <>", value, "scContractid");
            return (Criteria) this;
        }

        public Criteria andScContractidGreaterThan(Integer value) {
            addCriterion("sc_contractId >", value, "scContractid");
            return (Criteria) this;
        }

        public Criteria andScContractidGreaterThanOrEqualTo(Integer value) {
            addCriterion("sc_contractId >=", value, "scContractid");
            return (Criteria) this;
        }

        public Criteria andScContractidLessThan(Integer value) {
            addCriterion("sc_contractId <", value, "scContractid");
            return (Criteria) this;
        }

        public Criteria andScContractidLessThanOrEqualTo(Integer value) {
            addCriterion("sc_contractId <=", value, "scContractid");
            return (Criteria) this;
        }

        public Criteria andScContractidIn(List<Integer> values) {
            addCriterion("sc_contractId in", values, "scContractid");
            return (Criteria) this;
        }

        public Criteria andScContractidNotIn(List<Integer> values) {
            addCriterion("sc_contractId not in", values, "scContractid");
            return (Criteria) this;
        }

        public Criteria andScContractidBetween(Integer value1, Integer value2) {
            addCriterion("sc_contractId between", value1, value2, "scContractid");
            return (Criteria) this;
        }

        public Criteria andScContractidNotBetween(Integer value1, Integer value2) {
            addCriterion("sc_contractId not between", value1, value2, "scContractid");
            return (Criteria) this;
        }

        public Criteria andScCustomernameIsNull() {
            addCriterion("sc_customerName is null");
            return (Criteria) this;
        }

        public Criteria andScCustomernameIsNotNull() {
            addCriterion("sc_customerName is not null");
            return (Criteria) this;
        }

        public Criteria andScCustomernameEqualTo(String value) {
            addCriterion("sc_customerName =", value, "scCustomername");
            return (Criteria) this;
        }

        public Criteria andScCustomernameNotEqualTo(String value) {
            addCriterion("sc_customerName <>", value, "scCustomername");
            return (Criteria) this;
        }

        public Criteria andScCustomernameGreaterThan(String value) {
            addCriterion("sc_customerName >", value, "scCustomername");
            return (Criteria) this;
        }

        public Criteria andScCustomernameGreaterThanOrEqualTo(String value) {
            addCriterion("sc_customerName >=", value, "scCustomername");
            return (Criteria) this;
        }

        public Criteria andScCustomernameLessThan(String value) {
            addCriterion("sc_customerName <", value, "scCustomername");
            return (Criteria) this;
        }

        public Criteria andScCustomernameLessThanOrEqualTo(String value) {
            addCriterion("sc_customerName <=", value, "scCustomername");
            return (Criteria) this;
        }

        public Criteria andScCustomernameLike(String value) {
            addCriterion("sc_customerName like", value, "scCustomername");
            return (Criteria) this;
        }

        public Criteria andScCustomernameNotLike(String value) {
            addCriterion("sc_customerName not like", value, "scCustomername");
            return (Criteria) this;
        }

        public Criteria andScCustomernameIn(List<String> values) {
            addCriterion("sc_customerName in", values, "scCustomername");
            return (Criteria) this;
        }

        public Criteria andScCustomernameNotIn(List<String> values) {
            addCriterion("sc_customerName not in", values, "scCustomername");
            return (Criteria) this;
        }

        public Criteria andScCustomernameBetween(String value1, String value2) {
            addCriterion("sc_customerName between", value1, value2, "scCustomername");
            return (Criteria) this;
        }

        public Criteria andScCustomernameNotBetween(String value1, String value2) {
            addCriterion("sc_customerName not between", value1, value2, "scCustomername");
            return (Criteria) this;
        }

        public Criteria andScContractnumberIsNull() {
            addCriterion("sc_contractNumber is null");
            return (Criteria) this;
        }

        public Criteria andScContractnumberIsNotNull() {
            addCriterion("sc_contractNumber is not null");
            return (Criteria) this;
        }

        public Criteria andScContractnumberEqualTo(Integer value) {
            addCriterion("sc_contractNumber =", value, "scContractnumber");
            return (Criteria) this;
        }

        public Criteria andScContractnumberNotEqualTo(Integer value) {
            addCriterion("sc_contractNumber <>", value, "scContractnumber");
            return (Criteria) this;
        }

        public Criteria andScContractnumberGreaterThan(Integer value) {
            addCriterion("sc_contractNumber >", value, "scContractnumber");
            return (Criteria) this;
        }

        public Criteria andScContractnumberGreaterThanOrEqualTo(Integer value) {
            addCriterion("sc_contractNumber >=", value, "scContractnumber");
            return (Criteria) this;
        }

        public Criteria andScContractnumberLessThan(Integer value) {
            addCriterion("sc_contractNumber <", value, "scContractnumber");
            return (Criteria) this;
        }

        public Criteria andScContractnumberLessThanOrEqualTo(Integer value) {
            addCriterion("sc_contractNumber <=", value, "scContractnumber");
            return (Criteria) this;
        }

        public Criteria andScContractnumberIn(List<Integer> values) {
            addCriterion("sc_contractNumber in", values, "scContractnumber");
            return (Criteria) this;
        }

        public Criteria andScContractnumberNotIn(List<Integer> values) {
            addCriterion("sc_contractNumber not in", values, "scContractnumber");
            return (Criteria) this;
        }

        public Criteria andScContractnumberBetween(Integer value1, Integer value2) {
            addCriterion("sc_contractNumber between", value1, value2, "scContractnumber");
            return (Criteria) this;
        }

        public Criteria andScContractnumberNotBetween(Integer value1, Integer value2) {
            addCriterion("sc_contractNumber not between", value1, value2, "scContractnumber");
            return (Criteria) this;
        }

        public Criteria andScApplicationwayIsNull() {
            addCriterion("sc_applicationWay is null");
            return (Criteria) this;
        }

        public Criteria andScApplicationwayIsNotNull() {
            addCriterion("sc_applicationWay is not null");
            return (Criteria) this;
        }

        public Criteria andScApplicationwayEqualTo(String value) {
            addCriterion("sc_applicationWay =", value, "scApplicationway");
            return (Criteria) this;
        }

        public Criteria andScApplicationwayNotEqualTo(String value) {
            addCriterion("sc_applicationWay <>", value, "scApplicationway");
            return (Criteria) this;
        }

        public Criteria andScApplicationwayGreaterThan(String value) {
            addCriterion("sc_applicationWay >", value, "scApplicationway");
            return (Criteria) this;
        }

        public Criteria andScApplicationwayGreaterThanOrEqualTo(String value) {
            addCriterion("sc_applicationWay >=", value, "scApplicationway");
            return (Criteria) this;
        }

        public Criteria andScApplicationwayLessThan(String value) {
            addCriterion("sc_applicationWay <", value, "scApplicationway");
            return (Criteria) this;
        }

        public Criteria andScApplicationwayLessThanOrEqualTo(String value) {
            addCriterion("sc_applicationWay <=", value, "scApplicationway");
            return (Criteria) this;
        }

        public Criteria andScApplicationwayLike(String value) {
            addCriterion("sc_applicationWay like", value, "scApplicationway");
            return (Criteria) this;
        }

        public Criteria andScApplicationwayNotLike(String value) {
            addCriterion("sc_applicationWay not like", value, "scApplicationway");
            return (Criteria) this;
        }

        public Criteria andScApplicationwayIn(List<String> values) {
            addCriterion("sc_applicationWay in", values, "scApplicationway");
            return (Criteria) this;
        }

        public Criteria andScApplicationwayNotIn(List<String> values) {
            addCriterion("sc_applicationWay not in", values, "scApplicationway");
            return (Criteria) this;
        }

        public Criteria andScApplicationwayBetween(String value1, String value2) {
            addCriterion("sc_applicationWay between", value1, value2, "scApplicationway");
            return (Criteria) this;
        }

        public Criteria andScApplicationwayNotBetween(String value1, String value2) {
            addCriterion("sc_applicationWay not between", value1, value2, "scApplicationway");
            return (Criteria) this;
        }

        public Criteria andScApplicantunitIsNull() {
            addCriterion("sc_applicantUnit is null");
            return (Criteria) this;
        }

        public Criteria andScApplicantunitIsNotNull() {
            addCriterion("sc_applicantUnit is not null");
            return (Criteria) this;
        }

        public Criteria andScApplicantunitEqualTo(String value) {
            addCriterion("sc_applicantUnit =", value, "scApplicantunit");
            return (Criteria) this;
        }

        public Criteria andScApplicantunitNotEqualTo(String value) {
            addCriterion("sc_applicantUnit <>", value, "scApplicantunit");
            return (Criteria) this;
        }

        public Criteria andScApplicantunitGreaterThan(String value) {
            addCriterion("sc_applicantUnit >", value, "scApplicantunit");
            return (Criteria) this;
        }

        public Criteria andScApplicantunitGreaterThanOrEqualTo(String value) {
            addCriterion("sc_applicantUnit >=", value, "scApplicantunit");
            return (Criteria) this;
        }

        public Criteria andScApplicantunitLessThan(String value) {
            addCriterion("sc_applicantUnit <", value, "scApplicantunit");
            return (Criteria) this;
        }

        public Criteria andScApplicantunitLessThanOrEqualTo(String value) {
            addCriterion("sc_applicantUnit <=", value, "scApplicantunit");
            return (Criteria) this;
        }

        public Criteria andScApplicantunitLike(String value) {
            addCriterion("sc_applicantUnit like", value, "scApplicantunit");
            return (Criteria) this;
        }

        public Criteria andScApplicantunitNotLike(String value) {
            addCriterion("sc_applicantUnit not like", value, "scApplicantunit");
            return (Criteria) this;
        }

        public Criteria andScApplicantunitIn(List<String> values) {
            addCriterion("sc_applicantUnit in", values, "scApplicantunit");
            return (Criteria) this;
        }

        public Criteria andScApplicantunitNotIn(List<String> values) {
            addCriterion("sc_applicantUnit not in", values, "scApplicantunit");
            return (Criteria) this;
        }

        public Criteria andScApplicantunitBetween(String value1, String value2) {
            addCriterion("sc_applicantUnit between", value1, value2, "scApplicantunit");
            return (Criteria) this;
        }

        public Criteria andScApplicantunitNotBetween(String value1, String value2) {
            addCriterion("sc_applicantUnit not between", value1, value2, "scApplicantunit");
            return (Criteria) this;
        }

        public Criteria andScReasontypeIsNull() {
            addCriterion("sc_reasonType is null");
            return (Criteria) this;
        }

        public Criteria andScReasontypeIsNotNull() {
            addCriterion("sc_reasonType is not null");
            return (Criteria) this;
        }

        public Criteria andScReasontypeEqualTo(String value) {
            addCriterion("sc_reasonType =", value, "scReasontype");
            return (Criteria) this;
        }

        public Criteria andScReasontypeNotEqualTo(String value) {
            addCriterion("sc_reasonType <>", value, "scReasontype");
            return (Criteria) this;
        }

        public Criteria andScReasontypeGreaterThan(String value) {
            addCriterion("sc_reasonType >", value, "scReasontype");
            return (Criteria) this;
        }

        public Criteria andScReasontypeGreaterThanOrEqualTo(String value) {
            addCriterion("sc_reasonType >=", value, "scReasontype");
            return (Criteria) this;
        }

        public Criteria andScReasontypeLessThan(String value) {
            addCriterion("sc_reasonType <", value, "scReasontype");
            return (Criteria) this;
        }

        public Criteria andScReasontypeLessThanOrEqualTo(String value) {
            addCriterion("sc_reasonType <=", value, "scReasontype");
            return (Criteria) this;
        }

        public Criteria andScReasontypeLike(String value) {
            addCriterion("sc_reasonType like", value, "scReasontype");
            return (Criteria) this;
        }

        public Criteria andScReasontypeNotLike(String value) {
            addCriterion("sc_reasonType not like", value, "scReasontype");
            return (Criteria) this;
        }

        public Criteria andScReasontypeIn(List<String> values) {
            addCriterion("sc_reasonType in", values, "scReasontype");
            return (Criteria) this;
        }

        public Criteria andScReasontypeNotIn(List<String> values) {
            addCriterion("sc_reasonType not in", values, "scReasontype");
            return (Criteria) this;
        }

        public Criteria andScReasontypeBetween(String value1, String value2) {
            addCriterion("sc_reasonType between", value1, value2, "scReasontype");
            return (Criteria) this;
        }

        public Criteria andScReasontypeNotBetween(String value1, String value2) {
            addCriterion("sc_reasonType not between", value1, value2, "scReasontype");
            return (Criteria) this;
        }

        public Criteria andScChangepersonIsNull() {
            addCriterion("sc_changePerson is null");
            return (Criteria) this;
        }

        public Criteria andScChangepersonIsNotNull() {
            addCriterion("sc_changePerson is not null");
            return (Criteria) this;
        }

        public Criteria andScChangepersonEqualTo(String value) {
            addCriterion("sc_changePerson =", value, "scChangeperson");
            return (Criteria) this;
        }

        public Criteria andScChangepersonNotEqualTo(String value) {
            addCriterion("sc_changePerson <>", value, "scChangeperson");
            return (Criteria) this;
        }

        public Criteria andScChangepersonGreaterThan(String value) {
            addCriterion("sc_changePerson >", value, "scChangeperson");
            return (Criteria) this;
        }

        public Criteria andScChangepersonGreaterThanOrEqualTo(String value) {
            addCriterion("sc_changePerson >=", value, "scChangeperson");
            return (Criteria) this;
        }

        public Criteria andScChangepersonLessThan(String value) {
            addCriterion("sc_changePerson <", value, "scChangeperson");
            return (Criteria) this;
        }

        public Criteria andScChangepersonLessThanOrEqualTo(String value) {
            addCriterion("sc_changePerson <=", value, "scChangeperson");
            return (Criteria) this;
        }

        public Criteria andScChangepersonLike(String value) {
            addCriterion("sc_changePerson like", value, "scChangeperson");
            return (Criteria) this;
        }

        public Criteria andScChangepersonNotLike(String value) {
            addCriterion("sc_changePerson not like", value, "scChangeperson");
            return (Criteria) this;
        }

        public Criteria andScChangepersonIn(List<String> values) {
            addCriterion("sc_changePerson in", values, "scChangeperson");
            return (Criteria) this;
        }

        public Criteria andScChangepersonNotIn(List<String> values) {
            addCriterion("sc_changePerson not in", values, "scChangeperson");
            return (Criteria) this;
        }

        public Criteria andScChangepersonBetween(String value1, String value2) {
            addCriterion("sc_changePerson between", value1, value2, "scChangeperson");
            return (Criteria) this;
        }

        public Criteria andScChangepersonNotBetween(String value1, String value2) {
            addCriterion("sc_changePerson not between", value1, value2, "scChangeperson");
            return (Criteria) this;
        }

        public Criteria andScChangetimeIsNull() {
            addCriterion("sc_changeTime is null");
            return (Criteria) this;
        }

        public Criteria andScChangetimeIsNotNull() {
            addCriterion("sc_changeTime is not null");
            return (Criteria) this;
        }

        public Criteria andScChangetimeEqualTo(Date value) {
            addCriterionForJDBCDate("sc_changeTime =", value, "scChangetime");
            return (Criteria) this;
        }

        public Criteria andScChangetimeNotEqualTo(Date value) {
            addCriterionForJDBCDate("sc_changeTime <>", value, "scChangetime");
            return (Criteria) this;
        }

        public Criteria andScChangetimeGreaterThan(Date value) {
            addCriterionForJDBCDate("sc_changeTime >", value, "scChangetime");
            return (Criteria) this;
        }

        public Criteria andScChangetimeGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("sc_changeTime >=", value, "scChangetime");
            return (Criteria) this;
        }

        public Criteria andScChangetimeLessThan(Date value) {
            addCriterionForJDBCDate("sc_changeTime <", value, "scChangetime");
            return (Criteria) this;
        }

        public Criteria andScChangetimeLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("sc_changeTime <=", value, "scChangetime");
            return (Criteria) this;
        }

        public Criteria andScChangetimeIn(List<Date> values) {
            addCriterionForJDBCDate("sc_changeTime in", values, "scChangetime");
            return (Criteria) this;
        }

        public Criteria andScChangetimeNotIn(List<Date> values) {
            addCriterionForJDBCDate("sc_changeTime not in", values, "scChangetime");
            return (Criteria) this;
        }

        public Criteria andScChangetimeBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("sc_changeTime between", value1, value2, "scChangetime");
            return (Criteria) this;
        }

        public Criteria andScChangetimeNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("sc_changeTime not between", value1, value2, "scChangetime");
            return (Criteria) this;
        }

        public Criteria andScStatusIsNull() {
            addCriterion("sc_status is null");
            return (Criteria) this;
        }

        public Criteria andScStatusIsNotNull() {
            addCriterion("sc_status is not null");
            return (Criteria) this;
        }

        public Criteria andScStatusEqualTo(Integer value) {
            addCriterion("sc_status =", value, "scStatus");
            return (Criteria) this;
        }

        public Criteria andScStatusNotEqualTo(Integer value) {
            addCriterion("sc_status <>", value, "scStatus");
            return (Criteria) this;
        }

        public Criteria andScStatusGreaterThan(Integer value) {
            addCriterion("sc_status >", value, "scStatus");
            return (Criteria) this;
        }

        public Criteria andScStatusGreaterThanOrEqualTo(Integer value) {
            addCriterion("sc_status >=", value, "scStatus");
            return (Criteria) this;
        }

        public Criteria andScStatusLessThan(Integer value) {
            addCriterion("sc_status <", value, "scStatus");
            return (Criteria) this;
        }

        public Criteria andScStatusLessThanOrEqualTo(Integer value) {
            addCriterion("sc_status <=", value, "scStatus");
            return (Criteria) this;
        }

        public Criteria andScStatusIn(List<Integer> values) {
            addCriterion("sc_status in", values, "scStatus");
            return (Criteria) this;
        }

        public Criteria andScStatusNotIn(List<Integer> values) {
            addCriterion("sc_status not in", values, "scStatus");
            return (Criteria) this;
        }

        public Criteria andScStatusBetween(Integer value1, Integer value2) {
            addCriterion("sc_status between", value1, value2, "scStatus");
            return (Criteria) this;
        }

        public Criteria andScStatusNotBetween(Integer value1, Integer value2) {
            addCriterion("sc_status not between", value1, value2, "scStatus");
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