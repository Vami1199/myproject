package com.xj.domain.account;

import java.util.ArrayList;
import java.util.List;

public class PayInnerListQuery {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Integer pageNo = 1;

    protected Integer startRow;

    protected Integer pageSize = 10;

    protected String fields;

    public PayInnerListQuery() {
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

        public Criteria andPayInIdIsNull() {
            addCriterion("pay_in_id is null");
            return (Criteria) this;
        }

        public Criteria andPayInIdIsNotNull() {
            addCriterion("pay_in_id is not null");
            return (Criteria) this;
        }

        public Criteria andPayInIdEqualTo(Integer value) {
            addCriterion("pay_in_id =", value, "payInId");
            return (Criteria) this;
        }

        public Criteria andPayInIdNotEqualTo(Integer value) {
            addCriterion("pay_in_id <>", value, "payInId");
            return (Criteria) this;
        }

        public Criteria andPayInIdGreaterThan(Integer value) {
            addCriterion("pay_in_id >", value, "payInId");
            return (Criteria) this;
        }

        public Criteria andPayInIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("pay_in_id >=", value, "payInId");
            return (Criteria) this;
        }

        public Criteria andPayInIdLessThan(Integer value) {
            addCriterion("pay_in_id <", value, "payInId");
            return (Criteria) this;
        }

        public Criteria andPayInIdLessThanOrEqualTo(Integer value) {
            addCriterion("pay_in_id <=", value, "payInId");
            return (Criteria) this;
        }

        public Criteria andPayInIdIn(List<Integer> values) {
            addCriterion("pay_in_id in", values, "payInId");
            return (Criteria) this;
        }

        public Criteria andPayInIdNotIn(List<Integer> values) {
            addCriterion("pay_in_id not in", values, "payInId");
            return (Criteria) this;
        }

        public Criteria andPayInIdBetween(Integer value1, Integer value2) {
            addCriterion("pay_in_id between", value1, value2, "payInId");
            return (Criteria) this;
        }

        public Criteria andPayInIdNotBetween(Integer value1, Integer value2) {
            addCriterion("pay_in_id not between", value1, value2, "payInId");
            return (Criteria) this;
        }

        public Criteria andPayInProductNameIsNull() {
            addCriterion("pay_in_product_name is null");
            return (Criteria) this;
        }

        public Criteria andPayInProductNameIsNotNull() {
            addCriterion("pay_in_product_name is not null");
            return (Criteria) this;
        }

        public Criteria andPayInProductNameEqualTo(String value) {
            addCriterion("pay_in_product_name =", value, "payInProductName");
            return (Criteria) this;
        }

        public Criteria andPayInProductNameNotEqualTo(String value) {
            addCriterion("pay_in_product_name <>", value, "payInProductName");
            return (Criteria) this;
        }

        public Criteria andPayInProductNameGreaterThan(String value) {
            addCriterion("pay_in_product_name >", value, "payInProductName");
            return (Criteria) this;
        }

        public Criteria andPayInProductNameGreaterThanOrEqualTo(String value) {
            addCriterion("pay_in_product_name >=", value, "payInProductName");
            return (Criteria) this;
        }

        public Criteria andPayInProductNameLessThan(String value) {
            addCriterion("pay_in_product_name <", value, "payInProductName");
            return (Criteria) this;
        }

        public Criteria andPayInProductNameLessThanOrEqualTo(String value) {
            addCriterion("pay_in_product_name <=", value, "payInProductName");
            return (Criteria) this;
        }

        public Criteria andPayInProductNameLike(String value) {
            addCriterion("pay_in_product_name like", value, "payInProductName");
            return (Criteria) this;
        }

        public Criteria andPayInProductNameNotLike(String value) {
            addCriterion("pay_in_product_name not like", value, "payInProductName");
            return (Criteria) this;
        }

        public Criteria andPayInProductNameIn(List<String> values) {
            addCriterion("pay_in_product_name in", values, "payInProductName");
            return (Criteria) this;
        }

        public Criteria andPayInProductNameNotIn(List<String> values) {
            addCriterion("pay_in_product_name not in", values, "payInProductName");
            return (Criteria) this;
        }

        public Criteria andPayInProductNameBetween(String value1, String value2) {
            addCriterion("pay_in_product_name between", value1, value2, "payInProductName");
            return (Criteria) this;
        }

