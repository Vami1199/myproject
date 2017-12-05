package com.xj.domain.base;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class BRailwaysubbureauQuery {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Integer pageNo = 1;

    protected Integer startRow;

    protected Integer pageSize = 10;

    protected String fields;

    public BRailwaysubbureauQuery() {
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

        public Criteria andSubbureauIdIsNull() {
            addCriterion("subbureau_id is null");
            return (Criteria) this;
        }

        public Criteria andSubbureauIdIsNotNull() {
            addCriterion("subbureau_id is not null");
            return (Criteria) this;
        }

        public Criteria andSubbureauIdEqualTo(Integer value) {
            addCriterion("subbureau_id =", value, "subbureauId");
            return (Criteria) this;
        }

        public Criteria andSubbureauIdNotEqualTo(Integer value) {
            addCriterion("subbureau_id <>", value, "subbureauId");
            return (Criteria) this;
        }

        public Criteria andSubbureauIdGreaterThan(Integer value) {
            addCriterion("subbureau_id >", value, "subbureauId");
            return (Criteria) this;
        }

        public Criteria andSubbureauIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("subbureau_id >=", value, "subbureauId");
            return (Criteria) this;
        }

        public Criteria andSubbureauIdLessThan(Integer value) {
            addCriterion("subbureau_id <", value, "subbureauId");
            return (Criteria) this;
        }

        public Criteria andSubbureauIdLessThanOrEqualTo(Integer value) {
            addCriterion("subbureau_id <=", value, "subbureauId");
            return (Criteria) this;
        }

        public Criteria andSubbureauIdIn(List<Integer> values) {
            addCriterion("subbureau_id in", values, "subbureauId");
            return (Criteria) this;
        }

        public Criteria andSubbureauIdNotIn(List<Integer> values) {
            addCriterion("subbureau_id not in", values, "subbureauId");
            return (Criteria) this;
        }

        public Criteria andSubbureauIdBetween(Integer value1, Integer value2) {
            addCriterion("subbureau_id between", value1, value2, "subbureauId");
            return (Criteria) this;
        }

        public Criteria andSubbureauIdNotBetween(Integer value1, Integer value2) {
            addCriterion("subbureau_id not between", value1, value2, "subbureauId");
            return (Criteria) this;
        }

        public Criteria andSubbureauNameIsNull() {
            addCriterion("subbureau_name is null");
            return (Criteria) this;
        }

        public Criteria andSubbureauNameIsNotNull() {
            addCriterion("subbureau_name is not null");
            return (Criteria) this;
        }

        public Criteria andSubbureauNameEqualTo(String value) {
            addCriterion("subbureau_name =", value, "subbureauName");
            return (Criteria) this;
        }

        public Criteria andSubbureauNameNotEqualTo(String value) {
            addCriterion("subbureau_name <>", value, "subbureauName");
            return (Criteria) this;
        }

        public Criteria andSubbureauNameGreaterThan(String value) {
            addCriterion("subbureau_name >", value, "subbureauName");
            return (Criteria) this;
        }

        public Criteria andSubbureauNameGreaterThanOrEqualTo(String value) {
            addCriterion("subbureau_name >=", value, "subbureauName");
            return (Criteria) this;
        }

        public Criteria andSubbureauNameLessThan(String value) {
            addCriterion("subbureau_name <", value, "subbureauName");
            return (Criteria) this;
        }

        public Criteria andSubbureauNameLessThanOrEqualTo(String value) {
            addCriterion("subbureau_name <=", value, "subbureauName");
            return (Criteria) this;
        }

        public Criteria andSubbureauNameLike(String value) {
            addCriterion("subbureau_name like", value, "subbureauName");
            return (Criteria) this;
        }

        public Criteria andSubbureauNameNotLike(String value) {
            addCriterion("subbureau_name not like", value, "subbureauName");
            return (Criteria) this;
        }

        public Criteria andSubbureauNameIn(List<String> values) {
            addCriterion("subbureau_name in", values, "subbureauName");
            return (Criteria) this;
        }

        public Criteria andSubbureauNameNotIn(List<String> values) {
            addCriterion("subbureau_name not in", values, "subbureauName");
            return (Criteria) this;
        }

        public Criteria andSubbureauNameBetween(String value1, String value2) {
            addCriterion("subbureau_name between", value1, value2, "subbureauName");
            return (Criteria) this;
        }

        public Criteria andSubbureauNameNotBetween(String value1, String value2) {
            addCriterion("subbureau_name not between", value1, value2, "subbureauName");
            return (Criteria) this;
        }

        public Criteria andSubbureauAdminidIsNull() {
            addCriterion("subbureau_adminid is null");
            return (Criteria) this;
        }

        public Criteria andSubbureauAdminidIsNotNull() {
            addCriterion("subbureau_adminid is not null");
            return (Criteria) this;
        }

        public Criteria andSubbureauAdminidEqualTo(Integer value) {
            addCriterion("subbureau_adminid =", value, "subbureauAdminid");
            return (Criteria) this;
        }

        public Criteria andSubbureauAdminidNotEqualTo(Integer value) {
            addCriterion("subbureau_adminid <>", value, "subbureauAdminid");
            return (Criteria) this;
        }

        public Criteria andSubbureauAdminidGreaterThan(Integer value) {
            addCriterion("subbureau_adminid >", value, "subbureauAdminid");
            return (Criteria) this;
        }

        public Criteria andSubbureauAdminidGreaterThanOrEqualTo(Integer value) {
            addCriterion("subbureau_adminid >=", value, "subbureauAdminid");
            return (Criteria) this;
        }

        public Criteria andSubbureauAdminidLessThan(Integer value) {
            addCriterion("subbureau_adminid <", value, "subbureauAdminid");
            return (Criteria) this;
        }

        public Criteria andSubbureauAdminidLessThanOrEqualTo(Integer value) {
            addCriterion("subbureau_adminid <=", value, "subbureauAdminid");
            return (Criteria) this;
        }

        public Criteria andSubbureauAdminidIn(List<Integer> values) {
            addCriterion("subbureau_adminid in", values, "subbureauAdminid");
            return (Criteria) this;
        }

        public Criteria andSubbureauAdminidNotIn(List<Integer> values) {
            addCriterion("subbureau_adminid not in", values, "subbureauAdminid");
            return (Criteria) this;
        }

        public Criteria andSubbureauAdminidBetween(Integer value1, Integer value2) {
            addCriterion("subbureau_adminid between", value1, value2, "subbureauAdminid");
            return (Criteria) this;
        }

        public Criteria andSubbureauAdminidNotBetween(Integer value1, Integer value2) {
            addCriterion("subbureau_adminid not between", value1, value2, "subbureauAdminid");
            return (Criteria) this;
        }

        public Criteria andSubbureauIskeyIsNull() {
            addCriterion("subbureau_iskey is null");
            return (Criteria) this;
        }

        public Criteria andSubbureauIskeyIsNotNull() {
            addCriterion("subbureau_iskey is not null");
            return (Criteria) this;
        }

        public Criteria andSubbureauIskeyEqualTo(Byte value) {
            addCriterion("subbureau_iskey =", value, "subbureauIskey");
            return (Criteria) this;
        }

        public Criteria andSubbureauIskeyNotEqualTo(Byte value) {
            addCriterion("subbureau_iskey <>", value, "subbureauIskey");
            return (Criteria) this;
        }

        public Criteria andSubbureauIskeyGreaterThan(Byte value) {
            addCriterion("subbureau_iskey >", value, "subbureauIskey");
            return (Criteria) this;
        }

        public Criteria andSubbureauIskeyGreaterThanOrEqualTo(Byte value) {
            addCriterion("subbureau_iskey >=", value, "subbureauIskey");
            return (Criteria) this;
        }

        public Criteria andSubbureauIskeyLessThan(Byte value) {
            addCriterion("subbureau_iskey <", value, "subbureauIskey");
            return (Criteria) this;
        }

        public Criteria andSubbureauIskeyLessThanOrEqualTo(Byte value) {
            addCriterion("subbureau_iskey <=", value, "subbureauIskey");
            return (Criteria) this;
        }

        public Criteria andSubbureauIskeyIn(List<Byte> values) {
            addCriterion("subbureau_iskey in", values, "subbureauIskey");
            return (Criteria) this;
        }

        public Criteria andSubbureauIskeyNotIn(List<Byte> values) {
            addCriterion("subbureau_iskey not in", values, "subbureauIskey");
            return (Criteria) this;
        }

        public Criteria andSubbureauIskeyBetween(Byte value1, Byte value2) {
            addCriterion("subbureau_iskey between", value1, value2, "subbureauIskey");
            return (Criteria) this;
        }

        public Criteria andSubbureauIskeyNotBetween(Byte value1, Byte value2) {
            addCriterion("subbureau_iskey not between", value1, value2, "subbureauIskey");
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