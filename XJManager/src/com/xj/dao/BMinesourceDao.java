package com.xj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.xj.domain.base.BMinesource;
import com.xj.domain.base.BMinesourceQuery;

public interface BMinesourceDao {
    int countByExample(BMinesourceQuery example);

    int deleteByExample(BMinesourceQuery example);

    int deleteByPrimaryKey(Integer sourceId);

    int insert(BMinesource record);

    int insertSelective(BMinesource record);

    List<BMinesource> selectByExampleWithBLOBs(BMinesourceQuery example);

    List<BMinesource> selectByExample(BMinesourceQuery example);

    BMinesource selectByPrimaryKey(Integer sourceId);

    int updateByExampleSelective(@Param("record") BMinesource record, @Param("example") BMinesourceQuery example);

    int updateByExampleWithBLOBs(@Param("record") BMinesource record, @Param("example") BMinesourceQuery example);

    int updateByExample(@Param("record") BMinesource record, @Param("example") BMinesourceQuery example);

    int updateByPrimaryKeySelective(BMinesource record);

    int updateByPrimaryKeyWithBLOBs(BMinesource record);

    int updateByPrimaryKey(BMinesource record);
}