        public Criteria andPayInProductNameNotBetween(String value1, String value2) {
            addCriterion("pay_in_product_name not between", value1, value2, "payInProductName");
            return (Criteria) this;
        }

        public Criteria andPayInNoIncomIsNull() {
            addCriterion("pay_in_no_incom is null");
            return (Criteria) this;
        }

        public Criteria andPayInNoIncomIsNotNull() {
            addCriterion("pay_in_no_incom is not null");
            return (Criteria) this;
        }

        public Criteria andPayInNoIncomEqualTo(Long value) {
            addCriterion("pay_in_no_incom =", value, "payInNoIncom");
            return (Criteria) this;
        }

        public Criteria andPayInNoIncomNotEqualTo(Long value) {
            addCriterion("pay_in_no_incom <>", value, "payInNoIncom");
            return (Criteria) this;
        }

        public Criteria andPayInNoIncomGreaterThan(Long value) {
            addCriterion("pay_in_no_incom >", value, "payInNoIncom");
            return (Criteria) this;
        }

        public Criteria andPayInNoIncomGreaterThanOrEqualTo(Long value) {
            addCriterion("pay_in_no_incom >=", value, "payInNoIncom");
            return (Criteria) this;
        }

        public Criteria andPayInNoIncomLessThan(Long value) {
            addCriterion("pay_in_no_incom <", value, "payInNoIncom");
            return (Criteria) this;
        }

        public Criteria andPayInNoIncomLessThanOrEqualTo(Long value) {
            addCriterion("pay_in_no_incom <=", value, "payInNoIncom");
            return (Criteria) this;
        }

        public Criteria andPayInNoIncomIn(List<Long> values) {
            addCriterion("pay_in_no_incom in", values, "payInNoIncom");
            return (Criteria) this;
        }

        public Criteria andPayInNoIncomNotIn(List<Long> values) {
            addCriterion("pay_in_no_incom not in", values, "payInNoIncom");
            return (Criteria) this;
        }

        public Criteria andPayInNoIncomBetween(Long value1, Long value2) {
            addCriterion("pay_in_no_incom between", value1, value2, "payInNoIncom");
            return (Criteria) this;
        }

        public Criteria andPayInNoIncomNotBetween(Long value1, Long value2) {
            addCriterion("pay_in_no_incom not between", value1, value2, "payInNoIncom");
            return (Criteria) this;
        }

        public Criteria andPayInPurchasesIsNull() {
            addCriterion("pay_in_purchases is null");
            return (Criteria) this;
        }

        public Criteria andPayInPurchasesIsNotNull() {
            addCriterion("pay_in_purchases is not null");
            return (Criteria) this;
        }

        public Criteria andPayInPurchasesEqualTo(Long value) {
            addCriterion("pay_in_purchases =", value, "payInPurchases");
            return (Criteria) this;
        }

        public Criteria andPayInPurchasesNotEqualTo(Long value) {
            addCriterion("pay_in_purchases <>", value, "payInPurchases");
            return (Criteria) this;
        }

        public Criteria andPayInPurchasesGreaterThan(Long value) {
            addCriterion("pay_in_purchases >", value, "payInPurchases");
            return (Criteria) this;
        }

        public Criteria andPayInPurchasesGreaterThanOrEqualTo(Long value) {
            addCriterion("pay_in_purchases >=", value, "payInPurchases");
            return (Criteria) this;
        }

        public Criteria andPayInPurchasesLessThan(Long value) {
            addCriterion("pay_in_purchases <", value, "payInPurchases");
            return (Criteria) this;
        }

        public Criteria andPayInPurchasesLessThanOrEqualTo(Long value) {
            addCriterion("pay_in_purchases <=", value, "payInPurchases");
            return (Criteria) this;
        }

        public Criteria andPayInPurchasesIn(List<Long> values) {
            addCriterion("pay_in_purchases in", values, "payInPurchases");
            return (Criteria) this;
        }

        public Criteria andPayInPurchasesNotIn(List<Long> values) {
            addCriterion("pay_in_purchases not in", values, "payInPurchases");
            return (Criteria) this;
        }

        public Criteria andPayInPurchasesBetween(Long value1, Long value2) {
            addCriterion("pay_in_purchases between", value1, value2, "payInPurchases");
            return (Criteria) this;
        }

