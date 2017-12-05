package com.xj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.xj.domain.trainsplan.PMonthrequest;
import com.xj.domain.trainsplan.PMonthrequestQuery;

public interface PMonthrequestDao {
    int countByExample(PMonthrequestQuery example);

    int deleteByExample(PMonthrequestQuery example);

    int deleteByPrimaryKey(String mId);

    int insert(PMonthrequest record);

    int insertSelective(PMonthrequest record);

    List<PMonthrequest> selectByExampleWithBLOBs(PMonthrequestQuery example);

    List<PMonthrequest> selectByExample(PMonthrequestQuery example);

    PMonthrequest selectByPrimaryKey(String mId);

    int updateByExampleSelective(@Param("record") PMonthrequest record, @Param("example") PMonthrequestQuery example);

    int updateByExampleWithBLOBs(@Param("record") PMonthrequest record, @Param("example") PMonthrequestQuery example);

    int updateByExample(@Param("record") PMonthrequest record, @Param("example") PMonthrequestQuery example);

    int updateByPrimaryKeySelective(PMonthrequest record);

    int updateByPrimaryKeyWithBLOBs(PMonthrequest record);

    int updateByPrimaryKey(PMonthrequest record);
}