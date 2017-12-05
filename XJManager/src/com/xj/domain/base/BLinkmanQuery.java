package com.xj.domain.base;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class BLinkmanQuery {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Integer pageNo = 1;

    protected Integer startRow;

    protected Integer pageSize = 10;

    protected String fields;

    public BLinkmanQuery() {
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

        public Criteria andLIdIsNull() {
            addCriterion("l_id is null");
            return (Criteria) this;
        }

        public Criteria andLIdIsNotNull() {
            addCriterion("l_id is not null");
            return (Criteria) this;
        }

        public Criteria andLIdEqualTo(String value) {
            addCriterion("l_id =", value, "lId");
            return (Criteria) this;
        }

        public Criteria andLIdNotEqualTo(String value) {
            addCriterion("l_id <>", value, "lId");
            return (Criteria) this;
        }

        public Criteria andLIdGreaterThan(String value) {
            addCriterion("l_id >", value, "lId");
            return (Criteria) this;
        }

        public Criteria andLIdGreaterThanOrEqualTo(String value) {
            addCriterion("l_id >=", value, "lId");
            return (Criteria) this;
        }

        public Criteria andLIdLessThan(String value) {
            addCriterion("l_id <", value, "lId");
            return (Criteria) this;
        }

        public Criteria andLIdLessThanOrEqualTo(String value) {
            addCriterion("l_id <=", value, "lId");
            return (Criteria) this;
        }

        public Criteria andLIdLike(String value) {
            addCriterion("l_id like", value, "lId");
            return (Criteria) this;
        }

        public Criteria andLIdNotLike(String value) {
            addCriterion("l_id not like", value, "lId");
            return (Criteria) this;
        }

        public Criteria andLIdIn(List<String> values) {
            addCriterion("l_id in", values, "lId");
            return (Criteria) this;
        }

        public Criteria andLIdNotIn(List<String> values) {
            addCriterion("l_id not in", values, "lId");
            return (Criteria) this;
        }

        public Criteria andLIdBetween(String value1, String value2) {
            addCriterion("l_id between", value1, value2, "lId");
            return (Criteria) this;
        }

        public Criteria andLIdNotBetween(String value1, String value2) {
            addCriterion("l_id not between", value1, value2, "lId");
            return (Criteria) this;
        }

        public Criteria andLNameIsNull() {
            addCriterion("l_name is null");
            return (Criteria) this;
        }

        public Criteria andLNameIsNotNull() {
            addCriterion("l_name is not null");
            return (Criteria) this;
        }

        public Criteria andLNameEqualTo(String value) {
            addCriterion("l_name =", value, "lName");
            return (Criteria) this;
        }

        public Criteria andLNameNotEqualTo(String value) {
            addCriterion("l_name <>", value, "lName");
            return (Criteria) this;
        }

        public Criteria andLNameGreaterThan(String value) {
            addCriterion("l_name >", value, "lName");
            return (Criteria) this;
        }

        public Criteria andLNameGreaterThanOrEqualTo(String value) {
            addCriterion("l_name >=", value, "lName");
            return (Criteria) this;
        }

        public Criteria andLNameLessThan(String value) {
            addCriterion("l_name <", value, "lName");
            return (Criteria) this;
        }

        public Criteria andLNameLessThanOrEqualTo(String value) {
            addCriterion("l_name <=", value, "lName");
            return (Criteria) this;
        }

        public Criteria andLNameLike(String value) {
            addCriterion("l_name like", value, "lName");
            return (Criteria) this;
        }

        public Criteria andLNameNotLike(String value) {
            addCriterion("l_name not like", value, "lName");
            return (Criteria) this;
        }

        public Criteria andLNameIn(List<String> values) {
            addCriterion("l_name in", values, "lName");
            return (Criteria) this;
        }

        public Criteria andLNameNotIn(List<String> values) {
            addCriterion("l_name not in", values, "lName");
            return (Criteria) this;
        }

        public Criteria andLNameBetween(String value1, String value2) {
            addCriterion("l_name between", value1, value2, "lName");
            return (Criteria) this;
        }

        public Criteria andLNameNotBetween(String value1, String value2) {
            addCriterion("l_name not between", value1, value2, "lName");
            return (Criteria) this;
        }

        public Criteria andLDutyIsNull() {
            addCriterion("l_duty is null");
            return (Criteria) this;
        }

        public Criteria andLDutyIsNotNull() {
            addCriterion("l_duty is not null");
            return (Criteria) this;
        }

        public Criteria andLDutyEqualTo(String value) {
            addCriterion("l_duty =", value, "lDuty");
            return (Criteria) this;
        }

        public Criteria andLDutyNotEqualTo(String value) {
            addCriterion("l_duty <>", value, "lDuty");
            return (Criteria) this;
        }

        public Criteria andLDutyGreaterThan(String value) {
            addCriterion("l_duty >", value, "lDuty");
            return (Criteria) this;
        }

        public Criteria andLDutyGreaterThanOrEqualTo(String value) {
            addCriterion("l_duty >=", value, "lDuty");
            return (Criteria) this;
        }

        public Criteria andLDutyLessThan(String value) {
            addCriterion("l_duty <", value, "lDuty");
            return (Criteria) this;
        }

        public Criteria andLDutyLessThanOrEqualTo(String value) {
            addCriterion("l_duty <=", value, "lDuty");
            return (Criteria) this;
        }

        public Criteria andLDutyLike(String value) {
            addCriterion("l_duty like", value, "lDuty");
            return (Criteria) this;
        }

        public Criteria andLDutyNotLike(String value) {
            addCriterion("l_duty not like", value, "lDuty");
            return (Criteria) this;
        }

        public Criteria andLDutyIn(List<String> values) {
            addCriterion("l_duty in", values, "lDuty");
            return (Criteria) this;
        }

        public Criteria andLDutyNotIn(List<String> values) {
            addCriterion("l_duty not in", values, "lDuty");
            return (Criteria) this;
        }

        public Criteria andLDutyBetween(String value1, String value2) {
            addCriterion("l_duty between", value1, value2, "lDuty");
            return (Criteria) this;
        }

        public Criteria andLDutyNotBetween(String value1, String value2) {
            addCriterion("l_duty not between", value1, value2, "lDuty");
            return (Criteria) this;
        }

        public Criteria andLPhoneIsNull() {
            addCriterion("l_phone is null");
            return (Criteria) this;
        }

        public Criteria andLPhoneIsNotNull() {
            addCriterion("l_phone is not null");
            return (Criteria) this;
        }

        public Criteria andLPhoneEqualTo(String value) {
            addCriterion("l_phone =", value, "lPhone");
            return (Criteria) this;
        }

        public Criteria andLPhoneNotEqualTo(String value) {
            addCriterion("l_phone <>", value, "lPhone");
            return (Criteria) this;
        }

        public Criteria andLPhoneGreaterThan(String value) {
            addCriterion("l_phone >", value, "lPhone");
            return (Criteria) this;
        }

        public Criteria andLPhoneGreaterThanOrEqualTo(String value) {
            addCriterion("l_phone >=", value, "lPhone");
            return (Criteria) this;
        }

        public Criteria andLPhoneLessThan(String value) {
            addCriterion("l_phone <", value, "lPhone");
            return (Criteria) this;
        }

        public Criteria andLPhoneLessThanOrEqualTo(String value) {
            addCriterion("l_phone <=", value, "lPhone");
            return (Criteria) this;
        }

        public Criteria andLPhoneLike(String value) {
            addCriterion("l_phone like", value, "lPhone");
            return (Criteria) this;
        }

        public Criteria andLPhoneNotLike(String value) {
            addCriterion("l_phone not like", value, "lPhone");
            return (Criteria) this;
        }

        public Criteria andLPhoneIn(List<String> values) {
            addCriterion("l_phone in", values, "lPhone");
            return (Criteria) this;
        }

        public Criteria andLPhoneNotIn(List<String> values) {
            addCriterion("l_phone not in", values, "lPhone");
            return (Criteria) this;
        }

        public Criteria andLPhoneBetween(String value1, String value2) {
            addCriterion("l_phone between", value1, value2, "lPhone");
            return (Criteria) this;
        }

        public Criteria andLPhoneNotBetween(String value1, String value2) {
            addCriterion("l_phone not between", value1, value2, "lPhone");
            return (Criteria) this;
        }

        public Criteria andLFaxIsNull() {
            addCriterion("l_fax is null");
            return (Criteria) this;
        }

        public Criteria andLFaxIsNotNull() {
            addCriterion("l_fax is not null");
            return (Criteria) this;
        }

        public Criteria andLFaxEqualTo(String value) {
            addCriterion("l_fax =", value, "lFax");
            return (Criteria) this;
        }

        public Criteria andLFaxNotEqualTo(String value) {
            addCriterion("l_fax <>", value, "lFax");
            return (Criteria) this;
        }

        public Criteria andLFaxGreaterThan(String value) {
            addCriterion("l_fax >", value, "lFax");
            return (Criteria) this;
        }

        public Criteria andLFaxGreaterThanOrEqualTo(String value) {
            addCriterion("l_fax >=", value, "lFax");
            return (Criteria) this;
        }

        public Criteria andLFaxLessThan(String value) {
            addCriterion("l_fax <", value, "lFax");
            return (Criteria) this;
        }

        public Criteria andLFaxLessThanOrEqualTo(String value) {
            addCriterion("l_fax <=", value, "lFax");
            return (Criteria) this;
        }

        public Criteria andLFaxLike(String value) {
            addCriterion("l_fax like", value, "lFax");
            return (Criteria) this;
        }

        public Criteria andLFaxNotLike(String value) {
            addCriterion("l_fax not like", value, "lFax");
            return (Criteria) this;
        }

        public Criteria andLFaxIn(List<String> values) {
            addCriterion("l_fax in", values, "lFax");
            return (Criteria) this;
        }

        public Criteria andLFaxNotIn(List<String> values) {
            addCriterion("l_fax not in", values, "lFax");
            return (Criteria) this;
        }

        public Criteria andLFaxBetween(String value1, String value2) {
            addCriterion("l_fax between", value1, value2, "lFax");
            return (Criteria) this;
        }

        public Criteria andLFaxNotBetween(String value1, String value2) {
            addCriterion("l_fax not between", value1, value2, "lFax");
            return (Criteria) this;
        }

        public Criteria andLTelephoneIsNull() {
            addCriterion("l_telephone is null");
            return (Criteria) this;
        }

        public Criteria andLTelephoneIsNotNull() {
            addCriterion("l_telephone is not null");
            return (Criteria) this;
        }

        public Criteria andLTelephoneEqualTo(String value) {
            addCriterion("l_telephone =", value, "lTelephone");
            return (Criteria) this;
        }

        public Criteria andLTelephoneNotEqualTo(String value) {
            addCriterion("l_telephone <>", value, "lTelephone");
            return (Criteria) this;
        }

        public Criteria andLTelephoneGreaterThan(String value) {
            addCriterion("l_telephone >", value, "lTelephone");
            return (Criteria) this;
        }

        public Criteria andLTelephoneGreaterThanOrEqualTo(String value) {
            addCriterion("l_telephone >=", value, "lTelephone");
            return (Criteria) this;
        }

        public Criteria andLTelephoneLessThan(String value) {
            addCriterion("l_telephone <", value, "lTelephone");
            return (Criteria) this;
        }

        public Criteria andLTelephoneLessThanOrEqualTo(String value) {
            addCriterion("l_telephone <=", value, "lTelephone");
            return (Criteria) this;
        }

        public Criteria andLTelephoneLike(String value) {
            addCriterion("l_telephone like", value, "lTelephone");
            return (Criteria) this;
        }

        public Criteria andLTelephoneNotLike(String value) {
            addCriterion("l_telephone not like", value, "lTelephone");
            return (Criteria) this;
        }

        public Criteria andLTelephoneIn(List<String> values) {
            addCriterion("l_telephone in", values, "lTelephone");
            return (Criteria) this;
        }

        public Criteria andLTelephoneNotIn(List<String> values) {
            addCriterion("l_telephone not in", values, "lTelephone");
            return (Criteria) this;
        }

        public Criteria andLTelephoneBetween(String value1, String value2) {
            addCriterion("l_telephone between", value1, value2, "lTelephone");
            return (Criteria) this;
        }

        public Criteria andLTelephoneNotBetween(String value1, String value2) {
            addCriterion("l_telephone not between", value1, value2, "lTelephone");
            return (Criteria) this;
        }

        public Criteria andLEmailIsNull() {
            addCriterion("l_email is null");
            return (Criteria) this;
        }

        public Criteria andLEmailIsNotNull() {
            addCriterion("l_email is not null");
            return (Criteria) this;
        }

        public Criteria andLEmailEqualTo(String value) {
            addCriterion("l_email =", value, "lEmail");
            return (Criteria) this;
        }

        public Criteria andLEmailNotEqualTo(String value) {
            addCriterion("l_email <>", value, "lEmail");
            return (Criteria) this;
        }

        public Criteria andLEmailGreaterThan(String value) {
            addCriterion("l_email >", value, "lEmail");
            return (Criteria) this;
        }

        public Criteria andLEmailGreaterThanOrEqualTo(String value) {
            addCriterion("l_email >=", value, "lEmail");
            return (Criteria) this;
        }

        public Criteria andLEmailLessThan(String value) {
            addCriterion("l_email <", value, "lEmail");
            return (Criteria) this;
        }

        public Criteria andLEmailLessThanOrEqualTo(String value) {
            addCriterion("l_email <=", value, "lEmail");
            return (Criteria) this;
        }

        public Criteria andLEmailLike(String value) {
            addCriterion("l_email like", value, "lEmail");
            return (Criteria) this;
        }

        public Criteria andLEmailNotLike(String value) {
            addCriterion("l_email not like", value, "lEmail");
            return (Criteria) this;
        }

        public Criteria andLEmailIn(List<String> values) {
            addCriterion("l_email in", values, "lEmail");
            return (Criteria) this;
        }

        public Criteria andLEmailNotIn(List<String> values) {
            addCriterion("l_email not in", values, "lEmail");
            return (Criteria) this;
        }

        public Criteria andLEmailBetween(String value1, String value2) {
            addCriterion("l_email between", value1, value2, "lEmail");
            return (Criteria) this;
        }

        public Criteria andLEmailNotBetween(String value1, String value2) {
            addCriterion("l_email not between", value1, value2, "lEmail");
            return (Criteria) this;
        }

        public Criteria andLSexIsNull() {
            addCriterion("l_sex is null");
            return (Criteria) this;
        }

        public Criteria andLSexIsNotNull() {
            addCriterion("l_sex is not null");
            return (Criteria) this;
        }

        public Criteria andLSexEqualTo(String value) {
            addCriterion("l_sex =", value, "lSex");
            return (Criteria) this;
        }

        public Criteria andLSexNotEqualTo(String value) {
            addCriterion("l_sex <>", value, "lSex");
            return (Criteria) this;
        }

        public Criteria andLSexGreaterThan(String value) {
            addCriterion("l_sex >", value, "lSex");
            return (Criteria) this;
        }

        public Criteria andLSexGreaterThanOrEqualTo(String value) {
            addCriterion("l_sex >=", value, "lSex");
            return (Criteria) this;
        }

        public Criteria andLSexLessThan(String value) {
            addCriterion("l_sex <", value, "lSex");
            return (Criteria) this;
        }

        public Criteria andLSexLessThanOrEqualTo(String value) {
            addCriterion("l_sex <=", value, "lSex");
            return (Criteria) this;
        }

        public Criteria andLSexLike(String value) {
            addCriterion("l_sex like", value, "lSex");
            return (Criteria) this;
        }

        public Criteria andLSexNotLike(String value) {
            addCriterion("l_sex not like", value, "lSex");
            return (Criteria) this;
        }

        public Criteria andLSexIn(List<String> values) {
            addCriterion("l_sex in", values, "lSex");
            return (Criteria) this;
        }

        public Criteria andLSexNotIn(List<String> values) {
            addCriterion("l_sex not in", values, "lSex");
            return (Criteria) this;
        }

        public Criteria andLSexBetween(String value1, String value2) {
            addCriterion("l_sex between", value1, value2, "lSex");
            return (Criteria) this;
        }

        public Criteria andLSexNotBetween(String value1, String value2) {
            addCriterion("l_sex not between", value1, value2, "lSex");
            return (Criteria) this;
        }

        public Criteria andLCardIsNull() {
            addCriterion("l_card is null");
            return (Criteria) this;
        }

        public Criteria andLCardIsNotNull() {
            addCriterion("l_card is not null");
            return (Criteria) this;
        }

        public Criteria andLCardEqualTo(String value) {
            addCriterion("l_card =", value, "lCard");
            return (Criteria) this;
        }

        public Criteria andLCardNotEqualTo(String value) {
            addCriterion("l_card <>", value, "lCard");
            return (Criteria) this;
        }

        public Criteria andLCardGreaterThan(String value) {
            addCriterion("l_card >", value, "lCard");
            return (Criteria) this;
        }

        public Criteria andLCardGreaterThanOrEqualTo(String value) {
            addCriterion("l_card >=", value, "lCard");
            return (Criteria) this;
        }

        public Criteria andLCardLessThan(String value) {
            addCriterion("l_card <", value, "lCard");
            return (Criteria) this;
        }

        public Criteria andLCardLessThanOrEqualTo(String value) {
            addCriterion("l_card <=", value, "lCard");
            return (Criteria) this;
        }

        public Criteria andLCardLike(String value) {
            addCriterion("l_card like", value, "lCard");
            return (Criteria) this;
        }

        public Criteria andLCardNotLike(String value) {
            addCriterion("l_card not like", value, "lCard");
            return (Criteria) this;
        }

        public Criteria andLCardIn(List<String> values) {
            addCriterion("l_card in", values, "lCard");
            return (Criteria) this;
        }

        public Criteria andLCardNotIn(List<String> values) {
            addCriterion("l_card not in", values, "lCard");
            return (Criteria) this;
        }

        public Criteria andLCardBetween(String value1, String value2) {
            addCriterion("l_card between", value1, value2, "lCard");
            return (Criteria) this;
        }

        public Criteria andLCardNotBetween(String value1, String value2) {
            addCriterion("l_card not between", value1, value2, "lCard");
            return (Criteria) this;
        }

        public Criteria andLBirthplaceIsNull() {
            addCriterion("l_birthplace is null");
            return (Criteria) this;
        }

        public Criteria andLBirthplaceIsNotNull() {
            addCriterion("l_birthplace is not null");
            return (Criteria) this;
        }

        public Criteria andLBirthplaceEqualTo(String value) {
            addCriterion("l_birthplace =", value, "lBirthplace");
            return (Criteria) this;
        }

        public Criteria andLBirthplaceNotEqualTo(String value) {
            addCriterion("l_birthplace <>", value, "lBirthplace");
            return (Criteria) this;
        }

        public Criteria andLBirthplaceGreaterThan(String value) {
            addCriterion("l_birthplace >", value, "lBirthplace");
            return (Criteria) this;
        }

        public Criteria andLBirthplaceGreaterThanOrEqualTo(String value) {
            addCriterion("l_birthplace >=", value, "lBirthplace");
            return (Criteria) this;
        }

        public Criteria andLBirthplaceLessThan(String value) {
            addCriterion("l_birthplace <", value, "lBirthplace");
            return (Criteria) this;
        }

        public Criteria andLBirthplaceLessThanOrEqualTo(String value) {
            addCriterion("l_birthplace <=", value, "lBirthplace");
            return (Criteria) this;
        }

        public Criteria andLBirthplaceLike(String value) {
            addCriterion("l_birthplace like", value, "lBirthplace");
            return (Criteria) this;
        }

        public Criteria andLBirthplaceNotLike(String value) {
            addCriterion("l_birthplace not like", value, "lBirthplace");
            return (Criteria) this;
        }

        public Criteria andLBirthplaceIn(List<String> values) {
            addCriterion("l_birthplace in", values, "lBirthplace");
            return (Criteria) this;
        }

        public Criteria andLBirthplaceNotIn(List<String> values) {
            addCriterion("l_birthplace not in", values, "lBirthplace");
            return (Criteria) this;
        }

        public Criteria andLBirthplaceBetween(String value1, String value2) {
            addCriterion("l_birthplace between", value1, value2, "lBirthplace");
            return (Criteria) this;
        }

        public Criteria andLBirthplaceNotBetween(String value1, String value2) {
            addCriterion("l_birthplace not between", value1, value2, "lBirthplace");
            return (Criteria) this;
        }

        public Criteria andLAddressIsNull() {
            addCriterion("l_address is null");
            return (Criteria) this;
        }

        public Criteria andLAddressIsNotNull() {
            addCriterion("l_address is not null");
            return (Criteria) this;
        }

        public Criteria andLAddressEqualTo(String value) {
            addCriterion("l_address =", value, "lAddress");
            return (Criteria) this;
        }

        public Criteria andLAddressNotEqualTo(String value) {
            addCriterion("l_address <>", value, "lAddress");
            return (Criteria) this;
        }

        public Criteria andLAddressGreaterThan(String value) {
            addCriterion("l_address >", value, "lAddress");
            return (Criteria) this;
        }

        public Criteria andLAddressGreaterThanOrEqualTo(String value) {
            addCriterion("l_address >=", value, "lAddress");
            return (Criteria) this;
        }

        public Criteria andLAddressLessThan(String value) {
            addCriterion("l_address <", value, "lAddress");
            return (Criteria) this;
        }

        public Criteria andLAddressLessThanOrEqualTo(String value) {
            addCriterion("l_address <=", value, "lAddress");
            return (Criteria) this;
        }

        public Criteria andLAddressLike(String value) {
            addCriterion("l_address like", value, "lAddress");
            return (Criteria) this;
        }

        public Criteria andLAddressNotLike(String value) {
            addCriterion("l_address not like", value, "lAddress");
            return (Criteria) this;
        }

        public Criteria andLAddressIn(List<String> values) {
            addCriterion("l_address in", values, "lAddress");
            return (Criteria) this;
        }

        public Criteria andLAddressNotIn(List<String> values) {
            addCriterion("l_address not in", values, "lAddress");
            return (Criteria) this;
        }

        public Criteria andLAddressBetween(String value1, String value2) {
            addCriterion("l_address between", value1, value2, "lAddress");
            return (Criteria) this;
        }

        public Criteria andLAddressNotBetween(String value1, String value2) {
            addCriterion("l_address not between", value1, value2, "lAddress");
            return (Criteria) this;
        }

        public Criteria andLAgeIsNull() {
            addCriterion("l_age is null");
            return (Criteria) this;
        }

        public Criteria andLAgeIsNotNull() {
            addCriterion("l_age is not null");
            return (Criteria) this;
        }

        public Criteria andLAgeEqualTo(Byte value) {
            addCriterion("l_age =", value, "lAge");
            return (Criteria) this;
        }

        public Criteria andLAgeNotEqualTo(Byte value) {
            addCriterion("l_age <>", value, "lAge");
            return (Criteria) this;
        }

        public Criteria andLAgeGreaterThan(Byte value) {
            addCriterion("l_age >", value, "lAge");
            return (Criteria) this;
        }

        public Criteria andLAgeGreaterThanOrEqualTo(Byte value) {
            addCriterion("l_age >=", value, "lAge");
            return (Criteria) this;
        }

        public Criteria andLAgeLessThan(Byte value) {
            addCriterion("l_age <", value, "lAge");
            return (Criteria) this;
        }

        public Criteria andLAgeLessThanOrEqualTo(Byte value) {
            addCriterion("l_age <=", value, "lAge");
            return (Criteria) this;
        }

        public Criteria andLAgeIn(List<Byte> values) {
            addCriterion("l_age in", values, "lAge");
            return (Criteria) this;
        }

        public Criteria andLAgeNotIn(List<Byte> values) {
            addCriterion("l_age not in", values, "lAge");
            return (Criteria) this;
        }

        public Criteria andLAgeBetween(Byte value1, Byte value2) {
            addCriterion("l_age between", value1, value2, "lAge");
            return (Criteria) this;
        }

        public Criteria andLAgeNotBetween(Byte value1, Byte value2) {
            addCriterion("l_age not between", value1, value2, "lAge");
            return (Criteria) this;
        }

        public Criteria andLEducationIsNull() {
            addCriterion("l_education is null");
            return (Criteria) this;
        }

        public Criteria andLEducationIsNotNull() {
            addCriterion("l_education is not null");
            return (Criteria) this;
        }

        public Criteria andLEducationEqualTo(String value) {
            addCriterion("l_education =", value, "lEducation");
            return (Criteria) this;
        }

        public Criteria andLEducationNotEqualTo(String value) {
            addCriterion("l_education <>", value, "lEducation");
            return (Criteria) this;
        }

        public Criteria andLEducationGreaterThan(String value) {
            addCriterion("l_education >", value, "lEducation");
            return (Criteria) this;
        }

        public Criteria andLEducationGreaterThanOrEqualTo(String value) {
            addCriterion("l_education >=", value, "lEducation");
            return (Criteria) this;
        }

        public Criteria andLEducationLessThan(String value) {
            addCriterion("l_education <", value, "lEducation");
            return (Criteria) this;
        }

        public Criteria andLEducationLessThanOrEqualTo(String value) {
            addCriterion("l_education <=", value, "lEducation");
            return (Criteria) this;
        }

        public Criteria andLEducationLike(String value) {
            addCriterion("l_education like", value, "lEducation");
            return (Criteria) this;
        }

        public Criteria andLEducationNotLike(String value) {
            addCriterion("l_education not like", value, "lEducation");
            return (Criteria) this;
        }

        public Criteria andLEducationIn(List<String> values) {
            addCriterion("l_education in", values, "lEducation");
            return (Criteria) this;
        }

        public Criteria andLEducationNotIn(List<String> values) {
            addCriterion("l_education not in", values, "lEducation");
            return (Criteria) this;
        }

        public Criteria andLEducationBetween(String value1, String value2) {
            addCriterion("l_education between", value1, value2, "lEducation");
            return (Criteria) this;
        }

        public Criteria andLEducationNotBetween(String value1, String value2) {
            addCriterion("l_education not between", value1, value2, "lEducation");
            return (Criteria) this;
        }

        public Criteria andLIntimeIsNull() {
            addCriterion("l_intime is null");
            return (Criteria) this;
        }

        public Criteria andLIntimeIsNotNull() {
            addCriterion("l_intime is not null");
            return (Criteria) this;
        }

        public Criteria andLIntimeEqualTo(Byte value) {
            addCriterion("l_intime =", value, "lIntime");
            return (Criteria) this;
        }

        public Criteria andLIntimeNotEqualTo(Byte value) {
            addCriterion("l_intime <>", value, "lIntime");
            return (Criteria) this;
        }

        public Criteria andLIntimeGreaterThan(Byte value) {
            addCriterion("l_intime >", value, "lIntime");
            return (Criteria) this;
        }

        public Criteria andLIntimeGreaterThanOrEqualTo(Byte value) {
            addCriterion("l_intime >=", value, "lIntime");
            return (Criteria) this;
        }

        public Criteria andLIntimeLessThan(Byte value) {
            addCriterion("l_intime <", value, "lIntime");
            return (Criteria) this;
        }

        public Criteria andLIntimeLessThanOrEqualTo(Byte value) {
            addCriterion("l_intime <=", value, "lIntime");
            return (Criteria) this;
        }

        public Criteria andLIntimeIn(List<Byte> values) {
            addCriterion("l_intime in", values, "lIntime");
            return (Criteria) this;
        }

        public Criteria andLIntimeNotIn(List<Byte> values) {
            addCriterion("l_intime not in", values, "lIntime");
            return (Criteria) this;
        }

        public Criteria andLIntimeBetween(Byte value1, Byte value2) {
            addCriterion("l_intime between", value1, value2, "lIntime");
            return (Criteria) this;
        }

        public Criteria andLIntimeNotBetween(Byte value1, Byte value2) {
            addCriterion("l_intime not between", value1, value2, "lIntime");
            return (Criteria) this;
        }

        public Criteria andLCidIsNull() {
            addCriterion("l_cid is null");
            return (Criteria) this;
        }

        public Criteria andLCidIsNotNull() {
            addCriterion("l_cid is not null");
            return (Criteria) this;
        }

        public Criteria andLCidEqualTo(Integer value) {
            addCriterion("l_cid =", value, "lCid");
            return (Criteria) this;
        }

        public Criteria andLCidNotEqualTo(Integer value) {
            addCriterion("l_cid <>", value, "lCid");
            return (Criteria) this;
        }

        public Criteria andLCidGreaterThan(Integer value) {
            addCriterion("l_cid >", value, "lCid");
            return (Criteria) this;
        }

        public Criteria andLCidGreaterThanOrEqualTo(Integer value) {
            addCriterion("l_cid >=", value, "lCid");
            return (Criteria) this;
        }

        public Criteria andLCidLessThan(Integer value) {
            addCriterion("l_cid <", value, "lCid");
            return (Criteria) this;
        }

        public Criteria andLCidLessThanOrEqualTo(Integer value) {
            addCriterion("l_cid <=", value, "lCid");
            return (Criteria) this;
        }

        public Criteria andLCidIn(List<Integer> values) {
            addCriterion("l_cid in", values, "lCid");
            return (Criteria) this;
        }

        public Criteria andLCidNotIn(List<Integer> values) {
            addCriterion("l_cid not in", values, "lCid");
            return (Criteria) this;
        }

        public Criteria andLCidBetween(Integer value1, Integer value2) {
            addCriterion("l_cid between", value1, value2, "lCid");
            return (Criteria) this;
        }

        public Criteria andLCidNotBetween(Integer value1, Integer value2) {
            addCriterion("l_cid not between", value1, value2, "lCid");
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