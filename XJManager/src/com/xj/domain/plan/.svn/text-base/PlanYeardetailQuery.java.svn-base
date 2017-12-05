package com.xj.domain.plan;

import java.util.ArrayList;
import java.util.List;

public class PlanYeardetailQuery {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Integer pageNo = 1;

    protected Integer startRow;

    protected Integer pageSize = 10;

    protected String fields;

    public PlanYeardetailQuery() {
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

        public Criteria andYdIdIsNull() {
            addCriterion("yd_id is null");
            return (Criteria) this;
        }

        public Criteria andYdIdIsNotNull() {
            addCriterion("yd_id is not null");
            return (Criteria) this;
        }

        public Criteria andYdIdEqualTo(String value) {
            addCriterion("yd_id =", value, "ydId");
            return (Criteria) this;
        }

        public Criteria andYdIdNotEqualTo(String value) {
            addCriterion("yd_id <>", value, "ydId");
            return (Criteria) this;
        }

        public Criteria andYdIdGreaterThan(String value) {
            addCriterion("yd_id >", value, "ydId");
            return (Criteria) this;
        }

        public Criteria andYdIdGreaterThanOrEqualTo(String value) {
            addCriterion("yd_id >=", value, "ydId");
            return (Criteria) this;
        }

        public Criteria andYdIdLessThan(String value) {
            addCriterion("yd_id <", value, "ydId");
            return (Criteria) this;
        }

        public Criteria andYdIdLessThanOrEqualTo(String value) {
            addCriterion("yd_id <=", value, "ydId");
            return (Criteria) this;
        }

        public Criteria andYdIdLike(String value) {
            addCriterion("yd_id like", value, "ydId");
            return (Criteria) this;
        }

        public Criteria andYdIdNotLike(String value) {
            addCriterion("yd_id not like", value, "ydId");
            return (Criteria) this;
        }

        public Criteria andYdIdIn(List<String> values) {
            addCriterion("yd_id in", values, "ydId");
            return (Criteria) this;
        }

        public Criteria andYdIdNotIn(List<String> values) {
            addCriterion("yd_id not in", values, "ydId");
            return (Criteria) this;
        }

        public Criteria andYdIdBetween(String value1, String value2) {
            addCriterion("yd_id between", value1, value2, "ydId");
            return (Criteria) this;
        }

        public Criteria andYdIdNotBetween(String value1, String value2) {
            addCriterion("yd_id not between", value1, value2, "ydId");
            return (Criteria) this;
        }

        public Criteria andYdYidIsNull() {
            addCriterion("yd_yid is null");
            return (Criteria) this;
        }

        public Criteria andYdYidIsNotNull() {
            addCriterion("yd_yid is not null");
            return (Criteria) this;
        }

        public Criteria andYdYidEqualTo(String value) {
            addCriterion("yd_yid =", value, "ydYid");
            return (Criteria) this;
        }

        public Criteria andYdYidNotEqualTo(String value) {
            addCriterion("yd_yid <>", value, "ydYid");
            return (Criteria) this;
        }

        public Criteria andYdYidGreaterThan(String value) {
            addCriterion("yd_yid >", value, "ydYid");
            return (Criteria) this;
        }

        public Criteria andYdYidGreaterThanOrEqualTo(String value) {
            addCriterion("yd_yid >=", value, "ydYid");
            return (Criteria) this;
        }

        public Criteria andYdYidLessThan(String value) {
            addCriterion("yd_yid <", value, "ydYid");
            return (Criteria) this;
        }

        public Criteria andYdYidLessThanOrEqualTo(String value) {
            addCriterion("yd_yid <=", value, "ydYid");
            return (Criteria) this;
        }

        public Criteria andYdYidLike(String value) {
            addCriterion("yd_yid like", value, "ydYid");
            return (Criteria) this;
        }

        public Criteria andYdYidNotLike(String value) {
            addCriterion("yd_yid not like", value, "ydYid");
            return (Criteria) this;
        }

        public Criteria andYdYidIn(List<String> values) {
            addCriterion("yd_yid in", values, "ydYid");
            return (Criteria) this;
        }

        public Criteria andYdYidNotIn(List<String> values) {
            addCriterion("yd_yid not in", values, "ydYid");
            return (Criteria) this;
        }

        public Criteria andYdYidBetween(String value1, String value2) {
            addCriterion("yd_yid between", value1, value2, "ydYid");
            return (Criteria) this;
        }

        public Criteria andYdYidNotBetween(String value1, String value2) {
            addCriterion("yd_yid not between", value1, value2, "ydYid");
            return (Criteria) this;
        }

        public Criteria andYdCustomeridIsNull() {
            addCriterion("yd_customerid is null");
            return (Criteria) this;
        }

        public Criteria andYdCustomeridIsNotNull() {
            addCriterion("yd_customerid is not null");
            return (Criteria) this;
        }

        public Criteria andYdCustomeridEqualTo(String value) {
            addCriterion("yd_customerid =", value, "ydCustomerid");
            return (Criteria) this;
        }

        public Criteria andYdCustomeridNotEqualTo(String value) {
            addCriterion("yd_customerid <>", value, "ydCustomerid");
            return (Criteria) this;
        }

        public Criteria andYdCustomeridGreaterThan(String value) {
            addCriterion("yd_customerid >", value, "ydCustomerid");
            return (Criteria) this;
        }

        public Criteria andYdCustomeridGreaterThanOrEqualTo(String value) {
            addCriterion("yd_customerid >=", value, "ydCustomerid");
            return (Criteria) this;
        }

        public Criteria andYdCustomeridLessThan(String value) {
            addCriterion("yd_customerid <", value, "ydCustomerid");
            return (Criteria) this;
        }

        public Criteria andYdCustomeridLessThanOrEqualTo(String value) {
            addCriterion("yd_customerid <=", value, "ydCustomerid");
            return (Criteria) this;
        }

        public Criteria andYdCustomeridLike(String value) {
            addCriterion("yd_customerid like", value, "ydCustomerid");
            return (Criteria) this;
        }

        public Criteria andYdCustomeridNotLike(String value) {
            addCriterion("yd_customerid not like", value, "ydCustomerid");
            return (Criteria) this;
        }

        public Criteria andYdCustomeridIn(List<String> values) {
            addCriterion("yd_customerid in", values, "ydCustomerid");
            return (Criteria) this;
        }

        public Criteria andYdCustomeridNotIn(List<String> values) {
            addCriterion("yd_customerid not in", values, "ydCustomerid");
            return (Criteria) this;
        }

        public Criteria andYdCustomeridBetween(String value1, String value2) {
            addCriterion("yd_customerid between", value1, value2, "ydCustomerid");
            return (Criteria) this;
        }

        public Criteria andYdCustomeridNotBetween(String value1, String value2) {
            addCriterion("yd_customerid not between", value1, value2, "ydCustomerid");
            return (Criteria) this;
        }

        public Criteria andYdCtypeIsNull() {
            addCriterion("yd_ctype is null");
            return (Criteria) this;
        }

        public Criteria andYdCtypeIsNotNull() {
            addCriterion("yd_ctype is not null");
            return (Criteria) this;
        }

        public Criteria andYdCtypeEqualTo(String value) {
            addCriterion("yd_ctype =", value, "ydCtype");
            return (Criteria) this;
        }

        public Criteria andYdCtypeNotEqualTo(String value) {
            addCriterion("yd_ctype <>", value, "ydCtype");
            return (Criteria) this;
        }

        public Criteria andYdCtypeGreaterThan(String value) {
            addCriterion("yd_ctype >", value, "ydCtype");
            return (Criteria) this;
        }

        public Criteria andYdCtypeGreaterThanOrEqualTo(String value) {
            addCriterion("yd_ctype >=", value, "ydCtype");
            return (Criteria) this;
        }

        public Criteria andYdCtypeLessThan(String value) {
            addCriterion("yd_ctype <", value, "ydCtype");
            return (Criteria) this;
        }

        public Criteria andYdCtypeLessThanOrEqualTo(String value) {
            addCriterion("yd_ctype <=", value, "ydCtype");
            return (Criteria) this;
        }

        public Criteria andYdCtypeLike(String value) {
            addCriterion("yd_ctype like", value, "ydCtype");
            return (Criteria) this;
        }

        public Criteria andYdCtypeNotLike(String value) {
            addCriterion("yd_ctype not like", value, "ydCtype");
            return (Criteria) this;
        }

        public Criteria andYdCtypeIn(List<String> values) {
            addCriterion("yd_ctype in", values, "ydCtype");
            return (Criteria) this;
        }

        public Criteria andYdCtypeNotIn(List<String> values) {
            addCriterion("yd_ctype not in", values, "ydCtype");
            return (Criteria) this;
        }

        public Criteria andYdCtypeBetween(String value1, String value2) {
            addCriterion("yd_ctype between", value1, value2, "ydCtype");
            return (Criteria) this;
        }

        public Criteria andYdCtypeNotBetween(String value1, String value2) {
            addCriterion("yd_ctype not between", value1, value2, "ydCtype");
            return (Criteria) this;
        }

        public Criteria andYdProductIsNull() {
            addCriterion("yd_product is null");
            return (Criteria) this;
        }

        public Criteria andYdProductIsNotNull() {
            addCriterion("yd_product is not null");
            return (Criteria) this;
        }

        public Criteria andYdProductEqualTo(Byte value) {
            addCriterion("yd_product =", value, "ydProduct");
            return (Criteria) this;
        }

        public Criteria andYdProductNotEqualTo(Byte value) {
            addCriterion("yd_product <>", value, "ydProduct");
            return (Criteria) this;
        }

        public Criteria andYdProductGreaterThan(Byte value) {
            addCriterion("yd_product >", value, "ydProduct");
            return (Criteria) this;
        }

        public Criteria andYdProductGreaterThanOrEqualTo(Byte value) {
            addCriterion("yd_product >=", value, "ydProduct");
            return (Criteria) this;
        }

        public Criteria andYdProductLessThan(Byte value) {
            addCriterion("yd_product <", value, "ydProduct");
            return (Criteria) this;
        }

        public Criteria andYdProductLessThanOrEqualTo(Byte value) {
            addCriterion("yd_product <=", value, "ydProduct");
            return (Criteria) this;
        }

        public Criteria andYdProductIn(List<Byte> values) {
            addCriterion("yd_product in", values, "ydProduct");
            return (Criteria) this;
        }

        public Criteria andYdProductNotIn(List<Byte> values) {
            addCriterion("yd_product not in", values, "ydProduct");
            return (Criteria) this;
        }

        public Criteria andYdProductBetween(Byte value1, Byte value2) {
            addCriterion("yd_product between", value1, value2, "ydProduct");
            return (Criteria) this;
        }

        public Criteria andYdProductNotBetween(Byte value1, Byte value2) {
            addCriterion("yd_product not between", value1, value2, "ydProduct");
            return (Criteria) this;
        }

        public Criteria andYdTransportIsNull() {
            addCriterion("yd_transport is null");
            return (Criteria) this;
        }

        public Criteria andYdTransportIsNotNull() {
            addCriterion("yd_transport is not null");
            return (Criteria) this;
        }

        public Criteria andYdTransportEqualTo(Byte value) {
            addCriterion("yd_transport =", value, "ydTransport");
            return (Criteria) this;
        }

        public Criteria andYdTransportNotEqualTo(Byte value) {
            addCriterion("yd_transport <>", value, "ydTransport");
            return (Criteria) this;
        }

        public Criteria andYdTransportGreaterThan(Byte value) {
            addCriterion("yd_transport >", value, "ydTransport");
            return (Criteria) this;
        }

        public Criteria andYdTransportGreaterThanOrEqualTo(Byte value) {
            addCriterion("yd_transport >=", value, "ydTransport");
            return (Criteria) this;
        }

        public Criteria andYdTransportLessThan(Byte value) {
            addCriterion("yd_transport <", value, "ydTransport");
            return (Criteria) this;
        }

        public Criteria andYdTransportLessThanOrEqualTo(Byte value) {
            addCriterion("yd_transport <=", value, "ydTransport");
            return (Criteria) this;
        }

        public Criteria andYdTransportIn(List<Byte> values) {
            addCriterion("yd_transport in", values, "ydTransport");
            return (Criteria) this;
        }

        public Criteria andYdTransportNotIn(List<Byte> values) {
            addCriterion("yd_transport not in", values, "ydTransport");
            return (Criteria) this;
        }

        public Criteria andYdTransportBetween(Byte value1, Byte value2) {
            addCriterion("yd_transport between", value1, value2, "ydTransport");
            return (Criteria) this;
        }

        public Criteria andYdTransportNotBetween(Byte value1, Byte value2) {
            addCriterion("yd_transport not between", value1, value2, "ydTransport");
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

        public Criteria andYOneIsNull() {
            addCriterion("y_one is null");
            return (Criteria) this;
        }

        public Criteria andYOneIsNotNull() {
            addCriterion("y_one is not null");
            return (Criteria) this;
        }

        public Criteria andYOneEqualTo(Integer value) {
            addCriterion("y_one =", value, "yOne");
            return (Criteria) this;
        }

        public Criteria andYOneNotEqualTo(Integer value) {
            addCriterion("y_one <>", value, "yOne");
            return (Criteria) this;
        }

        public Criteria andYOneGreaterThan(Integer value) {
            addCriterion("y_one >", value, "yOne");
            return (Criteria) this;
        }

        public Criteria andYOneGreaterThanOrEqualTo(Integer value) {
            addCriterion("y_one >=", value, "yOne");
            return (Criteria) this;
        }

        public Criteria andYOneLessThan(Integer value) {
            addCriterion("y_one <", value, "yOne");
            return (Criteria) this;
        }

        public Criteria andYOneLessThanOrEqualTo(Integer value) {
            addCriterion("y_one <=", value, "yOne");
            return (Criteria) this;
        }

        public Criteria andYOneIn(List<Integer> values) {
            addCriterion("y_one in", values, "yOne");
            return (Criteria) this;
        }

        public Criteria andYOneNotIn(List<Integer> values) {
            addCriterion("y_one not in", values, "yOne");
            return (Criteria) this;
        }

        public Criteria andYOneBetween(Integer value1, Integer value2) {
            addCriterion("y_one between", value1, value2, "yOne");
            return (Criteria) this;
        }

        public Criteria andYOneNotBetween(Integer value1, Integer value2) {
            addCriterion("y_one not between", value1, value2, "yOne");
            return (Criteria) this;
        }

        public Criteria andYTwoIsNull() {
            addCriterion("y_two is null");
            return (Criteria) this;
        }

        public Criteria andYTwoIsNotNull() {
            addCriterion("y_two is not null");
            return (Criteria) this;
        }

        public Criteria andYTwoEqualTo(Integer value) {
            addCriterion("y_two =", value, "yTwo");
            return (Criteria) this;
        }

        public Criteria andYTwoNotEqualTo(Integer value) {
            addCriterion("y_two <>", value, "yTwo");
            return (Criteria) this;
        }

        public Criteria andYTwoGreaterThan(Integer value) {
            addCriterion("y_two >", value, "yTwo");
            return (Criteria) this;
        }

        public Criteria andYTwoGreaterThanOrEqualTo(Integer value) {
            addCriterion("y_two >=", value, "yTwo");
            return (Criteria) this;
        }

        public Criteria andYTwoLessThan(Integer value) {
            addCriterion("y_two <", value, "yTwo");
            return (Criteria) this;
        }

        public Criteria andYTwoLessThanOrEqualTo(Integer value) {
            addCriterion("y_two <=", value, "yTwo");
            return (Criteria) this;
        }

        public Criteria andYTwoIn(List<Integer> values) {
            addCriterion("y_two in", values, "yTwo");
            return (Criteria) this;
        }

        public Criteria andYTwoNotIn(List<Integer> values) {
            addCriterion("y_two not in", values, "yTwo");
            return (Criteria) this;
        }

        public Criteria andYTwoBetween(Integer value1, Integer value2) {
            addCriterion("y_two between", value1, value2, "yTwo");
            return (Criteria) this;
        }

        public Criteria andYTwoNotBetween(Integer value1, Integer value2) {
            addCriterion("y_two not between", value1, value2, "yTwo");
            return (Criteria) this;
        }

        public Criteria andYThreeIsNull() {
            addCriterion("y_three is null");
            return (Criteria) this;
        }

        public Criteria andYThreeIsNotNull() {
            addCriterion("y_three is not null");
            return (Criteria) this;
        }

        public Criteria andYThreeEqualTo(Integer value) {
            addCriterion("y_three =", value, "yThree");
            return (Criteria) this;
        }

        public Criteria andYThreeNotEqualTo(Integer value) {
            addCriterion("y_three <>", value, "yThree");
            return (Criteria) this;
        }

        public Criteria andYThreeGreaterThan(Integer value) {
            addCriterion("y_three >", value, "yThree");
            return (Criteria) this;
        }

        public Criteria andYThreeGreaterThanOrEqualTo(Integer value) {
            addCriterion("y_three >=", value, "yThree");
            return (Criteria) this;
        }

        public Criteria andYThreeLessThan(Integer value) {
            addCriterion("y_three <", value, "yThree");
            return (Criteria) this;
        }

        public Criteria andYThreeLessThanOrEqualTo(Integer value) {
            addCriterion("y_three <=", value, "yThree");
            return (Criteria) this;
        }

        public Criteria andYThreeIn(List<Integer> values) {
            addCriterion("y_three in", values, "yThree");
            return (Criteria) this;
        }

        public Criteria andYThreeNotIn(List<Integer> values) {
            addCriterion("y_three not in", values, "yThree");
            return (Criteria) this;
        }

        public Criteria andYThreeBetween(Integer value1, Integer value2) {
            addCriterion("y_three between", value1, value2, "yThree");
            return (Criteria) this;
        }

        public Criteria andYThreeNotBetween(Integer value1, Integer value2) {
            addCriterion("y_three not between", value1, value2, "yThree");
            return (Criteria) this;
        }

        public Criteria andYFourIsNull() {
            addCriterion("y_four is null");
            return (Criteria) this;
        }

        public Criteria andYFourIsNotNull() {
            addCriterion("y_four is not null");
            return (Criteria) this;
        }

        public Criteria andYFourEqualTo(Integer value) {
            addCriterion("y_four =", value, "yFour");
            return (Criteria) this;
        }

        public Criteria andYFourNotEqualTo(Integer value) {
            addCriterion("y_four <>", value, "yFour");
            return (Criteria) this;
        }

        public Criteria andYFourGreaterThan(Integer value) {
            addCriterion("y_four >", value, "yFour");
            return (Criteria) this;
        }

        public Criteria andYFourGreaterThanOrEqualTo(Integer value) {
            addCriterion("y_four >=", value, "yFour");
            return (Criteria) this;
        }

        public Criteria andYFourLessThan(Integer value) {
            addCriterion("y_four <", value, "yFour");
            return (Criteria) this;
        }

        public Criteria andYFourLessThanOrEqualTo(Integer value) {
            addCriterion("y_four <=", value, "yFour");
            return (Criteria) this;
        }

        public Criteria andYFourIn(List<Integer> values) {
            addCriterion("y_four in", values, "yFour");
            return (Criteria) this;
        }

        public Criteria andYFourNotIn(List<Integer> values) {
            addCriterion("y_four not in", values, "yFour");
            return (Criteria) this;
        }

        public Criteria andYFourBetween(Integer value1, Integer value2) {
            addCriterion("y_four between", value1, value2, "yFour");
            return (Criteria) this;
        }

        public Criteria andYFourNotBetween(Integer value1, Integer value2) {
            addCriterion("y_four not between", value1, value2, "yFour");
            return (Criteria) this;
        }

        public Criteria andYFiveIsNull() {
            addCriterion("y_five is null");
            return (Criteria) this;
        }

        public Criteria andYFiveIsNotNull() {
            addCriterion("y_five is not null");
            return (Criteria) this;
        }

        public Criteria andYFiveEqualTo(Integer value) {
            addCriterion("y_five =", value, "yFive");
            return (Criteria) this;
        }

        public Criteria andYFiveNotEqualTo(Integer value) {
            addCriterion("y_five <>", value, "yFive");
            return (Criteria) this;
        }

        public Criteria andYFiveGreaterThan(Integer value) {
            addCriterion("y_five >", value, "yFive");
            return (Criteria) this;
        }

        public Criteria andYFiveGreaterThanOrEqualTo(Integer value) {
            addCriterion("y_five >=", value, "yFive");
            return (Criteria) this;
        }

        public Criteria andYFiveLessThan(Integer value) {
            addCriterion("y_five <", value, "yFive");
            return (Criteria) this;
        }

        public Criteria andYFiveLessThanOrEqualTo(Integer value) {
            addCriterion("y_five <=", value, "yFive");
            return (Criteria) this;
        }

        public Criteria andYFiveIn(List<Integer> values) {
            addCriterion("y_five in", values, "yFive");
            return (Criteria) this;
        }

        public Criteria andYFiveNotIn(List<Integer> values) {
            addCriterion("y_five not in", values, "yFive");
            return (Criteria) this;
        }

        public Criteria andYFiveBetween(Integer value1, Integer value2) {
            addCriterion("y_five between", value1, value2, "yFive");
            return (Criteria) this;
        }

        public Criteria andYFiveNotBetween(Integer value1, Integer value2) {
            addCriterion("y_five not between", value1, value2, "yFive");
            return (Criteria) this;
        }

        public Criteria andYSixIsNull() {
            addCriterion("y_six is null");
            return (Criteria) this;
        }

        public Criteria andYSixIsNotNull() {
            addCriterion("y_six is not null");
            return (Criteria) this;
        }

        public Criteria andYSixEqualTo(Integer value) {
            addCriterion("y_six =", value, "ySix");
            return (Criteria) this;
        }

        public Criteria andYSixNotEqualTo(Integer value) {
            addCriterion("y_six <>", value, "ySix");
            return (Criteria) this;
        }

        public Criteria andYSixGreaterThan(Integer value) {
            addCriterion("y_six >", value, "ySix");
            return (Criteria) this;
        }

        public Criteria andYSixGreaterThanOrEqualTo(Integer value) {
            addCriterion("y_six >=", value, "ySix");
            return (Criteria) this;
        }

        public Criteria andYSixLessThan(Integer value) {
            addCriterion("y_six <", value, "ySix");
            return (Criteria) this;
        }

        public Criteria andYSixLessThanOrEqualTo(Integer value) {
            addCriterion("y_six <=", value, "ySix");
            return (Criteria) this;
        }

        public Criteria andYSixIn(List<Integer> values) {
            addCriterion("y_six in", values, "ySix");
            return (Criteria) this;
        }

        public Criteria andYSixNotIn(List<Integer> values) {
            addCriterion("y_six not in", values, "ySix");
            return (Criteria) this;
        }

        public Criteria andYSixBetween(Integer value1, Integer value2) {
            addCriterion("y_six between", value1, value2, "ySix");
            return (Criteria) this;
        }

        public Criteria andYSixNotBetween(Integer value1, Integer value2) {
            addCriterion("y_six not between", value1, value2, "ySix");
            return (Criteria) this;
        }

        public Criteria andYSevenIsNull() {
            addCriterion("y_seven is null");
            return (Criteria) this;
        }

        public Criteria andYSevenIsNotNull() {
            addCriterion("y_seven is not null");
            return (Criteria) this;
        }

        public Criteria andYSevenEqualTo(Integer value) {
            addCriterion("y_seven =", value, "ySeven");
            return (Criteria) this;
        }

        public Criteria andYSevenNotEqualTo(Integer value) {
            addCriterion("y_seven <>", value, "ySeven");
            return (Criteria) this;
        }

        public Criteria andYSevenGreaterThan(Integer value) {
            addCriterion("y_seven >", value, "ySeven");
            return (Criteria) this;
        }

        public Criteria andYSevenGreaterThanOrEqualTo(Integer value) {
            addCriterion("y_seven >=", value, "ySeven");
            return (Criteria) this;
        }

        public Criteria andYSevenLessThan(Integer value) {
            addCriterion("y_seven <", value, "ySeven");
            return (Criteria) this;
        }

        public Criteria andYSevenLessThanOrEqualTo(Integer value) {
            addCriterion("y_seven <=", value, "ySeven");
            return (Criteria) this;
        }

        public Criteria andYSevenIn(List<Integer> values) {
            addCriterion("y_seven in", values, "ySeven");
            return (Criteria) this;
        }

        public Criteria andYSevenNotIn(List<Integer> values) {
            addCriterion("y_seven not in", values, "ySeven");
            return (Criteria) this;
        }

        public Criteria andYSevenBetween(Integer value1, Integer value2) {
            addCriterion("y_seven between", value1, value2, "ySeven");
            return (Criteria) this;
        }

        public Criteria andYSevenNotBetween(Integer value1, Integer value2) {
            addCriterion("y_seven not between", value1, value2, "ySeven");
            return (Criteria) this;
        }

        public Criteria andYEightIsNull() {
            addCriterion("y_eight is null");
            return (Criteria) this;
        }

        public Criteria andYEightIsNotNull() {
            addCriterion("y_eight is not null");
            return (Criteria) this;
        }

        public Criteria andYEightEqualTo(Integer value) {
            addCriterion("y_eight =", value, "yEight");
            return (Criteria) this;
        }

        public Criteria andYEightNotEqualTo(Integer value) {
            addCriterion("y_eight <>", value, "yEight");
            return (Criteria) this;
        }

        public Criteria andYEightGreaterThan(Integer value) {
            addCriterion("y_eight >", value, "yEight");
            return (Criteria) this;
        }

        public Criteria andYEightGreaterThanOrEqualTo(Integer value) {
            addCriterion("y_eight >=", value, "yEight");
            return (Criteria) this;
        }

        public Criteria andYEightLessThan(Integer value) {
            addCriterion("y_eight <", value, "yEight");
            return (Criteria) this;
        }

        public Criteria andYEightLessThanOrEqualTo(Integer value) {
            addCriterion("y_eight <=", value, "yEight");
            return (Criteria) this;
        }

        public Criteria andYEightIn(List<Integer> values) {
            addCriterion("y_eight in", values, "yEight");
            return (Criteria) this;
        }

        public Criteria andYEightNotIn(List<Integer> values) {
            addCriterion("y_eight not in", values, "yEight");
            return (Criteria) this;
        }

        public Criteria andYEightBetween(Integer value1, Integer value2) {
            addCriterion("y_eight between", value1, value2, "yEight");
            return (Criteria) this;
        }

        public Criteria andYEightNotBetween(Integer value1, Integer value2) {
            addCriterion("y_eight not between", value1, value2, "yEight");
            return (Criteria) this;
        }

        public Criteria andYNineIsNull() {
            addCriterion("y_nine is null");
            return (Criteria) this;
        }

        public Criteria andYNineIsNotNull() {
            addCriterion("y_nine is not null");
            return (Criteria) this;
        }

        public Criteria andYNineEqualTo(Integer value) {
            addCriterion("y_nine =", value, "yNine");
            return (Criteria) this;
        }

        public Criteria andYNineNotEqualTo(Integer value) {
            addCriterion("y_nine <>", value, "yNine");
            return (Criteria) this;
        }

        public Criteria andYNineGreaterThan(Integer value) {
            addCriterion("y_nine >", value, "yNine");
            return (Criteria) this;
        }

        public Criteria andYNineGreaterThanOrEqualTo(Integer value) {
            addCriterion("y_nine >=", value, "yNine");
            return (Criteria) this;
        }

        public Criteria andYNineLessThan(Integer value) {
            addCriterion("y_nine <", value, "yNine");
            return (Criteria) this;
        }

        public Criteria andYNineLessThanOrEqualTo(Integer value) {
            addCriterion("y_nine <=", value, "yNine");
            return (Criteria) this;
        }

        public Criteria andYNineIn(List<Integer> values) {
            addCriterion("y_nine in", values, "yNine");
            return (Criteria) this;
        }

        public Criteria andYNineNotIn(List<Integer> values) {
            addCriterion("y_nine not in", values, "yNine");
            return (Criteria) this;
        }

        public Criteria andYNineBetween(Integer value1, Integer value2) {
            addCriterion("y_nine between", value1, value2, "yNine");
            return (Criteria) this;
        }

        public Criteria andYNineNotBetween(Integer value1, Integer value2) {
            addCriterion("y_nine not between", value1, value2, "yNine");
            return (Criteria) this;
        }

        public Criteria andYTenIsNull() {
            addCriterion("y_ten is null");
            return (Criteria) this;
        }

        public Criteria andYTenIsNotNull() {
            addCriterion("y_ten is not null");
            return (Criteria) this;
        }

        public Criteria andYTenEqualTo(Integer value) {
            addCriterion("y_ten =", value, "yTen");
            return (Criteria) this;
        }

        public Criteria andYTenNotEqualTo(Integer value) {
            addCriterion("y_ten <>", value, "yTen");
            return (Criteria) this;
        }

        public Criteria andYTenGreaterThan(Integer value) {
            addCriterion("y_ten >", value, "yTen");
            return (Criteria) this;
        }

        public Criteria andYTenGreaterThanOrEqualTo(Integer value) {
            addCriterion("y_ten >=", value, "yTen");
            return (Criteria) this;
        }

        public Criteria andYTenLessThan(Integer value) {
            addCriterion("y_ten <", value, "yTen");
            return (Criteria) this;
        }

        public Criteria andYTenLessThanOrEqualTo(Integer value) {
            addCriterion("y_ten <=", value, "yTen");
            return (Criteria) this;
        }

        public Criteria andYTenIn(List<Integer> values) {
            addCriterion("y_ten in", values, "yTen");
            return (Criteria) this;
        }

        public Criteria andYTenNotIn(List<Integer> values) {
            addCriterion("y_ten not in", values, "yTen");
            return (Criteria) this;
        }

        public Criteria andYTenBetween(Integer value1, Integer value2) {
            addCriterion("y_ten between", value1, value2, "yTen");
            return (Criteria) this;
        }

        public Criteria andYTenNotBetween(Integer value1, Integer value2) {
            addCriterion("y_ten not between", value1, value2, "yTen");
            return (Criteria) this;
        }

        public Criteria andYElevenIsNull() {
            addCriterion("y_eleven is null");
            return (Criteria) this;
        }

        public Criteria andYElevenIsNotNull() {
            addCriterion("y_eleven is not null");
            return (Criteria) this;
        }

        public Criteria andYElevenEqualTo(Integer value) {
            addCriterion("y_eleven =", value, "yEleven");
            return (Criteria) this;
        }

        public Criteria andYElevenNotEqualTo(Integer value) {
            addCriterion("y_eleven <>", value, "yEleven");
            return (Criteria) this;
        }

        public Criteria andYElevenGreaterThan(Integer value) {
            addCriterion("y_eleven >", value, "yEleven");
            return (Criteria) this;
        }

        public Criteria andYElevenGreaterThanOrEqualTo(Integer value) {
            addCriterion("y_eleven >=", value, "yEleven");
            return (Criteria) this;
        }

        public Criteria andYElevenLessThan(Integer value) {
            addCriterion("y_eleven <", value, "yEleven");
            return (Criteria) this;
        }

        public Criteria andYElevenLessThanOrEqualTo(Integer value) {
            addCriterion("y_eleven <=", value, "yEleven");
            return (Criteria) this;
        }

        public Criteria andYElevenIn(List<Integer> values) {
            addCriterion("y_eleven in", values, "yEleven");
            return (Criteria) this;
        }

        public Criteria andYElevenNotIn(List<Integer> values) {
            addCriterion("y_eleven not in", values, "yEleven");
            return (Criteria) this;
        }

        public Criteria andYElevenBetween(Integer value1, Integer value2) {
            addCriterion("y_eleven between", value1, value2, "yEleven");
            return (Criteria) this;
        }

        public Criteria andYElevenNotBetween(Integer value1, Integer value2) {
            addCriterion("y_eleven not between", value1, value2, "yEleven");
            return (Criteria) this;
        }

        public Criteria andYTwelveIsNull() {
            addCriterion("y_twelve is null");
            return (Criteria) this;
        }

        public Criteria andYTwelveIsNotNull() {
            addCriterion("y_twelve is not null");
            return (Criteria) this;
        }

        public Criteria andYTwelveEqualTo(Integer value) {
            addCriterion("y_twelve =", value, "yTwelve");
            return (Criteria) this;
        }

        public Criteria andYTwelveNotEqualTo(Integer value) {
            addCriterion("y_twelve <>", value, "yTwelve");
            return (Criteria) this;
        }

        public Criteria andYTwelveGreaterThan(Integer value) {
            addCriterion("y_twelve >", value, "yTwelve");
            return (Criteria) this;
        }

        public Criteria andYTwelveGreaterThanOrEqualTo(Integer value) {
            addCriterion("y_twelve >=", value, "yTwelve");
            return (Criteria) this;
        }

        public Criteria andYTwelveLessThan(Integer value) {
            addCriterion("y_twelve <", value, "yTwelve");
            return (Criteria) this;
        }

        public Criteria andYTwelveLessThanOrEqualTo(Integer value) {
            addCriterion("y_twelve <=", value, "yTwelve");
            return (Criteria) this;
        }

        public Criteria andYTwelveIn(List<Integer> values) {
            addCriterion("y_twelve in", values, "yTwelve");
            return (Criteria) this;
        }

        public Criteria andYTwelveNotIn(List<Integer> values) {
            addCriterion("y_twelve not in", values, "yTwelve");
            return (Criteria) this;
        }

        public Criteria andYTwelveBetween(Integer value1, Integer value2) {
            addCriterion("y_twelve between", value1, value2, "yTwelve");
            return (Criteria) this;
        }

        public Criteria andYTwelveNotBetween(Integer value1, Integer value2) {
            addCriterion("y_twelve not between", value1, value2, "yTwelve");
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