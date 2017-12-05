package com.xj.dao;

import com.xj.domain.land.LApply;
import com.xj.domain.land.LApplyQuery;
import com.xj.domain.land.LApplyWithBLOBs;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface LApplyDao {
    int countByExample(LApplyQuery example);

    int deleteByExample(LApplyQuery example);

    int deleteByPrimaryKey(Integer apId);

    int insert(LApplyWithBLOBs record);

    int insertSelective(LApplyWithBLOBs record);

    List<LApplyWithBLOBs> selectByExampleWithBLOBs(LApplyQuery example);

    List<LApply> selectByExample(LApplyQuery example);

    LApplyWithBLOBs selectByPrimaryKey(Integer apId);

    int updateByExampleSelective(@Param("record") LApplyWithBLOBs record, @Param("example") LApplyQuery example);

    int updateByExampleWithBLOBs(@Param("record") LApplyWithBLOBs record, @Param("example") LApplyQuery example);

    int updateByExample(@Param("record") LApply record, @Param("example") LApplyQuery example);

    int updateByPrimaryKeySelective(LApplyWithBLOBs record);

    int updateByPrimaryKeyWithBLOBs(LApplyWithBLOBs record);

    int updateByPrimaryKey(LApply record);
}