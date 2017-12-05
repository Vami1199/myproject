package com.xj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.xj.domain.plan.PlanYear;
import com.xj.domain.plan.PlanYearQuery;

public interface PlanYearDao {
    int countByExample(PlanYearQuery example);

    int deleteByExample(PlanYearQuery example);

    int deleteByPrimaryKey(String yId);

    int insert(PlanYear record);

    int insertSelective(PlanYear record);

    List<PlanYear> selectByExampleWithBLOBs(PlanYearQuery example);

    List<PlanYear> selectByExample(PlanYearQuery example);

    PlanYear selectByPrimaryKey(String yId);

    int updateByExampleSelective(@Param("record") PlanYear record, @Param("example") PlanYearQuery example);

    int updateByExampleWithBLOBs(@Param("record") PlanYear record, @Param("example") PlanYearQuery example);

    int updateByExample(@Param("record") PlanYear record, @Param("example") PlanYearQuery example);

    int updateByPrimaryKeySelective(PlanYear record);

    int updateByPrimaryKeyWithBLOBs(PlanYear record);

    int updateByPrimaryKey(PlanYear record);
}