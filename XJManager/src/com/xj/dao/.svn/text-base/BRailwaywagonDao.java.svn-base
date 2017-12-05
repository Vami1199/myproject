package com.xj.dao;

import com.xj.domain.base.BRailwaywagon;
import com.xj.domain.base.BRailwaywagonQuery;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface BRailwaywagonDao {
    int countByExample(BRailwaywagonQuery example);

    int deleteByExample(BRailwaywagonQuery example);

    int deleteByPrimaryKey(Integer csId);

    int insert(BRailwaywagon record);

    int insertSelective(BRailwaywagon record);

    List<BRailwaywagon> selectByExample(BRailwaywagonQuery example);

    BRailwaywagon selectByPrimaryKey(Integer csId);

    int updateByExampleSelective(@Param("record") BRailwaywagon record, @Param("example") BRailwaywagonQuery example);

    int updateByExample(@Param("record") BRailwaywagon record, @Param("example") BRailwaywagonQuery example);

    int updateByPrimaryKeySelective(BRailwaywagon record);

    int updateByPrimaryKey(BRailwaywagon record);
}