package com.xj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.xj.domain.trains.TAddwagon;
import com.xj.domain.trains.TAddwagonQuery;

public interface TAddwagonDao {
    int countByExample(TAddwagonQuery example);

    int deleteByExample(TAddwagonQuery example);

    int insert(TAddwagon record);

    int insertSelective(TAddwagon record);

    List<TAddwagon> selectByExample(TAddwagonQuery example);

    int updateByExampleSelective(@Param("record") TAddwagon record, @Param("example") TAddwagonQuery example);

    int updateByExample(@Param("record") TAddwagon record, @Param("example") TAddwagonQuery example);
}