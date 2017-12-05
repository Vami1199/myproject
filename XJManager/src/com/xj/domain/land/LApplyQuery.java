package com.xj.domain.land;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class LApplyQuery {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Integer pageNo = 1;

    protected Integer startRow;

    protected Integer pageSize = 10;

    protected String fields;

    public LApplyQuery() {
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

        public Criteria andApIdIsNull() {
            addCriterion("ap_id is null");
            return (Criteria) this;
        }

        public Criteria andApIdIsNotNull() {
            addCriterion("ap_id is not null");
            return (Criteria) this;
        }

        public Criteria andApIdEqualTo(Integer value) {
            addCriterion("ap_id =", value, "apId");
            return (Criteria) this;
        }

        public Criteria andApIdNotEqualTo(Integer value) {
            addCriterion("ap_id <>", value, "apId");
            return (Criteria) this;
        }

        public Criteria andApIdGreaterThan(Integer value) {
            addCriterion("ap_id >", value, "apId");
            return (Criteria) this;
        }

        public Criteria andApIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("ap_id >=", value, "apId");
            return (Criteria) this;
        }

        public Criteria andApIdLessThan(Integer value) {
            addCriterion("ap_id <", value, "apId");
            return (Criteria) this;
        }

        public Criteria andApIdLessThanOrEqualTo(Integer value) {
            addCriterion("ap_id <=", value, "apId");
            return (Criteria) this;
        }

        public Criteria andApIdIn(List<Integer> values) {
            addCriterion("ap_id in", values, "apId");
            return (Criteria) this;
        }

        public Criteria andApIdNotIn(List<Integer> values) {
            addCriterion("ap_id not in", values, "apId");
            return (Criteria) this;
        }

        public Criteria andApIdBetween(Integer value1, Integer value2) {
            addCriterion("ap_id between", value1, value2, "apId");
            return (Criteria) this;
        }

        public Criteria andApIdNotBetween(Integer value1, Integer value2) {
            addCriterion("ap_id not between", value1, value2, "apId");
            return (Criteria) this;
        }

        public Criteria andApDateIsNull() {
            addCriterion("ap_date is null");
            return (Criteria) this;
        }

        public Criteria andApDateIsNotNull() {
            addCriterion("ap_date is not null");
            return (Criteria) this;
        }

        public Criteria andApDateEqualTo(Date value) {
            addCriterionForJDBCDate("ap_date =", value, "apDate");
            return (Criteria) this;
        }

        public Criteria andApDateNotEqualTo(Date value) {
            addCriterionForJDBCDate("ap_date <>", value, "apDate");
            return (Criteria) this;
        }

        public Criteria andApDateGreaterThan(Date value) {
            addCriterionForJDBCDate("ap_date >", value, "apDate");
            return (Criteria) this;
        }

        public Criteria andApDateGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("ap_date >=", value, "apDate");
            return (Criteria) this;
        }

        public Criteria andApDateLessThan(Date value) {
            addCriterionForJDBCDate("ap_date <", value, "apDate");
            return (Criteria) this;
        }

        public Criteria andApDateLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("ap_date <=", value, "apDate");
            return (Criteria) this;
        }

        public Criteria andApDateIn(List<Date> values) {
            addCriterionForJDBCDate("ap_date in", values, "apDate");
            return (Criteria) this;
        }

        public Criteria andApDateNotIn(List<Date> values) {
            addCriterionForJDBCDate("ap_date not in", values, "apDate");
            return (Criteria) this;
        }

        public Criteria andApDateBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("ap_date between", value1, value2, "apDate");
            return (Criteria) this;
        }

        public Criteria andApDateNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("ap_date not between", value1, value2, "apDate");
            return (Criteria) this;
        }

        public Criteria andApCustomeridIsNull() {
            addCriterion("ap_customerid is null");
            return (Criteria) this;
        }

        public Criteria andApCustomeridIsNotNull() {
            addCriterion("ap_customerid is not null");
            return (Criteria) this;
        }

        public Criteria andApCustomeridEqualTo(Integer value) {
            addCriterion("ap_customerid =", value, "apCustomerid");
            return (Criteria) this;
        }

        public Criteria andApCustomeridNotEqualTo(Integer value) {
            addCriterion("ap_customerid <>", value, "apCustomerid");
            return (Criteria) this;
        }

        public Criteria andApCustomeridGreaterThan(Integer value) {
            addCriterion("ap_customerid >", value, "apCustomerid");
            return (Criteria) this;
        }

        public Criteria andApCustomeridGreaterThanOrEqualTo(Integer value) {
            addCriterion("ap_customerid >=", value, "apCustomerid");
            return (Criteria) this;
        }

        public Criteria andApCustomeridLessThan(Integer value) {
            addCriterion("ap_customerid <", value, "apCustomerid");
            return (Criteria) this;
        }

        public Criteria andApCustomeridLessThanOrEqualTo(Integer value) {
            addCriterion("ap_customerid <=", value, "apCustomerid");
            return (Criteria) this;
        }

        public Criteria andApCustomeridIn(List<Integer> values) {
            addCriterion("ap_customerid in", values, "apCustomerid");
            return (Criteria) this;
        }

        public Criteria andApCustomeridNotIn(List<Integer> values) {
            addCriterion("ap_customerid not in", values, "apCustomerid");
            return (Criteria) this;
        }

        public Criteria andApCustomeridBetween(Integer value1, Integer value2) {
            addCriterion("ap_customerid between", value1, value2, "apCustomerid");
            return (Criteria) this;
        }

        public Criteria andApCustomeridNotBetween(Integer value1, Integer value2) {
            addCriterion("ap_customerid not between", value1, value2, "apCustomerid");
            return (Criteria) this;
        }

        public Criteria andApDepartmentidIsNull() {
            addCriterion("ap_departmentid is null");
            return (Criteria) this;
        }

        public Criteria andApDepartmentidIsNotNull() {
            addCriterion("ap_departmentid is not null");
            return (Criteria) this;
        }

        public Criteria andApDepartmentidEqualTo(String value) {
            addCriterion("ap_departmentid =", value, "apDepartmentid");
            return (Criteria) this;
        }

        public Criteria andApDepartmentidNotEqualTo(String value) {
            addCriterion("ap_departmentid <>", value, "apDepartmentid");
            return (Criteria) this;
        }

        public Criteria andApDepartmentidGreaterThan(String value) {
            addCriterion("ap_departmentid >", value, "apDepartmentid");
            return (Criteria) this;
        }

        public Criteria andApDepartmentidGreaterThanOrEqualTo(String value) {
            addCriterion("ap_departmentid >=", value, "apDepartmentid");
            return (Criteria) this;
        }

        public Criteria andApDepartmentidLessThan(String value) {
            addCriterion("ap_departmentid <", value, "apDepartmentid");
            return (Criteria) this;
        }

        public Criteria andApDepartmentidLessThanOrEqualTo(String value) {
            addCriterion("ap_departmentid <=", value, "apDepartmentid");
            return (Criteria) this;
        }

        public Criteria andApDepartmentidLike(String value) {
            addCriterion("ap_departmentid like", value, "apDepartmentid");
            return (Criteria) this;
        }

        public Criteria andApDepartmentidNotLike(String value) {
            addCriterion("ap_departmentid not like", value, "apDepartmentid");
            return (Criteria) this;
        }

        public Criteria andApDepartmentidIn(List<String> values) {
            addCriterion("ap_departmentid in", values, "apDepartmentid");
            return (Criteria) this;
        }

        public Criteria andApDepartmentidNotIn(List<String> values) {
            addCriterion("ap_departmentid not in", values, "apDepartmentid");
            return (Criteria) this;
        }

        public Criteria andApDepartmentidBetween(String value1, String value2) {
            addCriterion("ap_departmentid between", value1, value2, "apDepartmentid");
            return (Criteria) this;
        }

        public Criteria andApDepartmentidNotBetween(String value1, String value2) {
            addCriterion("ap_departmentid not between", value1, value2, "apDepartmentid");
            return (Criteria) this;
        }

        public Criteria andApTransportIsNull() {
            addCriterion("ap_transport is null");
            return (Criteria) this;
        }

        public Criteria andApTransportIsNotNull() {
            addCriterion("ap_transport is not null");
            return (Criteria) this;
        }

        public Criteria andApTransportEqualTo(String value) {
            addCriterion("ap_transport =", value, "apTransport");
            return (Criteria) this;
        }

        public Criteria andApTransportNotEqualTo(String value) {
            addCriterion("ap_transport <>", value, "apTransport");
            return (Criteria) this;
        }

        public Criteria andApTransportGreaterThan(String value) {
            addCriterion("ap_transport >", value, "apTransport");
            return (Criteria) this;
        }

        public Criteria andApTransportGreaterThanOrEqualTo(String value) {
            addCriterion("ap_transport >=", value, "apTransport");
            return (Criteria) this;
        }

        public Criteria andApTransportLessThan(String value) {
            addCriterion("ap_transport <", value, "apTransport");
            return (Criteria) this;
        }

        public Criteria andApTransportLessThanOrEqualTo(String value) {
            addCriterion("ap_transport <=", value, "apTransport");
            return (Criteria) this;
        }

        public Criteria andApTransportLike(String value) {
            addCriterion("ap_transport like", value, "apTransport");
            return (Criteria) this;
        }

        public Criteria andApTransportNotLike(String value) {
            addCriterion("ap_transport not like", value, "apTransport");
            return (Criteria) this;
        }

        public Criteria andApTransportIn(List<String> values) {
            addCriterion("ap_transport in", values, "apTransport");
            return (Criteria) this;
        }

        public Criteria andApTransportNotIn(List<String> values) {
            addCriterion("ap_transport not in", values, "apTransport");
            return (Criteria) this;
        }

        public Criteria andApTransportBetween(String value1, String value2) {
            addCriterion("ap_transport between", value1, value2, "apTransport");
            return (Criteria) this;
        }

        public Criteria andApTransportNotBetween(String value1, String value2) {
            addCriterion("ap_transport not between", value1, value2, "apTransport");
            return (Criteria) this;
        }

        public Criteria andApMethodIsNull() {
            addCriterion("ap_method is null");
            return (Criteria) this;
        }

        public Criteria andApMethodIsNotNull() {
            addCriterion("ap_method is not null");
            return (Criteria) this;
        }

        public Criteria andApMethodEqualTo(Byte value) {
            addCriterion("ap_method =", value, "apMethod");
            return (Criteria) this;
        }

        public Criteria andApMethodNotEqualTo(Byte value) {
            addCriterion("ap_method <>", value, "apMethod");
            return (Criteria) this;
        }

        public Criteria andApMethodGreaterThan(Byte value) {
            addCriterion("ap_method >", value, "apMethod");
            return (Criteria) this;
        }

        public Criteria andApMethodGreaterThanOrEqualTo(Byte value) {
            addCriterion("ap_method >=", value, "apMethod");
            return (Criteria) this;
        }

        public Criteria andApMethodLessThan(Byte value) {
            addCriterion("ap_method <", value, "apMethod");
            return (Criteria) this;
        }

        public Criteria andApMethodLessThanOrEqualTo(Byte value) {
            addCriterion("ap_method <=", value, "apMethod");
            return (Criteria) this;
        }

        public Criteria andApMethodIn(List<Byte> values) {
            addCriterion("ap_method in", values, "apMethod");
            return (Criteria) this;
        }

        public Criteria andApMethodNotIn(List<Byte> values) {
            addCriterion("ap_method not in", values, "apMethod");
            return (Criteria) this;
        }

        public Criteria andApMethodBetween(Byte value1, Byte value2) {
            addCriterion("ap_method between", value1, value2, "apMethod");
            return (Criteria) this;
        }

        public Criteria andApMethodNotBetween(Byte value1, Byte value2) {
            addCriterion("ap_method not between", value1, value2, "apMethod");
            return (Criteria) this;
        }

        public Criteria andApPayIsNull() {
            addCriterion("ap_pay is null");
            return (Criteria) this;
        }

        public Criteria andApPayIsNotNull() {
            addCriterion("ap_pay is not null");
            return (Criteria) this;
        }

        public Criteria andApPayEqualTo(Byte value) {
            addCriterion("ap_pay =", value, "apPay");
            return (Criteria) this;
        }

        public Criteria andApPayNotEqualTo(Byte value) {
            addCriterion("ap_pay <>", value, "apPay");
            return (Criteria) this;
        }

        public Criteria andApPayGreaterThan(Byte value) {
            addCriterion("ap_pay >", value, "apPay");
            return (Criteria) this;
        }

        public Criteria andApPayGreaterThanOrEqualTo(Byte value) {
            addCriterion("ap_pay >=", value, "apPay");
            return (Criteria) this;
        }

        public Criteria andApPayLessThan(Byte value) {
            addCriterion("ap_pay <", value, "apPay");
            return (Criteria) this;
        }

        public Criteria andApPayLessThanOrEqualTo(Byte value) {
            addCriterion("ap_pay <=", value, "apPay");
            return (Criteria) this;
        }

        public Criteria andApPayIn(List<Byte> values) {
            addCriterion("ap_pay in", values, "apPay");
            return (Criteria) this;
        }

        public Criteria andApPayNotIn(List<Byte> values) {
            addCriterion("ap_pay not in", values, "apPay");
            return (Criteria) this;
        }

        public Criteria andApPayBetween(Byte value1, Byte value2) {
            addCriterion("ap_pay between", value1, value2, "apPay");
            return (Criteria) this;
        }

        public Criteria andApPayNotBetween(Byte value1, Byte value2) {
            addCriterion("ap_pay not between", value1, value2, "apPay");
            return (Criteria) this;
        }

        public Criteria andApTicketIsNull() {
            addCriterion("ap_ticket is null");
            return (Criteria) this;
        }

        public Criteria andApTicketIsNotNull() {
            addCriterion("ap_ticket is not null");
            return (Criteria) this;
        }

        public Criteria andApTicketEqualTo(String value) {
            addCriterion("ap_ticket =", value, "apTicket");
            return (Criteria) this;
        }

        public Criteria andApTicketNotEqualTo(String value) {
            addCriterion("ap_ticket <>", value, "apTicket");
            return (Criteria) this;
        }

        public Criteria andApTicketGreaterThan(String value) {
            addCriterion("ap_ticket >", value, "apTicket");
            return (Criteria) this;
        }

        public Criteria andApTicketGreaterThanOrEqualTo(String value) {
            addCriterion("ap_ticket >=", value, "apTicket");
            return (Criteria) this;
        }

        public Criteria andApTicketLessThan(String value) {
            addCriterion("ap_ticket <", value, "apTicket");
            return (Criteria) this;
        }

        public Criteria andApTicketLessThanOrEqualTo(String value) {
            addCriterion("ap_ticket <=", value, "apTicket");
            return (Criteria) this;
        }

        public Criteria andApTicketLike(String value) {
            addCriterion("ap_ticket like", value, "apTicket");
            return (Criteria) this;
        }

        public Criteria andApTicketNotLike(String value) {
            addCriterion("ap_ticket not like", value, "apTicket");
            return (Criteria) this;
        }

        public Criteria andApTicketIn(List<String> values) {
            addCriterion("ap_ticket in", values, "apTicket");
            return (Criteria) this;
        }

        public Criteria andApTicketNotIn(List<String> values) {
            addCriterion("ap_ticket not in", values, "apTicket");
            return (Criteria) this;
        }

        public Criteria andApTicketBetween(String value1, String value2) {
            addCriterion("ap_ticket between", value1, value2, "apTicket");
            return (Criteria) this;
        }

        public Criteria andApTicketNotBetween(String value1, String value2) {
            addCriterion("ap_ticket not between", value1, value2, "apTicket");
            return (Criteria) this;
        }

        public Criteria andApReceiverIsNull() {
            addCriterion("ap_receiver is null");
            return (Criteria) this;
        }

        public Criteria andApReceiverIsNotNull() {
            addCriterion("ap_receiver is not null");
            return (Criteria) this;
        }

        public Criteria andApReceiverEqualTo(String value) {
            addCriterion("ap_receiver =", value, "apReceiver");
            return (Criteria) this;
        }

        public Criteria andApReceiverNotEqualTo(String value) {
            addCriterion("ap_receiver <>", value, "apReceiver");
            return (Criteria) this;
        }

        public Criteria andApReceiverGreaterThan(String value) {
            addCriterion("ap_receiver >", value, "apReceiver");
            return (Criteria) this;
        }

        public Criteria andApReceiverGreaterThanOrEqualTo(String value) {
            addCriterion("ap_receiver >=", value, "apReceiver");
            return (Criteria) this;
        }

        public Criteria andApReceiverLessThan(String value) {
            addCriterion("ap_receiver <", value, "apReceiver");
            return (Criteria) this;
        }

        public Criteria andApReceiverLessThanOrEqualTo(String value) {
            addCriterion("ap_receiver <=", value, "apReceiver");
            return (Criteria) this;
        }

        public Criteria andApReceiverLike(String value) {
            addCriterion("ap_receiver like", value, "apReceiver");
            return (Criteria) this;
        }

        public Criteria andApReceiverNotLike(String value) {
            addCriterion("ap_receiver not like", value, "apReceiver");
            return (Criteria) this;
        }

        public Criteria andApReceiverIn(List<String> values) {
            addCriterion("ap_receiver in", values, "apReceiver");
            return (Criteria) this;
        }

        public Criteria andApReceiverNotIn(List<String> values) {
            addCriterion("ap_receiver not in", values, "apReceiver");
            return (Criteria) this;
        }

        public Criteria andApReceiverBetween(String value1, String value2) {
            addCriterion("ap_receiver between", value1, value2, "apReceiver");
            return (Criteria) this;
        }

        public Criteria andApReceiverNotBetween(String value1, String value2) {
            addCriterion("ap_receiver not between", value1, value2, "apReceiver");
            return (Criteria) this;
        }

        public Criteria andApFlagIsNull() {
            addCriterion("ap_flag is null");
            return (Criteria) this;
        }

        public Criteria andApFlagIsNotNull() {
            addCriterion("ap_flag is not null");
            return (Criteria) this;
        }

        public Criteria andApFlagEqualTo(Byte value) {
            addCriterion("ap_flag =", value, "apFlag");
            return (Criteria) this;
        }

        public Criteria andApFlagNotEqualTo(Byte value) {
            addCriterion("ap_flag <>", value, "apFlag");
            return (Criteria) this;
        }

        public Criteria andApFlagGreaterThan(Byte value) {
            addCriterion("ap_flag >", value, "apFlag");
            return (Criteria) this;
        }

        public Criteria andApFlagGreaterThanOrEqualTo(Byte value) {
            addCriterion("ap_flag >=", value, "apFlag");
            return (Criteria) this;
        }

        public Criteria andApFlagLessThan(Byte value) {
            addCriterion("ap_flag <", value, "apFlag");
            return (Criteria) this;
        }

        public Criteria andApFlagLessThanOrEqualTo(Byte value) {
            addCriterion("ap_flag <=", value, "apFlag");
            return (Criteria) this;
        }

        public Criteria andApFlagIn(List<Byte> values) {
            addCriterion("ap_flag in", values, "apFlag");
            return (Criteria) this;
        }

        public Criteria andApFlagNotIn(List<Byte> values) {
            addCriterion("ap_flag not in", values, "apFlag");
            return (Criteria) this;
        }

        public Criteria andApFlagBetween(Byte value1, Byte value2) {
            addCriterion("ap_flag between", value1, value2, "apFlag");
            return (Criteria) this;
        }

        public Criteria andApFlagNotBetween(Byte value1, Byte value2) {
            addCriterion("ap_flag not between", value1, value2, "apFlag");
            return (Criteria) this;
        }

        public Criteria andApUserIsNull() {
            addCriterion("ap_user is null");
            return (Criteria) this;
        }

        public Criteria andApUserIsNotNull() {
            addCriterion("ap_user is not null");
            return (Criteria) this;
        }

        public Criteria andApUserEqualTo(String value) {
            addCriterion("ap_user =", value, "apUser");
            return (Criteria) this;
        }

        public Criteria andApUserNotEqualTo(String value) {
            addCriterion("ap_user <>", value, "apUser");
            return (Criteria) this;
        }

        public Criteria andApUserGreaterThan(String value) {
            addCriterion("ap_user >", value, "apUser");
            return (Criteria) this;
        }

        public Criteria andApUserGreaterThanOrEqualTo(String value) {
            addCriterion("ap_user >=", value, "apUser");
            return (Criteria) this;
        }

        public Criteria andApUserLessThan(String value) {
            addCriterion("ap_user <", value, "apUser");
            return (Criteria) this;
        }

        public Criteria andApUserLessThanOrEqualTo(String value) {
            addCriterion("ap_user <=", value, "apUser");
            return (Criteria) this;
        }

        public Criteria andApUserLike(String value) {
            addCriterion("ap_user like", value, "apUser");
            return (Criteria) this;
        }

        public Criteria andApUserNotLike(String value) {
            addCriterion("ap_user not like", value, "apUser");
            return (Criteria) this;
        }

        public Criteria andApUserIn(List<String> values) {
            addCriterion("ap_user in", values, "apUser");
            return (Criteria) this;
        }

        public Criteria andApUserNotIn(List<String> values) {
            addCriterion("ap_user not in", values, "apUser");
            return (Criteria) this;
        }

        public Criteria andApUserBetween(String value1, String value2) {
            addCriterion("ap_user between", value1, value2, "apUser");
            return (Criteria) this;
        }

        public Criteria andApUserNotBetween(String value1, String value2) {
            addCriterion("ap_user not between", value1, value2, "apUser");
            return (Criteria) this;
        }

        public Criteria andApTicketerIsNull() {
            addCriterion("ap_ticketer is null");
            return (Criteria) this;
        }

        public Criteria andApTicketerIsNotNull() {
            addCriterion("ap_ticketer is not null");
            return (Criteria) this;
        }

        public Criteria andApTicketerEqualTo(String value) {
            addCriterion("ap_ticketer =", value, "apTicketer");
            return (Criteria) this;
        }

        public Criteria andApTicketerNotEqualTo(String value) {
            addCriterion("ap_ticketer <>", value, "apTicketer");
            return (Criteria) this;
        }

        public Criteria andApTicketerGreaterThan(String value) {
            addCriterion("ap_ticketer >", value, "apTicketer");
            return (Criteria) this;
        }

        public Criteria andApTicketerGreaterThanOrEqualTo(String value) {
            addCriterion("ap_ticketer >=", value, "apTicketer");
            return (Criteria) this;
        }

        public Criteria andApTicketerLessThan(String value) {
            addCriterion("ap_ticketer <", value, "apTicketer");
            return (Criteria) this;
        }

        public Criteria andApTicketerLessThanOrEqualTo(String value) {
            addCriterion("ap_ticketer <=", value, "apTicketer");
            return (Criteria) this;
        }

        public Criteria andApTicketerLike(String value) {
            addCriterion("ap_ticketer like", value, "apTicketer");
            return (Criteria) this;
        }

        public Criteria andApTicketerNotLike(String value) {
            addCriterion("ap_ticketer not like", value, "apTicketer");
            return (Criteria) this;
        }

        public Criteria andApTicketerIn(List<String> values) {
            addCriterion("ap_ticketer in", values, "apTicketer");
            return (Criteria) this;
        }

        public Criteria andApTicketerNotIn(List<String> values) {
            addCriterion("ap_ticketer not in", values, "apTicketer");
            return (Criteria) this;
        }

        public Criteria andApTicketerBetween(String value1, String value2) {
            addCriterion("ap_ticketer between", value1, value2, "apTicketer");
            return (Criteria) this;
        }

        public Criteria andApTicketerNotBetween(String value1, String value2) {
            addCriterion("ap_ticketer not between", value1, value2, "apTicketer");
            return (Criteria) this;
        }

        public Criteria andApContractIsNull() {
            addCriterion("ap_contract is null");
            return (Criteria) this;
        }

        public Criteria andApContractIsNotNull() {
            addCriterion("ap_contract is not null");
            return (Criteria) this;
        }

        public Criteria andApContractEqualTo(String value) {
            addCriterion("ap_contract =", value, "apContract");
            return (Criteria) this;
        }

        public Criteria andApContractNotEqualTo(String value) {
            addCriterion("ap_contract <>", value, "apContract");
            return (Criteria) this;
        }

        public Criteria andApContractGreaterThan(String value) {
            addCriterion("ap_contract >", value, "apContract");
            return (Criteria) this;
        }

        public Criteria andApContractGreaterThanOrEqualTo(String value) {
            addCriterion("ap_contract >=", value, "apContract");
            return (Criteria) this;
        }

        public Criteria andApContractLessThan(String value) {
            addCriterion("ap_contract <", value, "apContract");
            return (Criteria) this;
        }

        public Criteria andApContractLessThanOrEqualTo(String value) {
            addCriterion("ap_contract <=", value, "apContract");
            return (Criteria) this;
        }

        public Criteria andApContractLike(String value) {
            addCriterion("ap_contract like", value, "apContract");
            return (Criteria) this;
        }

        public Criteria andApContractNotLike(String value) {
            addCriterion("ap_contract not like", value, "apContract");
            return (Criteria) this;
        }

        public Criteria andApContractIn(List<String> values) {
            addCriterion("ap_contract in", values, "apContract");
            return (Criteria) this;
        }

        public Criteria andApContractNotIn(List<String> values) {
            addCriterion("ap_contract not in", values, "apContract");
            return (Criteria) this;
        }

        public Criteria andApContractBetween(String value1, String value2) {
            addCriterion("ap_contract between", value1, value2, "apContract");
            return (Criteria) this;
        }

        public Criteria andApContractNotBetween(String value1, String value2) {
            addCriterion("ap_contract not between", value1, value2, "apContract");
            return (Criteria) this;
        }

        public Criteria andApStateIsNull() {
            addCriterion("ap_state is null");
            return (Criteria) this;
        }

        public Criteria andApStateIsNotNull() {
            addCriterion("ap_state is not null");
            return (Criteria) this;
        }

        public Criteria andApStateEqualTo(Byte value) {
            addCriterion("ap_state =", value, "apState");
            return (Criteria) this;
        }

        public Criteria andApStateNotEqualTo(Byte value) {
            addCriterion("ap_state <>", value, "apState");
            return (Criteria) this;
        }

        public Criteria andApStateGreaterThan(Byte value) {
            addCriterion("ap_state >", value, "apState");
            return (Criteria) this;
        }

        public Criteria andApStateGreaterThanOrEqualTo(Byte value) {
            addCriterion("ap_state >=", value, "apState");
            return (Criteria) this;
        }

        public Criteria andApStateLessThan(Byte value) {
            addCriterion("ap_state <", value, "apState");
            return (Criteria) this;
        }

        public Criteria andApStateLessThanOrEqualTo(Byte value) {
            addCriterion("ap_state <=", value, "apState");
            return (Criteria) this;
        }

        public Criteria andApStateIn(List<Byte> values) {
            addCriterion("ap_state in", values, "apState");
            return (Criteria) this;
        }

        public Criteria andApStateNotIn(List<Byte> values) {
            addCriterion("ap_state not in", values, "apState");
            return (Criteria) this;
        }

        public Criteria andApStateBetween(Byte value1, Byte value2) {
            addCriterion("ap_state between", value1, value2, "apState");
            return (Criteria) this;
        }

        public Criteria andApStateNotBetween(Byte value1, Byte value2) {
            addCriterion("ap_state not between", value1, value2, "apState");
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