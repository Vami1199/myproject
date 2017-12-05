package com.xj.domain.assay;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class ASamplingQuery {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Integer pageNo = 1;

    protected Integer startRow;

    protected Integer pageSize = 10;

    protected String fields;

    public ASamplingQuery() {
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

        public Criteria andSpIdIsNull() {
            addCriterion("sp_id is null");
            return (Criteria) this;
        }

        public Criteria andSpIdIsNotNull() {
            addCriterion("sp_id is not null");
            return (Criteria) this;
        }

        public Criteria andSpIdEqualTo(String value) {
            addCriterion("sp_id =", value, "spId");
            return (Criteria) this;
        }

        public Criteria andSpIdNotEqualTo(String value) {
            addCriterion("sp_id <>", value, "spId");
            return (Criteria) this;
        }

        public Criteria andSpIdGreaterThan(String value) {
            addCriterion("sp_id >", value, "spId");
            return (Criteria) this;
        }

        public Criteria andSpIdGreaterThanOrEqualTo(String value) {
            addCriterion("sp_id >=", value, "spId");
            return (Criteria) this;
        }

        public Criteria andSpIdLessThan(String value) {
            addCriterion("sp_id <", value, "spId");
            return (Criteria) this;
        }

        public Criteria andSpIdLessThanOrEqualTo(String value) {
            addCriterion("sp_id <=", value, "spId");
            return (Criteria) this;
        }

        public Criteria andSpIdLike(String value) {
            addCriterion("sp_id like", value, "spId");
            return (Criteria) this;
        }

        public Criteria andSpIdNotLike(String value) {
            addCriterion("sp_id not like", value, "spId");
            return (Criteria) this;
        }

        public Criteria andSpIdIn(List<String> values) {
            addCriterion("sp_id in", values, "spId");
            return (Criteria) this;
        }

        public Criteria andSpIdNotIn(List<String> values) {
            addCriterion("sp_id not in", values, "spId");
            return (Criteria) this;
        }

        public Criteria andSpIdBetween(String value1, String value2) {
            addCriterion("sp_id between", value1, value2, "spId");
            return (Criteria) this;
        }

        public Criteria andSpIdNotBetween(String value1, String value2) {
            addCriterion("sp_id not between", value1, value2, "spId");
            return (Criteria) this;
        }

        public Criteria andSpSourceIsNull() {
            addCriterion("sp_source is null");
            return (Criteria) this;
        }

        public Criteria andSpSourceIsNotNull() {
            addCriterion("sp_source is not null");
            return (Criteria) this;
        }

        public Criteria andSpSourceEqualTo(String value) {
            addCriterion("sp_source =", value, "spSource");
            return (Criteria) this;
        }

        public Criteria andSpSourceNotEqualTo(String value) {
            addCriterion("sp_source <>", value, "spSource");
            return (Criteria) this;
        }

        public Criteria andSpSourceGreaterThan(String value) {
            addCriterion("sp_source >", value, "spSource");
            return (Criteria) this;
        }

        public Criteria andSpSourceGreaterThanOrEqualTo(String value) {
            addCriterion("sp_source >=", value, "spSource");
            return (Criteria) this;
        }

        public Criteria andSpSourceLessThan(String value) {
            addCriterion("sp_source <", value, "spSource");
            return (Criteria) this;
        }

        public Criteria andSpSourceLessThanOrEqualTo(String value) {
            addCriterion("sp_source <=", value, "spSource");
            return (Criteria) this;
        }

        public Criteria andSpSourceLike(String value) {
            addCriterion("sp_source like", value, "spSource");
            return (Criteria) this;
        }

        public Criteria andSpSourceNotLike(String value) {
            addCriterion("sp_source not like", value, "spSource");
            return (Criteria) this;
        }

        public Criteria andSpSourceIn(List<String> values) {
            addCriterion("sp_source in", values, "spSource");
            return (Criteria) this;
        }

        public Criteria andSpSourceNotIn(List<String> values) {
            addCriterion("sp_source not in", values, "spSource");
            return (Criteria) this;
        }

        public Criteria andSpSourceBetween(String value1, String value2) {
            addCriterion("sp_source between", value1, value2, "spSource");
            return (Criteria) this;
        }

        public Criteria andSpSourceNotBetween(String value1, String value2) {
            addCriterion("sp_source not between", value1, value2, "spSource");
            return (Criteria) this;
        }

        public Criteria andSpProductIsNull() {
            addCriterion("sp_product is null");
            return (Criteria) this;
        }

        public Criteria andSpProductIsNotNull() {
            addCriterion("sp_product is not null");
            return (Criteria) this;
        }

        public Criteria andSpProductEqualTo(String value) {
            addCriterion("sp_product =", value, "spProduct");
            return (Criteria) this;
        }

        public Criteria andSpProductNotEqualTo(String value) {
            addCriterion("sp_product <>", value, "spProduct");
            return (Criteria) this;
        }

        public Criteria andSpProductGreaterThan(String value) {
            addCriterion("sp_product >", value, "spProduct");
            return (Criteria) this;
        }

        public Criteria andSpProductGreaterThanOrEqualTo(String value) {
            addCriterion("sp_product >=", value, "spProduct");
            return (Criteria) this;
        }

        public Criteria andSpProductLessThan(String value) {
            addCriterion("sp_product <", value, "spProduct");
            return (Criteria) this;
        }

        public Criteria andSpProductLessThanOrEqualTo(String value) {
            addCriterion("sp_product <=", value, "spProduct");
            return (Criteria) this;
        }

        public Criteria andSpProductLike(String value) {
            addCriterion("sp_product like", value, "spProduct");
            return (Criteria) this;
        }

        public Criteria andSpProductNotLike(String value) {
            addCriterion("sp_product not like", value, "spProduct");
            return (Criteria) this;
        }

        public Criteria andSpProductIn(List<String> values) {
            addCriterion("sp_product in", values, "spProduct");
            return (Criteria) this;
        }

        public Criteria andSpProductNotIn(List<String> values) {
            addCriterion("sp_product not in", values, "spProduct");
            return (Criteria) this;
        }

        public Criteria andSpProductBetween(String value1, String value2) {
            addCriterion("sp_product between", value1, value2, "spProduct");
            return (Criteria) this;
        }

        public Criteria andSpProductNotBetween(String value1, String value2) {
            addCriterion("sp_product not between", value1, value2, "spProduct");
            return (Criteria) this;
        }

        public Criteria andSpBatchIsNull() {
            addCriterion("sp_batch is null");
            return (Criteria) this;
        }

        public Criteria andSpBatchIsNotNull() {
            addCriterion("sp_batch is not null");
            return (Criteria) this;
        }

        public Criteria andSpBatchEqualTo(String value) {
            addCriterion("sp_batch =", value, "spBatch");
            return (Criteria) this;
        }

        public Criteria andSpBatchNotEqualTo(String value) {
            addCriterion("sp_batch <>", value, "spBatch");
            return (Criteria) this;
        }

        public Criteria andSpBatchGreaterThan(String value) {
            addCriterion("sp_batch >", value, "spBatch");
            return (Criteria) this;
        }

        public Criteria andSpBatchGreaterThanOrEqualTo(String value) {
            addCriterion("sp_batch >=", value, "spBatch");
            return (Criteria) this;
        }

        public Criteria andSpBatchLessThan(String value) {
            addCriterion("sp_batch <", value, "spBatch");
            return (Criteria) this;
        }

        public Criteria andSpBatchLessThanOrEqualTo(String value) {
            addCriterion("sp_batch <=", value, "spBatch");
            return (Criteria) this;
        }

        public Criteria andSpBatchLike(String value) {
            addCriterion("sp_batch like", value, "spBatch");
            return (Criteria) this;
        }

        public Criteria andSpBatchNotLike(String value) {
            addCriterion("sp_batch not like", value, "spBatch");
            return (Criteria) this;
        }

        public Criteria andSpBatchIn(List<String> values) {
            addCriterion("sp_batch in", values, "spBatch");
            return (Criteria) this;
        }

        public Criteria andSpBatchNotIn(List<String> values) {
            addCriterion("sp_batch not in", values, "spBatch");
            return (Criteria) this;
        }

        public Criteria andSpBatchBetween(String value1, String value2) {
            addCriterion("sp_batch between", value1, value2, "spBatch");
            return (Criteria) this;
        }

        public Criteria andSpBatchNotBetween(String value1, String value2) {
            addCriterion("sp_batch not between", value1, value2, "spBatch");
            return (Criteria) this;
        }

        public Criteria andSpWeightIsNull() {
            addCriterion("sp_weight is null");
            return (Criteria) this;
        }

        public Criteria andSpWeightIsNotNull() {
            addCriterion("sp_weight is not null");
            return (Criteria) this;
        }

        public Criteria andSpWeightEqualTo(Integer value) {
            addCriterion("sp_weight =", value, "spWeight");
            return (Criteria) this;
        }

        public Criteria andSpWeightNotEqualTo(Integer value) {
            addCriterion("sp_weight <>", value, "spWeight");
            return (Criteria) this;
        }

        public Criteria andSpWeightGreaterThan(Integer value) {
            addCriterion("sp_weight >", value, "spWeight");
            return (Criteria) this;
        }

        public Criteria andSpWeightGreaterThanOrEqualTo(Integer value) {
            addCriterion("sp_weight >=", value, "spWeight");
            return (Criteria) this;
        }

        public Criteria andSpWeightLessThan(Integer value) {
            addCriterion("sp_weight <", value, "spWeight");
            return (Criteria) this;
        }

        public Criteria andSpWeightLessThanOrEqualTo(Integer value) {
            addCriterion("sp_weight <=", value, "spWeight");
            return (Criteria) this;
        }

        public Criteria andSpWeightIn(List<Integer> values) {
            addCriterion("sp_weight in", values, "spWeight");
            return (Criteria) this;
        }

        public Criteria andSpWeightNotIn(List<Integer> values) {
            addCriterion("sp_weight not in", values, "spWeight");
            return (Criteria) this;
        }

        public Criteria andSpWeightBetween(Integer value1, Integer value2) {
            addCriterion("sp_weight between", value1, value2, "spWeight");
            return (Criteria) this;
        }

        public Criteria andSpWeightNotBetween(Integer value1, Integer value2) {
            addCriterion("sp_weight not between", value1, value2, "spWeight");
            return (Criteria) this;
        }

        public Criteria andSpCountIsNull() {
            addCriterion("sp_count is null");
            return (Criteria) this;
        }

        public Criteria andSpCountIsNotNull() {
            addCriterion("sp_count is not null");
            return (Criteria) this;
        }

        public Criteria andSpCountEqualTo(Integer value) {
            addCriterion("sp_count =", value, "spCount");
            return (Criteria) this;
        }

        public Criteria andSpCountNotEqualTo(Integer value) {
            addCriterion("sp_count <>", value, "spCount");
            return (Criteria) this;
        }

        public Criteria andSpCountGreaterThan(Integer value) {
            addCriterion("sp_count >", value, "spCount");
            return (Criteria) this;
        }

        public Criteria andSpCountGreaterThanOrEqualTo(Integer value) {
            addCriterion("sp_count >=", value, "spCount");
            return (Criteria) this;
        }

        public Criteria andSpCountLessThan(Integer value) {
            addCriterion("sp_count <", value, "spCount");
            return (Criteria) this;
        }

        public Criteria andSpCountLessThanOrEqualTo(Integer value) {
            addCriterion("sp_count <=", value, "spCount");
            return (Criteria) this;
        }

        public Criteria andSpCountIn(List<Integer> values) {
            addCriterion("sp_count in", values, "spCount");
            return (Criteria) this;
        }

        public Criteria andSpCountNotIn(List<Integer> values) {
            addCriterion("sp_count not in", values, "spCount");
            return (Criteria) this;
        }

        public Criteria andSpCountBetween(Integer value1, Integer value2) {
            addCriterion("sp_count between", value1, value2, "spCount");
            return (Criteria) this;
        }

        public Criteria andSpCountNotBetween(Integer value1, Integer value2) {
            addCriterion("sp_count not between", value1, value2, "spCount");
            return (Criteria) this;
        }

        public Criteria andSpAddressIsNull() {
            addCriterion("sp_address is null");
            return (Criteria) this;
        }

        public Criteria andSpAddressIsNotNull() {
            addCriterion("sp_address is not null");
            return (Criteria) this;
        }

        public Criteria andSpAddressEqualTo(String value) {
            addCriterion("sp_address =", value, "spAddress");
            return (Criteria) this;
        }

        public Criteria andSpAddressNotEqualTo(String value) {
            addCriterion("sp_address <>", value, "spAddress");
            return (Criteria) this;
        }

        public Criteria andSpAddressGreaterThan(String value) {
            addCriterion("sp_address >", value, "spAddress");
            return (Criteria) this;
        }

        public Criteria andSpAddressGreaterThanOrEqualTo(String value) {
            addCriterion("sp_address >=", value, "spAddress");
            return (Criteria) this;
        }

        public Criteria andSpAddressLessThan(String value) {
            addCriterion("sp_address <", value, "spAddress");
            return (Criteria) this;
        }

        public Criteria andSpAddressLessThanOrEqualTo(String value) {
            addCriterion("sp_address <=", value, "spAddress");
            return (Criteria) this;
        }

        public Criteria andSpAddressLike(String value) {
            addCriterion("sp_address like", value, "spAddress");
            return (Criteria) this;
        }

        public Criteria andSpAddressNotLike(String value) {
            addCriterion("sp_address not like", value, "spAddress");
            return (Criteria) this;
        }

        public Criteria andSpAddressIn(List<String> values) {
            addCriterion("sp_address in", values, "spAddress");
            return (Criteria) this;
        }

        public Criteria andSpAddressNotIn(List<String> values) {
            addCriterion("sp_address not in", values, "spAddress");
            return (Criteria) this;
        }

        public Criteria andSpAddressBetween(String value1, String value2) {
            addCriterion("sp_address between", value1, value2, "spAddress");
            return (Criteria) this;
        }

        public Criteria andSpAddressNotBetween(String value1, String value2) {
            addCriterion("sp_address not between", value1, value2, "spAddress");
            return (Criteria) this;
        }

        public Criteria andSpDepartmentIsNull() {
            addCriterion("sp_department is null");
            return (Criteria) this;
        }

        public Criteria andSpDepartmentIsNotNull() {
            addCriterion("sp_department is not null");
            return (Criteria) this;
        }

        public Criteria andSpDepartmentEqualTo(String value) {
            addCriterion("sp_department =", value, "spDepartment");
            return (Criteria) this;
        }

        public Criteria andSpDepartmentNotEqualTo(String value) {
            addCriterion("sp_department <>", value, "spDepartment");
            return (Criteria) this;
        }

        public Criteria andSpDepartmentGreaterThan(String value) {
            addCriterion("sp_department >", value, "spDepartment");
            return (Criteria) this;
        }

        public Criteria andSpDepartmentGreaterThanOrEqualTo(String value) {
            addCriterion("sp_department >=", value, "spDepartment");
            return (Criteria) this;
        }

        public Criteria andSpDepartmentLessThan(String value) {
            addCriterion("sp_department <", value, "spDepartment");
            return (Criteria) this;
        }

        public Criteria andSpDepartmentLessThanOrEqualTo(String value) {
            addCriterion("sp_department <=", value, "spDepartment");
            return (Criteria) this;
        }

        public Criteria andSpDepartmentLike(String value) {
            addCriterion("sp_department like", value, "spDepartment");
            return (Criteria) this;
        }

        public Criteria andSpDepartmentNotLike(String value) {
            addCriterion("sp_department not like", value, "spDepartment");
            return (Criteria) this;
        }

        public Criteria andSpDepartmentIn(List<String> values) {
            addCriterion("sp_department in", values, "spDepartment");
            return (Criteria) this;
        }

        public Criteria andSpDepartmentNotIn(List<String> values) {
            addCriterion("sp_department not in", values, "spDepartment");
            return (Criteria) this;
        }

        public Criteria andSpDepartmentBetween(String value1, String value2) {
            addCriterion("sp_department between", value1, value2, "spDepartment");
            return (Criteria) this;
        }

        public Criteria andSpDepartmentNotBetween(String value1, String value2) {
            addCriterion("sp_department not between", value1, value2, "spDepartment");
            return (Criteria) this;
        }

        public Criteria andSpClassesIsNull() {
            addCriterion("sp_classes is null");
            return (Criteria) this;
        }

        public Criteria andSpClassesIsNotNull() {
            addCriterion("sp_classes is not null");
            return (Criteria) this;
        }

        public Criteria andSpClassesEqualTo(Byte value) {
            addCriterion("sp_classes =", value, "spClasses");
            return (Criteria) this;
        }

        public Criteria andSpClassesNotEqualTo(Byte value) {
            addCriterion("sp_classes <>", value, "spClasses");
            return (Criteria) this;
        }

        public Criteria andSpClassesGreaterThan(Byte value) {
            addCriterion("sp_classes >", value, "spClasses");
            return (Criteria) this;
        }

        public Criteria andSpClassesGreaterThanOrEqualTo(Byte value) {
            addCriterion("sp_classes >=", value, "spClasses");
            return (Criteria) this;
        }

        public Criteria andSpClassesLessThan(Byte value) {
            addCriterion("sp_classes <", value, "spClasses");
            return (Criteria) this;
        }

        public Criteria andSpClassesLessThanOrEqualTo(Byte value) {
            addCriterion("sp_classes <=", value, "spClasses");
            return (Criteria) this;
        }

        public Criteria andSpClassesIn(List<Byte> values) {
            addCriterion("sp_classes in", values, "spClasses");
            return (Criteria) this;
        }

        public Criteria andSpClassesNotIn(List<Byte> values) {
            addCriterion("sp_classes not in", values, "spClasses");
            return (Criteria) this;
        }

        public Criteria andSpClassesBetween(Byte value1, Byte value2) {
            addCriterion("sp_classes between", value1, value2, "spClasses");
            return (Criteria) this;
        }

        public Criteria andSpClassesNotBetween(Byte value1, Byte value2) {
            addCriterion("sp_classes not between", value1, value2, "spClasses");
            return (Criteria) this;
        }

        public Criteria andSpMainIsNull() {
            addCriterion("sp_main is null");
            return (Criteria) this;
        }

        public Criteria andSpMainIsNotNull() {
            addCriterion("sp_main is not null");
            return (Criteria) this;
        }

        public Criteria andSpMainEqualTo(String value) {
            addCriterion("sp_main =", value, "spMain");
            return (Criteria) this;
        }

        public Criteria andSpMainNotEqualTo(String value) {
            addCriterion("sp_main <>", value, "spMain");
            return (Criteria) this;
        }

        public Criteria andSpMainGreaterThan(String value) {
            addCriterion("sp_main >", value, "spMain");
            return (Criteria) this;
        }

        public Criteria andSpMainGreaterThanOrEqualTo(String value) {
            addCriterion("sp_main >=", value, "spMain");
            return (Criteria) this;
        }

        public Criteria andSpMainLessThan(String value) {
            addCriterion("sp_main <", value, "spMain");
            return (Criteria) this;
        }

        public Criteria andSpMainLessThanOrEqualTo(String value) {
            addCriterion("sp_main <=", value, "spMain");
            return (Criteria) this;
        }

        public Criteria andSpMainLike(String value) {
            addCriterion("sp_main like", value, "spMain");
            return (Criteria) this;
        }

        public Criteria andSpMainNotLike(String value) {
            addCriterion("sp_main not like", value, "spMain");
            return (Criteria) this;
        }

        public Criteria andSpMainIn(List<String> values) {
            addCriterion("sp_main in", values, "spMain");
            return (Criteria) this;
        }

        public Criteria andSpMainNotIn(List<String> values) {
            addCriterion("sp_main not in", values, "spMain");
            return (Criteria) this;
        }

        public Criteria andSpMainBetween(String value1, String value2) {
            addCriterion("sp_main between", value1, value2, "spMain");
            return (Criteria) this;
        }

        public Criteria andSpMainNotBetween(String value1, String value2) {
            addCriterion("sp_main not between", value1, value2, "spMain");
            return (Criteria) this;
        }

        public Criteria andSpGangueIsNull() {
            addCriterion("sp_gangue is null");
            return (Criteria) this;
        }

        public Criteria andSpGangueIsNotNull() {
            addCriterion("sp_gangue is not null");
            return (Criteria) this;
        }

        public Criteria andSpGangueEqualTo(Integer value) {
            addCriterion("sp_gangue =", value, "spGangue");
            return (Criteria) this;
        }

        public Criteria andSpGangueNotEqualTo(Integer value) {
            addCriterion("sp_gangue <>", value, "spGangue");
            return (Criteria) this;
        }

        public Criteria andSpGangueGreaterThan(Integer value) {
            addCriterion("sp_gangue >", value, "spGangue");
            return (Criteria) this;
        }

        public Criteria andSpGangueGreaterThanOrEqualTo(Integer value) {
            addCriterion("sp_gangue >=", value, "spGangue");
            return (Criteria) this;
        }

        public Criteria andSpGangueLessThan(Integer value) {
            addCriterion("sp_gangue <", value, "spGangue");
            return (Criteria) this;
        }

        public Criteria andSpGangueLessThanOrEqualTo(Integer value) {
            addCriterion("sp_gangue <=", value, "spGangue");
            return (Criteria) this;
        }

        public Criteria andSpGangueIn(List<Integer> values) {
            addCriterion("sp_gangue in", values, "spGangue");
            return (Criteria) this;
        }

        public Criteria andSpGangueNotIn(List<Integer> values) {
            addCriterion("sp_gangue not in", values, "spGangue");
            return (Criteria) this;
        }

        public Criteria andSpGangueBetween(Integer value1, Integer value2) {
            addCriterion("sp_gangue between", value1, value2, "spGangue");
            return (Criteria) this;
        }

        public Criteria andSpGangueNotBetween(Integer value1, Integer value2) {
            addCriterion("sp_gangue not between", value1, value2, "spGangue");
            return (Criteria) this;
        }

        public Criteria andSpRecieverIsNull() {
            addCriterion("sp_reciever is null");
            return (Criteria) this;
        }

        public Criteria andSpRecieverIsNotNull() {
            addCriterion("sp_reciever is not null");
            return (Criteria) this;
        }

        public Criteria andSpRecieverEqualTo(String value) {
            addCriterion("sp_reciever =", value, "spReciever");
            return (Criteria) this;
        }

        public Criteria andSpRecieverNotEqualTo(String value) {
            addCriterion("sp_reciever <>", value, "spReciever");
            return (Criteria) this;
        }

        public Criteria andSpRecieverGreaterThan(String value) {
            addCriterion("sp_reciever >", value, "spReciever");
            return (Criteria) this;
        }

        public Criteria andSpRecieverGreaterThanOrEqualTo(String value) {
            addCriterion("sp_reciever >=", value, "spReciever");
            return (Criteria) this;
        }

        public Criteria andSpRecieverLessThan(String value) {
            addCriterion("sp_reciever <", value, "spReciever");
            return (Criteria) this;
        }

        public Criteria andSpRecieverLessThanOrEqualTo(String value) {
            addCriterion("sp_reciever <=", value, "spReciever");
            return (Criteria) this;
        }

        public Criteria andSpRecieverLike(String value) {
            addCriterion("sp_reciever like", value, "spReciever");
            return (Criteria) this;
        }

        public Criteria andSpRecieverNotLike(String value) {
            addCriterion("sp_reciever not like", value, "spReciever");
            return (Criteria) this;
        }

        public Criteria andSpRecieverIn(List<String> values) {
            addCriterion("sp_reciever in", values, "spReciever");
            return (Criteria) this;
        }

        public Criteria andSpRecieverNotIn(List<String> values) {
            addCriterion("sp_reciever not in", values, "spReciever");
            return (Criteria) this;
        }

        public Criteria andSpRecieverBetween(String value1, String value2) {
            addCriterion("sp_reciever between", value1, value2, "spReciever");
            return (Criteria) this;
        }

        public Criteria andSpRecieverNotBetween(String value1, String value2) {
            addCriterion("sp_reciever not between", value1, value2, "spReciever");
            return (Criteria) this;
        }

        public Criteria andSpCollecterIsNull() {
            addCriterion("sp_collecter is null");
            return (Criteria) this;
        }

        public Criteria andSpCollecterIsNotNull() {
            addCriterion("sp_collecter is not null");
            return (Criteria) this;
        }

        public Criteria andSpCollecterEqualTo(String value) {
            addCriterion("sp_collecter =", value, "spCollecter");
            return (Criteria) this;
        }

        public Criteria andSpCollecterNotEqualTo(String value) {
            addCriterion("sp_collecter <>", value, "spCollecter");
            return (Criteria) this;
        }

        public Criteria andSpCollecterGreaterThan(String value) {
            addCriterion("sp_collecter >", value, "spCollecter");
            return (Criteria) this;
        }

        public Criteria andSpCollecterGreaterThanOrEqualTo(String value) {
            addCriterion("sp_collecter >=", value, "spCollecter");
            return (Criteria) this;
        }

        public Criteria andSpCollecterLessThan(String value) {
            addCriterion("sp_collecter <", value, "spCollecter");
            return (Criteria) this;
        }

        public Criteria andSpCollecterLessThanOrEqualTo(String value) {
            addCriterion("sp_collecter <=", value, "spCollecter");
            return (Criteria) this;
        }

        public Criteria andSpCollecterLike(String value) {
            addCriterion("sp_collecter like", value, "spCollecter");
            return (Criteria) this;
        }

        public Criteria andSpCollecterNotLike(String value) {
            addCriterion("sp_collecter not like", value, "spCollecter");
            return (Criteria) this;
        }

        public Criteria andSpCollecterIn(List<String> values) {
            addCriterion("sp_collecter in", values, "spCollecter");
            return (Criteria) this;
        }

        public Criteria andSpCollecterNotIn(List<String> values) {
            addCriterion("sp_collecter not in", values, "spCollecter");
            return (Criteria) this;
        }

        public Criteria andSpCollecterBetween(String value1, String value2) {
            addCriterion("sp_collecter between", value1, value2, "spCollecter");
            return (Criteria) this;
        }

        public Criteria andSpCollecterNotBetween(String value1, String value2) {
            addCriterion("sp_collecter not between", value1, value2, "spCollecter");
            return (Criteria) this;
        }

        public Criteria andSpProducerIsNull() {
            addCriterion("sp_producer is null");
            return (Criteria) this;
        }

        public Criteria andSpProducerIsNotNull() {
            addCriterion("sp_producer is not null");
            return (Criteria) this;
        }

        public Criteria andSpProducerEqualTo(String value) {
            addCriterion("sp_producer =", value, "spProducer");
            return (Criteria) this;
        }

        public Criteria andSpProducerNotEqualTo(String value) {
            addCriterion("sp_producer <>", value, "spProducer");
            return (Criteria) this;
        }

        public Criteria andSpProducerGreaterThan(String value) {
            addCriterion("sp_producer >", value, "spProducer");
            return (Criteria) this;
        }

        public Criteria andSpProducerGreaterThanOrEqualTo(String value) {
            addCriterion("sp_producer >=", value, "spProducer");
            return (Criteria) this;
        }

        public Criteria andSpProducerLessThan(String value) {
            addCriterion("sp_producer <", value, "spProducer");
            return (Criteria) this;
        }

        public Criteria andSpProducerLessThanOrEqualTo(String value) {
            addCriterion("sp_producer <=", value, "spProducer");
            return (Criteria) this;
        }

        public Criteria andSpProducerLike(String value) {
            addCriterion("sp_producer like", value, "spProducer");
            return (Criteria) this;
        }

        public Criteria andSpProducerNotLike(String value) {
            addCriterion("sp_producer not like", value, "spProducer");
            return (Criteria) this;
        }

        public Criteria andSpProducerIn(List<String> values) {
            addCriterion("sp_producer in", values, "spProducer");
            return (Criteria) this;
        }

        public Criteria andSpProducerNotIn(List<String> values) {
            addCriterion("sp_producer not in", values, "spProducer");
            return (Criteria) this;
        }

        public Criteria andSpProducerBetween(String value1, String value2) {
            addCriterion("sp_producer between", value1, value2, "spProducer");
            return (Criteria) this;
        }

        public Criteria andSpProducerNotBetween(String value1, String value2) {
            addCriterion("sp_producer not between", value1, value2, "spProducer");
            return (Criteria) this;
        }

        public Criteria andSpCstartIsNull() {
            addCriterion("sp_cstart is null");
            return (Criteria) this;
        }

        public Criteria andSpCstartIsNotNull() {
            addCriterion("sp_cstart is not null");
            return (Criteria) this;
        }

        public Criteria andSpCstartEqualTo(Date value) {
            addCriterion("sp_cstart =", value, "spCstart");
            return (Criteria) this;
        }

        public Criteria andSpCstartNotEqualTo(Date value) {
            addCriterion("sp_cstart <>", value, "spCstart");
            return (Criteria) this;
        }

        public Criteria andSpCstartGreaterThan(Date value) {
            addCriterion("sp_cstart >", value, "spCstart");
            return (Criteria) this;
        }

        public Criteria andSpCstartGreaterThanOrEqualTo(Date value) {
            addCriterion("sp_cstart >=", value, "spCstart");
            return (Criteria) this;
        }

        public Criteria andSpCstartLessThan(Date value) {
            addCriterion("sp_cstart <", value, "spCstart");
            return (Criteria) this;
        }

        public Criteria andSpCstartLessThanOrEqualTo(Date value) {
            addCriterion("sp_cstart <=", value, "spCstart");
            return (Criteria) this;
        }

        public Criteria andSpCstartIn(List<Date> values) {
            addCriterion("sp_cstart in", values, "spCstart");
            return (Criteria) this;
        }

        public Criteria andSpCstartNotIn(List<Date> values) {
            addCriterion("sp_cstart not in", values, "spCstart");
            return (Criteria) this;
        }

        public Criteria andSpCstartBetween(Date value1, Date value2) {
            addCriterion("sp_cstart between", value1, value2, "spCstart");
            return (Criteria) this;
        }

        public Criteria andSpCstartNotBetween(Date value1, Date value2) {
            addCriterion("sp_cstart not between", value1, value2, "spCstart");
            return (Criteria) this;
        }

        public Criteria andSpCendIsNull() {
            addCriterion("sp_cend is null");
            return (Criteria) this;
        }

        public Criteria andSpCendIsNotNull() {
            addCriterion("sp_cend is not null");
            return (Criteria) this;
        }

        public Criteria andSpCendEqualTo(Date value) {
            addCriterion("sp_cend =", value, "spCend");
            return (Criteria) this;
        }

        public Criteria andSpCendNotEqualTo(Date value) {
            addCriterion("sp_cend <>", value, "spCend");
            return (Criteria) this;
        }

        public Criteria andSpCendGreaterThan(Date value) {
            addCriterion("sp_cend >", value, "spCend");
            return (Criteria) this;
        }

        public Criteria andSpCendGreaterThanOrEqualTo(Date value) {
            addCriterion("sp_cend >=", value, "spCend");
            return (Criteria) this;
        }

        public Criteria andSpCendLessThan(Date value) {
            addCriterion("sp_cend <", value, "spCend");
            return (Criteria) this;
        }

        public Criteria andSpCendLessThanOrEqualTo(Date value) {
            addCriterion("sp_cend <=", value, "spCend");
            return (Criteria) this;
        }

        public Criteria andSpCendIn(List<Date> values) {
            addCriterion("sp_cend in", values, "spCend");
            return (Criteria) this;
        }

        public Criteria andSpCendNotIn(List<Date> values) {
            addCriterion("sp_cend not in", values, "spCend");
            return (Criteria) this;
        }

        public Criteria andSpCendBetween(Date value1, Date value2) {
            addCriterion("sp_cend between", value1, value2, "spCend");
            return (Criteria) this;
        }

        public Criteria andSpCendNotBetween(Date value1, Date value2) {
            addCriterion("sp_cend not between", value1, value2, "spCend");
            return (Criteria) this;
        }

        public Criteria andSpPstartIsNull() {
            addCriterion("sp_pstart is null");
            return (Criteria) this;
        }

        public Criteria andSpPstartIsNotNull() {
            addCriterion("sp_pstart is not null");
            return (Criteria) this;
        }

        public Criteria andSpPstartEqualTo(Date value) {
            addCriterion("sp_pstart =", value, "spPstart");
            return (Criteria) this;
        }

        public Criteria andSpPstartNotEqualTo(Date value) {
            addCriterion("sp_pstart <>", value, "spPstart");
            return (Criteria) this;
        }

        public Criteria andSpPstartGreaterThan(Date value) {
            addCriterion("sp_pstart >", value, "spPstart");
            return (Criteria) this;
        }

        public Criteria andSpPstartGreaterThanOrEqualTo(Date value) {
            addCriterion("sp_pstart >=", value, "spPstart");
            return (Criteria) this;
        }

        public Criteria andSpPstartLessThan(Date value) {
            addCriterion("sp_pstart <", value, "spPstart");
            return (Criteria) this;
        }

        public Criteria andSpPstartLessThanOrEqualTo(Date value) {
            addCriterion("sp_pstart <=", value, "spPstart");
            return (Criteria) this;
        }

        public Criteria andSpPstartIn(List<Date> values) {
            addCriterion("sp_pstart in", values, "spPstart");
            return (Criteria) this;
        }

        public Criteria andSpPstartNotIn(List<Date> values) {
            addCriterion("sp_pstart not in", values, "spPstart");
            return (Criteria) this;
        }

        public Criteria andSpPstartBetween(Date value1, Date value2) {
            addCriterion("sp_pstart between", value1, value2, "spPstart");
            return (Criteria) this;
        }

        public Criteria andSpPstartNotBetween(Date value1, Date value2) {
            addCriterion("sp_pstart not between", value1, value2, "spPstart");
            return (Criteria) this;
        }

        public Criteria andSpPendIsNull() {
            addCriterion("sp_pend is null");
            return (Criteria) this;
        }

        public Criteria andSpPendIsNotNull() {
            addCriterion("sp_pend is not null");
            return (Criteria) this;
        }

        public Criteria andSpPendEqualTo(Date value) {
            addCriterion("sp_pend =", value, "spPend");
            return (Criteria) this;
        }

        public Criteria andSpPendNotEqualTo(Date value) {
            addCriterion("sp_pend <>", value, "spPend");
            return (Criteria) this;
        }

        public Criteria andSpPendGreaterThan(Date value) {
            addCriterion("sp_pend >", value, "spPend");
            return (Criteria) this;
        }

        public Criteria andSpPendGreaterThanOrEqualTo(Date value) {
            addCriterion("sp_pend >=", value, "spPend");
            return (Criteria) this;
        }

        public Criteria andSpPendLessThan(Date value) {
            addCriterion("sp_pend <", value, "spPend");
            return (Criteria) this;
        }

        public Criteria andSpPendLessThanOrEqualTo(Date value) {
            addCriterion("sp_pend <=", value, "spPend");
            return (Criteria) this;
        }

        public Criteria andSpPendIn(List<Date> values) {
            addCriterion("sp_pend in", values, "spPend");
            return (Criteria) this;
        }

        public Criteria andSpPendNotIn(List<Date> values) {
            addCriterion("sp_pend not in", values, "spPend");
            return (Criteria) this;
        }

        public Criteria andSpPendBetween(Date value1, Date value2) {
            addCriterion("sp_pend between", value1, value2, "spPend");
            return (Criteria) this;
        }

        public Criteria andSpPendNotBetween(Date value1, Date value2) {
            addCriterion("sp_pend not between", value1, value2, "spPend");
            return (Criteria) this;
        }

        public Criteria andSpFlagIsNull() {
            addCriterion("sp_flag is null");
            return (Criteria) this;
        }

        public Criteria andSpFlagIsNotNull() {
            addCriterion("sp_flag is not null");
            return (Criteria) this;
        }

        public Criteria andSpFlagEqualTo(Byte value) {
            addCriterion("sp_flag =", value, "spFlag");
            return (Criteria) this;
        }

        public Criteria andSpFlagNotEqualTo(Byte value) {
            addCriterion("sp_flag <>", value, "spFlag");
            return (Criteria) this;
        }

        public Criteria andSpFlagGreaterThan(Byte value) {
            addCriterion("sp_flag >", value, "spFlag");
            return (Criteria) this;
        }

        public Criteria andSpFlagGreaterThanOrEqualTo(Byte value) {
            addCriterion("sp_flag >=", value, "spFlag");
            return (Criteria) this;
        }

        public Criteria andSpFlagLessThan(Byte value) {
            addCriterion("sp_flag <", value, "spFlag");
            return (Criteria) this;
        }

        public Criteria andSpFlagLessThanOrEqualTo(Byte value) {
            addCriterion("sp_flag <=", value, "spFlag");
            return (Criteria) this;
        }

        public Criteria andSpFlagIn(List<Byte> values) {
            addCriterion("sp_flag in", values, "spFlag");
            return (Criteria) this;
        }

        public Criteria andSpFlagNotIn(List<Byte> values) {
            addCriterion("sp_flag not in", values, "spFlag");
            return (Criteria) this;
        }

        public Criteria andSpFlagBetween(Byte value1, Byte value2) {
            addCriterion("sp_flag between", value1, value2, "spFlag");
            return (Criteria) this;
        }

        public Criteria andSpFlagNotBetween(Byte value1, Byte value2) {
            addCriterion("sp_flag not between", value1, value2, "spFlag");
            return (Criteria) this;
        }

        public Criteria andSpUserIsNull() {
            addCriterion("sp_user is null");
            return (Criteria) this;
        }

        public Criteria andSpUserIsNotNull() {
            addCriterion("sp_user is not null");
            return (Criteria) this;
        }

        public Criteria andSpUserEqualTo(String value) {
            addCriterion("sp_user =", value, "spUser");
            return (Criteria) this;
        }

        public Criteria andSpUserNotEqualTo(String value) {
            addCriterion("sp_user <>", value, "spUser");
            return (Criteria) this;
        }

        public Criteria andSpUserGreaterThan(String value) {
            addCriterion("sp_user >", value, "spUser");
            return (Criteria) this;
        }

        public Criteria andSpUserGreaterThanOrEqualTo(String value) {
            addCriterion("sp_user >=", value, "spUser");
            return (Criteria) this;
        }

        public Criteria andSpUserLessThan(String value) {
            addCriterion("sp_user <", value, "spUser");
            return (Criteria) this;
        }

        public Criteria andSpUserLessThanOrEqualTo(String value) {
            addCriterion("sp_user <=", value, "spUser");
            return (Criteria) this;
        }

        public Criteria andSpUserLike(String value) {
            addCriterion("sp_user like", value, "spUser");
            return (Criteria) this;
        }

        public Criteria andSpUserNotLike(String value) {
            addCriterion("sp_user not like", value, "spUser");
            return (Criteria) this;
        }

        public Criteria andSpUserIn(List<String> values) {
            addCriterion("sp_user in", values, "spUser");
            return (Criteria) this;
        }

        public Criteria andSpUserNotIn(List<String> values) {
            addCriterion("sp_user not in", values, "spUser");
            return (Criteria) this;
        }

        public Criteria andSpUserBetween(String value1, String value2) {
            addCriterion("sp_user between", value1, value2, "spUser");
            return (Criteria) this;
        }

        public Criteria andSpUserNotBetween(String value1, String value2) {
            addCriterion("sp_user not between", value1, value2, "spUser");
            return (Criteria) this;
        }

        public Criteria andSpDateIsNull() {
            addCriterion("sp_date is null");
            return (Criteria) this;
        }

        public Criteria andSpDateIsNotNull() {
            addCriterion("sp_date is not null");
            return (Criteria) this;
        }

        public Criteria andSpDateEqualTo(Date value) {
            addCriterionForJDBCDate("sp_date =", value, "spDate");
            return (Criteria) this;
        }

        public Criteria andSpDateNotEqualTo(Date value) {
            addCriterionForJDBCDate("sp_date <>", value, "spDate");
            return (Criteria) this;
        }

        public Criteria andSpDateGreaterThan(Date value) {
            addCriterionForJDBCDate("sp_date >", value, "spDate");
            return (Criteria) this;
        }

        public Criteria andSpDateGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("sp_date >=", value, "spDate");
            return (Criteria) this;
        }

        public Criteria andSpDateLessThan(Date value) {
            addCriterionForJDBCDate("sp_date <", value, "spDate");
            return (Criteria) this;
        }

        public Criteria andSpDateLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("sp_date <=", value, "spDate");
            return (Criteria) this;
        }

        public Criteria andSpDateIn(List<Date> values) {
            addCriterionForJDBCDate("sp_date in", values, "spDate");
            return (Criteria) this;
        }

        public Criteria andSpDateNotIn(List<Date> values) {
            addCriterionForJDBCDate("sp_date not in", values, "spDate");
            return (Criteria) this;
        }

        public Criteria andSpDateBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("sp_date between", value1, value2, "spDate");
            return (Criteria) this;
        }

        public Criteria andSpDateNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("sp_date not between", value1, value2, "spDate");
            return (Criteria) this;
        }

        public Criteria andSpWriteIsNull() {
            addCriterion("sp_write is null");
            return (Criteria) this;
        }

        public Criteria andSpWriteIsNotNull() {
            addCriterion("sp_write is not null");
            return (Criteria) this;
        }

        public Criteria andSpWriteEqualTo(Date value) {
            addCriterion("sp_write =", value, "spWrite");
            return (Criteria) this;
        }

        public Criteria andSpWriteNotEqualTo(Date value) {
            addCriterion("sp_write <>", value, "spWrite");
            return (Criteria) this;
        }

        public Criteria andSpWriteGreaterThan(Date value) {
            addCriterion("sp_write >", value, "spWrite");
            return (Criteria) this;
        }

        public Criteria andSpWriteGreaterThanOrEqualTo(Date value) {
            addCriterion("sp_write >=", value, "spWrite");
            return (Criteria) this;
        }

        public Criteria andSpWriteLessThan(Date value) {
            addCriterion("sp_write <", value, "spWrite");
            return (Criteria) this;
        }

        public Criteria andSpWriteLessThanOrEqualTo(Date value) {
            addCriterion("sp_write <=", value, "spWrite");
            return (Criteria) this;
        }

        public Criteria andSpWriteIn(List<Date> values) {
            addCriterion("sp_write in", values, "spWrite");
            return (Criteria) this;
        }

        public Criteria andSpWriteNotIn(List<Date> values) {
            addCriterion("sp_write not in", values, "spWrite");
            return (Criteria) this;
        }

        public Criteria andSpWriteBetween(Date value1, Date value2) {
            addCriterion("sp_write between", value1, value2, "spWrite");
            return (Criteria) this;
        }

        public Criteria andSpWriteNotBetween(Date value1, Date value2) {
            addCriterion("sp_write not between", value1, value2, "spWrite");
            return (Criteria) this;
        }

        public Criteria andSpExamineIsNull() {
            addCriterion("sp_examine is null");
            return (Criteria) this;
        }

        public Criteria andSpExamineIsNotNull() {
            addCriterion("sp_examine is not null");
            return (Criteria) this;
        }

        public Criteria andSpExamineEqualTo(Date value) {
            addCriterion("sp_examine =", value, "spExamine");
            return (Criteria) this;
        }

        public Criteria andSpExamineNotEqualTo(Date value) {
            addCriterion("sp_examine <>", value, "spExamine");
            return (Criteria) this;
        }

        public Criteria andSpExamineGreaterThan(Date value) {
            addCriterion("sp_examine >", value, "spExamine");
            return (Criteria) this;
        }

        public Criteria andSpExamineGreaterThanOrEqualTo(Date value) {
            addCriterion("sp_examine >=", value, "spExamine");
            return (Criteria) this;
        }

        public Criteria andSpExamineLessThan(Date value) {
            addCriterion("sp_examine <", value, "spExamine");
            return (Criteria) this;
        }

        public Criteria andSpExamineLessThanOrEqualTo(Date value) {
            addCriterion("sp_examine <=", value, "spExamine");
            return (Criteria) this;
        }

        public Criteria andSpExamineIn(List<Date> values) {
            addCriterion("sp_examine in", values, "spExamine");
            return (Criteria) this;
        }

        public Criteria andSpExamineNotIn(List<Date> values) {
            addCriterion("sp_examine not in", values, "spExamine");
            return (Criteria) this;
        }

        public Criteria andSpExamineBetween(Date value1, Date value2) {
            addCriterion("sp_examine between", value1, value2, "spExamine");
            return (Criteria) this;
        }

        public Criteria andSpExamineNotBetween(Date value1, Date value2) {
            addCriterion("sp_examine not between", value1, value2, "spExamine");
            return (Criteria) this;
        }

        public Criteria andSpGetIsNull() {
            addCriterion("sp_get is null");
            return (Criteria) this;
        }

        public Criteria andSpGetIsNotNull() {
            addCriterion("sp_get is not null");
            return (Criteria) this;
        }

        public Criteria andSpGetEqualTo(Date value) {
            addCriterion("sp_get =", value, "spGet");
            return (Criteria) this;
        }

        public Criteria andSpGetNotEqualTo(Date value) {
            addCriterion("sp_get <>", value, "spGet");
            return (Criteria) this;
        }

        public Criteria andSpGetGreaterThan(Date value) {
            addCriterion("sp_get >", value, "spGet");
            return (Criteria) this;
        }

        public Criteria andSpGetGreaterThanOrEqualTo(Date value) {
            addCriterion("sp_get >=", value, "spGet");
            return (Criteria) this;
        }

        public Criteria andSpGetLessThan(Date value) {
            addCriterion("sp_get <", value, "spGet");
            return (Criteria) this;
        }

        public Criteria andSpGetLessThanOrEqualTo(Date value) {
            addCriterion("sp_get <=", value, "spGet");
            return (Criteria) this;
        }

        public Criteria andSpGetIn(List<Date> values) {
            addCriterion("sp_get in", values, "spGet");
            return (Criteria) this;
        }

        public Criteria andSpGetNotIn(List<Date> values) {
            addCriterion("sp_get not in", values, "spGet");
            return (Criteria) this;
        }

        public Criteria andSpGetBetween(Date value1, Date value2) {
            addCriterion("sp_get between", value1, value2, "spGet");
            return (Criteria) this;
        }

        public Criteria andSpGetNotBetween(Date value1, Date value2) {
            addCriterion("sp_get not between", value1, value2, "spGet");
            return (Criteria) this;
        }

        public Criteria andSpWriterIsNull() {
            addCriterion("sp_writer is null");
            return (Criteria) this;
        }

        public Criteria andSpWriterIsNotNull() {
            addCriterion("sp_writer is not null");
            return (Criteria) this;
        }

        public Criteria andSpWriterEqualTo(String value) {
            addCriterion("sp_writer =", value, "spWriter");
            return (Criteria) this;
        }

        public Criteria andSpWriterNotEqualTo(String value) {
            addCriterion("sp_writer <>", value, "spWriter");
            return (Criteria) this;
        }

        public Criteria andSpWriterGreaterThan(String value) {
            addCriterion("sp_writer >", value, "spWriter");
            return (Criteria) this;
        }

        public Criteria andSpWriterGreaterThanOrEqualTo(String value) {
            addCriterion("sp_writer >=", value, "spWriter");
            return (Criteria) this;
        }

        public Criteria andSpWriterLessThan(String value) {
            addCriterion("sp_writer <", value, "spWriter");
            return (Criteria) this;
        }

        public Criteria andSpWriterLessThanOrEqualTo(String value) {
            addCriterion("sp_writer <=", value, "spWriter");
            return (Criteria) this;
        }

        public Criteria andSpWriterLike(String value) {
            addCriterion("sp_writer like", value, "spWriter");
            return (Criteria) this;
        }

        public Criteria andSpWriterNotLike(String value) {
            addCriterion("sp_writer not like", value, "spWriter");
            return (Criteria) this;
        }

        public Criteria andSpWriterIn(List<String> values) {
            addCriterion("sp_writer in", values, "spWriter");
            return (Criteria) this;
        }

        public Criteria andSpWriterNotIn(List<String> values) {
            addCriterion("sp_writer not in", values, "spWriter");
            return (Criteria) this;
        }

        public Criteria andSpWriterBetween(String value1, String value2) {
            addCriterion("sp_writer between", value1, value2, "spWriter");
            return (Criteria) this;
        }

        public Criteria andSpWriterNotBetween(String value1, String value2) {
            addCriterion("sp_writer not between", value1, value2, "spWriter");
            return (Criteria) this;
        }

        public Criteria andSpAuditorIsNull() {
            addCriterion("sp_auditor is null");
            return (Criteria) this;
        }

        public Criteria andSpAuditorIsNotNull() {
            addCriterion("sp_auditor is not null");
            return (Criteria) this;
        }

        public Criteria andSpAuditorEqualTo(String value) {
            addCriterion("sp_auditor =", value, "spAuditor");
            return (Criteria) this;
        }

        public Criteria andSpAuditorNotEqualTo(String value) {
            addCriterion("sp_auditor <>", value, "spAuditor");
            return (Criteria) this;
        }

        public Criteria andSpAuditorGreaterThan(String value) {
            addCriterion("sp_auditor >", value, "spAuditor");
            return (Criteria) this;
        }

        public Criteria andSpAuditorGreaterThanOrEqualTo(String value) {
            addCriterion("sp_auditor >=", value, "spAuditor");
            return (Criteria) this;
        }

        public Criteria andSpAuditorLessThan(String value) {
            addCriterion("sp_auditor <", value, "spAuditor");
            return (Criteria) this;
        }

        public Criteria andSpAuditorLessThanOrEqualTo(String value) {
            addCriterion("sp_auditor <=", value, "spAuditor");
            return (Criteria) this;
        }

        public Criteria andSpAuditorLike(String value) {
            addCriterion("sp_auditor like", value, "spAuditor");
            return (Criteria) this;
        }

        public Criteria andSpAuditorNotLike(String value) {
            addCriterion("sp_auditor not like", value, "spAuditor");
            return (Criteria) this;
        }

        public Criteria andSpAuditorIn(List<String> values) {
            addCriterion("sp_auditor in", values, "spAuditor");
            return (Criteria) this;
        }

        public Criteria andSpAuditorNotIn(List<String> values) {
            addCriterion("sp_auditor not in", values, "spAuditor");
            return (Criteria) this;
        }

        public Criteria andSpAuditorBetween(String value1, String value2) {
            addCriterion("sp_auditor between", value1, value2, "spAuditor");
            return (Criteria) this;
        }

        public Criteria andSpAuditorNotBetween(String value1, String value2) {
            addCriterion("sp_auditor not between", value1, value2, "spAuditor");
            return (Criteria) this;
        }

        public Criteria andSpConsigneeIsNull() {
            addCriterion("sp_consignee is null");
            return (Criteria) this;
        }

        public Criteria andSpConsigneeIsNotNull() {
            addCriterion("sp_consignee is not null");
            return (Criteria) this;
        }

        public Criteria andSpConsigneeEqualTo(String value) {
            addCriterion("sp_consignee =", value, "spConsignee");
            return (Criteria) this;
        }

        public Criteria andSpConsigneeNotEqualTo(String value) {
            addCriterion("sp_consignee <>", value, "spConsignee");
            return (Criteria) this;
        }

        public Criteria andSpConsigneeGreaterThan(String value) {
            addCriterion("sp_consignee >", value, "spConsignee");
            return (Criteria) this;
        }

        public Criteria andSpConsigneeGreaterThanOrEqualTo(String value) {
            addCriterion("sp_consignee >=", value, "spConsignee");
            return (Criteria) this;
        }

        public Criteria andSpConsigneeLessThan(String value) {
            addCriterion("sp_consignee <", value, "spConsignee");
            return (Criteria) this;
        }

        public Criteria andSpConsigneeLessThanOrEqualTo(String value) {
            addCriterion("sp_consignee <=", value, "spConsignee");
            return (Criteria) this;
        }

        public Criteria andSpConsigneeLike(String value) {
            addCriterion("sp_consignee like", value, "spConsignee");
            return (Criteria) this;
        }

        public Criteria andSpConsigneeNotLike(String value) {
            addCriterion("sp_consignee not like", value, "spConsignee");
            return (Criteria) this;
        }

        public Criteria andSpConsigneeIn(List<String> values) {
            addCriterion("sp_consignee in", values, "spConsignee");
            return (Criteria) this;
        }

        public Criteria andSpConsigneeNotIn(List<String> values) {
            addCriterion("sp_consignee not in", values, "spConsignee");
            return (Criteria) this;
        }

        public Criteria andSpConsigneeBetween(String value1, String value2) {
            addCriterion("sp_consignee between", value1, value2, "spConsignee");
            return (Criteria) this;
        }

        public Criteria andSpConsigneeNotBetween(String value1, String value2) {
            addCriterion("sp_consignee not between", value1, value2, "spConsignee");
            return (Criteria) this;
        }

        public Criteria andSpStateIsNull() {
            addCriterion("sp_state is null");
            return (Criteria) this;
        }

        public Criteria andSpStateIsNotNull() {
            addCriterion("sp_state is not null");
            return (Criteria) this;
        }

        public Criteria andSpStateEqualTo(Byte value) {
            addCriterion("sp_state =", value, "spState");
            return (Criteria) this;
        }

        public Criteria andSpStateNotEqualTo(Byte value) {
            addCriterion("sp_state <>", value, "spState");
            return (Criteria) this;
        }

        public Criteria andSpStateGreaterThan(Byte value) {
            addCriterion("sp_state >", value, "spState");
            return (Criteria) this;
        }

        public Criteria andSpStateGreaterThanOrEqualTo(Byte value) {
            addCriterion("sp_state >=", value, "spState");
            return (Criteria) this;
        }

        public Criteria andSpStateLessThan(Byte value) {
            addCriterion("sp_state <", value, "spState");
            return (Criteria) this;
        }

        public Criteria andSpStateLessThanOrEqualTo(Byte value) {
            addCriterion("sp_state <=", value, "spState");
            return (Criteria) this;
        }

        public Criteria andSpStateIn(List<Byte> values) {
            addCriterion("sp_state in", values, "spState");
            return (Criteria) this;
        }

        public Criteria andSpStateNotIn(List<Byte> values) {
            addCriterion("sp_state not in", values, "spState");
            return (Criteria) this;
        }

        public Criteria andSpStateBetween(Byte value1, Byte value2) {
            addCriterion("sp_state between", value1, value2, "spState");
            return (Criteria) this;
        }

        public Criteria andSpStateNotBetween(Byte value1, Byte value2) {
            addCriterion("sp_state not between", value1, value2, "spState");
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