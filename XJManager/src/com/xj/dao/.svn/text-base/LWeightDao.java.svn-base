package com.xj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.xj.domain.land.LWeight;
import com.xj.domain.land.LWeightQuery;

public interface LWeightDao {
    int countByExample(LWeightQuery example);

    int deleteByExample(LWeightQuery example);

    int deleteByPrimaryKey(Integer eId);

    int insert(LWeight record);

    int insertSelective(LWeight record);

    List<LWeight> selectByExampleWithBLOBs(LWeightQuery example);

    List<LWeight> selectByExample(LWeightQuery example);

    LWeight selectByPrimaryKey(Integer eId);

    int updateByExampleSelective(@Param("record") LWeight record, @Param("example") LWeightQuery example);

    int updateByExampleWithBLOBs(@Param("record") LWeight record, @Param("example") LWeightQuery example);

    int updateByExample(@Param("record") LWeight record, @Param("example") LWeightQuery example);

    int updateByPrimaryKeySelective(LWeight record);

    int updateByPrimaryKeyWithBLOBs(LWeight record);

    int updateByPrimaryKey(LWeight record);
}