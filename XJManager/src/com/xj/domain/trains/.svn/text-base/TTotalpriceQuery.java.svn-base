package com.xj.domain.trains;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class TTotalpriceQuery {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Integer pageNo = 1;

    protected Integer startRow;

    protected Integer pageSize = 10;

    protected String fields;

    public TTotalpriceQuery() {
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

        public Criteria andTpIdIsNull() {
            addCriterion("tp_id is null");
            return (Criteria) this;
        }

        public Criteria andTpIdIsNotNull() {
            addCriterion("tp_id is not null");
            return (Criteria) this;
        }

        public Criteria andTpIdEqualTo(String value) {
            addCriterion("tp_id =", value, "tpId");
            return (Criteria) this;
        }

        public Criteria andTpIdNotEqualTo(String value) {
            addCriterion("tp_id <>", value, "tpId");
            return (Criteria) this;
        }

        public Criteria andTpIdGreaterThan(String value) {
            addCriterion("tp_id >", value, "tpId");
            return (Criteria) this;
        }

        public Criteria andTpIdGreaterThanOrEqualTo(String value) {
            addCriterion("tp_id >=", value, "tpId");
            return (Criteria) this;
        }

        public Criteria andTpIdLessThan(String value) {
            addCriterion("tp_id <", value, "tpId");
            return (Criteria) this;
        }

        public Criteria andTpIdLessThanOrEqualTo(String value) {
            addCriterion("tp_id <=", value, "tpId");
            return (Criteria) this;
        }

        public Criteria andTpIdLike(String value) {
            addCriterion("tp_id like", value, "tpId");
            return (Criteria) this;
        }

        public Criteria andTpIdNotLike(String value) {
            addCriterion("tp_id not like", value, "tpId");
            return (Criteria) this;
        }

        public Criteria andTpIdIn(List<String> values) {
            addCriterion("tp_id in", values, "tpId");
            return (Criteria) this;
        }

        public Criteria andTpIdNotIn(List<String> values) {
            addCriterion("tp_id not in", values, "tpId");
            return (Criteria) this;
        }

        public Criteria andTpIdBetween(String value1, String value2) {
            addCriterion("tp_id between", value1, value2, "tpId");
            return (Criteria) this;
        }

        public Criteria andTpIdNotBetween(String value1, String value2) {
            addCriterion("tp_id not between", value1, value2, "tpId");
            return (Criteria) this;
        }

        public Criteria andTpTransporttimeIsNull() {
            addCriterion("tp_transporttime is null");
            return (Criteria) this;
        }

        public Criteria andTpTransporttimeIsNotNull() {
            addCriterion("tp_transporttime is not null");
            return (Criteria) this;
        }

        public Criteria andTpTransporttimeEqualTo(Date value) {
            addCriterionForJDBCDate("tp_transporttime =", value, "tpTransporttime");
            return (Criteria) this;
        }

        public Criteria andTpTransporttimeNotEqualTo(Date value) {
            addCriterionForJDBCDate("tp_transporttime <>", value, "tpTransporttime");
            return (Criteria) this;
        }

        public Criteria andTpTransporttimeGreaterThan(Date value) {
            addCriterionForJDBCDate("tp_transporttime >", value, "tpTransporttime");
            return (Criteria) this;
        }

        public Criteria andTpTransporttimeGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("tp_transporttime >=", value, "tpTransporttime");
            return (Criteria) this;
        }

        public Criteria andTpTransporttimeLessThan(Date value) {
            addCriterionForJDBCDate("tp_transporttime <", value, "tpTransporttime");
            return (Criteria) this;
        }

        public Criteria andTpTransporttimeLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("tp_transporttime <=", value, "tpTransporttime");
            return (Criteria) this;
        }

        public Criteria andTpTransporttimeIn(List<Date> values) {
            addCriterionForJDBCDate("tp_transporttime in", values, "tpTransporttime");
            return (Criteria) this;
        }

        public Criteria andTpTransporttimeNotIn(List<Date> values) {
            addCriterionForJDBCDate("tp_transporttime not in", values, "tpTransporttime");
            return (Criteria) this;
        }

        public Criteria andTpTransporttimeBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("tp_transporttime between", value1, value2, "tpTransporttime");
            return (Criteria) this;
        }

        public Criteria andTpTransporttimeNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("tp_transporttime not between", value1, value2, "tpTransporttime");
            return (Criteria) this;
        }

        public Criteria andTpAhidIsNull() {
            addCriterion("tp_ahid is null");
            return (Criteria) this;
        }

        public Criteria andTpAhidIsNotNull() {
            addCriterion("tp_ahid is not null");
            return (Criteria) this;
        }

        public Criteria andTpAhidEqualTo(String value) {
            addCriterion("tp_ahid =", value, "tpAhid");
            return (Criteria) this;
        }

        public Criteria andTpAhidNotEqualTo(String value) {
            addCriterion("tp_ahid <>", value, "tpAhid");
            return (Criteria) this;
        }

        public Criteria andTpAhidGreaterThan(String value) {
            addCriterion("tp_ahid >", value, "tpAhid");
            return (Criteria) this;
        }

        public Criteria andTpAhidGreaterThanOrEqualTo(String value) {
            addCriterion("tp_ahid >=", value, "tpAhid");
            return (Criteria) this;
        }

        public Criteria andTpAhidLessThan(String value) {
            addCriterion("tp_ahid <", value, "tpAhid");
            return (Criteria) this;
        }

        public Criteria andTpAhidLessThanOrEqualTo(String value) {
            addCriterion("tp_ahid <=", value, "tpAhid");
            return (Criteria) this;
        }

        public Criteria andTpAhidLike(String value) {
            addCriterion("tp_ahid like", value, "tpAhid");
            return (Criteria) this;
        }

        public Criteria andTpAhidNotLike(String value) {
            addCriterion("tp_ahid not like", value, "tpAhid");
            return (Criteria) this;
        }

        public Criteria andTpAhidIn(List<String> values) {
            addCriterion("tp_ahid in", values, "tpAhid");
            return (Criteria) this;
        }

        public Criteria andTpAhidNotIn(List<String> values) {
            addCriterion("tp_ahid not in", values, "tpAhid");
            return (Criteria) this;
        }

        public Criteria andTpAhidBetween(String value1, String value2) {
            addCriterion("tp_ahid between", value1, value2, "tpAhid");
            return (Criteria) this;
        }

        public Criteria andTpAhidNotBetween(String value1, String value2) {
            addCriterion("tp_ahid not between", value1, value2, "tpAhid");
            return (Criteria) this;
        }

        public Criteria andTpTransportpriceIsNull() {
            addCriterion("tp_transportprice is null");
            return (Criteria) this;
        }

        public Criteria andTpTransportpriceIsNotNull() {
            addCriterion("tp_transportprice is not null");
            return (Criteria) this;
        }

        public Criteria andTpTransportpriceEqualTo(Long value) {
            addCriterion("tp_transportprice =", value, "tpTransportprice");
            return (Criteria) this;
        }

        public Criteria andTpTransportpriceNotEqualTo(Long value) {
            addCriterion("tp_transportprice <>", value, "tpTransportprice");
            return (Criteria) this;
        }

        public Criteria andTpTransportpriceGreaterThan(Long value) {
            addCriterion("tp_transportprice >", value, "tpTransportprice");
            return (Criteria) this;
        }

        public Criteria andTpTransportpriceGreaterThanOrEqualTo(Long value) {
            addCriterion("tp_transportprice >=", value, "tpTransportprice");
            return (Criteria) this;
        }

        public Criteria andTpTransportpriceLessThan(Long value) {
            addCriterion("tp_transportprice <", value, "tpTransportprice");
            return (Criteria) this;
        }

        public Criteria andTpTransportpriceLessThanOrEqualTo(Long value) {
            addCriterion("tp_transportprice <=", value, "tpTransportprice");
            return (Criteria) this;
        }

        public Criteria andTpTransportpriceIn(List<Long> values) {
            addCriterion("tp_transportprice in", values, "tpTransportprice");
            return (Criteria) this;
        }

        public Criteria andTpTransportpriceNotIn(List<Long> values) {
            addCriterion("tp_transportprice not in", values, "tpTransportprice");
            return (Criteria) this;
        }

        public Criteria andTpTransportpriceBetween(Long value1, Long value2) {
            addCriterion("tp_transportprice between", value1, value2, "tpTransportprice");
            return (Criteria) this;
        }

        public Criteria andTpTransportpriceNotBetween(Long value1, Long value2) {
            addCriterion("tp_transportprice not between", value1, value2, "tpTransportprice");
            return (Criteria) this;
        }

        public Criteria andTpOtherpriceIsNull() {
            addCriterion("tp_otherprice is null");
            return (Criteria) this;
        }

        public Criteria andTpOtherpriceIsNotNull() {
            addCriterion("tp_otherprice is not null");
            return (Criteria) this;
        }

        public Criteria andTpOtherpriceEqualTo(Long value) {
            addCriterion("tp_otherprice =", value, "tpOtherprice");
            return (Criteria) this;
        }

        public Criteria andTpOtherpriceNotEqualTo(Long value) {
            addCriterion("tp_otherprice <>", value, "tpOtherprice");
            return (Criteria) this;
        }

        public Criteria andTpOtherpriceGreaterThan(Long value) {
            addCriterion("tp_otherprice >", value, "tpOtherprice");
            return (Criteria) this;
        }

        public Criteria andTpOtherpriceGreaterThanOrEqualTo(Long value) {
            addCriterion("tp_otherprice >=", value, "tpOtherprice");
            return (Criteria) this;
        }

        public Criteria andTpOtherpriceLessThan(Long value) {
            addCriterion("tp_otherprice <", value, "tpOtherprice");
            return (Criteria) this;
        }

        public Criteria andTpOtherpriceLessThanOrEqualTo(Long value) {
            addCriterion("tp_otherprice <=", value, "tpOtherprice");
            return (Criteria) this;
        }

        public Criteria andTpOtherpriceIn(List<Long> values) {
            addCriterion("tp_otherprice in", values, "tpOtherprice");
            return (Criteria) this;
        }

        public Criteria andTpOtherpriceNotIn(List<Long> values) {
            addCriterion("tp_otherprice not in", values, "tpOtherprice");
            return (Criteria) this;
        }

        public Criteria andTpOtherpriceBetween(Long value1, Long value2) {
            addCriterion("tp_otherprice between", value1, value2, "tpOtherprice");
            return (Criteria) this;
        }

        public Criteria andTpOtherpriceNotBetween(Long value1, Long value2) {
            addCriterion("tp_otherprice not between", value1, value2, "tpOtherprice");
            return (Criteria) this;
        }

        public Criteria andTpTotalIsNull() {
            addCriterion("tp_total is null");
            return (Criteria) this;
        }

        public Criteria andTpTotalIsNotNull() {
            addCriterion("tp_total is not null");
            return (Criteria) this;
        }

        public Criteria andTpTotalEqualTo(Long value) {
            addCriterion("tp_total =", value, "tpTotal");
            return (Criteria) this;
        }

        public Criteria andTpTotalNotEqualTo(Long value) {
            addCriterion("tp_total <>", value, "tpTotal");
            return (Criteria) this;
        }

        public Criteria andTpTotalGreaterThan(Long value) {
            addCriterion("tp_total >", value, "tpTotal");
            return (Criteria) this;
        }

        public Criteria andTpTotalGreaterThanOrEqualTo(Long value) {
            addCriterion("tp_total >=", value, "tpTotal");
            return (Criteria) this;
        }

        public Criteria andTpTotalLessThan(Long value) {
            addCriterion("tp_total <", value, "tpTotal");
            return (Criteria) this;
        }

        public Criteria andTpTotalLessThanOrEqualTo(Long value) {
            addCriterion("tp_total <=", value, "tpTotal");
            return (Criteria) this;
        }

        public Criteria andTpTotalIn(List<Long> values) {
            addCriterion("tp_total in", values, "tpTotal");
            return (Criteria) this;
        }

        public Criteria andTpTotalNotIn(List<Long> values) {
            addCriterion("tp_total not in", values, "tpTotal");
            return (Criteria) this;
        }

        public Criteria andTpTotalBetween(Long value1, Long value2) {
            addCriterion("tp_total between", value1, value2, "tpTotal");
            return (Criteria) this;
        }

        public Criteria andTpTotalNotBetween(Long value1, Long value2) {
            addCriterion("tp_total not between", value1, value2, "tpTotal");
            return (Criteria) this;
        }

        public Criteria andTpReceiptIsNull() {
            addCriterion("tp_receipt is null");
            return (Criteria) this;
        }

        public Criteria andTpReceiptIsNotNull() {
            addCriterion("tp_receipt is not null");
            return (Criteria) this;
        }

        public Criteria andTpReceiptEqualTo(Byte value) {
            addCriterion("tp_receipt =", value, "tpReceipt");
            return (Criteria) this;
        }

        public Criteria andTpReceiptNotEqualTo(Byte value) {
            addCriterion("tp_receipt <>", value, "tpReceipt");
            return (Criteria) this;
        }

        public Criteria andTpReceiptGreaterThan(Byte value) {
            addCriterion("tp_receipt >", value, "tpReceipt");
            return (Criteria) this;
        }

        public Criteria andTpReceiptGreaterThanOrEqualTo(Byte value) {
            addCriterion("tp_receipt >=", value, "tpReceipt");
            return (Criteria) this;
        }

        public Criteria andTpReceiptLessThan(Byte value) {
            addCriterion("tp_receipt <", value, "tpReceipt");
            return (Criteria) this;
        }

        public Criteria andTpReceiptLessThanOrEqualTo(Byte value) {
            addCriterion("tp_receipt <=", value, "tpReceipt");
            return (Criteria) this;
        }

        public Criteria andTpReceiptIn(List<Byte> values) {
            addCriterion("tp_receipt in", values, "tpReceipt");
            return (Criteria) this;
        }

        public Criteria andTpReceiptNotIn(List<Byte> values) {
            addCriterion("tp_receipt not in", values, "tpReceipt");
            return (Criteria) this;
        }

        public Criteria andTpReceiptBetween(Byte value1, Byte value2) {
            addCriterion("tp_receipt between", value1, value2, "tpReceipt");
            return (Criteria) this;
        }

        public Criteria andTpReceiptNotBetween(Byte value1, Byte value2) {
            addCriterion("tp_receipt not between", value1, value2, "tpReceipt");
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