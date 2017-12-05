package com.xj.domain.trains;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class TNoteQuery {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Integer pageNo = 1;

    protected Integer startRow;

    protected Integer pageSize = 10;

    protected String fields;

    public TNoteQuery() {
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

        public Criteria andNoteIdIsNull() {
            addCriterion("note_id is null");
            return (Criteria) this;
        }

        public Criteria andNoteIdIsNotNull() {
            addCriterion("note_id is not null");
            return (Criteria) this;
        }

        public Criteria andNoteIdEqualTo(Integer value) {
            addCriterion("note_id =", value, "noteId");
            return (Criteria) this;
        }

        public Criteria andNoteIdNotEqualTo(Integer value) {
            addCriterion("note_id <>", value, "noteId");
            return (Criteria) this;
        }

        public Criteria andNoteIdGreaterThan(Integer value) {
            addCriterion("note_id >", value, "noteId");
            return (Criteria) this;
        }

        public Criteria andNoteIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("note_id >=", value, "noteId");
            return (Criteria) this;
        }

        public Criteria andNoteIdLessThan(Integer value) {
            addCriterion("note_id <", value, "noteId");
            return (Criteria) this;
        }

        public Criteria andNoteIdLessThanOrEqualTo(Integer value) {
            addCriterion("note_id <=", value, "noteId");
            return (Criteria) this;
        }

        public Criteria andNoteIdIn(List<Integer> values) {
            addCriterion("note_id in", values, "noteId");
            return (Criteria) this;
        }

        public Criteria andNoteIdNotIn(List<Integer> values) {
            addCriterion("note_id not in", values, "noteId");
            return (Criteria) this;
        }

        public Criteria andNoteIdBetween(Integer value1, Integer value2) {
            addCriterion("note_id between", value1, value2, "noteId");
            return (Criteria) this;
        }

        public Criteria andNoteIdNotBetween(Integer value1, Integer value2) {
            addCriterion("note_id not between", value1, value2, "noteId");
            return (Criteria) this;
        }

        public Criteria andNoteWagonidIsNull() {
            addCriterion("note_wagonid is null");
            return (Criteria) this;
        }

        public Criteria andNoteWagonidIsNotNull() {
            addCriterion("note_wagonid is not null");
            return (Criteria) this;
        }

        public Criteria andNoteWagonidEqualTo(String value) {
            addCriterion("note_wagonid =", value, "noteWagonid");
            return (Criteria) this;
        }

        public Criteria andNoteWagonidNotEqualTo(String value) {
            addCriterion("note_wagonid <>", value, "noteWagonid");
            return (Criteria) this;
        }

        public Criteria andNoteWagonidGreaterThan(String value) {
            addCriterion("note_wagonid >", value, "noteWagonid");
            return (Criteria) this;
        }

        public Criteria andNoteWagonidGreaterThanOrEqualTo(String value) {
            addCriterion("note_wagonid >=", value, "noteWagonid");
            return (Criteria) this;
        }

        public Criteria andNoteWagonidLessThan(String value) {
            addCriterion("note_wagonid <", value, "noteWagonid");
            return (Criteria) this;
        }

        public Criteria andNoteWagonidLessThanOrEqualTo(String value) {
            addCriterion("note_wagonid <=", value, "noteWagonid");
            return (Criteria) this;
        }

        public Criteria andNoteWagonidLike(String value) {
            addCriterion("note_wagonid like", value, "noteWagonid");
            return (Criteria) this;
        }

        public Criteria andNoteWagonidNotLike(String value) {
            addCriterion("note_wagonid not like", value, "noteWagonid");
            return (Criteria) this;
        }

        public Criteria andNoteWagonidIn(List<String> values) {
            addCriterion("note_wagonid in", values, "noteWagonid");
            return (Criteria) this;
        }

        public Criteria andNoteWagonidNotIn(List<String> values) {
            addCriterion("note_wagonid not in", values, "noteWagonid");
            return (Criteria) this;
        }

        public Criteria andNoteWagonidBetween(String value1, String value2) {
            addCriterion("note_wagonid between", value1, value2, "noteWagonid");
            return (Criteria) this;
        }

        public Criteria andNoteWagonidNotBetween(String value1, String value2) {
            addCriterion("note_wagonid not between", value1, value2, "noteWagonid");
            return (Criteria) this;
        }

        public Criteria andNoteNumIsNull() {
            addCriterion("note_num is null");
            return (Criteria) this;
        }

        public Criteria andNoteNumIsNotNull() {
            addCriterion("note_num is not null");
            return (Criteria) this;
        }

        public Criteria andNoteNumEqualTo(String value) {
            addCriterion("note_num =", value, "noteNum");
            return (Criteria) this;
        }

        public Criteria andNoteNumNotEqualTo(String value) {
            addCriterion("note_num <>", value, "noteNum");
            return (Criteria) this;
        }

        public Criteria andNoteNumGreaterThan(String value) {
            addCriterion("note_num >", value, "noteNum");
            return (Criteria) this;
        }

        public Criteria andNoteNumGreaterThanOrEqualTo(String value) {
            addCriterion("note_num >=", value, "noteNum");
            return (Criteria) this;
        }

        public Criteria andNoteNumLessThan(String value) {
            addCriterion("note_num <", value, "noteNum");
            return (Criteria) this;
        }

        public Criteria andNoteNumLessThanOrEqualTo(String value) {
            addCriterion("note_num <=", value, "noteNum");
            return (Criteria) this;
        }

        public Criteria andNoteNumLike(String value) {
            addCriterion("note_num like", value, "noteNum");
            return (Criteria) this;
        }

        public Criteria andNoteNumNotLike(String value) {
            addCriterion("note_num not like", value, "noteNum");
            return (Criteria) this;
        }

        public Criteria andNoteNumIn(List<String> values) {
            addCriterion("note_num in", values, "noteNum");
            return (Criteria) this;
        }

        public Criteria andNoteNumNotIn(List<String> values) {
            addCriterion("note_num not in", values, "noteNum");
            return (Criteria) this;
        }

        public Criteria andNoteNumBetween(String value1, String value2) {
            addCriterion("note_num between", value1, value2, "noteNum");
            return (Criteria) this;
        }

        public Criteria andNoteNumNotBetween(String value1, String value2) {
            addCriterion("note_num not between", value1, value2, "noteNum");
            return (Criteria) this;
        }

        public Criteria andNoteTnumIsNull() {
            addCriterion("note_tnum is null");
            return (Criteria) this;
        }

        public Criteria andNoteTnumIsNotNull() {
            addCriterion("note_tnum is not null");
            return (Criteria) this;
        }

        public Criteria andNoteTnumEqualTo(String value) {
            addCriterion("note_tnum =", value, "noteTnum");
            return (Criteria) this;
        }

        public Criteria andNoteTnumNotEqualTo(String value) {
            addCriterion("note_tnum <>", value, "noteTnum");
            return (Criteria) this;
        }

        public Criteria andNoteTnumGreaterThan(String value) {
            addCriterion("note_tnum >", value, "noteTnum");
            return (Criteria) this;
        }

        public Criteria andNoteTnumGreaterThanOrEqualTo(String value) {
            addCriterion("note_tnum >=", value, "noteTnum");
            return (Criteria) this;
        }

        public Criteria andNoteTnumLessThan(String value) {
            addCriterion("note_tnum <", value, "noteTnum");
            return (Criteria) this;
        }

        public Criteria andNoteTnumLessThanOrEqualTo(String value) {
            addCriterion("note_tnum <=", value, "noteTnum");
            return (Criteria) this;
        }

        public Criteria andNoteTnumLike(String value) {
            addCriterion("note_tnum like", value, "noteTnum");
            return (Criteria) this;
        }

        public Criteria andNoteTnumNotLike(String value) {
            addCriterion("note_tnum not like", value, "noteTnum");
            return (Criteria) this;
        }

        public Criteria andNoteTnumIn(List<String> values) {
            addCriterion("note_tnum in", values, "noteTnum");
            return (Criteria) this;
        }

        public Criteria andNoteTnumNotIn(List<String> values) {
            addCriterion("note_tnum not in", values, "noteTnum");
            return (Criteria) this;
        }

        public Criteria andNoteTnumBetween(String value1, String value2) {
            addCriterion("note_tnum between", value1, value2, "noteTnum");
            return (Criteria) this;
        }

        public Criteria andNoteTnumNotBetween(String value1, String value2) {
            addCriterion("note_tnum not between", value1, value2, "noteTnum");
            return (Criteria) this;
        }

        public Criteria andNoteLoadingerIsNull() {
            addCriterion("note_loadinger is null");
            return (Criteria) this;
        }

        public Criteria andNoteLoadingerIsNotNull() {
            addCriterion("note_loadinger is not null");
            return (Criteria) this;
        }

        public Criteria andNoteLoadingerEqualTo(Byte value) {
            addCriterion("note_loadinger =", value, "noteLoadinger");
            return (Criteria) this;
        }

        public Criteria andNoteLoadingerNotEqualTo(Byte value) {
            addCriterion("note_loadinger <>", value, "noteLoadinger");
            return (Criteria) this;
        }

        public Criteria andNoteLoadingerGreaterThan(Byte value) {
            addCriterion("note_loadinger >", value, "noteLoadinger");
            return (Criteria) this;
        }

        public Criteria andNoteLoadingerGreaterThanOrEqualTo(Byte value) {
            addCriterion("note_loadinger >=", value, "noteLoadinger");
            return (Criteria) this;
        }

        public Criteria andNoteLoadingerLessThan(Byte value) {
            addCriterion("note_loadinger <", value, "noteLoadinger");
            return (Criteria) this;
        }

        public Criteria andNoteLoadingerLessThanOrEqualTo(Byte value) {
            addCriterion("note_loadinger <=", value, "noteLoadinger");
            return (Criteria) this;
        }

        public Criteria andNoteLoadingerIn(List<Byte> values) {
            addCriterion("note_loadinger in", values, "noteLoadinger");
            return (Criteria) this;
        }

        public Criteria andNoteLoadingerNotIn(List<Byte> values) {
            addCriterion("note_loadinger not in", values, "noteLoadinger");
            return (Criteria) this;
        }

        public Criteria andNoteLoadingerBetween(Byte value1, Byte value2) {
            addCriterion("note_loadinger between", value1, value2, "noteLoadinger");
            return (Criteria) this;
        }

        public Criteria andNoteLoadingerNotBetween(Byte value1, Byte value2) {
            addCriterion("note_loadinger not between", value1, value2, "noteLoadinger");
            return (Criteria) this;
        }

        public Criteria andNoteWayIsNull() {
            addCriterion("note_way is null");
            return (Criteria) this;
        }

        public Criteria andNoteWayIsNotNull() {
            addCriterion("note_way is not null");
            return (Criteria) this;
        }

        public Criteria andNoteWayEqualTo(String value) {
            addCriterion("note_way =", value, "noteWay");
            return (Criteria) this;
        }

        public Criteria andNoteWayNotEqualTo(String value) {
            addCriterion("note_way <>", value, "noteWay");
            return (Criteria) this;
        }

        public Criteria andNoteWayGreaterThan(String value) {
            addCriterion("note_way >", value, "noteWay");
            return (Criteria) this;
        }

        public Criteria andNoteWayGreaterThanOrEqualTo(String value) {
            addCriterion("note_way >=", value, "noteWay");
            return (Criteria) this;
        }

        public Criteria andNoteWayLessThan(String value) {
            addCriterion("note_way <", value, "noteWay");
            return (Criteria) this;
        }

        public Criteria andNoteWayLessThanOrEqualTo(String value) {
            addCriterion("note_way <=", value, "noteWay");
            return (Criteria) this;
        }

        public Criteria andNoteWayLike(String value) {
            addCriterion("note_way like", value, "noteWay");
            return (Criteria) this;
        }

        public Criteria andNoteWayNotLike(String value) {
            addCriterion("note_way not like", value, "noteWay");
            return (Criteria) this;
        }

        public Criteria andNoteWayIn(List<String> values) {
            addCriterion("note_way in", values, "noteWay");
            return (Criteria) this;
        }

        public Criteria andNoteWayNotIn(List<String> values) {
            addCriterion("note_way not in", values, "noteWay");
            return (Criteria) this;
        }

        public Criteria andNoteWayBetween(String value1, String value2) {
            addCriterion("note_way between", value1, value2, "noteWay");
            return (Criteria) this;
        }

        public Criteria andNoteWayNotBetween(String value1, String value2) {
            addCriterion("note_way not between", value1, value2, "noteWay");
            return (Criteria) this;
        }

        public Criteria andNoteArrivetimeIsNull() {
            addCriterion("note_arrivetime is null");
            return (Criteria) this;
        }

        public Criteria andNoteArrivetimeIsNotNull() {
            addCriterion("note_arrivetime is not null");
            return (Criteria) this;
        }

        public Criteria andNoteArrivetimeEqualTo(Date value) {
            addCriterionForJDBCDate("note_arrivetime =", value, "noteArrivetime");
            return (Criteria) this;
        }

        public Criteria andNoteArrivetimeNotEqualTo(Date value) {
            addCriterionForJDBCDate("note_arrivetime <>", value, "noteArrivetime");
            return (Criteria) this;
        }

        public Criteria andNoteArrivetimeGreaterThan(Date value) {
            addCriterionForJDBCDate("note_arrivetime >", value, "noteArrivetime");
            return (Criteria) this;
        }

        public Criteria andNoteArrivetimeGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("note_arrivetime >=", value, "noteArrivetime");
            return (Criteria) this;
        }

        public Criteria andNoteArrivetimeLessThan(Date value) {
            addCriterionForJDBCDate("note_arrivetime <", value, "noteArrivetime");
            return (Criteria) this;
        }

        public Criteria andNoteArrivetimeLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("note_arrivetime <=", value, "noteArrivetime");
            return (Criteria) this;
        }

        public Criteria andNoteArrivetimeIn(List<Date> values) {
            addCriterionForJDBCDate("note_arrivetime in", values, "noteArrivetime");
            return (Criteria) this;
        }

        public Criteria andNoteArrivetimeNotIn(List<Date> values) {
            addCriterionForJDBCDate("note_arrivetime not in", values, "noteArrivetime");
            return (Criteria) this;
        }

        public Criteria andNoteArrivetimeBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("note_arrivetime between", value1, value2, "noteArrivetime");
            return (Criteria) this;
        }

        public Criteria andNoteArrivetimeNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("note_arrivetime not between", value1, value2, "noteArrivetime");
            return (Criteria) this;
        }

        public Criteria andNoteCnumIsNull() {
            addCriterion("note_cnum is null");
            return (Criteria) this;
        }

        public Criteria andNoteCnumIsNotNull() {
            addCriterion("note_cnum is not null");
            return (Criteria) this;
        }

        public Criteria andNoteCnumEqualTo(String value) {
            addCriterion("note_cnum =", value, "noteCnum");
            return (Criteria) this;
        }

        public Criteria andNoteCnumNotEqualTo(String value) {
            addCriterion("note_cnum <>", value, "noteCnum");
            return (Criteria) this;
        }

        public Criteria andNoteCnumGreaterThan(String value) {
            addCriterion("note_cnum >", value, "noteCnum");
            return (Criteria) this;
        }

        public Criteria andNoteCnumGreaterThanOrEqualTo(String value) {
            addCriterion("note_cnum >=", value, "noteCnum");
            return (Criteria) this;
        }

        public Criteria andNoteCnumLessThan(String value) {
            addCriterion("note_cnum <", value, "noteCnum");
            return (Criteria) this;
        }

        public Criteria andNoteCnumLessThanOrEqualTo(String value) {
            addCriterion("note_cnum <=", value, "noteCnum");
            return (Criteria) this;
        }

        public Criteria andNoteCnumLike(String value) {
            addCriterion("note_cnum like", value, "noteCnum");
            return (Criteria) this;
        }

        public Criteria andNoteCnumNotLike(String value) {
            addCriterion("note_cnum not like", value, "noteCnum");
            return (Criteria) this;
        }

        public Criteria andNoteCnumIn(List<String> values) {
            addCriterion("note_cnum in", values, "noteCnum");
            return (Criteria) this;
        }

        public Criteria andNoteCnumNotIn(List<String> values) {
            addCriterion("note_cnum not in", values, "noteCnum");
            return (Criteria) this;
        }

        public Criteria andNoteCnumBetween(String value1, String value2) {
            addCriterion("note_cnum between", value1, value2, "noteCnum");
            return (Criteria) this;
        }

        public Criteria andNoteCnumNotBetween(String value1, String value2) {
            addCriterion("note_cnum not between", value1, value2, "noteCnum");
            return (Criteria) this;
        }

        public Criteria andNoteLengthIsNull() {
            addCriterion("note_length is null");
            return (Criteria) this;
        }

        public Criteria andNoteLengthIsNotNull() {
            addCriterion("note_length is not null");
            return (Criteria) this;
        }

        public Criteria andNoteLengthEqualTo(Long value) {
            addCriterion("note_length =", value, "noteLength");
            return (Criteria) this;
        }

        public Criteria andNoteLengthNotEqualTo(Long value) {
            addCriterion("note_length <>", value, "noteLength");
            return (Criteria) this;
        }

        public Criteria andNoteLengthGreaterThan(Long value) {
            addCriterion("note_length >", value, "noteLength");
            return (Criteria) this;
        }

        public Criteria andNoteLengthGreaterThanOrEqualTo(Long value) {
            addCriterion("note_length >=", value, "noteLength");
            return (Criteria) this;
        }

        public Criteria andNoteLengthLessThan(Long value) {
            addCriterion("note_length <", value, "noteLength");
            return (Criteria) this;
        }

        public Criteria andNoteLengthLessThanOrEqualTo(Long value) {
            addCriterion("note_length <=", value, "noteLength");
            return (Criteria) this;
        }

        public Criteria andNoteLengthIn(List<Long> values) {
            addCriterion("note_length in", values, "noteLength");
            return (Criteria) this;
        }

        public Criteria andNoteLengthNotIn(List<Long> values) {
            addCriterion("note_length not in", values, "noteLength");
            return (Criteria) this;
        }

        public Criteria andNoteLengthBetween(Long value1, Long value2) {
            addCriterion("note_length between", value1, value2, "noteLength");
            return (Criteria) this;
        }

        public Criteria andNoteLengthNotBetween(Long value1, Long value2) {
            addCriterion("note_length not between", value1, value2, "noteLength");
            return (Criteria) this;
        }

        public Criteria andNoteBoxtypeIsNull() {
            addCriterion("note_boxtype is null");
            return (Criteria) this;
        }

        public Criteria andNoteBoxtypeIsNotNull() {
            addCriterion("note_boxtype is not null");
            return (Criteria) this;
        }

        public Criteria andNoteBoxtypeEqualTo(String value) {
            addCriterion("note_boxtype =", value, "noteBoxtype");
            return (Criteria) this;
        }

        public Criteria andNoteBoxtypeNotEqualTo(String value) {
            addCriterion("note_boxtype <>", value, "noteBoxtype");
            return (Criteria) this;
        }

        public Criteria andNoteBoxtypeGreaterThan(String value) {
            addCriterion("note_boxtype >", value, "noteBoxtype");
            return (Criteria) this;
        }

        public Criteria andNoteBoxtypeGreaterThanOrEqualTo(String value) {
            addCriterion("note_boxtype >=", value, "noteBoxtype");
            return (Criteria) this;
        }

        public Criteria andNoteBoxtypeLessThan(String value) {
            addCriterion("note_boxtype <", value, "noteBoxtype");
            return (Criteria) this;
        }

        public Criteria andNoteBoxtypeLessThanOrEqualTo(String value) {
            addCriterion("note_boxtype <=", value, "noteBoxtype");
            return (Criteria) this;
        }

        public Criteria andNoteBoxtypeLike(String value) {
            addCriterion("note_boxtype like", value, "noteBoxtype");
            return (Criteria) this;
        }

        public Criteria andNoteBoxtypeNotLike(String value) {
            addCriterion("note_boxtype not like", value, "noteBoxtype");
            return (Criteria) this;
        }

        public Criteria andNoteBoxtypeIn(List<String> values) {
            addCriterion("note_boxtype in", values, "noteBoxtype");
            return (Criteria) this;
        }

        public Criteria andNoteBoxtypeNotIn(List<String> values) {
            addCriterion("note_boxtype not in", values, "noteBoxtype");
            return (Criteria) this;
        }

        public Criteria andNoteBoxtypeBetween(String value1, String value2) {
            addCriterion("note_boxtype between", value1, value2, "noteBoxtype");
            return (Criteria) this;
        }

        public Criteria andNoteBoxtypeNotBetween(String value1, String value2) {
            addCriterion("note_boxtype not between", value1, value2, "noteBoxtype");
            return (Criteria) this;
        }

        public Criteria andNoteShipperIsNull() {
            addCriterion("note_shipper is null");
            return (Criteria) this;
        }

        public Criteria andNoteShipperIsNotNull() {
            addCriterion("note_shipper is not null");
            return (Criteria) this;
        }

        public Criteria andNoteShipperEqualTo(String value) {
            addCriterion("note_shipper =", value, "noteShipper");
            return (Criteria) this;
        }

        public Criteria andNoteShipperNotEqualTo(String value) {
            addCriterion("note_shipper <>", value, "noteShipper");
            return (Criteria) this;
        }

        public Criteria andNoteShipperGreaterThan(String value) {
            addCriterion("note_shipper >", value, "noteShipper");
            return (Criteria) this;
        }

        public Criteria andNoteShipperGreaterThanOrEqualTo(String value) {
            addCriterion("note_shipper >=", value, "noteShipper");
            return (Criteria) this;
        }

        public Criteria andNoteShipperLessThan(String value) {
            addCriterion("note_shipper <", value, "noteShipper");
            return (Criteria) this;
        }

        public Criteria andNoteShipperLessThanOrEqualTo(String value) {
            addCriterion("note_shipper <=", value, "noteShipper");
            return (Criteria) this;
        }

        public Criteria andNoteShipperLike(String value) {
            addCriterion("note_shipper like", value, "noteShipper");
            return (Criteria) this;
        }

        public Criteria andNoteShipperNotLike(String value) {
            addCriterion("note_shipper not like", value, "noteShipper");
            return (Criteria) this;
        }

        public Criteria andNoteShipperIn(List<String> values) {
            addCriterion("note_shipper in", values, "noteShipper");
            return (Criteria) this;
        }

        public Criteria andNoteShipperNotIn(List<String> values) {
            addCriterion("note_shipper not in", values, "noteShipper");
            return (Criteria) this;
        }

        public Criteria andNoteShipperBetween(String value1, String value2) {
            addCriterion("note_shipper between", value1, value2, "noteShipper");
            return (Criteria) this;
        }

        public Criteria andNoteShipperNotBetween(String value1, String value2) {
            addCriterion("note_shipper not between", value1, value2, "noteShipper");
            return (Criteria) this;
        }

        public Criteria andNoteShipperaddressIsNull() {
            addCriterion("note_shipperaddress is null");
            return (Criteria) this;
        }

        public Criteria andNoteShipperaddressIsNotNull() {
            addCriterion("note_shipperaddress is not null");
            return (Criteria) this;
        }

        public Criteria andNoteShipperaddressEqualTo(String value) {
            addCriterion("note_shipperaddress =", value, "noteShipperaddress");
            return (Criteria) this;
        }

        public Criteria andNoteShipperaddressNotEqualTo(String value) {
            addCriterion("note_shipperaddress <>", value, "noteShipperaddress");
            return (Criteria) this;
        }

        public Criteria andNoteShipperaddressGreaterThan(String value) {
            addCriterion("note_shipperaddress >", value, "noteShipperaddress");
            return (Criteria) this;
        }

        public Criteria andNoteShipperaddressGreaterThanOrEqualTo(String value) {
            addCriterion("note_shipperaddress >=", value, "noteShipperaddress");
            return (Criteria) this;
        }

        public Criteria andNoteShipperaddressLessThan(String value) {
            addCriterion("note_shipperaddress <", value, "noteShipperaddress");
            return (Criteria) this;
        }

        public Criteria andNoteShipperaddressLessThanOrEqualTo(String value) {
            addCriterion("note_shipperaddress <=", value, "noteShipperaddress");
            return (Criteria) this;
        }

        public Criteria andNoteShipperaddressLike(String value) {
            addCriterion("note_shipperaddress like", value, "noteShipperaddress");
            return (Criteria) this;
        }

        public Criteria andNoteShipperaddressNotLike(String value) {
            addCriterion("note_shipperaddress not like", value, "noteShipperaddress");
            return (Criteria) this;
        }

        public Criteria andNoteShipperaddressIn(List<String> values) {
            addCriterion("note_shipperaddress in", values, "noteShipperaddress");
            return (Criteria) this;
        }

        public Criteria andNoteShipperaddressNotIn(List<String> values) {
            addCriterion("note_shipperaddress not in", values, "noteShipperaddress");
            return (Criteria) this;
        }

        public Criteria andNoteShipperaddressBetween(String value1, String value2) {
            addCriterion("note_shipperaddress between", value1, value2, "noteShipperaddress");
            return (Criteria) this;
        }

        public Criteria andNoteShipperaddressNotBetween(String value1, String value2) {
            addCriterion("note_shipperaddress not between", value1, value2, "noteShipperaddress");
            return (Criteria) this;
        }

        public Criteria andNoteCountIsNull() {
            addCriterion("note_count is null");
            return (Criteria) this;
        }

        public Criteria andNoteCountIsNotNull() {
            addCriterion("note_count is not null");
            return (Criteria) this;
        }

        public Criteria andNoteCountEqualTo(Integer value) {
            addCriterion("note_count =", value, "noteCount");
            return (Criteria) this;
        }

        public Criteria andNoteCountNotEqualTo(Integer value) {
            addCriterion("note_count <>", value, "noteCount");
            return (Criteria) this;
        }

        public Criteria andNoteCountGreaterThan(Integer value) {
            addCriterion("note_count >", value, "noteCount");
            return (Criteria) this;
        }

        public Criteria andNoteCountGreaterThanOrEqualTo(Integer value) {
            addCriterion("note_count >=", value, "noteCount");
            return (Criteria) this;
        }

        public Criteria andNoteCountLessThan(Integer value) {
            addCriterion("note_count <", value, "noteCount");
            return (Criteria) this;
        }

        public Criteria andNoteCountLessThanOrEqualTo(Integer value) {
            addCriterion("note_count <=", value, "noteCount");
            return (Criteria) this;
        }

        public Criteria andNoteCountIn(List<Integer> values) {
            addCriterion("note_count in", values, "noteCount");
            return (Criteria) this;
        }

        public Criteria andNoteCountNotIn(List<Integer> values) {
            addCriterion("note_count not in", values, "noteCount");
            return (Criteria) this;
        }

        public Criteria andNoteCountBetween(Integer value1, Integer value2) {
            addCriterion("note_count between", value1, value2, "noteCount");
            return (Criteria) this;
        }

        public Criteria andNoteCountNotBetween(Integer value1, Integer value2) {
            addCriterion("note_count not between", value1, value2, "noteCount");
            return (Criteria) this;
        }

        public Criteria andNoteOfferIsNull() {
            addCriterion("note_offer is null");
            return (Criteria) this;
        }

        public Criteria andNoteOfferIsNotNull() {
            addCriterion("note_offer is not null");
            return (Criteria) this;
        }

        public Criteria andNoteOfferEqualTo(Long value) {
            addCriterion("note_offer =", value, "noteOffer");
            return (Criteria) this;
        }

        public Criteria andNoteOfferNotEqualTo(Long value) {
            addCriterion("note_offer <>", value, "noteOffer");
            return (Criteria) this;
        }

        public Criteria andNoteOfferGreaterThan(Long value) {
            addCriterion("note_offer >", value, "noteOffer");
            return (Criteria) this;
        }

        public Criteria andNoteOfferGreaterThanOrEqualTo(Long value) {
            addCriterion("note_offer >=", value, "noteOffer");
            return (Criteria) this;
        }

        public Criteria andNoteOfferLessThan(Long value) {
            addCriterion("note_offer <", value, "noteOffer");
            return (Criteria) this;
        }

        public Criteria andNoteOfferLessThanOrEqualTo(Long value) {
            addCriterion("note_offer <=", value, "noteOffer");
            return (Criteria) this;
        }

        public Criteria andNoteOfferIn(List<Long> values) {
            addCriterion("note_offer in", values, "noteOffer");
            return (Criteria) this;
        }

        public Criteria andNoteOfferNotIn(List<Long> values) {
            addCriterion("note_offer not in", values, "noteOffer");
            return (Criteria) this;
        }

        public Criteria andNoteOfferBetween(Long value1, Long value2) {
            addCriterion("note_offer between", value1, value2, "noteOffer");
            return (Criteria) this;
        }

        public Criteria andNoteOfferNotBetween(Long value1, Long value2) {
            addCriterion("note_offer not between", value1, value2, "noteOffer");
            return (Criteria) this;
        }

        public Criteria andNoteStarttimeIsNull() {
            addCriterion("note_starttime is null");
            return (Criteria) this;
        }

        public Criteria andNoteStarttimeIsNotNull() {
            addCriterion("note_starttime is not null");
            return (Criteria) this;
        }

        public Criteria andNoteStarttimeEqualTo(Date value) {
            addCriterionForJDBCDate("note_starttime =", value, "noteStarttime");
            return (Criteria) this;
        }

        public Criteria andNoteStarttimeNotEqualTo(Date value) {
            addCriterionForJDBCDate("note_starttime <>", value, "noteStarttime");
            return (Criteria) this;
        }

        public Criteria andNoteStarttimeGreaterThan(Date value) {
            addCriterionForJDBCDate("note_starttime >", value, "noteStarttime");
            return (Criteria) this;
        }

        public Criteria andNoteStarttimeGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("note_starttime >=", value, "noteStarttime");
            return (Criteria) this;
        }

        public Criteria andNoteStarttimeLessThan(Date value) {
            addCriterionForJDBCDate("note_starttime <", value, "noteStarttime");
            return (Criteria) this;
        }

        public Criteria andNoteStarttimeLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("note_starttime <=", value, "noteStarttime");
            return (Criteria) this;
        }

        public Criteria andNoteStarttimeIn(List<Date> values) {
            addCriterionForJDBCDate("note_starttime in", values, "noteStarttime");
            return (Criteria) this;
        }

        public Criteria andNoteStarttimeNotIn(List<Date> values) {
            addCriterionForJDBCDate("note_starttime not in", values, "noteStarttime");
            return (Criteria) this;
        }

        public Criteria andNoteStarttimeBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("note_starttime between", value1, value2, "noteStarttime");
            return (Criteria) this;
        }

        public Criteria andNoteStarttimeNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("note_starttime not between", value1, value2, "noteStarttime");
            return (Criteria) this;
        }

        public Criteria andNotePricenumIsNull() {
            addCriterion("note_pricenum is null");
            return (Criteria) this;
        }

        public Criteria andNotePricenumIsNotNull() {
            addCriterion("note_pricenum is not null");
            return (Criteria) this;
        }

        public Criteria andNotePricenumEqualTo(String value) {
            addCriterion("note_pricenum =", value, "notePricenum");
            return (Criteria) this;
        }

        public Criteria andNotePricenumNotEqualTo(String value) {
            addCriterion("note_pricenum <>", value, "notePricenum");
            return (Criteria) this;
        }

        public Criteria andNotePricenumGreaterThan(String value) {
            addCriterion("note_pricenum >", value, "notePricenum");
            return (Criteria) this;
        }

        public Criteria andNotePricenumGreaterThanOrEqualTo(String value) {
            addCriterion("note_pricenum >=", value, "notePricenum");
            return (Criteria) this;
        }

        public Criteria andNotePricenumLessThan(String value) {
            addCriterion("note_pricenum <", value, "notePricenum");
            return (Criteria) this;
        }

        public Criteria andNotePricenumLessThanOrEqualTo(String value) {
            addCriterion("note_pricenum <=", value, "notePricenum");
            return (Criteria) this;
        }

        public Criteria andNotePricenumLike(String value) {
            addCriterion("note_pricenum like", value, "notePricenum");
            return (Criteria) this;
        }

        public Criteria andNotePricenumNotLike(String value) {
            addCriterion("note_pricenum not like", value, "notePricenum");
            return (Criteria) this;
        }

        public Criteria andNotePricenumIn(List<String> values) {
            addCriterion("note_pricenum in", values, "notePricenum");
            return (Criteria) this;
        }

        public Criteria andNotePricenumNotIn(List<String> values) {
            addCriterion("note_pricenum not in", values, "notePricenum");
            return (Criteria) this;
        }

        public Criteria andNotePricenumBetween(String value1, String value2) {
            addCriterion("note_pricenum between", value1, value2, "notePricenum");
            return (Criteria) this;
        }

        public Criteria andNotePricenumNotBetween(String value1, String value2) {
            addCriterion("note_pricenum not between", value1, value2, "notePricenum");
            return (Criteria) this;
        }

        public Criteria andNotePricerateIsNull() {
            addCriterion("note_pricerate is null");
            return (Criteria) this;
        }

        public Criteria andNotePricerateIsNotNull() {
            addCriterion("note_pricerate is not null");
            return (Criteria) this;
        }

        public Criteria andNotePricerateEqualTo(String value) {
            addCriterion("note_pricerate =", value, "notePricerate");
            return (Criteria) this;
        }

        public Criteria andNotePricerateNotEqualTo(String value) {
            addCriterion("note_pricerate <>", value, "notePricerate");
            return (Criteria) this;
        }

        public Criteria andNotePricerateGreaterThan(String value) {
            addCriterion("note_pricerate >", value, "notePricerate");
            return (Criteria) this;
        }

        public Criteria andNotePricerateGreaterThanOrEqualTo(String value) {
            addCriterion("note_pricerate >=", value, "notePricerate");
            return (Criteria) this;
        }

        public Criteria andNotePricerateLessThan(String value) {
            addCriterion("note_pricerate <", value, "notePricerate");
            return (Criteria) this;
        }

        public Criteria andNotePricerateLessThanOrEqualTo(String value) {
            addCriterion("note_pricerate <=", value, "notePricerate");
            return (Criteria) this;
        }

        public Criteria andNotePricerateLike(String value) {
            addCriterion("note_pricerate like", value, "notePricerate");
            return (Criteria) this;
        }

        public Criteria andNotePricerateNotLike(String value) {
            addCriterion("note_pricerate not like", value, "notePricerate");
            return (Criteria) this;
        }

        public Criteria andNotePricerateIn(List<String> values) {
            addCriterion("note_pricerate in", values, "notePricerate");
            return (Criteria) this;
        }

        public Criteria andNotePricerateNotIn(List<String> values) {
            addCriterion("note_pricerate not in", values, "notePricerate");
            return (Criteria) this;
        }

        public Criteria andNotePricerateBetween(String value1, String value2) {
            addCriterion("note_pricerate between", value1, value2, "notePricerate");
            return (Criteria) this;
        }

        public Criteria andNotePricerateNotBetween(String value1, String value2) {
            addCriterion("note_pricerate not between", value1, value2, "notePricerate");
            return (Criteria) this;
        }

        public Criteria andNoteTotalpriceIsNull() {
            addCriterion("note_totalprice is null");
            return (Criteria) this;
        }

        public Criteria andNoteTotalpriceIsNotNull() {
            addCriterion("note_totalprice is not null");
            return (Criteria) this;
        }

        public Criteria andNoteTotalpriceEqualTo(Long value) {
            addCriterion("note_totalprice =", value, "noteTotalprice");
            return (Criteria) this;
        }

        public Criteria andNoteTotalpriceNotEqualTo(Long value) {
            addCriterion("note_totalprice <>", value, "noteTotalprice");
            return (Criteria) this;
        }

        public Criteria andNoteTotalpriceGreaterThan(Long value) {
            addCriterion("note_totalprice >", value, "noteTotalprice");
            return (Criteria) this;
        }

        public Criteria andNoteTotalpriceGreaterThanOrEqualTo(Long value) {
            addCriterion("note_totalprice >=", value, "noteTotalprice");
            return (Criteria) this;
        }

        public Criteria andNoteTotalpriceLessThan(Long value) {
            addCriterion("note_totalprice <", value, "noteTotalprice");
            return (Criteria) this;
        }

        public Criteria andNoteTotalpriceLessThanOrEqualTo(Long value) {
            addCriterion("note_totalprice <=", value, "noteTotalprice");
            return (Criteria) this;
        }

        public Criteria andNoteTotalpriceIn(List<Long> values) {
            addCriterion("note_totalprice in", values, "noteTotalprice");
            return (Criteria) this;
        }

        public Criteria andNoteTotalpriceNotIn(List<Long> values) {
            addCriterion("note_totalprice not in", values, "noteTotalprice");
            return (Criteria) this;
        }

        public Criteria andNoteTotalpriceBetween(Long value1, Long value2) {
            addCriterion("note_totalprice between", value1, value2, "noteTotalprice");
            return (Criteria) this;
        }

        public Criteria andNoteTotalpriceNotBetween(Long value1, Long value2) {
            addCriterion("note_totalprice not between", value1, value2, "noteTotalprice");
            return (Criteria) this;
        }

        public Criteria andNoteMakerIsNull() {
            addCriterion("note_maker is null");
            return (Criteria) this;
        }

        public Criteria andNoteMakerIsNotNull() {
            addCriterion("note_maker is not null");
            return (Criteria) this;
        }

        public Criteria andNoteMakerEqualTo(String value) {
            addCriterion("note_maker =", value, "noteMaker");
            return (Criteria) this;
        }

        public Criteria andNoteMakerNotEqualTo(String value) {
            addCriterion("note_maker <>", value, "noteMaker");
            return (Criteria) this;
        }

        public Criteria andNoteMakerGreaterThan(String value) {
            addCriterion("note_maker >", value, "noteMaker");
            return (Criteria) this;
        }

        public Criteria andNoteMakerGreaterThanOrEqualTo(String value) {
            addCriterion("note_maker >=", value, "noteMaker");
            return (Criteria) this;
        }

        public Criteria andNoteMakerLessThan(String value) {
            addCriterion("note_maker <", value, "noteMaker");
            return (Criteria) this;
        }

        public Criteria andNoteMakerLessThanOrEqualTo(String value) {
            addCriterion("note_maker <=", value, "noteMaker");
            return (Criteria) this;
        }

        public Criteria andNoteMakerLike(String value) {
            addCriterion("note_maker like", value, "noteMaker");
            return (Criteria) this;
        }

        public Criteria andNoteMakerNotLike(String value) {
            addCriterion("note_maker not like", value, "noteMaker");
            return (Criteria) this;
        }

        public Criteria andNoteMakerIn(List<String> values) {
            addCriterion("note_maker in", values, "noteMaker");
            return (Criteria) this;
        }

        public Criteria andNoteMakerNotIn(List<String> values) {
            addCriterion("note_maker not in", values, "noteMaker");
            return (Criteria) this;
        }

        public Criteria andNoteMakerBetween(String value1, String value2) {
            addCriterion("note_maker between", value1, value2, "noteMaker");
            return (Criteria) this;
        }

        public Criteria andNoteMakerNotBetween(String value1, String value2) {
            addCriterion("note_maker not between", value1, value2, "noteMaker");
            return (Criteria) this;
        }

        public Criteria andNoteReceiverIsNull() {
            addCriterion("note_receiver is null");
            return (Criteria) this;
        }

        public Criteria andNoteReceiverIsNotNull() {
            addCriterion("note_receiver is not null");
            return (Criteria) this;
        }

        public Criteria andNoteReceiverEqualTo(String value) {
            addCriterion("note_receiver =", value, "noteReceiver");
            return (Criteria) this;
        }

        public Criteria andNoteReceiverNotEqualTo(String value) {
            addCriterion("note_receiver <>", value, "noteReceiver");
            return (Criteria) this;
        }

        public Criteria andNoteReceiverGreaterThan(String value) {
            addCriterion("note_receiver >", value, "noteReceiver");
            return (Criteria) this;
        }

        public Criteria andNoteReceiverGreaterThanOrEqualTo(String value) {
            addCriterion("note_receiver >=", value, "noteReceiver");
            return (Criteria) this;
        }

        public Criteria andNoteReceiverLessThan(String value) {
            addCriterion("note_receiver <", value, "noteReceiver");
            return (Criteria) this;
        }

        public Criteria andNoteReceiverLessThanOrEqualTo(String value) {
            addCriterion("note_receiver <=", value, "noteReceiver");
            return (Criteria) this;
        }

        public Criteria andNoteReceiverLike(String value) {
            addCriterion("note_receiver like", value, "noteReceiver");
            return (Criteria) this;
        }

        public Criteria andNoteReceiverNotLike(String value) {
            addCriterion("note_receiver not like", value, "noteReceiver");
            return (Criteria) this;
        }

        public Criteria andNoteReceiverIn(List<String> values) {
            addCriterion("note_receiver in", values, "noteReceiver");
            return (Criteria) this;
        }

        public Criteria andNoteReceiverNotIn(List<String> values) {
            addCriterion("note_receiver not in", values, "noteReceiver");
            return (Criteria) this;
        }

        public Criteria andNoteReceiverBetween(String value1, String value2) {
            addCriterion("note_receiver between", value1, value2, "noteReceiver");
            return (Criteria) this;
        }

        public Criteria andNoteReceiverNotBetween(String value1, String value2) {
            addCriterion("note_receiver not between", value1, value2, "noteReceiver");
            return (Criteria) this;
        }

        public Criteria andNoteAcceptorIsNull() {
            addCriterion("note_acceptor is null");
            return (Criteria) this;
        }

        public Criteria andNoteAcceptorIsNotNull() {
            addCriterion("note_acceptor is not null");
            return (Criteria) this;
        }

        public Criteria andNoteAcceptorEqualTo(String value) {
            addCriterion("note_acceptor =", value, "noteAcceptor");
            return (Criteria) this;
        }

        public Criteria andNoteAcceptorNotEqualTo(String value) {
            addCriterion("note_acceptor <>", value, "noteAcceptor");
            return (Criteria) this;
        }

        public Criteria andNoteAcceptorGreaterThan(String value) {
            addCriterion("note_acceptor >", value, "noteAcceptor");
            return (Criteria) this;
        }

        public Criteria andNoteAcceptorGreaterThanOrEqualTo(String value) {
            addCriterion("note_acceptor >=", value, "noteAcceptor");
            return (Criteria) this;
        }

        public Criteria andNoteAcceptorLessThan(String value) {
            addCriterion("note_acceptor <", value, "noteAcceptor");
            return (Criteria) this;
        }

        public Criteria andNoteAcceptorLessThanOrEqualTo(String value) {
            addCriterion("note_acceptor <=", value, "noteAcceptor");
            return (Criteria) this;
        }

        public Criteria andNoteAcceptorLike(String value) {
            addCriterion("note_acceptor like", value, "noteAcceptor");
            return (Criteria) this;
        }

        public Criteria andNoteAcceptorNotLike(String value) {
            addCriterion("note_acceptor not like", value, "noteAcceptor");
            return (Criteria) this;
        }

        public Criteria andNoteAcceptorIn(List<String> values) {
            addCriterion("note_acceptor in", values, "noteAcceptor");
            return (Criteria) this;
        }

        public Criteria andNoteAcceptorNotIn(List<String> values) {
            addCriterion("note_acceptor not in", values, "noteAcceptor");
            return (Criteria) this;
        }

        public Criteria andNoteAcceptorBetween(String value1, String value2) {
            addCriterion("note_acceptor between", value1, value2, "noteAcceptor");
            return (Criteria) this;
        }

        public Criteria andNoteAcceptorNotBetween(String value1, String value2) {
            addCriterion("note_acceptor not between", value1, value2, "noteAcceptor");
            return (Criteria) this;
        }

        public Criteria andNoteReviewerIsNull() {
            addCriterion("note_reviewer is null");
            return (Criteria) this;
        }

        public Criteria andNoteReviewerIsNotNull() {
            addCriterion("note_reviewer is not null");
            return (Criteria) this;
        }

        public Criteria andNoteReviewerEqualTo(String value) {
            addCriterion("note_reviewer =", value, "noteReviewer");
            return (Criteria) this;
        }

        public Criteria andNoteReviewerNotEqualTo(String value) {
            addCriterion("note_reviewer <>", value, "noteReviewer");
            return (Criteria) this;
        }

        public Criteria andNoteReviewerGreaterThan(String value) {
            addCriterion("note_reviewer >", value, "noteReviewer");
            return (Criteria) this;
        }

        public Criteria andNoteReviewerGreaterThanOrEqualTo(String value) {
            addCriterion("note_reviewer >=", value, "noteReviewer");
            return (Criteria) this;
        }

        public Criteria andNoteReviewerLessThan(String value) {
            addCriterion("note_reviewer <", value, "noteReviewer");
            return (Criteria) this;
        }

        public Criteria andNoteReviewerLessThanOrEqualTo(String value) {
            addCriterion("note_reviewer <=", value, "noteReviewer");
            return (Criteria) this;
        }

        public Criteria andNoteReviewerLike(String value) {
            addCriterion("note_reviewer like", value, "noteReviewer");
            return (Criteria) this;
        }

        public Criteria andNoteReviewerNotLike(String value) {
            addCriterion("note_reviewer not like", value, "noteReviewer");
            return (Criteria) this;
        }

        public Criteria andNoteReviewerIn(List<String> values) {
            addCriterion("note_reviewer in", values, "noteReviewer");
            return (Criteria) this;
        }

        public Criteria andNoteReviewerNotIn(List<String> values) {
            addCriterion("note_reviewer not in", values, "noteReviewer");
            return (Criteria) this;
        }

        public Criteria andNoteReviewerBetween(String value1, String value2) {
            addCriterion("note_reviewer between", value1, value2, "noteReviewer");
            return (Criteria) this;
        }

        public Criteria andNoteReviewerNotBetween(String value1, String value2) {
            addCriterion("note_reviewer not between", value1, value2, "noteReviewer");
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
            addCriterionForJDBCDate("Createdate =", value, "createdate");
            return (Criteria) this;
        }

        public Criteria andCreatedateNotEqualTo(Date value) {
            addCriterionForJDBCDate("Createdate <>", value, "createdate");
            return (Criteria) this;
        }

        public Criteria andCreatedateGreaterThan(Date value) {
            addCriterionForJDBCDate("Createdate >", value, "createdate");
            return (Criteria) this;
        }

        public Criteria andCreatedateGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("Createdate >=", value, "createdate");
            return (Criteria) this;
        }

        public Criteria andCreatedateLessThan(Date value) {
            addCriterionForJDBCDate("Createdate <", value, "createdate");
            return (Criteria) this;
        }

        public Criteria andCreatedateLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("Createdate <=", value, "createdate");
            return (Criteria) this;
        }

        public Criteria andCreatedateIn(List<Date> values) {
            addCriterionForJDBCDate("Createdate in", values, "createdate");
            return (Criteria) this;
        }

        public Criteria andCreatedateNotIn(List<Date> values) {
            addCriterionForJDBCDate("Createdate not in", values, "createdate");
            return (Criteria) this;
        }

        public Criteria andCreatedateBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("Createdate between", value1, value2, "createdate");
            return (Criteria) this;
        }

        public Criteria andCreatedateNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("Createdate not between", value1, value2, "createdate");
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
            addCriterionForJDBCDate("ModifyDate =", value, "modifydate");
            return (Criteria) this;
        }

        public Criteria andModifydateNotEqualTo(Date value) {
            addCriterionForJDBCDate("ModifyDate <>", value, "modifydate");
            return (Criteria) this;
        }

        public Criteria andModifydateGreaterThan(Date value) {
            addCriterionForJDBCDate("ModifyDate >", value, "modifydate");
            return (Criteria) this;
        }

        public Criteria andModifydateGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("ModifyDate >=", value, "modifydate");
            return (Criteria) this;
        }

        public Criteria andModifydateLessThan(Date value) {
            addCriterionForJDBCDate("ModifyDate <", value, "modifydate");
            return (Criteria) this;
        }

        public Criteria andModifydateLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("ModifyDate <=", value, "modifydate");
            return (Criteria) this;
        }

        public Criteria andModifydateIn(List<Date> values) {
            addCriterionForJDBCDate("ModifyDate in", values, "modifydate");
            return (Criteria) this;
        }

        public Criteria andModifydateNotIn(List<Date> values) {
            addCriterionForJDBCDate("ModifyDate not in", values, "modifydate");
            return (Criteria) this;
        }

        public Criteria andModifydateBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("ModifyDate between", value1, value2, "modifydate");
            return (Criteria) this;
        }

        public Criteria andModifydateNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("ModifyDate not between", value1, value2, "modifydate");
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