package com.xj.domain.base;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class BMinesourceQuery {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Integer pageNo = 1;

    protected Integer startRow;

    protected Integer pageSize = 10;

    protected String fields;

    public BMinesourceQuery() {
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

        public Criteria andSourceIdIsNull() {
            addCriterion("source_id is null");
            return (Criteria) this;
        }

        public Criteria andSourceIdIsNotNull() {
            addCriterion("source_id is not null");
            return (Criteria) this;
        }

        public Criteria andSourceIdEqualTo(Integer value) {
            addCriterion("source_id =", value, "sourceId");
            return (Criteria) this;
        }

        public Criteria andSourceIdNotEqualTo(Integer value) {
            addCriterion("source_id <>", value, "sourceId");
            return (Criteria) this;
        }

        public Criteria andSourceIdGreaterThan(Integer value) {
            addCriterion("source_id >", value, "sourceId");
            return (Criteria) this;
        }

        public Criteria andSourceIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("source_id >=", value, "sourceId");
            return (Criteria) this;
        }

        public Criteria andSourceIdLessThan(Integer value) {
            addCriterion("source_id <", value, "sourceId");
            return (Criteria) this;
        }

        public Criteria andSourceIdLessThanOrEqualTo(Integer value) {
            addCriterion("source_id <=", value, "sourceId");
            return (Criteria) this;
        }

        public Criteria andSourceIdIn(List<Integer> values) {
            addCriterion("source_id in", values, "sourceId");
            return (Criteria) this;
        }

        public Criteria andSourceIdNotIn(List<Integer> values) {
            addCriterion("source_id not in", values, "sourceId");
            return (Criteria) this;
        }

        public Criteria andSourceIdBetween(Integer value1, Integer value2) {
            addCriterion("source_id between", value1, value2, "sourceId");
            return (Criteria) this;
        }

        public Criteria andSourceIdNotBetween(Integer value1, Integer value2) {
            addCriterion("source_id not between", value1, value2, "sourceId");
            return (Criteria) this;
        }

        public Criteria andSourceNameIsNull() {
            addCriterion("source_name is null");
            return (Criteria) this;
        }

        public Criteria andSourceNameIsNotNull() {
            addCriterion("source_name is not null");
            return (Criteria) this;
        }

        public Criteria andSourceNameEqualTo(String value) {
            addCriterion("source_name =", value, "sourceName");
            return (Criteria) this;
        }

        public Criteria andSourceNameNotEqualTo(String value) {
            addCriterion("source_name <>", value, "sourceName");
            return (Criteria) this;
        }

        public Criteria andSourceNameGreaterThan(String value) {
            addCriterion("source_name >", value, "sourceName");
            return (Criteria) this;
        }

        public Criteria andSourceNameGreaterThanOrEqualTo(String value) {
            addCriterion("source_name >=", value, "sourceName");
            return (Criteria) this;
        }

        public Criteria andSourceNameLessThan(String value) {
            addCriterion("source_name <", value, "sourceName");
            return (Criteria) this;
        }

        public Criteria andSourceNameLessThanOrEqualTo(String value) {
            addCriterion("source_name <=", value, "sourceName");
            return (Criteria) this;
        }

        public Criteria andSourceNameLike(String value) {
            addCriterion("source_name like", value, "sourceName");
            return (Criteria) this;
        }

        public Criteria andSourceNameNotLike(String value) {
            addCriterion("source_name not like", value, "sourceName");
            return (Criteria) this;
        }

        public Criteria andSourceNameIn(List<String> values) {
            addCriterion("source_name in", values, "sourceName");
            return (Criteria) this;
        }

        public Criteria andSourceNameNotIn(List<String> values) {
            addCriterion("source_name not in", values, "sourceName");
            return (Criteria) this;
        }

        public Criteria andSourceNameBetween(String value1, String value2) {
            addCriterion("source_name between", value1, value2, "sourceName");
            return (Criteria) this;
        }

        public Criteria andSourceNameNotBetween(String value1, String value2) {
            addCriterion("source_name not between", value1, value2, "sourceName");
            return (Criteria) this;
        }

        public Criteria andSourceCompanyidIsNull() {
            addCriterion("source_companyid is null");
            return (Criteria) this;
        }

        public Criteria andSourceCompanyidIsNotNull() {
            addCriterion("source_companyid is not null");
            return (Criteria) this;
        }

        public Criteria andSourceCompanyidEqualTo(String value) {
            addCriterion("source_companyid =", value, "sourceCompanyid");
            return (Criteria) this;
        }

        public Criteria andSourceCompanyidNotEqualTo(String value) {
            addCriterion("source_companyid <>", value, "sourceCompanyid");
            return (Criteria) this;
        }

        public Criteria andSourceCompanyidGreaterThan(String value) {
            addCriterion("source_companyid >", value, "sourceCompanyid");
            return (Criteria) this;
        }

        public Criteria andSourceCompanyidGreaterThanOrEqualTo(String value) {
            addCriterion("source_companyid >=", value, "sourceCompanyid");
            return (Criteria) this;
        }

        public Criteria andSourceCompanyidLessThan(String value) {
            addCriterion("source_companyid <", value, "sourceCompanyid");
            return (Criteria) this;
        }

        public Criteria andSourceCompanyidLessThanOrEqualTo(String value) {
            addCriterion("source_companyid <=", value, "sourceCompanyid");
            return (Criteria) this;
        }

        public Criteria andSourceCompanyidLike(String value) {
            addCriterion("source_companyid like", value, "sourceCompanyid");
            return (Criteria) this;
        }

        public Criteria andSourceCompanyidNotLike(String value) {
            addCriterion("source_companyid not like", value, "sourceCompanyid");
            return (Criteria) this;
        }

        public Criteria andSourceCompanyidIn(List<String> values) {
            addCriterion("source_companyid in", values, "sourceCompanyid");
            return (Criteria) this;
        }

        public Criteria andSourceCompanyidNotIn(List<String> values) {
            addCriterion("source_companyid not in", values, "sourceCompanyid");
            return (Criteria) this;
        }

        public Criteria andSourceCompanyidBetween(String value1, String value2) {
            addCriterion("source_companyid between", value1, value2, "sourceCompanyid");
            return (Criteria) this;
        }

        public Criteria andSourceCompanyidNotBetween(String value1, String value2) {
            addCriterion("source_companyid not between", value1, value2, "sourceCompanyid");
            return (Criteria) this;
        }

        public Criteria andSourceCompanynameIsNull() {
            addCriterion("source_companyname is null");
            return (Criteria) this;
        }

        public Criteria andSourceCompanynameIsNotNull() {
            addCriterion("source_companyname is not null");
            return (Criteria) this;
        }

        public Criteria andSourceCompanynameEqualTo(String value) {
            addCriterion("source_companyname =", value, "sourceCompanyname");
            return (Criteria) this;
        }

        public Criteria andSourceCompanynameNotEqualTo(String value) {
            addCriterion("source_companyname <>", value, "sourceCompanyname");
            return (Criteria) this;
        }

        public Criteria andSourceCompanynameGreaterThan(String value) {
            addCriterion("source_companyname >", value, "sourceCompanyname");
            return (Criteria) this;
        }

        public Criteria andSourceCompanynameGreaterThanOrEqualTo(String value) {
            addCriterion("source_companyname >=", value, "sourceCompanyname");
            return (Criteria) this;
        }

        public Criteria andSourceCompanynameLessThan(String value) {
            addCriterion("source_companyname <", value, "sourceCompanyname");
            return (Criteria) this;
        }

        public Criteria andSourceCompanynameLessThanOrEqualTo(String value) {
            addCriterion("source_companyname <=", value, "sourceCompanyname");
            return (Criteria) this;
        }

        public Criteria andSourceCompanynameLike(String value) {
            addCriterion("source_companyname like", value, "sourceCompanyname");
            return (Criteria) this;
        }

        public Criteria andSourceCompanynameNotLike(String value) {
            addCriterion("source_companyname not like", value, "sourceCompanyname");
            return (Criteria) this;
        }

        public Criteria andSourceCompanynameIn(List<String> values) {
            addCriterion("source_companyname in", values, "sourceCompanyname");
            return (Criteria) this;
        }

        public Criteria andSourceCompanynameNotIn(List<String> values) {
            addCriterion("source_companyname not in", values, "sourceCompanyname");
            return (Criteria) this;
        }

        public Criteria andSourceCompanynameBetween(String value1, String value2) {
            addCriterion("source_companyname between", value1, value2, "sourceCompanyname");
            return (Criteria) this;
        }

        public Criteria andSourceCompanynameNotBetween(String value1, String value2) {
            addCriterion("source_companyname not between", value1, value2, "sourceCompanyname");
            return (Criteria) this;
        }

        public Criteria andSourceCompanyshortIsNull() {
            addCriterion("source_companyshort is null");
            return (Criteria) this;
        }

        public Criteria andSourceCompanyshortIsNotNull() {
            addCriterion("source_companyshort is not null");
            return (Criteria) this;
        }

        public Criteria andSourceCompanyshortEqualTo(String value) {
            addCriterion("source_companyshort =", value, "sourceCompanyshort");
            return (Criteria) this;
        }

        public Criteria andSourceCompanyshortNotEqualTo(String value) {
            addCriterion("source_companyshort <>", value, "sourceCompanyshort");
            return (Criteria) this;
        }

        public Criteria andSourceCompanyshortGreaterThan(String value) {
            addCriterion("source_companyshort >", value, "sourceCompanyshort");
            return (Criteria) this;
        }

        public Criteria andSourceCompanyshortGreaterThanOrEqualTo(String value) {
            addCriterion("source_companyshort >=", value, "sourceCompanyshort");
            return (Criteria) this;
        }

        public Criteria andSourceCompanyshortLessThan(String value) {
            addCriterion("source_companyshort <", value, "sourceCompanyshort");
            return (Criteria) this;
        }

        public Criteria andSourceCompanyshortLessThanOrEqualTo(String value) {
            addCriterion("source_companyshort <=", value, "sourceCompanyshort");
            return (Criteria) this;
        }

        public Criteria andSourceCompanyshortLike(String value) {
            addCriterion("source_companyshort like", value, "sourceCompanyshort");
            return (Criteria) this;
        }

        public Criteria andSourceCompanyshortNotLike(String value) {
            addCriterion("source_companyshort not like", value, "sourceCompanyshort");
            return (Criteria) this;
        }

        public Criteria andSourceCompanyshortIn(List<String> values) {
            addCriterion("source_companyshort in", values, "sourceCompanyshort");
            return (Criteria) this;
        }

        public Criteria andSourceCompanyshortNotIn(List<String> values) {
            addCriterion("source_companyshort not in", values, "sourceCompanyshort");
            return (Criteria) this;
        }

        public Criteria andSourceCompanyshortBetween(String value1, String value2) {
            addCriterion("source_companyshort between", value1, value2, "sourceCompanyshort");
            return (Criteria) this;
        }

        public Criteria andSourceCompanyshortNotBetween(String value1, String value2) {
            addCriterion("source_companyshort not between", value1, value2, "sourceCompanyshort");
            return (Criteria) this;
        }

        public Criteria andSourceSulphurIsNull() {
            addCriterion("source_sulphur is null");
            return (Criteria) this;
        }

        public Criteria andSourceSulphurIsNotNull() {
            addCriterion("source_sulphur is not null");
            return (Criteria) this;
        }

        public Criteria andSourceSulphurEqualTo(Double value) {
            addCriterion("source_sulphur =", value, "sourceSulphur");
            return (Criteria) this;
        }

        public Criteria andSourceSulphurNotEqualTo(Double value) {
            addCriterion("source_sulphur <>", value, "sourceSulphur");
            return (Criteria) this;
        }

        public Criteria andSourceSulphurGreaterThan(Double value) {
            addCriterion("source_sulphur >", value, "sourceSulphur");
            return (Criteria) this;
        }

        public Criteria andSourceSulphurGreaterThanOrEqualTo(Double value) {
            addCriterion("source_sulphur >=", value, "sourceSulphur");
            return (Criteria) this;
        }

        public Criteria andSourceSulphurLessThan(Double value) {
            addCriterion("source_sulphur <", value, "sourceSulphur");
            return (Criteria) this;
        }

        public Criteria andSourceSulphurLessThanOrEqualTo(Double value) {
            addCriterion("source_sulphur <=", value, "sourceSulphur");
            return (Criteria) this;
        }

        public Criteria andSourceSulphurIn(List<Double> values) {
            addCriterion("source_sulphur in", values, "sourceSulphur");
            return (Criteria) this;
        }

        public Criteria andSourceSulphurNotIn(List<Double> values) {
            addCriterion("source_sulphur not in", values, "sourceSulphur");
            return (Criteria) this;
        }

        public Criteria andSourceSulphurBetween(Double value1, Double value2) {
            addCriterion("source_sulphur between", value1, value2, "sourceSulphur");
            return (Criteria) this;
        }

        public Criteria andSourceSulphurNotBetween(Double value1, Double value2) {
            addCriterion("source_sulphur not between", value1, value2, "sourceSulphur");
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