package com.xj.domain.base;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class BCustomerQuery {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Integer pageNo = 1;

    protected Integer startRow;

    protected Integer pageSize = 10;

    protected String fields;

    public BCustomerQuery() {
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

        public Criteria andCIdIsNull() {
            addCriterion("c_id is null");
            return (Criteria) this;
        }

        public Criteria andCIdIsNotNull() {
            addCriterion("c_id is not null");
            return (Criteria) this;
        }

        public Criteria andCIdEqualTo(Integer value) {
            addCriterion("c_id =", value, "cId");
            return (Criteria) this;
        }

        public Criteria andCIdNotEqualTo(Integer value) {
            addCriterion("c_id <>", value, "cId");
            return (Criteria) this;
        }

        public Criteria andCIdGreaterThan(Integer value) {
            addCriterion("c_id >", value, "cId");
            return (Criteria) this;
        }

        public Criteria andCIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("c_id >=", value, "cId");
            return (Criteria) this;
        }

        public Criteria andCIdLessThan(Integer value) {
            addCriterion("c_id <", value, "cId");
            return (Criteria) this;
        }

        public Criteria andCIdLessThanOrEqualTo(Integer value) {
            addCriterion("c_id <=", value, "cId");
            return (Criteria) this;
        }

        public Criteria andCIdIn(List<Integer> values) {
            addCriterion("c_id in", values, "cId");
            return (Criteria) this;
        }

        public Criteria andCIdNotIn(List<Integer> values) {
            addCriterion("c_id not in", values, "cId");
            return (Criteria) this;
        }

        public Criteria andCIdBetween(Integer value1, Integer value2) {
            addCriterion("c_id between", value1, value2, "cId");
            return (Criteria) this;
        }

        public Criteria andCIdNotBetween(Integer value1, Integer value2) {
            addCriterion("c_id not between", value1, value2, "cId");
            return (Criteria) this;
        }

        public Criteria andCIidIsNull() {
            addCriterion("c_iid is null");
            return (Criteria) this;
        }

        public Criteria andCIidIsNotNull() {
            addCriterion("c_iid is not null");
            return (Criteria) this;
        }

        public Criteria andCIidEqualTo(Integer value) {
            addCriterion("c_iid =", value, "cIid");
            return (Criteria) this;
        }

        public Criteria andCIidNotEqualTo(Integer value) {
            addCriterion("c_iid <>", value, "cIid");
            return (Criteria) this;
        }

        public Criteria andCIidGreaterThan(Integer value) {
            addCriterion("c_iid >", value, "cIid");
            return (Criteria) this;
        }

        public Criteria andCIidGreaterThanOrEqualTo(Integer value) {
            addCriterion("c_iid >=", value, "cIid");
            return (Criteria) this;
        }

        public Criteria andCIidLessThan(Integer value) {
            addCriterion("c_iid <", value, "cIid");
            return (Criteria) this;
        }

        public Criteria andCIidLessThanOrEqualTo(Integer value) {
            addCriterion("c_iid <=", value, "cIid");
            return (Criteria) this;
        }

        public Criteria andCIidIn(List<Integer> values) {
            addCriterion("c_iid in", values, "cIid");
            return (Criteria) this;
        }

        public Criteria andCIidNotIn(List<Integer> values) {
            addCriterion("c_iid not in", values, "cIid");
            return (Criteria) this;
        }

        public Criteria andCIidBetween(Integer value1, Integer value2) {
            addCriterion("c_iid between", value1, value2, "cIid");
            return (Criteria) this;
        }

        public Criteria andCIidNotBetween(Integer value1, Integer value2) {
            addCriterion("c_iid not between", value1, value2, "cIid");
            return (Criteria) this;
        }

        public Criteria andCTypeIsNull() {
            addCriterion("c_type is null");
            return (Criteria) this;
        }

        public Criteria andCTypeIsNotNull() {
            addCriterion("c_type is not null");
            return (Criteria) this;
        }

        public Criteria andCTypeEqualTo(Byte value) {
            addCriterion("c_type =", value, "cType");
            return (Criteria) this;
        }

        public Criteria andCTypeNotEqualTo(Byte value) {
            addCriterion("c_type <>", value, "cType");
            return (Criteria) this;
        }

        public Criteria andCTypeGreaterThan(Byte value) {
            addCriterion("c_type >", value, "cType");
            return (Criteria) this;
        }

        public Criteria andCTypeGreaterThanOrEqualTo(Byte value) {
            addCriterion("c_type >=", value, "cType");
            return (Criteria) this;
        }

        public Criteria andCTypeLessThan(Byte value) {
            addCriterion("c_type <", value, "cType");
            return (Criteria) this;
        }

        public Criteria andCTypeLessThanOrEqualTo(Byte value) {
            addCriterion("c_type <=", value, "cType");
            return (Criteria) this;
        }

        public Criteria andCTypeIn(List<Byte> values) {
            addCriterion("c_type in", values, "cType");
            return (Criteria) this;
        }

        public Criteria andCTypeNotIn(List<Byte> values) {
            addCriterion("c_type not in", values, "cType");
            return (Criteria) this;
        }

        public Criteria andCTypeBetween(Byte value1, Byte value2) {
            addCriterion("c_type between", value1, value2, "cType");
            return (Criteria) this;
        }

        public Criteria andCTypeNotBetween(Byte value1, Byte value2) {
            addCriterion("c_type not between", value1, value2, "cType");
            return (Criteria) this;
        }

        public Criteria andCNameIsNull() {
            addCriterion("c_name is null");
            return (Criteria) this;
        }

        public Criteria andCNameIsNotNull() {
            addCriterion("c_name is not null");
            return (Criteria) this;
        }

        public Criteria andCNameEqualTo(String value) {
            addCriterion("c_name =", value, "cName");
            return (Criteria) this;
        }

        public Criteria andCNameNotEqualTo(String value) {
            addCriterion("c_name <>", value, "cName");
            return (Criteria) this;
        }

        public Criteria andCNameGreaterThan(String value) {
            addCriterion("c_name >", value, "cName");
            return (Criteria) this;
        }

        public Criteria andCNameGreaterThanOrEqualTo(String value) {
            addCriterion("c_name >=", value, "cName");
            return (Criteria) this;
        }

        public Criteria andCNameLessThan(String value) {
            addCriterion("c_name <", value, "cName");
            return (Criteria) this;
        }

        public Criteria andCNameLessThanOrEqualTo(String value) {
            addCriterion("c_name <=", value, "cName");
            return (Criteria) this;
        }

        public Criteria andCNameLike(String value) {
            addCriterion("c_name like", value, "cName");
            return (Criteria) this;
        }

        public Criteria andCNameNotLike(String value) {
            addCriterion("c_name not like", value, "cName");
            return (Criteria) this;
        }

        public Criteria andCNameIn(List<String> values) {
            addCriterion("c_name in", values, "cName");
            return (Criteria) this;
        }

        public Criteria andCNameNotIn(List<String> values) {
            addCriterion("c_name not in", values, "cName");
            return (Criteria) this;
        }

        public Criteria andCNameBetween(String value1, String value2) {
            addCriterion("c_name between", value1, value2, "cName");
            return (Criteria) this;
        }

        public Criteria andCNameNotBetween(String value1, String value2) {
            addCriterion("c_name not between", value1, value2, "cName");
            return (Criteria) this;
        }

        public Criteria andCShortIsNull() {
            addCriterion("c_short is null");
            return (Criteria) this;
        }

        public Criteria andCShortIsNotNull() {
            addCriterion("c_short is not null");
            return (Criteria) this;
        }

        public Criteria andCShortEqualTo(String value) {
            addCriterion("c_short =", value, "cShort");
            return (Criteria) this;
        }

        public Criteria andCShortNotEqualTo(String value) {
            addCriterion("c_short <>", value, "cShort");
            return (Criteria) this;
        }

        public Criteria andCShortGreaterThan(String value) {
            addCriterion("c_short >", value, "cShort");
            return (Criteria) this;
        }

        public Criteria andCShortGreaterThanOrEqualTo(String value) {
            addCriterion("c_short >=", value, "cShort");
            return (Criteria) this;
        }

        public Criteria andCShortLessThan(String value) {
            addCriterion("c_short <", value, "cShort");
            return (Criteria) this;
        }

        public Criteria andCShortLessThanOrEqualTo(String value) {
            addCriterion("c_short <=", value, "cShort");
            return (Criteria) this;
        }

        public Criteria andCShortLike(String value) {
            addCriterion("c_short like", value, "cShort");
            return (Criteria) this;
        }

        public Criteria andCShortNotLike(String value) {
            addCriterion("c_short not like", value, "cShort");
            return (Criteria) this;
        }

        public Criteria andCShortIn(List<String> values) {
            addCriterion("c_short in", values, "cShort");
            return (Criteria) this;
        }

        public Criteria andCShortNotIn(List<String> values) {
            addCriterion("c_short not in", values, "cShort");
            return (Criteria) this;
        }

        public Criteria andCShortBetween(String value1, String value2) {
            addCriterion("c_short between", value1, value2, "cShort");
            return (Criteria) this;
        }

        public Criteria andCShortNotBetween(String value1, String value2) {
            addCriterion("c_short not between", value1, value2, "cShort");
            return (Criteria) this;
        }

        public Criteria andCDepartmentIsNull() {
            addCriterion("c_department is null");
            return (Criteria) this;
        }

        public Criteria andCDepartmentIsNotNull() {
            addCriterion("c_department is not null");
            return (Criteria) this;
        }

        public Criteria andCDepartmentEqualTo(Byte value) {
            addCriterion("c_department =", value, "cDepartment");
            return (Criteria) this;
        }

        public Criteria andCDepartmentNotEqualTo(Byte value) {
            addCriterion("c_department <>", value, "cDepartment");
            return (Criteria) this;
        }

        public Criteria andCDepartmentGreaterThan(Byte value) {
            addCriterion("c_department >", value, "cDepartment");
            return (Criteria) this;
        }

        public Criteria andCDepartmentGreaterThanOrEqualTo(Byte value) {
            addCriterion("c_department >=", value, "cDepartment");
            return (Criteria) this;
        }

        public Criteria andCDepartmentLessThan(Byte value) {
            addCriterion("c_department <", value, "cDepartment");
            return (Criteria) this;
        }

        public Criteria andCDepartmentLessThanOrEqualTo(Byte value) {
            addCriterion("c_department <=", value, "cDepartment");
            return (Criteria) this;
        }

        public Criteria andCDepartmentIn(List<Byte> values) {
            addCriterion("c_department in", values, "cDepartment");
            return (Criteria) this;
        }

        public Criteria andCDepartmentNotIn(List<Byte> values) {
            addCriterion("c_department not in", values, "cDepartment");
            return (Criteria) this;
        }

        public Criteria andCDepartmentBetween(Byte value1, Byte value2) {
            addCriterion("c_department between", value1, value2, "cDepartment");
            return (Criteria) this;
        }

        public Criteria andCDepartmentNotBetween(Byte value1, Byte value2) {
            addCriterion("c_department not between", value1, value2, "cDepartment");
            return (Criteria) this;
        }

        public Criteria andCCompanytypeIsNull() {
            addCriterion("c_companytype is null");
            return (Criteria) this;
        }

        public Criteria andCCompanytypeIsNotNull() {
            addCriterion("c_companytype is not null");
            return (Criteria) this;
        }

        public Criteria andCCompanytypeEqualTo(Byte value) {
            addCriterion("c_companytype =", value, "cCompanytype");
            return (Criteria) this;
        }

        public Criteria andCCompanytypeNotEqualTo(Byte value) {
            addCriterion("c_companytype <>", value, "cCompanytype");
            return (Criteria) this;
        }

        public Criteria andCCompanytypeGreaterThan(Byte value) {
            addCriterion("c_companytype >", value, "cCompanytype");
            return (Criteria) this;
        }

        public Criteria andCCompanytypeGreaterThanOrEqualTo(Byte value) {
            addCriterion("c_companytype >=", value, "cCompanytype");
            return (Criteria) this;
        }

        public Criteria andCCompanytypeLessThan(Byte value) {
            addCriterion("c_companytype <", value, "cCompanytype");
            return (Criteria) this;
        }

        public Criteria andCCompanytypeLessThanOrEqualTo(Byte value) {
            addCriterion("c_companytype <=", value, "cCompanytype");
            return (Criteria) this;
        }

        public Criteria andCCompanytypeIn(List<Byte> values) {
            addCriterion("c_companytype in", values, "cCompanytype");
            return (Criteria) this;
        }

        public Criteria andCCompanytypeNotIn(List<Byte> values) {
            addCriterion("c_companytype not in", values, "cCompanytype");
            return (Criteria) this;
        }

        public Criteria andCCompanytypeBetween(Byte value1, Byte value2) {
            addCriterion("c_companytype between", value1, value2, "cCompanytype");
            return (Criteria) this;
        }

        public Criteria andCCompanytypeNotBetween(Byte value1, Byte value2) {
            addCriterion("c_companytype not between", value1, value2, "cCompanytype");
            return (Criteria) this;
        }

        public Criteria andCScopeIsNull() {
            addCriterion("c_scope is null");
            return (Criteria) this;
        }

        public Criteria andCScopeIsNotNull() {
            addCriterion("c_scope is not null");
            return (Criteria) this;
        }

        public Criteria andCScopeEqualTo(String value) {
            addCriterion("c_scope =", value, "cScope");
            return (Criteria) this;
        }

        public Criteria andCScopeNotEqualTo(String value) {
            addCriterion("c_scope <>", value, "cScope");
            return (Criteria) this;
        }

        public Criteria andCScopeGreaterThan(String value) {
            addCriterion("c_scope >", value, "cScope");
            return (Criteria) this;
        }

        public Criteria andCScopeGreaterThanOrEqualTo(String value) {
            addCriterion("c_scope >=", value, "cScope");
            return (Criteria) this;
        }

        public Criteria andCScopeLessThan(String value) {
            addCriterion("c_scope <", value, "cScope");
            return (Criteria) this;
        }

        public Criteria andCScopeLessThanOrEqualTo(String value) {
            addCriterion("c_scope <=", value, "cScope");
            return (Criteria) this;
        }

        public Criteria andCScopeLike(String value) {
            addCriterion("c_scope like", value, "cScope");
            return (Criteria) this;
        }

        public Criteria andCScopeNotLike(String value) {
            addCriterion("c_scope not like", value, "cScope");
            return (Criteria) this;
        }

        public Criteria andCScopeIn(List<String> values) {
            addCriterion("c_scope in", values, "cScope");
            return (Criteria) this;
        }

        public Criteria andCScopeNotIn(List<String> values) {
            addCriterion("c_scope not in", values, "cScope");
            return (Criteria) this;
        }

        public Criteria andCScopeBetween(String value1, String value2) {
            addCriterion("c_scope between", value1, value2, "cScope");
            return (Criteria) this;
        }

        public Criteria andCScopeNotBetween(String value1, String value2) {
            addCriterion("c_scope not between", value1, value2, "cScope");
            return (Criteria) this;
        }

        public Criteria andCLegalIsNull() {
            addCriterion("c_legal is null");
            return (Criteria) this;
        }

        public Criteria andCLegalIsNotNull() {
            addCriterion("c_legal is not null");
            return (Criteria) this;
        }

        public Criteria andCLegalEqualTo(String value) {
            addCriterion("c_legal =", value, "cLegal");
            return (Criteria) this;
        }

        public Criteria andCLegalNotEqualTo(String value) {
            addCriterion("c_legal <>", value, "cLegal");
            return (Criteria) this;
        }

        public Criteria andCLegalGreaterThan(String value) {
            addCriterion("c_legal >", value, "cLegal");
            return (Criteria) this;
        }

        public Criteria andCLegalGreaterThanOrEqualTo(String value) {
            addCriterion("c_legal >=", value, "cLegal");
            return (Criteria) this;
        }

        public Criteria andCLegalLessThan(String value) {
            addCriterion("c_legal <", value, "cLegal");
            return (Criteria) this;
        }

        public Criteria andCLegalLessThanOrEqualTo(String value) {
            addCriterion("c_legal <=", value, "cLegal");
            return (Criteria) this;
        }

        public Criteria andCLegalLike(String value) {
            addCriterion("c_legal like", value, "cLegal");
            return (Criteria) this;
        }

        public Criteria andCLegalNotLike(String value) {
            addCriterion("c_legal not like", value, "cLegal");
            return (Criteria) this;
        }

        public Criteria andCLegalIn(List<String> values) {
            addCriterion("c_legal in", values, "cLegal");
            return (Criteria) this;
        }

        public Criteria andCLegalNotIn(List<String> values) {
            addCriterion("c_legal not in", values, "cLegal");
            return (Criteria) this;
        }

        public Criteria andCLegalBetween(String value1, String value2) {
            addCriterion("c_legal between", value1, value2, "cLegal");
            return (Criteria) this;
        }

        public Criteria andCLegalNotBetween(String value1, String value2) {
            addCriterion("c_legal not between", value1, value2, "cLegal");
            return (Criteria) this;
        }

        public Criteria andCConsignorIsNull() {
            addCriterion("c_consignor is null");
            return (Criteria) this;
        }

        public Criteria andCConsignorIsNotNull() {
            addCriterion("c_consignor is not null");
            return (Criteria) this;
        }

        public Criteria andCConsignorEqualTo(String value) {
            addCriterion("c_consignor =", value, "cConsignor");
            return (Criteria) this;
        }

        public Criteria andCConsignorNotEqualTo(String value) {
            addCriterion("c_consignor <>", value, "cConsignor");
            return (Criteria) this;
        }

        public Criteria andCConsignorGreaterThan(String value) {
            addCriterion("c_consignor >", value, "cConsignor");
            return (Criteria) this;
        }

        public Criteria andCConsignorGreaterThanOrEqualTo(String value) {
            addCriterion("c_consignor >=", value, "cConsignor");
            return (Criteria) this;
        }

        public Criteria andCConsignorLessThan(String value) {
            addCriterion("c_consignor <", value, "cConsignor");
            return (Criteria) this;
        }

        public Criteria andCConsignorLessThanOrEqualTo(String value) {
            addCriterion("c_consignor <=", value, "cConsignor");
            return (Criteria) this;
        }

        public Criteria andCConsignorLike(String value) {
            addCriterion("c_consignor like", value, "cConsignor");
            return (Criteria) this;
        }

        public Criteria andCConsignorNotLike(String value) {
            addCriterion("c_consignor not like", value, "cConsignor");
            return (Criteria) this;
        }

        public Criteria andCConsignorIn(List<String> values) {
            addCriterion("c_consignor in", values, "cConsignor");
            return (Criteria) this;
        }

        public Criteria andCConsignorNotIn(List<String> values) {
            addCriterion("c_consignor not in", values, "cConsignor");
            return (Criteria) this;
        }

        public Criteria andCConsignorBetween(String value1, String value2) {
            addCriterion("c_consignor between", value1, value2, "cConsignor");
            return (Criteria) this;
        }

        public Criteria andCConsignorNotBetween(String value1, String value2) {
            addCriterion("c_consignor not between", value1, value2, "cConsignor");
            return (Criteria) this;
        }

        public Criteria andCBankIsNull() {
            addCriterion("c_bank is null");
            return (Criteria) this;
        }

        public Criteria andCBankIsNotNull() {
            addCriterion("c_bank is not null");
            return (Criteria) this;
        }

        public Criteria andCBankEqualTo(String value) {
            addCriterion("c_bank =", value, "cBank");
            return (Criteria) this;
        }

        public Criteria andCBankNotEqualTo(String value) {
            addCriterion("c_bank <>", value, "cBank");
            return (Criteria) this;
        }

        public Criteria andCBankGreaterThan(String value) {
            addCriterion("c_bank >", value, "cBank");
            return (Criteria) this;
        }

        public Criteria andCBankGreaterThanOrEqualTo(String value) {
            addCriterion("c_bank >=", value, "cBank");
            return (Criteria) this;
        }

        public Criteria andCBankLessThan(String value) {
            addCriterion("c_bank <", value, "cBank");
            return (Criteria) this;
        }

        public Criteria andCBankLessThanOrEqualTo(String value) {
            addCriterion("c_bank <=", value, "cBank");
            return (Criteria) this;
        }

        public Criteria andCBankLike(String value) {
            addCriterion("c_bank like", value, "cBank");
            return (Criteria) this;
        }

        public Criteria andCBankNotLike(String value) {
            addCriterion("c_bank not like", value, "cBank");
            return (Criteria) this;
        }

        public Criteria andCBankIn(List<String> values) {
            addCriterion("c_bank in", values, "cBank");
            return (Criteria) this;
        }

        public Criteria andCBankNotIn(List<String> values) {
            addCriterion("c_bank not in", values, "cBank");
            return (Criteria) this;
        }

        public Criteria andCBankBetween(String value1, String value2) {
            addCriterion("c_bank between", value1, value2, "cBank");
            return (Criteria) this;
        }

        public Criteria andCBankNotBetween(String value1, String value2) {
            addCriterion("c_bank not between", value1, value2, "cBank");
            return (Criteria) this;
        }

        public Criteria andCAccountIsNull() {
            addCriterion("c_account is null");
            return (Criteria) this;
        }

        public Criteria andCAccountIsNotNull() {
            addCriterion("c_account is not null");
            return (Criteria) this;
        }

        public Criteria andCAccountEqualTo(String value) {
            addCriterion("c_account =", value, "cAccount");
            return (Criteria) this;
        }

        public Criteria andCAccountNotEqualTo(String value) {
            addCriterion("c_account <>", value, "cAccount");
            return (Criteria) this;
        }

        public Criteria andCAccountGreaterThan(String value) {
            addCriterion("c_account >", value, "cAccount");
            return (Criteria) this;
        }

        public Criteria andCAccountGreaterThanOrEqualTo(String value) {
            addCriterion("c_account >=", value, "cAccount");
            return (Criteria) this;
        }

        public Criteria andCAccountLessThan(String value) {
            addCriterion("c_account <", value, "cAccount");
            return (Criteria) this;
        }

        public Criteria andCAccountLessThanOrEqualTo(String value) {
            addCriterion("c_account <=", value, "cAccount");
            return (Criteria) this;
        }

        public Criteria andCAccountLike(String value) {
            addCriterion("c_account like", value, "cAccount");
            return (Criteria) this;
        }

        public Criteria andCAccountNotLike(String value) {
            addCriterion("c_account not like", value, "cAccount");
            return (Criteria) this;
        }

        public Criteria andCAccountIn(List<String> values) {
            addCriterion("c_account in", values, "cAccount");
            return (Criteria) this;
        }

        public Criteria andCAccountNotIn(List<String> values) {
            addCriterion("c_account not in", values, "cAccount");
            return (Criteria) this;
        }

        public Criteria andCAccountBetween(String value1, String value2) {
            addCriterion("c_account between", value1, value2, "cAccount");
            return (Criteria) this;
        }

        public Criteria andCAccountNotBetween(String value1, String value2) {
            addCriterion("c_account not between", value1, value2, "cAccount");
            return (Criteria) this;
        }

        public Criteria andCCreditIsNull() {
            addCriterion("c_credit is null");
            return (Criteria) this;
        }

        public Criteria andCCreditIsNotNull() {
            addCriterion("c_credit is not null");
            return (Criteria) this;
        }

        public Criteria andCCreditEqualTo(Byte value) {
            addCriterion("c_credit =", value, "cCredit");
            return (Criteria) this;
        }

        public Criteria andCCreditNotEqualTo(Byte value) {
            addCriterion("c_credit <>", value, "cCredit");
            return (Criteria) this;
        }

        public Criteria andCCreditGreaterThan(Byte value) {
            addCriterion("c_credit >", value, "cCredit");
            return (Criteria) this;
        }

        public Criteria andCCreditGreaterThanOrEqualTo(Byte value) {
            addCriterion("c_credit >=", value, "cCredit");
            return (Criteria) this;
        }

        public Criteria andCCreditLessThan(Byte value) {
            addCriterion("c_credit <", value, "cCredit");
            return (Criteria) this;
        }

        public Criteria andCCreditLessThanOrEqualTo(Byte value) {
            addCriterion("c_credit <=", value, "cCredit");
            return (Criteria) this;
        }

        public Criteria andCCreditIn(List<Byte> values) {
            addCriterion("c_credit in", values, "cCredit");
            return (Criteria) this;
        }

        public Criteria andCCreditNotIn(List<Byte> values) {
            addCriterion("c_credit not in", values, "cCredit");
            return (Criteria) this;
        }

        public Criteria andCCreditBetween(Byte value1, Byte value2) {
            addCriterion("c_credit between", value1, value2, "cCredit");
            return (Criteria) this;
        }

        public Criteria andCCreditNotBetween(Byte value1, Byte value2) {
            addCriterion("c_credit not between", value1, value2, "cCredit");
            return (Criteria) this;
        }

        public Criteria andCLimitIsNull() {
            addCriterion("c_limit is null");
            return (Criteria) this;
        }

        public Criteria andCLimitIsNotNull() {
            addCriterion("c_limit is not null");
            return (Criteria) this;
        }

        public Criteria andCLimitEqualTo(BigDecimal value) {
            addCriterion("c_limit =", value, "cLimit");
            return (Criteria) this;
        }

        public Criteria andCLimitNotEqualTo(BigDecimal value) {
            addCriterion("c_limit <>", value, "cLimit");
            return (Criteria) this;
        }

        public Criteria andCLimitGreaterThan(BigDecimal value) {
            addCriterion("c_limit >", value, "cLimit");
            return (Criteria) this;
        }

        public Criteria andCLimitGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("c_limit >=", value, "cLimit");
            return (Criteria) this;
        }

        public Criteria andCLimitLessThan(BigDecimal value) {
            addCriterion("c_limit <", value, "cLimit");
            return (Criteria) this;
        }

        public Criteria andCLimitLessThanOrEqualTo(BigDecimal value) {
            addCriterion("c_limit <=", value, "cLimit");
            return (Criteria) this;
        }

        public Criteria andCLimitIn(List<BigDecimal> values) {
            addCriterion("c_limit in", values, "cLimit");
            return (Criteria) this;
        }

        public Criteria andCLimitNotIn(List<BigDecimal> values) {
            addCriterion("c_limit not in", values, "cLimit");
            return (Criteria) this;
        }

        public Criteria andCLimitBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("c_limit between", value1, value2, "cLimit");
            return (Criteria) this;
        }

        public Criteria andCLimitNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("c_limit not between", value1, value2, "cLimit");
            return (Criteria) this;
        }

        public Criteria andCRegisteredcapitalIsNull() {
            addCriterion("c_registeredcapital is null");
            return (Criteria) this;
        }

        public Criteria andCRegisteredcapitalIsNotNull() {
            addCriterion("c_registeredcapital is not null");
            return (Criteria) this;
        }

        public Criteria andCRegisteredcapitalEqualTo(BigDecimal value) {
            addCriterion("c_registeredcapital =", value, "cRegisteredcapital");
            return (Criteria) this;
        }

        public Criteria andCRegisteredcapitalNotEqualTo(BigDecimal value) {
            addCriterion("c_registeredcapital <>", value, "cRegisteredcapital");
            return (Criteria) this;
        }

        public Criteria andCRegisteredcapitalGreaterThan(BigDecimal value) {
            addCriterion("c_registeredcapital >", value, "cRegisteredcapital");
            return (Criteria) this;
        }

        public Criteria andCRegisteredcapitalGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("c_registeredcapital >=", value, "cRegisteredcapital");
            return (Criteria) this;
        }

        public Criteria andCRegisteredcapitalLessThan(BigDecimal value) {
            addCriterion("c_registeredcapital <", value, "cRegisteredcapital");
            return (Criteria) this;
        }

        public Criteria andCRegisteredcapitalLessThanOrEqualTo(BigDecimal value) {
            addCriterion("c_registeredcapital <=", value, "cRegisteredcapital");
            return (Criteria) this;
        }

        public Criteria andCRegisteredcapitalIn(List<BigDecimal> values) {
            addCriterion("c_registeredcapital in", values, "cRegisteredcapital");
            return (Criteria) this;
        }

        public Criteria andCRegisteredcapitalNotIn(List<BigDecimal> values) {
            addCriterion("c_registeredcapital not in", values, "cRegisteredcapital");
            return (Criteria) this;
        }

        public Criteria andCRegisteredcapitalBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("c_registeredcapital between", value1, value2, "cRegisteredcapital");
            return (Criteria) this;
        }

        public Criteria andCRegisteredcapitalNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("c_registeredcapital not between", value1, value2, "cRegisteredcapital");
            return (Criteria) this;
        }

        public Criteria andCTaxnumberIsNull() {
            addCriterion("c_taxnumber is null");
            return (Criteria) this;
        }

        public Criteria andCTaxnumberIsNotNull() {
            addCriterion("c_taxnumber is not null");
            return (Criteria) this;
        }

        public Criteria andCTaxnumberEqualTo(String value) {
            addCriterion("c_taxnumber =", value, "cTaxnumber");
            return (Criteria) this;
        }

        public Criteria andCTaxnumberNotEqualTo(String value) {
            addCriterion("c_taxnumber <>", value, "cTaxnumber");
            return (Criteria) this;
        }

        public Criteria andCTaxnumberGreaterThan(String value) {
            addCriterion("c_taxnumber >", value, "cTaxnumber");
            return (Criteria) this;
        }

        public Criteria andCTaxnumberGreaterThanOrEqualTo(String value) {
            addCriterion("c_taxnumber >=", value, "cTaxnumber");
            return (Criteria) this;
        }

        public Criteria andCTaxnumberLessThan(String value) {
            addCriterion("c_taxnumber <", value, "cTaxnumber");
            return (Criteria) this;
        }

        public Criteria andCTaxnumberLessThanOrEqualTo(String value) {
            addCriterion("c_taxnumber <=", value, "cTaxnumber");
            return (Criteria) this;
        }

        public Criteria andCTaxnumberLike(String value) {
            addCriterion("c_taxnumber like", value, "cTaxnumber");
            return (Criteria) this;
        }

        public Criteria andCTaxnumberNotLike(String value) {
            addCriterion("c_taxnumber not like", value, "cTaxnumber");
            return (Criteria) this;
        }

        public Criteria andCTaxnumberIn(List<String> values) {
            addCriterion("c_taxnumber in", values, "cTaxnumber");
            return (Criteria) this;
        }

        public Criteria andCTaxnumberNotIn(List<String> values) {
            addCriterion("c_taxnumber not in", values, "cTaxnumber");
            return (Criteria) this;
        }

        public Criteria andCTaxnumberBetween(String value1, String value2) {
            addCriterion("c_taxnumber between", value1, value2, "cTaxnumber");
            return (Criteria) this;
        }

        public Criteria andCTaxnumberNotBetween(String value1, String value2) {
            addCriterion("c_taxnumber not between", value1, value2, "cTaxnumber");
            return (Criteria) this;
        }

        public Criteria andCSidIsNull() {
            addCriterion("c_sid is null");
            return (Criteria) this;
        }

        public Criteria andCSidIsNotNull() {
            addCriterion("c_sid is not null");
            return (Criteria) this;
        }

        public Criteria andCSidEqualTo(String value) {
            addCriterion("c_sid =", value, "cSid");
            return (Criteria) this;
        }

        public Criteria andCSidNotEqualTo(String value) {
            addCriterion("c_sid <>", value, "cSid");
            return (Criteria) this;
        }

        public Criteria andCSidGreaterThan(String value) {
            addCriterion("c_sid >", value, "cSid");
            return (Criteria) this;
        }

        public Criteria andCSidGreaterThanOrEqualTo(String value) {
            addCriterion("c_sid >=", value, "cSid");
            return (Criteria) this;
        }

        public Criteria andCSidLessThan(String value) {
            addCriterion("c_sid <", value, "cSid");
            return (Criteria) this;
        }

        public Criteria andCSidLessThanOrEqualTo(String value) {
            addCriterion("c_sid <=", value, "cSid");
            return (Criteria) this;
        }

        public Criteria andCSidLike(String value) {
            addCriterion("c_sid like", value, "cSid");
            return (Criteria) this;
        }

        public Criteria andCSidNotLike(String value) {
            addCriterion("c_sid not like", value, "cSid");
            return (Criteria) this;
        }

        public Criteria andCSidIn(List<String> values) {
            addCriterion("c_sid in", values, "cSid");
            return (Criteria) this;
        }

        public Criteria andCSidNotIn(List<String> values) {
            addCriterion("c_sid not in", values, "cSid");
            return (Criteria) this;
        }

        public Criteria andCSidBetween(String value1, String value2) {
            addCriterion("c_sid between", value1, value2, "cSid");
            return (Criteria) this;
        }

        public Criteria andCSidNotBetween(String value1, String value2) {
            addCriterion("c_sid not between", value1, value2, "cSid");
            return (Criteria) this;
        }

        public Criteria andCPostcodeIsNull() {
            addCriterion("c_postcode is null");
            return (Criteria) this;
        }

        public Criteria andCPostcodeIsNotNull() {
            addCriterion("c_postcode is not null");
            return (Criteria) this;
        }

        public Criteria andCPostcodeEqualTo(String value) {
            addCriterion("c_postcode =", value, "cPostcode");
            return (Criteria) this;
        }

        public Criteria andCPostcodeNotEqualTo(String value) {
            addCriterion("c_postcode <>", value, "cPostcode");
            return (Criteria) this;
        }

        public Criteria andCPostcodeGreaterThan(String value) {
            addCriterion("c_postcode >", value, "cPostcode");
            return (Criteria) this;
        }

        public Criteria andCPostcodeGreaterThanOrEqualTo(String value) {
            addCriterion("c_postcode >=", value, "cPostcode");
            return (Criteria) this;
        }

        public Criteria andCPostcodeLessThan(String value) {
            addCriterion("c_postcode <", value, "cPostcode");
            return (Criteria) this;
        }

        public Criteria andCPostcodeLessThanOrEqualTo(String value) {
            addCriterion("c_postcode <=", value, "cPostcode");
            return (Criteria) this;
        }

        public Criteria andCPostcodeLike(String value) {
            addCriterion("c_postcode like", value, "cPostcode");
            return (Criteria) this;
        }

        public Criteria andCPostcodeNotLike(String value) {
            addCriterion("c_postcode not like", value, "cPostcode");
            return (Criteria) this;
        }

        public Criteria andCPostcodeIn(List<String> values) {
            addCriterion("c_postcode in", values, "cPostcode");
            return (Criteria) this;
        }

        public Criteria andCPostcodeNotIn(List<String> values) {
            addCriterion("c_postcode not in", values, "cPostcode");
            return (Criteria) this;
        }

        public Criteria andCPostcodeBetween(String value1, String value2) {
            addCriterion("c_postcode between", value1, value2, "cPostcode");
            return (Criteria) this;
        }

        public Criteria andCPostcodeNotBetween(String value1, String value2) {
            addCriterion("c_postcode not between", value1, value2, "cPostcode");
            return (Criteria) this;
        }

        public Criteria andCLinkmanIsNull() {
            addCriterion("c_linkman is null");
            return (Criteria) this;
        }

        public Criteria andCLinkmanIsNotNull() {
            addCriterion("c_linkman is not null");
            return (Criteria) this;
        }

        public Criteria andCLinkmanEqualTo(String value) {
            addCriterion("c_linkman =", value, "cLinkman");
            return (Criteria) this;
        }

        public Criteria andCLinkmanNotEqualTo(String value) {
            addCriterion("c_linkman <>", value, "cLinkman");
            return (Criteria) this;
        }

        public Criteria andCLinkmanGreaterThan(String value) {
            addCriterion("c_linkman >", value, "cLinkman");
            return (Criteria) this;
        }

        public Criteria andCLinkmanGreaterThanOrEqualTo(String value) {
            addCriterion("c_linkman >=", value, "cLinkman");
            return (Criteria) this;
        }

        public Criteria andCLinkmanLessThan(String value) {
            addCriterion("c_linkman <", value, "cLinkman");
            return (Criteria) this;
        }

        public Criteria andCLinkmanLessThanOrEqualTo(String value) {
            addCriterion("c_linkman <=", value, "cLinkman");
            return (Criteria) this;
        }

        public Criteria andCLinkmanLike(String value) {
            addCriterion("c_linkman like", value, "cLinkman");
            return (Criteria) this;
        }

        public Criteria andCLinkmanNotLike(String value) {
            addCriterion("c_linkman not like", value, "cLinkman");
            return (Criteria) this;
        }

        public Criteria andCLinkmanIn(List<String> values) {
            addCriterion("c_linkman in", values, "cLinkman");
            return (Criteria) this;
        }

        public Criteria andCLinkmanNotIn(List<String> values) {
            addCriterion("c_linkman not in", values, "cLinkman");
            return (Criteria) this;
        }

        public Criteria andCLinkmanBetween(String value1, String value2) {
            addCriterion("c_linkman between", value1, value2, "cLinkman");
            return (Criteria) this;
        }

        public Criteria andCLinkmanNotBetween(String value1, String value2) {
            addCriterion("c_linkman not between", value1, value2, "cLinkman");
            return (Criteria) this;
        }

        public Criteria andCPhoneIsNull() {
            addCriterion("c_phone is null");
            return (Criteria) this;
        }

        public Criteria andCPhoneIsNotNull() {
            addCriterion("c_phone is not null");
            return (Criteria) this;
        }

        public Criteria andCPhoneEqualTo(String value) {
            addCriterion("c_phone =", value, "cPhone");
            return (Criteria) this;
        }

        public Criteria andCPhoneNotEqualTo(String value) {
            addCriterion("c_phone <>", value, "cPhone");
            return (Criteria) this;
        }

        public Criteria andCPhoneGreaterThan(String value) {
            addCriterion("c_phone >", value, "cPhone");
            return (Criteria) this;
        }

        public Criteria andCPhoneGreaterThanOrEqualTo(String value) {
            addCriterion("c_phone >=", value, "cPhone");
            return (Criteria) this;
        }

        public Criteria andCPhoneLessThan(String value) {
            addCriterion("c_phone <", value, "cPhone");
            return (Criteria) this;
        }

        public Criteria andCPhoneLessThanOrEqualTo(String value) {
            addCriterion("c_phone <=", value, "cPhone");
            return (Criteria) this;
        }

        public Criteria andCPhoneLike(String value) {
            addCriterion("c_phone like", value, "cPhone");
            return (Criteria) this;
        }

        public Criteria andCPhoneNotLike(String value) {
            addCriterion("c_phone not like", value, "cPhone");
            return (Criteria) this;
        }

        public Criteria andCPhoneIn(List<String> values) {
            addCriterion("c_phone in", values, "cPhone");
            return (Criteria) this;
        }

        public Criteria andCPhoneNotIn(List<String> values) {
            addCriterion("c_phone not in", values, "cPhone");
            return (Criteria) this;
        }

        public Criteria andCPhoneBetween(String value1, String value2) {
            addCriterion("c_phone between", value1, value2, "cPhone");
            return (Criteria) this;
        }

        public Criteria andCPhoneNotBetween(String value1, String value2) {
            addCriterion("c_phone not between", value1, value2, "cPhone");
            return (Criteria) this;
        }

        public Criteria andCFaxIsNull() {
            addCriterion("c_fax is null");
            return (Criteria) this;
        }

        public Criteria andCFaxIsNotNull() {
            addCriterion("c_fax is not null");
            return (Criteria) this;
        }

        public Criteria andCFaxEqualTo(String value) {
            addCriterion("c_fax =", value, "cFax");
            return (Criteria) this;
        }

        public Criteria andCFaxNotEqualTo(String value) {
            addCriterion("c_fax <>", value, "cFax");
            return (Criteria) this;
        }

        public Criteria andCFaxGreaterThan(String value) {
            addCriterion("c_fax >", value, "cFax");
            return (Criteria) this;
        }

        public Criteria andCFaxGreaterThanOrEqualTo(String value) {
            addCriterion("c_fax >=", value, "cFax");
            return (Criteria) this;
        }

        public Criteria andCFaxLessThan(String value) {
            addCriterion("c_fax <", value, "cFax");
            return (Criteria) this;
        }

        public Criteria andCFaxLessThanOrEqualTo(String value) {
            addCriterion("c_fax <=", value, "cFax");
            return (Criteria) this;
        }

        public Criteria andCFaxLike(String value) {
            addCriterion("c_fax like", value, "cFax");
            return (Criteria) this;
        }

        public Criteria andCFaxNotLike(String value) {
            addCriterion("c_fax not like", value, "cFax");
            return (Criteria) this;
        }

        public Criteria andCFaxIn(List<String> values) {
            addCriterion("c_fax in", values, "cFax");
            return (Criteria) this;
        }

        public Criteria andCFaxNotIn(List<String> values) {
            addCriterion("c_fax not in", values, "cFax");
            return (Criteria) this;
        }

        public Criteria andCFaxBetween(String value1, String value2) {
            addCriterion("c_fax between", value1, value2, "cFax");
            return (Criteria) this;
        }

        public Criteria andCFaxNotBetween(String value1, String value2) {
            addCriterion("c_fax not between", value1, value2, "cFax");
            return (Criteria) this;
        }

        public Criteria andCHomepageIsNull() {
            addCriterion("c_homepage is null");
            return (Criteria) this;
        }

        public Criteria andCHomepageIsNotNull() {
            addCriterion("c_homepage is not null");
            return (Criteria) this;
        }

        public Criteria andCHomepageEqualTo(String value) {
            addCriterion("c_homepage =", value, "cHomepage");
            return (Criteria) this;
        }

        public Criteria andCHomepageNotEqualTo(String value) {
            addCriterion("c_homepage <>", value, "cHomepage");
            return (Criteria) this;
        }

        public Criteria andCHomepageGreaterThan(String value) {
            addCriterion("c_homepage >", value, "cHomepage");
            return (Criteria) this;
        }

        public Criteria andCHomepageGreaterThanOrEqualTo(String value) {
            addCriterion("c_homepage >=", value, "cHomepage");
            return (Criteria) this;
        }

        public Criteria andCHomepageLessThan(String value) {
            addCriterion("c_homepage <", value, "cHomepage");
            return (Criteria) this;
        }

        public Criteria andCHomepageLessThanOrEqualTo(String value) {
            addCriterion("c_homepage <=", value, "cHomepage");
            return (Criteria) this;
        }

        public Criteria andCHomepageLike(String value) {
            addCriterion("c_homepage like", value, "cHomepage");
            return (Criteria) this;
        }

        public Criteria andCHomepageNotLike(String value) {
            addCriterion("c_homepage not like", value, "cHomepage");
            return (Criteria) this;
        }

        public Criteria andCHomepageIn(List<String> values) {
            addCriterion("c_homepage in", values, "cHomepage");
            return (Criteria) this;
        }

        public Criteria andCHomepageNotIn(List<String> values) {
            addCriterion("c_homepage not in", values, "cHomepage");
            return (Criteria) this;
        }

        public Criteria andCHomepageBetween(String value1, String value2) {
            addCriterion("c_homepage between", value1, value2, "cHomepage");
            return (Criteria) this;
        }

        public Criteria andCHomepageNotBetween(String value1, String value2) {
            addCriterion("c_homepage not between", value1, value2, "cHomepage");
            return (Criteria) this;
        }

        public Criteria andCEmailIsNull() {
            addCriterion("c_email is null");
            return (Criteria) this;
        }

        public Criteria andCEmailIsNotNull() {
            addCriterion("c_email is not null");
            return (Criteria) this;
        }

        public Criteria andCEmailEqualTo(String value) {
            addCriterion("c_email =", value, "cEmail");
            return (Criteria) this;
        }

        public Criteria andCEmailNotEqualTo(String value) {
            addCriterion("c_email <>", value, "cEmail");
            return (Criteria) this;
        }

        public Criteria andCEmailGreaterThan(String value) {
            addCriterion("c_email >", value, "cEmail");
            return (Criteria) this;
        }

        public Criteria andCEmailGreaterThanOrEqualTo(String value) {
            addCriterion("c_email >=", value, "cEmail");
            return (Criteria) this;
        }

        public Criteria andCEmailLessThan(String value) {
            addCriterion("c_email <", value, "cEmail");
            return (Criteria) this;
        }

        public Criteria andCEmailLessThanOrEqualTo(String value) {
            addCriterion("c_email <=", value, "cEmail");
            return (Criteria) this;
        }

        public Criteria andCEmailLike(String value) {
            addCriterion("c_email like", value, "cEmail");
            return (Criteria) this;
        }

        public Criteria andCEmailNotLike(String value) {
            addCriterion("c_email not like", value, "cEmail");
            return (Criteria) this;
        }

        public Criteria andCEmailIn(List<String> values) {
            addCriterion("c_email in", values, "cEmail");
            return (Criteria) this;
        }

        public Criteria andCEmailNotIn(List<String> values) {
            addCriterion("c_email not in", values, "cEmail");
            return (Criteria) this;
        }

        public Criteria andCEmailBetween(String value1, String value2) {
            addCriterion("c_email between", value1, value2, "cEmail");
            return (Criteria) this;
        }

        public Criteria andCEmailNotBetween(String value1, String value2) {
            addCriterion("c_email not between", value1, value2, "cEmail");
            return (Criteria) this;
        }

        public Criteria andCCountryIsNull() {
            addCriterion("c_country is null");
            return (Criteria) this;
        }

        public Criteria andCCountryIsNotNull() {
            addCriterion("c_country is not null");
            return (Criteria) this;
        }

        public Criteria andCCountryEqualTo(String value) {
            addCriterion("c_country =", value, "cCountry");
            return (Criteria) this;
        }

        public Criteria andCCountryNotEqualTo(String value) {
            addCriterion("c_country <>", value, "cCountry");
            return (Criteria) this;
        }

        public Criteria andCCountryGreaterThan(String value) {
            addCriterion("c_country >", value, "cCountry");
            return (Criteria) this;
        }

        public Criteria andCCountryGreaterThanOrEqualTo(String value) {
            addCriterion("c_country >=", value, "cCountry");
            return (Criteria) this;
        }

        public Criteria andCCountryLessThan(String value) {
            addCriterion("c_country <", value, "cCountry");
            return (Criteria) this;
        }

        public Criteria andCCountryLessThanOrEqualTo(String value) {
            addCriterion("c_country <=", value, "cCountry");
            return (Criteria) this;
        }

        public Criteria andCCountryLike(String value) {
            addCriterion("c_country like", value, "cCountry");
            return (Criteria) this;
        }

        public Criteria andCCountryNotLike(String value) {
            addCriterion("c_country not like", value, "cCountry");
            return (Criteria) this;
        }

        public Criteria andCCountryIn(List<String> values) {
            addCriterion("c_country in", values, "cCountry");
            return (Criteria) this;
        }

        public Criteria andCCountryNotIn(List<String> values) {
            addCriterion("c_country not in", values, "cCountry");
            return (Criteria) this;
        }

        public Criteria andCCountryBetween(String value1, String value2) {
            addCriterion("c_country between", value1, value2, "cCountry");
            return (Criteria) this;
        }

        public Criteria andCCountryNotBetween(String value1, String value2) {
            addCriterion("c_country not between", value1, value2, "cCountry");
            return (Criteria) this;
        }

        public Criteria andCProvinceIsNull() {
            addCriterion("c_province is null");
            return (Criteria) this;
        }

        public Criteria andCProvinceIsNotNull() {
            addCriterion("c_province is not null");
            return (Criteria) this;
        }

        public Criteria andCProvinceEqualTo(String value) {
            addCriterion("c_province =", value, "cProvince");
            return (Criteria) this;
        }

        public Criteria andCProvinceNotEqualTo(String value) {
            addCriterion("c_province <>", value, "cProvince");
            return (Criteria) this;
        }

        public Criteria andCProvinceGreaterThan(String value) {
            addCriterion("c_province >", value, "cProvince");
            return (Criteria) this;
        }

        public Criteria andCProvinceGreaterThanOrEqualTo(String value) {
            addCriterion("c_province >=", value, "cProvince");
            return (Criteria) this;
        }

        public Criteria andCProvinceLessThan(String value) {
            addCriterion("c_province <", value, "cProvince");
            return (Criteria) this;
        }

        public Criteria andCProvinceLessThanOrEqualTo(String value) {
            addCriterion("c_province <=", value, "cProvince");
            return (Criteria) this;
        }

        public Criteria andCProvinceLike(String value) {
            addCriterion("c_province like", value, "cProvince");
            return (Criteria) this;
        }

        public Criteria andCProvinceNotLike(String value) {
            addCriterion("c_province not like", value, "cProvince");
            return (Criteria) this;
        }

        public Criteria andCProvinceIn(List<String> values) {
            addCriterion("c_province in", values, "cProvince");
            return (Criteria) this;
        }

        public Criteria andCProvinceNotIn(List<String> values) {
            addCriterion("c_province not in", values, "cProvince");
            return (Criteria) this;
        }

        public Criteria andCProvinceBetween(String value1, String value2) {
            addCriterion("c_province between", value1, value2, "cProvince");
            return (Criteria) this;
        }

        public Criteria andCProvinceNotBetween(String value1, String value2) {
            addCriterion("c_province not between", value1, value2, "cProvince");
            return (Criteria) this;
        }

        public Criteria andCCityaddressIsNull() {
            addCriterion("c_cityaddress is null");
            return (Criteria) this;
        }

        public Criteria andCCityaddressIsNotNull() {
            addCriterion("c_cityaddress is not null");
            return (Criteria) this;
        }

        public Criteria andCCityaddressEqualTo(String value) {
            addCriterion("c_cityaddress =", value, "cCityaddress");
            return (Criteria) this;
        }

        public Criteria andCCityaddressNotEqualTo(String value) {
            addCriterion("c_cityaddress <>", value, "cCityaddress");
            return (Criteria) this;
        }

        public Criteria andCCityaddressGreaterThan(String value) {
            addCriterion("c_cityaddress >", value, "cCityaddress");
            return (Criteria) this;
        }

        public Criteria andCCityaddressGreaterThanOrEqualTo(String value) {
            addCriterion("c_cityaddress >=", value, "cCityaddress");
            return (Criteria) this;
        }

        public Criteria andCCityaddressLessThan(String value) {
            addCriterion("c_cityaddress <", value, "cCityaddress");
            return (Criteria) this;
        }

        public Criteria andCCityaddressLessThanOrEqualTo(String value) {
            addCriterion("c_cityaddress <=", value, "cCityaddress");
            return (Criteria) this;
        }

        public Criteria andCCityaddressLike(String value) {
            addCriterion("c_cityaddress like", value, "cCityaddress");
            return (Criteria) this;
        }

        public Criteria andCCityaddressNotLike(String value) {
            addCriterion("c_cityaddress not like", value, "cCityaddress");
            return (Criteria) this;
        }

        public Criteria andCCityaddressIn(List<String> values) {
            addCriterion("c_cityaddress in", values, "cCityaddress");
            return (Criteria) this;
        }

        public Criteria andCCityaddressNotIn(List<String> values) {
            addCriterion("c_cityaddress not in", values, "cCityaddress");
            return (Criteria) this;
        }

        public Criteria andCCityaddressBetween(String value1, String value2) {
            addCriterion("c_cityaddress between", value1, value2, "cCityaddress");
            return (Criteria) this;
        }

        public Criteria andCCityaddressNotBetween(String value1, String value2) {
            addCriterion("c_cityaddress not between", value1, value2, "cCityaddress");
            return (Criteria) this;
        }

        public Criteria andCIselectricityIsNull() {
            addCriterion("c_iselectricity is null");
            return (Criteria) this;
        }

        public Criteria andCIselectricityIsNotNull() {
            addCriterion("c_iselectricity is not null");
            return (Criteria) this;
        }

        public Criteria andCIselectricityEqualTo(Byte value) {
            addCriterion("c_iselectricity =", value, "cIselectricity");
            return (Criteria) this;
        }

        public Criteria andCIselectricityNotEqualTo(Byte value) {
            addCriterion("c_iselectricity <>", value, "cIselectricity");
            return (Criteria) this;
        }

        public Criteria andCIselectricityGreaterThan(Byte value) {
            addCriterion("c_iselectricity >", value, "cIselectricity");
            return (Criteria) this;
        }

        public Criteria andCIselectricityGreaterThanOrEqualTo(Byte value) {
            addCriterion("c_iselectricity >=", value, "cIselectricity");
            return (Criteria) this;
        }

        public Criteria andCIselectricityLessThan(Byte value) {
            addCriterion("c_iselectricity <", value, "cIselectricity");
            return (Criteria) this;
        }

        public Criteria andCIselectricityLessThanOrEqualTo(Byte value) {
            addCriterion("c_iselectricity <=", value, "cIselectricity");
            return (Criteria) this;
        }

        public Criteria andCIselectricityIn(List<Byte> values) {
            addCriterion("c_iselectricity in", values, "cIselectricity");
            return (Criteria) this;
        }

        public Criteria andCIselectricityNotIn(List<Byte> values) {
            addCriterion("c_iselectricity not in", values, "cIselectricity");
            return (Criteria) this;
        }

        public Criteria andCIselectricityBetween(Byte value1, Byte value2) {
            addCriterion("c_iselectricity between", value1, value2, "cIselectricity");
            return (Criteria) this;
        }

        public Criteria andCIselectricityNotBetween(Byte value1, Byte value2) {
            addCriterion("c_iselectricity not between", value1, value2, "cIselectricity");
            return (Criteria) this;
        }

        public Criteria andCStateIsNull() {
            addCriterion("c_state is null");
            return (Criteria) this;
        }

        public Criteria andCStateIsNotNull() {
            addCriterion("c_state is not null");
            return (Criteria) this;
        }

        public Criteria andCStateEqualTo(Byte value) {
            addCriterion("c_state =", value, "cState");
            return (Criteria) this;
        }

        public Criteria andCStateNotEqualTo(Byte value) {
            addCriterion("c_state <>", value, "cState");
            return (Criteria) this;
        }

        public Criteria andCStateGreaterThan(Byte value) {
            addCriterion("c_state >", value, "cState");
            return (Criteria) this;
        }

        public Criteria andCStateGreaterThanOrEqualTo(Byte value) {
            addCriterion("c_state >=", value, "cState");
            return (Criteria) this;
        }

        public Criteria andCStateLessThan(Byte value) {
            addCriterion("c_state <", value, "cState");
            return (Criteria) this;
        }

        public Criteria andCStateLessThanOrEqualTo(Byte value) {
            addCriterion("c_state <=", value, "cState");
            return (Criteria) this;
        }

        public Criteria andCStateIn(List<Byte> values) {
            addCriterion("c_state in", values, "cState");
            return (Criteria) this;
        }

        public Criteria andCStateNotIn(List<Byte> values) {
            addCriterion("c_state not in", values, "cState");
            return (Criteria) this;
        }

        public Criteria andCStateBetween(Byte value1, Byte value2) {
            addCriterion("c_state between", value1, value2, "cState");
            return (Criteria) this;
        }

        public Criteria andCStateNotBetween(Byte value1, Byte value2) {
            addCriterion("c_state not between", value1, value2, "cState");
            return (Criteria) this;
        }

        public Criteria andCQualityIsNull() {
            addCriterion("c_quality is null");
            return (Criteria) this;
        }

        public Criteria andCQualityIsNotNull() {
            addCriterion("c_quality is not null");
            return (Criteria) this;
        }

        public Criteria andCQualityEqualTo(String value) {
            addCriterion("c_quality =", value, "cQuality");
            return (Criteria) this;
        }

        public Criteria andCQualityNotEqualTo(String value) {
            addCriterion("c_quality <>", value, "cQuality");
            return (Criteria) this;
        }

        public Criteria andCQualityGreaterThan(String value) {
            addCriterion("c_quality >", value, "cQuality");
            return (Criteria) this;
        }

        public Criteria andCQualityGreaterThanOrEqualTo(String value) {
            addCriterion("c_quality >=", value, "cQuality");
            return (Criteria) this;
        }

        public Criteria andCQualityLessThan(String value) {
            addCriterion("c_quality <", value, "cQuality");
            return (Criteria) this;
        }

        public Criteria andCQualityLessThanOrEqualTo(String value) {
            addCriterion("c_quality <=", value, "cQuality");
            return (Criteria) this;
        }

        public Criteria andCQualityLike(String value) {
            addCriterion("c_quality like", value, "cQuality");
            return (Criteria) this;
        }

        public Criteria andCQualityNotLike(String value) {
            addCriterion("c_quality not like", value, "cQuality");
            return (Criteria) this;
        }

        public Criteria andCQualityIn(List<String> values) {
            addCriterion("c_quality in", values, "cQuality");
            return (Criteria) this;
        }

        public Criteria andCQualityNotIn(List<String> values) {
            addCriterion("c_quality not in", values, "cQuality");
            return (Criteria) this;
        }

        public Criteria andCQualityBetween(String value1, String value2) {
            addCriterion("c_quality between", value1, value2, "cQuality");
            return (Criteria) this;
        }

        public Criteria andCQualityNotBetween(String value1, String value2) {
            addCriterion("c_quality not between", value1, value2, "cQuality");
            return (Criteria) this;
        }

        public Criteria andCCreditdeclareIsNull() {
            addCriterion("c_creditdeclare is null");
            return (Criteria) this;
        }

        public Criteria andCCreditdeclareIsNotNull() {
            addCriterion("c_creditdeclare is not null");
            return (Criteria) this;
        }

        public Criteria andCCreditdeclareEqualTo(String value) {
            addCriterion("c_creditdeclare =", value, "cCreditdeclare");
            return (Criteria) this;
        }

        public Criteria andCCreditdeclareNotEqualTo(String value) {
            addCriterion("c_creditdeclare <>", value, "cCreditdeclare");
            return (Criteria) this;
        }

        public Criteria andCCreditdeclareGreaterThan(String value) {
            addCriterion("c_creditdeclare >", value, "cCreditdeclare");
            return (Criteria) this;
        }

        public Criteria andCCreditdeclareGreaterThanOrEqualTo(String value) {
            addCriterion("c_creditdeclare >=", value, "cCreditdeclare");
            return (Criteria) this;
        }

        public Criteria andCCreditdeclareLessThan(String value) {
            addCriterion("c_creditdeclare <", value, "cCreditdeclare");
            return (Criteria) this;
        }

        public Criteria andCCreditdeclareLessThanOrEqualTo(String value) {
            addCriterion("c_creditdeclare <=", value, "cCreditdeclare");
            return (Criteria) this;
        }

        public Criteria andCCreditdeclareLike(String value) {
            addCriterion("c_creditdeclare like", value, "cCreditdeclare");
            return (Criteria) this;
        }

        public Criteria andCCreditdeclareNotLike(String value) {
            addCriterion("c_creditdeclare not like", value, "cCreditdeclare");
            return (Criteria) this;
        }

        public Criteria andCCreditdeclareIn(List<String> values) {
            addCriterion("c_creditdeclare in", values, "cCreditdeclare");
            return (Criteria) this;
        }

        public Criteria andCCreditdeclareNotIn(List<String> values) {
            addCriterion("c_creditdeclare not in", values, "cCreditdeclare");
            return (Criteria) this;
        }

        public Criteria andCCreditdeclareBetween(String value1, String value2) {
            addCriterion("c_creditdeclare between", value1, value2, "cCreditdeclare");
            return (Criteria) this;
        }

        public Criteria andCCreditdeclareNotBetween(String value1, String value2) {
            addCriterion("c_creditdeclare not between", value1, value2, "cCreditdeclare");
            return (Criteria) this;
        }

        public Criteria andCInnernameIsNull() {
            addCriterion("c_innerName is null");
            return (Criteria) this;
        }

        public Criteria andCInnernameIsNotNull() {
            addCriterion("c_innerName is not null");
            return (Criteria) this;
        }

        public Criteria andCInnernameEqualTo(String value) {
            addCriterion("c_innerName =", value, "cInnername");
            return (Criteria) this;
        }

        public Criteria andCInnernameNotEqualTo(String value) {
            addCriterion("c_innerName <>", value, "cInnername");
            return (Criteria) this;
        }

        public Criteria andCInnernameGreaterThan(String value) {
            addCriterion("c_innerName >", value, "cInnername");
            return (Criteria) this;
        }

        public Criteria andCInnernameGreaterThanOrEqualTo(String value) {
            addCriterion("c_innerName >=", value, "cInnername");
            return (Criteria) this;
        }

        public Criteria andCInnernameLessThan(String value) {
            addCriterion("c_innerName <", value, "cInnername");
            return (Criteria) this;
        }

        public Criteria andCInnernameLessThanOrEqualTo(String value) {
            addCriterion("c_innerName <=", value, "cInnername");
            return (Criteria) this;
        }

        public Criteria andCInnernameLike(String value) {
            addCriterion("c_innerName like", value, "cInnername");
            return (Criteria) this;
        }

        public Criteria andCInnernameNotLike(String value) {
            addCriterion("c_innerName not like", value, "cInnername");
            return (Criteria) this;
        }

        public Criteria andCInnernameIn(List<String> values) {
            addCriterion("c_innerName in", values, "cInnername");
            return (Criteria) this;
        }

        public Criteria andCInnernameNotIn(List<String> values) {
            addCriterion("c_innerName not in", values, "cInnername");
            return (Criteria) this;
        }

        public Criteria andCInnernameBetween(String value1, String value2) {
            addCriterion("c_innerName between", value1, value2, "cInnername");
            return (Criteria) this;
        }

        public Criteria andCInnernameNotBetween(String value1, String value2) {
            addCriterion("c_innerName not between", value1, value2, "cInnername");
            return (Criteria) this;
        }

        public Criteria andCInneridIsNull() {
            addCriterion("c_innerId is null");
            return (Criteria) this;
        }

        public Criteria andCInneridIsNotNull() {
            addCriterion("c_innerId is not null");
            return (Criteria) this;
        }

        public Criteria andCInneridEqualTo(String value) {
            addCriterion("c_innerId =", value, "cInnerid");
            return (Criteria) this;
        }

        public Criteria andCInneridNotEqualTo(String value) {
            addCriterion("c_innerId <>", value, "cInnerid");
            return (Criteria) this;
        }

        public Criteria andCInneridGreaterThan(String value) {
            addCriterion("c_innerId >", value, "cInnerid");
            return (Criteria) this;
        }

        public Criteria andCInneridGreaterThanOrEqualTo(String value) {
            addCriterion("c_innerId >=", value, "cInnerid");
            return (Criteria) this;
        }

        public Criteria andCInneridLessThan(String value) {
            addCriterion("c_innerId <", value, "cInnerid");
            return (Criteria) this;
        }

        public Criteria andCInneridLessThanOrEqualTo(String value) {
            addCriterion("c_innerId <=", value, "cInnerid");
            return (Criteria) this;
        }

        public Criteria andCInneridLike(String value) {
            addCriterion("c_innerId like", value, "cInnerid");
            return (Criteria) this;
        }

        public Criteria andCInneridNotLike(String value) {
            addCriterion("c_innerId not like", value, "cInnerid");
            return (Criteria) this;
        }

        public Criteria andCInneridIn(List<String> values) {
            addCriterion("c_innerId in", values, "cInnerid");
            return (Criteria) this;
        }

        public Criteria andCInneridNotIn(List<String> values) {
            addCriterion("c_innerId not in", values, "cInnerid");
            return (Criteria) this;
        }

        public Criteria andCInneridBetween(String value1, String value2) {
            addCriterion("c_innerId between", value1, value2, "cInnerid");
            return (Criteria) this;
        }

        public Criteria andCInneridNotBetween(String value1, String value2) {
            addCriterion("c_innerId not between", value1, value2, "cInnerid");
            return (Criteria) this;
        }

        public Criteria andCRemarkIsNull() {
            addCriterion("c_remark is null");
            return (Criteria) this;
        }

        public Criteria andCRemarkIsNotNull() {
            addCriterion("c_remark is not null");
            return (Criteria) this;
        }

        public Criteria andCRemarkEqualTo(String value) {
            addCriterion("c_remark =", value, "cRemark");
            return (Criteria) this;
        }

        public Criteria andCRemarkNotEqualTo(String value) {
            addCriterion("c_remark <>", value, "cRemark");
            return (Criteria) this;
        }

        public Criteria andCRemarkGreaterThan(String value) {
            addCriterion("c_remark >", value, "cRemark");
            return (Criteria) this;
        }

        public Criteria andCRemarkGreaterThanOrEqualTo(String value) {
            addCriterion("c_remark >=", value, "cRemark");
            return (Criteria) this;
        }

        public Criteria andCRemarkLessThan(String value) {
            addCriterion("c_remark <", value, "cRemark");
            return (Criteria) this;
        }

        public Criteria andCRemarkLessThanOrEqualTo(String value) {
            addCriterion("c_remark <=", value, "cRemark");
            return (Criteria) this;
        }

        public Criteria andCRemarkLike(String value) {
            addCriterion("c_remark like", value, "cRemark");
            return (Criteria) this;
        }

        public Criteria andCRemarkNotLike(String value) {
            addCriterion("c_remark not like", value, "cRemark");
            return (Criteria) this;
        }

        public Criteria andCRemarkIn(List<String> values) {
            addCriterion("c_remark in", values, "cRemark");
            return (Criteria) this;
        }

        public Criteria andCRemarkNotIn(List<String> values) {
            addCriterion("c_remark not in", values, "cRemark");
            return (Criteria) this;
        }

        public Criteria andCRemarkBetween(String value1, String value2) {
            addCriterion("c_remark between", value1, value2, "cRemark");
            return (Criteria) this;
        }

        public Criteria andCRemarkNotBetween(String value1, String value2) {
            addCriterion("c_remark not between", value1, value2, "cRemark");
            return (Criteria) this;
        }

        public Criteria andCIdentifyingIsNull() {
            addCriterion("c_identifying is null");
            return (Criteria) this;
        }

        public Criteria andCIdentifyingIsNotNull() {
            addCriterion("c_identifying is not null");
            return (Criteria) this;
        }

        public Criteria andCIdentifyingEqualTo(Byte value) {
            addCriterion("c_identifying =", value, "cIdentifying");
            return (Criteria) this;
        }

        public Criteria andCIdentifyingNotEqualTo(Byte value) {
            addCriterion("c_identifying <>", value, "cIdentifying");
            return (Criteria) this;
        }

        public Criteria andCIdentifyingGreaterThan(Byte value) {
            addCriterion("c_identifying >", value, "cIdentifying");
            return (Criteria) this;
        }

        public Criteria andCIdentifyingGreaterThanOrEqualTo(Byte value) {
            addCriterion("c_identifying >=", value, "cIdentifying");
            return (Criteria) this;
        }

        public Criteria andCIdentifyingLessThan(Byte value) {
            addCriterion("c_identifying <", value, "cIdentifying");
            return (Criteria) this;
        }

        public Criteria andCIdentifyingLessThanOrEqualTo(Byte value) {
            addCriterion("c_identifying <=", value, "cIdentifying");
            return (Criteria) this;
        }

        public Criteria andCIdentifyingIn(List<Byte> values) {
            addCriterion("c_identifying in", values, "cIdentifying");
            return (Criteria) this;
        }

        public Criteria andCIdentifyingNotIn(List<Byte> values) {
            addCriterion("c_identifying not in", values, "cIdentifying");
            return (Criteria) this;
        }

        public Criteria andCIdentifyingBetween(Byte value1, Byte value2) {
            addCriterion("c_identifying between", value1, value2, "cIdentifying");
            return (Criteria) this;
        }

        public Criteria andCIdentifyingNotBetween(Byte value1, Byte value2) {
            addCriterion("c_identifying not between", value1, value2, "cIdentifying");
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