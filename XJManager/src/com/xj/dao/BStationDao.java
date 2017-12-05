package com.xj.dao;

import com.xj.domain.base.BStation;
import com.xj.domain.base.BStationQuery;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface BStationDao {
    int countByExample(BStationQuery example);

    int deleteByExample(BStationQuery example);

    int deleteByPrimaryKey(Integer sId);

    int insert(BStation record);

    int insertSelective(BStation record);

    List<BStation> selectByExampleWithBLOBs(BStationQuery example);

    List<BStation> selectByExample(BStationQuery example);

    BStation selectByPrimaryKey(Integer sId);

    int updateByExampleSelective(@Param("record") BStation record, @Param("example") BStationQuery example);

    int updateByExampleWithBLOBs(@Param("record") BStation record, @Param("example") BStationQuery example);

    int updateByExample(@Param("record") BStation record, @Param("example") BStationQuery example);

    int updateByPrimaryKeySelective(BStation record);

    int updateByPrimaryKeyWithBLOBs(BStation record);

    int updateByPrimaryKey(BStation record);
}