        public Criteria andPayInPurchasesNotBetween(Long value1, Long value2) {
            addCriterion("pay_in_purchases not between", value1, value2, "payInPurchases");
            return (Criteria) this;
        }

        public Criteria andPayInPriceIsNull() {
            addCriterion("pay_in_price is null");
            return (Criteria) this;
        }

        public Criteria andPayInPriceIsNotNull() {
            addCriterion("pay_in_price is not null");
            return (Criteria) this;
        }

        public Criteria andPayInPriceEqualTo(Long value) {
            addCriterion("pay_in_price =", value, "payInPrice");
            return (Criteria) this;
        }

        public Criteria andPayInPriceNotEqualTo(Long value) {
            addCriterion("pay_in_price <>", value, "payInPrice");
            return (Criteria) this;
        }

        public Criteria andPayInPriceGreaterThan(Long value) {
            addCriterion("pay_in_price >", value, "payInPrice");
            return (Criteria) this;
        }

        public Criteria andPayInPriceGreaterThanOrEqualTo(Long value) {
            addCriterion("pay_in_price >=", value, "payInPrice");
            return (Criteria) this;
        }

        public Criteria andPayInPriceLessThan(Long value) {
            addCriterion("pay_in_price <", value, "payInPrice");
            return (Criteria) this;
        }

        public Criteria andPayInPriceLessThanOrEqualTo(Long value) {
            addCriterion("pay_in_price <=", value, "payInPrice");
            return (Criteria) this;
        }

        public Criteria andPayInPriceIn(List<Long> values) {
            addCriterion("pay_in_price in", values, "payInPrice");
            return (Criteria) this;
        }

        public Criteria andPayInPriceNotIn(List<Long> values) {
            addCriterion("pay_in_price not in", values, "payInPrice");
            return (Criteria) this;
        }

        public Criteria andPayInPriceBetween(Long value1, Long value2) {
            addCriterion("pay_in_price between", value1, value2, "payInPrice");
            return (Criteria) this;
        }

        public Criteria andPayInPriceNotBetween(Long value1, Long value2) {
            addCriterion("pay_in_price not between", value1, value2, "payInPrice");
            return (Criteria) this;
        }

        public Criteria andPayPiIdIsNull() {
            addCriterion("pay_pi_id is null");
            return (Criteria) this;
        }

        public Criteria andPayPiIdIsNotNull() {
            addCriterion("pay_pi_id is not null");
            return (Criteria) this;
        }

        public Criteria andPayPiIdEqualTo(Integer value) {
            addCriterion("pay_pi_id =", value, "payPiId");
            return (Criteria) this;
        }

        public Criteria andPayPiIdNotEqualTo(Integer value) {
            addCriterion("pay_pi_id <>", value, "payPiId");
            return (Criteria) this;
        }

        public Criteria andPayPiIdGreaterThan(Integer value) {
            addCriterion("pay_pi_id >", value, "payPiId");
            return (Criteria) this;
        }

