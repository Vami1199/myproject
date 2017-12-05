package com.xj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.xj.domain.base.BCity;
import com.xj.domain.base.BCityQuery;

public interface BCityDao {
    int countByExample(BCityQuery example);

    int deleteByExample(BCityQuery example);

    int deleteByPrimaryKey(Integer cId);

    int insert(BCity record);

    int insertSelective(BCity record);

    List<BCity> selectByExample(BCityQuery example);

    BCity selectByPrimaryKey(Integer cId);

    int updateByExampleSelective(@Param("record") BCity record, @Param("example") BCityQuery example);

    int updateByExample(@Param("record") BCity record, @Param("example") BCityQuery example);

    int updateByPrimaryKeySelective(BCity record);

    int updateByPrimaryKey(BCity record);
}