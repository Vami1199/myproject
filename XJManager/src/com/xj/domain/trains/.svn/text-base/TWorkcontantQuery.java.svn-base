package com.xj.domain.trains;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class TWorkcontantQuery {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Integer pageNo = 1;

    protected Integer startRow;

    protected Integer pageSize = 10;

    protected String fields;

    public TWorkcontantQuery() {
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

        public Criteria andWcIdIsNull() {
            addCriterion("wc_id is null");
            return (Criteria) this;
        }

        public Criteria andWcIdIsNotNull() {
            addCriterion("wc_id is not null");
            return (Criteria) this;
        }

        public Criteria andWcIdEqualTo(String value) {
            addCriterion("wc_id =", value, "wcId");
            return (Criteria) this;
        }

        public Criteria andWcIdNotEqualTo(String value) {
            addCriterion("wc_id <>", value, "wcId");
            return (Criteria) this;
        }

        public Criteria andWcIdGreaterThan(String value) {
            addCriterion("wc_id >", value, "wcId");
            return (Criteria) this;
        }

        public Criteria andWcIdGreaterThanOrEqualTo(String value) {
            addCriterion("wc_id >=", value, "wcId");
            return (Criteria) this;
        }

        public Criteria andWcIdLessThan(String value) {
            addCriterion("wc_id <", value, "wcId");
            return (Criteria) this;
        }

        public Criteria andWcIdLessThanOrEqualTo(String value) {
            addCriterion("wc_id <=", value, "wcId");
            return (Criteria) this;
        }

        public Criteria andWcIdLike(String value) {
            addCriterion("wc_id like", value, "wcId");
            return (Criteria) this;
        }

        public Criteria andWcIdNotLike(String value) {
            addCriterion("wc_id not like", value, "wcId");
            return (Criteria) this;
        }

        public Criteria andWcIdIn(List<String> values) {
            addCriterion("wc_id in", values, "wcId");
            return (Criteria) this;
        }

        public Criteria andWcIdNotIn(List<String> values) {
            addCriterion("wc_id not in", values, "wcId");
            return (Criteria) this;
        }

        public Criteria andWcIdBetween(String value1, String value2) {
            addCriterion("wc_id between", value1, value2, "wcId");
            return (Criteria) this;
        }

        public Criteria andWcIdNotBetween(String value1, String value2) {
            addCriterion("wc_id not between", value1, value2, "wcId");
            return (Criteria) this;
        }

        public Criteria andWcWidIsNull() {
            addCriterion("wc_wid is null");
            return (Criteria) this;
        }

        public Criteria andWcWidIsNotNull() {
            addCriterion("wc_wid is not null");
            return (Criteria) this;
        }

        public Criteria andWcWidEqualTo(Integer value) {
            addCriterion("wc_wid =", value, "wcWid");
            return (Criteria) this;
        }

        public Criteria andWcWidNotEqualTo(Integer value) {
            addCriterion("wc_wid <>", value, "wcWid");
            return (Criteria) this;
        }

        public Criteria andWcWidGreaterThan(Integer value) {
            addCriterion("wc_wid >", value, "wcWid");
            return (Criteria) this;
        }

        public Criteria andWcWidGreaterThanOrEqualTo(Integer value) {
            addCriterion("wc_wid >=", value, "wcWid");
            return (Criteria) this;
        }

        public Criteria andWcWidLessThan(Integer value) {
            addCriterion("wc_wid <", value, "wcWid");
            return (Criteria) this;
        }

        public Criteria andWcWidLessThanOrEqualTo(Integer value) {
            addCriterion("wc_wid <=", value, "wcWid");
            return (Criteria) this;
        }

        public Criteria andWcWidIn(List<Integer> values) {
            addCriterion("wc_wid in", values, "wcWid");
            return (Criteria) this;
        }

        public Criteria andWcWidNotIn(List<Integer> values) {
            addCriterion("wc_wid not in", values, "wcWid");
            return (Criteria) this;
        }

        public Criteria andWcWidBetween(Integer value1, Integer value2) {
            addCriterion("wc_wid between", value1, value2, "wcWid");
            return (Criteria) this;
        }

        public Criteria andWcWidNotBetween(Integer value1, Integer value2) {
            addCriterion("wc_wid not between", value1, value2, "wcWid");
            return (Criteria) this;
        }

        public Criteria andWcMaketimeIsNull() {
            addCriterion("wc_maketime is null");
            return (Criteria) this;
        }

        public Criteria andWcMaketimeIsNotNull() {
            addCriterion("wc_maketime is not null");
            return (Criteria) this;
        }

        public Criteria andWcMaketimeEqualTo(Date value) {
            addCriterionForJDBCDate("wc_maketime =", value, "wcMaketime");
            return (Criteria) this;
        }

        public Criteria andWcMaketimeNotEqualTo(Date value) {
            addCriterionForJDBCDate("wc_maketime <>", value, "wcMaketime");
            return (Criteria) this;
        }

        public Criteria andWcMaketimeGreaterThan(Date value) {
            addCriterionForJDBCDate("wc_maketime >", value, "wcMaketime");
            return (Criteria) this;
        }

        public Criteria andWcMaketimeGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("wc_maketime >=", value, "wcMaketime");
            return (Criteria) this;
        }

        public Criteria andWcMaketimeLessThan(Date value) {
            addCriterionForJDBCDate("wc_maketime <", value, "wcMaketime");
            return (Criteria) this;
        }

        public Criteria andWcMaketimeLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("wc_maketime <=", value, "wcMaketime");
            return (Criteria) this;
        }

        public Criteria andWcMaketimeIn(List<Date> values) {
            addCriterionForJDBCDate("wc_maketime in", values, "wcMaketime");
            return (Criteria) this;
        }

        public Criteria andWcMaketimeNotIn(List<Date> values) {
            addCriterionForJDBCDate("wc_maketime not in", values, "wcMaketime");
            return (Criteria) this;
        }

        public Criteria andWcMaketimeBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("wc_maketime between", value1, value2, "wcMaketime");
            return (Criteria) this;
        }

        public Criteria andWcMaketimeNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("wc_maketime not between", value1, value2, "wcMaketime");
            return (Criteria) this;
        }

        public Criteria andWcTotaltrainIsNull() {
            addCriterion("wc_totaltrain is null");
            return (Criteria) this;
        }

        public Criteria andWcTotaltrainIsNotNull() {
            addCriterion("wc_totaltrain is not null");
            return (Criteria) this;
        }

        public Criteria andWcTotaltrainEqualTo(Integer value) {
            addCriterion("wc_totaltrain =", value, "wcTotaltrain");
            return (Criteria) this;
        }

        public Criteria andWcTotaltrainNotEqualTo(Integer value) {
            addCriterion("wc_totaltrain <>", value, "wcTotaltrain");
            return (Criteria) this;
        }

        public Criteria andWcTotaltrainGreaterThan(Integer value) {
            addCriterion("wc_totaltrain >", value, "wcTotaltrain");
            return (Criteria) this;
        }

        public Criteria andWcTotaltrainGreaterThanOrEqualTo(Integer value) {
            addCriterion("wc_totaltrain >=", value, "wcTotaltrain");
            return (Criteria) this;
        }

        public Criteria andWcTotaltrainLessThan(Integer value) {
            addCriterion("wc_totaltrain <", value, "wcTotaltrain");
            return (Criteria) this;
        }

        public Criteria andWcTotaltrainLessThanOrEqualTo(Integer value) {
            addCriterion("wc_totaltrain <=", value, "wcTotaltrain");
            return (Criteria) this;
        }

        public Criteria andWcTotaltrainIn(List<Integer> values) {
            addCriterion("wc_totaltrain in", values, "wcTotaltrain");
            return (Criteria) this;
        }

        public Criteria andWcTotaltrainNotIn(List<Integer> values) {
            addCriterion("wc_totaltrain not in", values, "wcTotaltrain");
            return (Criteria) this;
        }

        public Criteria andWcTotaltrainBetween(Integer value1, Integer value2) {
            addCriterion("wc_totaltrain between", value1, value2, "wcTotaltrain");
            return (Criteria) this;
        }

        public Criteria andWcTotaltrainNotBetween(Integer value1, Integer value2) {
            addCriterion("wc_totaltrain not between", value1, value2, "wcTotaltrain");
            return (Criteria) this;
        }

        public Criteria andWcTotalweightIsNull() {
            addCriterion("wc_totalweight is null");
            return (Criteria) this;
        }

        public Criteria andWcTotalweightIsNotNull() {
            addCriterion("wc_totalweight is not null");
            return (Criteria) this;
        }

        public Criteria andWcTotalweightEqualTo(Integer value) {
            addCriterion("wc_totalweight =", value, "wcTotalweight");
            return (Criteria) this;
        }

        public Criteria andWcTotalweightNotEqualTo(Integer value) {
            addCriterion("wc_totalweight <>", value, "wcTotalweight");
            return (Criteria) this;
        }

        public Criteria andWcTotalweightGreaterThan(Integer value) {
            addCriterion("wc_totalweight >", value, "wcTotalweight");
            return (Criteria) this;
        }

        public Criteria andWcTotalweightGreaterThanOrEqualTo(Integer value) {
            addCriterion("wc_totalweight >=", value, "wcTotalweight");
            return (Criteria) this;
        }

        public Criteria andWcTotalweightLessThan(Integer value) {
            addCriterion("wc_totalweight <", value, "wcTotalweight");
            return (Criteria) this;
        }

        public Criteria andWcTotalweightLessThanOrEqualTo(Integer value) {
            addCriterion("wc_totalweight <=", value, "wcTotalweight");
            return (Criteria) this;
        }

        public Criteria andWcTotalweightIn(List<Integer> values) {
            addCriterion("wc_totalweight in", values, "wcTotalweight");
            return (Criteria) this;
        }

        public Criteria andWcTotalweightNotIn(List<Integer> values) {
            addCriterion("wc_totalweight not in", values, "wcTotalweight");
            return (Criteria) this;
        }

        public Criteria andWcTotalweightBetween(Integer value1, Integer value2) {
            addCriterion("wc_totalweight between", value1, value2, "wcTotalweight");
            return (Criteria) this;
        }

        public Criteria andWcTotalweightNotBetween(Integer value1, Integer value2) {
            addCriterion("wc_totalweight not between", value1, value2, "wcTotalweight");
            return (Criteria) this;
        }

        public Criteria andWcStateIsNull() {
            addCriterion("wc_state is null");
            return (Criteria) this;
        }

        public Criteria andWcStateIsNotNull() {
            addCriterion("wc_state is not null");
            return (Criteria) this;
        }

        public Criteria andWcStateEqualTo(Byte value) {
            addCriterion("wc_state =", value, "wcState");
            return (Criteria) this;
        }

        public Criteria andWcStateNotEqualTo(Byte value) {
            addCriterion("wc_state <>", value, "wcState");
            return (Criteria) this;
        }

        public Criteria andWcStateGreaterThan(Byte value) {
            addCriterion("wc_state >", value, "wcState");
            return (Criteria) this;
        }

        public Criteria andWcStateGreaterThanOrEqualTo(Byte value) {
            addCriterion("wc_state >=", value, "wcState");
            return (Criteria) this;
        }

        public Criteria andWcStateLessThan(Byte value) {
            addCriterion("wc_state <", value, "wcState");
            return (Criteria) this;
        }

        public Criteria andWcStateLessThanOrEqualTo(Byte value) {
            addCriterion("wc_state <=", value, "wcState");
            return (Criteria) this;
        }

        public Criteria andWcStateIn(List<Byte> values) {
            addCriterion("wc_state in", values, "wcState");
            return (Criteria) this;
        }

        public Criteria andWcStateNotIn(List<Byte> values) {
            addCriterion("wc_state not in", values, "wcState");
            return (Criteria) this;
        }

        public Criteria andWcStateBetween(Byte value1, Byte value2) {
            addCriterion("wc_state between", value1, value2, "wcState");
            return (Criteria) this;
        }

        public Criteria andWcStateNotBetween(Byte value1, Byte value2) {
            addCriterion("wc_state not between", value1, value2, "wcState");
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