package com.xj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.xj.domain.plan.PlanYeardetail;
import com.xj.domain.plan.PlanYeardetailQuery;

public interface PlanYeardetailDao {
    int countByExample(PlanYeardetailQuery example);

    int deleteByExample(PlanYeardetailQuery example);

    int deleteByPrimaryKey(String ydId);

    int insert(PlanYeardetail record);

    int insertSelective(PlanYeardetail record);

    List<PlanYeardetail> selectByExampleWithBLOBs(PlanYeardetailQuery example);

    List<PlanYeardetail> selectByExample(PlanYeardetailQuery example);

    PlanYeardetail selectByPrimaryKey(String ydId);

    int updateByExampleSelective(@Param("record") PlanYeardetail record, @Param("example") PlanYeardetailQuery example);

    int updateByExampleWithBLOBs(@Param("record") PlanYeardetail record, @Param("example") PlanYeardetailQuery example);

    int updateByExample(@Param("record") PlanYeardetail record, @Param("example") PlanYeardetailQuery example);

    int updateByPrimaryKeySelective(PlanYeardetail record);

    int updateByPrimaryKeyWithBLOBs(PlanYeardetail record);

    int updateByPrimaryKey(PlanYeardetail record);
}