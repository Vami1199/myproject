package com.xj.dao;

import com.xj.domain.base.BRailwaywagonsys;
import com.xj.domain.base.BRailwaywagonsysQuery;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface BRailwaywagonsysDao {
    int countByExample(BRailwaywagonsysQuery example);

    int deleteByExample(BRailwaywagonsysQuery example);

    int deleteByPrimaryKey(String rwId);

    int insert(BRailwaywagonsys record);

    int insertSelective(BRailwaywagonsys record);

    List<BRailwaywagonsys> selectByExampleWithBLOBs(BRailwaywagonsysQuery example);

    List<BRailwaywagonsys> selectByExample(BRailwaywagonsysQuery example);

    BRailwaywagonsys selectByPrimaryKey(String rwId);

    int updateByExampleSelective(@Param("record") BRailwaywagonsys record, @Param("example") BRailwaywagonsysQuery example);

    int updateByExampleWithBLOBs(@Param("record") BRailwaywagonsys record, @Param("example") BRailwaywagonsysQuery example);

    int updateByExample(@Param("record") BRailwaywagonsys record, @Param("example") BRailwaywagonsysQuery example);

    int updateByPrimaryKeySelective(BRailwaywagonsys record);

    int updateByPrimaryKeyWithBLOBs(BRailwaywagonsys record);

    int updateByPrimaryKey(BRailwaywagonsys record);
}