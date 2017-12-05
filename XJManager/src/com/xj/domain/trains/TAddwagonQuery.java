package com.xj.domain.trains;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class TAddwagonQuery {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Integer pageNo = 1;

    protected Integer startRow;

    protected Integer pageSize = 10;

    protected String fields;

    public TAddwagonQuery() {
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

        public Criteria andAwNumberIsNull() {
            addCriterion("aw_number is null");
            return (Criteria) this;
        }

        public Criteria andAwNumberIsNotNull() {
            addCriterion("aw_number is not null");
            return (Criteria) this;
        }

        public Criteria andAwNumberEqualTo(String value) {
            addCriterion("aw_number =", value, "awNumber");
            return (Criteria) this;
        }

        public Criteria andAwNumberNotEqualTo(String value) {
            addCriterion("aw_number <>", value, "awNumber");
            return (Criteria) this;
        }

        public Criteria andAwNumberGreaterThan(String value) {
            addCriterion("aw_number >", value, "awNumber");
            return (Criteria) this;
        }

        public Criteria andAwNumberGreaterThanOrEqualTo(String value) {
            addCriterion("aw_number >=", value, "awNumber");
            return (Criteria) this;
        }

        public Criteria andAwNumberLessThan(String value) {
            addCriterion("aw_number <", value, "awNumber");
            return (Criteria) this;
        }

        public Criteria andAwNumberLessThanOrEqualTo(String value) {
            addCriterion("aw_number <=", value, "awNumber");
            return (Criteria) this;
        }

        public Criteria andAwNumberLike(String value) {
            addCriterion("aw_number like", value, "awNumber");
            return (Criteria) this;
        }

        public Criteria andAwNumberNotLike(String value) {
            addCriterion("aw_number not like", value, "awNumber");
            return (Criteria) this;
        }

        public Criteria andAwNumberIn(List<String> values) {
            addCriterion("aw_number in", values, "awNumber");
            return (Criteria) this;
        }

        public Criteria andAwNumberNotIn(List<String> values) {
            addCriterion("aw_number not in", values, "awNumber");
            return (Criteria) this;
        }

        public Criteria andAwNumberBetween(String value1, String value2) {
            addCriterion("aw_number between", value1, value2, "awNumber");
            return (Criteria) this;
        }

        public Criteria andAwNumberNotBetween(String value1, String value2) {
            addCriterion("aw_number not between", value1, value2, "awNumber");
            return (Criteria) this;
        }

        public Criteria andAwTypeIsNull() {
            addCriterion("aw_type is null");
            return (Criteria) this;
        }

        public Criteria andAwTypeIsNotNull() {
            addCriterion("aw_type is not null");
            return (Criteria) this;
        }

        public Criteria andAwTypeEqualTo(Byte value) {
            addCriterion("aw_type =", value, "awType");
            return (Criteria) this;
        }

        public Criteria andAwTypeNotEqualTo(Byte value) {
            addCriterion("aw_type <>", value, "awType");
            return (Criteria) this;
        }

        public Criteria andAwTypeGreaterThan(Byte value) {
            addCriterion("aw_type >", value, "awType");
            return (Criteria) this;
        }

        public Criteria andAwTypeGreaterThanOrEqualTo(Byte value) {
            addCriterion("aw_type >=", value, "awType");
            return (Criteria) this;
        }

        public Criteria andAwTypeLessThan(Byte value) {
            addCriterion("aw_type <", value, "awType");
            return (Criteria) this;
        }

        public Criteria andAwTypeLessThanOrEqualTo(Byte value) {
            addCriterion("aw_type <=", value, "awType");
            return (Criteria) this;
        }

        public Criteria andAwTypeIn(List<Byte> values) {
            addCriterion("aw_type in", values, "awType");
            return (Criteria) this;
        }

        public Criteria andAwTypeNotIn(List<Byte> values) {
            addCriterion("aw_type not in", values, "awType");
            return (Criteria) this;
        }

        public Criteria andAwTypeBetween(Byte value1, Byte value2) {
            addCriterion("aw_type between", value1, value2, "awType");
            return (Criteria) this;
        }

        public Criteria andAwTypeNotBetween(Byte value1, Byte value2) {
            addCriterion("aw_type not between", value1, value2, "awType");
            return (Criteria) this;
        }

        public Criteria andAwTotalIsNull() {
            addCriterion("aw_total is null");
            return (Criteria) this;
        }

        public Criteria andAwTotalIsNotNull() {
            addCriterion("aw_total is not null");
            return (Criteria) this;
        }

        public Criteria andAwTotalEqualTo(BigDecimal value) {
            addCriterion("aw_total =", value, "awTotal");
            return (Criteria) this;
        }

        public Criteria andAwTotalNotEqualTo(BigDecimal value) {
            addCriterion("aw_total <>", value, "awTotal");
            return (Criteria) this;
        }

        public Criteria andAwTotalGreaterThan(BigDecimal value) {
            addCriterion("aw_total >", value, "awTotal");
            return (Criteria) this;
        }

        public Criteria andAwTotalGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("aw_total >=", value, "awTotal");
            return (Criteria) this;
        }

        public Criteria andAwTotalLessThan(BigDecimal value) {
            addCriterion("aw_total <", value, "awTotal");
            return (Criteria) this;
        }

        public Criteria andAwTotalLessThanOrEqualTo(BigDecimal value) {
            addCriterion("aw_total <=", value, "awTotal");
            return (Criteria) this;
        }

        public Criteria andAwTotalIn(List<BigDecimal> values) {
            addCriterion("aw_total in", values, "awTotal");
            return (Criteria) this;
        }

        public Criteria andAwTotalNotIn(List<BigDecimal> values) {
            addCriterion("aw_total not in", values, "awTotal");
            return (Criteria) this;
        }

        public Criteria andAwTotalBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("aw_total between", value1, value2, "awTotal");
            return (Criteria) this;
        }

        public Criteria andAwTotalNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("aw_total not between", value1, value2, "awTotal");
            return (Criteria) this;
        }

        public Criteria andAwOwnIsNull() {
            addCriterion("aw_own is null");
            return (Criteria) this;
        }

        public Criteria andAwOwnIsNotNull() {
            addCriterion("aw_own is not null");
            return (Criteria) this;
        }

        public Criteria andAwOwnEqualTo(BigDecimal value) {
            addCriterion("aw_own =", value, "awOwn");
            return (Criteria) this;
        }

        public Criteria andAwOwnNotEqualTo(BigDecimal value) {
            addCriterion("aw_own <>", value, "awOwn");
            return (Criteria) this;
        }

        public Criteria andAwOwnGreaterThan(BigDecimal value) {
            addCriterion("aw_own >", value, "awOwn");
            return (Criteria) this;
        }

        public Criteria andAwOwnGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("aw_own >=", value, "awOwn");
            return (Criteria) this;
        }

        public Criteria andAwOwnLessThan(BigDecimal value) {
            addCriterion("aw_own <", value, "awOwn");
            return (Criteria) this;
        }

        public Criteria andAwOwnLessThanOrEqualTo(BigDecimal value) {
            addCriterion("aw_own <=", value, "awOwn");
            return (Criteria) this;
        }

        public Criteria andAwOwnIn(List<BigDecimal> values) {
            addCriterion("aw_own in", values, "awOwn");
            return (Criteria) this;
        }

        public Criteria andAwOwnNotIn(List<BigDecimal> values) {
            addCriterion("aw_own not in", values, "awOwn");
            return (Criteria) this;
        }

        public Criteria andAwOwnBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("aw_own between", value1, value2, "awOwn");
            return (Criteria) this;
        }

        public Criteria andAwOwnNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("aw_own not between", value1, value2, "awOwn");
            return (Criteria) this;
        }

        public Criteria andAwPathwayIsNull() {
            addCriterion("aw_pathway is null");
            return (Criteria) this;
        }

        public Criteria andAwPathwayIsNotNull() {
            addCriterion("aw_pathway is not null");
            return (Criteria) this;
        }

        public Criteria andAwPathwayEqualTo(Byte value) {
            addCriterion("aw_pathway =", value, "awPathway");
            return (Criteria) this;
        }

        public Criteria andAwPathwayNotEqualTo(Byte value) {
            addCriterion("aw_pathway <>", value, "awPathway");
            return (Criteria) this;
        }

        public Criteria andAwPathwayGreaterThan(Byte value) {
            addCriterion("aw_pathway >", value, "awPathway");
            return (Criteria) this;
        }

        public Criteria andAwPathwayGreaterThanOrEqualTo(Byte value) {
            addCriterion("aw_pathway >=", value, "awPathway");
            return (Criteria) this;
        }

        public Criteria andAwPathwayLessThan(Byte value) {
            addCriterion("aw_pathway <", value, "awPathway");
            return (Criteria) this;
        }

        public Criteria andAwPathwayLessThanOrEqualTo(Byte value) {
            addCriterion("aw_pathway <=", value, "awPathway");
            return (Criteria) this;
        }

        public Criteria andAwPathwayIn(List<Byte> values) {
            addCriterion("aw_pathway in", values, "awPathway");
            return (Criteria) this;
        }

        public Criteria andAwPathwayNotIn(List<Byte> values) {
            addCriterion("aw_pathway not in", values, "awPathway");
            return (Criteria) this;
        }

        public Criteria andAwPathwayBetween(Byte value1, Byte value2) {
            addCriterion("aw_pathway between", value1, value2, "awPathway");
            return (Criteria) this;
        }

        public Criteria andAwPathwayNotBetween(Byte value1, Byte value2) {
            addCriterion("aw_pathway not between", value1, value2, "awPathway");
            return (Criteria) this;
        }

        public Criteria andAwAhidIsNull() {
            addCriterion("aw_ahid is null");
            return (Criteria) this;
        }

        public Criteria andAwAhidIsNotNull() {
            addCriterion("aw_ahid is not null");
            return (Criteria) this;
        }

        public Criteria andAwAhidEqualTo(String value) {
            addCriterion("aw_ahid =", value, "awAhid");
            return (Criteria) this;
        }

        public Criteria andAwAhidNotEqualTo(String value) {
            addCriterion("aw_ahid <>", value, "awAhid");
            return (Criteria) this;
        }

        public Criteria andAwAhidGreaterThan(String value) {
            addCriterion("aw_ahid >", value, "awAhid");
            return (Criteria) this;
        }

        public Criteria andAwAhidGreaterThanOrEqualTo(String value) {
            addCriterion("aw_ahid >=", value, "awAhid");
            return (Criteria) this;
        }

        public Criteria andAwAhidLessThan(String value) {
            addCriterion("aw_ahid <", value, "awAhid");
            return (Criteria) this;
        }

        public Criteria andAwAhidLessThanOrEqualTo(String value) {
            addCriterion("aw_ahid <=", value, "awAhid");
            return (Criteria) this;
        }

        public Criteria andAwAhidLike(String value) {
            addCriterion("aw_ahid like", value, "awAhid");
            return (Criteria) this;
        }

        public Criteria andAwAhidNotLike(String value) {
            addCriterion("aw_ahid not like", value, "awAhid");
            return (Criteria) this;
        }

        public Criteria andAwAhidIn(List<String> values) {
            addCriterion("aw_ahid in", values, "awAhid");
            return (Criteria) this;
        }

        public Criteria andAwAhidNotIn(List<String> values) {
            addCriterion("aw_ahid not in", values, "awAhid");
            return (Criteria) this;
        }

        public Criteria andAwAhidBetween(String value1, String value2) {
            addCriterion("aw_ahid between", value1, value2, "awAhid");
            return (Criteria) this;
        }

        public Criteria andAwAhidNotBetween(String value1, String value2) {
            addCriterion("aw_ahid not between", value1, value2, "awAhid");
            return (Criteria) this;
        }

        public Criteria andAwDidIsNull() {
            addCriterion("aw_did is null");
            return (Criteria) this;
        }

        public Criteria andAwDidIsNotNull() {
            addCriterion("aw_did is not null");
            return (Criteria) this;
        }

        public Criteria andAwDidEqualTo(String value) {
            addCriterion("aw_did =", value, "awDid");
            return (Criteria) this;
        }

        public Criteria andAwDidNotEqualTo(String value) {
            addCriterion("aw_did <>", value, "awDid");
            return (Criteria) this;
        }

        public Criteria andAwDidGreaterThan(String value) {
            addCriterion("aw_did >", value, "awDid");
            return (Criteria) this;
        }

        public Criteria andAwDidGreaterThanOrEqualTo(String value) {
            addCriterion("aw_did >=", value, "awDid");
            return (Criteria) this;
        }

        public Criteria andAwDidLessThan(String value) {
            addCriterion("aw_did <", value, "awDid");
            return (Criteria) this;
        }

        public Criteria andAwDidLessThanOrEqualTo(String value) {
            addCriterion("aw_did <=", value, "awDid");
            return (Criteria) this;
        }

        public Criteria andAwDidLike(String value) {
            addCriterion("aw_did like", value, "awDid");
            return (Criteria) this;
        }

        public Criteria andAwDidNotLike(String value) {
            addCriterion("aw_did not like", value, "awDid");
            return (Criteria) this;
        }

        public Criteria andAwDidIn(List<String> values) {
            addCriterion("aw_did in", values, "awDid");
            return (Criteria) this;
        }

        public Criteria andAwDidNotIn(List<String> values) {
            addCriterion("aw_did not in", values, "awDid");
            return (Criteria) this;
        }

        public Criteria andAwDidBetween(String value1, String value2) {
            addCriterion("aw_did between", value1, value2, "awDid");
            return (Criteria) this;
        }

        public Criteria andAwDidNotBetween(String value1, String value2) {
            addCriterion("aw_did not between", value1, value2, "awDid");
            return (Criteria) this;
        }

        public Criteria andAwEndIsNull() {
            addCriterion("aw_end is null");
            return (Criteria) this;
        }

        public Criteria andAwEndIsNotNull() {
            addCriterion("aw_end is not null");
            return (Criteria) this;
        }

        public Criteria andAwEndEqualTo(String value) {
            addCriterion("aw_end =", value, "awEnd");
            return (Criteria) this;
        }

        public Criteria andAwEndNotEqualTo(String value) {
            addCriterion("aw_end <>", value, "awEnd");
            return (Criteria) this;
        }

        public Criteria andAwEndGreaterThan(String value) {
            addCriterion("aw_end >", value, "awEnd");
            return (Criteria) this;
        }

        public Criteria andAwEndGreaterThanOrEqualTo(String value) {
            addCriterion("aw_end >=", value, "awEnd");
            return (Criteria) this;
        }

        public Criteria andAwEndLessThan(String value) {
            addCriterion("aw_end <", value, "awEnd");
            return (Criteria) this;
        }

        public Criteria andAwEndLessThanOrEqualTo(String value) {
            addCriterion("aw_end <=", value, "awEnd");
            return (Criteria) this;
        }

        public Criteria andAwEndLike(String value) {
            addCriterion("aw_end like", value, "awEnd");
            return (Criteria) this;
        }

        public Criteria andAwEndNotLike(String value) {
            addCriterion("aw_end not like", value, "awEnd");
            return (Criteria) this;
        }

        public Criteria andAwEndIn(List<String> values) {
            addCriterion("aw_end in", values, "awEnd");
            return (Criteria) this;
        }

        public Criteria andAwEndNotIn(List<String> values) {
            addCriterion("aw_end not in", values, "awEnd");
            return (Criteria) this;
        }

        public Criteria andAwEndBetween(String value1, String value2) {
            addCriterion("aw_end between", value1, value2, "awEnd");
            return (Criteria) this;
        }

        public Criteria andAwEndNotBetween(String value1, String value2) {
            addCriterion("aw_end not between", value1, value2, "awEnd");
            return (Criteria) this;
        }

        public Criteria andAwCustomerIsNull() {
            addCriterion("aw_customer is null");
            return (Criteria) this;
        }

        public Criteria andAwCustomerIsNotNull() {
            addCriterion("aw_customer is not null");
            return (Criteria) this;
        }

        public Criteria andAwCustomerEqualTo(String value) {
            addCriterion("aw_customer =", value, "awCustomer");
            return (Criteria) this;
        }

        public Criteria andAwCustomerNotEqualTo(String value) {
            addCriterion("aw_customer <>", value, "awCustomer");
            return (Criteria) this;
        }

        public Criteria andAwCustomerGreaterThan(String value) {
            addCriterion("aw_customer >", value, "awCustomer");
            return (Criteria) this;
        }

        public Criteria andAwCustomerGreaterThanOrEqualTo(String value) {
            addCriterion("aw_customer >=", value, "awCustomer");
            return (Criteria) this;
        }

        public Criteria andAwCustomerLessThan(String value) {
            addCriterion("aw_customer <", value, "awCustomer");
            return (Criteria) this;
        }

        public Criteria andAwCustomerLessThanOrEqualTo(String value) {
            addCriterion("aw_customer <=", value, "awCustomer");
            return (Criteria) this;
        }

        public Criteria andAwCustomerLike(String value) {
            addCriterion("aw_customer like", value, "awCustomer");
            return (Criteria) this;
        }

        public Criteria andAwCustomerNotLike(String value) {
            addCriterion("aw_customer not like", value, "awCustomer");
            return (Criteria) this;
        }

        public Criteria andAwCustomerIn(List<String> values) {
            addCriterion("aw_customer in", values, "awCustomer");
            return (Criteria) this;
        }

        public Criteria andAwCustomerNotIn(List<String> values) {
            addCriterion("aw_customer not in", values, "awCustomer");
            return (Criteria) this;
        }

        public Criteria andAwCustomerBetween(String value1, String value2) {
            addCriterion("aw_customer between", value1, value2, "awCustomer");
            return (Criteria) this;
        }

        public Criteria andAwCustomerNotBetween(String value1, String value2) {
            addCriterion("aw_customer not between", value1, value2, "awCustomer");
            return (Criteria) this;
        }

        public Criteria andAwProductIsNull() {
            addCriterion("aw_product is null");
            return (Criteria) this;
        }

        public Criteria andAwProductIsNotNull() {
            addCriterion("aw_product is not null");
            return (Criteria) this;
        }

        public Criteria andAwProductEqualTo(String value) {
            addCriterion("aw_product =", value, "awProduct");
            return (Criteria) this;
        }

        public Criteria andAwProductNotEqualTo(String value) {
            addCriterion("aw_product <>", value, "awProduct");
            return (Criteria) this;
        }

        public Criteria andAwProductGreaterThan(String value) {
            addCriterion("aw_product >", value, "awProduct");
            return (Criteria) this;
        }

        public Criteria andAwProductGreaterThanOrEqualTo(String value) {
            addCriterion("aw_product >=", value, "awProduct");
            return (Criteria) this;
        }

        public Criteria andAwProductLessThan(String value) {
            addCriterion("aw_product <", value, "awProduct");
            return (Criteria) this;
        }

        public Criteria andAwProductLessThanOrEqualTo(String value) {
            addCriterion("aw_product <=", value, "awProduct");
            return (Criteria) this;
        }

        public Criteria andAwProductLike(String value) {
            addCriterion("aw_product like", value, "awProduct");
            return (Criteria) this;
        }

        public Criteria andAwProductNotLike(String value) {
            addCriterion("aw_product not like", value, "awProduct");
            return (Criteria) this;
        }

        public Criteria andAwProductIn(List<String> values) {
            addCriterion("aw_product in", values, "awProduct");
            return (Criteria) this;
        }

        public Criteria andAwProductNotIn(List<String> values) {
            addCriterion("aw_product not in", values, "awProduct");
            return (Criteria) this;
        }

        public Criteria andAwProductBetween(String value1, String value2) {
            addCriterion("aw_product between", value1, value2, "awProduct");
            return (Criteria) this;
        }

        public Criteria andAwProductNotBetween(String value1, String value2) {
            addCriterion("aw_product not between", value1, value2, "awProduct");
            return (Criteria) this;
        }

        public Criteria andAwQualityIsNull() {
            addCriterion("aw_quality is null");
            return (Criteria) this;
        }

        public Criteria andAwQualityIsNotNull() {
            addCriterion("aw_quality is not null");
            return (Criteria) this;
        }

        public Criteria andAwQualityEqualTo(String value) {
            addCriterion("aw_quality =", value, "awQuality");
            return (Criteria) this;
        }

        public Criteria andAwQualityNotEqualTo(String value) {
            addCriterion("aw_quality <>", value, "awQuality");
            return (Criteria) this;
        }

        public Criteria andAwQualityGreaterThan(String value) {
            addCriterion("aw_quality >", value, "awQuality");
            return (Criteria) this;
        }

        public Criteria andAwQualityGreaterThanOrEqualTo(String value) {
            addCriterion("aw_quality >=", value, "awQuality");
            return (Criteria) this;
        }

        public Criteria andAwQualityLessThan(String value) {
            addCriterion("aw_quality <", value, "awQuality");
            return (Criteria) this;
        }

        public Criteria andAwQualityLessThanOrEqualTo(String value) {
            addCriterion("aw_quality <=", value, "awQuality");
            return (Criteria) this;
        }

        public Criteria andAwQualityLike(String value) {
            addCriterion("aw_quality like", value, "awQuality");
            return (Criteria) this;
        }

        public Criteria andAwQualityNotLike(String value) {
            addCriterion("aw_quality not like", value, "awQuality");
            return (Criteria) this;
        }

        public Criteria andAwQualityIn(List<String> values) {
            addCriterion("aw_quality in", values, "awQuality");
            return (Criteria) this;
        }

        public Criteria andAwQualityNotIn(List<String> values) {
            addCriterion("aw_quality not in", values, "awQuality");
            return (Criteria) this;
        }

        public Criteria andAwQualityBetween(String value1, String value2) {
            addCriterion("aw_quality between", value1, value2, "awQuality");
            return (Criteria) this;
        }

        public Criteria andAwQualityNotBetween(String value1, String value2) {
            addCriterion("aw_quality not between", value1, value2, "awQuality");
            return (Criteria) this;
        }

        public Criteria andAwTimeIsNull() {
            addCriterion("aw_time is null");
            return (Criteria) this;
        }

        public Criteria andAwTimeIsNotNull() {
            addCriterion("aw_time is not null");
            return (Criteria) this;
        }

        public Criteria andAwTimeEqualTo(String value) {
            addCriterion("aw_time =", value, "awTime");
            return (Criteria) this;
        }

        public Criteria andAwTimeNotEqualTo(String value) {
            addCriterion("aw_time <>", value, "awTime");
            return (Criteria) this;
        }

        public Criteria andAwTimeGreaterThan(String value) {
            addCriterion("aw_time >", value, "awTime");
            return (Criteria) this;
        }

        public Criteria andAwTimeGreaterThanOrEqualTo(String value) {
            addCriterion("aw_time >=", value, "awTime");
            return (Criteria) this;
        }

        public Criteria andAwTimeLessThan(String value) {
            addCriterion("aw_time <", value, "awTime");
            return (Criteria) this;
        }

        public Criteria andAwTimeLessThanOrEqualTo(String value) {
            addCriterion("aw_time <=", value, "awTime");
            return (Criteria) this;
        }

        public Criteria andAwTimeLike(String value) {
            addCriterion("aw_time like", value, "awTime");
            return (Criteria) this;
        }

        public Criteria andAwTimeNotLike(String value) {
            addCriterion("aw_time not like", value, "awTime");
            return (Criteria) this;
        }

        public Criteria andAwTimeIn(List<String> values) {
            addCriterion("aw_time in", values, "awTime");
            return (Criteria) this;
        }

        public Criteria andAwTimeNotIn(List<String> values) {
            addCriterion("aw_time not in", values, "awTime");
            return (Criteria) this;
        }

        public Criteria andAwTimeBetween(String value1, String value2) {
            addCriterion("aw_time between", value1, value2, "awTime");
            return (Criteria) this;
        }

        public Criteria andAwTimeNotBetween(String value1, String value2) {
            addCriterion("aw_time not between", value1, value2, "awTime");
            return (Criteria) this;
        }

        public Criteria andAwProbableIsNull() {
            addCriterion("aw_probable is null");
            return (Criteria) this;
        }

        public Criteria andAwProbableIsNotNull() {
            addCriterion("aw_probable is not null");
            return (Criteria) this;
        }

        public Criteria andAwProbableEqualTo(BigDecimal value) {
            addCriterion("aw_probable =", value, "awProbable");
            return (Criteria) this;
        }

        public Criteria andAwProbableNotEqualTo(BigDecimal value) {
            addCriterion("aw_probable <>", value, "awProbable");
            return (Criteria) this;
        }

        public Criteria andAwProbableGreaterThan(BigDecimal value) {
            addCriterion("aw_probable >", value, "awProbable");
            return (Criteria) this;
        }

        public Criteria andAwProbableGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("aw_probable >=", value, "awProbable");
            return (Criteria) this;
        }

        public Criteria andAwProbableLessThan(BigDecimal value) {
            addCriterion("aw_probable <", value, "awProbable");
            return (Criteria) this;
        }

        public Criteria andAwProbableLessThanOrEqualTo(BigDecimal value) {
            addCriterion("aw_probable <=", value, "awProbable");
            return (Criteria) this;
        }

        public Criteria andAwProbableIn(List<BigDecimal> values) {
            addCriterion("aw_probable in", values, "awProbable");
            return (Criteria) this;
        }

        public Criteria andAwProbableNotIn(List<BigDecimal> values) {
            addCriterion("aw_probable not in", values, "awProbable");
            return (Criteria) this;
        }

        public Criteria andAwProbableBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("aw_probable between", value1, value2, "awProbable");
            return (Criteria) this;
        }

        public Criteria andAwProbableNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("aw_probable not between", value1, value2, "awProbable");
            return (Criteria) this;
        }

        public Criteria andAwLossIsNull() {
            addCriterion("aw_loss is null");
            return (Criteria) this;
        }

        public Criteria andAwLossIsNotNull() {
            addCriterion("aw_loss is not null");
            return (Criteria) this;
        }

        public Criteria andAwLossEqualTo(Long value) {
            addCriterion("aw_loss =", value, "awLoss");
            return (Criteria) this;
        }

        public Criteria andAwLossNotEqualTo(Long value) {
            addCriterion("aw_loss <>", value, "awLoss");
            return (Criteria) this;
        }

        public Criteria andAwLossGreaterThan(Long value) {
            addCriterion("aw_loss >", value, "awLoss");
            return (Criteria) this;
        }

        public Criteria andAwLossGreaterThanOrEqualTo(Long value) {
            addCriterion("aw_loss >=", value, "awLoss");
            return (Criteria) this;
        }

        public Criteria andAwLossLessThan(Long value) {
            addCriterion("aw_loss <", value, "awLoss");
            return (Criteria) this;
        }

        public Criteria andAwLossLessThanOrEqualTo(Long value) {
            addCriterion("aw_loss <=", value, "awLoss");
            return (Criteria) this;
        }

        public Criteria andAwLossIn(List<Long> values) {
            addCriterion("aw_loss in", values, "awLoss");
            return (Criteria) this;
        }

        public Criteria andAwLossNotIn(List<Long> values) {
            addCriterion("aw_loss not in", values, "awLoss");
            return (Criteria) this;
        }

        public Criteria andAwLossBetween(Long value1, Long value2) {
            addCriterion("aw_loss between", value1, value2, "awLoss");
            return (Criteria) this;
        }

        public Criteria andAwLossNotBetween(Long value1, Long value2) {
            addCriterion("aw_loss not between", value1, value2, "awLoss");
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