package com.xj.domain.trainsplan;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class PAddwithoutcontractQuery {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Integer pageNo = 1;

    protected Integer startRow;

    protected Integer pageSize = 10;

    protected String fields;

    public PAddwithoutcontractQuery() {
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

        public Criteria andAwtIdIsNull() {
            addCriterion("awt_id is null");
            return (Criteria) this;
        }

        public Criteria andAwtIdIsNotNull() {
            addCriterion("awt_id is not null");
            return (Criteria) this;
        }

        public Criteria andAwtIdEqualTo(String value) {
            addCriterion("awt_id =", value, "awtId");
            return (Criteria) this;
        }

        public Criteria andAwtIdNotEqualTo(String value) {
            addCriterion("awt_id <>", value, "awtId");
            return (Criteria) this;
        }

        public Criteria andAwtIdGreaterThan(String value) {
            addCriterion("awt_id >", value, "awtId");
            return (Criteria) this;
        }

        public Criteria andAwtIdGreaterThanOrEqualTo(String value) {
            addCriterion("awt_id >=", value, "awtId");
            return (Criteria) this;
        }

        public Criteria andAwtIdLessThan(String value) {
            addCriterion("awt_id <", value, "awtId");
            return (Criteria) this;
        }

        public Criteria andAwtIdLessThanOrEqualTo(String value) {
            addCriterion("awt_id <=", value, "awtId");
            return (Criteria) this;
        }

        public Criteria andAwtIdLike(String value) {
            addCriterion("awt_id like", value, "awtId");
            return (Criteria) this;
        }

        public Criteria andAwtIdNotLike(String value) {
            addCriterion("awt_id not like", value, "awtId");
            return (Criteria) this;
        }

        public Criteria andAwtIdIn(List<String> values) {
            addCriterion("awt_id in", values, "awtId");
            return (Criteria) this;
        }

        public Criteria andAwtIdNotIn(List<String> values) {
            addCriterion("awt_id not in", values, "awtId");
            return (Criteria) this;
        }

        public Criteria andAwtIdBetween(String value1, String value2) {
            addCriterion("awt_id between", value1, value2, "awtId");
            return (Criteria) this;
        }

        public Criteria andAwtIdNotBetween(String value1, String value2) {
            addCriterion("awt_id not between", value1, value2, "awtId");
            return (Criteria) this;
        }

        public Criteria andAwtStartIsNull() {
            addCriterion("awt_start is null");
            return (Criteria) this;
        }

        public Criteria andAwtStartIsNotNull() {
            addCriterion("awt_start is not null");
            return (Criteria) this;
        }

        public Criteria andAwtStartEqualTo(String value) {
            addCriterion("awt_start =", value, "awtStart");
            return (Criteria) this;
        }

        public Criteria andAwtStartNotEqualTo(String value) {
            addCriterion("awt_start <>", value, "awtStart");
            return (Criteria) this;
        }

        public Criteria andAwtStartGreaterThan(String value) {
            addCriterion("awt_start >", value, "awtStart");
            return (Criteria) this;
        }

        public Criteria andAwtStartGreaterThanOrEqualTo(String value) {
            addCriterion("awt_start >=", value, "awtStart");
            return (Criteria) this;
        }

        public Criteria andAwtStartLessThan(String value) {
            addCriterion("awt_start <", value, "awtStart");
            return (Criteria) this;
        }

        public Criteria andAwtStartLessThanOrEqualTo(String value) {
            addCriterion("awt_start <=", value, "awtStart");
            return (Criteria) this;
        }

        public Criteria andAwtStartLike(String value) {
            addCriterion("awt_start like", value, "awtStart");
            return (Criteria) this;
        }

        public Criteria andAwtStartNotLike(String value) {
            addCriterion("awt_start not like", value, "awtStart");
            return (Criteria) this;
        }

        public Criteria andAwtStartIn(List<String> values) {
            addCriterion("awt_start in", values, "awtStart");
            return (Criteria) this;
        }

        public Criteria andAwtStartNotIn(List<String> values) {
            addCriterion("awt_start not in", values, "awtStart");
            return (Criteria) this;
        }

        public Criteria andAwtStartBetween(String value1, String value2) {
            addCriterion("awt_start between", value1, value2, "awtStart");
            return (Criteria) this;
        }

        public Criteria andAwtStartNotBetween(String value1, String value2) {
            addCriterion("awt_start not between", value1, value2, "awtStart");
            return (Criteria) this;
        }

        public Criteria andAwtEndIsNull() {
            addCriterion("awt_end is null");
            return (Criteria) this;
        }

        public Criteria andAwtEndIsNotNull() {
            addCriterion("awt_end is not null");
            return (Criteria) this;
        }

        public Criteria andAwtEndEqualTo(String value) {
            addCriterion("awt_end =", value, "awtEnd");
            return (Criteria) this;
        }

        public Criteria andAwtEndNotEqualTo(String value) {
            addCriterion("awt_end <>", value, "awtEnd");
            return (Criteria) this;
        }

        public Criteria andAwtEndGreaterThan(String value) {
            addCriterion("awt_end >", value, "awtEnd");
            return (Criteria) this;
        }

        public Criteria andAwtEndGreaterThanOrEqualTo(String value) {
            addCriterion("awt_end >=", value, "awtEnd");
            return (Criteria) this;
        }

        public Criteria andAwtEndLessThan(String value) {
            addCriterion("awt_end <", value, "awtEnd");
            return (Criteria) this;
        }

        public Criteria andAwtEndLessThanOrEqualTo(String value) {
            addCriterion("awt_end <=", value, "awtEnd");
            return (Criteria) this;
        }

        public Criteria andAwtEndLike(String value) {
            addCriterion("awt_end like", value, "awtEnd");
            return (Criteria) this;
        }

        public Criteria andAwtEndNotLike(String value) {
            addCriterion("awt_end not like", value, "awtEnd");
            return (Criteria) this;
        }

        public Criteria andAwtEndIn(List<String> values) {
            addCriterion("awt_end in", values, "awtEnd");
            return (Criteria) this;
        }

        public Criteria andAwtEndNotIn(List<String> values) {
            addCriterion("awt_end not in", values, "awtEnd");
            return (Criteria) this;
        }

        public Criteria andAwtEndBetween(String value1, String value2) {
            addCriterion("awt_end between", value1, value2, "awtEnd");
            return (Criteria) this;
        }

        public Criteria andAwtEndNotBetween(String value1, String value2) {
            addCriterion("awt_end not between", value1, value2, "awtEnd");
            return (Criteria) this;
        }

        public Criteria andAwtPaycompanyIsNull() {
            addCriterion("awt_paycompany is null");
            return (Criteria) this;
        }

        public Criteria andAwtPaycompanyIsNotNull() {
            addCriterion("awt_paycompany is not null");
            return (Criteria) this;
        }

        public Criteria andAwtPaycompanyEqualTo(String value) {
            addCriterion("awt_paycompany =", value, "awtPaycompany");
            return (Criteria) this;
        }

        public Criteria andAwtPaycompanyNotEqualTo(String value) {
            addCriterion("awt_paycompany <>", value, "awtPaycompany");
            return (Criteria) this;
        }

        public Criteria andAwtPaycompanyGreaterThan(String value) {
            addCriterion("awt_paycompany >", value, "awtPaycompany");
            return (Criteria) this;
        }

        public Criteria andAwtPaycompanyGreaterThanOrEqualTo(String value) {
            addCriterion("awt_paycompany >=", value, "awtPaycompany");
            return (Criteria) this;
        }

        public Criteria andAwtPaycompanyLessThan(String value) {
            addCriterion("awt_paycompany <", value, "awtPaycompany");
            return (Criteria) this;
        }

        public Criteria andAwtPaycompanyLessThanOrEqualTo(String value) {
            addCriterion("awt_paycompany <=", value, "awtPaycompany");
            return (Criteria) this;
        }

        public Criteria andAwtPaycompanyLike(String value) {
            addCriterion("awt_paycompany like", value, "awtPaycompany");
            return (Criteria) this;
        }

        public Criteria andAwtPaycompanyNotLike(String value) {
            addCriterion("awt_paycompany not like", value, "awtPaycompany");
            return (Criteria) this;
        }

        public Criteria andAwtPaycompanyIn(List<String> values) {
            addCriterion("awt_paycompany in", values, "awtPaycompany");
            return (Criteria) this;
        }

        public Criteria andAwtPaycompanyNotIn(List<String> values) {
            addCriterion("awt_paycompany not in", values, "awtPaycompany");
            return (Criteria) this;
        }

        public Criteria andAwtPaycompanyBetween(String value1, String value2) {
            addCriterion("awt_paycompany between", value1, value2, "awtPaycompany");
            return (Criteria) this;
        }

        public Criteria andAwtPaycompanyNotBetween(String value1, String value2) {
            addCriterion("awt_paycompany not between", value1, value2, "awtPaycompany");
            return (Criteria) this;
        }

        public Criteria andAwtTakecompanyIsNull() {
            addCriterion("awt_takecompany is null");
            return (Criteria) this;
        }

        public Criteria andAwtTakecompanyIsNotNull() {
            addCriterion("awt_takecompany is not null");
            return (Criteria) this;
        }

        public Criteria andAwtTakecompanyEqualTo(String value) {
            addCriterion("awt_takecompany =", value, "awtTakecompany");
            return (Criteria) this;
        }

        public Criteria andAwtTakecompanyNotEqualTo(String value) {
            addCriterion("awt_takecompany <>", value, "awtTakecompany");
            return (Criteria) this;
        }

        public Criteria andAwtTakecompanyGreaterThan(String value) {
            addCriterion("awt_takecompany >", value, "awtTakecompany");
            return (Criteria) this;
        }

        public Criteria andAwtTakecompanyGreaterThanOrEqualTo(String value) {
            addCriterion("awt_takecompany >=", value, "awtTakecompany");
            return (Criteria) this;
        }

        public Criteria andAwtTakecompanyLessThan(String value) {
            addCriterion("awt_takecompany <", value, "awtTakecompany");
            return (Criteria) this;
        }

        public Criteria andAwtTakecompanyLessThanOrEqualTo(String value) {
            addCriterion("awt_takecompany <=", value, "awtTakecompany");
            return (Criteria) this;
        }

        public Criteria andAwtTakecompanyLike(String value) {
            addCriterion("awt_takecompany like", value, "awtTakecompany");
            return (Criteria) this;
        }

        public Criteria andAwtTakecompanyNotLike(String value) {
            addCriterion("awt_takecompany not like", value, "awtTakecompany");
            return (Criteria) this;
        }

        public Criteria andAwtTakecompanyIn(List<String> values) {
            addCriterion("awt_takecompany in", values, "awtTakecompany");
            return (Criteria) this;
        }

        public Criteria andAwtTakecompanyNotIn(List<String> values) {
            addCriterion("awt_takecompany not in", values, "awtTakecompany");
            return (Criteria) this;
        }

        public Criteria andAwtTakecompanyBetween(String value1, String value2) {
            addCriterion("awt_takecompany between", value1, value2, "awtTakecompany");
            return (Criteria) this;
        }

        public Criteria andAwtTakecompanyNotBetween(String value1, String value2) {
            addCriterion("awt_takecompany not between", value1, value2, "awtTakecompany");
            return (Criteria) this;
        }

        public Criteria andAwtProductIsNull() {
            addCriterion("awt_product is null");
            return (Criteria) this;
        }

        public Criteria andAwtProductIsNotNull() {
            addCriterion("awt_product is not null");
            return (Criteria) this;
        }

        public Criteria andAwtProductEqualTo(String value) {
            addCriterion("awt_product =", value, "awtProduct");
            return (Criteria) this;
        }

        public Criteria andAwtProductNotEqualTo(String value) {
            addCriterion("awt_product <>", value, "awtProduct");
            return (Criteria) this;
        }

        public Criteria andAwtProductGreaterThan(String value) {
            addCriterion("awt_product >", value, "awtProduct");
            return (Criteria) this;
        }

        public Criteria andAwtProductGreaterThanOrEqualTo(String value) {
            addCriterion("awt_product >=", value, "awtProduct");
            return (Criteria) this;
        }

        public Criteria andAwtProductLessThan(String value) {
            addCriterion("awt_product <", value, "awtProduct");
            return (Criteria) this;
        }

        public Criteria andAwtProductLessThanOrEqualTo(String value) {
            addCriterion("awt_product <=", value, "awtProduct");
            return (Criteria) this;
        }

        public Criteria andAwtProductLike(String value) {
            addCriterion("awt_product like", value, "awtProduct");
            return (Criteria) this;
        }

        public Criteria andAwtProductNotLike(String value) {
            addCriterion("awt_product not like", value, "awtProduct");
            return (Criteria) this;
        }

        public Criteria andAwtProductIn(List<String> values) {
            addCriterion("awt_product in", values, "awtProduct");
            return (Criteria) this;
        }

        public Criteria andAwtProductNotIn(List<String> values) {
            addCriterion("awt_product not in", values, "awtProduct");
            return (Criteria) this;
        }

        public Criteria andAwtProductBetween(String value1, String value2) {
            addCriterion("awt_product between", value1, value2, "awtProduct");
            return (Criteria) this;
        }

        public Criteria andAwtProductNotBetween(String value1, String value2) {
            addCriterion("awt_product not between", value1, value2, "awtProduct");
            return (Criteria) this;
        }

        public Criteria andAwtProvinceIsNull() {
            addCriterion("awt_province is null");
            return (Criteria) this;
        }

        public Criteria andAwtProvinceIsNotNull() {
            addCriterion("awt_province is not null");
            return (Criteria) this;
        }

        public Criteria andAwtProvinceEqualTo(String value) {
            addCriterion("awt_province =", value, "awtProvince");
            return (Criteria) this;
        }

        public Criteria andAwtProvinceNotEqualTo(String value) {
            addCriterion("awt_province <>", value, "awtProvince");
            return (Criteria) this;
        }

        public Criteria andAwtProvinceGreaterThan(String value) {
            addCriterion("awt_province >", value, "awtProvince");
            return (Criteria) this;
        }

        public Criteria andAwtProvinceGreaterThanOrEqualTo(String value) {
            addCriterion("awt_province >=", value, "awtProvince");
            return (Criteria) this;
        }

        public Criteria andAwtProvinceLessThan(String value) {
            addCriterion("awt_province <", value, "awtProvince");
            return (Criteria) this;
        }

        public Criteria andAwtProvinceLessThanOrEqualTo(String value) {
            addCriterion("awt_province <=", value, "awtProvince");
            return (Criteria) this;
        }

        public Criteria andAwtProvinceLike(String value) {
            addCriterion("awt_province like", value, "awtProvince");
            return (Criteria) this;
        }

        public Criteria andAwtProvinceNotLike(String value) {
            addCriterion("awt_province not like", value, "awtProvince");
            return (Criteria) this;
        }

        public Criteria andAwtProvinceIn(List<String> values) {
            addCriterion("awt_province in", values, "awtProvince");
            return (Criteria) this;
        }

        public Criteria andAwtProvinceNotIn(List<String> values) {
            addCriterion("awt_province not in", values, "awtProvince");
            return (Criteria) this;
        }

        public Criteria andAwtProvinceBetween(String value1, String value2) {
            addCriterion("awt_province between", value1, value2, "awtProvince");
            return (Criteria) this;
        }

        public Criteria andAwtProvinceNotBetween(String value1, String value2) {
            addCriterion("awt_province not between", value1, value2, "awtProvince");
            return (Criteria) this;
        }

        public Criteria andAwtIndustryIsNull() {
            addCriterion("awt_industry is null");
            return (Criteria) this;
        }

        public Criteria andAwtIndustryIsNotNull() {
            addCriterion("awt_industry is not null");
            return (Criteria) this;
        }

        public Criteria andAwtIndustryEqualTo(String value) {
            addCriterion("awt_industry =", value, "awtIndustry");
            return (Criteria) this;
        }

        public Criteria andAwtIndustryNotEqualTo(String value) {
            addCriterion("awt_industry <>", value, "awtIndustry");
            return (Criteria) this;
        }

        public Criteria andAwtIndustryGreaterThan(String value) {
            addCriterion("awt_industry >", value, "awtIndustry");
            return (Criteria) this;
        }

        public Criteria andAwtIndustryGreaterThanOrEqualTo(String value) {
            addCriterion("awt_industry >=", value, "awtIndustry");
            return (Criteria) this;
        }

        public Criteria andAwtIndustryLessThan(String value) {
            addCriterion("awt_industry <", value, "awtIndustry");
            return (Criteria) this;
        }

        public Criteria andAwtIndustryLessThanOrEqualTo(String value) {
            addCriterion("awt_industry <=", value, "awtIndustry");
            return (Criteria) this;
        }

        public Criteria andAwtIndustryLike(String value) {
            addCriterion("awt_industry like", value, "awtIndustry");
            return (Criteria) this;
        }

        public Criteria andAwtIndustryNotLike(String value) {
            addCriterion("awt_industry not like", value, "awtIndustry");
            return (Criteria) this;
        }

        public Criteria andAwtIndustryIn(List<String> values) {
            addCriterion("awt_industry in", values, "awtIndustry");
            return (Criteria) this;
        }

        public Criteria andAwtIndustryNotIn(List<String> values) {
            addCriterion("awt_industry not in", values, "awtIndustry");
            return (Criteria) this;
        }

        public Criteria andAwtIndustryBetween(String value1, String value2) {
            addCriterion("awt_industry between", value1, value2, "awtIndustry");
            return (Criteria) this;
        }

        public Criteria andAwtIndustryNotBetween(String value1, String value2) {
            addCriterion("awt_industry not between", value1, value2, "awtIndustry");
            return (Criteria) this;
        }

        public Criteria andAwtTrainnumberIsNull() {
            addCriterion("awt_trainnumber is null");
            return (Criteria) this;
        }

        public Criteria andAwtTrainnumberIsNotNull() {
            addCriterion("awt_trainnumber is not null");
            return (Criteria) this;
        }

        public Criteria andAwtTrainnumberEqualTo(Long value) {
            addCriterion("awt_trainnumber =", value, "awtTrainnumber");
            return (Criteria) this;
        }

        public Criteria andAwtTrainnumberNotEqualTo(Long value) {
            addCriterion("awt_trainnumber <>", value, "awtTrainnumber");
            return (Criteria) this;
        }

        public Criteria andAwtTrainnumberGreaterThan(Long value) {
            addCriterion("awt_trainnumber >", value, "awtTrainnumber");
            return (Criteria) this;
        }

        public Criteria andAwtTrainnumberGreaterThanOrEqualTo(Long value) {
            addCriterion("awt_trainnumber >=", value, "awtTrainnumber");
            return (Criteria) this;
        }

        public Criteria andAwtTrainnumberLessThan(Long value) {
            addCriterion("awt_trainnumber <", value, "awtTrainnumber");
            return (Criteria) this;
        }

        public Criteria andAwtTrainnumberLessThanOrEqualTo(Long value) {
            addCriterion("awt_trainnumber <=", value, "awtTrainnumber");
            return (Criteria) this;
        }

        public Criteria andAwtTrainnumberIn(List<Long> values) {
            addCriterion("awt_trainnumber in", values, "awtTrainnumber");
            return (Criteria) this;
        }

        public Criteria andAwtTrainnumberNotIn(List<Long> values) {
            addCriterion("awt_trainnumber not in", values, "awtTrainnumber");
            return (Criteria) this;
        }

        public Criteria andAwtTrainnumberBetween(Long value1, Long value2) {
            addCriterion("awt_trainnumber between", value1, value2, "awtTrainnumber");
            return (Criteria) this;
        }

        public Criteria andAwtTrainnumberNotBetween(Long value1, Long value2) {
            addCriterion("awt_trainnumber not between", value1, value2, "awtTrainnumber");
            return (Criteria) this;
        }

        public Criteria andAwtWeightIsNull() {
            addCriterion("awt_weight is null");
            return (Criteria) this;
        }

        public Criteria andAwtWeightIsNotNull() {
            addCriterion("awt_weight is not null");
            return (Criteria) this;
        }

        public Criteria andAwtWeightEqualTo(Integer value) {
            addCriterion("awt_weight =", value, "awtWeight");
            return (Criteria) this;
        }

        public Criteria andAwtWeightNotEqualTo(Integer value) {
            addCriterion("awt_weight <>", value, "awtWeight");
            return (Criteria) this;
        }

        public Criteria andAwtWeightGreaterThan(Integer value) {
            addCriterion("awt_weight >", value, "awtWeight");
            return (Criteria) this;
        }

        public Criteria andAwtWeightGreaterThanOrEqualTo(Integer value) {
            addCriterion("awt_weight >=", value, "awtWeight");
            return (Criteria) this;
        }

        public Criteria andAwtWeightLessThan(Integer value) {
            addCriterion("awt_weight <", value, "awtWeight");
            return (Criteria) this;
        }

        public Criteria andAwtWeightLessThanOrEqualTo(Integer value) {
            addCriterion("awt_weight <=", value, "awtWeight");
            return (Criteria) this;
        }

        public Criteria andAwtWeightIn(List<Integer> values) {
            addCriterion("awt_weight in", values, "awtWeight");
            return (Criteria) this;
        }

        public Criteria andAwtWeightNotIn(List<Integer> values) {
            addCriterion("awt_weight not in", values, "awtWeight");
            return (Criteria) this;
        }

        public Criteria andAwtWeightBetween(Integer value1, Integer value2) {
            addCriterion("awt_weight between", value1, value2, "awtWeight");
            return (Criteria) this;
        }

        public Criteria andAwtWeightNotBetween(Integer value1, Integer value2) {
            addCriterion("awt_weight not between", value1, value2, "awtWeight");
            return (Criteria) this;
        }

        public Criteria andAwtMidIsNull() {
            addCriterion("awt_mid is null");
            return (Criteria) this;
        }

        public Criteria andAwtMidIsNotNull() {
            addCriterion("awt_mid is not null");
            return (Criteria) this;
        }

        public Criteria andAwtMidEqualTo(String value) {
            addCriterion("awt_mid =", value, "awtMid");
            return (Criteria) this;
        }

        public Criteria andAwtMidNotEqualTo(String value) {
            addCriterion("awt_mid <>", value, "awtMid");
            return (Criteria) this;
        }

        public Criteria andAwtMidGreaterThan(String value) {
            addCriterion("awt_mid >", value, "awtMid");
            return (Criteria) this;
        }

        public Criteria andAwtMidGreaterThanOrEqualTo(String value) {
            addCriterion("awt_mid >=", value, "awtMid");
            return (Criteria) this;
        }

        public Criteria andAwtMidLessThan(String value) {
            addCriterion("awt_mid <", value, "awtMid");
            return (Criteria) this;
        }

        public Criteria andAwtMidLessThanOrEqualTo(String value) {
            addCriterion("awt_mid <=", value, "awtMid");
            return (Criteria) this;
        }

        public Criteria andAwtMidLike(String value) {
            addCriterion("awt_mid like", value, "awtMid");
            return (Criteria) this;
        }

        public Criteria andAwtMidNotLike(String value) {
            addCriterion("awt_mid not like", value, "awtMid");
            return (Criteria) this;
        }

        public Criteria andAwtMidIn(List<String> values) {
            addCriterion("awt_mid in", values, "awtMid");
            return (Criteria) this;
        }

        public Criteria andAwtMidNotIn(List<String> values) {
            addCriterion("awt_mid not in", values, "awtMid");
            return (Criteria) this;
        }

        public Criteria andAwtMidBetween(String value1, String value2) {
            addCriterion("awt_mid between", value1, value2, "awtMid");
            return (Criteria) this;
        }

        public Criteria andAwtMidNotBetween(String value1, String value2) {
            addCriterion("awt_mid not between", value1, value2, "awtMid");
            return (Criteria) this;
        }

        public Criteria andAwtArriveIsNull() {
            addCriterion("awt_arrive is null");
            return (Criteria) this;
        }

        public Criteria andAwtArriveIsNotNull() {
            addCriterion("awt_arrive is not null");
            return (Criteria) this;
        }

        public Criteria andAwtArriveEqualTo(String value) {
            addCriterion("awt_arrive =", value, "awtArrive");
            return (Criteria) this;
        }

        public Criteria andAwtArriveNotEqualTo(String value) {
            addCriterion("awt_arrive <>", value, "awtArrive");
            return (Criteria) this;
        }

        public Criteria andAwtArriveGreaterThan(String value) {
            addCriterion("awt_arrive >", value, "awtArrive");
            return (Criteria) this;
        }

        public Criteria andAwtArriveGreaterThanOrEqualTo(String value) {
            addCriterion("awt_arrive >=", value, "awtArrive");
            return (Criteria) this;
        }

        public Criteria andAwtArriveLessThan(String value) {
            addCriterion("awt_arrive <", value, "awtArrive");
            return (Criteria) this;
        }

        public Criteria andAwtArriveLessThanOrEqualTo(String value) {
            addCriterion("awt_arrive <=", value, "awtArrive");
            return (Criteria) this;
        }

        public Criteria andAwtArriveLike(String value) {
            addCriterion("awt_arrive like", value, "awtArrive");
            return (Criteria) this;
        }

        public Criteria andAwtArriveNotLike(String value) {
            addCriterion("awt_arrive not like", value, "awtArrive");
            return (Criteria) this;
        }

        public Criteria andAwtArriveIn(List<String> values) {
            addCriterion("awt_arrive in", values, "awtArrive");
            return (Criteria) this;
        }

        public Criteria andAwtArriveNotIn(List<String> values) {
            addCriterion("awt_arrive not in", values, "awtArrive");
            return (Criteria) this;
        }

        public Criteria andAwtArriveBetween(String value1, String value2) {
            addCriterion("awt_arrive between", value1, value2, "awtArrive");
            return (Criteria) this;
        }

        public Criteria andAwtArriveNotBetween(String value1, String value2) {
            addCriterion("awt_arrive not between", value1, value2, "awtArrive");
            return (Criteria) this;
        }

        public Criteria andAwtStarttimeIsNull() {
            addCriterion("awt_starttime is null");
            return (Criteria) this;
        }

        public Criteria andAwtStarttimeIsNotNull() {
            addCriterion("awt_starttime is not null");
            return (Criteria) this;
        }

        public Criteria andAwtStarttimeEqualTo(Date value) {
            addCriterionForJDBCDate("awt_starttime =", value, "awtStarttime");
            return (Criteria) this;
        }

        public Criteria andAwtStarttimeNotEqualTo(Date value) {
            addCriterionForJDBCDate("awt_starttime <>", value, "awtStarttime");
            return (Criteria) this;
        }

        public Criteria andAwtStarttimeGreaterThan(Date value) {
            addCriterionForJDBCDate("awt_starttime >", value, "awtStarttime");
            return (Criteria) this;
        }

        public Criteria andAwtStarttimeGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("awt_starttime >=", value, "awtStarttime");
            return (Criteria) this;
        }

        public Criteria andAwtStarttimeLessThan(Date value) {
            addCriterionForJDBCDate("awt_starttime <", value, "awtStarttime");
            return (Criteria) this;
        }

        public Criteria andAwtStarttimeLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("awt_starttime <=", value, "awtStarttime");
            return (Criteria) this;
        }

        public Criteria andAwtStarttimeIn(List<Date> values) {
            addCriterionForJDBCDate("awt_starttime in", values, "awtStarttime");
            return (Criteria) this;
        }

        public Criteria andAwtStarttimeNotIn(List<Date> values) {
            addCriterionForJDBCDate("awt_starttime not in", values, "awtStarttime");
            return (Criteria) this;
        }

        public Criteria andAwtStarttimeBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("awt_starttime between", value1, value2, "awtStarttime");
            return (Criteria) this;
        }

        public Criteria andAwtStarttimeNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("awt_starttime not between", value1, value2, "awtStarttime");
            return (Criteria) this;
        }

        public Criteria andAwtEndtimeIsNull() {
            addCriterion("awt_endtime is null");
            return (Criteria) this;
        }

        public Criteria andAwtEndtimeIsNotNull() {
            addCriterion("awt_endtime is not null");
            return (Criteria) this;
        }

        public Criteria andAwtEndtimeEqualTo(Date value) {
            addCriterionForJDBCDate("awt_endtime =", value, "awtEndtime");
            return (Criteria) this;
        }

        public Criteria andAwtEndtimeNotEqualTo(Date value) {
            addCriterionForJDBCDate("awt_endtime <>", value, "awtEndtime");
            return (Criteria) this;
        }

        public Criteria andAwtEndtimeGreaterThan(Date value) {
            addCriterionForJDBCDate("awt_endtime >", value, "awtEndtime");
            return (Criteria) this;
        }

        public Criteria andAwtEndtimeGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("awt_endtime >=", value, "awtEndtime");
            return (Criteria) this;
        }

        public Criteria andAwtEndtimeLessThan(Date value) {
            addCriterionForJDBCDate("awt_endtime <", value, "awtEndtime");
            return (Criteria) this;
        }

        public Criteria andAwtEndtimeLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("awt_endtime <=", value, "awtEndtime");
            return (Criteria) this;
        }

        public Criteria andAwtEndtimeIn(List<Date> values) {
            addCriterionForJDBCDate("awt_endtime in", values, "awtEndtime");
            return (Criteria) this;
        }

        public Criteria andAwtEndtimeNotIn(List<Date> values) {
            addCriterionForJDBCDate("awt_endtime not in", values, "awtEndtime");
            return (Criteria) this;
        }

        public Criteria andAwtEndtimeBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("awt_endtime between", value1, value2, "awtEndtime");
            return (Criteria) this;
        }

        public Criteria andAwtEndtimeNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("awt_endtime not between", value1, value2, "awtEndtime");
            return (Criteria) this;
        }

        public Criteria andAwtBatchIsNull() {
            addCriterion("awt_batch is null");
            return (Criteria) this;
        }

        public Criteria andAwtBatchIsNotNull() {
            addCriterion("awt_batch is not null");
            return (Criteria) this;
        }

        public Criteria andAwtBatchEqualTo(String value) {
            addCriterion("awt_batch =", value, "awtBatch");
            return (Criteria) this;
        }

        public Criteria andAwtBatchNotEqualTo(String value) {
            addCriterion("awt_batch <>", value, "awtBatch");
            return (Criteria) this;
        }

        public Criteria andAwtBatchGreaterThan(String value) {
            addCriterion("awt_batch >", value, "awtBatch");
            return (Criteria) this;
        }

        public Criteria andAwtBatchGreaterThanOrEqualTo(String value) {
            addCriterion("awt_batch >=", value, "awtBatch");
            return (Criteria) this;
        }

        public Criteria andAwtBatchLessThan(String value) {
            addCriterion("awt_batch <", value, "awtBatch");
            return (Criteria) this;
        }

        public Criteria andAwtBatchLessThanOrEqualTo(String value) {
            addCriterion("awt_batch <=", value, "awtBatch");
            return (Criteria) this;
        }

        public Criteria andAwtBatchLike(String value) {
            addCriterion("awt_batch like", value, "awtBatch");
            return (Criteria) this;
        }

        public Criteria andAwtBatchNotLike(String value) {
            addCriterion("awt_batch not like", value, "awtBatch");
            return (Criteria) this;
        }

        public Criteria andAwtBatchIn(List<String> values) {
            addCriterion("awt_batch in", values, "awtBatch");
            return (Criteria) this;
        }

        public Criteria andAwtBatchNotIn(List<String> values) {
            addCriterion("awt_batch not in", values, "awtBatch");
            return (Criteria) this;
        }

        public Criteria andAwtBatchBetween(String value1, String value2) {
            addCriterion("awt_batch between", value1, value2, "awtBatch");
            return (Criteria) this;
        }

        public Criteria andAwtBatchNotBetween(String value1, String value2) {
            addCriterion("awt_batch not between", value1, value2, "awtBatch");
            return (Criteria) this;
        }

        public Criteria andAwcRnumberIsNull() {
            addCriterion("awc_rnumber is null");
            return (Criteria) this;
        }

        public Criteria andAwcRnumberIsNotNull() {
            addCriterion("awc_rnumber is not null");
            return (Criteria) this;
        }

        public Criteria andAwcRnumberEqualTo(Integer value) {
            addCriterion("awc_rnumber =", value, "awcRnumber");
            return (Criteria) this;
        }

        public Criteria andAwcRnumberNotEqualTo(Integer value) {
            addCriterion("awc_rnumber <>", value, "awcRnumber");
            return (Criteria) this;
        }

        public Criteria andAwcRnumberGreaterThan(Integer value) {
            addCriterion("awc_rnumber >", value, "awcRnumber");
            return (Criteria) this;
        }

        public Criteria andAwcRnumberGreaterThanOrEqualTo(Integer value) {
            addCriterion("awc_rnumber >=", value, "awcRnumber");
            return (Criteria) this;
        }

        public Criteria andAwcRnumberLessThan(Integer value) {
            addCriterion("awc_rnumber <", value, "awcRnumber");
            return (Criteria) this;
        }

        public Criteria andAwcRnumberLessThanOrEqualTo(Integer value) {
            addCriterion("awc_rnumber <=", value, "awcRnumber");
            return (Criteria) this;
        }

        public Criteria andAwcRnumberIn(List<Integer> values) {
            addCriterion("awc_rnumber in", values, "awcRnumber");
            return (Criteria) this;
        }

        public Criteria andAwcRnumberNotIn(List<Integer> values) {
            addCriterion("awc_rnumber not in", values, "awcRnumber");
            return (Criteria) this;
        }

        public Criteria andAwcRnumberBetween(Integer value1, Integer value2) {
            addCriterion("awc_rnumber between", value1, value2, "awcRnumber");
            return (Criteria) this;
        }

        public Criteria andAwcRnumberNotBetween(Integer value1, Integer value2) {
            addCriterion("awc_rnumber not between", value1, value2, "awcRnumber");
            return (Criteria) this;
        }

        public Criteria andAwcRweightIsNull() {
            addCriterion("awc_rweight is null");
            return (Criteria) this;
        }

        public Criteria andAwcRweightIsNotNull() {
            addCriterion("awc_rweight is not null");
            return (Criteria) this;
        }

        public Criteria andAwcRweightEqualTo(Long value) {
            addCriterion("awc_rweight =", value, "awcRweight");
            return (Criteria) this;
        }

        public Criteria andAwcRweightNotEqualTo(Long value) {
            addCriterion("awc_rweight <>", value, "awcRweight");
            return (Criteria) this;
        }

        public Criteria andAwcRweightGreaterThan(Long value) {
            addCriterion("awc_rweight >", value, "awcRweight");
            return (Criteria) this;
        }

        public Criteria andAwcRweightGreaterThanOrEqualTo(Long value) {
            addCriterion("awc_rweight >=", value, "awcRweight");
            return (Criteria) this;
        }

        public Criteria andAwcRweightLessThan(Long value) {
            addCriterion("awc_rweight <", value, "awcRweight");
            return (Criteria) this;
        }

        public Criteria andAwcRweightLessThanOrEqualTo(Long value) {
            addCriterion("awc_rweight <=", value, "awcRweight");
            return (Criteria) this;
        }

        public Criteria andAwcRweightIn(List<Long> values) {
            addCriterion("awc_rweight in", values, "awcRweight");
            return (Criteria) this;
        }

        public Criteria andAwcRweightNotIn(List<Long> values) {
            addCriterion("awc_rweight not in", values, "awcRweight");
            return (Criteria) this;
        }

        public Criteria andAwcRweightBetween(Long value1, Long value2) {
            addCriterion("awc_rweight between", value1, value2, "awcRweight");
            return (Criteria) this;
        }

        public Criteria andAwcRweightNotBetween(Long value1, Long value2) {
            addCriterion("awc_rweight not between", value1, value2, "awcRweight");
            return (Criteria) this;
        }

        public Criteria andMRealtrainIsNull() {
            addCriterion("m_realtrain is null");
            return (Criteria) this;
        }

        public Criteria andMRealtrainIsNotNull() {
            addCriterion("m_realtrain is not null");
            return (Criteria) this;
        }

        public Criteria andMRealtrainEqualTo(Integer value) {
            addCriterion("m_realtrain =", value, "mRealtrain");
            return (Criteria) this;
        }

        public Criteria andMRealtrainNotEqualTo(Integer value) {
            addCriterion("m_realtrain <>", value, "mRealtrain");
            return (Criteria) this;
        }

        public Criteria andMRealtrainGreaterThan(Integer value) {
            addCriterion("m_realtrain >", value, "mRealtrain");
            return (Criteria) this;
        }

        public Criteria andMRealtrainGreaterThanOrEqualTo(Integer value) {
            addCriterion("m_realtrain >=", value, "mRealtrain");
            return (Criteria) this;
        }

        public Criteria andMRealtrainLessThan(Integer value) {
            addCriterion("m_realtrain <", value, "mRealtrain");
            return (Criteria) this;
        }

        public Criteria andMRealtrainLessThanOrEqualTo(Integer value) {
            addCriterion("m_realtrain <=", value, "mRealtrain");
            return (Criteria) this;
        }

        public Criteria andMRealtrainIn(List<Integer> values) {
            addCriterion("m_realtrain in", values, "mRealtrain");
            return (Criteria) this;
        }

        public Criteria andMRealtrainNotIn(List<Integer> values) {
            addCriterion("m_realtrain not in", values, "mRealtrain");
            return (Criteria) this;
        }

        public Criteria andMRealtrainBetween(Integer value1, Integer value2) {
            addCriterion("m_realtrain between", value1, value2, "mRealtrain");
            return (Criteria) this;
        }

        public Criteria andMRealtrainNotBetween(Integer value1, Integer value2) {
            addCriterion("m_realtrain not between", value1, value2, "mRealtrain");
            return (Criteria) this;
        }

        public Criteria andAwcRealweightIsNull() {
            addCriterion("awc_realweight is null");
            return (Criteria) this;
        }

        public Criteria andAwcRealweightIsNotNull() {
            addCriterion("awc_realweight is not null");
            return (Criteria) this;
        }

        public Criteria andAwcRealweightEqualTo(Long value) {
            addCriterion("awc_realweight =", value, "awcRealweight");
            return (Criteria) this;
        }

        public Criteria andAwcRealweightNotEqualTo(Long value) {
            addCriterion("awc_realweight <>", value, "awcRealweight");
            return (Criteria) this;
        }

        public Criteria andAwcRealweightGreaterThan(Long value) {
            addCriterion("awc_realweight >", value, "awcRealweight");
            return (Criteria) this;
        }

        public Criteria andAwcRealweightGreaterThanOrEqualTo(Long value) {
            addCriterion("awc_realweight >=", value, "awcRealweight");
            return (Criteria) this;
        }

        public Criteria andAwcRealweightLessThan(Long value) {
            addCriterion("awc_realweight <", value, "awcRealweight");
            return (Criteria) this;
        }

        public Criteria andAwcRealweightLessThanOrEqualTo(Long value) {
            addCriterion("awc_realweight <=", value, "awcRealweight");
            return (Criteria) this;
        }

        public Criteria andAwcRealweightIn(List<Long> values) {
            addCriterion("awc_realweight in", values, "awcRealweight");
            return (Criteria) this;
        }

        public Criteria andAwcRealweightNotIn(List<Long> values) {
            addCriterion("awc_realweight not in", values, "awcRealweight");
            return (Criteria) this;
        }

        public Criteria andAwcRealweightBetween(Long value1, Long value2) {
            addCriterion("awc_realweight between", value1, value2, "awcRealweight");
            return (Criteria) this;
        }

        public Criteria andAwcRealweightNotBetween(Long value1, Long value2) {
            addCriterion("awc_realweight not between", value1, value2, "awcRealweight");
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