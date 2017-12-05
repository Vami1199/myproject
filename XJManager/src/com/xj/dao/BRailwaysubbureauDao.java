package com.xj.dao;

import com.xj.domain.base.BRailwaysubbureau;
import com.xj.domain.base.BRailwaysubbureauQuery;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface BRailwaysubbureauDao {
    int countByExample(BRailwaysubbureauQuery example);

    int deleteByExample(BRailwaysubbureauQuery example);

    int deleteByPrimaryKey(Integer subbureauId);

    int insert(BRailwaysubbureau record);

    int insertSelective(BRailwaysubbureau record);

    List<BRailwaysubbureau> selectByExampleWithBLOBs(BRailwaysubbureauQuery example);

    List<BRailwaysubbureau> selectByExample(BRailwaysubbureauQuery example);

    BRailwaysubbureau selectByPrimaryKey(Integer subbureauId);

    int updateByExampleSelective(@Param("record") BRailwaysubbureau record, @Param("example") BRailwaysubbureauQuery example);

    int updateByExampleWithBLOBs(@Param("record") BRailwaysubbureau record, @Param("example") BRailwaysubbureauQuery example);

    int updateByExample(@Param("record") BRailwaysubbureau record, @Param("example") BRailwaysubbureauQuery example);

    int updateByPrimaryKeySelective(BRailwaysubbureau record);

    int updateByPrimaryKeyWithBLOBs(BRailwaysubbureau record);

    int updateByPrimaryKey(BRailwaysubbureau record);
}