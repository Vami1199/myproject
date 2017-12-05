package com.xj.domain.base;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class BProductsQuery {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Integer pageNo = 1;

    protected Integer startRow;

    protected Integer pageSize = 10;

    protected String fields;

    public BProductsQuery() {
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

        public Criteria andPIdIsNull() {
            addCriterion("p_id is null");
            return (Criteria) this;
        }

        public Criteria andPIdIsNotNull() {
            addCriterion("p_id is not null");
            return (Criteria) this;
        }

        public Criteria andPIdEqualTo(Integer value) {
            addCriterion("p_id =", value, "pId");
            return (Criteria) this;
        }

        public Criteria andPIdNotEqualTo(Integer value) {
            addCriterion("p_id <>", value, "pId");
            return (Criteria) this;
        }

        public Criteria andPIdGreaterThan(Integer value) {
            addCriterion("p_id >", value, "pId");
            return (Criteria) this;
        }

        public Criteria andPIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("p_id >=", value, "pId");
            return (Criteria) this;
        }

        public Criteria andPIdLessThan(Integer value) {
            addCriterion("p_id <", value, "pId");
            return (Criteria) this;
        }

        public Criteria andPIdLessThanOrEqualTo(Integer value) {
            addCriterion("p_id <=", value, "pId");
            return (Criteria) this;
        }

        public Criteria andPIdIn(List<Integer> values) {
            addCriterion("p_id in", values, "pId");
            return (Criteria) this;
        }

        public Criteria andPIdNotIn(List<Integer> values) {
            addCriterion("p_id not in", values, "pId");
            return (Criteria) this;
        }

        public Criteria andPIdBetween(Integer value1, Integer value2) {
            addCriterion("p_id between", value1, value2, "pId");
            return (Criteria) this;
        }

        public Criteria andPIdNotBetween(Integer value1, Integer value2) {
            addCriterion("p_id not between", value1, value2, "pId");
            return (Criteria) this;
        }

        public Criteria andPNameIsNull() {
            addCriterion("p_name is null");
            return (Criteria) this;
        }

        public Criteria andPNameIsNotNull() {
            addCriterion("p_name is not null");
            return (Criteria) this;
        }

        public Criteria andPNameEqualTo(String value) {
            addCriterion("p_name =", value, "pName");
            return (Criteria) this;
        }

        public Criteria andPNameNotEqualTo(String value) {
            addCriterion("p_name <>", value, "pName");
            return (Criteria) this;
        }

        public Criteria andPNameGreaterThan(String value) {
            addCriterion("p_name >", value, "pName");
            return (Criteria) this;
        }

        public Criteria andPNameGreaterThanOrEqualTo(String value) {
            addCriterion("p_name >=", value, "pName");
            return (Criteria) this;
        }

        public Criteria andPNameLessThan(String value) {
            addCriterion("p_name <", value, "pName");
            return (Criteria) this;
        }

        public Criteria andPNameLessThanOrEqualTo(String value) {
            addCriterion("p_name <=", value, "pName");
            return (Criteria) this;
        }

        public Criteria andPNameLike(String value) {
            addCriterion("p_name like", value, "pName");
            return (Criteria) this;
        }

        public Criteria andPNameNotLike(String value) {
            addCriterion("p_name not like", value, "pName");
            return (Criteria) this;
        }

        public Criteria andPNameIn(List<String> values) {
            addCriterion("p_name in", values, "pName");
            return (Criteria) this;
        }

        public Criteria andPNameNotIn(List<String> values) {
            addCriterion("p_name not in", values, "pName");
            return (Criteria) this;
        }

        public Criteria andPNameBetween(String value1, String value2) {
            addCriterion("p_name between", value1, value2, "pName");
            return (Criteria) this;
        }

        public Criteria andPNameNotBetween(String value1, String value2) {
            addCriterion("p_name not between", value1, value2, "pName");
            return (Criteria) this;
        }

        public Criteria andPCoaltypeIsNull() {
            addCriterion("p_coaltype is null");
            return (Criteria) this;
        }

        public Criteria andPCoaltypeIsNotNull() {
            addCriterion("p_coaltype is not null");
            return (Criteria) this;
        }

        public Criteria andPCoaltypeEqualTo(Integer value) {
            addCriterion("p_coaltype =", value, "pCoaltype");
            return (Criteria) this;
        }

        public Criteria andPCoaltypeNotEqualTo(Integer value) {
            addCriterion("p_coaltype <>", value, "pCoaltype");
            return (Criteria) this;
        }

        public Criteria andPCoaltypeGreaterThan(Integer value) {
            addCriterion("p_coaltype >", value, "pCoaltype");
            return (Criteria) this;
        }

        public Criteria andPCoaltypeGreaterThanOrEqualTo(Integer value) {
            addCriterion("p_coaltype >=", value, "pCoaltype");
            return (Criteria) this;
        }

        public Criteria andPCoaltypeLessThan(Integer value) {
            addCriterion("p_coaltype <", value, "pCoaltype");
            return (Criteria) this;
        }

        public Criteria andPCoaltypeLessThanOrEqualTo(Integer value) {
            addCriterion("p_coaltype <=", value, "pCoaltype");
            return (Criteria) this;
        }

        public Criteria andPCoaltypeIn(List<Integer> values) {
            addCriterion("p_coaltype in", values, "pCoaltype");
            return (Criteria) this;
        }

        public Criteria andPCoaltypeNotIn(List<Integer> values) {
            addCriterion("p_coaltype not in", values, "pCoaltype");
            return (Criteria) this;
        }

        public Criteria andPCoaltypeBetween(Integer value1, Integer value2) {
            addCriterion("p_coaltype between", value1, value2, "pCoaltype");
            return (Criteria) this;
        }

        public Criteria andPCoaltypeNotBetween(Integer value1, Integer value2) {
            addCriterion("p_coaltype not between", value1, value2, "pCoaltype");
            return (Criteria) this;
        }

        public Criteria andPVarietiesIsNull() {
            addCriterion("p_varieties is null");
            return (Criteria) this;
        }

        public Criteria andPVarietiesIsNotNull() {
            addCriterion("p_varieties is not null");
            return (Criteria) this;
        }

        public Criteria andPVarietiesEqualTo(Integer value) {
            addCriterion("p_varieties =", value, "pVarieties");
            return (Criteria) this;
        }

        public Criteria andPVarietiesNotEqualTo(Integer value) {
            addCriterion("p_varieties <>", value, "pVarieties");
            return (Criteria) this;
        }

        public Criteria andPVarietiesGreaterThan(Integer value) {
            addCriterion("p_varieties >", value, "pVarieties");
            return (Criteria) this;
        }

        public Criteria andPVarietiesGreaterThanOrEqualTo(Integer value) {
            addCriterion("p_varieties >=", value, "pVarieties");
            return (Criteria) this;
        }

        public Criteria andPVarietiesLessThan(Integer value) {
            addCriterion("p_varieties <", value, "pVarieties");
            return (Criteria) this;
        }

        public Criteria andPVarietiesLessThanOrEqualTo(Integer value) {
            addCriterion("p_varieties <=", value, "pVarieties");
            return (Criteria) this;
        }

        public Criteria andPVarietiesIn(List<Integer> values) {
            addCriterion("p_varieties in", values, "pVarieties");
            return (Criteria) this;
        }

        public Criteria andPVarietiesNotIn(List<Integer> values) {
            addCriterion("p_varieties not in", values, "pVarieties");
            return (Criteria) this;
        }

        public Criteria andPVarietiesBetween(Integer value1, Integer value2) {
            addCriterion("p_varieties between", value1, value2, "pVarieties");
            return (Criteria) this;
        }

        public Criteria andPVarietiesNotBetween(Integer value1, Integer value2) {
            addCriterion("p_varieties not between", value1, value2, "pVarieties");
            return (Criteria) this;
        }

        public Criteria andPMeasurementunitIsNull() {
            addCriterion("p_measurementunit is null");
            return (Criteria) this;
        }

        public Criteria andPMeasurementunitIsNotNull() {
            addCriterion("p_measurementunit is not null");
            return (Criteria) this;
        }

        public Criteria andPMeasurementunitEqualTo(String value) {
            addCriterion("p_measurementunit =", value, "pMeasurementunit");
            return (Criteria) this;
        }

        public Criteria andPMeasurementunitNotEqualTo(String value) {
            addCriterion("p_measurementunit <>", value, "pMeasurementunit");
            return (Criteria) this;
        }

        public Criteria andPMeasurementunitGreaterThan(String value) {
            addCriterion("p_measurementunit >", value, "pMeasurementunit");
            return (Criteria) this;
        }

        public Criteria andPMeasurementunitGreaterThanOrEqualTo(String value) {
            addCriterion("p_measurementunit >=", value, "pMeasurementunit");
            return (Criteria) this;
        }

        public Criteria andPMeasurementunitLessThan(String value) {
            addCriterion("p_measurementunit <", value, "pMeasurementunit");
            return (Criteria) this;
        }

        public Criteria andPMeasurementunitLessThanOrEqualTo(String value) {
            addCriterion("p_measurementunit <=", value, "pMeasurementunit");
            return (Criteria) this;
        }

        public Criteria andPMeasurementunitLike(String value) {
            addCriterion("p_measurementunit like", value, "pMeasurementunit");
            return (Criteria) this;
        }

        public Criteria andPMeasurementunitNotLike(String value) {
            addCriterion("p_measurementunit not like", value, "pMeasurementunit");
            return (Criteria) this;
        }

        public Criteria andPMeasurementunitIn(List<String> values) {
            addCriterion("p_measurementunit in", values, "pMeasurementunit");
            return (Criteria) this;
        }

        public Criteria andPMeasurementunitNotIn(List<String> values) {
            addCriterion("p_measurementunit not in", values, "pMeasurementunit");
            return (Criteria) this;
        }

        public Criteria andPMeasurementunitBetween(String value1, String value2) {
            addCriterion("p_measurementunit between", value1, value2, "pMeasurementunit");
            return (Criteria) this;
        }

        public Criteria andPMeasurementunitNotBetween(String value1, String value2) {
            addCriterion("p_measurementunit not between", value1, value2, "pMeasurementunit");
            return (Criteria) this;
        }

        public Criteria andPProductionunitIsNull() {
            addCriterion("p_productionunit is null");
            return (Criteria) this;
        }

        public Criteria andPProductionunitIsNotNull() {
            addCriterion("p_productionunit is not null");
            return (Criteria) this;
        }

        public Criteria andPProductionunitEqualTo(String value) {
            addCriterion("p_productionunit =", value, "pProductionunit");
            return (Criteria) this;
        }

        public Criteria andPProductionunitNotEqualTo(String value) {
            addCriterion("p_productionunit <>", value, "pProductionunit");
            return (Criteria) this;
        }

        public Criteria andPProductionunitGreaterThan(String value) {
            addCriterion("p_productionunit >", value, "pProductionunit");
            return (Criteria) this;
        }

        public Criteria andPProductionunitGreaterThanOrEqualTo(String value) {
            addCriterion("p_productionunit >=", value, "pProductionunit");
            return (Criteria) this;
        }

        public Criteria andPProductionunitLessThan(String value) {
            addCriterion("p_productionunit <", value, "pProductionunit");
            return (Criteria) this;
        }

        public Criteria andPProductionunitLessThanOrEqualTo(String value) {
            addCriterion("p_productionunit <=", value, "pProductionunit");
            return (Criteria) this;
        }

        public Criteria andPProductionunitLike(String value) {
            addCriterion("p_productionunit like", value, "pProductionunit");
            return (Criteria) this;
        }

        public Criteria andPProductionunitNotLike(String value) {
            addCriterion("p_productionunit not like", value, "pProductionunit");
            return (Criteria) this;
        }

        public Criteria andPProductionunitIn(List<String> values) {
            addCriterion("p_productionunit in", values, "pProductionunit");
            return (Criteria) this;
        }

        public Criteria andPProductionunitNotIn(List<String> values) {
            addCriterion("p_productionunit not in", values, "pProductionunit");
            return (Criteria) this;
        }

        public Criteria andPProductionunitBetween(String value1, String value2) {
            addCriterion("p_productionunit between", value1, value2, "pProductionunit");
            return (Criteria) this;
        }

        public Criteria andPProductionunitNotBetween(String value1, String value2) {
            addCriterion("p_productionunit not between", value1, value2, "pProductionunit");
            return (Criteria) this;
        }

        public Criteria andPApplicationrangeIsNull() {
            addCriterion("p_applicationrange is null");
            return (Criteria) this;
        }

        public Criteria andPApplicationrangeIsNotNull() {
            addCriterion("p_applicationrange is not null");
            return (Criteria) this;
        }

        public Criteria andPApplicationrangeEqualTo(Integer value) {
            addCriterion("p_applicationrange =", value, "pApplicationrange");
            return (Criteria) this;
        }

        public Criteria andPApplicationrangeNotEqualTo(Integer value) {
            addCriterion("p_applicationrange <>", value, "pApplicationrange");
            return (Criteria) this;
        }

        public Criteria andPApplicationrangeGreaterThan(Integer value) {
            addCriterion("p_applicationrange >", value, "pApplicationrange");
            return (Criteria) this;
        }

        public Criteria andPApplicationrangeGreaterThanOrEqualTo(Integer value) {
            addCriterion("p_applicationrange >=", value, "pApplicationrange");
            return (Criteria) this;
        }

        public Criteria andPApplicationrangeLessThan(Integer value) {
            addCriterion("p_applicationrange <", value, "pApplicationrange");
            return (Criteria) this;
        }

        public Criteria andPApplicationrangeLessThanOrEqualTo(Integer value) {
            addCriterion("p_applicationrange <=", value, "pApplicationrange");
            return (Criteria) this;
        }

        public Criteria andPApplicationrangeIn(List<Integer> values) {
            addCriterion("p_applicationrange in", values, "pApplicationrange");
            return (Criteria) this;
        }

        public Criteria andPApplicationrangeNotIn(List<Integer> values) {
            addCriterion("p_applicationrange not in", values, "pApplicationrange");
            return (Criteria) this;
        }

        public Criteria andPApplicationrangeBetween(Integer value1, Integer value2) {
            addCriterion("p_applicationrange between", value1, value2, "pApplicationrange");
            return (Criteria) this;
        }

        public Criteria andPApplicationrangeNotBetween(Integer value1, Integer value2) {
            addCriterion("p_applicationrange not between", value1, value2, "pApplicationrange");
            return (Criteria) this;
        }

        public Criteria andPAvailabilityIsNull() {
            addCriterion("p_availability is null");
            return (Criteria) this;
        }

        public Criteria andPAvailabilityIsNotNull() {
            addCriterion("p_availability is not null");
            return (Criteria) this;
        }

        public Criteria andPAvailabilityEqualTo(Integer value) {
            addCriterion("p_availability =", value, "pAvailability");
            return (Criteria) this;
        }

        public Criteria andPAvailabilityNotEqualTo(Integer value) {
            addCriterion("p_availability <>", value, "pAvailability");
            return (Criteria) this;
        }

        public Criteria andPAvailabilityGreaterThan(Integer value) {
            addCriterion("p_availability >", value, "pAvailability");
            return (Criteria) this;
        }

        public Criteria andPAvailabilityGreaterThanOrEqualTo(Integer value) {
            addCriterion("p_availability >=", value, "pAvailability");
            return (Criteria) this;
        }

        public Criteria andPAvailabilityLessThan(Integer value) {
            addCriterion("p_availability <", value, "pAvailability");
            return (Criteria) this;
        }

        public Criteria andPAvailabilityLessThanOrEqualTo(Integer value) {
            addCriterion("p_availability <=", value, "pAvailability");
            return (Criteria) this;
        }

        public Criteria andPAvailabilityIn(List<Integer> values) {
            addCriterion("p_availability in", values, "pAvailability");
            return (Criteria) this;
        }

        public Criteria andPAvailabilityNotIn(List<Integer> values) {
            addCriterion("p_availability not in", values, "pAvailability");
            return (Criteria) this;
        }

        public Criteria andPAvailabilityBetween(Integer value1, Integer value2) {
            addCriterion("p_availability between", value1, value2, "pAvailability");
            return (Criteria) this;
        }

        public Criteria andPAvailabilityNotBetween(Integer value1, Integer value2) {
            addCriterion("p_availability not between", value1, value2, "pAvailability");
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