package com.xj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.xj.domain.land.LSend;
import com.xj.domain.land.LSendQuery;

public interface LSendDao {
    int countByExample(LSendQuery example);

    int deleteByExample(LSendQuery example);

    int deleteByPrimaryKey(Integer sId);

    int insert(LSend record);

    int insertSelective(LSend record);

    List<LSend> selectByExampleWithBLOBs(LSendQuery example);

    List<LSend> selectByExample(LSendQuery example);

    LSend selectByPrimaryKey(Integer sId);

    int updateByExampleSelective(@Param("record") LSend record, @Param("example") LSendQuery example);

    int updateByExampleWithBLOBs(@Param("record") LSend record, @Param("example") LSendQuery example);

    int updateByExample(@Param("record") LSend record, @Param("example") LSendQuery example);

    int updateByPrimaryKeySelective(LSend record);

    int updateByPrimaryKeyWithBLOBs(LSend record);

    int updateByPrimaryKey(LSend record);
}