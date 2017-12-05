package com.xj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.xj.domain.land.LDetail;
import com.xj.domain.land.LDetailQuery;

public interface LDetailDao {
    int countByExample(LDetailQuery example);

    int deleteByExample(LDetailQuery example);

    int deleteByPrimaryKey(Integer apId);

    int insert(LDetail record);

    int insertSelective(LDetail record);

    List<LDetail> selectByExampleWithBLOBs(LDetailQuery example);

    List<LDetail> selectByExample(LDetailQuery example);

    LDetail selectByPrimaryKey(Integer apId);

    int updateByExampleSelective(@Param("record") LDetail record, @Param("example") LDetailQuery example);

    int updateByExampleWithBLOBs(@Param("record") LDetail record, @Param("example") LDetailQuery example);

    int updateByExample(@Param("record") LDetail record, @Param("example") LDetailQuery example);

    int updateByPrimaryKeySelective(LDetail record);

    int updateByPrimaryKeyWithBLOBs(LDetail record);

    int updateByPrimaryKey(LDetail record);
}