        public Criteria andPayPiIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("pay_pi_id >=", value, "payPiId");
            return (Criteria) this;
        }

        public Criteria andPayPiIdLessThan(Integer value) {
            addCriterion("pay_pi_id <", value, "payPiId");
            return (Criteria) this;
        }

        public Criteria andPayPiIdLessThanOrEqualTo(Integer value) {
            addCriterion("pay_pi_id <=", value, "payPiId");
            return (Criteria) this;
        }

        public Criteria andPayPiIdIn(List<Integer> values) {
            addCriterion("pay_pi_id in", values, "payPiId");
            return (Criteria) this;
        }

        public Criteria andPayPiIdNotIn(List<Integer> values) {
            addCriterion("pay_pi_id not in", values, "payPiId");
            return (Criteria) this;
        }

        public Criteria andPayPiIdBetween(Integer value1, Integer value2) {
            addCriterion("pay_pi_id between", value1, value2, "payPiId");
            return (Criteria) this;
        }

        public Criteria andPayPiIdNotBetween(Integer value1, Integer value2) {
            addCriterion("pay_pi_id not between", value1, value2, "payPiId");
            return (Criteria) this;
        }

        public Criteria andPayInFillNoIncomIsNull() {
            addCriterion("pay_in_fill_no_incom is null");
            return (Criteria) this;
        }

        public Criteria andPayInFillNoIncomIsNotNull() {
            addCriterion("pay_in_fill_no_incom is not null");
            return (Criteria) this;
        }

        public Criteria andPayInFillNoIncomEqualTo(Long value) {
            addCriterion("pay_in_fill_no_incom =", value, "payInFillNoIncom");
            return (Criteria) this;
        }

        public Criteria andPayInFillNoIncomNotEqualTo(Long value) {
            addCriterion("pay_in_fill_no_incom <>", value, "payInFillNoIncom");
            return (Criteria) this;
        }

        public Criteria andPayInFillNoIncomGreaterThan(Long value) {
            addCriterion("pay_in_fill_no_incom >", value, "payInFillNoIncom");
            return (Criteria) this;
        }

        public Criteria andPayInFillNoIncomGreaterThanOrEqualTo(Long value) {
            addCriterion("pay_in_fill_no_incom >=", value, "payInFillNoIncom");
            return (Criteria) this;
        }

        public Criteria andPayInFillNoIncomLessThan(Long value) {
            addCriterion("pay_in_fill_no_incom <", value, "payInFillNoIncom");
            return (Criteria) this;
        }

        public Criteria andPayInFillNoIncomLessThanOrEqualTo(Long value) {
            addCriterion("pay_in_fill_no_incom <=", value, "payInFillNoIncom");
            return (Criteria) this;
        }

        public Criteria andPayInFillNoIncomIn(List<Long> values) {
            addCriterion("pay_in_fill_no_incom in", values, "payInFillNoIncom");
            return (Criteria) this;
        }

        public Criteria andPayInFillNoIncomNotIn(List<Long> values) {
            addCriterion("pay_in_fill_no_incom not in", values, "payInFillNoIncom");
            return (Criteria) this;
        }

        public Criteria andPayInFillNoIncomBetween(Long value1, Long value2) {
            addCriterion("pay_in_fill_no_incom between", value1, value2, "payInFillNoIncom");
            return (Criteria) this;
        }

        public Criteria andPayInFillNoIncomNotBetween(Long value1, Long value2) {
            addCriterion("pay_in_fill_no_incom not between", value1, value2, "payInFillNoIncom");
            return (Criteria) this;
        }

        public Criteria andPayInFillPurchasesIsNull() {
            addCriterion("pay_in_fill_purchases is null");
            return (Criteria) this;
        }

        public Criteria andPayInFillPurchasesIsNotNull() {
            addCriterion("pay_in_fill_purchases is not null");
            return (Criteria) this;
        }

        public Criteria andPayInFillPurchasesEqualTo(Long value) {
            addCriterion("pay_in_fill_purchases =", value, "payInFillPurchases");
            return (Criteria) this;
        }

        public Criteria andPayInFillPurchasesNotEqualTo(Long value) {
            addCriterion("pay_in_fill_purchases <>", value, "payInFillPurchases");
            return (Criteria) this;
        }

        public Criteria andPayInFillPurchasesGreaterThan(Long value) {
            addCriterion("pay_in_fill_purchases >", value, "payInFillPurchases");
            return (Criteria) this;
        }

        public Criteria andPayInFillPurchasesGreaterThanOrEqualTo(Long value) {
            addCriterion("pay_in_fill_purchases >=", value, "payInFillPurchases");
            return (Criteria) this;
        }

        public Criteria andPayInFillPurchasesLessThan(Long value) {
            addCriterion("pay_in_fill_purchases <", value, "payInFillPurchases");
            return (Criteria) this;
        }

        public Criteria andPayInFillPurchasesLessThanOrEqualTo(Long value) {
            addCriterion("pay_in_fill_purchases <=", value, "payInFillPurchases");
            return (Criteria) this;
        }

        public Criteria andPayInFillPurchasesIn(List<Long> values) {
            addCriterion("pay_in_fill_purchases in", values, "payInFillPurchases");
            return (Criteria) this;
        }

        public Criteria andPayInFillPurchasesNotIn(List<Long> values) {
            addCriterion("pay_in_fill_purchases not in", values, "payInFillPurchases");
            return (Criteria) this;
        }

        public Criteria andPayInFillPurchasesBetween(Long value1, Long value2) {
            addCriterion("pay_in_fill_purchases between", value1, value2, "payInFillPurchases");
            return (Criteria) this;
        }

        public Criteria andPayInFillPurchasesNotBetween(Long value1, Long value2) {
            addCriterion("pay_in_fill_purchases not between", value1, value2, "payInFillPurchases");
            return (Criteria) this;
        }

        public Criteria andPayInFillPriceIsNull() {
            addCriterion("pay_in_fill_price is null");
            return (Criteria) this;
        }

        public Criteria andPayInFillPriceIsNotNull() {
            addCriterion("pay_in_fill_price is not null");
            return (Criteria) this;
        }

        public Criteria andPayInFillPriceEqualTo(Long value) {
            addCriterion("pay_in_fill_price =", value, "payInFillPrice");
            return (Criteria) this;
        }

        public Criteria andPayInFillPriceNotEqualTo(Long value) {
            addCriterion("pay_in_fill_price <>", value, "payInFillPrice");
            return (Criteria) this;
        }

        public Criteria andPayInFillPriceGreaterThan(Long value) {
            addCriterion("pay_in_fill_price >", value, "payInFillPrice");
            return (Criteria) this;
        }

        public Criteria andPayInFillPriceGreaterThanOrEqualTo(Long value) {
            addCriterion("pay_in_fill_price >=", value, "payInFillPrice");
            return (Criteria) this;
        }

        public Criteria andPayInFillPriceLessThan(Long value) {
            addCriterion("pay_in_fill_price <", value, "payInFillPrice");
            return (Criteria) this;
        }

        public Criteria andPayInFillPriceLessThanOrEqualTo(Long value) {
            addCriterion("pay_in_fill_price <=", value, "payInFillPrice");
            return (Criteria) this;
        }

        public Criteria andPayInFillPriceIn(List<Long> values) {
            addCriterion("pay_in_fill_price in", values, "payInFillPrice");
            return (Criteria) this;
        }

        public Criteria andPayInFillPriceNotIn(List<Long> values) {
            addCriterion("pay_in_fill_price not in", values, "payInFillPrice");
            return (Criteria) this;
        }

        public Criteria andPayInFillPriceBetween(Long value1, Long value2) {
            addCriterion("pay_in_fill_price between", value1, value2, "payInFillPrice");
            return (Criteria) this;
        }

        public Criteria andPayInFillPriceNotBetween(Long value1, Long value2) {
            addCriterion("pay_in_fill_price not between", value1, value2, "payInFillPrice");
            return (Criteria) this;
        }

        public Criteria andPayInMainIsNull() {
            addCriterion("pay_in_main is null");
            return (Criteria) this;
        }

        public Criteria andPayInMainIsNotNull() {
            addCriterion("pay_in_main is not null");
            return (Criteria) this;
        }

        public Criteria andPayInMainEqualTo(Integer value) {
            addCriterion("pay_in_main =", value, "payInMain");
            return (Criteria) this;
        }

        public Criteria andPayInMainNotEqualTo(Integer value) {
            addCriterion("pay_in_main <>", value, "payInMain");
            return (Criteria) this;
        }

        public Criteria andPayInMainGreaterThan(Integer value) {
            addCriterion("pay_in_main >", value, "payInMain");
            return (Criteria) this;
        }

        public Criteria andPayInMainGreaterThanOrEqualTo(Integer value) {
            addCriterion("pay_in_main >=", value, "payInMain");
            return (Criteria) this;
        }

        public Criteria andPayInMainLessThan(Integer value) {
            addCriterion("pay_in_main <", value, "payInMain");
            return (Criteria) this;
        }

        public Criteria andPayInMainLessThanOrEqualTo(Integer value) {
            addCriterion("pay_in_main <=", value, "payInMain");
            return (Criteria) this;
        }

        public Criteria andPayInMainIn(List<Integer> values) {
            addCriterion("pay_in_main in", values, "payInMain");
            return (Criteria) this;
        }

        public Criteria andPayInMainNotIn(List<Integer> values) {
            addCriterion("pay_in_main not in", values, "payInMain");
            return (Criteria) this;
        }

        public Criteria andPayInMainBetween(Integer value1, Integer value2) {
            addCriterion("pay_in_main between", value1, value2, "payInMain");
            return (Criteria) this;
        }

        public Criteria andPayInMainNotBetween(Integer value1, Integer value2) {
            addCriterion("pay_in_main not between", value1, value2, "payInMain");
            return (Criteria) this;
        }

        public Criteria andPayInBuyIsNull() {
            addCriterion("pay_in_buy is null");
            return (Criteria) this;
        }

        public Criteria andPayInBuyIsNotNull() {
            addCriterion("pay_in_buy is not null");
            return (Criteria) this;
        }

        public Criteria andPayInBuyEqualTo(Integer value) {
            addCriterion("pay_in_buy =", value, "payInBuy");
            return (Criteria) this;
        }

        public Criteria andPayInBuyNotEqualTo(Integer value) {
            addCriterion("pay_in_buy <>", value, "payInBuy");
            return (Criteria) this;
        }

        public Criteria andPayInBuyGreaterThan(Integer value) {
            addCriterion("pay_in_buy >", value, "payInBuy");
            return (Criteria) this;
        }

        public Criteria andPayInBuyGreaterThanOrEqualTo(Integer value) {
            addCriterion("pay_in_buy >=", value, "payInBuy");
            return (Criteria) this;
        }

        public Criteria andPayInBuyLessThan(Integer value) {
            addCriterion("pay_in_buy <", value, "payInBuy");
            return (Criteria) this;
        }

        public Criteria andPayInBuyLessThanOrEqualTo(Integer value) {
            addCriterion("pay_in_buy <=", value, "payInBuy");
            return (Criteria) this;
        }

        public Criteria andPayInBuyIn(List<Integer> values) {
            addCriterion("pay_in_buy in", values, "payInBuy");
            return (Criteria) this;
        }

        public Criteria andPayInBuyNotIn(List<Integer> values) {
            addCriterion("pay_in_buy not in", values, "payInBuy");
            return (Criteria) this;
        }

        public Criteria andPayInBuyBetween(Integer value1, Integer value2) {
            addCriterion("pay_in_buy between", value1, value2, "payInBuy");
            return (Criteria) this;
        }

        public Criteria andPayInBuyNotBetween(Integer value1, Integer value2) {
            addCriterion("pay_in_buy not between", value1, value2, "payInBuy");
            return (Criteria) this;
        }

        public Criteria andPayInSaleIsNull() {
            addCriterion("pay_in_sale is null");
            return (Criteria) this;
        }

        public Criteria andPayInSaleIsNotNull() {
            addCriterion("pay_in_sale is not null");
            return (Criteria) this;
        }

        public Criteria andPayInSaleEqualTo(Integer value) {
            addCriterion("pay_in_sale =", value, "payInSale");
            return (Criteria) this;
        }

        public Criteria andPayInSaleNotEqualTo(Integer value) {
            addCriterion("pay_in_sale <>", value, "payInSale");
            return (Criteria) this;
        }

        public Criteria andPayInSaleGreaterThan(Integer value) {
            addCriterion("pay_in_sale >", value, "payInSale");
            return (Criteria) this;
        }

        public Criteria andPayInSaleGreaterThanOrEqualTo(Integer value) {
            addCriterion("pay_in_sale >=", value, "payInSale");
            return (Criteria) this;
        }

        public Criteria andPayInSaleLessThan(Integer value) {
            addCriterion("pay_in_sale <", value, "payInSale");
            return (Criteria) this;
        }

        public Criteria andPayInSaleLessThanOrEqualTo(Integer value) {
            addCriterion("pay_in_sale <=", value, "payInSale");
            return (Criteria) this;
        }

        public Criteria andPayInSaleIn(List<Integer> values) {
            addCriterion("pay_in_sale in", values, "payInSale");
            return (Criteria) this;
        }

        public Criteria andPayInSaleNotIn(List<Integer> values) {
            addCriterion("pay_in_sale not in", values, "payInSale");
            return (Criteria) this;
        }

        public Criteria andPayInSaleBetween(Integer value1, Integer value2) {
            addCriterion("pay_in_sale between", value1, value2, "payInSale");
            return (Criteria) this;
        }

        public Criteria andPayInSaleNotBetween(Integer value1, Integer value2) {
            addCriterion("pay_in_sale not between", value1, value2, "payInSale");
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