package com.xj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.xj.domain.base.BStartstation;
import com.xj.domain.base.BStartstationQuery;

public interface BStartstationDao {
    int countByExample(BStartstationQuery example);

    int deleteByExample(BStartstationQuery example);

    int deleteByPrimaryKey(Integer startId);

    int insert(BStartstation record);

    int insertSelective(BStartstation record);

    List<BStartstation> selectByExample(BStartstationQuery example);

    BStartstation selectByPrimaryKey(Integer startId);

    int updateByExampleSelective(@Param("record") BStartstation record, @Param("example") BStartstationQuery example);

    int updateByExample(@Param("record") BStartstation record, @Param("example") BStartstationQuery example);

    int updateByPrimaryKeySelective(BStartstation record);

    int updateByPrimaryKey(BStartstation record);
}