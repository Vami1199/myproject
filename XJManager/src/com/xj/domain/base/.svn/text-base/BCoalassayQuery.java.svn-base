package com.xj.domain.base;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class BCoalassayQuery {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Integer pageNo = 1;

    protected Integer startRow;

    protected Integer pageSize = 10;

    protected String fields;

    public BCoalassayQuery() {
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

        public Criteria andCaIdIsNull() {
            addCriterion("ca_id is null");
            return (Criteria) this;
        }

        public Criteria andCaIdIsNotNull() {
            addCriterion("ca_id is not null");
            return (Criteria) this;
        }

        public Criteria andCaIdEqualTo(String value) {
            addCriterion("ca_id =", value, "caId");
            return (Criteria) this;
        }

        public Criteria andCaIdNotEqualTo(String value) {
            addCriterion("ca_id <>", value, "caId");
            return (Criteria) this;
        }

        public Criteria andCaIdGreaterThan(String value) {
            addCriterion("ca_id >", value, "caId");
            return (Criteria) this;
        }

        public Criteria andCaIdGreaterThanOrEqualTo(String value) {
            addCriterion("ca_id >=", value, "caId");
            return (Criteria) this;
        }

        public Criteria andCaIdLessThan(String value) {
            addCriterion("ca_id <", value, "caId");
            return (Criteria) this;
        }

        public Criteria andCaIdLessThanOrEqualTo(String value) {
            addCriterion("ca_id <=", value, "caId");
            return (Criteria) this;
        }

        public Criteria andCaIdLike(String value) {
            addCriterion("ca_id like", value, "caId");
            return (Criteria) this;
        }

        public Criteria andCaIdNotLike(String value) {
            addCriterion("ca_id not like", value, "caId");
            return (Criteria) this;
        }

        public Criteria andCaIdIn(List<String> values) {
            addCriterion("ca_id in", values, "caId");
            return (Criteria) this;
        }

        public Criteria andCaIdNotIn(List<String> values) {
            addCriterion("ca_id not in", values, "caId");
            return (Criteria) this;
        }

        public Criteria andCaIdBetween(String value1, String value2) {
            addCriterion("ca_id between", value1, value2, "caId");
            return (Criteria) this;
        }

        public Criteria andCaIdNotBetween(String value1, String value2) {
            addCriterion("ca_id not between", value1, value2, "caId");
            return (Criteria) this;
        }

        public Criteria andCaNameIsNull() {
            addCriterion("ca_name is null");
            return (Criteria) this;
        }

        public Criteria andCaNameIsNotNull() {
            addCriterion("ca_name is not null");
            return (Criteria) this;
        }

        public Criteria andCaNameEqualTo(String value) {
            addCriterion("ca_name =", value, "caName");
            return (Criteria) this;
        }

        public Criteria andCaNameNotEqualTo(String value) {
            addCriterion("ca_name <>", value, "caName");
            return (Criteria) this;
        }

        public Criteria andCaNameGreaterThan(String value) {
            addCriterion("ca_name >", value, "caName");
            return (Criteria) this;
        }

        public Criteria andCaNameGreaterThanOrEqualTo(String value) {
            addCriterion("ca_name >=", value, "caName");
            return (Criteria) this;
        }

        public Criteria andCaNameLessThan(String value) {
            addCriterion("ca_name <", value, "caName");
            return (Criteria) this;
        }

        public Criteria andCaNameLessThanOrEqualTo(String value) {
            addCriterion("ca_name <=", value, "caName");
            return (Criteria) this;
        }

        public Criteria andCaNameLike(String value) {
            addCriterion("ca_name like", value, "caName");
            return (Criteria) this;
        }

        public Criteria andCaNameNotLike(String value) {
            addCriterion("ca_name not like", value, "caName");
            return (Criteria) this;
        }

        public Criteria andCaNameIn(List<String> values) {
            addCriterion("ca_name in", values, "caName");
            return (Criteria) this;
        }

        public Criteria andCaNameNotIn(List<String> values) {
            addCriterion("ca_name not in", values, "caName");
            return (Criteria) this;
        }

        public Criteria andCaNameBetween(String value1, String value2) {
            addCriterion("ca_name between", value1, value2, "caName");
            return (Criteria) this;
        }

        public Criteria andCaNameNotBetween(String value1, String value2) {
            addCriterion("ca_name not between", value1, value2, "caName");
            return (Criteria) this;
        }

        public Criteria andCaUnitIsNull() {
            addCriterion("ca_unit is null");
            return (Criteria) this;
        }

        public Criteria andCaUnitIsNotNull() {
            addCriterion("ca_unit is not null");
            return (Criteria) this;
        }

        public Criteria andCaUnitEqualTo(String value) {
            addCriterion("ca_unit =", value, "caUnit");
            return (Criteria) this;
        }

        public Criteria andCaUnitNotEqualTo(String value) {
            addCriterion("ca_unit <>", value, "caUnit");
            return (Criteria) this;
        }

        public Criteria andCaUnitGreaterThan(String value) {
            addCriterion("ca_unit >", value, "caUnit");
            return (Criteria) this;
        }

        public Criteria andCaUnitGreaterThanOrEqualTo(String value) {
            addCriterion("ca_unit >=", value, "caUnit");
            return (Criteria) this;
        }

        public Criteria andCaUnitLessThan(String value) {
            addCriterion("ca_unit <", value, "caUnit");
            return (Criteria) this;
        }

        public Criteria andCaUnitLessThanOrEqualTo(String value) {
            addCriterion("ca_unit <=", value, "caUnit");
            return (Criteria) this;
        }

        public Criteria andCaUnitLike(String value) {
            addCriterion("ca_unit like", value, "caUnit");
            return (Criteria) this;
        }

        public Criteria andCaUnitNotLike(String value) {
            addCriterion("ca_unit not like", value, "caUnit");
            return (Criteria) this;
        }

        public Criteria andCaUnitIn(List<String> values) {
            addCriterion("ca_unit in", values, "caUnit");
            return (Criteria) this;
        }

        public Criteria andCaUnitNotIn(List<String> values) {
            addCriterion("ca_unit not in", values, "caUnit");
            return (Criteria) this;
        }

        public Criteria andCaUnitBetween(String value1, String value2) {
            addCriterion("ca_unit between", value1, value2, "caUnit");
            return (Criteria) this;
        }

        public Criteria andCaUnitNotBetween(String value1, String value2) {
            addCriterion("ca_unit not between", value1, value2, "caUnit");
            return (Criteria) this;
        }

        public Criteria andCaEnIsNull() {
            addCriterion("ca_en is null");
            return (Criteria) this;
        }

        public Criteria andCaEnIsNotNull() {
            addCriterion("ca_en is not null");
            return (Criteria) this;
        }

        public Criteria andCaEnEqualTo(String value) {
            addCriterion("ca_en =", value, "caEn");
            return (Criteria) this;
        }

        public Criteria andCaEnNotEqualTo(String value) {
            addCriterion("ca_en <>", value, "caEn");
            return (Criteria) this;
        }

        public Criteria andCaEnGreaterThan(String value) {
            addCriterion("ca_en >", value, "caEn");
            return (Criteria) this;
        }

        public Criteria andCaEnGreaterThanOrEqualTo(String value) {
            addCriterion("ca_en >=", value, "caEn");
            return (Criteria) this;
        }

        public Criteria andCaEnLessThan(String value) {
            addCriterion("ca_en <", value, "caEn");
            return (Criteria) this;
        }

        public Criteria andCaEnLessThanOrEqualTo(String value) {
            addCriterion("ca_en <=", value, "caEn");
            return (Criteria) this;
        }

        public Criteria andCaEnLike(String value) {
            addCriterion("ca_en like", value, "caEn");
            return (Criteria) this;
        }

        public Criteria andCaEnNotLike(String value) {
            addCriterion("ca_en not like", value, "caEn");
            return (Criteria) this;
        }

        public Criteria andCaEnIn(List<String> values) {
            addCriterion("ca_en in", values, "caEn");
            return (Criteria) this;
        }

        public Criteria andCaEnNotIn(List<String> values) {
            addCriterion("ca_en not in", values, "caEn");
            return (Criteria) this;
        }

        public Criteria andCaEnBetween(String value1, String value2) {
            addCriterion("ca_en between", value1, value2, "caEn");
            return (Criteria) this;
        }

        public Criteria andCaEnNotBetween(String value1, String value2) {
            addCriterion("ca_en not between", value1, value2, "caEn");
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