package com.xj.domain.trainsplan;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class PAddnewdayQuery {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Integer pageNo = 1;

    protected Integer startRow;

    protected Integer pageSize = 10;

    protected String fields;

    public PAddnewdayQuery() {
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

        public Criteria andAnIdIsNull() {
            addCriterion("an_id is null");
            return (Criteria) this;
        }

        public Criteria andAnIdIsNotNull() {
            addCriterion("an_id is not null");
            return (Criteria) this;
        }

        public Criteria andAnIdEqualTo(String value) {
            addCriterion("an_id =", value, "anId");
            return (Criteria) this;
        }

        public Criteria andAnIdNotEqualTo(String value) {
            addCriterion("an_id <>", value, "anId");
            return (Criteria) this;
        }

        public Criteria andAnIdGreaterThan(String value) {
            addCriterion("an_id >", value, "anId");
            return (Criteria) this;
        }

        public Criteria andAnIdGreaterThanOrEqualTo(String value) {
            addCriterion("an_id >=", value, "anId");
            return (Criteria) this;
        }

        public Criteria andAnIdLessThan(String value) {
            addCriterion("an_id <", value, "anId");
            return (Criteria) this;
        }

        public Criteria andAnIdLessThanOrEqualTo(String value) {
            addCriterion("an_id <=", value, "anId");
            return (Criteria) this;
        }

        public Criteria andAnIdLike(String value) {
            addCriterion("an_id like", value, "anId");
            return (Criteria) this;
        }

        public Criteria andAnIdNotLike(String value) {
            addCriterion("an_id not like", value, "anId");
            return (Criteria) this;
        }

        public Criteria andAnIdIn(List<String> values) {
            addCriterion("an_id in", values, "anId");
            return (Criteria) this;
        }

        public Criteria andAnIdNotIn(List<String> values) {
            addCriterion("an_id not in", values, "anId");
            return (Criteria) this;
        }

        public Criteria andAnIdBetween(String value1, String value2) {
            addCriterion("an_id between", value1, value2, "anId");
            return (Criteria) this;
        }

        public Criteria andAnIdNotBetween(String value1, String value2) {
            addCriterion("an_id not between", value1, value2, "anId");
            return (Criteria) this;
        }

        public Criteria andAnStartIsNull() {
            addCriterion("an_start is null");
            return (Criteria) this;
        }

        public Criteria andAnStartIsNotNull() {
            addCriterion("an_start is not null");
            return (Criteria) this;
        }

        public Criteria andAnStartEqualTo(String value) {
            addCriterion("an_start =", value, "anStart");
            return (Criteria) this;
        }

        public Criteria andAnStartNotEqualTo(String value) {
            addCriterion("an_start <>", value, "anStart");
            return (Criteria) this;
        }

        public Criteria andAnStartGreaterThan(String value) {
            addCriterion("an_start >", value, "anStart");
            return (Criteria) this;
        }

        public Criteria andAnStartGreaterThanOrEqualTo(String value) {
            addCriterion("an_start >=", value, "anStart");
            return (Criteria) this;
        }

        public Criteria andAnStartLessThan(String value) {
            addCriterion("an_start <", value, "anStart");
            return (Criteria) this;
        }

        public Criteria andAnStartLessThanOrEqualTo(String value) {
            addCriterion("an_start <=", value, "anStart");
            return (Criteria) this;
        }

        public Criteria andAnStartLike(String value) {
            addCriterion("an_start like", value, "anStart");
            return (Criteria) this;
        }

        public Criteria andAnStartNotLike(String value) {
            addCriterion("an_start not like", value, "anStart");
            return (Criteria) this;
        }

        public Criteria andAnStartIn(List<String> values) {
            addCriterion("an_start in", values, "anStart");
            return (Criteria) this;
        }

        public Criteria andAnStartNotIn(List<String> values) {
            addCriterion("an_start not in", values, "anStart");
            return (Criteria) this;
        }

        public Criteria andAnStartBetween(String value1, String value2) {
            addCriterion("an_start between", value1, value2, "anStart");
            return (Criteria) this;
        }

        public Criteria andAnStartNotBetween(String value1, String value2) {
            addCriterion("an_start not between", value1, value2, "anStart");
            return (Criteria) this;
        }

        public Criteria andAnEndIsNull() {
            addCriterion("an_end is null");
            return (Criteria) this;
        }

        public Criteria andAnEndIsNotNull() {
            addCriterion("an_end is not null");
            return (Criteria) this;
        }

        public Criteria andAnEndEqualTo(String value) {
            addCriterion("an_end =", value, "anEnd");
            return (Criteria) this;
        }

        public Criteria andAnEndNotEqualTo(String value) {
            addCriterion("an_end <>", value, "anEnd");
            return (Criteria) this;
        }

        public Criteria andAnEndGreaterThan(String value) {
            addCriterion("an_end >", value, "anEnd");
            return (Criteria) this;
        }

        public Criteria andAnEndGreaterThanOrEqualTo(String value) {
            addCriterion("an_end >=", value, "anEnd");
            return (Criteria) this;
        }

        public Criteria andAnEndLessThan(String value) {
            addCriterion("an_end <", value, "anEnd");
            return (Criteria) this;
        }

        public Criteria andAnEndLessThanOrEqualTo(String value) {
            addCriterion("an_end <=", value, "anEnd");
            return (Criteria) this;
        }

        public Criteria andAnEndLike(String value) {
            addCriterion("an_end like", value, "anEnd");
            return (Criteria) this;
        }

        public Criteria andAnEndNotLike(String value) {
            addCriterion("an_end not like", value, "anEnd");
            return (Criteria) this;
        }

        public Criteria andAnEndIn(List<String> values) {
            addCriterion("an_end in", values, "anEnd");
            return (Criteria) this;
        }

        public Criteria andAnEndNotIn(List<String> values) {
            addCriterion("an_end not in", values, "anEnd");
            return (Criteria) this;
        }

        public Criteria andAnEndBetween(String value1, String value2) {
            addCriterion("an_end between", value1, value2, "anEnd");
            return (Criteria) this;
        }

        public Criteria andAnEndNotBetween(String value1, String value2) {
            addCriterion("an_end not between", value1, value2, "anEnd");
            return (Criteria) this;
        }

        public Criteria andAnBatchIsNull() {
            addCriterion("an_batch is null");
            return (Criteria) this;
        }

        public Criteria andAnBatchIsNotNull() {
            addCriterion("an_batch is not null");
            return (Criteria) this;
        }

        public Criteria andAnBatchEqualTo(String value) {
            addCriterion("an_batch =", value, "anBatch");
            return (Criteria) this;
        }

        public Criteria andAnBatchNotEqualTo(String value) {
            addCriterion("an_batch <>", value, "anBatch");
            return (Criteria) this;
        }

        public Criteria andAnBatchGreaterThan(String value) {
            addCriterion("an_batch >", value, "anBatch");
            return (Criteria) this;
        }

        public Criteria andAnBatchGreaterThanOrEqualTo(String value) {
            addCriterion("an_batch >=", value, "anBatch");
            return (Criteria) this;
        }

        public Criteria andAnBatchLessThan(String value) {
            addCriterion("an_batch <", value, "anBatch");
            return (Criteria) this;
        }

        public Criteria andAnBatchLessThanOrEqualTo(String value) {
            addCriterion("an_batch <=", value, "anBatch");
            return (Criteria) this;
        }

        public Criteria andAnBatchLike(String value) {
            addCriterion("an_batch like", value, "anBatch");
            return (Criteria) this;
        }

        public Criteria andAnBatchNotLike(String value) {
            addCriterion("an_batch not like", value, "anBatch");
            return (Criteria) this;
        }

        public Criteria andAnBatchIn(List<String> values) {
            addCriterion("an_batch in", values, "anBatch");
            return (Criteria) this;
        }

        public Criteria andAnBatchNotIn(List<String> values) {
            addCriterion("an_batch not in", values, "anBatch");
            return (Criteria) this;
        }

        public Criteria andAnBatchBetween(String value1, String value2) {
            addCriterion("an_batch between", value1, value2, "anBatch");
            return (Criteria) this;
        }

        public Criteria andAnBatchNotBetween(String value1, String value2) {
            addCriterion("an_batch not between", value1, value2, "anBatch");
            return (Criteria) this;
        }

        public Criteria andAnSourceIsNull() {
            addCriterion("an_source is null");
            return (Criteria) this;
        }

        public Criteria andAnSourceIsNotNull() {
            addCriterion("an_source is not null");
            return (Criteria) this;
        }

        public Criteria andAnSourceEqualTo(String value) {
            addCriterion("an_source =", value, "anSource");
            return (Criteria) this;
        }

        public Criteria andAnSourceNotEqualTo(String value) {
            addCriterion("an_source <>", value, "anSource");
            return (Criteria) this;
        }

        public Criteria andAnSourceGreaterThan(String value) {
            addCriterion("an_source >", value, "anSource");
            return (Criteria) this;
        }

        public Criteria andAnSourceGreaterThanOrEqualTo(String value) {
            addCriterion("an_source >=", value, "anSource");
            return (Criteria) this;
        }

        public Criteria andAnSourceLessThan(String value) {
            addCriterion("an_source <", value, "anSource");
            return (Criteria) this;
        }

        public Criteria andAnSourceLessThanOrEqualTo(String value) {
            addCriterion("an_source <=", value, "anSource");
            return (Criteria) this;
        }

        public Criteria andAnSourceLike(String value) {
            addCriterion("an_source like", value, "anSource");
            return (Criteria) this;
        }

        public Criteria andAnSourceNotLike(String value) {
            addCriterion("an_source not like", value, "anSource");
            return (Criteria) this;
        }

        public Criteria andAnSourceIn(List<String> values) {
            addCriterion("an_source in", values, "anSource");
            return (Criteria) this;
        }

        public Criteria andAnSourceNotIn(List<String> values) {
            addCriterion("an_source not in", values, "anSource");
            return (Criteria) this;
        }

        public Criteria andAnSourceBetween(String value1, String value2) {
            addCriterion("an_source between", value1, value2, "anSource");
            return (Criteria) this;
        }

        public Criteria andAnSourceNotBetween(String value1, String value2) {
            addCriterion("an_source not between", value1, value2, "anSource");
            return (Criteria) this;
        }

        public Criteria andAnTrainIsNull() {
            addCriterion("an_train is null");
            return (Criteria) this;
        }

        public Criteria andAnTrainIsNotNull() {
            addCriterion("an_train is not null");
            return (Criteria) this;
        }

        public Criteria andAnTrainEqualTo(Integer value) {
            addCriterion("an_train =", value, "anTrain");
            return (Criteria) this;
        }

        public Criteria andAnTrainNotEqualTo(Integer value) {
            addCriterion("an_train <>", value, "anTrain");
            return (Criteria) this;
        }

        public Criteria andAnTrainGreaterThan(Integer value) {
            addCriterion("an_train >", value, "anTrain");
            return (Criteria) this;
        }

        public Criteria andAnTrainGreaterThanOrEqualTo(Integer value) {
            addCriterion("an_train >=", value, "anTrain");
            return (Criteria) this;
        }

        public Criteria andAnTrainLessThan(Integer value) {
            addCriterion("an_train <", value, "anTrain");
            return (Criteria) this;
        }

        public Criteria andAnTrainLessThanOrEqualTo(Integer value) {
            addCriterion("an_train <=", value, "anTrain");
            return (Criteria) this;
        }

        public Criteria andAnTrainIn(List<Integer> values) {
            addCriterion("an_train in", values, "anTrain");
            return (Criteria) this;
        }

        public Criteria andAnTrainNotIn(List<Integer> values) {
            addCriterion("an_train not in", values, "anTrain");
            return (Criteria) this;
        }

        public Criteria andAnTrainBetween(Integer value1, Integer value2) {
            addCriterion("an_train between", value1, value2, "anTrain");
            return (Criteria) this;
        }

        public Criteria andAnTrainNotBetween(Integer value1, Integer value2) {
            addCriterion("an_train not between", value1, value2, "anTrain");
            return (Criteria) this;
        }

        public Criteria andAnRtrainIsNull() {
            addCriterion("an_rtrain is null");
            return (Criteria) this;
        }

        public Criteria andAnRtrainIsNotNull() {
            addCriterion("an_rtrain is not null");
            return (Criteria) this;
        }

        public Criteria andAnRtrainEqualTo(Integer value) {
            addCriterion("an_rtrain =", value, "anRtrain");
            return (Criteria) this;
        }

        public Criteria andAnRtrainNotEqualTo(Integer value) {
            addCriterion("an_rtrain <>", value, "anRtrain");
            return (Criteria) this;
        }

        public Criteria andAnRtrainGreaterThan(Integer value) {
            addCriterion("an_rtrain >", value, "anRtrain");
            return (Criteria) this;
        }

        public Criteria andAnRtrainGreaterThanOrEqualTo(Integer value) {
            addCriterion("an_rtrain >=", value, "anRtrain");
            return (Criteria) this;
        }

        public Criteria andAnRtrainLessThan(Integer value) {
            addCriterion("an_rtrain <", value, "anRtrain");
            return (Criteria) this;
        }

        public Criteria andAnRtrainLessThanOrEqualTo(Integer value) {
            addCriterion("an_rtrain <=", value, "anRtrain");
            return (Criteria) this;
        }

        public Criteria andAnRtrainIn(List<Integer> values) {
            addCriterion("an_rtrain in", values, "anRtrain");
            return (Criteria) this;
        }

        public Criteria andAnRtrainNotIn(List<Integer> values) {
            addCriterion("an_rtrain not in", values, "anRtrain");
            return (Criteria) this;
        }

        public Criteria andAnRtrainBetween(Integer value1, Integer value2) {
            addCriterion("an_rtrain between", value1, value2, "anRtrain");
            return (Criteria) this;
        }

        public Criteria andAnRtrainNotBetween(Integer value1, Integer value2) {
            addCriterion("an_rtrain not between", value1, value2, "anRtrain");
            return (Criteria) this;
        }

        public Criteria andAnRnumberIsNull() {
            addCriterion("an_rnumber is null");
            return (Criteria) this;
        }

        public Criteria andAnRnumberIsNotNull() {
            addCriterion("an_rnumber is not null");
            return (Criteria) this;
        }

        public Criteria andAnRnumberEqualTo(Integer value) {
            addCriterion("an_rnumber =", value, "anRnumber");
            return (Criteria) this;
        }

        public Criteria andAnRnumberNotEqualTo(Integer value) {
            addCriterion("an_rnumber <>", value, "anRnumber");
            return (Criteria) this;
        }

        public Criteria andAnRnumberGreaterThan(Integer value) {
            addCriterion("an_rnumber >", value, "anRnumber");
            return (Criteria) this;
        }

        public Criteria andAnRnumberGreaterThanOrEqualTo(Integer value) {
            addCriterion("an_rnumber >=", value, "anRnumber");
            return (Criteria) this;
        }

        public Criteria andAnRnumberLessThan(Integer value) {
            addCriterion("an_rnumber <", value, "anRnumber");
            return (Criteria) this;
        }

        public Criteria andAnRnumberLessThanOrEqualTo(Integer value) {
            addCriterion("an_rnumber <=", value, "anRnumber");
            return (Criteria) this;
        }

        public Criteria andAnRnumberIn(List<Integer> values) {
            addCriterion("an_rnumber in", values, "anRnumber");
            return (Criteria) this;
        }

        public Criteria andAnRnumberNotIn(List<Integer> values) {
            addCriterion("an_rnumber not in", values, "anRnumber");
            return (Criteria) this;
        }

        public Criteria andAnRnumberBetween(Integer value1, Integer value2) {
            addCriterion("an_rnumber between", value1, value2, "anRnumber");
            return (Criteria) this;
        }

        public Criteria andAnRnumberNotBetween(Integer value1, Integer value2) {
            addCriterion("an_rnumber not between", value1, value2, "anRnumber");
            return (Criteria) this;
        }

        public Criteria andAnAllotIsNull() {
            addCriterion("an_allot is null");
            return (Criteria) this;
        }

        public Criteria andAnAllotIsNotNull() {
            addCriterion("an_allot is not null");
            return (Criteria) this;
        }

        public Criteria andAnAllotEqualTo(Integer value) {
            addCriterion("an_allot =", value, "anAllot");
            return (Criteria) this;
        }

        public Criteria andAnAllotNotEqualTo(Integer value) {
            addCriterion("an_allot <>", value, "anAllot");
            return (Criteria) this;
        }

        public Criteria andAnAllotGreaterThan(Integer value) {
            addCriterion("an_allot >", value, "anAllot");
            return (Criteria) this;
        }

        public Criteria andAnAllotGreaterThanOrEqualTo(Integer value) {
            addCriterion("an_allot >=", value, "anAllot");
            return (Criteria) this;
        }

        public Criteria andAnAllotLessThan(Integer value) {
            addCriterion("an_allot <", value, "anAllot");
            return (Criteria) this;
        }

        public Criteria andAnAllotLessThanOrEqualTo(Integer value) {
            addCriterion("an_allot <=", value, "anAllot");
            return (Criteria) this;
        }

        public Criteria andAnAllotIn(List<Integer> values) {
            addCriterion("an_allot in", values, "anAllot");
            return (Criteria) this;
        }

        public Criteria andAnAllotNotIn(List<Integer> values) {
            addCriterion("an_allot not in", values, "anAllot");
            return (Criteria) this;
        }

        public Criteria andAnAllotBetween(Integer value1, Integer value2) {
            addCriterion("an_allot between", value1, value2, "anAllot");
            return (Criteria) this;
        }

        public Criteria andAnAllotNotBetween(Integer value1, Integer value2) {
            addCriterion("an_allot not between", value1, value2, "anAllot");
            return (Criteria) this;
        }

        public Criteria andAnWaitIsNull() {
            addCriterion("an_wait is null");
            return (Criteria) this;
        }

        public Criteria andAnWaitIsNotNull() {
            addCriterion("an_wait is not null");
            return (Criteria) this;
        }

        public Criteria andAnWaitEqualTo(Integer value) {
            addCriterion("an_wait =", value, "anWait");
            return (Criteria) this;
        }

        public Criteria andAnWaitNotEqualTo(Integer value) {
            addCriterion("an_wait <>", value, "anWait");
            return (Criteria) this;
        }

        public Criteria andAnWaitGreaterThan(Integer value) {
            addCriterion("an_wait >", value, "anWait");
            return (Criteria) this;
        }

        public Criteria andAnWaitGreaterThanOrEqualTo(Integer value) {
            addCriterion("an_wait >=", value, "anWait");
            return (Criteria) this;
        }

        public Criteria andAnWaitLessThan(Integer value) {
            addCriterion("an_wait <", value, "anWait");
            return (Criteria) this;
        }

        public Criteria andAnWaitLessThanOrEqualTo(Integer value) {
            addCriterion("an_wait <=", value, "anWait");
            return (Criteria) this;
        }

        public Criteria andAnWaitIn(List<Integer> values) {
            addCriterion("an_wait in", values, "anWait");
            return (Criteria) this;
        }

        public Criteria andAnWaitNotIn(List<Integer> values) {
            addCriterion("an_wait not in", values, "anWait");
            return (Criteria) this;
        }

        public Criteria andAnWaitBetween(Integer value1, Integer value2) {
            addCriterion("an_wait between", value1, value2, "anWait");
            return (Criteria) this;
        }

        public Criteria andAnWaitNotBetween(Integer value1, Integer value2) {
            addCriterion("an_wait not between", value1, value2, "anWait");
            return (Criteria) this;
        }

        public Criteria andAnWeightIsNull() {
            addCriterion("an_weight is null");
            return (Criteria) this;
        }

        public Criteria andAnWeightIsNotNull() {
            addCriterion("an_weight is not null");
            return (Criteria) this;
        }

        public Criteria andAnWeightEqualTo(Long value) {
            addCriterion("an_weight =", value, "anWeight");
            return (Criteria) this;
        }

        public Criteria andAnWeightNotEqualTo(Long value) {
            addCriterion("an_weight <>", value, "anWeight");
            return (Criteria) this;
        }

        public Criteria andAnWeightGreaterThan(Long value) {
            addCriterion("an_weight >", value, "anWeight");
            return (Criteria) this;
        }

        public Criteria andAnWeightGreaterThanOrEqualTo(Long value) {
            addCriterion("an_weight >=", value, "anWeight");
            return (Criteria) this;
        }

        public Criteria andAnWeightLessThan(Long value) {
            addCriterion("an_weight <", value, "anWeight");
            return (Criteria) this;
        }

        public Criteria andAnWeightLessThanOrEqualTo(Long value) {
            addCriterion("an_weight <=", value, "anWeight");
            return (Criteria) this;
        }

        public Criteria andAnWeightIn(List<Long> values) {
            addCriterion("an_weight in", values, "anWeight");
            return (Criteria) this;
        }

        public Criteria andAnWeightNotIn(List<Long> values) {
            addCriterion("an_weight not in", values, "anWeight");
            return (Criteria) this;
        }

        public Criteria andAnWeightBetween(Long value1, Long value2) {
            addCriterion("an_weight between", value1, value2, "anWeight");
            return (Criteria) this;
        }

        public Criteria andAnWeightNotBetween(Long value1, Long value2) {
            addCriterion("an_weight not between", value1, value2, "anWeight");
            return (Criteria) this;
        }

        public Criteria andAnQualityIsNull() {
            addCriterion("an_quality is null");
            return (Criteria) this;
        }

        public Criteria andAnQualityIsNotNull() {
            addCriterion("an_quality is not null");
            return (Criteria) this;
        }

        public Criteria andAnQualityEqualTo(Integer value) {
            addCriterion("an_quality =", value, "anQuality");
            return (Criteria) this;
        }

        public Criteria andAnQualityNotEqualTo(Integer value) {
            addCriterion("an_quality <>", value, "anQuality");
            return (Criteria) this;
        }

        public Criteria andAnQualityGreaterThan(Integer value) {
            addCriterion("an_quality >", value, "anQuality");
            return (Criteria) this;
        }

        public Criteria andAnQualityGreaterThanOrEqualTo(Integer value) {
            addCriterion("an_quality >=", value, "anQuality");
            return (Criteria) this;
        }

        public Criteria andAnQualityLessThan(Integer value) {
            addCriterion("an_quality <", value, "anQuality");
            return (Criteria) this;
        }

        public Criteria andAnQualityLessThanOrEqualTo(Integer value) {
            addCriterion("an_quality <=", value, "anQuality");
            return (Criteria) this;
        }

        public Criteria andAnQualityIn(List<Integer> values) {
            addCriterion("an_quality in", values, "anQuality");
            return (Criteria) this;
        }

        public Criteria andAnQualityNotIn(List<Integer> values) {
            addCriterion("an_quality not in", values, "anQuality");
            return (Criteria) this;
        }

        public Criteria andAnQualityBetween(Integer value1, Integer value2) {
            addCriterion("an_quality between", value1, value2, "anQuality");
            return (Criteria) this;
        }

        public Criteria andAnQualityNotBetween(Integer value1, Integer value2) {
            addCriterion("an_quality not between", value1, value2, "anQuality");
            return (Criteria) this;
        }

        public Criteria andAnPaycompanyIsNull() {
            addCriterion("an_paycompany is null");
            return (Criteria) this;
        }

        public Criteria andAnPaycompanyIsNotNull() {
            addCriterion("an_paycompany is not null");
            return (Criteria) this;
        }

        public Criteria andAnPaycompanyEqualTo(String value) {
            addCriterion("an_paycompany =", value, "anPaycompany");
            return (Criteria) this;
        }

        public Criteria andAnPaycompanyNotEqualTo(String value) {
            addCriterion("an_paycompany <>", value, "anPaycompany");
            return (Criteria) this;
        }

        public Criteria andAnPaycompanyGreaterThan(String value) {
            addCriterion("an_paycompany >", value, "anPaycompany");
            return (Criteria) this;
        }

        public Criteria andAnPaycompanyGreaterThanOrEqualTo(String value) {
            addCriterion("an_paycompany >=", value, "anPaycompany");
            return (Criteria) this;
        }

        public Criteria andAnPaycompanyLessThan(String value) {
            addCriterion("an_paycompany <", value, "anPaycompany");
            return (Criteria) this;
        }

        public Criteria andAnPaycompanyLessThanOrEqualTo(String value) {
            addCriterion("an_paycompany <=", value, "anPaycompany");
            return (Criteria) this;
        }

        public Criteria andAnPaycompanyLike(String value) {
            addCriterion("an_paycompany like", value, "anPaycompany");
            return (Criteria) this;
        }

        public Criteria andAnPaycompanyNotLike(String value) {
            addCriterion("an_paycompany not like", value, "anPaycompany");
            return (Criteria) this;
        }

        public Criteria andAnPaycompanyIn(List<String> values) {
            addCriterion("an_paycompany in", values, "anPaycompany");
            return (Criteria) this;
        }

        public Criteria andAnPaycompanyNotIn(List<String> values) {
            addCriterion("an_paycompany not in", values, "anPaycompany");
            return (Criteria) this;
        }

        public Criteria andAnPaycompanyBetween(String value1, String value2) {
            addCriterion("an_paycompany between", value1, value2, "anPaycompany");
            return (Criteria) this;
        }

        public Criteria andAnPaycompanyNotBetween(String value1, String value2) {
            addCriterion("an_paycompany not between", value1, value2, "anPaycompany");
            return (Criteria) this;
        }

        public Criteria andAnTakecompanyIsNull() {
            addCriterion("an_takecompany is null");
            return (Criteria) this;
        }

        public Criteria andAnTakecompanyIsNotNull() {
            addCriterion("an_takecompany is not null");
            return (Criteria) this;
        }

        public Criteria andAnTakecompanyEqualTo(String value) {
            addCriterion("an_takecompany =", value, "anTakecompany");
            return (Criteria) this;
        }

        public Criteria andAnTakecompanyNotEqualTo(String value) {
            addCriterion("an_takecompany <>", value, "anTakecompany");
            return (Criteria) this;
        }

        public Criteria andAnTakecompanyGreaterThan(String value) {
            addCriterion("an_takecompany >", value, "anTakecompany");
            return (Criteria) this;
        }

        public Criteria andAnTakecompanyGreaterThanOrEqualTo(String value) {
            addCriterion("an_takecompany >=", value, "anTakecompany");
            return (Criteria) this;
        }

        public Criteria andAnTakecompanyLessThan(String value) {
            addCriterion("an_takecompany <", value, "anTakecompany");
            return (Criteria) this;
        }

        public Criteria andAnTakecompanyLessThanOrEqualTo(String value) {
            addCriterion("an_takecompany <=", value, "anTakecompany");
            return (Criteria) this;
        }

        public Criteria andAnTakecompanyLike(String value) {
            addCriterion("an_takecompany like", value, "anTakecompany");
            return (Criteria) this;
        }

        public Criteria andAnTakecompanyNotLike(String value) {
            addCriterion("an_takecompany not like", value, "anTakecompany");
            return (Criteria) this;
        }

        public Criteria andAnTakecompanyIn(List<String> values) {
            addCriterion("an_takecompany in", values, "anTakecompany");
            return (Criteria) this;
        }

        public Criteria andAnTakecompanyNotIn(List<String> values) {
            addCriterion("an_takecompany not in", values, "anTakecompany");
            return (Criteria) this;
        }

        public Criteria andAnTakecompanyBetween(String value1, String value2) {
            addCriterion("an_takecompany between", value1, value2, "anTakecompany");
            return (Criteria) this;
        }

        public Criteria andAnTakecompanyNotBetween(String value1, String value2) {
            addCriterion("an_takecompany not between", value1, value2, "anTakecompany");
            return (Criteria) this;
        }

        public Criteria andAnDayidIsNull() {
            addCriterion("an_dayid is null");
            return (Criteria) this;
        }

        public Criteria andAnDayidIsNotNull() {
            addCriterion("an_dayid is not null");
            return (Criteria) this;
        }

        public Criteria andAnDayidEqualTo(String value) {
            addCriterion("an_dayid =", value, "anDayid");
            return (Criteria) this;
        }

        public Criteria andAnDayidNotEqualTo(String value) {
            addCriterion("an_dayid <>", value, "anDayid");
            return (Criteria) this;
        }

        public Criteria andAnDayidGreaterThan(String value) {
            addCriterion("an_dayid >", value, "anDayid");
            return (Criteria) this;
        }

        public Criteria andAnDayidGreaterThanOrEqualTo(String value) {
            addCriterion("an_dayid >=", value, "anDayid");
            return (Criteria) this;
        }

        public Criteria andAnDayidLessThan(String value) {
            addCriterion("an_dayid <", value, "anDayid");
            return (Criteria) this;
        }

        public Criteria andAnDayidLessThanOrEqualTo(String value) {
            addCriterion("an_dayid <=", value, "anDayid");
            return (Criteria) this;
        }

        public Criteria andAnDayidLike(String value) {
            addCriterion("an_dayid like", value, "anDayid");
            return (Criteria) this;
        }

        public Criteria andAnDayidNotLike(String value) {
            addCriterion("an_dayid not like", value, "anDayid");
            return (Criteria) this;
        }

        public Criteria andAnDayidIn(List<String> values) {
            addCriterion("an_dayid in", values, "anDayid");
            return (Criteria) this;
        }

        public Criteria andAnDayidNotIn(List<String> values) {
            addCriterion("an_dayid not in", values, "anDayid");
            return (Criteria) this;
        }

        public Criteria andAnDayidBetween(String value1, String value2) {
            addCriterion("an_dayid between", value1, value2, "anDayid");
            return (Criteria) this;
        }

        public Criteria andAnDayidNotBetween(String value1, String value2) {
            addCriterion("an_dayid not between", value1, value2, "anDayid");
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