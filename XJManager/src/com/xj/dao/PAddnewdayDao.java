package com.xj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.xj.domain.trainsplan.PAddnewday;
import com.xj.domain.trainsplan.PAddnewdayQuery;

public interface PAddnewdayDao {
    int countByExample(PAddnewdayQuery example);

    int deleteByExample(PAddnewdayQuery example);

    int deleteByPrimaryKey(String anId);

    int insert(PAddnewday record);

    int insertSelective(PAddnewday record);

    List<PAddnewday> selectByExampleWithBLOBs(PAddnewdayQuery example);

    List<PAddnewday> selectByExample(PAddnewdayQuery example);

    PAddnewday selectByPrimaryKey(String anId);

    int updateByExampleSelective(@Param("record") PAddnewday record, @Param("example") PAddnewdayQuery example);

    int updateByExampleWithBLOBs(@Param("record") PAddnewday record, @Param("example") PAddnewdayQuery example);

    int updateByExample(@Param("record") PAddnewday record, @Param("example") PAddnewdayQuery example);

    int updateByPrimaryKeySelective(PAddnewday record);

    int updateByPrimaryKeyWithBLOBs(PAddnewday record);

    int updateByPrimaryKey(PAddnewday record);
}