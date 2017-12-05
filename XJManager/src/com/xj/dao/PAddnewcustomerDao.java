package com.xj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.xj.domain.trainsplan.PAddnewcustomer;
import com.xj.domain.trainsplan.PAddnewcustomerQuery;

public interface PAddnewcustomerDao {
    int countByExample(PAddnewcustomerQuery example);

    int deleteByExample(PAddnewcustomerQuery example);

    int deleteByPrimaryKey(String awcId);

    int insert(PAddnewcustomer record);

    int insertSelective(PAddnewcustomer record);

    List<PAddnewcustomer> selectByExampleWithBLOBs(PAddnewcustomerQuery example);

    List<PAddnewcustomer> selectByExample(PAddnewcustomerQuery example);

    PAddnewcustomer selectByPrimaryKey(String awcId);

    int updateByExampleSelective(@Param("record") PAddnewcustomer record, @Param("example") PAddnewcustomerQuery example);

    int updateByExampleWithBLOBs(@Param("record") PAddnewcustomer record, @Param("example") PAddnewcustomerQuery example);

    int updateByExample(@Param("record") PAddnewcustomer record, @Param("example") PAddnewcustomerQuery example);

    int updateByPrimaryKeySelective(PAddnewcustomer record);

    int updateByPrimaryKeyWithBLOBs(PAddnewcustomer record);

    int updateByPrimaryKey(PAddnewcustomer record);
}