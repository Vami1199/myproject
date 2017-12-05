package com.xj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.xj.domain.base.BRailwayadmin;
import com.xj.domain.base.BRailwayadminQuery;

public interface BRailwayadminDao {
    int countByExample(BRailwayadminQuery example);

    int deleteByExample(BRailwayadminQuery example);

    int deleteByPrimaryKey(Integer adminId);

    int insert(BRailwayadmin record);

    int insertSelective(BRailwayadmin record);

    List<BRailwayadmin> selectByExample(BRailwayadminQuery example);

    BRailwayadmin selectByPrimaryKey(Integer adminId);

    int updateByExampleSelective(@Param("record") BRailwayadmin record, @Param("example") BRailwayadminQuery example);

    int updateByExample(@Param("record") BRailwayadmin record, @Param("example") BRailwayadminQuery example);

    int updateByPrimaryKeySelective(BRailwayadmin record);

    int updateByPrimaryKey(BRailwayadmin record);
}