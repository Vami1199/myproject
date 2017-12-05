package com.xj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.xj.domain.base.BTraffic;
import com.xj.domain.base.BTrafficQuery;

public interface BTrafficDao {
    int countByExample(BTrafficQuery example);

    int deleteByExample(BTrafficQuery example);

    int deleteByPrimaryKey(Integer tId);

    int insert(BTraffic record);

    int insertSelective(BTraffic record);

    List<BTraffic> selectByExampleWithBLOBs(BTrafficQuery example);

    List<BTraffic> selectByExample(BTrafficQuery example);

    BTraffic selectByPrimaryKey(Integer tId);

    int updateByExampleSelective(@Param("record") BTraffic record, @Param("example") BTrafficQuery example);

    int updateByExampleWithBLOBs(@Param("record") BTraffic record, @Param("example") BTrafficQuery example);

    int updateByExample(@Param("record") BTraffic record, @Param("example") BTrafficQuery example);

    int updateByPrimaryKeySelective(BTraffic record);

    int updateByPrimaryKeyWithBLOBs(BTraffic record);

    int updateByPrimaryKey(BTraffic record);
}