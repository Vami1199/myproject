package com.xj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.xj.domain.plan.PlanMonth;
import com.xj.domain.plan.PlanMonthQuery;

public interface PlanMonthDao {
    int countByExample(PlanMonthQuery example);

    int deleteByExample(PlanMonthQuery example);

    int deleteByPrimaryKey(String mId);

    int insert(PlanMonth record);

    int insertSelective(PlanMonth record);

    List<PlanMonth> selectByExampleWithBLOBs(PlanMonthQuery example);

    List<PlanMonth> selectByExample(PlanMonthQuery example);

    PlanMonth selectByPrimaryKey(String mId);

    int updateByExampleSelective(@Param("record") PlanMonth record, @Param("example") PlanMonthQuery example);

    int updateByExampleWithBLOBs(@Param("record") PlanMonth record, @Param("example") PlanMonthQuery example);

    int updateByExample(@Param("record") PlanMonth record, @Param("example") PlanMonthQuery example);

    int updateByPrimaryKeySelective(PlanMonth record);

    int updateByPrimaryKeyWithBLOBs(PlanMonth record);

    int updateByPrimaryKey(PlanMonth record);
}