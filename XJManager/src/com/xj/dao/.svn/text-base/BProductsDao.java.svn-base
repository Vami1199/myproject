package com.xj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.xj.domain.base.BProducts;
import com.xj.domain.base.BProductsQuery;

public interface BProductsDao {
    int countByExample(BProductsQuery example);

    int deleteByExample(BProductsQuery example);

    int deleteByPrimaryKey(Integer pId);

    int insert(BProducts record);

    int insertSelective(BProducts record);

    List<BProducts> selectByExampleWithBLOBs(BProductsQuery example);

    List<BProducts> selectByExample(BProductsQuery example);

    BProducts selectByPrimaryKey(Integer pId);

    int updateByExampleSelective(@Param("record") BProducts record, @Param("example") BProductsQuery example);

    int updateByExampleWithBLOBs(@Param("record") BProducts record, @Param("example") BProductsQuery example);

    int updateByExample(@Param("record") BProducts record, @Param("example") BProductsQuery example);

    int updateByPrimaryKeySelective(BProducts record);

    int updateByPrimaryKeyWithBLOBs(BProducts record);

    int updateByPrimaryKey(BProducts record);
}