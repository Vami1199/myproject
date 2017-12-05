package com.xj.domain.base;

import java.util.ArrayList;
import java.util.List;

public class BRailwaywagonsysQuery {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Integer pageNo = 1;

    protected Integer startRow;

    protected Integer pageSize = 10;

    protected String fields;

    public BRailwaywagonsysQuery() {
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

        public Criteria andRwIdIsNull() {
            addCriterion("rw_id is null");
            return (Criteria) this;
        }

        public Criteria andRwIdIsNotNull() {
            addCriterion("rw_id is not null");
            return (Criteria) this;
        }

        public Criteria andRwIdEqualTo(String value) {
            addCriterion("rw_id =", value, "rwId");
            return (Criteria) this;
        }

        public Criteria andRwIdNotEqualTo(String value) {
            addCriterion("rw_id <>", value, "rwId");
            return (Criteria) this;
        }

        public Criteria andRwIdGreaterThan(String value) {
            addCriterion("rw_id >", value, "rwId");
            return (Criteria) this;
        }

        public Criteria andRwIdGreaterThanOrEqualTo(String value) {
            addCriterion("rw_id >=", value, "rwId");
            return (Criteria) this;
        }

        public Criteria andRwIdLessThan(String value) {
            addCriterion("rw_id <", value, "rwId");
            return (Criteria) this;
        }

        public Criteria andRwIdLessThanOrEqualTo(String value) {
            addCriterion("rw_id <=", value, "rwId");
            return (Criteria) this;
        }

        public Criteria andRwIdLike(String value) {
            addCriterion("rw_id like", value, "rwId");
            return (Criteria) this;
        }

        public Criteria andRwIdNotLike(String value) {
            addCriterion("rw_id not like", value, "rwId");
            return (Criteria) this;
        }

        public Criteria andRwIdIn(List<String> values) {
            addCriterion("rw_id in", values, "rwId");
            return (Criteria) this;
        }

        public Criteria andRwIdNotIn(List<String> values) {
            addCriterion("rw_id not in", values, "rwId");
            return (Criteria) this;
        }

        public Criteria andRwIdBetween(String value1, String value2) {
            addCriterion("rw_id between", value1, value2, "rwId");
            return (Criteria) this;
        }

        public Criteria andRwIdNotBetween(String value1, String value2) {
            addCriterion("rw_id not between", value1, value2, "rwId");
            return (Criteria) this;
        }

        public Criteria andRwStartIsNull() {
            addCriterion("rw_start is null");
            return (Criteria) this;
        }

        public Criteria andRwStartIsNotNull() {
            addCriterion("rw_start is not null");
            return (Criteria) this;
        }

        public Criteria andRwStartEqualTo(Integer value) {
            addCriterion("rw_start =", value, "rwStart");
            return (Criteria) this;
        }

        public Criteria andRwStartNotEqualTo(Integer value) {
            addCriterion("rw_start <>", value, "rwStart");
            return (Criteria) this;
        }

        public Criteria andRwStartGreaterThan(Integer value) {
            addCriterion("rw_start >", value, "rwStart");
            return (Criteria) this;
        }

        public Criteria andRwStartGreaterThanOrEqualTo(Integer value) {
            addCriterion("rw_start >=", value, "rwStart");
            return (Criteria) this;
        }

        public Criteria andRwStartLessThan(Integer value) {
            addCriterion("rw_start <", value, "rwStart");
            return (Criteria) this;
        }

        public Criteria andRwStartLessThanOrEqualTo(Integer value) {
            addCriterion("rw_start <=", value, "rwStart");
            return (Criteria) this;
        }

        public Criteria andRwStartIn(List<Integer> values) {
            addCriterion("rw_start in", values, "rwStart");
            return (Criteria) this;
        }

        public Criteria andRwStartNotIn(List<Integer> values) {
            addCriterion("rw_start not in", values, "rwStart");
            return (Criteria) this;
        }

        public Criteria andRwStartBetween(Integer value1, Integer value2) {
            addCriterion("rw_start between", value1, value2, "rwStart");
            return (Criteria) this;
        }

        public Criteria andRwStartNotBetween(Integer value1, Integer value2) {
            addCriterion("rw_start not between", value1, value2, "rwStart");
            return (Criteria) this;
        }

        public Criteria andRwSnumIsNull() {
            addCriterion("rw_snum is null");
            return (Criteria) this;
        }

        public Criteria andRwSnumIsNotNull() {
            addCriterion("rw_snum is not null");
            return (Criteria) this;
        }

        public Criteria andRwSnumEqualTo(Integer value) {
            addCriterion("rw_snum =", value, "rwSnum");
            return (Criteria) this;
        }

        public Criteria andRwSnumNotEqualTo(Integer value) {
            addCriterion("rw_snum <>", value, "rwSnum");
            return (Criteria) this;
        }

        public Criteria andRwSnumGreaterThan(Integer value) {
            addCriterion("rw_snum >", value, "rwSnum");
            return (Criteria) this;
        }

        public Criteria andRwSnumGreaterThanOrEqualTo(Integer value) {
            addCriterion("rw_snum >=", value, "rwSnum");
            return (Criteria) this;
        }

        public Criteria andRwSnumLessThan(Integer value) {
            addCriterion("rw_snum <", value, "rwSnum");
            return (Criteria) this;
        }

        public Criteria andRwSnumLessThanOrEqualTo(Integer value) {
            addCriterion("rw_snum <=", value, "rwSnum");
            return (Criteria) this;
        }

        public Criteria andRwSnumIn(List<Integer> values) {
            addCriterion("rw_snum in", values, "rwSnum");
            return (Criteria) this;
        }

        public Criteria andRwSnumNotIn(List<Integer> values) {
            addCriterion("rw_snum not in", values, "rwSnum");
            return (Criteria) this;
        }

        public Criteria andRwSnumBetween(Integer value1, Integer value2) {
            addCriterion("rw_snum between", value1, value2, "rwSnum");
            return (Criteria) this;
        }

        public Criteria andRwSnumNotBetween(Integer value1, Integer value2) {
            addCriterion("rw_snum not between", value1, value2, "rwSnum");
            return (Criteria) this;
        }

        public Criteria andRwTypeIsNull() {
            addCriterion("rw_type is null");
            return (Criteria) this;
        }

        public Criteria andRwTypeIsNotNull() {
            addCriterion("rw_type is not null");
            return (Criteria) this;
        }

        public Criteria andRwTypeEqualTo(Byte value) {
            addCriterion("rw_type =", value, "rwType");
            return (Criteria) this;
        }

        public Criteria andRwTypeNotEqualTo(Byte value) {
            addCriterion("rw_type <>", value, "rwType");
            return (Criteria) this;
        }

        public Criteria andRwTypeGreaterThan(Byte value) {
            addCriterion("rw_type >", value, "rwType");
            return (Criteria) this;
        }

        public Criteria andRwTypeGreaterThanOrEqualTo(Byte value) {
            addCriterion("rw_type >=", value, "rwType");
            return (Criteria) this;
        }

        public Criteria andRwTypeLessThan(Byte value) {
            addCriterion("rw_type <", value, "rwType");
            return (Criteria) this;
        }

        public Criteria andRwTypeLessThanOrEqualTo(Byte value) {
            addCriterion("rw_type <=", value, "rwType");
            return (Criteria) this;
        }

        public Criteria andRwTypeIn(List<Byte> values) {
            addCriterion("rw_type in", values, "rwType");
            return (Criteria) this;
        }

        public Criteria andRwTypeNotIn(List<Byte> values) {
            addCriterion("rw_type not in", values, "rwType");
            return (Criteria) this;
        }

        public Criteria andRwTypeBetween(Byte value1, Byte value2) {
            addCriterion("rw_type between", value1, value2, "rwType");
            return (Criteria) this;
        }

        public Criteria andRwTypeNotBetween(Byte value1, Byte value2) {
            addCriterion("rw_type not between", value1, value2, "rwType");
            return (Criteria) this;
        }

        public Criteria andRwWeightIsNull() {
            addCriterion("rw_weight is null");
            return (Criteria) this;
        }

        public Criteria andRwWeightIsNotNull() {
            addCriterion("rw_weight is not null");
            return (Criteria) this;
        }

        public Criteria andRwWeightEqualTo(Float value) {
            addCriterion("rw_weight =", value, "rwWeight");
            return (Criteria) this;
        }

        public Criteria andRwWeightNotEqualTo(Float value) {
            addCriterion("rw_weight <>", value, "rwWeight");
            return (Criteria) this;
        }

        public Criteria andRwWeightGreaterThan(Float value) {
            addCriterion("rw_weight >", value, "rwWeight");
            return (Criteria) this;
        }

        public Criteria andRwWeightGreaterThanOrEqualTo(Float value) {
            addCriterion("rw_weight >=", value, "rwWeight");
            return (Criteria) this;
        }

        public Criteria andRwWeightLessThan(Float value) {
            addCriterion("rw_weight <", value, "rwWeight");
            return (Criteria) this;
        }

        public Criteria andRwWeightLessThanOrEqualTo(Float value) {
            addCriterion("rw_weight <=", value, "rwWeight");
            return (Criteria) this;
        }

        public Criteria andRwWeightIn(List<Float> values) {
            addCriterion("rw_weight in", values, "rwWeight");
            return (Criteria) this;
        }

        public Criteria andRwWeightNotIn(List<Float> values) {
            addCriterion("rw_weight not in", values, "rwWeight");
            return (Criteria) this;
        }

        public Criteria andRwWeightBetween(Float value1, Float value2) {
            addCriterion("rw_weight between", value1, value2, "rwWeight");
            return (Criteria) this;
        }

        public Criteria andRwWeightNotBetween(Float value1, Float value2) {
            addCriterion("rw_weight not between", value1, value2, "rwWeight");
            return (Criteria) this;
        }

        public Criteria andRwSelfIsNull() {
            addCriterion("rw_self is null");
            return (Criteria) this;
        }

        public Criteria andRwSelfIsNotNull() {
            addCriterion("rw_self is not null");
            return (Criteria) this;
        }

        public Criteria andRwSelfEqualTo(Float value) {
            addCriterion("rw_self =", value, "rwSelf");
            return (Criteria) this;
        }

        public Criteria andRwSelfNotEqualTo(Float value) {
            addCriterion("rw_self <>", value, "rwSelf");
            return (Criteria) this;
        }

        public Criteria andRwSelfGreaterThan(Float value) {
            addCriterion("rw_self >", value, "rwSelf");
            return (Criteria) this;
        }

        public Criteria andRwSelfGreaterThanOrEqualTo(Float value) {
            addCriterion("rw_self >=", value, "rwSelf");
            return (Criteria) this;
        }

        public Criteria andRwSelfLessThan(Float value) {
            addCriterion("rw_self <", value, "rwSelf");
            return (Criteria) this;
        }

        public Criteria andRwSelfLessThanOrEqualTo(Float value) {
            addCriterion("rw_self <=", value, "rwSelf");
            return (Criteria) this;
        }

        public Criteria andRwSelfIn(List<Float> values) {
            addCriterion("rw_self in", values, "rwSelf");
            return (Criteria) this;
        }

        public Criteria andRwSelfNotIn(List<Float> values) {
            addCriterion("rw_self not in", values, "rwSelf");
            return (Criteria) this;
        }

        public Criteria andRwSelfBetween(Float value1, Float value2) {
            addCriterion("rw_self between", value1, value2, "rwSelf");
            return (Criteria) this;
        }

        public Criteria andRwSelfNotBetween(Float value1, Float value2) {
            addCriterion("rw_self not between", value1, value2, "rwSelf");
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