package com.xj.domain.base;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class BCompanyQuery {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Integer pageNo = 1;

    protected Integer startRow;

    protected Integer pageSize = 10;

    protected String fields;

    public BCompanyQuery() {
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

        public Criteria andCoIdIsNull() {
            addCriterion("co_id is null");
            return (Criteria) this;
        }

        public Criteria andCoIdIsNotNull() {
            addCriterion("co_id is not null");
            return (Criteria) this;
        }

        public Criteria andCoIdEqualTo(String value) {
            addCriterion("co_id =", value, "coId");
            return (Criteria) this;
        }

        public Criteria andCoIdNotEqualTo(String value) {
            addCriterion("co_id <>", value, "coId");
            return (Criteria) this;
        }

        public Criteria andCoIdGreaterThan(String value) {
            addCriterion("co_id >", value, "coId");
            return (Criteria) this;
        }

        public Criteria andCoIdGreaterThanOrEqualTo(String value) {
            addCriterion("co_id >=", value, "coId");
            return (Criteria) this;
        }

        public Criteria andCoIdLessThan(String value) {
            addCriterion("co_id <", value, "coId");
            return (Criteria) this;
        }

        public Criteria andCoIdLessThanOrEqualTo(String value) {
            addCriterion("co_id <=", value, "coId");
            return (Criteria) this;
        }

        public Criteria andCoIdLike(String value) {
            addCriterion("co_id like", value, "coId");
            return (Criteria) this;
        }

        public Criteria andCoIdNotLike(String value) {
            addCriterion("co_id not like", value, "coId");
            return (Criteria) this;
        }

        public Criteria andCoIdIn(List<String> values) {
            addCriterion("co_id in", values, "coId");
            return (Criteria) this;
        }

        public Criteria andCoIdNotIn(List<String> values) {
            addCriterion("co_id not in", values, "coId");
            return (Criteria) this;
        }

        public Criteria andCoIdBetween(String value1, String value2) {
            addCriterion("co_id between", value1, value2, "coId");
            return (Criteria) this;
        }

        public Criteria andCoIdNotBetween(String value1, String value2) {
            addCriterion("co_id not between", value1, value2, "coId");
            return (Criteria) this;
        }

        public Criteria andCoShortIsNull() {
            addCriterion("co_short is null");
            return (Criteria) this;
        }

        public Criteria andCoShortIsNotNull() {
            addCriterion("co_short is not null");
            return (Criteria) this;
        }

        public Criteria andCoShortEqualTo(String value) {
            addCriterion("co_short =", value, "coShort");
            return (Criteria) this;
        }

        public Criteria andCoShortNotEqualTo(String value) {
            addCriterion("co_short <>", value, "coShort");
            return (Criteria) this;
        }

        public Criteria andCoShortGreaterThan(String value) {
            addCriterion("co_short >", value, "coShort");
            return (Criteria) this;
        }

        public Criteria andCoShortGreaterThanOrEqualTo(String value) {
            addCriterion("co_short >=", value, "coShort");
            return (Criteria) this;
        }

        public Criteria andCoShortLessThan(String value) {
            addCriterion("co_short <", value, "coShort");
            return (Criteria) this;
        }

        public Criteria andCoShortLessThanOrEqualTo(String value) {
            addCriterion("co_short <=", value, "coShort");
            return (Criteria) this;
        }

        public Criteria andCoShortLike(String value) {
            addCriterion("co_short like", value, "coShort");
            return (Criteria) this;
        }

        public Criteria andCoShortNotLike(String value) {
            addCriterion("co_short not like", value, "coShort");
            return (Criteria) this;
        }

        public Criteria andCoShortIn(List<String> values) {
            addCriterion("co_short in", values, "coShort");
            return (Criteria) this;
        }

        public Criteria andCoShortNotIn(List<String> values) {
            addCriterion("co_short not in", values, "coShort");
            return (Criteria) this;
        }

        public Criteria andCoShortBetween(String value1, String value2) {
            addCriterion("co_short between", value1, value2, "coShort");
            return (Criteria) this;
        }

        public Criteria andCoShortNotBetween(String value1, String value2) {
            addCriterion("co_short not between", value1, value2, "coShort");
            return (Criteria) this;
        }

        public Criteria andCoNameIsNull() {
            addCriterion("co_name is null");
            return (Criteria) this;
        }

        public Criteria andCoNameIsNotNull() {
            addCriterion("co_name is not null");
            return (Criteria) this;
        }

        public Criteria andCoNameEqualTo(String value) {
            addCriterion("co_name =", value, "coName");
            return (Criteria) this;
        }

        public Criteria andCoNameNotEqualTo(String value) {
            addCriterion("co_name <>", value, "coName");
            return (Criteria) this;
        }

        public Criteria andCoNameGreaterThan(String value) {
            addCriterion("co_name >", value, "coName");
            return (Criteria) this;
        }

        public Criteria andCoNameGreaterThanOrEqualTo(String value) {
            addCriterion("co_name >=", value, "coName");
            return (Criteria) this;
        }

        public Criteria andCoNameLessThan(String value) {
            addCriterion("co_name <", value, "coName");
            return (Criteria) this;
        }

        public Criteria andCoNameLessThanOrEqualTo(String value) {
            addCriterion("co_name <=", value, "coName");
            return (Criteria) this;
        }

        public Criteria andCoNameLike(String value) {
            addCriterion("co_name like", value, "coName");
            return (Criteria) this;
        }

        public Criteria andCoNameNotLike(String value) {
            addCriterion("co_name not like", value, "coName");
            return (Criteria) this;
        }

        public Criteria andCoNameIn(List<String> values) {
            addCriterion("co_name in", values, "coName");
            return (Criteria) this;
        }

        public Criteria andCoNameNotIn(List<String> values) {
            addCriterion("co_name not in", values, "coName");
            return (Criteria) this;
        }

        public Criteria andCoNameBetween(String value1, String value2) {
            addCriterion("co_name between", value1, value2, "coName");
            return (Criteria) this;
        }

        public Criteria andCoNameNotBetween(String value1, String value2) {
            addCriterion("co_name not between", value1, value2, "coName");
            return (Criteria) this;
        }

        public Criteria andCoPhoneIsNull() {
            addCriterion("co_phone is null");
            return (Criteria) this;
        }

        public Criteria andCoPhoneIsNotNull() {
            addCriterion("co_phone is not null");
            return (Criteria) this;
        }

        public Criteria andCoPhoneEqualTo(String value) {
            addCriterion("co_phone =", value, "coPhone");
            return (Criteria) this;
        }

        public Criteria andCoPhoneNotEqualTo(String value) {
            addCriterion("co_phone <>", value, "coPhone");
            return (Criteria) this;
        }

        public Criteria andCoPhoneGreaterThan(String value) {
            addCriterion("co_phone >", value, "coPhone");
            return (Criteria) this;
        }

        public Criteria andCoPhoneGreaterThanOrEqualTo(String value) {
            addCriterion("co_phone >=", value, "coPhone");
            return (Criteria) this;
        }

        public Criteria andCoPhoneLessThan(String value) {
            addCriterion("co_phone <", value, "coPhone");
            return (Criteria) this;
        }

        public Criteria andCoPhoneLessThanOrEqualTo(String value) {
            addCriterion("co_phone <=", value, "coPhone");
            return (Criteria) this;
        }

        public Criteria andCoPhoneLike(String value) {
            addCriterion("co_phone like", value, "coPhone");
            return (Criteria) this;
        }

        public Criteria andCoPhoneNotLike(String value) {
            addCriterion("co_phone not like", value, "coPhone");
            return (Criteria) this;
        }

        public Criteria andCoPhoneIn(List<String> values) {
            addCriterion("co_phone in", values, "coPhone");
            return (Criteria) this;
        }

        public Criteria andCoPhoneNotIn(List<String> values) {
            addCriterion("co_phone not in", values, "coPhone");
            return (Criteria) this;
        }

        public Criteria andCoPhoneBetween(String value1, String value2) {
            addCriterion("co_phone between", value1, value2, "coPhone");
            return (Criteria) this;
        }

        public Criteria andCoPhoneNotBetween(String value1, String value2) {
            addCriterion("co_phone not between", value1, value2, "coPhone");
            return (Criteria) this;
        }

        public Criteria andCoPostcodeIsNull() {
            addCriterion("co_postcode is null");
            return (Criteria) this;
        }

        public Criteria andCoPostcodeIsNotNull() {
            addCriterion("co_postcode is not null");
            return (Criteria) this;
        }

        public Criteria andCoPostcodeEqualTo(Integer value) {
            addCriterion("co_postcode =", value, "coPostcode");
            return (Criteria) this;
        }

        public Criteria andCoPostcodeNotEqualTo(Integer value) {
            addCriterion("co_postcode <>", value, "coPostcode");
            return (Criteria) this;
        }

        public Criteria andCoPostcodeGreaterThan(Integer value) {
            addCriterion("co_postcode >", value, "coPostcode");
            return (Criteria) this;
        }

        public Criteria andCoPostcodeGreaterThanOrEqualTo(Integer value) {
            addCriterion("co_postcode >=", value, "coPostcode");
            return (Criteria) this;
        }

        public Criteria andCoPostcodeLessThan(Integer value) {
            addCriterion("co_postcode <", value, "coPostcode");
            return (Criteria) this;
        }

        public Criteria andCoPostcodeLessThanOrEqualTo(Integer value) {
            addCriterion("co_postcode <=", value, "coPostcode");
            return (Criteria) this;
        }

        public Criteria andCoPostcodeIn(List<Integer> values) {
            addCriterion("co_postcode in", values, "coPostcode");
            return (Criteria) this;
        }

        public Criteria andCoPostcodeNotIn(List<Integer> values) {
            addCriterion("co_postcode not in", values, "coPostcode");
            return (Criteria) this;
        }

        public Criteria andCoPostcodeBetween(Integer value1, Integer value2) {
            addCriterion("co_postcode between", value1, value2, "coPostcode");
            return (Criteria) this;
        }

        public Criteria andCoPostcodeNotBetween(Integer value1, Integer value2) {
            addCriterion("co_postcode not between", value1, value2, "coPostcode");
            return (Criteria) this;
        }

        public Criteria andCoFaxIsNull() {
            addCriterion("co_fax is null");
            return (Criteria) this;
        }

        public Criteria andCoFaxIsNotNull() {
            addCriterion("co_fax is not null");
            return (Criteria) this;
        }

        public Criteria andCoFaxEqualTo(String value) {
            addCriterion("co_fax =", value, "coFax");
            return (Criteria) this;
        }

        public Criteria andCoFaxNotEqualTo(String value) {
            addCriterion("co_fax <>", value, "coFax");
            return (Criteria) this;
        }

        public Criteria andCoFaxGreaterThan(String value) {
            addCriterion("co_fax >", value, "coFax");
            return (Criteria) this;
        }

        public Criteria andCoFaxGreaterThanOrEqualTo(String value) {
            addCriterion("co_fax >=", value, "coFax");
            return (Criteria) this;
        }

        public Criteria andCoFaxLessThan(String value) {
            addCriterion("co_fax <", value, "coFax");
            return (Criteria) this;
        }

        public Criteria andCoFaxLessThanOrEqualTo(String value) {
            addCriterion("co_fax <=", value, "coFax");
            return (Criteria) this;
        }

        public Criteria andCoFaxLike(String value) {
            addCriterion("co_fax like", value, "coFax");
            return (Criteria) this;
        }

        public Criteria andCoFaxNotLike(String value) {
            addCriterion("co_fax not like", value, "coFax");
            return (Criteria) this;
        }

        public Criteria andCoFaxIn(List<String> values) {
            addCriterion("co_fax in", values, "coFax");
            return (Criteria) this;
        }

        public Criteria andCoFaxNotIn(List<String> values) {
            addCriterion("co_fax not in", values, "coFax");
            return (Criteria) this;
        }

        public Criteria andCoFaxBetween(String value1, String value2) {
            addCriterion("co_fax between", value1, value2, "coFax");
            return (Criteria) this;
        }

        public Criteria andCoFaxNotBetween(String value1, String value2) {
            addCriterion("co_fax not between", value1, value2, "coFax");
            return (Criteria) this;
        }

        public Criteria andCoLeaderIsNull() {
            addCriterion("co_leader is null");
            return (Criteria) this;
        }

        public Criteria andCoLeaderIsNotNull() {
            addCriterion("co_leader is not null");
            return (Criteria) this;
        }

        public Criteria andCoLeaderEqualTo(String value) {
            addCriterion("co_leader =", value, "coLeader");
            return (Criteria) this;
        }

        public Criteria andCoLeaderNotEqualTo(String value) {
            addCriterion("co_leader <>", value, "coLeader");
            return (Criteria) this;
        }

        public Criteria andCoLeaderGreaterThan(String value) {
            addCriterion("co_leader >", value, "coLeader");
            return (Criteria) this;
        }

        public Criteria andCoLeaderGreaterThanOrEqualTo(String value) {
            addCriterion("co_leader >=", value, "coLeader");
            return (Criteria) this;
        }

        public Criteria andCoLeaderLessThan(String value) {
            addCriterion("co_leader <", value, "coLeader");
            return (Criteria) this;
        }

        public Criteria andCoLeaderLessThanOrEqualTo(String value) {
            addCriterion("co_leader <=", value, "coLeader");
            return (Criteria) this;
        }

        public Criteria andCoLeaderLike(String value) {
            addCriterion("co_leader like", value, "coLeader");
            return (Criteria) this;
        }

        public Criteria andCoLeaderNotLike(String value) {
            addCriterion("co_leader not like", value, "coLeader");
            return (Criteria) this;
        }

        public Criteria andCoLeaderIn(List<String> values) {
            addCriterion("co_leader in", values, "coLeader");
            return (Criteria) this;
        }

        public Criteria andCoLeaderNotIn(List<String> values) {
            addCriterion("co_leader not in", values, "coLeader");
            return (Criteria) this;
        }

        public Criteria andCoLeaderBetween(String value1, String value2) {
            addCriterion("co_leader between", value1, value2, "coLeader");
            return (Criteria) this;
        }

        public Criteria andCoLeaderNotBetween(String value1, String value2) {
            addCriterion("co_leader not between", value1, value2, "coLeader");
            return (Criteria) this;
        }

        public Criteria andCoAddressIsNull() {
            addCriterion("co_address is null");
            return (Criteria) this;
        }

        public Criteria andCoAddressIsNotNull() {
            addCriterion("co_address is not null");
            return (Criteria) this;
        }

        public Criteria andCoAddressEqualTo(String value) {
            addCriterion("co_address =", value, "coAddress");
            return (Criteria) this;
        }

        public Criteria andCoAddressNotEqualTo(String value) {
            addCriterion("co_address <>", value, "coAddress");
            return (Criteria) this;
        }

        public Criteria andCoAddressGreaterThan(String value) {
            addCriterion("co_address >", value, "coAddress");
            return (Criteria) this;
        }

        public Criteria andCoAddressGreaterThanOrEqualTo(String value) {
            addCriterion("co_address >=", value, "coAddress");
            return (Criteria) this;
        }

        public Criteria andCoAddressLessThan(String value) {
            addCriterion("co_address <", value, "coAddress");
            return (Criteria) this;
        }

        public Criteria andCoAddressLessThanOrEqualTo(String value) {
            addCriterion("co_address <=", value, "coAddress");
            return (Criteria) this;
        }

        public Criteria andCoAddressLike(String value) {
            addCriterion("co_address like", value, "coAddress");
            return (Criteria) this;
        }

        public Criteria andCoAddressNotLike(String value) {
            addCriterion("co_address not like", value, "coAddress");
            return (Criteria) this;
        }

        public Criteria andCoAddressIn(List<String> values) {
            addCriterion("co_address in", values, "coAddress");
            return (Criteria) this;
        }

        public Criteria andCoAddressNotIn(List<String> values) {
            addCriterion("co_address not in", values, "coAddress");
            return (Criteria) this;
        }

        public Criteria andCoAddressBetween(String value1, String value2) {
            addCriterion("co_address between", value1, value2, "coAddress");
            return (Criteria) this;
        }

        public Criteria andCoAddressNotBetween(String value1, String value2) {
            addCriterion("co_address not between", value1, value2, "coAddress");
            return (Criteria) this;
        }

        public Criteria andCoLinkmanIsNull() {
            addCriterion("co_linkman is null");
            return (Criteria) this;
        }

        public Criteria andCoLinkmanIsNotNull() {
            addCriterion("co_linkman is not null");
            return (Criteria) this;
        }

        public Criteria andCoLinkmanEqualTo(String value) {
            addCriterion("co_linkman =", value, "coLinkman");
            return (Criteria) this;
        }

        public Criteria andCoLinkmanNotEqualTo(String value) {
            addCriterion("co_linkman <>", value, "coLinkman");
            return (Criteria) this;
        }

        public Criteria andCoLinkmanGreaterThan(String value) {
            addCriterion("co_linkman >", value, "coLinkman");
            return (Criteria) this;
        }

        public Criteria andCoLinkmanGreaterThanOrEqualTo(String value) {
            addCriterion("co_linkman >=", value, "coLinkman");
            return (Criteria) this;
        }

        public Criteria andCoLinkmanLessThan(String value) {
            addCriterion("co_linkman <", value, "coLinkman");
            return (Criteria) this;
        }

        public Criteria andCoLinkmanLessThanOrEqualTo(String value) {
            addCriterion("co_linkman <=", value, "coLinkman");
            return (Criteria) this;
        }

        public Criteria andCoLinkmanLike(String value) {
            addCriterion("co_linkman like", value, "coLinkman");
            return (Criteria) this;
        }

        public Criteria andCoLinkmanNotLike(String value) {
            addCriterion("co_linkman not like", value, "coLinkman");
            return (Criteria) this;
        }

        public Criteria andCoLinkmanIn(List<String> values) {
            addCriterion("co_linkman in", values, "coLinkman");
            return (Criteria) this;
        }

        public Criteria andCoLinkmanNotIn(List<String> values) {
            addCriterion("co_linkman not in", values, "coLinkman");
            return (Criteria) this;
        }

        public Criteria andCoLinkmanBetween(String value1, String value2) {
            addCriterion("co_linkman between", value1, value2, "coLinkman");
            return (Criteria) this;
        }

        public Criteria andCoLinkmanNotBetween(String value1, String value2) {
            addCriterion("co_linkman not between", value1, value2, "coLinkman");
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