package com.xj.domain.contract;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class SalesContractQuery {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Integer pageNo = 1;

    protected Integer startRow;

    protected Integer pageSize = 10;

    protected String fields;

    public SalesContractQuery() {
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

        public Criteria andScIdIsNull() {
            addCriterion("sc_id is null");
            return (Criteria) this;
        }

        public Criteria andScIdIsNotNull() {
            addCriterion("sc_id is not null");
            return (Criteria) this;
        }

        public Criteria andScIdEqualTo(String value) {
            addCriterion("sc_id =", value, "scId");
            return (Criteria) this;
        }

        public Criteria andScIdNotEqualTo(String value) {
            addCriterion("sc_id <>", value, "scId");
            return (Criteria) this;
        }

        public Criteria andScIdGreaterThan(String value) {
            addCriterion("sc_id >", value, "scId");
            return (Criteria) this;
        }

        public Criteria andScIdGreaterThanOrEqualTo(String value) {
            addCriterion("sc_id >=", value, "scId");
            return (Criteria) this;
        }

        public Criteria andScIdLessThan(String value) {
            addCriterion("sc_id <", value, "scId");
            return (Criteria) this;
        }

        public Criteria andScIdLessThanOrEqualTo(String value) {
            addCriterion("sc_id <=", value, "scId");
            return (Criteria) this;
        }

        public Criteria andScIdLike(String value) {
            addCriterion("sc_id like", value, "scId");
            return (Criteria) this;
        }

        public Criteria andScIdNotLike(String value) {
            addCriterion("sc_id not like", value, "scId");
            return (Criteria) this;
        }

        public Criteria andScIdIn(List<String> values) {
            addCriterion("sc_id in", values, "scId");
            return (Criteria) this;
        }

        public Criteria andScIdNotIn(List<String> values) {
            addCriterion("sc_id not in", values, "scId");
            return (Criteria) this;
        }

        public Criteria andScIdBetween(String value1, String value2) {
            addCriterion("sc_id between", value1, value2, "scId");
            return (Criteria) this;
        }

        public Criteria andScIdNotBetween(String value1, String value2) {
            addCriterion("sc_id not between", value1, value2, "scId");
            return (Criteria) this;
        }

        public Criteria andScSelleridIsNull() {
            addCriterion("sc_sellerId is null");
            return (Criteria) this;
        }

        public Criteria andScSelleridIsNotNull() {
            addCriterion("sc_sellerId is not null");
            return (Criteria) this;
        }

        public Criteria andScSelleridEqualTo(String value) {
            addCriterion("sc_sellerId =", value, "scSellerid");
            return (Criteria) this;
        }

        public Criteria andScSelleridNotEqualTo(String value) {
            addCriterion("sc_sellerId <>", value, "scSellerid");
            return (Criteria) this;
        }

        public Criteria andScSelleridGreaterThan(String value) {
            addCriterion("sc_sellerId >", value, "scSellerid");
            return (Criteria) this;
        }

        public Criteria andScSelleridGreaterThanOrEqualTo(String value) {
            addCriterion("sc_sellerId >=", value, "scSellerid");
            return (Criteria) this;
        }

        public Criteria andScSelleridLessThan(String value) {
            addCriterion("sc_sellerId <", value, "scSellerid");
            return (Criteria) this;
        }

        public Criteria andScSelleridLessThanOrEqualTo(String value) {
            addCriterion("sc_sellerId <=", value, "scSellerid");
            return (Criteria) this;
        }

        public Criteria andScSelleridLike(String value) {
            addCriterion("sc_sellerId like", value, "scSellerid");
            return (Criteria) this;
        }

        public Criteria andScSelleridNotLike(String value) {
            addCriterion("sc_sellerId not like", value, "scSellerid");
            return (Criteria) this;
        }

        public Criteria andScSelleridIn(List<String> values) {
            addCriterion("sc_sellerId in", values, "scSellerid");
            return (Criteria) this;
        }

        public Criteria andScSelleridNotIn(List<String> values) {
            addCriterion("sc_sellerId not in", values, "scSellerid");
            return (Criteria) this;
        }

        public Criteria andScSelleridBetween(String value1, String value2) {
            addCriterion("sc_sellerId between", value1, value2, "scSellerid");
            return (Criteria) this;
        }

        public Criteria andScSelleridNotBetween(String value1, String value2) {
            addCriterion("sc_sellerId not between", value1, value2, "scSellerid");
            return (Criteria) this;
        }

        public Criteria andScSelleraddressIsNull() {
            addCriterion("sc_sellerAddress is null");
            return (Criteria) this;
        }

        public Criteria andScSelleraddressIsNotNull() {
            addCriterion("sc_sellerAddress is not null");
            return (Criteria) this;
        }

        public Criteria andScSelleraddressEqualTo(String value) {
            addCriterion("sc_sellerAddress =", value, "scSelleraddress");
            return (Criteria) this;
        }

        public Criteria andScSelleraddressNotEqualTo(String value) {
            addCriterion("sc_sellerAddress <>", value, "scSelleraddress");
            return (Criteria) this;
        }

        public Criteria andScSelleraddressGreaterThan(String value) {
            addCriterion("sc_sellerAddress >", value, "scSelleraddress");
            return (Criteria) this;
        }

        public Criteria andScSelleraddressGreaterThanOrEqualTo(String value) {
            addCriterion("sc_sellerAddress >=", value, "scSelleraddress");
            return (Criteria) this;
        }

        public Criteria andScSelleraddressLessThan(String value) {
            addCriterion("sc_sellerAddress <", value, "scSelleraddress");
            return (Criteria) this;
        }

        public Criteria andScSelleraddressLessThanOrEqualTo(String value) {
            addCriterion("sc_sellerAddress <=", value, "scSelleraddress");
            return (Criteria) this;
        }

        public Criteria andScSelleraddressLike(String value) {
            addCriterion("sc_sellerAddress like", value, "scSelleraddress");
            return (Criteria) this;
        }

        public Criteria andScSelleraddressNotLike(String value) {
            addCriterion("sc_sellerAddress not like", value, "scSelleraddress");
            return (Criteria) this;
        }

        public Criteria andScSelleraddressIn(List<String> values) {
            addCriterion("sc_sellerAddress in", values, "scSelleraddress");
            return (Criteria) this;
        }

        public Criteria andScSelleraddressNotIn(List<String> values) {
            addCriterion("sc_sellerAddress not in", values, "scSelleraddress");
            return (Criteria) this;
        }

        public Criteria andScSelleraddressBetween(String value1, String value2) {
            addCriterion("sc_sellerAddress between", value1, value2, "scSelleraddress");
            return (Criteria) this;
        }

        public Criteria andScSelleraddressNotBetween(String value1, String value2) {
            addCriterion("sc_sellerAddress not between", value1, value2, "scSelleraddress");
            return (Criteria) this;
        }

        public Criteria andScSellercorporaterepresentativeIsNull() {
            addCriterion("sc_sellerCorporateRepresentative is null");
            return (Criteria) this;
        }

        public Criteria andScSellercorporaterepresentativeIsNotNull() {
            addCriterion("sc_sellerCorporateRepresentative is not null");
            return (Criteria) this;
        }

        public Criteria andScSellercorporaterepresentativeEqualTo(String value) {
            addCriterion("sc_sellerCorporateRepresentative =", value, "scSellercorporaterepresentative");
            return (Criteria) this;
        }

        public Criteria andScSellercorporaterepresentativeNotEqualTo(String value) {
            addCriterion("sc_sellerCorporateRepresentative <>", value, "scSellercorporaterepresentative");
            return (Criteria) this;
        }

        public Criteria andScSellercorporaterepresentativeGreaterThan(String value) {
            addCriterion("sc_sellerCorporateRepresentative >", value, "scSellercorporaterepresentative");
            return (Criteria) this;
        }

        public Criteria andScSellercorporaterepresentativeGreaterThanOrEqualTo(String value) {
            addCriterion("sc_sellerCorporateRepresentative >=", value, "scSellercorporaterepresentative");
            return (Criteria) this;
        }

        public Criteria andScSellercorporaterepresentativeLessThan(String value) {
            addCriterion("sc_sellerCorporateRepresentative <", value, "scSellercorporaterepresentative");
            return (Criteria) this;
        }

        public Criteria andScSellercorporaterepresentativeLessThanOrEqualTo(String value) {
            addCriterion("sc_sellerCorporateRepresentative <=", value, "scSellercorporaterepresentative");
            return (Criteria) this;
        }

        public Criteria andScSellercorporaterepresentativeLike(String value) {
            addCriterion("sc_sellerCorporateRepresentative like", value, "scSellercorporaterepresentative");
            return (Criteria) this;
        }

        public Criteria andScSellercorporaterepresentativeNotLike(String value) {
            addCriterion("sc_sellerCorporateRepresentative not like", value, "scSellercorporaterepresentative");
            return (Criteria) this;
        }

        public Criteria andScSellercorporaterepresentativeIn(List<String> values) {
            addCriterion("sc_sellerCorporateRepresentative in", values, "scSellercorporaterepresentative");
            return (Criteria) this;
        }

        public Criteria andScSellercorporaterepresentativeNotIn(List<String> values) {
            addCriterion("sc_sellerCorporateRepresentative not in", values, "scSellercorporaterepresentative");
            return (Criteria) this;
        }

        public Criteria andScSellercorporaterepresentativeBetween(String value1, String value2) {
            addCriterion("sc_sellerCorporateRepresentative between", value1, value2, "scSellercorporaterepresentative");
            return (Criteria) this;
        }

        public Criteria andScSellercorporaterepresentativeNotBetween(String value1, String value2) {
            addCriterion("sc_sellerCorporateRepresentative not between", value1, value2, "scSellercorporaterepresentative");
            return (Criteria) this;
        }

        public Criteria andScSelleragentIsNull() {
            addCriterion("sc_sellerAgent is null");
            return (Criteria) this;
        }

        public Criteria andScSelleragentIsNotNull() {
            addCriterion("sc_sellerAgent is not null");
            return (Criteria) this;
        }

        public Criteria andScSelleragentEqualTo(String value) {
            addCriterion("sc_sellerAgent =", value, "scSelleragent");
            return (Criteria) this;
        }

        public Criteria andScSelleragentNotEqualTo(String value) {
            addCriterion("sc_sellerAgent <>", value, "scSelleragent");
            return (Criteria) this;
        }

        public Criteria andScSelleragentGreaterThan(String value) {
            addCriterion("sc_sellerAgent >", value, "scSelleragent");
            return (Criteria) this;
        }

        public Criteria andScSelleragentGreaterThanOrEqualTo(String value) {
            addCriterion("sc_sellerAgent >=", value, "scSelleragent");
            return (Criteria) this;
        }

        public Criteria andScSelleragentLessThan(String value) {
            addCriterion("sc_sellerAgent <", value, "scSelleragent");
            return (Criteria) this;
        }

        public Criteria andScSelleragentLessThanOrEqualTo(String value) {
            addCriterion("sc_sellerAgent <=", value, "scSelleragent");
            return (Criteria) this;
        }

        public Criteria andScSelleragentLike(String value) {
            addCriterion("sc_sellerAgent like", value, "scSelleragent");
            return (Criteria) this;
        }

        public Criteria andScSelleragentNotLike(String value) {
            addCriterion("sc_sellerAgent not like", value, "scSelleragent");
            return (Criteria) this;
        }

        public Criteria andScSelleragentIn(List<String> values) {
            addCriterion("sc_sellerAgent in", values, "scSelleragent");
            return (Criteria) this;
        }

        public Criteria andScSelleragentNotIn(List<String> values) {
            addCriterion("sc_sellerAgent not in", values, "scSelleragent");
            return (Criteria) this;
        }

        public Criteria andScSelleragentBetween(String value1, String value2) {
            addCriterion("sc_sellerAgent between", value1, value2, "scSelleragent");
            return (Criteria) this;
        }

        public Criteria andScSelleragentNotBetween(String value1, String value2) {
            addCriterion("sc_sellerAgent not between", value1, value2, "scSelleragent");
            return (Criteria) this;
        }

        public Criteria andScSelleropeningbankIsNull() {
            addCriterion("sc_sellerOpeningBank is null");
            return (Criteria) this;
        }

        public Criteria andScSelleropeningbankIsNotNull() {
            addCriterion("sc_sellerOpeningBank is not null");
            return (Criteria) this;
        }

        public Criteria andScSelleropeningbankEqualTo(String value) {
            addCriterion("sc_sellerOpeningBank =", value, "scSelleropeningbank");
            return (Criteria) this;
        }

        public Criteria andScSelleropeningbankNotEqualTo(String value) {
            addCriterion("sc_sellerOpeningBank <>", value, "scSelleropeningbank");
            return (Criteria) this;
        }

        public Criteria andScSelleropeningbankGreaterThan(String value) {
            addCriterion("sc_sellerOpeningBank >", value, "scSelleropeningbank");
            return (Criteria) this;
        }

        public Criteria andScSelleropeningbankGreaterThanOrEqualTo(String value) {
            addCriterion("sc_sellerOpeningBank >=", value, "scSelleropeningbank");
            return (Criteria) this;
        }

        public Criteria andScSelleropeningbankLessThan(String value) {
            addCriterion("sc_sellerOpeningBank <", value, "scSelleropeningbank");
            return (Criteria) this;
        }

        public Criteria andScSelleropeningbankLessThanOrEqualTo(String value) {
            addCriterion("sc_sellerOpeningBank <=", value, "scSelleropeningbank");
            return (Criteria) this;
        }

        public Criteria andScSelleropeningbankLike(String value) {
            addCriterion("sc_sellerOpeningBank like", value, "scSelleropeningbank");
            return (Criteria) this;
        }

        public Criteria andScSelleropeningbankNotLike(String value) {
            addCriterion("sc_sellerOpeningBank not like", value, "scSelleropeningbank");
            return (Criteria) this;
        }

        public Criteria andScSelleropeningbankIn(List<String> values) {
            addCriterion("sc_sellerOpeningBank in", values, "scSelleropeningbank");
            return (Criteria) this;
        }

        public Criteria andScSelleropeningbankNotIn(List<String> values) {
            addCriterion("sc_sellerOpeningBank not in", values, "scSelleropeningbank");
            return (Criteria) this;
        }

        public Criteria andScSelleropeningbankBetween(String value1, String value2) {
            addCriterion("sc_sellerOpeningBank between", value1, value2, "scSelleropeningbank");
            return (Criteria) this;
        }

        public Criteria andScSelleropeningbankNotBetween(String value1, String value2) {
            addCriterion("sc_sellerOpeningBank not between", value1, value2, "scSelleropeningbank");
            return (Criteria) this;
        }

        public Criteria andScSelleraccountnnmberIsNull() {
            addCriterion("sc_sellerAccountnNmber is null");
            return (Criteria) this;
        }

        public Criteria andScSelleraccountnnmberIsNotNull() {
            addCriterion("sc_sellerAccountnNmber is not null");
            return (Criteria) this;
        }

        public Criteria andScSelleraccountnnmberEqualTo(String value) {
            addCriterion("sc_sellerAccountnNmber =", value, "scSelleraccountnnmber");
            return (Criteria) this;
        }

        public Criteria andScSelleraccountnnmberNotEqualTo(String value) {
            addCriterion("sc_sellerAccountnNmber <>", value, "scSelleraccountnnmber");
            return (Criteria) this;
        }

        public Criteria andScSelleraccountnnmberGreaterThan(String value) {
            addCriterion("sc_sellerAccountnNmber >", value, "scSelleraccountnnmber");
            return (Criteria) this;
        }

        public Criteria andScSelleraccountnnmberGreaterThanOrEqualTo(String value) {
            addCriterion("sc_sellerAccountnNmber >=", value, "scSelleraccountnnmber");
            return (Criteria) this;
        }

        public Criteria andScSelleraccountnnmberLessThan(String value) {
            addCriterion("sc_sellerAccountnNmber <", value, "scSelleraccountnnmber");
            return (Criteria) this;
        }

        public Criteria andScSelleraccountnnmberLessThanOrEqualTo(String value) {
            addCriterion("sc_sellerAccountnNmber <=", value, "scSelleraccountnnmber");
            return (Criteria) this;
        }

        public Criteria andScSelleraccountnnmberLike(String value) {
            addCriterion("sc_sellerAccountnNmber like", value, "scSelleraccountnnmber");
            return (Criteria) this;
        }

        public Criteria andScSelleraccountnnmberNotLike(String value) {
            addCriterion("sc_sellerAccountnNmber not like", value, "scSelleraccountnnmber");
            return (Criteria) this;
        }

        public Criteria andScSelleraccountnnmberIn(List<String> values) {
            addCriterion("sc_sellerAccountnNmber in", values, "scSelleraccountnnmber");
            return (Criteria) this;
        }

        public Criteria andScSelleraccountnnmberNotIn(List<String> values) {
            addCriterion("sc_sellerAccountnNmber not in", values, "scSelleraccountnnmber");
            return (Criteria) this;
        }

        public Criteria andScSelleraccountnnmberBetween(String value1, String value2) {
            addCriterion("sc_sellerAccountnNmber between", value1, value2, "scSelleraccountnnmber");
            return (Criteria) this;
        }

        public Criteria andScSelleraccountnnmberNotBetween(String value1, String value2) {
            addCriterion("sc_sellerAccountnNmber not between", value1, value2, "scSelleraccountnnmber");
            return (Criteria) this;
        }

        public Criteria andScSellerdutyparagraphIsNull() {
            addCriterion("sc_sellerDutyParagraph is null");
            return (Criteria) this;
        }

        public Criteria andScSellerdutyparagraphIsNotNull() {
            addCriterion("sc_sellerDutyParagraph is not null");
            return (Criteria) this;
        }

        public Criteria andScSellerdutyparagraphEqualTo(String value) {
            addCriterion("sc_sellerDutyParagraph =", value, "scSellerdutyparagraph");
            return (Criteria) this;
        }

        public Criteria andScSellerdutyparagraphNotEqualTo(String value) {
            addCriterion("sc_sellerDutyParagraph <>", value, "scSellerdutyparagraph");
            return (Criteria) this;
        }

        public Criteria andScSellerdutyparagraphGreaterThan(String value) {
            addCriterion("sc_sellerDutyParagraph >", value, "scSellerdutyparagraph");
            return (Criteria) this;
        }

        public Criteria andScSellerdutyparagraphGreaterThanOrEqualTo(String value) {
            addCriterion("sc_sellerDutyParagraph >=", value, "scSellerdutyparagraph");
            return (Criteria) this;
        }

        public Criteria andScSellerdutyparagraphLessThan(String value) {
            addCriterion("sc_sellerDutyParagraph <", value, "scSellerdutyparagraph");
            return (Criteria) this;
        }

        public Criteria andScSellerdutyparagraphLessThanOrEqualTo(String value) {
            addCriterion("sc_sellerDutyParagraph <=", value, "scSellerdutyparagraph");
            return (Criteria) this;
        }

        public Criteria andScSellerdutyparagraphLike(String value) {
            addCriterion("sc_sellerDutyParagraph like", value, "scSellerdutyparagraph");
            return (Criteria) this;
        }

        public Criteria andScSellerdutyparagraphNotLike(String value) {
            addCriterion("sc_sellerDutyParagraph not like", value, "scSellerdutyparagraph");
            return (Criteria) this;
        }

        public Criteria andScSellerdutyparagraphIn(List<String> values) {
            addCriterion("sc_sellerDutyParagraph in", values, "scSellerdutyparagraph");
            return (Criteria) this;
        }

        public Criteria andScSellerdutyparagraphNotIn(List<String> values) {
            addCriterion("sc_sellerDutyParagraph not in", values, "scSellerdutyparagraph");
            return (Criteria) this;
        }

        public Criteria andScSellerdutyparagraphBetween(String value1, String value2) {
            addCriterion("sc_sellerDutyParagraph between", value1, value2, "scSellerdutyparagraph");
            return (Criteria) this;
        }

        public Criteria andScSellerdutyparagraphNotBetween(String value1, String value2) {
            addCriterion("sc_sellerDutyParagraph not between", value1, value2, "scSellerdutyparagraph");
            return (Criteria) this;
        }

        public Criteria andScSellertelephoneIsNull() {
            addCriterion("sc_sellerTelephone is null");
            return (Criteria) this;
        }

        public Criteria andScSellertelephoneIsNotNull() {
            addCriterion("sc_sellerTelephone is not null");
            return (Criteria) this;
        }

        public Criteria andScSellertelephoneEqualTo(String value) {
            addCriterion("sc_sellerTelephone =", value, "scSellertelephone");
            return (Criteria) this;
        }

        public Criteria andScSellertelephoneNotEqualTo(String value) {
            addCriterion("sc_sellerTelephone <>", value, "scSellertelephone");
            return (Criteria) this;
        }

        public Criteria andScSellertelephoneGreaterThan(String value) {
            addCriterion("sc_sellerTelephone >", value, "scSellertelephone");
            return (Criteria) this;
        }

        public Criteria andScSellertelephoneGreaterThanOrEqualTo(String value) {
            addCriterion("sc_sellerTelephone >=", value, "scSellertelephone");
            return (Criteria) this;
        }

        public Criteria andScSellertelephoneLessThan(String value) {
            addCriterion("sc_sellerTelephone <", value, "scSellertelephone");
            return (Criteria) this;
        }

        public Criteria andScSellertelephoneLessThanOrEqualTo(String value) {
            addCriterion("sc_sellerTelephone <=", value, "scSellertelephone");
            return (Criteria) this;
        }

        public Criteria andScSellertelephoneLike(String value) {
            addCriterion("sc_sellerTelephone like", value, "scSellertelephone");
            return (Criteria) this;
        }

        public Criteria andScSellertelephoneNotLike(String value) {
            addCriterion("sc_sellerTelephone not like", value, "scSellertelephone");
            return (Criteria) this;
        }

        public Criteria andScSellertelephoneIn(List<String> values) {
            addCriterion("sc_sellerTelephone in", values, "scSellertelephone");
            return (Criteria) this;
        }

        public Criteria andScSellertelephoneNotIn(List<String> values) {
            addCriterion("sc_sellerTelephone not in", values, "scSellertelephone");
            return (Criteria) this;
        }

        public Criteria andScSellertelephoneBetween(String value1, String value2) {
            addCriterion("sc_sellerTelephone between", value1, value2, "scSellertelephone");
            return (Criteria) this;
        }

        public Criteria andScSellertelephoneNotBetween(String value1, String value2) {
            addCriterion("sc_sellerTelephone not between", value1, value2, "scSellertelephone");
            return (Criteria) this;
        }

        public Criteria andScSellerfaxIsNull() {
            addCriterion("sc_sellerFax is null");
            return (Criteria) this;
        }

        public Criteria andScSellerfaxIsNotNull() {
            addCriterion("sc_sellerFax is not null");
            return (Criteria) this;
        }

        public Criteria andScSellerfaxEqualTo(String value) {
            addCriterion("sc_sellerFax =", value, "scSellerfax");
            return (Criteria) this;
        }

        public Criteria andScSellerfaxNotEqualTo(String value) {
            addCriterion("sc_sellerFax <>", value, "scSellerfax");
            return (Criteria) this;
        }

        public Criteria andScSellerfaxGreaterThan(String value) {
            addCriterion("sc_sellerFax >", value, "scSellerfax");
            return (Criteria) this;
        }

        public Criteria andScSellerfaxGreaterThanOrEqualTo(String value) {
            addCriterion("sc_sellerFax >=", value, "scSellerfax");
            return (Criteria) this;
        }

        public Criteria andScSellerfaxLessThan(String value) {
            addCriterion("sc_sellerFax <", value, "scSellerfax");
            return (Criteria) this;
        }

        public Criteria andScSellerfaxLessThanOrEqualTo(String value) {
            addCriterion("sc_sellerFax <=", value, "scSellerfax");
            return (Criteria) this;
        }

        public Criteria andScSellerfaxLike(String value) {
            addCriterion("sc_sellerFax like", value, "scSellerfax");
            return (Criteria) this;
        }

        public Criteria andScSellerfaxNotLike(String value) {
            addCriterion("sc_sellerFax not like", value, "scSellerfax");
            return (Criteria) this;
        }

        public Criteria andScSellerfaxIn(List<String> values) {
            addCriterion("sc_sellerFax in", values, "scSellerfax");
            return (Criteria) this;
        }

        public Criteria andScSellerfaxNotIn(List<String> values) {
            addCriterion("sc_sellerFax not in", values, "scSellerfax");
            return (Criteria) this;
        }

        public Criteria andScSellerfaxBetween(String value1, String value2) {
            addCriterion("sc_sellerFax between", value1, value2, "scSellerfax");
            return (Criteria) this;
        }

        public Criteria andScSellerfaxNotBetween(String value1, String value2) {
            addCriterion("sc_sellerFax not between", value1, value2, "scSellerfax");
            return (Criteria) this;
        }

        public Criteria andScSellerzipcodeIsNull() {
            addCriterion("sc_sellerZipCode is null");
            return (Criteria) this;
        }

        public Criteria andScSellerzipcodeIsNotNull() {
            addCriterion("sc_sellerZipCode is not null");
            return (Criteria) this;
        }

        public Criteria andScSellerzipcodeEqualTo(Integer value) {
            addCriterion("sc_sellerZipCode =", value, "scSellerzipcode");
            return (Criteria) this;
        }

        public Criteria andScSellerzipcodeNotEqualTo(Integer value) {
            addCriterion("sc_sellerZipCode <>", value, "scSellerzipcode");
            return (Criteria) this;
        }

        public Criteria andScSellerzipcodeGreaterThan(Integer value) {
            addCriterion("sc_sellerZipCode >", value, "scSellerzipcode");
            return (Criteria) this;
        }

        public Criteria andScSellerzipcodeGreaterThanOrEqualTo(Integer value) {
            addCriterion("sc_sellerZipCode >=", value, "scSellerzipcode");
            return (Criteria) this;
        }

        public Criteria andScSellerzipcodeLessThan(Integer value) {
            addCriterion("sc_sellerZipCode <", value, "scSellerzipcode");
            return (Criteria) this;
        }

        public Criteria andScSellerzipcodeLessThanOrEqualTo(Integer value) {
            addCriterion("sc_sellerZipCode <=", value, "scSellerzipcode");
            return (Criteria) this;
        }

        public Criteria andScSellerzipcodeIn(List<Integer> values) {
            addCriterion("sc_sellerZipCode in", values, "scSellerzipcode");
            return (Criteria) this;
        }

        public Criteria andScSellerzipcodeNotIn(List<Integer> values) {
            addCriterion("sc_sellerZipCode not in", values, "scSellerzipcode");
            return (Criteria) this;
        }

        public Criteria andScSellerzipcodeBetween(Integer value1, Integer value2) {
            addCriterion("sc_sellerZipCode between", value1, value2, "scSellerzipcode");
            return (Criteria) this;
        }

        public Criteria andScSellerzipcodeNotBetween(Integer value1, Integer value2) {
            addCriterion("sc_sellerZipCode not between", value1, value2, "scSellerzipcode");
            return (Criteria) this;
        }

        public Criteria andScSellertelegraphIsNull() {
            addCriterion("sc_sellerTelegraph is null");
            return (Criteria) this;
        }

        public Criteria andScSellertelegraphIsNotNull() {
            addCriterion("sc_sellerTelegraph is not null");
            return (Criteria) this;
        }

        public Criteria andScSellertelegraphEqualTo(String value) {
            addCriterion("sc_sellerTelegraph =", value, "scSellertelegraph");
            return (Criteria) this;
        }

        public Criteria andScSellertelegraphNotEqualTo(String value) {
            addCriterion("sc_sellerTelegraph <>", value, "scSellertelegraph");
            return (Criteria) this;
        }

        public Criteria andScSellertelegraphGreaterThan(String value) {
            addCriterion("sc_sellerTelegraph >", value, "scSellertelegraph");
            return (Criteria) this;
        }

        public Criteria andScSellertelegraphGreaterThanOrEqualTo(String value) {
            addCriterion("sc_sellerTelegraph >=", value, "scSellertelegraph");
            return (Criteria) this;
        }

        public Criteria andScSellertelegraphLessThan(String value) {
            addCriterion("sc_sellerTelegraph <", value, "scSellertelegraph");
            return (Criteria) this;
        }

        public Criteria andScSellertelegraphLessThanOrEqualTo(String value) {
            addCriterion("sc_sellerTelegraph <=", value, "scSellertelegraph");
            return (Criteria) this;
        }

        public Criteria andScSellertelegraphLike(String value) {
            addCriterion("sc_sellerTelegraph like", value, "scSellertelegraph");
            return (Criteria) this;
        }

        public Criteria andScSellertelegraphNotLike(String value) {
            addCriterion("sc_sellerTelegraph not like", value, "scSellertelegraph");
            return (Criteria) this;
        }

        public Criteria andScSellertelegraphIn(List<String> values) {
            addCriterion("sc_sellerTelegraph in", values, "scSellertelegraph");
            return (Criteria) this;
        }

        public Criteria andScSellertelegraphNotIn(List<String> values) {
            addCriterion("sc_sellerTelegraph not in", values, "scSellertelegraph");
            return (Criteria) this;
        }

        public Criteria andScSellertelegraphBetween(String value1, String value2) {
            addCriterion("sc_sellerTelegraph between", value1, value2, "scSellertelegraph");
            return (Criteria) this;
        }

        public Criteria andScSellertelegraphNotBetween(String value1, String value2) {
            addCriterion("sc_sellerTelegraph not between", value1, value2, "scSellertelegraph");
            return (Criteria) this;
        }

        public Criteria andScBuyerIsNull() {
            addCriterion("sc_buyer is null");
            return (Criteria) this;
        }

        public Criteria andScBuyerIsNotNull() {
            addCriterion("sc_buyer is not null");
            return (Criteria) this;
        }

        public Criteria andScBuyerEqualTo(Integer value) {
            addCriterion("sc_buyer =", value, "scBuyer");
            return (Criteria) this;
        }

        public Criteria andScBuyerNotEqualTo(Integer value) {
            addCriterion("sc_buyer <>", value, "scBuyer");
            return (Criteria) this;
        }

        public Criteria andScBuyerGreaterThan(Integer value) {
            addCriterion("sc_buyer >", value, "scBuyer");
            return (Criteria) this;
        }

        public Criteria andScBuyerGreaterThanOrEqualTo(Integer value) {
            addCriterion("sc_buyer >=", value, "scBuyer");
            return (Criteria) this;
        }

        public Criteria andScBuyerLessThan(Integer value) {
            addCriterion("sc_buyer <", value, "scBuyer");
            return (Criteria) this;
        }

        public Criteria andScBuyerLessThanOrEqualTo(Integer value) {
            addCriterion("sc_buyer <=", value, "scBuyer");
            return (Criteria) this;
        }

        public Criteria andScBuyerIn(List<Integer> values) {
            addCriterion("sc_buyer in", values, "scBuyer");
            return (Criteria) this;
        }

        public Criteria andScBuyerNotIn(List<Integer> values) {
            addCriterion("sc_buyer not in", values, "scBuyer");
            return (Criteria) this;
        }

        public Criteria andScBuyerBetween(Integer value1, Integer value2) {
            addCriterion("sc_buyer between", value1, value2, "scBuyer");
            return (Criteria) this;
        }

        public Criteria andScBuyerNotBetween(Integer value1, Integer value2) {
            addCriterion("sc_buyer not between", value1, value2, "scBuyer");
            return (Criteria) this;
        }

        public Criteria andScBuyeraddressIsNull() {
            addCriterion("sc_buyerAddress is null");
            return (Criteria) this;
        }

        public Criteria andScBuyeraddressIsNotNull() {
            addCriterion("sc_buyerAddress is not null");
            return (Criteria) this;
        }

        public Criteria andScBuyeraddressEqualTo(String value) {
            addCriterion("sc_buyerAddress =", value, "scBuyeraddress");
            return (Criteria) this;
        }

        public Criteria andScBuyeraddressNotEqualTo(String value) {
            addCriterion("sc_buyerAddress <>", value, "scBuyeraddress");
            return (Criteria) this;
        }

        public Criteria andScBuyeraddressGreaterThan(String value) {
            addCriterion("sc_buyerAddress >", value, "scBuyeraddress");
            return (Criteria) this;
        }

        public Criteria andScBuyeraddressGreaterThanOrEqualTo(String value) {
            addCriterion("sc_buyerAddress >=", value, "scBuyeraddress");
            return (Criteria) this;
        }

        public Criteria andScBuyeraddressLessThan(String value) {
            addCriterion("sc_buyerAddress <", value, "scBuyeraddress");
            return (Criteria) this;
        }

        public Criteria andScBuyeraddressLessThanOrEqualTo(String value) {
            addCriterion("sc_buyerAddress <=", value, "scBuyeraddress");
            return (Criteria) this;
        }

        public Criteria andScBuyeraddressLike(String value) {
            addCriterion("sc_buyerAddress like", value, "scBuyeraddress");
            return (Criteria) this;
        }

        public Criteria andScBuyeraddressNotLike(String value) {
            addCriterion("sc_buyerAddress not like", value, "scBuyeraddress");
            return (Criteria) this;
        }

        public Criteria andScBuyeraddressIn(List<String> values) {
            addCriterion("sc_buyerAddress in", values, "scBuyeraddress");
            return (Criteria) this;
        }

        public Criteria andScBuyeraddressNotIn(List<String> values) {
            addCriterion("sc_buyerAddress not in", values, "scBuyeraddress");
            return (Criteria) this;
        }

        public Criteria andScBuyeraddressBetween(String value1, String value2) {
            addCriterion("sc_buyerAddress between", value1, value2, "scBuyeraddress");
            return (Criteria) this;
        }

        public Criteria andScBuyeraddressNotBetween(String value1, String value2) {
            addCriterion("sc_buyerAddress not between", value1, value2, "scBuyeraddress");
            return (Criteria) this;
        }

        public Criteria andScBuyercorporaterepresentativeIsNull() {
            addCriterion("sc_buyerCorporateRepresentative is null");
            return (Criteria) this;
        }

        public Criteria andScBuyercorporaterepresentativeIsNotNull() {
            addCriterion("sc_buyerCorporateRepresentative is not null");
            return (Criteria) this;
        }

        public Criteria andScBuyercorporaterepresentativeEqualTo(String value) {
            addCriterion("sc_buyerCorporateRepresentative =", value, "scBuyercorporaterepresentative");
            return (Criteria) this;
        }

        public Criteria andScBuyercorporaterepresentativeNotEqualTo(String value) {
            addCriterion("sc_buyerCorporateRepresentative <>", value, "scBuyercorporaterepresentative");
            return (Criteria) this;
        }

        public Criteria andScBuyercorporaterepresentativeGreaterThan(String value) {
            addCriterion("sc_buyerCorporateRepresentative >", value, "scBuyercorporaterepresentative");
            return (Criteria) this;
        }

        public Criteria andScBuyercorporaterepresentativeGreaterThanOrEqualTo(String value) {
            addCriterion("sc_buyerCorporateRepresentative >=", value, "scBuyercorporaterepresentative");
            return (Criteria) this;
        }

        public Criteria andScBuyercorporaterepresentativeLessThan(String value) {
            addCriterion("sc_buyerCorporateRepresentative <", value, "scBuyercorporaterepresentative");
            return (Criteria) this;
        }

        public Criteria andScBuyercorporaterepresentativeLessThanOrEqualTo(String value) {
            addCriterion("sc_buyerCorporateRepresentative <=", value, "scBuyercorporaterepresentative");
            return (Criteria) this;
        }

        public Criteria andScBuyercorporaterepresentativeLike(String value) {
            addCriterion("sc_buyerCorporateRepresentative like", value, "scBuyercorporaterepresentative");
            return (Criteria) this;
        }

        public Criteria andScBuyercorporaterepresentativeNotLike(String value) {
            addCriterion("sc_buyerCorporateRepresentative not like", value, "scBuyercorporaterepresentative");
            return (Criteria) this;
        }

        public Criteria andScBuyercorporaterepresentativeIn(List<String> values) {
            addCriterion("sc_buyerCorporateRepresentative in", values, "scBuyercorporaterepresentative");
            return (Criteria) this;
        }

        public Criteria andScBuyercorporaterepresentativeNotIn(List<String> values) {
            addCriterion("sc_buyerCorporateRepresentative not in", values, "scBuyercorporaterepresentative");
            return (Criteria) this;
        }

        public Criteria andScBuyercorporaterepresentativeBetween(String value1, String value2) {
            addCriterion("sc_buyerCorporateRepresentative between", value1, value2, "scBuyercorporaterepresentative");
            return (Criteria) this;
        }

        public Criteria andScBuyercorporaterepresentativeNotBetween(String value1, String value2) {
            addCriterion("sc_buyerCorporateRepresentative not between", value1, value2, "scBuyercorporaterepresentative");
            return (Criteria) this;
        }

        public Criteria andScBuyeragentIsNull() {
            addCriterion("sc_buyerAgent is null");
            return (Criteria) this;
        }

        public Criteria andScBuyeragentIsNotNull() {
            addCriterion("sc_buyerAgent is not null");
            return (Criteria) this;
        }

        public Criteria andScBuyeragentEqualTo(String value) {
            addCriterion("sc_buyerAgent =", value, "scBuyeragent");
            return (Criteria) this;
        }

        public Criteria andScBuyeragentNotEqualTo(String value) {
            addCriterion("sc_buyerAgent <>", value, "scBuyeragent");
            return (Criteria) this;
        }

        public Criteria andScBuyeragentGreaterThan(String value) {
            addCriterion("sc_buyerAgent >", value, "scBuyeragent");
            return (Criteria) this;
        }

        public Criteria andScBuyeragentGreaterThanOrEqualTo(String value) {
            addCriterion("sc_buyerAgent >=", value, "scBuyeragent");
            return (Criteria) this;
        }

        public Criteria andScBuyeragentLessThan(String value) {
            addCriterion("sc_buyerAgent <", value, "scBuyeragent");
            return (Criteria) this;
        }

        public Criteria andScBuyeragentLessThanOrEqualTo(String value) {
            addCriterion("sc_buyerAgent <=", value, "scBuyeragent");
            return (Criteria) this;
        }

        public Criteria andScBuyeragentLike(String value) {
            addCriterion("sc_buyerAgent like", value, "scBuyeragent");
            return (Criteria) this;
        }

        public Criteria andScBuyeragentNotLike(String value) {
            addCriterion("sc_buyerAgent not like", value, "scBuyeragent");
            return (Criteria) this;
        }

        public Criteria andScBuyeragentIn(List<String> values) {
            addCriterion("sc_buyerAgent in", values, "scBuyeragent");
            return (Criteria) this;
        }

        public Criteria andScBuyeragentNotIn(List<String> values) {
            addCriterion("sc_buyerAgent not in", values, "scBuyeragent");
            return (Criteria) this;
        }

        public Criteria andScBuyeragentBetween(String value1, String value2) {
            addCriterion("sc_buyerAgent between", value1, value2, "scBuyeragent");
            return (Criteria) this;
        }

        public Criteria andScBuyeragentNotBetween(String value1, String value2) {
            addCriterion("sc_buyerAgent not between", value1, value2, "scBuyeragent");
            return (Criteria) this;
        }

        public Criteria andScBuyeropeningbankIsNull() {
            addCriterion("sc_buyerOpeningBank is null");
            return (Criteria) this;
        }

        public Criteria andScBuyeropeningbankIsNotNull() {
            addCriterion("sc_buyerOpeningBank is not null");
            return (Criteria) this;
        }

        public Criteria andScBuyeropeningbankEqualTo(String value) {
            addCriterion("sc_buyerOpeningBank =", value, "scBuyeropeningbank");
            return (Criteria) this;
        }

        public Criteria andScBuyeropeningbankNotEqualTo(String value) {
            addCriterion("sc_buyerOpeningBank <>", value, "scBuyeropeningbank");
            return (Criteria) this;
        }

        public Criteria andScBuyeropeningbankGreaterThan(String value) {
            addCriterion("sc_buyerOpeningBank >", value, "scBuyeropeningbank");
            return (Criteria) this;
        }

        public Criteria andScBuyeropeningbankGreaterThanOrEqualTo(String value) {
            addCriterion("sc_buyerOpeningBank >=", value, "scBuyeropeningbank");
            return (Criteria) this;
        }

        public Criteria andScBuyeropeningbankLessThan(String value) {
            addCriterion("sc_buyerOpeningBank <", value, "scBuyeropeningbank");
            return (Criteria) this;
        }

        public Criteria andScBuyeropeningbankLessThanOrEqualTo(String value) {
            addCriterion("sc_buyerOpeningBank <=", value, "scBuyeropeningbank");
            return (Criteria) this;
        }

        public Criteria andScBuyeropeningbankLike(String value) {
            addCriterion("sc_buyerOpeningBank like", value, "scBuyeropeningbank");
            return (Criteria) this;
        }

        public Criteria andScBuyeropeningbankNotLike(String value) {
            addCriterion("sc_buyerOpeningBank not like", value, "scBuyeropeningbank");
            return (Criteria) this;
        }

        public Criteria andScBuyeropeningbankIn(List<String> values) {
            addCriterion("sc_buyerOpeningBank in", values, "scBuyeropeningbank");
            return (Criteria) this;
        }

        public Criteria andScBuyeropeningbankNotIn(List<String> values) {
            addCriterion("sc_buyerOpeningBank not in", values, "scBuyeropeningbank");
            return (Criteria) this;
        }

        public Criteria andScBuyeropeningbankBetween(String value1, String value2) {
            addCriterion("sc_buyerOpeningBank between", value1, value2, "scBuyeropeningbank");
            return (Criteria) this;
        }

        public Criteria andScBuyeropeningbankNotBetween(String value1, String value2) {
            addCriterion("sc_buyerOpeningBank not between", value1, value2, "scBuyeropeningbank");
            return (Criteria) this;
        }

        public Criteria andScBuyeraccountnumberIsNull() {
            addCriterion("sc_buyerAccountNumber is null");
            return (Criteria) this;
        }

        public Criteria andScBuyeraccountnumberIsNotNull() {
            addCriterion("sc_buyerAccountNumber is not null");
            return (Criteria) this;
        }

        public Criteria andScBuyeraccountnumberEqualTo(String value) {
            addCriterion("sc_buyerAccountNumber =", value, "scBuyeraccountnumber");
            return (Criteria) this;
        }

        public Criteria andScBuyeraccountnumberNotEqualTo(String value) {
            addCriterion("sc_buyerAccountNumber <>", value, "scBuyeraccountnumber");
            return (Criteria) this;
        }

        public Criteria andScBuyeraccountnumberGreaterThan(String value) {
            addCriterion("sc_buyerAccountNumber >", value, "scBuyeraccountnumber");
            return (Criteria) this;
        }

        public Criteria andScBuyeraccountnumberGreaterThanOrEqualTo(String value) {
            addCriterion("sc_buyerAccountNumber >=", value, "scBuyeraccountnumber");
            return (Criteria) this;
        }

        public Criteria andScBuyeraccountnumberLessThan(String value) {
            addCriterion("sc_buyerAccountNumber <", value, "scBuyeraccountnumber");
            return (Criteria) this;
        }

        public Criteria andScBuyeraccountnumberLessThanOrEqualTo(String value) {
            addCriterion("sc_buyerAccountNumber <=", value, "scBuyeraccountnumber");
            return (Criteria) this;
        }

        public Criteria andScBuyeraccountnumberLike(String value) {
            addCriterion("sc_buyerAccountNumber like", value, "scBuyeraccountnumber");
            return (Criteria) this;
        }

        public Criteria andScBuyeraccountnumberNotLike(String value) {
            addCriterion("sc_buyerAccountNumber not like", value, "scBuyeraccountnumber");
            return (Criteria) this;
        }

        public Criteria andScBuyeraccountnumberIn(List<String> values) {
            addCriterion("sc_buyerAccountNumber in", values, "scBuyeraccountnumber");
            return (Criteria) this;
        }

        public Criteria andScBuyeraccountnumberNotIn(List<String> values) {
            addCriterion("sc_buyerAccountNumber not in", values, "scBuyeraccountnumber");
            return (Criteria) this;
        }

        public Criteria andScBuyeraccountnumberBetween(String value1, String value2) {
            addCriterion("sc_buyerAccountNumber between", value1, value2, "scBuyeraccountnumber");
            return (Criteria) this;
        }

        public Criteria andScBuyeraccountnumberNotBetween(String value1, String value2) {
            addCriterion("sc_buyerAccountNumber not between", value1, value2, "scBuyeraccountnumber");
            return (Criteria) this;
        }

        public Criteria andScBuyerdutyparagraphIsNull() {
            addCriterion("sc_buyerDutyParagraph is null");
            return (Criteria) this;
        }

        public Criteria andScBuyerdutyparagraphIsNotNull() {
            addCriterion("sc_buyerDutyParagraph is not null");
            return (Criteria) this;
        }

        public Criteria andScBuyerdutyparagraphEqualTo(String value) {
            addCriterion("sc_buyerDutyParagraph =", value, "scBuyerdutyparagraph");
            return (Criteria) this;
        }

        public Criteria andScBuyerdutyparagraphNotEqualTo(String value) {
            addCriterion("sc_buyerDutyParagraph <>", value, "scBuyerdutyparagraph");
            return (Criteria) this;
        }

        public Criteria andScBuyerdutyparagraphGreaterThan(String value) {
            addCriterion("sc_buyerDutyParagraph >", value, "scBuyerdutyparagraph");
            return (Criteria) this;
        }

        public Criteria andScBuyerdutyparagraphGreaterThanOrEqualTo(String value) {
            addCriterion("sc_buyerDutyParagraph >=", value, "scBuyerdutyparagraph");
            return (Criteria) this;
        }

        public Criteria andScBuyerdutyparagraphLessThan(String value) {
            addCriterion("sc_buyerDutyParagraph <", value, "scBuyerdutyparagraph");
            return (Criteria) this;
        }

        public Criteria andScBuyerdutyparagraphLessThanOrEqualTo(String value) {
            addCriterion("sc_buyerDutyParagraph <=", value, "scBuyerdutyparagraph");
            return (Criteria) this;
        }

        public Criteria andScBuyerdutyparagraphLike(String value) {
            addCriterion("sc_buyerDutyParagraph like", value, "scBuyerdutyparagraph");
            return (Criteria) this;
        }

        public Criteria andScBuyerdutyparagraphNotLike(String value) {
            addCriterion("sc_buyerDutyParagraph not like", value, "scBuyerdutyparagraph");
            return (Criteria) this;
        }

        public Criteria andScBuyerdutyparagraphIn(List<String> values) {
            addCriterion("sc_buyerDutyParagraph in", values, "scBuyerdutyparagraph");
            return (Criteria) this;
        }

        public Criteria andScBuyerdutyparagraphNotIn(List<String> values) {
            addCriterion("sc_buyerDutyParagraph not in", values, "scBuyerdutyparagraph");
            return (Criteria) this;
        }

        public Criteria andScBuyerdutyparagraphBetween(String value1, String value2) {
            addCriterion("sc_buyerDutyParagraph between", value1, value2, "scBuyerdutyparagraph");
            return (Criteria) this;
        }

        public Criteria andScBuyerdutyparagraphNotBetween(String value1, String value2) {
            addCriterion("sc_buyerDutyParagraph not between", value1, value2, "scBuyerdutyparagraph");
            return (Criteria) this;
        }

        public Criteria andScBuyertelephoneIsNull() {
            addCriterion("sc_buyerTelephone is null");
            return (Criteria) this;
        }

        public Criteria andScBuyertelephoneIsNotNull() {
            addCriterion("sc_buyerTelephone is not null");
            return (Criteria) this;
        }

        public Criteria andScBuyertelephoneEqualTo(String value) {
            addCriterion("sc_buyerTelephone =", value, "scBuyertelephone");
            return (Criteria) this;
        }

        public Criteria andScBuyertelephoneNotEqualTo(String value) {
            addCriterion("sc_buyerTelephone <>", value, "scBuyertelephone");
            return (Criteria) this;
        }

        public Criteria andScBuyertelephoneGreaterThan(String value) {
            addCriterion("sc_buyerTelephone >", value, "scBuyertelephone");
            return (Criteria) this;
        }

        public Criteria andScBuyertelephoneGreaterThanOrEqualTo(String value) {
            addCriterion("sc_buyerTelephone >=", value, "scBuyertelephone");
            return (Criteria) this;
        }

        public Criteria andScBuyertelephoneLessThan(String value) {
            addCriterion("sc_buyerTelephone <", value, "scBuyertelephone");
            return (Criteria) this;
        }

        public Criteria andScBuyertelephoneLessThanOrEqualTo(String value) {
            addCriterion("sc_buyerTelephone <=", value, "scBuyertelephone");
            return (Criteria) this;
        }

        public Criteria andScBuyertelephoneLike(String value) {
            addCriterion("sc_buyerTelephone like", value, "scBuyertelephone");
            return (Criteria) this;
        }

        public Criteria andScBuyertelephoneNotLike(String value) {
            addCriterion("sc_buyerTelephone not like", value, "scBuyertelephone");
            return (Criteria) this;
        }

        public Criteria andScBuyertelephoneIn(List<String> values) {
            addCriterion("sc_buyerTelephone in", values, "scBuyertelephone");
            return (Criteria) this;
        }

        public Criteria andScBuyertelephoneNotIn(List<String> values) {
            addCriterion("sc_buyerTelephone not in", values, "scBuyertelephone");
            return (Criteria) this;
        }

        public Criteria andScBuyertelephoneBetween(String value1, String value2) {
            addCriterion("sc_buyerTelephone between", value1, value2, "scBuyertelephone");
            return (Criteria) this;
        }

        public Criteria andScBuyertelephoneNotBetween(String value1, String value2) {
            addCriterion("sc_buyerTelephone not between", value1, value2, "scBuyertelephone");
            return (Criteria) this;
        }

        public Criteria andScBuyerfaxIsNull() {
            addCriterion("sc_buyerFax is null");
            return (Criteria) this;
        }

        public Criteria andScBuyerfaxIsNotNull() {
            addCriterion("sc_buyerFax is not null");
            return (Criteria) this;
        }

        public Criteria andScBuyerfaxEqualTo(String value) {
            addCriterion("sc_buyerFax =", value, "scBuyerfax");
            return (Criteria) this;
        }

        public Criteria andScBuyerfaxNotEqualTo(String value) {
            addCriterion("sc_buyerFax <>", value, "scBuyerfax");
            return (Criteria) this;
        }

        public Criteria andScBuyerfaxGreaterThan(String value) {
            addCriterion("sc_buyerFax >", value, "scBuyerfax");
            return (Criteria) this;
        }

        public Criteria andScBuyerfaxGreaterThanOrEqualTo(String value) {
            addCriterion("sc_buyerFax >=", value, "scBuyerfax");
            return (Criteria) this;
        }

        public Criteria andScBuyerfaxLessThan(String value) {
            addCriterion("sc_buyerFax <", value, "scBuyerfax");
            return (Criteria) this;
        }

        public Criteria andScBuyerfaxLessThanOrEqualTo(String value) {
            addCriterion("sc_buyerFax <=", value, "scBuyerfax");
            return (Criteria) this;
        }

        public Criteria andScBuyerfaxLike(String value) {
            addCriterion("sc_buyerFax like", value, "scBuyerfax");
            return (Criteria) this;
        }

        public Criteria andScBuyerfaxNotLike(String value) {
            addCriterion("sc_buyerFax not like", value, "scBuyerfax");
            return (Criteria) this;
        }

        public Criteria andScBuyerfaxIn(List<String> values) {
            addCriterion("sc_buyerFax in", values, "scBuyerfax");
            return (Criteria) this;
        }

        public Criteria andScBuyerfaxNotIn(List<String> values) {
            addCriterion("sc_buyerFax not in", values, "scBuyerfax");
            return (Criteria) this;
        }

        public Criteria andScBuyerfaxBetween(String value1, String value2) {
            addCriterion("sc_buyerFax between", value1, value2, "scBuyerfax");
            return (Criteria) this;
        }

        public Criteria andScBuyerfaxNotBetween(String value1, String value2) {
            addCriterion("sc_buyerFax not between", value1, value2, "scBuyerfax");
            return (Criteria) this;
        }

        public Criteria andScBuyerzipcodeIsNull() {
            addCriterion("sc_buyerZipCode is null");
            return (Criteria) this;
        }

        public Criteria andScBuyerzipcodeIsNotNull() {
            addCriterion("sc_buyerZipCode is not null");
            return (Criteria) this;
        }

        public Criteria andScBuyerzipcodeEqualTo(String value) {
            addCriterion("sc_buyerZipCode =", value, "scBuyerzipcode");
            return (Criteria) this;
        }

        public Criteria andScBuyerzipcodeNotEqualTo(String value) {
            addCriterion("sc_buyerZipCode <>", value, "scBuyerzipcode");
            return (Criteria) this;
        }

        public Criteria andScBuyerzipcodeGreaterThan(String value) {
            addCriterion("sc_buyerZipCode >", value, "scBuyerzipcode");
            return (Criteria) this;
        }

        public Criteria andScBuyerzipcodeGreaterThanOrEqualTo(String value) {
            addCriterion("sc_buyerZipCode >=", value, "scBuyerzipcode");
            return (Criteria) this;
        }

        public Criteria andScBuyerzipcodeLessThan(String value) {
            addCriterion("sc_buyerZipCode <", value, "scBuyerzipcode");
            return (Criteria) this;
        }

        public Criteria andScBuyerzipcodeLessThanOrEqualTo(String value) {
            addCriterion("sc_buyerZipCode <=", value, "scBuyerzipcode");
            return (Criteria) this;
        }

        public Criteria andScBuyerzipcodeLike(String value) {
            addCriterion("sc_buyerZipCode like", value, "scBuyerzipcode");
            return (Criteria) this;
        }

        public Criteria andScBuyerzipcodeNotLike(String value) {
            addCriterion("sc_buyerZipCode not like", value, "scBuyerzipcode");
            return (Criteria) this;
        }

        public Criteria andScBuyerzipcodeIn(List<String> values) {
            addCriterion("sc_buyerZipCode in", values, "scBuyerzipcode");
            return (Criteria) this;
        }

        public Criteria andScBuyerzipcodeNotIn(List<String> values) {
            addCriterion("sc_buyerZipCode not in", values, "scBuyerzipcode");
            return (Criteria) this;
        }

        public Criteria andScBuyerzipcodeBetween(String value1, String value2) {
            addCriterion("sc_buyerZipCode between", value1, value2, "scBuyerzipcode");
            return (Criteria) this;
        }

        public Criteria andScBuyerzipcodeNotBetween(String value1, String value2) {
            addCriterion("sc_buyerZipCode not between", value1, value2, "scBuyerzipcode");
            return (Criteria) this;
        }

        public Criteria andScBuyertelegraphIsNull() {
            addCriterion("sc_buyerTelegraph is null");
            return (Criteria) this;
        }

        public Criteria andScBuyertelegraphIsNotNull() {
            addCriterion("sc_buyerTelegraph is not null");
            return (Criteria) this;
        }

        public Criteria andScBuyertelegraphEqualTo(String value) {
            addCriterion("sc_buyerTelegraph =", value, "scBuyertelegraph");
            return (Criteria) this;
        }

        public Criteria andScBuyertelegraphNotEqualTo(String value) {
            addCriterion("sc_buyerTelegraph <>", value, "scBuyertelegraph");
            return (Criteria) this;
        }

        public Criteria andScBuyertelegraphGreaterThan(String value) {
            addCriterion("sc_buyerTelegraph >", value, "scBuyertelegraph");
            return (Criteria) this;
        }

        public Criteria andScBuyertelegraphGreaterThanOrEqualTo(String value) {
            addCriterion("sc_buyerTelegraph >=", value, "scBuyertelegraph");
            return (Criteria) this;
        }

        public Criteria andScBuyertelegraphLessThan(String value) {
            addCriterion("sc_buyerTelegraph <", value, "scBuyertelegraph");
            return (Criteria) this;
        }

        public Criteria andScBuyertelegraphLessThanOrEqualTo(String value) {
            addCriterion("sc_buyerTelegraph <=", value, "scBuyertelegraph");
            return (Criteria) this;
        }

        public Criteria andScBuyertelegraphLike(String value) {
            addCriterion("sc_buyerTelegraph like", value, "scBuyertelegraph");
            return (Criteria) this;
        }

        public Criteria andScBuyertelegraphNotLike(String value) {
            addCriterion("sc_buyerTelegraph not like", value, "scBuyertelegraph");
            return (Criteria) this;
        }

        public Criteria andScBuyertelegraphIn(List<String> values) {
            addCriterion("sc_buyerTelegraph in", values, "scBuyertelegraph");
            return (Criteria) this;
        }

        public Criteria andScBuyertelegraphNotIn(List<String> values) {
            addCriterion("sc_buyerTelegraph not in", values, "scBuyertelegraph");
            return (Criteria) this;
        }

        public Criteria andScBuyertelegraphBetween(String value1, String value2) {
            addCriterion("sc_buyerTelegraph between", value1, value2, "scBuyertelegraph");
            return (Criteria) this;
        }

        public Criteria andScBuyertelegraphNotBetween(String value1, String value2) {
            addCriterion("sc_buyerTelegraph not between", value1, value2, "scBuyertelegraph");
            return (Criteria) this;
        }

        public Criteria andScYearIsNull() {
            addCriterion("sc_year is null");
            return (Criteria) this;
        }

        public Criteria andScYearIsNotNull() {
            addCriterion("sc_year is not null");
            return (Criteria) this;
        }

        public Criteria andScYearEqualTo(Date value) {
            addCriterionForJDBCDate("sc_year =", value, "scYear");
            return (Criteria) this;
        }

        public Criteria andScYearNotEqualTo(Date value) {
            addCriterionForJDBCDate("sc_year <>", value, "scYear");
            return (Criteria) this;
        }

        public Criteria andScYearGreaterThan(Date value) {
            addCriterionForJDBCDate("sc_year >", value, "scYear");
            return (Criteria) this;
        }

        public Criteria andScYearGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("sc_year >=", value, "scYear");
            return (Criteria) this;
        }

        public Criteria andScYearLessThan(Date value) {
            addCriterionForJDBCDate("sc_year <", value, "scYear");
            return (Criteria) this;
        }

        public Criteria andScYearLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("sc_year <=", value, "scYear");
            return (Criteria) this;
        }

        public Criteria andScYearIn(List<Date> values) {
            addCriterionForJDBCDate("sc_year in", values, "scYear");
            return (Criteria) this;
        }

        public Criteria andScYearNotIn(List<Date> values) {
            addCriterionForJDBCDate("sc_year not in", values, "scYear");
            return (Criteria) this;
        }

        public Criteria andScYearBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("sc_year between", value1, value2, "scYear");
            return (Criteria) this;
        }

        public Criteria andScYearNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("sc_year not between", value1, value2, "scYear");
            return (Criteria) this;
        }

        public Criteria andScStartingtimeIsNull() {
            addCriterion("sc_startingTime is null");
            return (Criteria) this;
        }

        public Criteria andScStartingtimeIsNotNull() {
            addCriterion("sc_startingTime is not null");
            return (Criteria) this;
        }

        public Criteria andScStartingtimeEqualTo(Date value) {
            addCriterionForJDBCDate("sc_startingTime =", value, "scStartingtime");
            return (Criteria) this;
        }

        public Criteria andScStartingtimeNotEqualTo(Date value) {
            addCriterionForJDBCDate("sc_startingTime <>", value, "scStartingtime");
            return (Criteria) this;
        }

        public Criteria andScStartingtimeGreaterThan(Date value) {
            addCriterionForJDBCDate("sc_startingTime >", value, "scStartingtime");
            return (Criteria) this;
        }

        public Criteria andScStartingtimeGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("sc_startingTime >=", value, "scStartingtime");
            return (Criteria) this;
        }

        public Criteria andScStartingtimeLessThan(Date value) {
            addCriterionForJDBCDate("sc_startingTime <", value, "scStartingtime");
            return (Criteria) this;
        }

        public Criteria andScStartingtimeLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("sc_startingTime <=", value, "scStartingtime");
            return (Criteria) this;
        }

        public Criteria andScStartingtimeIn(List<Date> values) {
            addCriterionForJDBCDate("sc_startingTime in", values, "scStartingtime");
            return (Criteria) this;
        }

        public Criteria andScStartingtimeNotIn(List<Date> values) {
            addCriterionForJDBCDate("sc_startingTime not in", values, "scStartingtime");
            return (Criteria) this;
        }

        public Criteria andScStartingtimeBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("sc_startingTime between", value1, value2, "scStartingtime");
            return (Criteria) this;
        }

        public Criteria andScStartingtimeNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("sc_startingTime not between", value1, value2, "scStartingtime");
            return (Criteria) this;
        }

        public Criteria andScDeadlineIsNull() {
            addCriterion("sc_deadline is null");
            return (Criteria) this;
        }

        public Criteria andScDeadlineIsNotNull() {
            addCriterion("sc_deadline is not null");
            return (Criteria) this;
        }

        public Criteria andScDeadlineEqualTo(Date value) {
            addCriterionForJDBCDate("sc_deadline =", value, "scDeadline");
            return (Criteria) this;
        }

        public Criteria andScDeadlineNotEqualTo(Date value) {
            addCriterionForJDBCDate("sc_deadline <>", value, "scDeadline");
            return (Criteria) this;
        }

        public Criteria andScDeadlineGreaterThan(Date value) {
            addCriterionForJDBCDate("sc_deadline >", value, "scDeadline");
            return (Criteria) this;
        }

        public Criteria andScDeadlineGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("sc_deadline >=", value, "scDeadline");
            return (Criteria) this;
        }

        public Criteria andScDeadlineLessThan(Date value) {
            addCriterionForJDBCDate("sc_deadline <", value, "scDeadline");
            return (Criteria) this;
        }

        public Criteria andScDeadlineLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("sc_deadline <=", value, "scDeadline");
            return (Criteria) this;
        }

        public Criteria andScDeadlineIn(List<Date> values) {
            addCriterionForJDBCDate("sc_deadline in", values, "scDeadline");
            return (Criteria) this;
        }

        public Criteria andScDeadlineNotIn(List<Date> values) {
            addCriterionForJDBCDate("sc_deadline not in", values, "scDeadline");
            return (Criteria) this;
        }

        public Criteria andScDeadlineBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("sc_deadline between", value1, value2, "scDeadline");
            return (Criteria) this;
        }

        public Criteria andScDeadlineNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("sc_deadline not between", value1, value2, "scDeadline");
            return (Criteria) this;
        }

        public Criteria andScOperatorIsNull() {
            addCriterion("sc_operator is null");
            return (Criteria) this;
        }

        public Criteria andScOperatorIsNotNull() {
            addCriterion("sc_operator is not null");
            return (Criteria) this;
        }

        public Criteria andScOperatorEqualTo(String value) {
            addCriterion("sc_operator =", value, "scOperator");
            return (Criteria) this;
        }

        public Criteria andScOperatorNotEqualTo(String value) {
            addCriterion("sc_operator <>", value, "scOperator");
            return (Criteria) this;
        }

        public Criteria andScOperatorGreaterThan(String value) {
            addCriterion("sc_operator >", value, "scOperator");
            return (Criteria) this;
        }

        public Criteria andScOperatorGreaterThanOrEqualTo(String value) {
            addCriterion("sc_operator >=", value, "scOperator");
            return (Criteria) this;
        }

        public Criteria andScOperatorLessThan(String value) {
            addCriterion("sc_operator <", value, "scOperator");
            return (Criteria) this;
        }

        public Criteria andScOperatorLessThanOrEqualTo(String value) {
            addCriterion("sc_operator <=", value, "scOperator");
            return (Criteria) this;
        }

        public Criteria andScOperatorLike(String value) {
            addCriterion("sc_operator like", value, "scOperator");
            return (Criteria) this;
        }

        public Criteria andScOperatorNotLike(String value) {
            addCriterion("sc_operator not like", value, "scOperator");
            return (Criteria) this;
        }

        public Criteria andScOperatorIn(List<String> values) {
            addCriterion("sc_operator in", values, "scOperator");
            return (Criteria) this;
        }

        public Criteria andScOperatorNotIn(List<String> values) {
            addCriterion("sc_operator not in", values, "scOperator");
            return (Criteria) this;
        }

        public Criteria andScOperatorBetween(String value1, String value2) {
            addCriterion("sc_operator between", value1, value2, "scOperator");
            return (Criteria) this;
        }

        public Criteria andScOperatorNotBetween(String value1, String value2) {
            addCriterion("sc_operator not between", value1, value2, "scOperator");
            return (Criteria) this;
        }

        public Criteria andScSigningtimeIsNull() {
            addCriterion("sc_signingTime is null");
            return (Criteria) this;
        }

        public Criteria andScSigningtimeIsNotNull() {
            addCriterion("sc_signingTime is not null");
            return (Criteria) this;
        }

        public Criteria andScSigningtimeEqualTo(Date value) {
            addCriterionForJDBCDate("sc_signingTime =", value, "scSigningtime");
            return (Criteria) this;
        }

        public Criteria andScSigningtimeNotEqualTo(Date value) {
            addCriterionForJDBCDate("sc_signingTime <>", value, "scSigningtime");
            return (Criteria) this;
        }

        public Criteria andScSigningtimeGreaterThan(Date value) {
            addCriterionForJDBCDate("sc_signingTime >", value, "scSigningtime");
            return (Criteria) this;
        }

        public Criteria andScSigningtimeGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("sc_signingTime >=", value, "scSigningtime");
            return (Criteria) this;
        }

        public Criteria andScSigningtimeLessThan(Date value) {
            addCriterionForJDBCDate("sc_signingTime <", value, "scSigningtime");
            return (Criteria) this;
        }

        public Criteria andScSigningtimeLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("sc_signingTime <=", value, "scSigningtime");
            return (Criteria) this;
        }

        public Criteria andScSigningtimeIn(List<Date> values) {
            addCriterionForJDBCDate("sc_signingTime in", values, "scSigningtime");
            return (Criteria) this;
        }

        public Criteria andScSigningtimeNotIn(List<Date> values) {
            addCriterionForJDBCDate("sc_signingTime not in", values, "scSigningtime");
            return (Criteria) this;
        }

        public Criteria andScSigningtimeBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("sc_signingTime between", value1, value2, "scSigningtime");
            return (Criteria) this;
        }

        public Criteria andScSigningtimeNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("sc_signingTime not between", value1, value2, "scSigningtime");
            return (Criteria) this;
        }

        public Criteria andScSigningplaceIsNull() {
            addCriterion("sc_signingPlace is null");
            return (Criteria) this;
        }

        public Criteria andScSigningplaceIsNotNull() {
            addCriterion("sc_signingPlace is not null");
            return (Criteria) this;
        }

        public Criteria andScSigningplaceEqualTo(String value) {
            addCriterion("sc_signingPlace =", value, "scSigningplace");
            return (Criteria) this;
        }

        public Criteria andScSigningplaceNotEqualTo(String value) {
            addCriterion("sc_signingPlace <>", value, "scSigningplace");
            return (Criteria) this;
        }

        public Criteria andScSigningplaceGreaterThan(String value) {
            addCriterion("sc_signingPlace >", value, "scSigningplace");
            return (Criteria) this;
        }

        public Criteria andScSigningplaceGreaterThanOrEqualTo(String value) {
            addCriterion("sc_signingPlace >=", value, "scSigningplace");
            return (Criteria) this;
        }

        public Criteria andScSigningplaceLessThan(String value) {
            addCriterion("sc_signingPlace <", value, "scSigningplace");
            return (Criteria) this;
        }

        public Criteria andScSigningplaceLessThanOrEqualTo(String value) {
            addCriterion("sc_signingPlace <=", value, "scSigningplace");
            return (Criteria) this;
        }

        public Criteria andScSigningplaceLike(String value) {
            addCriterion("sc_signingPlace like", value, "scSigningplace");
            return (Criteria) this;
        }

        public Criteria andScSigningplaceNotLike(String value) {
            addCriterion("sc_signingPlace not like", value, "scSigningplace");
            return (Criteria) this;
        }

        public Criteria andScSigningplaceIn(List<String> values) {
            addCriterion("sc_signingPlace in", values, "scSigningplace");
            return (Criteria) this;
        }

        public Criteria andScSigningplaceNotIn(List<String> values) {
            addCriterion("sc_signingPlace not in", values, "scSigningplace");
            return (Criteria) this;
        }

        public Criteria andScSigningplaceBetween(String value1, String value2) {
            addCriterion("sc_signingPlace between", value1, value2, "scSigningplace");
            return (Criteria) this;
        }

        public Criteria andScSigningplaceNotBetween(String value1, String value2) {
            addCriterion("sc_signingPlace not between", value1, value2, "scSigningplace");
            return (Criteria) this;
        }

        public Criteria andScAgreedcycleIsNull() {
            addCriterion("sc_agreedCycle is null");
            return (Criteria) this;
        }

        public Criteria andScAgreedcycleIsNotNull() {
            addCriterion("sc_agreedCycle is not null");
            return (Criteria) this;
        }

        public Criteria andScAgreedcycleEqualTo(String value) {
            addCriterion("sc_agreedCycle =", value, "scAgreedcycle");
            return (Criteria) this;
        }

        public Criteria andScAgreedcycleNotEqualTo(String value) {
            addCriterion("sc_agreedCycle <>", value, "scAgreedcycle");
            return (Criteria) this;
        }

        public Criteria andScAgreedcycleGreaterThan(String value) {
            addCriterion("sc_agreedCycle >", value, "scAgreedcycle");
            return (Criteria) this;
        }

        public Criteria andScAgreedcycleGreaterThanOrEqualTo(String value) {
            addCriterion("sc_agreedCycle >=", value, "scAgreedcycle");
            return (Criteria) this;
        }

        public Criteria andScAgreedcycleLessThan(String value) {
            addCriterion("sc_agreedCycle <", value, "scAgreedcycle");
            return (Criteria) this;
        }

        public Criteria andScAgreedcycleLessThanOrEqualTo(String value) {
            addCriterion("sc_agreedCycle <=", value, "scAgreedcycle");
            return (Criteria) this;
        }

        public Criteria andScAgreedcycleLike(String value) {
            addCriterion("sc_agreedCycle like", value, "scAgreedcycle");
            return (Criteria) this;
        }

        public Criteria andScAgreedcycleNotLike(String value) {
            addCriterion("sc_agreedCycle not like", value, "scAgreedcycle");
            return (Criteria) this;
        }

        public Criteria andScAgreedcycleIn(List<String> values) {
            addCriterion("sc_agreedCycle in", values, "scAgreedcycle");
            return (Criteria) this;
        }

        public Criteria andScAgreedcycleNotIn(List<String> values) {
            addCriterion("sc_agreedCycle not in", values, "scAgreedcycle");
            return (Criteria) this;
        }

        public Criteria andScAgreedcycleBetween(String value1, String value2) {
            addCriterion("sc_agreedCycle between", value1, value2, "scAgreedcycle");
            return (Criteria) this;
        }

        public Criteria andScAgreedcycleNotBetween(String value1, String value2) {
            addCriterion("sc_agreedCycle not between", value1, value2, "scAgreedcycle");
            return (Criteria) this;
        }

        public Criteria andScWeeklyleastIsNull() {
            addCriterion("sc_weeklyLeast is null");
            return (Criteria) this;
        }

        public Criteria andScWeeklyleastIsNotNull() {
            addCriterion("sc_weeklyLeast is not null");
            return (Criteria) this;
        }

        public Criteria andScWeeklyleastEqualTo(Integer value) {
            addCriterion("sc_weeklyLeast =", value, "scWeeklyleast");
            return (Criteria) this;
        }

        public Criteria andScWeeklyleastNotEqualTo(Integer value) {
            addCriterion("sc_weeklyLeast <>", value, "scWeeklyleast");
            return (Criteria) this;
        }

        public Criteria andScWeeklyleastGreaterThan(Integer value) {
            addCriterion("sc_weeklyLeast >", value, "scWeeklyleast");
            return (Criteria) this;
        }

        public Criteria andScWeeklyleastGreaterThanOrEqualTo(Integer value) {
            addCriterion("sc_weeklyLeast >=", value, "scWeeklyleast");
            return (Criteria) this;
        }

        public Criteria andScWeeklyleastLessThan(Integer value) {
            addCriterion("sc_weeklyLeast <", value, "scWeeklyleast");
            return (Criteria) this;
        }

        public Criteria andScWeeklyleastLessThanOrEqualTo(Integer value) {
            addCriterion("sc_weeklyLeast <=", value, "scWeeklyleast");
            return (Criteria) this;
        }

        public Criteria andScWeeklyleastIn(List<Integer> values) {
            addCriterion("sc_weeklyLeast in", values, "scWeeklyleast");
            return (Criteria) this;
        }

        public Criteria andScWeeklyleastNotIn(List<Integer> values) {
            addCriterion("sc_weeklyLeast not in", values, "scWeeklyleast");
            return (Criteria) this;
        }

        public Criteria andScWeeklyleastBetween(Integer value1, Integer value2) {
            addCriterion("sc_weeklyLeast between", value1, value2, "scWeeklyleast");
            return (Criteria) this;
        }

        public Criteria andScWeeklyleastNotBetween(Integer value1, Integer value2) {
            addCriterion("sc_weeklyLeast not between", value1, value2, "scWeeklyleast");
            return (Criteria) this;
        }

        public Criteria andScCustomerdustryIsNull() {
            addCriterion("sc_customerDustry is null");
            return (Criteria) this;
        }

        public Criteria andScCustomerdustryIsNotNull() {
            addCriterion("sc_customerDustry is not null");
            return (Criteria) this;
        }

        public Criteria andScCustomerdustryEqualTo(Integer value) {
            addCriterion("sc_customerDustry =", value, "scCustomerdustry");
            return (Criteria) this;
        }

        public Criteria andScCustomerdustryNotEqualTo(Integer value) {
            addCriterion("sc_customerDustry <>", value, "scCustomerdustry");
            return (Criteria) this;
        }

        public Criteria andScCustomerdustryGreaterThan(Integer value) {
            addCriterion("sc_customerDustry >", value, "scCustomerdustry");
            return (Criteria) this;
        }

        public Criteria andScCustomerdustryGreaterThanOrEqualTo(Integer value) {
            addCriterion("sc_customerDustry >=", value, "scCustomerdustry");
            return (Criteria) this;
        }

        public Criteria andScCustomerdustryLessThan(Integer value) {
            addCriterion("sc_customerDustry <", value, "scCustomerdustry");
            return (Criteria) this;
        }

        public Criteria andScCustomerdustryLessThanOrEqualTo(Integer value) {
            addCriterion("sc_customerDustry <=", value, "scCustomerdustry");
            return (Criteria) this;
        }

        public Criteria andScCustomerdustryIn(List<Integer> values) {
            addCriterion("sc_customerDustry in", values, "scCustomerdustry");
            return (Criteria) this;
        }

        public Criteria andScCustomerdustryNotIn(List<Integer> values) {
            addCriterion("sc_customerDustry not in", values, "scCustomerdustry");
            return (Criteria) this;
        }

        public Criteria andScCustomerdustryBetween(Integer value1, Integer value2) {
            addCriterion("sc_customerDustry between", value1, value2, "scCustomerdustry");
            return (Criteria) this;
        }

        public Criteria andScCustomerdustryNotBetween(Integer value1, Integer value2) {
            addCriterion("sc_customerDustry not between", value1, value2, "scCustomerdustry");
            return (Criteria) this;
        }

        public Criteria andScCustomerservicedepartmentIsNull() {
            addCriterion("sc_customerServiceDepartment is null");
            return (Criteria) this;
        }

        public Criteria andScCustomerservicedepartmentIsNotNull() {
            addCriterion("sc_customerServiceDepartment is not null");
            return (Criteria) this;
        }

        public Criteria andScCustomerservicedepartmentEqualTo(Integer value) {
            addCriterion("sc_customerServiceDepartment =", value, "scCustomerservicedepartment");
            return (Criteria) this;
        }

        public Criteria andScCustomerservicedepartmentNotEqualTo(Integer value) {
            addCriterion("sc_customerServiceDepartment <>", value, "scCustomerservicedepartment");
            return (Criteria) this;
        }

        public Criteria andScCustomerservicedepartmentGreaterThan(Integer value) {
            addCriterion("sc_customerServiceDepartment >", value, "scCustomerservicedepartment");
            return (Criteria) this;
        }

        public Criteria andScCustomerservicedepartmentGreaterThanOrEqualTo(Integer value) {
            addCriterion("sc_customerServiceDepartment >=", value, "scCustomerservicedepartment");
            return (Criteria) this;
        }

        public Criteria andScCustomerservicedepartmentLessThan(Integer value) {
            addCriterion("sc_customerServiceDepartment <", value, "scCustomerservicedepartment");
            return (Criteria) this;
        }

        public Criteria andScCustomerservicedepartmentLessThanOrEqualTo(Integer value) {
            addCriterion("sc_customerServiceDepartment <=", value, "scCustomerservicedepartment");
            return (Criteria) this;
        }

        public Criteria andScCustomerservicedepartmentIn(List<Integer> values) {
            addCriterion("sc_customerServiceDepartment in", values, "scCustomerservicedepartment");
            return (Criteria) this;
        }

        public Criteria andScCustomerservicedepartmentNotIn(List<Integer> values) {
            addCriterion("sc_customerServiceDepartment not in", values, "scCustomerservicedepartment");
            return (Criteria) this;
        }

        public Criteria andScCustomerservicedepartmentBetween(Integer value1, Integer value2) {
            addCriterion("sc_customerServiceDepartment between", value1, value2, "scCustomerservicedepartment");
            return (Criteria) this;
        }

        public Criteria andScCustomerservicedepartmentNotBetween(Integer value1, Integer value2) {
            addCriterion("sc_customerServiceDepartment not between", value1, value2, "scCustomerservicedepartment");
            return (Criteria) this;
        }

        public Criteria andScContracttypeIsNull() {
            addCriterion("sc_contractType is null");
            return (Criteria) this;
        }

        public Criteria andScContracttypeIsNotNull() {
            addCriterion("sc_contractType is not null");
            return (Criteria) this;
        }

        public Criteria andScContracttypeEqualTo(Integer value) {
            addCriterion("sc_contractType =", value, "scContracttype");
            return (Criteria) this;
        }

        public Criteria andScContracttypeNotEqualTo(Integer value) {
            addCriterion("sc_contractType <>", value, "scContracttype");
            return (Criteria) this;
        }

        public Criteria andScContracttypeGreaterThan(Integer value) {
            addCriterion("sc_contractType >", value, "scContracttype");
            return (Criteria) this;
        }

        public Criteria andScContracttypeGreaterThanOrEqualTo(Integer value) {
            addCriterion("sc_contractType >=", value, "scContracttype");
            return (Criteria) this;
        }

        public Criteria andScContracttypeLessThan(Integer value) {
            addCriterion("sc_contractType <", value, "scContracttype");
            return (Criteria) this;
        }

        public Criteria andScContracttypeLessThanOrEqualTo(Integer value) {
            addCriterion("sc_contractType <=", value, "scContracttype");
            return (Criteria) this;
        }

        public Criteria andScContracttypeIn(List<Integer> values) {
            addCriterion("sc_contractType in", values, "scContracttype");
            return (Criteria) this;
        }

        public Criteria andScContracttypeNotIn(List<Integer> values) {
            addCriterion("sc_contractType not in", values, "scContracttype");
            return (Criteria) this;
        }

        public Criteria andScContracttypeBetween(Integer value1, Integer value2) {
            addCriterion("sc_contractType between", value1, value2, "scContracttype");
            return (Criteria) this;
        }

        public Criteria andScContracttypeNotBetween(Integer value1, Integer value2) {
            addCriterion("sc_contractType not between", value1, value2, "scContracttype");
            return (Criteria) this;
        }

        public Criteria andScQualitypriceIsNull() {
            addCriterion("sc_qualityPrice is null");
            return (Criteria) this;
        }

        public Criteria andScQualitypriceIsNotNull() {
            addCriterion("sc_qualityPrice is not null");
            return (Criteria) this;
        }

        public Criteria andScQualitypriceEqualTo(Integer value) {
            addCriterion("sc_qualityPrice =", value, "scQualityprice");
            return (Criteria) this;
        }

        public Criteria andScQualitypriceNotEqualTo(Integer value) {
            addCriterion("sc_qualityPrice <>", value, "scQualityprice");
            return (Criteria) this;
        }

        public Criteria andScQualitypriceGreaterThan(Integer value) {
            addCriterion("sc_qualityPrice >", value, "scQualityprice");
            return (Criteria) this;
        }

        public Criteria andScQualitypriceGreaterThanOrEqualTo(Integer value) {
            addCriterion("sc_qualityPrice >=", value, "scQualityprice");
            return (Criteria) this;
        }

        public Criteria andScQualitypriceLessThan(Integer value) {
            addCriterion("sc_qualityPrice <", value, "scQualityprice");
            return (Criteria) this;
        }

        public Criteria andScQualitypriceLessThanOrEqualTo(Integer value) {
            addCriterion("sc_qualityPrice <=", value, "scQualityprice");
            return (Criteria) this;
        }

        public Criteria andScQualitypriceIn(List<Integer> values) {
            addCriterion("sc_qualityPrice in", values, "scQualityprice");
            return (Criteria) this;
        }

        public Criteria andScQualitypriceNotIn(List<Integer> values) {
            addCriterion("sc_qualityPrice not in", values, "scQualityprice");
            return (Criteria) this;
        }

        public Criteria andScQualitypriceBetween(Integer value1, Integer value2) {
            addCriterion("sc_qualityPrice between", value1, value2, "scQualityprice");
            return (Criteria) this;
        }

        public Criteria andScQualitypriceNotBetween(Integer value1, Integer value2) {
            addCriterion("sc_qualityPrice not between", value1, value2, "scQualityprice");
            return (Criteria) this;
        }

        public Criteria andScDeliverymodeIsNull() {
            addCriterion("sc_deliveryMode is null");
            return (Criteria) this;
        }

        public Criteria andScDeliverymodeIsNotNull() {
            addCriterion("sc_deliveryMode is not null");
            return (Criteria) this;
        }

        public Criteria andScDeliverymodeEqualTo(String value) {
            addCriterion("sc_deliveryMode =", value, "scDeliverymode");
            return (Criteria) this;
        }

        public Criteria andScDeliverymodeNotEqualTo(String value) {
            addCriterion("sc_deliveryMode <>", value, "scDeliverymode");
            return (Criteria) this;
        }

        public Criteria andScDeliverymodeGreaterThan(String value) {
            addCriterion("sc_deliveryMode >", value, "scDeliverymode");
            return (Criteria) this;
        }

        public Criteria andScDeliverymodeGreaterThanOrEqualTo(String value) {
            addCriterion("sc_deliveryMode >=", value, "scDeliverymode");
            return (Criteria) this;
        }

        public Criteria andScDeliverymodeLessThan(String value) {
            addCriterion("sc_deliveryMode <", value, "scDeliverymode");
            return (Criteria) this;
        }

        public Criteria andScDeliverymodeLessThanOrEqualTo(String value) {
            addCriterion("sc_deliveryMode <=", value, "scDeliverymode");
            return (Criteria) this;
        }

        public Criteria andScDeliverymodeLike(String value) {
            addCriterion("sc_deliveryMode like", value, "scDeliverymode");
            return (Criteria) this;
        }

        public Criteria andScDeliverymodeNotLike(String value) {
            addCriterion("sc_deliveryMode not like", value, "scDeliverymode");
            return (Criteria) this;
        }

        public Criteria andScDeliverymodeIn(List<String> values) {
            addCriterion("sc_deliveryMode in", values, "scDeliverymode");
            return (Criteria) this;
        }

        public Criteria andScDeliverymodeNotIn(List<String> values) {
            addCriterion("sc_deliveryMode not in", values, "scDeliverymode");
            return (Criteria) this;
        }

        public Criteria andScDeliverymodeBetween(String value1, String value2) {
            addCriterion("sc_deliveryMode between", value1, value2, "scDeliverymode");
            return (Criteria) this;
        }

        public Criteria andScDeliverymodeNotBetween(String value1, String value2) {
            addCriterion("sc_deliveryMode not between", value1, value2, "scDeliverymode");
            return (Criteria) this;
        }

        public Criteria andScExecutableunitIsNull() {
            addCriterion("sc_executableUnit is null");
            return (Criteria) this;
        }

        public Criteria andScExecutableunitIsNotNull() {
            addCriterion("sc_executableUnit is not null");
            return (Criteria) this;
        }

        public Criteria andScExecutableunitEqualTo(String value) {
            addCriterion("sc_executableUnit =", value, "scExecutableunit");
            return (Criteria) this;
        }

        public Criteria andScExecutableunitNotEqualTo(String value) {
            addCriterion("sc_executableUnit <>", value, "scExecutableunit");
            return (Criteria) this;
        }

        public Criteria andScExecutableunitGreaterThan(String value) {
            addCriterion("sc_executableUnit >", value, "scExecutableunit");
            return (Criteria) this;
        }

        public Criteria andScExecutableunitGreaterThanOrEqualTo(String value) {
            addCriterion("sc_executableUnit >=", value, "scExecutableunit");
            return (Criteria) this;
        }

        public Criteria andScExecutableunitLessThan(String value) {
            addCriterion("sc_executableUnit <", value, "scExecutableunit");
            return (Criteria) this;
        }

        public Criteria andScExecutableunitLessThanOrEqualTo(String value) {
            addCriterion("sc_executableUnit <=", value, "scExecutableunit");
            return (Criteria) this;
        }

        public Criteria andScExecutableunitLike(String value) {
            addCriterion("sc_executableUnit like", value, "scExecutableunit");
            return (Criteria) this;
        }

        public Criteria andScExecutableunitNotLike(String value) {
            addCriterion("sc_executableUnit not like", value, "scExecutableunit");
            return (Criteria) this;
        }

        public Criteria andScExecutableunitIn(List<String> values) {
            addCriterion("sc_executableUnit in", values, "scExecutableunit");
            return (Criteria) this;
        }

        public Criteria andScExecutableunitNotIn(List<String> values) {
            addCriterion("sc_executableUnit not in", values, "scExecutableunit");
            return (Criteria) this;
        }

        public Criteria andScExecutableunitBetween(String value1, String value2) {
            addCriterion("sc_executableUnit between", value1, value2, "scExecutableunit");
            return (Criteria) this;
        }

        public Criteria andScExecutableunitNotBetween(String value1, String value2) {
            addCriterion("sc_executableUnit not between", value1, value2, "scExecutableunit");
            return (Criteria) this;
        }

        public Criteria andScMeteringmethodIsNull() {
            addCriterion("sc_meteringMethod is null");
            return (Criteria) this;
        }

        public Criteria andScMeteringmethodIsNotNull() {
            addCriterion("sc_meteringMethod is not null");
            return (Criteria) this;
        }

        public Criteria andScMeteringmethodEqualTo(String value) {
            addCriterion("sc_meteringMethod =", value, "scMeteringmethod");
            return (Criteria) this;
        }

        public Criteria andScMeteringmethodNotEqualTo(String value) {
            addCriterion("sc_meteringMethod <>", value, "scMeteringmethod");
            return (Criteria) this;
        }

        public Criteria andScMeteringmethodGreaterThan(String value) {
            addCriterion("sc_meteringMethod >", value, "scMeteringmethod");
            return (Criteria) this;
        }

        public Criteria andScMeteringmethodGreaterThanOrEqualTo(String value) {
            addCriterion("sc_meteringMethod >=", value, "scMeteringmethod");
            return (Criteria) this;
        }

        public Criteria andScMeteringmethodLessThan(String value) {
            addCriterion("sc_meteringMethod <", value, "scMeteringmethod");
            return (Criteria) this;
        }

        public Criteria andScMeteringmethodLessThanOrEqualTo(String value) {
            addCriterion("sc_meteringMethod <=", value, "scMeteringmethod");
            return (Criteria) this;
        }

        public Criteria andScMeteringmethodLike(String value) {
            addCriterion("sc_meteringMethod like", value, "scMeteringmethod");
            return (Criteria) this;
        }

        public Criteria andScMeteringmethodNotLike(String value) {
            addCriterion("sc_meteringMethod not like", value, "scMeteringmethod");
            return (Criteria) this;
        }

        public Criteria andScMeteringmethodIn(List<String> values) {
            addCriterion("sc_meteringMethod in", values, "scMeteringmethod");
            return (Criteria) this;
        }

        public Criteria andScMeteringmethodNotIn(List<String> values) {
            addCriterion("sc_meteringMethod not in", values, "scMeteringmethod");
            return (Criteria) this;
        }

        public Criteria andScMeteringmethodBetween(String value1, String value2) {
            addCriterion("sc_meteringMethod between", value1, value2, "scMeteringmethod");
            return (Criteria) this;
        }

        public Criteria andScMeteringmethodNotBetween(String value1, String value2) {
            addCriterion("sc_meteringMethod not between", value1, value2, "scMeteringmethod");
            return (Criteria) this;
        }

        public Criteria andScShippingtypeIsNull() {
            addCriterion("sc_shippingType is null");
            return (Criteria) this;
        }

        public Criteria andScShippingtypeIsNotNull() {
            addCriterion("sc_shippingType is not null");
            return (Criteria) this;
        }

        public Criteria andScShippingtypeEqualTo(Integer value) {
            addCriterion("sc_shippingType =", value, "scShippingtype");
            return (Criteria) this;
        }

        public Criteria andScShippingtypeNotEqualTo(Integer value) {
            addCriterion("sc_shippingType <>", value, "scShippingtype");
            return (Criteria) this;
        }

        public Criteria andScShippingtypeGreaterThan(Integer value) {
            addCriterion("sc_shippingType >", value, "scShippingtype");
            return (Criteria) this;
        }

        public Criteria andScShippingtypeGreaterThanOrEqualTo(Integer value) {
            addCriterion("sc_shippingType >=", value, "scShippingtype");
            return (Criteria) this;
        }

        public Criteria andScShippingtypeLessThan(Integer value) {
            addCriterion("sc_shippingType <", value, "scShippingtype");
            return (Criteria) this;
        }

        public Criteria andScShippingtypeLessThanOrEqualTo(Integer value) {
            addCriterion("sc_shippingType <=", value, "scShippingtype");
            return (Criteria) this;
        }

        public Criteria andScShippingtypeIn(List<Integer> values) {
            addCriterion("sc_shippingType in", values, "scShippingtype");
            return (Criteria) this;
        }

        public Criteria andScShippingtypeNotIn(List<Integer> values) {
            addCriterion("sc_shippingType not in", values, "scShippingtype");
            return (Criteria) this;
        }

        public Criteria andScShippingtypeBetween(Integer value1, Integer value2) {
            addCriterion("sc_shippingType between", value1, value2, "scShippingtype");
            return (Criteria) this;
        }

        public Criteria andScShippingtypeNotBetween(Integer value1, Integer value2) {
            addCriterion("sc_shippingType not between", value1, value2, "scShippingtype");
            return (Criteria) this;
        }

        public Criteria andScFreightburdenIsNull() {
            addCriterion("sc_freightBurden is null");
            return (Criteria) this;
        }

        public Criteria andScFreightburdenIsNotNull() {
            addCriterion("sc_freightBurden is not null");
            return (Criteria) this;
        }

        public Criteria andScFreightburdenEqualTo(String value) {
            addCriterion("sc_freightBurden =", value, "scFreightburden");
            return (Criteria) this;
        }

        public Criteria andScFreightburdenNotEqualTo(String value) {
            addCriterion("sc_freightBurden <>", value, "scFreightburden");
            return (Criteria) this;
        }

        public Criteria andScFreightburdenGreaterThan(String value) {
            addCriterion("sc_freightBurden >", value, "scFreightburden");
            return (Criteria) this;
        }

        public Criteria andScFreightburdenGreaterThanOrEqualTo(String value) {
            addCriterion("sc_freightBurden >=", value, "scFreightburden");
            return (Criteria) this;
        }

        public Criteria andScFreightburdenLessThan(String value) {
            addCriterion("sc_freightBurden <", value, "scFreightburden");
            return (Criteria) this;
        }

        public Criteria andScFreightburdenLessThanOrEqualTo(String value) {
            addCriterion("sc_freightBurden <=", value, "scFreightburden");
            return (Criteria) this;
        }

        public Criteria andScFreightburdenLike(String value) {
            addCriterion("sc_freightBurden like", value, "scFreightburden");
            return (Criteria) this;
        }

        public Criteria andScFreightburdenNotLike(String value) {
            addCriterion("sc_freightBurden not like", value, "scFreightburden");
            return (Criteria) this;
        }

        public Criteria andScFreightburdenIn(List<String> values) {
            addCriterion("sc_freightBurden in", values, "scFreightburden");
            return (Criteria) this;
        }

        public Criteria andScFreightburdenNotIn(List<String> values) {
            addCriterion("sc_freightBurden not in", values, "scFreightburden");
            return (Criteria) this;
        }

        public Criteria andScFreightburdenBetween(String value1, String value2) {
            addCriterion("sc_freightBurden between", value1, value2, "scFreightburden");
            return (Criteria) this;
        }

        public Criteria andScFreightburdenNotBetween(String value1, String value2) {
            addCriterion("sc_freightBurden not between", value1, value2, "scFreightburden");
            return (Criteria) this;
        }

        public Criteria andScCoalunitpriceIsNull() {
            addCriterion("sc_coalunitPrice is null");
            return (Criteria) this;
        }

        public Criteria andScCoalunitpriceIsNotNull() {
            addCriterion("sc_coalunitPrice is not null");
            return (Criteria) this;
        }

        public Criteria andScCoalunitpriceEqualTo(Long value) {
            addCriterion("sc_coalunitPrice =", value, "scCoalunitprice");
            return (Criteria) this;
        }

        public Criteria andScCoalunitpriceNotEqualTo(Long value) {
            addCriterion("sc_coalunitPrice <>", value, "scCoalunitprice");
            return (Criteria) this;
        }

        public Criteria andScCoalunitpriceGreaterThan(Long value) {
            addCriterion("sc_coalunitPrice >", value, "scCoalunitprice");
            return (Criteria) this;
        }

        public Criteria andScCoalunitpriceGreaterThanOrEqualTo(Long value) {
            addCriterion("sc_coalunitPrice >=", value, "scCoalunitprice");
            return (Criteria) this;
        }

        public Criteria andScCoalunitpriceLessThan(Long value) {
            addCriterion("sc_coalunitPrice <", value, "scCoalunitprice");
            return (Criteria) this;
        }

        public Criteria andScCoalunitpriceLessThanOrEqualTo(Long value) {
            addCriterion("sc_coalunitPrice <=", value, "scCoalunitprice");
            return (Criteria) this;
        }

        public Criteria andScCoalunitpriceIn(List<Long> values) {
            addCriterion("sc_coalunitPrice in", values, "scCoalunitprice");
            return (Criteria) this;
        }

        public Criteria andScCoalunitpriceNotIn(List<Long> values) {
            addCriterion("sc_coalunitPrice not in", values, "scCoalunitprice");
            return (Criteria) this;
        }

        public Criteria andScCoalunitpriceBetween(Long value1, Long value2) {
            addCriterion("sc_coalunitPrice between", value1, value2, "scCoalunitprice");
            return (Criteria) this;
        }

        public Criteria andScCoalunitpriceNotBetween(Long value1, Long value2) {
            addCriterion("sc_coalunitPrice not between", value1, value2, "scCoalunitprice");
            return (Criteria) this;
        }

        public Criteria andScPricedescriptionIsNull() {
            addCriterion("sc_pricedeScription is null");
            return (Criteria) this;
        }

        public Criteria andScPricedescriptionIsNotNull() {
            addCriterion("sc_pricedeScription is not null");
            return (Criteria) this;
        }

        public Criteria andScPricedescriptionEqualTo(String value) {
            addCriterion("sc_pricedeScription =", value, "scPricedescription");
            return (Criteria) this;
        }

        public Criteria andScPricedescriptionNotEqualTo(String value) {
            addCriterion("sc_pricedeScription <>", value, "scPricedescription");
            return (Criteria) this;
        }

        public Criteria andScPricedescriptionGreaterThan(String value) {
            addCriterion("sc_pricedeScription >", value, "scPricedescription");
            return (Criteria) this;
        }

        public Criteria andScPricedescriptionGreaterThanOrEqualTo(String value) {
            addCriterion("sc_pricedeScription >=", value, "scPricedescription");
            return (Criteria) this;
        }

        public Criteria andScPricedescriptionLessThan(String value) {
            addCriterion("sc_pricedeScription <", value, "scPricedescription");
            return (Criteria) this;
        }

        public Criteria andScPricedescriptionLessThanOrEqualTo(String value) {
            addCriterion("sc_pricedeScription <=", value, "scPricedescription");
            return (Criteria) this;
        }

        public Criteria andScPricedescriptionLike(String value) {
            addCriterion("sc_pricedeScription like", value, "scPricedescription");
            return (Criteria) this;
        }

        public Criteria andScPricedescriptionNotLike(String value) {
            addCriterion("sc_pricedeScription not like", value, "scPricedescription");
            return (Criteria) this;
        }

        public Criteria andScPricedescriptionIn(List<String> values) {
            addCriterion("sc_pricedeScription in", values, "scPricedescription");
            return (Criteria) this;
        }

        public Criteria andScPricedescriptionNotIn(List<String> values) {
            addCriterion("sc_pricedeScription not in", values, "scPricedescription");
            return (Criteria) this;
        }

        public Criteria andScPricedescriptionBetween(String value1, String value2) {
            addCriterion("sc_pricedeScription between", value1, value2, "scPricedescription");
            return (Criteria) this;
        }

        public Criteria andScPricedescriptionNotBetween(String value1, String value2) {
            addCriterion("sc_pricedeScription not between", value1, value2, "scPricedescription");
            return (Criteria) this;
        }

        public Criteria andScSettlementmethodIsNull() {
            addCriterion("sc_settlementMethod is null");
            return (Criteria) this;
        }

        public Criteria andScSettlementmethodIsNotNull() {
            addCriterion("sc_settlementMethod is not null");
            return (Criteria) this;
        }

        public Criteria andScSettlementmethodEqualTo(Integer value) {
            addCriterion("sc_settlementMethod =", value, "scSettlementmethod");
            return (Criteria) this;
        }

        public Criteria andScSettlementmethodNotEqualTo(Integer value) {
            addCriterion("sc_settlementMethod <>", value, "scSettlementmethod");
            return (Criteria) this;
        }

        public Criteria andScSettlementmethodGreaterThan(Integer value) {
            addCriterion("sc_settlementMethod >", value, "scSettlementmethod");
            return (Criteria) this;
        }

        public Criteria andScSettlementmethodGreaterThanOrEqualTo(Integer value) {
            addCriterion("sc_settlementMethod >=", value, "scSettlementmethod");
            return (Criteria) this;
        }

        public Criteria andScSettlementmethodLessThan(Integer value) {
            addCriterion("sc_settlementMethod <", value, "scSettlementmethod");
            return (Criteria) this;
        }

        public Criteria andScSettlementmethodLessThanOrEqualTo(Integer value) {
            addCriterion("sc_settlementMethod <=", value, "scSettlementmethod");
            return (Criteria) this;
        }

        public Criteria andScSettlementmethodIn(List<Integer> values) {
            addCriterion("sc_settlementMethod in", values, "scSettlementmethod");
            return (Criteria) this;
        }

        public Criteria andScSettlementmethodNotIn(List<Integer> values) {
            addCriterion("sc_settlementMethod not in", values, "scSettlementmethod");
            return (Criteria) this;
        }

        public Criteria andScSettlementmethodBetween(Integer value1, Integer value2) {
            addCriterion("sc_settlementMethod between", value1, value2, "scSettlementmethod");
            return (Criteria) this;
        }

        public Criteria andScSettlementmethodNotBetween(Integer value1, Integer value2) {
            addCriterion("sc_settlementMethod not between", value1, value2, "scSettlementmethod");
            return (Criteria) this;
        }

        public Criteria andScSettlementstatementIsNull() {
            addCriterion("sc_settlementStatement is null");
            return (Criteria) this;
        }

        public Criteria andScSettlementstatementIsNotNull() {
            addCriterion("sc_settlementStatement is not null");
            return (Criteria) this;
        }

        public Criteria andScSettlementstatementEqualTo(String value) {
            addCriterion("sc_settlementStatement =", value, "scSettlementstatement");
            return (Criteria) this;
        }

        public Criteria andScSettlementstatementNotEqualTo(String value) {
            addCriterion("sc_settlementStatement <>", value, "scSettlementstatement");
            return (Criteria) this;
        }

        public Criteria andScSettlementstatementGreaterThan(String value) {
            addCriterion("sc_settlementStatement >", value, "scSettlementstatement");
            return (Criteria) this;
        }

        public Criteria andScSettlementstatementGreaterThanOrEqualTo(String value) {
            addCriterion("sc_settlementStatement >=", value, "scSettlementstatement");
            return (Criteria) this;
        }

        public Criteria andScSettlementstatementLessThan(String value) {
            addCriterion("sc_settlementStatement <", value, "scSettlementstatement");
            return (Criteria) this;
        }

        public Criteria andScSettlementstatementLessThanOrEqualTo(String value) {
            addCriterion("sc_settlementStatement <=", value, "scSettlementstatement");
            return (Criteria) this;
        }

        public Criteria andScSettlementstatementLike(String value) {
            addCriterion("sc_settlementStatement like", value, "scSettlementstatement");
            return (Criteria) this;
        }

        public Criteria andScSettlementstatementNotLike(String value) {
            addCriterion("sc_settlementStatement not like", value, "scSettlementstatement");
            return (Criteria) this;
        }

        public Criteria andScSettlementstatementIn(List<String> values) {
            addCriterion("sc_settlementStatement in", values, "scSettlementstatement");
            return (Criteria) this;
        }

        public Criteria andScSettlementstatementNotIn(List<String> values) {
            addCriterion("sc_settlementStatement not in", values, "scSettlementstatement");
            return (Criteria) this;
        }

        public Criteria andScSettlementstatementBetween(String value1, String value2) {
            addCriterion("sc_settlementStatement between", value1, value2, "scSettlementstatement");
            return (Criteria) this;
        }

        public Criteria andScSettlementstatementNotBetween(String value1, String value2) {
            addCriterion("sc_settlementStatement not between", value1, value2, "scSettlementstatement");
            return (Criteria) this;
        }

        public Criteria andScNotaryunitIsNull() {
            addCriterion("sc_notaryUnit is null");
            return (Criteria) this;
        }

        public Criteria andScNotaryunitIsNotNull() {
            addCriterion("sc_notaryUnit is not null");
            return (Criteria) this;
        }

        public Criteria andScNotaryunitEqualTo(String value) {
            addCriterion("sc_notaryUnit =", value, "scNotaryunit");
            return (Criteria) this;
        }

        public Criteria andScNotaryunitNotEqualTo(String value) {
            addCriterion("sc_notaryUnit <>", value, "scNotaryunit");
            return (Criteria) this;
        }

        public Criteria andScNotaryunitGreaterThan(String value) {
            addCriterion("sc_notaryUnit >", value, "scNotaryunit");
            return (Criteria) this;
        }

        public Criteria andScNotaryunitGreaterThanOrEqualTo(String value) {
            addCriterion("sc_notaryUnit >=", value, "scNotaryunit");
            return (Criteria) this;
        }

        public Criteria andScNotaryunitLessThan(String value) {
            addCriterion("sc_notaryUnit <", value, "scNotaryunit");
            return (Criteria) this;
        }

        public Criteria andScNotaryunitLessThanOrEqualTo(String value) {
            addCriterion("sc_notaryUnit <=", value, "scNotaryunit");
            return (Criteria) this;
        }

        public Criteria andScNotaryunitLike(String value) {
            addCriterion("sc_notaryUnit like", value, "scNotaryunit");
            return (Criteria) this;
        }

        public Criteria andScNotaryunitNotLike(String value) {
            addCriterion("sc_notaryUnit not like", value, "scNotaryunit");
            return (Criteria) this;
        }

        public Criteria andScNotaryunitIn(List<String> values) {
            addCriterion("sc_notaryUnit in", values, "scNotaryunit");
            return (Criteria) this;
        }

        public Criteria andScNotaryunitNotIn(List<String> values) {
            addCriterion("sc_notaryUnit not in", values, "scNotaryunit");
            return (Criteria) this;
        }

        public Criteria andScNotaryunitBetween(String value1, String value2) {
            addCriterion("sc_notaryUnit between", value1, value2, "scNotaryunit");
            return (Criteria) this;
        }

        public Criteria andScNotaryunitNotBetween(String value1, String value2) {
            addCriterion("sc_notaryUnit not between", value1, value2, "scNotaryunit");
            return (Criteria) this;
        }

        public Criteria andScNotarialopinionsIsNull() {
            addCriterion("sc_notarialOpinions is null");
            return (Criteria) this;
        }

        public Criteria andScNotarialopinionsIsNotNull() {
            addCriterion("sc_notarialOpinions is not null");
            return (Criteria) this;
        }

        public Criteria andScNotarialopinionsEqualTo(String value) {
            addCriterion("sc_notarialOpinions =", value, "scNotarialopinions");
            return (Criteria) this;
        }

        public Criteria andScNotarialopinionsNotEqualTo(String value) {
            addCriterion("sc_notarialOpinions <>", value, "scNotarialopinions");
            return (Criteria) this;
        }

        public Criteria andScNotarialopinionsGreaterThan(String value) {
            addCriterion("sc_notarialOpinions >", value, "scNotarialopinions");
            return (Criteria) this;
        }

        public Criteria andScNotarialopinionsGreaterThanOrEqualTo(String value) {
            addCriterion("sc_notarialOpinions >=", value, "scNotarialopinions");
            return (Criteria) this;
        }

        public Criteria andScNotarialopinionsLessThan(String value) {
            addCriterion("sc_notarialOpinions <", value, "scNotarialopinions");
            return (Criteria) this;
        }

        public Criteria andScNotarialopinionsLessThanOrEqualTo(String value) {
            addCriterion("sc_notarialOpinions <=", value, "scNotarialopinions");
            return (Criteria) this;
        }

        public Criteria andScNotarialopinionsLike(String value) {
            addCriterion("sc_notarialOpinions like", value, "scNotarialopinions");
            return (Criteria) this;
        }

        public Criteria andScNotarialopinionsNotLike(String value) {
            addCriterion("sc_notarialOpinions not like", value, "scNotarialopinions");
            return (Criteria) this;
        }

        public Criteria andScNotarialopinionsIn(List<String> values) {
            addCriterion("sc_notarialOpinions in", values, "scNotarialopinions");
            return (Criteria) this;
        }

        public Criteria andScNotarialopinionsNotIn(List<String> values) {
            addCriterion("sc_notarialOpinions not in", values, "scNotarialopinions");
            return (Criteria) this;
        }

        public Criteria andScNotarialopinionsBetween(String value1, String value2) {
            addCriterion("sc_notarialOpinions between", value1, value2, "scNotarialopinions");
            return (Criteria) this;
        }

        public Criteria andScNotarialopinionsNotBetween(String value1, String value2) {
            addCriterion("sc_notarialOpinions not between", value1, value2, "scNotarialopinions");
            return (Criteria) this;
        }

        public Criteria andScMastercontractidIsNull() {
            addCriterion("sc_masterContractId is null");
            return (Criteria) this;
        }

        public Criteria andScMastercontractidIsNotNull() {
            addCriterion("sc_masterContractId is not null");
            return (Criteria) this;
        }

        public Criteria andScMastercontractidEqualTo(String value) {
            addCriterion("sc_masterContractId =", value, "scMastercontractid");
            return (Criteria) this;
        }

        public Criteria andScMastercontractidNotEqualTo(String value) {
            addCriterion("sc_masterContractId <>", value, "scMastercontractid");
            return (Criteria) this;
        }

        public Criteria andScMastercontractidGreaterThan(String value) {
            addCriterion("sc_masterContractId >", value, "scMastercontractid");
            return (Criteria) this;
        }

        public Criteria andScMastercontractidGreaterThanOrEqualTo(String value) {
            addCriterion("sc_masterContractId >=", value, "scMastercontractid");
            return (Criteria) this;
        }

        public Criteria andScMastercontractidLessThan(String value) {
            addCriterion("sc_masterContractId <", value, "scMastercontractid");
            return (Criteria) this;
        }

        public Criteria andScMastercontractidLessThanOrEqualTo(String value) {
            addCriterion("sc_masterContractId <=", value, "scMastercontractid");
            return (Criteria) this;
        }

        public Criteria andScMastercontractidLike(String value) {
            addCriterion("sc_masterContractId like", value, "scMastercontractid");
            return (Criteria) this;
        }

        public Criteria andScMastercontractidNotLike(String value) {
            addCriterion("sc_masterContractId not like", value, "scMastercontractid");
            return (Criteria) this;
        }

        public Criteria andScMastercontractidIn(List<String> values) {
            addCriterion("sc_masterContractId in", values, "scMastercontractid");
            return (Criteria) this;
        }

        public Criteria andScMastercontractidNotIn(List<String> values) {
            addCriterion("sc_masterContractId not in", values, "scMastercontractid");
            return (Criteria) this;
        }

        public Criteria andScMastercontractidBetween(String value1, String value2) {
            addCriterion("sc_masterContractId between", value1, value2, "scMastercontractid");
            return (Criteria) this;
        }

        public Criteria andScMastercontractidNotBetween(String value1, String value2) {
            addCriterion("sc_masterContractId not between", value1, value2, "scMastercontractid");
            return (Criteria) this;
        }

        public Criteria andScSettlementunitIsNull() {
            addCriterion("sc_settlementUnit is null");
            return (Criteria) this;
        }

        public Criteria andScSettlementunitIsNotNull() {
            addCriterion("sc_settlementUnit is not null");
            return (Criteria) this;
        }

        public Criteria andScSettlementunitEqualTo(Integer value) {
            addCriterion("sc_settlementUnit =", value, "scSettlementunit");
            return (Criteria) this;
        }

        public Criteria andScSettlementunitNotEqualTo(Integer value) {
            addCriterion("sc_settlementUnit <>", value, "scSettlementunit");
            return (Criteria) this;
        }

        public Criteria andScSettlementunitGreaterThan(Integer value) {
            addCriterion("sc_settlementUnit >", value, "scSettlementunit");
            return (Criteria) this;
        }

        public Criteria andScSettlementunitGreaterThanOrEqualTo(Integer value) {
            addCriterion("sc_settlementUnit >=", value, "scSettlementunit");
            return (Criteria) this;
        }

        public Criteria andScSettlementunitLessThan(Integer value) {
            addCriterion("sc_settlementUnit <", value, "scSettlementunit");
            return (Criteria) this;
        }

        public Criteria andScSettlementunitLessThanOrEqualTo(Integer value) {
            addCriterion("sc_settlementUnit <=", value, "scSettlementunit");
            return (Criteria) this;
        }

        public Criteria andScSettlementunitIn(List<Integer> values) {
            addCriterion("sc_settlementUnit in", values, "scSettlementunit");
            return (Criteria) this;
        }

        public Criteria andScSettlementunitNotIn(List<Integer> values) {
            addCriterion("sc_settlementUnit not in", values, "scSettlementunit");
            return (Criteria) this;
        }

        public Criteria andScSettlementunitBetween(Integer value1, Integer value2) {
            addCriterion("sc_settlementUnit between", value1, value2, "scSettlementunit");
            return (Criteria) this;
        }

        public Criteria andScSettlementunitNotBetween(Integer value1, Integer value2) {
            addCriterion("sc_settlementUnit not between", value1, value2, "scSettlementunit");
            return (Criteria) this;
        }

        public Criteria andScStatusIsNull() {
            addCriterion("sc_status is null");
            return (Criteria) this;
        }

        public Criteria andScStatusIsNotNull() {
            addCriterion("sc_status is not null");
            return (Criteria) this;
        }

        public Criteria andScStatusEqualTo(Integer value) {
            addCriterion("sc_status =", value, "scStatus");
            return (Criteria) this;
        }

        public Criteria andScStatusNotEqualTo(Integer value) {
            addCriterion("sc_status <>", value, "scStatus");
            return (Criteria) this;
        }

        public Criteria andScStatusGreaterThan(Integer value) {
            addCriterion("sc_status >", value, "scStatus");
            return (Criteria) this;
        }

        public Criteria andScStatusGreaterThanOrEqualTo(Integer value) {
            addCriterion("sc_status >=", value, "scStatus");
            return (Criteria) this;
        }

        public Criteria andScStatusLessThan(Integer value) {
            addCriterion("sc_status <", value, "scStatus");
            return (Criteria) this;
        }

        public Criteria andScStatusLessThanOrEqualTo(Integer value) {
            addCriterion("sc_status <=", value, "scStatus");
            return (Criteria) this;
        }

        public Criteria andScStatusIn(List<Integer> values) {
            addCriterion("sc_status in", values, "scStatus");
            return (Criteria) this;
        }

        public Criteria andScStatusNotIn(List<Integer> values) {
            addCriterion("sc_status not in", values, "scStatus");
            return (Criteria) this;
        }

        public Criteria andScStatusBetween(Integer value1, Integer value2) {
            addCriterion("sc_status between", value1, value2, "scStatus");
            return (Criteria) this;
        }

        public Criteria andScStatusNotBetween(Integer value1, Integer value2) {
            addCriterion("sc_status not between", value1, value2, "scStatus");
            return (Criteria) this;
        }

        public Criteria andScContractmarkIsNull() {
            addCriterion("sc_contractMark is null");
            return (Criteria) this;
        }

        public Criteria andScContractmarkIsNotNull() {
            addCriterion("sc_contractMark is not null");
            return (Criteria) this;
        }

        public Criteria andScContractmarkEqualTo(Integer value) {
            addCriterion("sc_contractMark =", value, "scContractmark");
            return (Criteria) this;
        }

        public Criteria andScContractmarkNotEqualTo(Integer value) {
            addCriterion("sc_contractMark <>", value, "scContractmark");
            return (Criteria) this;
        }

        public Criteria andScContractmarkGreaterThan(Integer value) {
            addCriterion("sc_contractMark >", value, "scContractmark");
            return (Criteria) this;
        }

        public Criteria andScContractmarkGreaterThanOrEqualTo(Integer value) {
            addCriterion("sc_contractMark >=", value, "scContractmark");
            return (Criteria) this;
        }

        public Criteria andScContractmarkLessThan(Integer value) {
            addCriterion("sc_contractMark <", value, "scContractmark");
            return (Criteria) this;
        }

        public Criteria andScContractmarkLessThanOrEqualTo(Integer value) {
            addCriterion("sc_contractMark <=", value, "scContractmark");
            return (Criteria) this;
        }

        public Criteria andScContractmarkIn(List<Integer> values) {
            addCriterion("sc_contractMark in", values, "scContractmark");
            return (Criteria) this;
        }

        public Criteria andScContractmarkNotIn(List<Integer> values) {
            addCriterion("sc_contractMark not in", values, "scContractmark");
            return (Criteria) this;
        }

        public Criteria andScContractmarkBetween(Integer value1, Integer value2) {
            addCriterion("sc_contractMark between", value1, value2, "scContractmark");
            return (Criteria) this;
        }

        public Criteria andScContractmarkNotBetween(Integer value1, Integer value2) {
            addCriterion("sc_contractMark not between", value1, value2, "scContractmark");
            return (Criteria) this;
        }

        public Criteria andScContractamountIsNull() {
            addCriterion("sc_contractAmount is null");
            return (Criteria) this;
        }

        public Criteria andScContractamountIsNotNull() {
            addCriterion("sc_contractAmount is not null");
            return (Criteria) this;
        }

        public Criteria andScContractamountEqualTo(Long value) {
            addCriterion("sc_contractAmount =", value, "scContractamount");
            return (Criteria) this;
        }

        public Criteria andScContractamountNotEqualTo(Long value) {
            addCriterion("sc_contractAmount <>", value, "scContractamount");
            return (Criteria) this;
        }

        public Criteria andScContractamountGreaterThan(Long value) {
            addCriterion("sc_contractAmount >", value, "scContractamount");
            return (Criteria) this;
        }

        public Criteria andScContractamountGreaterThanOrEqualTo(Long value) {
            addCriterion("sc_contractAmount >=", value, "scContractamount");
            return (Criteria) this;
        }

        public Criteria andScContractamountLessThan(Long value) {
            addCriterion("sc_contractAmount <", value, "scContractamount");
            return (Criteria) this;
        }

        public Criteria andScContractamountLessThanOrEqualTo(Long value) {
            addCriterion("sc_contractAmount <=", value, "scContractamount");
            return (Criteria) this;
        }

        public Criteria andScContractamountIn(List<Long> values) {
            addCriterion("sc_contractAmount in", values, "scContractamount");
            return (Criteria) this;
        }

        public Criteria andScContractamountNotIn(List<Long> values) {
            addCriterion("sc_contractAmount not in", values, "scContractamount");
            return (Criteria) this;
        }

        public Criteria andScContractamountBetween(Long value1, Long value2) {
            addCriterion("sc_contractAmount between", value1, value2, "scContractamount");
            return (Criteria) this;
        }

        public Criteria andScContractamountNotBetween(Long value1, Long value2) {
            addCriterion("sc_contractAmount not between", value1, value2, "scContractamount");
            return (Criteria) this;
        }

        public Criteria andScCashrateIsNull() {
            addCriterion("sc_cashRate is null");
            return (Criteria) this;
        }

        public Criteria andScCashrateIsNotNull() {
            addCriterion("sc_cashRate is not null");
            return (Criteria) this;
        }

        public Criteria andScCashrateEqualTo(Long value) {
            addCriterion("sc_cashRate =", value, "scCashrate");
            return (Criteria) this;
        }

        public Criteria andScCashrateNotEqualTo(Long value) {
            addCriterion("sc_cashRate <>", value, "scCashrate");
            return (Criteria) this;
        }

        public Criteria andScCashrateGreaterThan(Long value) {
            addCriterion("sc_cashRate >", value, "scCashrate");
            return (Criteria) this;
        }

        public Criteria andScCashrateGreaterThanOrEqualTo(Long value) {
            addCriterion("sc_cashRate >=", value, "scCashrate");
            return (Criteria) this;
        }

        public Criteria andScCashrateLessThan(Long value) {
            addCriterion("sc_cashRate <", value, "scCashrate");
            return (Criteria) this;
        }

        public Criteria andScCashrateLessThanOrEqualTo(Long value) {
            addCriterion("sc_cashRate <=", value, "scCashrate");
            return (Criteria) this;
        }

        public Criteria andScCashrateIn(List<Long> values) {
            addCriterion("sc_cashRate in", values, "scCashrate");
            return (Criteria) this;
        }

        public Criteria andScCashrateNotIn(List<Long> values) {
            addCriterion("sc_cashRate not in", values, "scCashrate");
            return (Criteria) this;
        }

        public Criteria andScCashrateBetween(Long value1, Long value2) {
            addCriterion("sc_cashRate between", value1, value2, "scCashrate");
            return (Criteria) this;
        }

        public Criteria andScCashrateNotBetween(Long value1, Long value2) {
            addCriterion("sc_cashRate not between", value1, value2, "scCashrate");
            return (Criteria) this;
        }

        public Criteria andScIschangeIsNull() {
            addCriterion("sc_isChange is null");
            return (Criteria) this;
        }

        public Criteria andScIschangeIsNotNull() {
            addCriterion("sc_isChange is not null");
            return (Criteria) this;
        }

        public Criteria andScIschangeEqualTo(Byte value) {
            addCriterion("sc_isChange =", value, "scIschange");
            return (Criteria) this;
        }

        public Criteria andScIschangeNotEqualTo(Byte value) {
            addCriterion("sc_isChange <>", value, "scIschange");
            return (Criteria) this;
        }

        public Criteria andScIschangeGreaterThan(Byte value) {
            addCriterion("sc_isChange >", value, "scIschange");
            return (Criteria) this;
        }

        public Criteria andScIschangeGreaterThanOrEqualTo(Byte value) {
            addCriterion("sc_isChange >=", value, "scIschange");
            return (Criteria) this;
        }

        public Criteria andScIschangeLessThan(Byte value) {
            addCriterion("sc_isChange <", value, "scIschange");
            return (Criteria) this;
        }

        public Criteria andScIschangeLessThanOrEqualTo(Byte value) {
            addCriterion("sc_isChange <=", value, "scIschange");
            return (Criteria) this;
        }

        public Criteria andScIschangeIn(List<Byte> values) {
            addCriterion("sc_isChange in", values, "scIschange");
            return (Criteria) this;
        }

        public Criteria andScIschangeNotIn(List<Byte> values) {
            addCriterion("sc_isChange not in", values, "scIschange");
            return (Criteria) this;
        }

        public Criteria andScIschangeBetween(Byte value1, Byte value2) {
            addCriterion("sc_isChange between", value1, value2, "scIschange");
            return (Criteria) this;
        }

        public Criteria andScIschangeNotBetween(Byte value1, Byte value2) {
            addCriterion("sc_isChange not between", value1, value2, "scIschange");
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

        public Criteria andScIsmainIsNull() {
            addCriterion("sc_isMain is null");
            return (Criteria) this;
        }

        public Criteria andScIsmainIsNotNull() {
            addCriterion("sc_isMain is not null");
            return (Criteria) this;
        }

        public Criteria andScIsmainEqualTo(Byte value) {
            addCriterion("sc_isMain =", value, "scIsmain");
            return (Criteria) this;
        }

        public Criteria andScIsmainNotEqualTo(Byte value) {
            addCriterion("sc_isMain <>", value, "scIsmain");
            return (Criteria) this;
        }

        public Criteria andScIsmainGreaterThan(Byte value) {
            addCriterion("sc_isMain >", value, "scIsmain");
            return (Criteria) this;
        }

        public Criteria andScIsmainGreaterThanOrEqualTo(Byte value) {
            addCriterion("sc_isMain >=", value, "scIsmain");
            return (Criteria) this;
        }

        public Criteria andScIsmainLessThan(Byte value) {
            addCriterion("sc_isMain <", value, "scIsmain");
            return (Criteria) this;
        }

        public Criteria andScIsmainLessThanOrEqualTo(Byte value) {
            addCriterion("sc_isMain <=", value, "scIsmain");
            return (Criteria) this;
        }

        public Criteria andScIsmainIn(List<Byte> values) {
            addCriterion("sc_isMain in", values, "scIsmain");
            return (Criteria) this;
        }

        public Criteria andScIsmainNotIn(List<Byte> values) {
            addCriterion("sc_isMain not in", values, "scIsmain");
            return (Criteria) this;
        }

        public Criteria andScIsmainBetween(Byte value1, Byte value2) {
            addCriterion("sc_isMain between", value1, value2, "scIsmain");
            return (Criteria) this;
        }

        public Criteria andScIsmainNotBetween(Byte value1, Byte value2) {
            addCriterion("sc_isMain not between", value1, value2, "scIsmain");
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