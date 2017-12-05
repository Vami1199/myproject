package com.xj.domain.plan;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class PlanYearQuery {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Integer pageNo = 1;

    protected Integer startRow;

    protected Integer pageSize = 10;

    protected String fields;

    public PlanYearQuery() {
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

        public Criteria andYIdIsNull() {
            addCriterion("y_id is null");
            return (Criteria) this;
        }

        public Criteria andYIdIsNotNull() {
            addCriterion("y_id is not null");
            return (Criteria) this;
        }

        public Criteria andYIdEqualTo(String value) {
            addCriterion("y_id =", value, "yId");
            return (Criteria) this;
        }

        public Criteria andYIdNotEqualTo(String value) {
            addCriterion("y_id <>", value, "yId");
            return (Criteria) this;
        }

        public Criteria andYIdGreaterThan(String value) {
            addCriterion("y_id >", value, "yId");
            return (Criteria) this;
        }

        public Criteria andYIdGreaterThanOrEqualTo(String value) {
            addCriterion("y_id >=", value, "yId");
            return (Criteria) this;
        }

        public Criteria andYIdLessThan(String value) {
            addCriterion("y_id <", value, "yId");
            return (Criteria) this;
        }

        public Criteria andYIdLessThanOrEqualTo(String value) {
            addCriterion("y_id <=", value, "yId");
            return (Criteria) this;
        }

        public Criteria andYIdLike(String value) {
            addCriterion("y_id like", value, "yId");
            return (Criteria) this;
        }

        public Criteria andYIdNotLike(String value) {
            addCriterion("y_id not like", value, "yId");
            return (Criteria) this;
        }

        public Criteria andYIdIn(List<String> values) {
            addCriterion("y_id in", values, "yId");
            return (Criteria) this;
        }

        public Criteria andYIdNotIn(List<String> values) {
            addCriterion("y_id not in", values, "yId");
            return (Criteria) this;
        }

        public Criteria andYIdBetween(String value1, String value2) {
            addCriterion("y_id between", value1, value2, "yId");
            return (Criteria) this;
        }

        public Criteria andYIdNotBetween(String value1, String value2) {
            addCriterion("y_id not between", value1, value2, "yId");
            return (Criteria) this;
        }

        public Criteria andYYearIsNull() {
            addCriterion("y_year is null");
            return (Criteria) this;
        }

        public Criteria andYYearIsNotNull() {
            addCriterion("y_year is not null");
            return (Criteria) this;
        }

        public Criteria andYYearEqualTo(Integer value) {
            addCriterion("y_year =", value, "yYear");
            return (Criteria) this;
        }

        public Criteria andYYearNotEqualTo(Integer value) {
            addCriterion("y_year <>", value, "yYear");
            return (Criteria) this;
        }

        public Criteria andYYearGreaterThan(Integer value) {
            addCriterion("y_year >", value, "yYear");
            return (Criteria) this;
        }

        public Criteria andYYearGreaterThanOrEqualTo(Integer value) {
            addCriterion("y_year >=", value, "yYear");
            return (Criteria) this;
        }

        public Criteria andYYearLessThan(Integer value) {
            addCriterion("y_year <", value, "yYear");
            return (Criteria) this;
        }

        public Criteria andYYearLessThanOrEqualTo(Integer value) {
            addCriterion("y_year <=", value, "yYear");
            return (Criteria) this;
        }

        public Criteria andYYearIn(List<Integer> values) {
            addCriterion("y_year in", values, "yYear");
            return (Criteria) this;
        }

        public Criteria andYYearNotIn(List<Integer> values) {
            addCriterion("y_year not in", values, "yYear");
            return (Criteria) this;
        }

        public Criteria andYYearBetween(Integer value1, Integer value2) {
            addCriterion("y_year between", value1, value2, "yYear");
            return (Criteria) this;
        }

        public Criteria andYYearNotBetween(Integer value1, Integer value2) {
            addCriterion("y_year not between", value1, value2, "yYear");
            return (Criteria) this;
        }

        public Criteria andYPlanIsNull() {
            addCriterion("y_plan is null");
            return (Criteria) this;
        }

        public Criteria andYPlanIsNotNull() {
            addCriterion("y_plan is not null");
            return (Criteria) this;
        }

        public Criteria andYPlanEqualTo(Integer value) {
            addCriterion("y_plan =", value, "yPlan");
            return (Criteria) this;
        }

        public Criteria andYPlanNotEqualTo(Integer value) {
            addCriterion("y_plan <>", value, "yPlan");
            return (Criteria) this;
        }

        public Criteria andYPlanGreaterThan(Integer value) {
            addCriterion("y_plan >", value, "yPlan");
            return (Criteria) this;
        }

        public Criteria andYPlanGreaterThanOrEqualTo(Integer value) {
            addCriterion("y_plan >=", value, "yPlan");
            return (Criteria) this;
        }

        public Criteria andYPlanLessThan(Integer value) {
            addCriterion("y_plan <", value, "yPlan");
            return (Criteria) this;
        }

        public Criteria andYPlanLessThanOrEqualTo(Integer value) {
            addCriterion("y_plan <=", value, "yPlan");
            return (Criteria) this;
        }

        public Criteria andYPlanIn(List<Integer> values) {
            addCriterion("y_plan in", values, "yPlan");
            return (Criteria) this;
        }

        public Criteria andYPlanNotIn(List<Integer> values) {
            addCriterion("y_plan not in", values, "yPlan");
            return (Criteria) this;
        }

        public Criteria andYPlanBetween(Integer value1, Integer value2) {
            addCriterion("y_plan between", value1, value2, "yPlan");
            return (Criteria) this;
        }

        public Criteria andYPlanNotBetween(Integer value1, Integer value2) {
            addCriterion("y_plan not between", value1, value2, "yPlan");
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

        public Criteria andYUserIsNull() {
            addCriterion("y_user is null");
            return (Criteria) this;
        }

        public Criteria andYUserIsNotNull() {
            addCriterion("y_user is not null");
            return (Criteria) this;
        }

        public Criteria andYUserEqualTo(String value) {
            addCriterion("y_user =", value, "yUser");
            return (Criteria) this;
        }

        public Criteria andYUserNotEqualTo(String value) {
            addCriterion("y_user <>", value, "yUser");
            return (Criteria) this;
        }

        public Criteria andYUserGreaterThan(String value) {
            addCriterion("y_user >", value, "yUser");
            return (Criteria) this;
        }

        public Criteria andYUserGreaterThanOrEqualTo(String value) {
            addCriterion("y_user >=", value, "yUser");
            return (Criteria) this;
        }

        public Criteria andYUserLessThan(String value) {
            addCriterion("y_user <", value, "yUser");
            return (Criteria) this;
        }

        public Criteria andYUserLessThanOrEqualTo(String value) {
            addCriterion("y_user <=", value, "yUser");
            return (Criteria) this;
        }

        public Criteria andYUserLike(String value) {
            addCriterion("y_user like", value, "yUser");
            return (Criteria) this;
        }

        public Criteria andYUserNotLike(String value) {
            addCriterion("y_user not like", value, "yUser");
            return (Criteria) this;
        }

        public Criteria andYUserIn(List<String> values) {
            addCriterion("y_user in", values, "yUser");
            return (Criteria) this;
        }

        public Criteria andYUserNotIn(List<String> values) {
            addCriterion("y_user not in", values, "yUser");
            return (Criteria) this;
        }

        public Criteria andYUserBetween(String value1, String value2) {
            addCriterion("y_user between", value1, value2, "yUser");
            return (Criteria) this;
        }

        public Criteria andYUserNotBetween(String value1, String value2) {
            addCriterion("y_user not between", value1, value2, "yUser");
            return (Criteria) this;
        }

        public Criteria andYDateIsNull() {
            addCriterion("y_date is null");
            return (Criteria) this;
        }

        public Criteria andYDateIsNotNull() {
            addCriterion("y_date is not null");
            return (Criteria) this;
        }

        public Criteria andYDateEqualTo(Date value) {
            addCriterionForJDBCDate("y_date =", value, "yDate");
            return (Criteria) this;
        }

        public Criteria andYDateNotEqualTo(Date value) {
            addCriterionForJDBCDate("y_date <>", value, "yDate");
            return (Criteria) this;
        }

        public Criteria andYDateGreaterThan(Date value) {
            addCriterionForJDBCDate("y_date >", value, "yDate");
            return (Criteria) this;
        }

        public Criteria andYDateGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("y_date >=", value, "yDate");
            return (Criteria) this;
        }

        public Criteria andYDateLessThan(Date value) {
            addCriterionForJDBCDate("y_date <", value, "yDate");
            return (Criteria) this;
        }

        public Criteria andYDateLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("y_date <=", value, "yDate");
            return (Criteria) this;
        }

        public Criteria andYDateIn(List<Date> values) {
            addCriterionForJDBCDate("y_date in", values, "yDate");
            return (Criteria) this;
        }

        public Criteria andYDateNotIn(List<Date> values) {
            addCriterionForJDBCDate("y_date not in", values, "yDate");
            return (Criteria) this;
        }

        public Criteria andYDateBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("y_date between", value1, value2, "yDate");
            return (Criteria) this;
        }

        public Criteria andYDateNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("y_date not between", value1, value2, "yDate");
            return (Criteria) this;
        }

        public Criteria andYDepartmentIsNull() {
            addCriterion("y_department is null");
            return (Criteria) this;
        }

        public Criteria andYDepartmentIsNotNull() {
            addCriterion("y_department is not null");
            return (Criteria) this;
        }

        public Criteria andYDepartmentEqualTo(String value) {
            addCriterion("y_department =", value, "yDepartment");
            return (Criteria) this;
        }

        public Criteria andYDepartmentNotEqualTo(String value) {
            addCriterion("y_department <>", value, "yDepartment");
            return (Criteria) this;
        }

        public Criteria andYDepartmentGreaterThan(String value) {
            addCriterion("y_department >", value, "yDepartment");
            return (Criteria) this;
        }

        public Criteria andYDepartmentGreaterThanOrEqualTo(String value) {
            addCriterion("y_department >=", value, "yDepartment");
            return (Criteria) this;
        }

        public Criteria andYDepartmentLessThan(String value) {
            addCriterion("y_department <", value, "yDepartment");
            return (Criteria) this;
        }

        public Criteria andYDepartmentLessThanOrEqualTo(String value) {
            addCriterion("y_department <=", value, "yDepartment");
            return (Criteria) this;
        }

        public Criteria andYDepartmentLike(String value) {
            addCriterion("y_department like", value, "yDepartment");
            return (Criteria) this;
        }

        public Criteria andYDepartmentNotLike(String value) {
            addCriterion("y_department not like", value, "yDepartment");
            return (Criteria) this;
        }

        public Criteria andYDepartmentIn(List<String> values) {
            addCriterion("y_department in", values, "yDepartment");
            return (Criteria) this;
        }

        public Criteria andYDepartmentNotIn(List<String> values) {
            addCriterion("y_department not in", values, "yDepartment");
            return (Criteria) this;
        }

        public Criteria andYDepartmentBetween(String value1, String value2) {
            addCriterion("y_department between", value1, value2, "yDepartment");
            return (Criteria) this;
        }

        public Criteria andYDepartmentNotBetween(String value1, String value2) {
            addCriterion("y_department not between", value1, value2, "yDepartment");
            return (Criteria) this;
        }

        public Criteria andYStateIsNull() {
            addCriterion("y_state is null");
            return (Criteria) this;
        }

        public Criteria andYStateIsNotNull() {
            addCriterion("y_state is not null");
            return (Criteria) this;
        }

        public Criteria andYStateEqualTo(Byte value) {
            addCriterion("y_state =", value, "yState");
            return (Criteria) this;
        }

        public Criteria andYStateNotEqualTo(Byte value) {
            addCriterion("y_state <>", value, "yState");
            return (Criteria) this;
        }

        public Criteria andYStateGreaterThan(Byte value) {
            addCriterion("y_state >", value, "yState");
            return (Criteria) this;
        }

        public Criteria andYStateGreaterThanOrEqualTo(Byte value) {
            addCriterion("y_state >=", value, "yState");
            return (Criteria) this;
        }

        public Criteria andYStateLessThan(Byte value) {
            addCriterion("y_state <", value, "yState");
            return (Criteria) this;
        }

        public Criteria andYStateLessThanOrEqualTo(Byte value) {
            addCriterion("y_state <=", value, "yState");
            return (Criteria) this;
        }

        public Criteria andYStateIn(List<Byte> values) {
            addCriterion("y_state in", values, "yState");
            return (Criteria) this;
        }

        public Criteria andYStateNotIn(List<Byte> values) {
            addCriterion("y_state not in", values, "yState");
            return (Criteria) this;
        }

        public Criteria andYStateBetween(Byte value1, Byte value2) {
            addCriterion("y_state between", value1, value2, "yState");
            return (Criteria) this;
        }

        public Criteria andYStateNotBetween(Byte value1, Byte value2) {
            addCriterion("y_state not between", value1, value2, "yState");
            return (Criteria) this;
        }

        public Criteria andCreatedateIsNull() {
            addCriterion("CreateDate is null");
            return (Criteria) this;
        }

        public Criteria andCreatedateIsNotNull() {
            addCriterion("CreateDate is not null");
            return (Criteria) this;
        }

        public Criteria andCreatedateEqualTo(Date value) {
            addCriterion("CreateDate =", value, "createdate");
            return (Criteria) this;
        }

        public Criteria andCreatedateNotEqualTo(Date value) {
            addCriterion("CreateDate <>", value, "createdate");
            return (Criteria) this;
        }

        public Criteria andCreatedateGreaterThan(Date value) {
            addCriterion("CreateDate >", value, "createdate");
            return (Criteria) this;
        }

        public Criteria andCreatedateGreaterThanOrEqualTo(Date value) {
            addCriterion("CreateDate >=", value, "createdate");
            return (Criteria) this;
        }

        public Criteria andCreatedateLessThan(Date value) {
            addCriterion("CreateDate <", value, "createdate");
            return (Criteria) this;
        }

        public Criteria andCreatedateLessThanOrEqualTo(Date value) {
            addCriterion("CreateDate <=", value, "createdate");
            return (Criteria) this;
        }

        public Criteria andCreatedateIn(List<Date> values) {
            addCriterion("CreateDate in", values, "createdate");
            return (Criteria) this;
        }

        public Criteria andCreatedateNotIn(List<Date> values) {
            addCriterion("CreateDate not in", values, "createdate");
            return (Criteria) this;
        }

        public Criteria andCreatedateBetween(Date value1, Date value2) {
            addCriterion("CreateDate between", value1, value2, "createdate");
            return (Criteria) this;
        }

        public Criteria andCreatedateNotBetween(Date value1, Date value2) {
            addCriterion("CreateDate not between", value1, value2, "createdate");
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