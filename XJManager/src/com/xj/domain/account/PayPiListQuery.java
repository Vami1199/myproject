package com.xj.domain.account;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class PayPiListQuery {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Integer pageNo = 1;

    protected Integer startRow;

    protected Integer pageSize = 10;

    protected String fields;

    public PayPiListQuery() {
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

        public Criteria andPayPiSaleIsNull() {
            addCriterion("pay_pi_sale is null");
            return (Criteria) this;
        }

        public Criteria andPayPiSaleIsNotNull() {
            addCriterion("pay_pi_sale is not null");
            return (Criteria) this;
        }

        public Criteria andPayPiSaleEqualTo(Integer value) {
            addCriterion("pay_pi_sale =", value, "payPiSale");
            return (Criteria) this;
        }

        public Criteria andPayPiSaleNotEqualTo(Integer value) {
            addCriterion("pay_pi_sale <>", value, "payPiSale");
            return (Criteria) this;
        }

        public Criteria andPayPiSaleGreaterThan(Integer value) {
            addCriterion("pay_pi_sale >", value, "payPiSale");
            return (Criteria) this;
        }

        public Criteria andPayPiSaleGreaterThanOrEqualTo(Integer value) {
            addCriterion("pay_pi_sale >=", value, "payPiSale");
            return (Criteria) this;
        }

        public Criteria andPayPiSaleLessThan(Integer value) {
            addCriterion("pay_pi_sale <", value, "payPiSale");
            return (Criteria) this;
        }

        public Criteria andPayPiSaleLessThanOrEqualTo(Integer value) {
            addCriterion("pay_pi_sale <=", value, "payPiSale");
            return (Criteria) this;
        }

        public Criteria andPayPiSaleIn(List<Integer> values) {
            addCriterion("pay_pi_sale in", values, "payPiSale");
            return (Criteria) this;
        }

        public Criteria andPayPiSaleNotIn(List<Integer> values) {
            addCriterion("pay_pi_sale not in", values, "payPiSale");
            return (Criteria) this;
        }

        public Criteria andPayPiSaleBetween(Integer value1, Integer value2) {
            addCriterion("pay_pi_sale between", value1, value2, "payPiSale");
            return (Criteria) this;
        }

        public Criteria andPayPiSaleNotBetween(Integer value1, Integer value2) {
            addCriterion("pay_pi_sale not between", value1, value2, "payPiSale");
            return (Criteria) this;
        }

        public Criteria andPayPiBuyIsNull() {
            addCriterion("pay_pi_buy is null");
            return (Criteria) this;
        }

        public Criteria andPayPiBuyIsNotNull() {
            addCriterion("pay_pi_buy is not null");
            return (Criteria) this;
        }

        public Criteria andPayPiBuyEqualTo(Integer value) {
            addCriterion("pay_pi_buy =", value, "payPiBuy");
            return (Criteria) this;
        }

        public Criteria andPayPiBuyNotEqualTo(Integer value) {
            addCriterion("pay_pi_buy <>", value, "payPiBuy");
            return (Criteria) this;
        }

        public Criteria andPayPiBuyGreaterThan(Integer value) {
            addCriterion("pay_pi_buy >", value, "payPiBuy");
            return (Criteria) this;
        }

        public Criteria andPayPiBuyGreaterThanOrEqualTo(Integer value) {
            addCriterion("pay_pi_buy >=", value, "payPiBuy");
            return (Criteria) this;
        }

        public Criteria andPayPiBuyLessThan(Integer value) {
            addCriterion("pay_pi_buy <", value, "payPiBuy");
            return (Criteria) this;
        }

        public Criteria andPayPiBuyLessThanOrEqualTo(Integer value) {
            addCriterion("pay_pi_buy <=", value, "payPiBuy");
            return (Criteria) this;
        }

        public Criteria andPayPiBuyIn(List<Integer> values) {
            addCriterion("pay_pi_buy in", values, "payPiBuy");
            return (Criteria) this;
        }

        public Criteria andPayPiBuyNotIn(List<Integer> values) {
            addCriterion("pay_pi_buy not in", values, "payPiBuy");
            return (Criteria) this;
        }

        public Criteria andPayPiBuyBetween(Integer value1, Integer value2) {
            addCriterion("pay_pi_buy between", value1, value2, "payPiBuy");
            return (Criteria) this;
        }

        public Criteria andPayPiBuyNotBetween(Integer value1, Integer value2) {
            addCriterion("pay_pi_buy not between", value1, value2, "payPiBuy");
            return (Criteria) this;
        }

        public Criteria andPayPiMainIsNull() {
            addCriterion("pay_pi_main is null");
            return (Criteria) this;
        }

        public Criteria andPayPiMainIsNotNull() {
            addCriterion("pay_pi_main is not null");
            return (Criteria) this;
        }

        public Criteria andPayPiMainEqualTo(Integer value) {
            addCriterion("pay_pi_main =", value, "payPiMain");
            return (Criteria) this;
        }

        public Criteria andPayPiMainNotEqualTo(Integer value) {
            addCriterion("pay_pi_main <>", value, "payPiMain");
            return (Criteria) this;
        }

        public Criteria andPayPiMainGreaterThan(Integer value) {
            addCriterion("pay_pi_main >", value, "payPiMain");
            return (Criteria) this;
        }

        public Criteria andPayPiMainGreaterThanOrEqualTo(Integer value) {
            addCriterion("pay_pi_main >=", value, "payPiMain");
            return (Criteria) this;
        }

        public Criteria andPayPiMainLessThan(Integer value) {
            addCriterion("pay_pi_main <", value, "payPiMain");
            return (Criteria) this;
        }

        public Criteria andPayPiMainLessThanOrEqualTo(Integer value) {
            addCriterion("pay_pi_main <=", value, "payPiMain");
            return (Criteria) this;
        }

        public Criteria andPayPiMainIn(List<Integer> values) {
            addCriterion("pay_pi_main in", values, "payPiMain");
            return (Criteria) this;
        }

        public Criteria andPayPiMainNotIn(List<Integer> values) {
            addCriterion("pay_pi_main not in", values, "payPiMain");
            return (Criteria) this;
        }

        public Criteria andPayPiMainBetween(Integer value1, Integer value2) {
            addCriterion("pay_pi_main between", value1, value2, "payPiMain");
            return (Criteria) this;
        }

        public Criteria andPayPiMainNotBetween(Integer value1, Integer value2) {
            addCriterion("pay_pi_main not between", value1, value2, "payPiMain");
            return (Criteria) this;
        }

        public Criteria andPayPiDateIsNull() {
            addCriterion("pay_pi_date is null");
            return (Criteria) this;
        }

        public Criteria andPayPiDateIsNotNull() {
            addCriterion("pay_pi_date is not null");
            return (Criteria) this;
        }

        public Criteria andPayPiDateEqualTo(Date value) {
            addCriterion("pay_pi_date =", value, "payPiDate");
            return (Criteria) this;
        }

        public Criteria andPayPiDateNotEqualTo(Date value) {
            addCriterion("pay_pi_date <>", value, "payPiDate");
            return (Criteria) this;
        }

        public Criteria andPayPiDateGreaterThan(Date value) {
            addCriterion("pay_pi_date >", value, "payPiDate");
            return (Criteria) this;
        }

        public Criteria andPayPiDateGreaterThanOrEqualTo(Date value) {
            addCriterion("pay_pi_date >=", value, "payPiDate");
            return (Criteria) this;
        }

        public Criteria andPayPiDateLessThan(Date value) {
            addCriterion("pay_pi_date <", value, "payPiDate");
            return (Criteria) this;
        }

        public Criteria andPayPiDateLessThanOrEqualTo(Date value) {
            addCriterion("pay_pi_date <=", value, "payPiDate");
            return (Criteria) this;
        }

        public Criteria andPayPiDateIn(List<Date> values) {
            addCriterion("pay_pi_date in", values, "payPiDate");
            return (Criteria) this;
        }

        public Criteria andPayPiDateNotIn(List<Date> values) {
            addCriterion("pay_pi_date not in", values, "payPiDate");
            return (Criteria) this;
        }

        public Criteria andPayPiDateBetween(Date value1, Date value2) {
            addCriterion("pay_pi_date between", value1, value2, "payPiDate");
            return (Criteria) this;
        }

        public Criteria andPayPiDateNotBetween(Date value1, Date value2) {
            addCriterion("pay_pi_date not between", value1, value2, "payPiDate");
            return (Criteria) this;
        }

        public Criteria andPayPiProjectsIsNull() {
            addCriterion("pay_pi_projects is null");
            return (Criteria) this;
        }

        public Criteria andPayPiProjectsIsNotNull() {
            addCriterion("pay_pi_projects is not null");
            return (Criteria) this;
        }

        public Criteria andPayPiProjectsEqualTo(String value) {
            addCriterion("pay_pi_projects =", value, "payPiProjects");
            return (Criteria) this;
        }

        public Criteria andPayPiProjectsNotEqualTo(String value) {
            addCriterion("pay_pi_projects <>", value, "payPiProjects");
            return (Criteria) this;
        }

        public Criteria andPayPiProjectsGreaterThan(String value) {
            addCriterion("pay_pi_projects >", value, "payPiProjects");
            return (Criteria) this;
        }

        public Criteria andPayPiProjectsGreaterThanOrEqualTo(String value) {
            addCriterion("pay_pi_projects >=", value, "payPiProjects");
            return (Criteria) this;
        }

        public Criteria andPayPiProjectsLessThan(String value) {
            addCriterion("pay_pi_projects <", value, "payPiProjects");
            return (Criteria) this;
        }

        public Criteria andPayPiProjectsLessThanOrEqualTo(String value) {
            addCriterion("pay_pi_projects <=", value, "payPiProjects");
            return (Criteria) this;
        }

        public Criteria andPayPiProjectsLike(String value) {
            addCriterion("pay_pi_projects like", value, "payPiProjects");
            return (Criteria) this;
        }

        public Criteria andPayPiProjectsNotLike(String value) {
            addCriterion("pay_pi_projects not like", value, "payPiProjects");
            return (Criteria) this;
        }

        public Criteria andPayPiProjectsIn(List<String> values) {
            addCriterion("pay_pi_projects in", values, "payPiProjects");
            return (Criteria) this;
        }

        public Criteria andPayPiProjectsNotIn(List<String> values) {
            addCriterion("pay_pi_projects not in", values, "payPiProjects");
            return (Criteria) this;
        }

        public Criteria andPayPiProjectsBetween(String value1, String value2) {
            addCriterion("pay_pi_projects between", value1, value2, "payPiProjects");
            return (Criteria) this;
        }

        public Criteria andPayPiProjectsNotBetween(String value1, String value2) {
            addCriterion("pay_pi_projects not between", value1, value2, "payPiProjects");
            return (Criteria) this;
        }

        public Criteria andPayPiNoIncomeIsNull() {
            addCriterion("pay_pi_no_income is null");
            return (Criteria) this;
        }

        public Criteria andPayPiNoIncomeIsNotNull() {
            addCriterion("pay_pi_no_income is not null");
            return (Criteria) this;
        }

        public Criteria andPayPiNoIncomeEqualTo(Long value) {
            addCriterion("pay_pi_no_income =", value, "payPiNoIncome");
            return (Criteria) this;
        }

        public Criteria andPayPiNoIncomeNotEqualTo(Long value) {
            addCriterion("pay_pi_no_income <>", value, "payPiNoIncome");
            return (Criteria) this;
        }

        public Criteria andPayPiNoIncomeGreaterThan(Long value) {
            addCriterion("pay_pi_no_income >", value, "payPiNoIncome");
            return (Criteria) this;
        }

        public Criteria andPayPiNoIncomeGreaterThanOrEqualTo(Long value) {
            addCriterion("pay_pi_no_income >=", value, "payPiNoIncome");
            return (Criteria) this;
        }

        public Criteria andPayPiNoIncomeLessThan(Long value) {
            addCriterion("pay_pi_no_income <", value, "payPiNoIncome");
            return (Criteria) this;
        }

        public Criteria andPayPiNoIncomeLessThanOrEqualTo(Long value) {
            addCriterion("pay_pi_no_income <=", value, "payPiNoIncome");
            return (Criteria) this;
        }

        public Criteria andPayPiNoIncomeIn(List<Long> values) {
            addCriterion("pay_pi_no_income in", values, "payPiNoIncome");
            return (Criteria) this;
        }

        public Criteria andPayPiNoIncomeNotIn(List<Long> values) {
            addCriterion("pay_pi_no_income not in", values, "payPiNoIncome");
            return (Criteria) this;
        }

        public Criteria andPayPiNoIncomeBetween(Long value1, Long value2) {
            addCriterion("pay_pi_no_income between", value1, value2, "payPiNoIncome");
            return (Criteria) this;
        }

        public Criteria andPayPiNoIncomeNotBetween(Long value1, Long value2) {
            addCriterion("pay_pi_no_income not between", value1, value2, "payPiNoIncome");
            return (Criteria) this;
        }

        public Criteria andPayPiPurchasesIsNull() {
            addCriterion("pay_pi_purchases is null");
            return (Criteria) this;
        }

        public Criteria andPayPiPurchasesIsNotNull() {
            addCriterion("pay_pi_purchases is not null");
            return (Criteria) this;
        }

        public Criteria andPayPiPurchasesEqualTo(Long value) {
            addCriterion("pay_pi_purchases =", value, "payPiPurchases");
            return (Criteria) this;
        }

        public Criteria andPayPiPurchasesNotEqualTo(Long value) {
            addCriterion("pay_pi_purchases <>", value, "payPiPurchases");
            return (Criteria) this;
        }

        public Criteria andPayPiPurchasesGreaterThan(Long value) {
            addCriterion("pay_pi_purchases >", value, "payPiPurchases");
            return (Criteria) this;
        }

        public Criteria andPayPiPurchasesGreaterThanOrEqualTo(Long value) {
            addCriterion("pay_pi_purchases >=", value, "payPiPurchases");
            return (Criteria) this;
        }

        public Criteria andPayPiPurchasesLessThan(Long value) {
            addCriterion("pay_pi_purchases <", value, "payPiPurchases");
            return (Criteria) this;
        }

        public Criteria andPayPiPurchasesLessThanOrEqualTo(Long value) {
            addCriterion("pay_pi_purchases <=", value, "payPiPurchases");
            return (Criteria) this;
        }

        public Criteria andPayPiPurchasesIn(List<Long> values) {
            addCriterion("pay_pi_purchases in", values, "payPiPurchases");
            return (Criteria) this;
        }

        public Criteria andPayPiPurchasesNotIn(List<Long> values) {
            addCriterion("pay_pi_purchases not in", values, "payPiPurchases");
            return (Criteria) this;
        }

        public Criteria andPayPiPurchasesBetween(Long value1, Long value2) {
            addCriterion("pay_pi_purchases between", value1, value2, "payPiPurchases");
            return (Criteria) this;
        }

        public Criteria andPayPiPurchasesNotBetween(Long value1, Long value2) {
            addCriterion("pay_pi_purchases not between", value1, value2, "payPiPurchases");
            return (Criteria) this;
        }

        public Criteria andPayPiCoalQualityIsNull() {
            addCriterion("pay_pi_coal_quality is null");
            return (Criteria) this;
        }

        public Criteria andPayPiCoalQualityIsNotNull() {
            addCriterion("pay_pi_coal_quality is not null");
            return (Criteria) this;
        }

        public Criteria andPayPiCoalQualityEqualTo(Long value) {
            addCriterion("pay_pi_coal_quality =", value, "payPiCoalQuality");
            return (Criteria) this;
        }

        public Criteria andPayPiCoalQualityNotEqualTo(Long value) {
            addCriterion("pay_pi_coal_quality <>", value, "payPiCoalQuality");
            return (Criteria) this;
        }

        public Criteria andPayPiCoalQualityGreaterThan(Long value) {
            addCriterion("pay_pi_coal_quality >", value, "payPiCoalQuality");
            return (Criteria) this;
        }

        public Criteria andPayPiCoalQualityGreaterThanOrEqualTo(Long value) {
            addCriterion("pay_pi_coal_quality >=", value, "payPiCoalQuality");
            return (Criteria) this;
        }

        public Criteria andPayPiCoalQualityLessThan(Long value) {
            addCriterion("pay_pi_coal_quality <", value, "payPiCoalQuality");
            return (Criteria) this;
        }

        public Criteria andPayPiCoalQualityLessThanOrEqualTo(Long value) {
            addCriterion("pay_pi_coal_quality <=", value, "payPiCoalQuality");
            return (Criteria) this;
        }

        public Criteria andPayPiCoalQualityIn(List<Long> values) {
            addCriterion("pay_pi_coal_quality in", values, "payPiCoalQuality");
            return (Criteria) this;
        }

        public Criteria andPayPiCoalQualityNotIn(List<Long> values) {
            addCriterion("pay_pi_coal_quality not in", values, "payPiCoalQuality");
            return (Criteria) this;
        }

        public Criteria andPayPiCoalQualityBetween(Long value1, Long value2) {
            addCriterion("pay_pi_coal_quality between", value1, value2, "payPiCoalQuality");
            return (Criteria) this;
        }

        public Criteria andPayPiCoalQualityNotBetween(Long value1, Long value2) {
            addCriterion("pay_pi_coal_quality not between", value1, value2, "payPiCoalQuality");
            return (Criteria) this;
        }

        public Criteria andPayPiPriceIsNull() {
            addCriterion("pay_pi_price is null");
            return (Criteria) this;
        }

        public Criteria andPayPiPriceIsNotNull() {
            addCriterion("pay_pi_price is not null");
            return (Criteria) this;
        }

        public Criteria andPayPiPriceEqualTo(Long value) {
            addCriterion("pay_pi_price =", value, "payPiPrice");
            return (Criteria) this;
        }

        public Criteria andPayPiPriceNotEqualTo(Long value) {
            addCriterion("pay_pi_price <>", value, "payPiPrice");
            return (Criteria) this;
        }

        public Criteria andPayPiPriceGreaterThan(Long value) {
            addCriterion("pay_pi_price >", value, "payPiPrice");
            return (Criteria) this;
        }

        public Criteria andPayPiPriceGreaterThanOrEqualTo(Long value) {
            addCriterion("pay_pi_price >=", value, "payPiPrice");
            return (Criteria) this;
        }

        public Criteria andPayPiPriceLessThan(Long value) {
            addCriterion("pay_pi_price <", value, "payPiPrice");
            return (Criteria) this;
        }

        public Criteria andPayPiPriceLessThanOrEqualTo(Long value) {
            addCriterion("pay_pi_price <=", value, "payPiPrice");
            return (Criteria) this;
        }

        public Criteria andPayPiPriceIn(List<Long> values) {
            addCriterion("pay_pi_price in", values, "payPiPrice");
            return (Criteria) this;
        }

        public Criteria andPayPiPriceNotIn(List<Long> values) {
            addCriterion("pay_pi_price not in", values, "payPiPrice");
            return (Criteria) this;
        }

        public Criteria andPayPiPriceBetween(Long value1, Long value2) {
            addCriterion("pay_pi_price between", value1, value2, "payPiPrice");
            return (Criteria) this;
        }

        public Criteria andPayPiPriceNotBetween(Long value1, Long value2) {
            addCriterion("pay_pi_price not between", value1, value2, "payPiPrice");
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