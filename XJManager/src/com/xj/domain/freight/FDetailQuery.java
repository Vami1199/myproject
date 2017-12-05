package com.xj.domain.freight;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class FDetailQuery {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Integer pageNo = 1;

    protected Integer startRow;

    protected Integer pageSize = 10;

    protected String fields;

    public FDetailQuery() {
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

        public Criteria andDeIdIsNull() {
            addCriterion("de_id is null");
            return (Criteria) this;
        }

        public Criteria andDeIdIsNotNull() {
            addCriterion("de_id is not null");
            return (Criteria) this;
        }

        public Criteria andDeIdEqualTo(String value) {
            addCriterion("de_id =", value, "deId");
            return (Criteria) this;
        }

        public Criteria andDeIdNotEqualTo(String value) {
            addCriterion("de_id <>", value, "deId");
            return (Criteria) this;
        }

        public Criteria andDeIdGreaterThan(String value) {
            addCriterion("de_id >", value, "deId");
            return (Criteria) this;
        }

        public Criteria andDeIdGreaterThanOrEqualTo(String value) {
            addCriterion("de_id >=", value, "deId");
            return (Criteria) this;
        }

        public Criteria andDeIdLessThan(String value) {
            addCriterion("de_id <", value, "deId");
            return (Criteria) this;
        }

        public Criteria andDeIdLessThanOrEqualTo(String value) {
            addCriterion("de_id <=", value, "deId");
            return (Criteria) this;
        }

        public Criteria andDeIdLike(String value) {
            addCriterion("de_id like", value, "deId");
            return (Criteria) this;
        }

        public Criteria andDeIdNotLike(String value) {
            addCriterion("de_id not like", value, "deId");
            return (Criteria) this;
        }

        public Criteria andDeIdIn(List<String> values) {
            addCriterion("de_id in", values, "deId");
            return (Criteria) this;
        }

        public Criteria andDeIdNotIn(List<String> values) {
            addCriterion("de_id not in", values, "deId");
            return (Criteria) this;
        }

        public Criteria andDeIdBetween(String value1, String value2) {
            addCriterion("de_id between", value1, value2, "deId");
            return (Criteria) this;
        }

        public Criteria andDeIdNotBetween(String value1, String value2) {
            addCriterion("de_id not between", value1, value2, "deId");
            return (Criteria) this;
        }

        public Criteria andDeOidIsNull() {
            addCriterion("de_oid is null");
            return (Criteria) this;
        }

        public Criteria andDeOidIsNotNull() {
            addCriterion("de_oid is not null");
            return (Criteria) this;
        }

        public Criteria andDeOidEqualTo(String value) {
            addCriterion("de_oid =", value, "deOid");
            return (Criteria) this;
        }

        public Criteria andDeOidNotEqualTo(String value) {
            addCriterion("de_oid <>", value, "deOid");
            return (Criteria) this;
        }

        public Criteria andDeOidGreaterThan(String value) {
            addCriterion("de_oid >", value, "deOid");
            return (Criteria) this;
        }

        public Criteria andDeOidGreaterThanOrEqualTo(String value) {
            addCriterion("de_oid >=", value, "deOid");
            return (Criteria) this;
        }

        public Criteria andDeOidLessThan(String value) {
            addCriterion("de_oid <", value, "deOid");
            return (Criteria) this;
        }

        public Criteria andDeOidLessThanOrEqualTo(String value) {
            addCriterion("de_oid <=", value, "deOid");
            return (Criteria) this;
        }

        public Criteria andDeOidLike(String value) {
            addCriterion("de_oid like", value, "deOid");
            return (Criteria) this;
        }

        public Criteria andDeOidNotLike(String value) {
            addCriterion("de_oid not like", value, "deOid");
            return (Criteria) this;
        }

        public Criteria andDeOidIn(List<String> values) {
            addCriterion("de_oid in", values, "deOid");
            return (Criteria) this;
        }

        public Criteria andDeOidNotIn(List<String> values) {
            addCriterion("de_oid not in", values, "deOid");
            return (Criteria) this;
        }

        public Criteria andDeOidBetween(String value1, String value2) {
            addCriterion("de_oid between", value1, value2, "deOid");
            return (Criteria) this;
        }

        public Criteria andDeOidNotBetween(String value1, String value2) {
            addCriterion("de_oid not between", value1, value2, "deOid");
            return (Criteria) this;
        }

        public Criteria andDeTransportIsNull() {
            addCriterion("de_transport is null");
            return (Criteria) this;
        }

        public Criteria andDeTransportIsNotNull() {
            addCriterion("de_transport is not null");
            return (Criteria) this;
        }

        public Criteria andDeTransportEqualTo(Long value) {
            addCriterion("de_transport =", value, "deTransport");
            return (Criteria) this;
        }

        public Criteria andDeTransportNotEqualTo(Long value) {
            addCriterion("de_transport <>", value, "deTransport");
            return (Criteria) this;
        }

        public Criteria andDeTransportGreaterThan(Long value) {
            addCriterion("de_transport >", value, "deTransport");
            return (Criteria) this;
        }

        public Criteria andDeTransportGreaterThanOrEqualTo(Long value) {
            addCriterion("de_transport >=", value, "deTransport");
            return (Criteria) this;
        }

        public Criteria andDeTransportLessThan(Long value) {
            addCriterion("de_transport <", value, "deTransport");
            return (Criteria) this;
        }

        public Criteria andDeTransportLessThanOrEqualTo(Long value) {
            addCriterion("de_transport <=", value, "deTransport");
            return (Criteria) this;
        }

        public Criteria andDeTransportIn(List<Long> values) {
            addCriterion("de_transport in", values, "deTransport");
            return (Criteria) this;
        }

        public Criteria andDeTransportNotIn(List<Long> values) {
            addCriterion("de_transport not in", values, "deTransport");
            return (Criteria) this;
        }

        public Criteria andDeTransportBetween(Long value1, Long value2) {
            addCriterion("de_transport between", value1, value2, "deTransport");
            return (Criteria) this;
        }

        public Criteria andDeTransportNotBetween(Long value1, Long value2) {
            addCriterion("de_transport not between", value1, value2, "deTransport");
            return (Criteria) this;
        }

        public Criteria andDeOverdueIsNull() {
            addCriterion("de_overdue is null");
            return (Criteria) this;
        }

        public Criteria andDeOverdueIsNotNull() {
            addCriterion("de_overdue is not null");
            return (Criteria) this;
        }

        public Criteria andDeOverdueEqualTo(Long value) {
            addCriterion("de_overdue =", value, "deOverdue");
            return (Criteria) this;
        }

        public Criteria andDeOverdueNotEqualTo(Long value) {
            addCriterion("de_overdue <>", value, "deOverdue");
            return (Criteria) this;
        }

        public Criteria andDeOverdueGreaterThan(Long value) {
            addCriterion("de_overdue >", value, "deOverdue");
            return (Criteria) this;
        }

        public Criteria andDeOverdueGreaterThanOrEqualTo(Long value) {
            addCriterion("de_overdue >=", value, "deOverdue");
            return (Criteria) this;
        }

        public Criteria andDeOverdueLessThan(Long value) {
            addCriterion("de_overdue <", value, "deOverdue");
            return (Criteria) this;
        }

        public Criteria andDeOverdueLessThanOrEqualTo(Long value) {
            addCriterion("de_overdue <=", value, "deOverdue");
            return (Criteria) this;
        }

        public Criteria andDeOverdueIn(List<Long> values) {
            addCriterion("de_overdue in", values, "deOverdue");
            return (Criteria) this;
        }

        public Criteria andDeOverdueNotIn(List<Long> values) {
            addCriterion("de_overdue not in", values, "deOverdue");
            return (Criteria) this;
        }

        public Criteria andDeOverdueBetween(Long value1, Long value2) {
            addCriterion("de_overdue between", value1, value2, "deOverdue");
            return (Criteria) this;
        }

        public Criteria andDeOverdueNotBetween(Long value1, Long value2) {
            addCriterion("de_overdue not between", value1, value2, "deOverdue");
            return (Criteria) this;
        }

        public Criteria andDeOvertimeIsNull() {
            addCriterion("de_overtime is null");
            return (Criteria) this;
        }

        public Criteria andDeOvertimeIsNotNull() {
            addCriterion("de_overtime is not null");
            return (Criteria) this;
        }

        public Criteria andDeOvertimeEqualTo(Long value) {
            addCriterion("de_overtime =", value, "deOvertime");
            return (Criteria) this;
        }

        public Criteria andDeOvertimeNotEqualTo(Long value) {
            addCriterion("de_overtime <>", value, "deOvertime");
            return (Criteria) this;
        }

        public Criteria andDeOvertimeGreaterThan(Long value) {
            addCriterion("de_overtime >", value, "deOvertime");
            return (Criteria) this;
        }

        public Criteria andDeOvertimeGreaterThanOrEqualTo(Long value) {
            addCriterion("de_overtime >=", value, "deOvertime");
            return (Criteria) this;
        }

        public Criteria andDeOvertimeLessThan(Long value) {
            addCriterion("de_overtime <", value, "deOvertime");
            return (Criteria) this;
        }

        public Criteria andDeOvertimeLessThanOrEqualTo(Long value) {
            addCriterion("de_overtime <=", value, "deOvertime");
            return (Criteria) this;
        }

        public Criteria andDeOvertimeIn(List<Long> values) {
            addCriterion("de_overtime in", values, "deOvertime");
            return (Criteria) this;
        }

        public Criteria andDeOvertimeNotIn(List<Long> values) {
            addCriterion("de_overtime not in", values, "deOvertime");
            return (Criteria) this;
        }

        public Criteria andDeOvertimeBetween(Long value1, Long value2) {
            addCriterion("de_overtime between", value1, value2, "deOvertime");
            return (Criteria) this;
        }

        public Criteria andDeOvertimeNotBetween(Long value1, Long value2) {
            addCriterion("de_overtime not between", value1, value2, "deOvertime");
            return (Criteria) this;
        }

        public Criteria andDeSafelyIsNull() {
            addCriterion("de_safely is null");
            return (Criteria) this;
        }

        public Criteria andDeSafelyIsNotNull() {
            addCriterion("de_safely is not null");
            return (Criteria) this;
        }

        public Criteria andDeSafelyEqualTo(Long value) {
            addCriterion("de_safely =", value, "deSafely");
            return (Criteria) this;
        }

        public Criteria andDeSafelyNotEqualTo(Long value) {
            addCriterion("de_safely <>", value, "deSafely");
            return (Criteria) this;
        }

        public Criteria andDeSafelyGreaterThan(Long value) {
            addCriterion("de_safely >", value, "deSafely");
            return (Criteria) this;
        }

        public Criteria andDeSafelyGreaterThanOrEqualTo(Long value) {
            addCriterion("de_safely >=", value, "deSafely");
            return (Criteria) this;
        }

        public Criteria andDeSafelyLessThan(Long value) {
            addCriterion("de_safely <", value, "deSafely");
            return (Criteria) this;
        }

        public Criteria andDeSafelyLessThanOrEqualTo(Long value) {
            addCriterion("de_safely <=", value, "deSafely");
            return (Criteria) this;
        }

        public Criteria andDeSafelyIn(List<Long> values) {
            addCriterion("de_safely in", values, "deSafely");
            return (Criteria) this;
        }

        public Criteria andDeSafelyNotIn(List<Long> values) {
            addCriterion("de_safely not in", values, "deSafely");
            return (Criteria) this;
        }

        public Criteria andDeSafelyBetween(Long value1, Long value2) {
            addCriterion("de_safely between", value1, value2, "deSafely");
            return (Criteria) this;
        }

        public Criteria andDeSafelyNotBetween(Long value1, Long value2) {
            addCriterion("de_safely not between", value1, value2, "deSafely");
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