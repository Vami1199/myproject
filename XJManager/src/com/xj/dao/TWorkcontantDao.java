package com.xj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.xj.domain.trains.TWorkcontant;
import com.xj.domain.trains.TWorkcontantQuery;

public interface TWorkcontantDao {
    int countByExample(TWorkcontantQuery example);

    int deleteByExample(TWorkcontantQuery example);

    int deleteByPrimaryKey(String wcId);

    int insert(TWorkcontant record);

    int insertSelective(TWorkcontant record);

    List<TWorkcontant> selectByExample(TWorkcontantQuery example);

    TWorkcontant selectByPrimaryKey(String wcId);

    int updateByExampleSelective(@Param("record") TWorkcontant record, @Param("example") TWorkcontantQuery example);

    int updateByExample(@Param("record") TWorkcontant record, @Param("example") TWorkcontantQuery example);

    int updateByPrimaryKeySelective(TWorkcontant record);

    int updateByPrimaryKey(TWorkcontant record);
}