package com.xj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.xj.domain.trains.TAddhead;
import com.xj.domain.trains.TAddheadQuery;
import com.xj.domain.trains.TAddheadWithBLOBs;

public interface TAddheadDao {
    int countByExample(TAddheadQuery example);

    int deleteByExample(TAddheadQuery example);

    int deleteByPrimaryKey(String ahId);

    int insert(TAddheadWithBLOBs record);

    int insertSelective(TAddheadWithBLOBs record);

    List<TAddheadWithBLOBs> selectByExampleWithBLOBs(TAddheadQuery example);

    List<TAddhead> selectByExample(TAddheadQuery example);

    TAddheadWithBLOBs selectByPrimaryKey(String ahId);

    int updateByExampleSelective(@Param("record") TAddheadWithBLOBs record, @Param("example") TAddheadQuery example);

    int updateByExampleWithBLOBs(@Param("record") TAddheadWithBLOBs record, @Param("example") TAddheadQuery example);

    int updateByExample(@Param("record") TAddhead record, @Param("example") TAddheadQuery example);

    int updateByPrimaryKeySelective(TAddheadWithBLOBs record);

    int updateByPrimaryKeyWithBLOBs(TAddheadWithBLOBs record);

    int updateByPrimaryKey(TAddhead record);
}