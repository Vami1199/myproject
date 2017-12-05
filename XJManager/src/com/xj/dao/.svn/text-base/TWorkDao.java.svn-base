package com.xj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.xj.domain.trains.TWork;
import com.xj.domain.trains.TWorkQuery;

public interface TWorkDao {
    int countByExample(TWorkQuery example);

    int deleteByExample(TWorkQuery example);

    int deleteByPrimaryKey(Integer wId);

    int insert(TWork record);

    int insertSelective(TWork record);

    List<TWork> selectByExampleWithBLOBs(TWorkQuery example);

    List<TWork> selectByExample(TWorkQuery example);

    TWork selectByPrimaryKey(Integer wId);

    int updateByExampleSelective(@Param("record") TWork record, @Param("example") TWorkQuery example);

    int updateByExampleWithBLOBs(@Param("record") TWork record, @Param("example") TWorkQuery example);

    int updateByExample(@Param("record") TWork record, @Param("example") TWorkQuery example);

    int updateByPrimaryKeySelective(TWork record);

    int updateByPrimaryKeyWithBLOBs(TWork record);

    int updateByPrimaryKey(TWork record);
}