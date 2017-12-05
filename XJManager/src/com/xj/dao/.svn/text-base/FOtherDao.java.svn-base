package com.xj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.xj.domain.freight.FOther;
import com.xj.domain.freight.FOtherQuery;

public interface FOtherDao {
    int countByExample(FOtherQuery example);

    int deleteByExample(FOtherQuery example);

    int deleteByPrimaryKey(String oId);

    int insert(FOther record);

    int insertSelective(FOther record);

    List<FOther> selectByExampleWithBLOBs(FOtherQuery example);

    List<FOther> selectByExample(FOtherQuery example);

    FOther selectByPrimaryKey(String oId);

    int updateByExampleSelective(@Param("record") FOther record, @Param("example") FOtherQuery example);

    int updateByExampleWithBLOBs(@Param("record") FOther record, @Param("example") FOtherQuery example);

    int updateByExample(@Param("record") FOther record, @Param("example") FOtherQuery example);

    int updateByPrimaryKeySelective(FOther record);

    int updateByPrimaryKeyWithBLOBs(FOther record);

    int updateByPrimaryKey(FOther record);
}