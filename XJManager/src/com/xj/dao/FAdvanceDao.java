package com.xj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.xj.domain.freight.FAdvance;
import com.xj.domain.freight.FAdvanceQuery;

public interface FAdvanceDao {
    int countByExample(FAdvanceQuery example);

    int deleteByExample(FAdvanceQuery example);

    int deleteByPrimaryKey(String adId);

    int insert(FAdvance record);

    int insertSelective(FAdvance record);

    List<FAdvance> selectByExampleWithBLOBs(FAdvanceQuery example);

    List<FAdvance> selectByExample(FAdvanceQuery example);

    FAdvance selectByPrimaryKey(String adId);

    int updateByExampleSelective(@Param("record") FAdvance record, @Param("example") FAdvanceQuery example);

    int updateByExampleWithBLOBs(@Param("record") FAdvance record, @Param("example") FAdvanceQuery example);

    int updateByExample(@Param("record") FAdvance record, @Param("example") FAdvanceQuery example);

    int updateByPrimaryKeySelective(FAdvance record);

    int updateByPrimaryKeyWithBLOBs(FAdvance record);

    int updateByPrimaryKey(FAdvance record);
}