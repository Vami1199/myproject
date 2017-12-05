package com.xj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.xj.domain.base.BIndustry;
import com.xj.domain.base.BIndustryQuery;

public interface BIndustryDao {
    int countByExample(BIndustryQuery example);

    int deleteByExample(BIndustryQuery example);

    int deleteByPrimaryKey(Integer iId);

    int insert(BIndustry record);

    int insertSelective(BIndustry record);

    List<BIndustry> selectByExampleWithBLOBs(BIndustryQuery example);

    List<BIndustry> selectByExample(BIndustryQuery example);

    BIndustry selectByPrimaryKey(Integer iId);

    int updateByExampleSelective(@Param("record") BIndustry record, @Param("example") BIndustryQuery example);

    int updateByExampleWithBLOBs(@Param("record") BIndustry record, @Param("example") BIndustryQuery example);

    int updateByExample(@Param("record") BIndustry record, @Param("example") BIndustryQuery example);

    int updateByPrimaryKeySelective(BIndustry record);

    int updateByPrimaryKeyWithBLOBs(BIndustry record);

    int updateByPrimaryKey(BIndustry record);
}