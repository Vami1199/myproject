package com.xj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.xj.domain.plan.PlanMonthdetail;
import com.xj.domain.plan.PlanMonthdetailQuery;

public interface PlanMonthdetailDao {
    int countByExample(PlanMonthdetailQuery example);

    int deleteByExample(PlanMonthdetailQuery example);

    int deleteByPrimaryKey(String mdId);

    int insert(PlanMonthdetail record);

    int insertSelective(PlanMonthdetail record);

    List<PlanMonthdetail> selectByExampleWithBLOBs(PlanMonthdetailQuery example);

    List<PlanMonthdetail> selectByExample(PlanMonthdetailQuery example);

    PlanMonthdetail selectByPrimaryKey(String mdId);

    int updateByExampleSelective(@Param("record") PlanMonthdetail record, @Param("example") PlanMonthdetailQuery example);

    int updateByExampleWithBLOBs(@Param("record") PlanMonthdetail record, @Param("example") PlanMonthdetailQuery example);

    int updateByExample(@Param("record") PlanMonthdetail record, @Param("example") PlanMonthdetailQuery example);

    int updateByPrimaryKeySelective(PlanMonthdetail record);

    int updateByPrimaryKeyWithBLOBs(PlanMonthdetail record);

    int updateByPrimaryKey(PlanMonthdetail record);
}