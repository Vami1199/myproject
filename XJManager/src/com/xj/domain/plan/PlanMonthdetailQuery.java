package com.xj.domain.plan;

import java.util.ArrayList;
import java.util.List;

public class PlanMonthdetailQuery {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Integer pageNo = 1;

    protected Integer startRow;

    protected Integer pageSize = 10;

    protected String fields;

    public PlanMonthdetailQuery() {
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

        public Criteria andMdIdIsNull() {
            addCriterion("md_id is null");
            return (Criteria) this;
        }

        public Criteria andMdIdIsNotNull() {
            addCriterion("md_id is not null");
            return (Criteria) this;
        }

        public Criteria andMdIdEqualTo(String value) {
            addCriterion("md_id =", value, "mdId");
            return (Criteria) this;
        }

        public Criteria andMdIdNotEqualTo(String value) {
            addCriterion("md_id <>", value, "mdId");
            return (Criteria) this;
        }

        public Criteria andMdIdGreaterThan(String value) {
            addCriterion("md_id >", value, "mdId");
            return (Criteria) this;
        }

        public Criteria andMdIdGreaterThanOrEqualTo(String value) {
            addCriterion("md_id >=", value, "mdId");
            return (Criteria) this;
        }

        public Criteria andMdIdLessThan(String value) {
            addCriterion("md_id <", value, "mdId");
            return (Criteria) this;
        }

        public Criteria andMdIdLessThanOrEqualTo(String value) {
            addCriterion("md_id <=", value, "mdId");
            return (Criteria) this;
        }

        public Criteria andMdIdLike(String value) {
            addCriterion("md_id like", value, "mdId");
            return (Criteria) this;
        }

        public Criteria andMdIdNotLike(String value) {
            addCriterion("md_id not like", value, "mdId");
            return (Criteria) this;
        }

        public Criteria andMdIdIn(List<String> values) {
            addCriterion("md_id in", values, "mdId");
            return (Criteria) this;
        }

        public Criteria andMdIdNotIn(List<String> values) {
            addCriterion("md_id not in", values, "mdId");
            return (Criteria) this;
        }

        public Criteria andMdIdBetween(String value1, String value2) {
            addCriterion("md_id between", value1, value2, "mdId");
            return (Criteria) this;
        }

        public Criteria andMdIdNotBetween(String value1, String value2) {
            addCriterion("md_id not between", value1, value2, "mdId");
            return (Criteria) this;
        }

        public Criteria andMdMidIsNull() {
            addCriterion("md_mid is null");
            return (Criteria) this;
        }

        public Criteria andMdMidIsNotNull() {
            addCriterion("md_mid is not null");
            return (Criteria) this;
        }

        public Criteria andMdMidEqualTo(String value) {
            addCriterion("md_mid =", value, "mdMid");
            return (Criteria) this;
        }

        public Criteria andMdMidNotEqualTo(String value) {
            addCriterion("md_mid <>", value, "mdMid");
            return (Criteria) this;
        }

        public Criteria andMdMidGreaterThan(String value) {
            addCriterion("md_mid >", value, "mdMid");
            return (Criteria) this;
        }

        public Criteria andMdMidGreaterThanOrEqualTo(String value) {
            addCriterion("md_mid >=", value, "mdMid");
            return (Criteria) this;
        }

        public Criteria andMdMidLessThan(String value) {
            addCriterion("md_mid <", value, "mdMid");
            return (Criteria) this;
        }

        public Criteria andMdMidLessThanOrEqualTo(String value) {
            addCriterion("md_mid <=", value, "mdMid");
            return (Criteria) this;
        }

        public Criteria andMdMidLike(String value) {
            addCriterion("md_mid like", value, "mdMid");
            return (Criteria) this;
        }

        public Criteria andMdMidNotLike(String value) {
            addCriterion("md_mid not like", value, "mdMid");
            return (Criteria) this;
        }

        public Criteria andMdMidIn(List<String> values) {
            addCriterion("md_mid in", values, "mdMid");
            return (Criteria) this;
        }

        public Criteria andMdMidNotIn(List<String> values) {
            addCriterion("md_mid not in", values, "mdMid");
            return (Criteria) this;
        }

        public Criteria andMdMidBetween(String value1, String value2) {
            addCriterion("md_mid between", value1, value2, "mdMid");
            return (Criteria) this;
        }

        public Criteria andMdMidNotBetween(String value1, String value2) {
            addCriterion("md_mid not between", value1, value2, "mdMid");
            return (Criteria) this;
        }

        public Criteria andMdCustomeridIsNull() {
            addCriterion("md_customerid is null");
            return (Criteria) this;
        }

        public Criteria andMdCustomeridIsNotNull() {
            addCriterion("md_customerid is not null");
            return (Criteria) this;
        }

        public Criteria andMdCustomeridEqualTo(String value) {
            addCriterion("md_customerid =", value, "mdCustomerid");
            return (Criteria) this;
        }

        public Criteria andMdCustomeridNotEqualTo(String value) {
            addCriterion("md_customerid <>", value, "mdCustomerid");
            return (Criteria) this;
        }

        public Criteria andMdCustomeridGreaterThan(String value) {
            addCriterion("md_customerid >", value, "mdCustomerid");
            return (Criteria) this;
        }

        public Criteria andMdCustomeridGreaterThanOrEqualTo(String value) {
            addCriterion("md_customerid >=", value, "mdCustomerid");
            return (Criteria) this;
        }

        public Criteria andMdCustomeridLessThan(String value) {
            addCriterion("md_customerid <", value, "mdCustomerid");
            return (Criteria) this;
        }

        public Criteria andMdCustomeridLessThanOrEqualTo(String value) {
            addCriterion("md_customerid <=", value, "mdCustomerid");
            return (Criteria) this;
        }

        public Criteria andMdCustomeridLike(String value) {
            addCriterion("md_customerid like", value, "mdCustomerid");
            return (Criteria) this;
        }

        public Criteria andMdCustomeridNotLike(String value) {
            addCriterion("md_customerid not like", value, "mdCustomerid");
            return (Criteria) this;
        }

        public Criteria andMdCustomeridIn(List<String> values) {
            addCriterion("md_customerid in", values, "mdCustomerid");
            return (Criteria) this;
        }

        public Criteria andMdCustomeridNotIn(List<String> values) {
            addCriterion("md_customerid not in", values, "mdCustomerid");
            return (Criteria) this;
        }

        public Criteria andMdCustomeridBetween(String value1, String value2) {
            addCriterion("md_customerid between", value1, value2, "mdCustomerid");
            return (Criteria) this;
        }

        public Criteria andMdCustomeridNotBetween(String value1, String value2) {
            addCriterion("md_customerid not between", value1, value2, "mdCustomerid");
            return (Criteria) this;
        }

        public Criteria andMdCtypeIsNull() {
            addCriterion("md_ctype is null");
            return (Criteria) this;
        }

        public Criteria andMdCtypeIsNotNull() {
            addCriterion("md_ctype is not null");
            return (Criteria) this;
        }

        public Criteria andMdCtypeEqualTo(String value) {
            addCriterion("md_ctype =", value, "mdCtype");
            return (Criteria) this;
        }

        public Criteria andMdCtypeNotEqualTo(String value) {
            addCriterion("md_ctype <>", value, "mdCtype");
            return (Criteria) this;
        }

        public Criteria andMdCtypeGreaterThan(String value) {
            addCriterion("md_ctype >", value, "mdCtype");
            return (Criteria) this;
        }

        public Criteria andMdCtypeGreaterThanOrEqualTo(String value) {
            addCriterion("md_ctype >=", value, "mdCtype");
            return (Criteria) this;
        }

        public Criteria andMdCtypeLessThan(String value) {
            addCriterion("md_ctype <", value, "mdCtype");
            return (Criteria) this;
        }

        public Criteria andMdCtypeLessThanOrEqualTo(String value) {
            addCriterion("md_ctype <=", value, "mdCtype");
            return (Criteria) this;
        }

        public Criteria andMdCtypeLike(String value) {
            addCriterion("md_ctype like", value, "mdCtype");
            return (Criteria) this;
        }

        public Criteria andMdCtypeNotLike(String value) {
            addCriterion("md_ctype not like", value, "mdCtype");
            return (Criteria) this;
        }

        public Criteria andMdCtypeIn(List<String> values) {
            addCriterion("md_ctype in", values, "mdCtype");
            return (Criteria) this;
        }

        public Criteria andMdCtypeNotIn(List<String> values) {
            addCriterion("md_ctype not in", values, "mdCtype");
            return (Criteria) this;
        }

        public Criteria andMdCtypeBetween(String value1, String value2) {
            addCriterion("md_ctype between", value1, value2, "mdCtype");
            return (Criteria) this;
        }

        public Criteria andMdCtypeNotBetween(String value1, String value2) {
            addCriterion("md_ctype not between", value1, value2, "mdCtype");
            return (Criteria) this;
        }

        public Criteria andMdProductIsNull() {
            addCriterion("md_product is null");
            return (Criteria) this;
        }

        public Criteria andMdProductIsNotNull() {
            addCriterion("md_product is not null");
            return (Criteria) this;
        }

        public Criteria andMdProductEqualTo(Byte value) {
            addCriterion("md_product =", value, "mdProduct");
            return (Criteria) this;
        }

        public Criteria andMdProductNotEqualTo(Byte value) {
            addCriterion("md_product <>", value, "mdProduct");
            return (Criteria) this;
        }

        public Criteria andMdProductGreaterThan(Byte value) {
            addCriterion("md_product >", value, "mdProduct");
            return (Criteria) this;
        }

        public Criteria andMdProductGreaterThanOrEqualTo(Byte value) {
            addCriterion("md_product >=", value, "mdProduct");
            return (Criteria) this;
        }

        public Criteria andMdProductLessThan(Byte value) {
            addCriterion("md_product <", value, "mdProduct");
            return (Criteria) this;
        }

        public Criteria andMdProductLessThanOrEqualTo(Byte value) {
            addCriterion("md_product <=", value, "mdProduct");
            return (Criteria) this;
        }

        public Criteria andMdProductIn(List<Byte> values) {
            addCriterion("md_product in", values, "mdProduct");
            return (Criteria) this;
        }

        public Criteria andMdProductNotIn(List<Byte> values) {
            addCriterion("md_product not in", values, "mdProduct");
            return (Criteria) this;
        }

        public Criteria andMdProductBetween(Byte value1, Byte value2) {
            addCriterion("md_product between", value1, value2, "mdProduct");
            return (Criteria) this;
        }

        public Criteria andMdProductNotBetween(Byte value1, Byte value2) {
            addCriterion("md_product not between", value1, value2, "mdProduct");
            return (Criteria) this;
        }

        public Criteria andYdPtypeIsNull() {
            addCriterion("yd_ptype is null");
            return (Criteria) this;
        }

        public Criteria andYdPtypeIsNotNull() {
            addCriterion("yd_ptype is not null");
            return (Criteria) this;
        }

        public Criteria andYdPtypeEqualTo(Byte value) {
            addCriterion("yd_ptype =", value, "ydPtype");
            return (Criteria) this;
        }

        public Criteria andYdPtypeNotEqualTo(Byte value) {
            addCriterion("yd_ptype <>", value, "ydPtype");
            return (Criteria) this;
        }

        public Criteria andYdPtypeGreaterThan(Byte value) {
            addCriterion("yd_ptype >", value, "ydPtype");
            return (Criteria) this;
        }

        public Criteria andYdPtypeGreaterThanOrEqualTo(Byte value) {
            addCriterion("yd_ptype >=", value, "ydPtype");
            return (Criteria) this;
        }

        public Criteria andYdPtypeLessThan(Byte value) {
            addCriterion("yd_ptype <", value, "ydPtype");
            return (Criteria) this;
        }

        public Criteria andYdPtypeLessThanOrEqualTo(Byte value) {
            addCriterion("yd_ptype <=", value, "ydPtype");
            return (Criteria) this;
        }

        public Criteria andYdPtypeIn(List<Byte> values) {
            addCriterion("yd_ptype in", values, "ydPtype");
            return (Criteria) this;
        }

        public Criteria andYdPtypeNotIn(List<Byte> values) {
            addCriterion("yd_ptype not in", values, "ydPtype");
            return (Criteria) this;
        }

        public Criteria andYdPtypeBetween(Byte value1, Byte value2) {
            addCriterion("yd_ptype between", value1, value2, "ydPtype");
            return (Criteria) this;
        }

        public Criteria andYdPtypeNotBetween(Byte value1, Byte value2) {
            addCriterion("yd_ptype not between", value1, value2, "ydPtype");
            return (Criteria) this;
        }

        public Criteria andYdPeopleIsNull() {
            addCriterion("yd_people is null");
            return (Criteria) this;
        }

        public Criteria andYdPeopleIsNotNull() {
            addCriterion("yd_people is not null");
            return (Criteria) this;
        }

        public Criteria andYdPeopleEqualTo(String value) {
            addCriterion("yd_people =", value, "ydPeople");
            return (Criteria) this;
        }

        public Criteria andYdPeopleNotEqualTo(String value) {
            addCriterion("yd_people <>", value, "ydPeople");
            return (Criteria) this;
        }

        public Criteria andYdPeopleGreaterThan(String value) {
            addCriterion("yd_people >", value, "ydPeople");
            return (Criteria) this;
        }

        public Criteria andYdPeopleGreaterThanOrEqualTo(String value) {
            addCriterion("yd_people >=", value, "ydPeople");
            return (Criteria) this;
        }

        public Criteria andYdPeopleLessThan(String value) {
            addCriterion("yd_people <", value, "ydPeople");
            return (Criteria) this;
        }

        public Criteria andYdPeopleLessThanOrEqualTo(String value) {
            addCriterion("yd_people <=", value, "ydPeople");
            return (Criteria) this;
        }

        public Criteria andYdPeopleLike(String value) {
            addCriterion("yd_people like", value, "ydPeople");
            return (Criteria) this;
        }

        public Criteria andYdPeopleNotLike(String value) {
            addCriterion("yd_people not like", value, "ydPeople");
            return (Criteria) this;
        }

        public Criteria andYdPeopleIn(List<String> values) {
            addCriterion("yd_people in", values, "ydPeople");
            return (Criteria) this;
        }

        public Criteria andYdPeopleNotIn(List<String> values) {
            addCriterion("yd_people not in", values, "ydPeople");
            return (Criteria) this;
        }

        public Criteria andYdPeopleBetween(String value1, String value2) {
            addCriterion("yd_people between", value1, value2, "ydPeople");
            return (Criteria) this;
        }

        public Criteria andYdPeopleNotBetween(String value1, String value2) {
            addCriterion("yd_people not between", value1, value2, "ydPeople");
            return (Criteria) this;
        }

        public Criteria andYdPlanIsNull() {
            addCriterion("yd_plan is null");
            return (Criteria) this;
        }

        public Criteria andYdPlanIsNotNull() {
            addCriterion("yd_plan is not null");
            return (Criteria) this;
        }

        public Criteria andYdPlanEqualTo(Integer value) {
            addCriterion("yd_plan =", value, "ydPlan");
            return (Criteria) this;
        }

        public Criteria andYdPlanNotEqualTo(Integer value) {
            addCriterion("yd_plan <>", value, "ydPlan");
            return (Criteria) this;
        }

        public Criteria andYdPlanGreaterThan(Integer value) {
            addCriterion("yd_plan >", value, "ydPlan");
            return (Criteria) this;
        }

        public Criteria andYdPlanGreaterThanOrEqualTo(Integer value) {
            addCriterion("yd_plan >=", value, "ydPlan");
            return (Criteria) this;
        }

        public Criteria andYdPlanLessThan(Integer value) {
            addCriterion("yd_plan <", value, "ydPlan");
            return (Criteria) this;
        }

        public Criteria andYdPlanLessThanOrEqualTo(Integer value) {
            addCriterion("yd_plan <=", value, "ydPlan");
            return (Criteria) this;
        }

        public Criteria andYdPlanIn(List<Integer> values) {
            addCriterion("yd_plan in", values, "ydPlan");
            return (Criteria) this;
        }

        public Criteria andYdPlanNotIn(List<Integer> values) {
            addCriterion("yd_plan not in", values, "ydPlan");
            return (Criteria) this;
        }

        public Criteria andYdPlanBetween(Integer value1, Integer value2) {
            addCriterion("yd_plan between", value1, value2, "ydPlan");
            return (Criteria) this;
        }

        public Criteria andYdPlanNotBetween(Integer value1, Integer value2) {
            addCriterion("yd_plan not between", value1, value2, "ydPlan");
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