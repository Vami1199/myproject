package com.xj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.xj.domain.base.BBank;
import com.xj.domain.base.BBankQuery;

public interface BBankDao {
    int countByExample(BBankQuery example);

    int deleteByExample(BBankQuery example);

    int deleteByPrimaryKey(String bId);

    int insert(BBank record);

    int insertSelective(BBank record);

    List<BBank> selectByExampleWithBLOBs(BBankQuery example);

    List<BBank> selectByExample(BBankQuery example);

    BBank selectByPrimaryKey(String bId);

    int updateByExampleSelective(@Param("record") BBank record, @Param("example") BBankQuery example);

    int updateByExampleWithBLOBs(@Param("record") BBank record, @Param("example") BBankQuery example);

    int updateByExample(@Param("record") BBank record, @Param("example") BBankQuery example);

    int updateByPrimaryKeySelective(BBank record);

    int updateByPrimaryKeyWithBLOBs(BBank record);

    int updateByPrimaryKey(BBank record);
}