package com.xj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.xj.domain.freight.FDetail;
import com.xj.domain.freight.FDetailQuery;

public interface FDetailDao {
    int countByExample(FDetailQuery example);

    int deleteByExample(FDetailQuery example);

    int deleteByPrimaryKey(String deId);

    int insert(FDetail record);

    int insertSelective(FDetail record);

    List<FDetail> selectByExample(FDetailQuery example);

    FDetail selectByPrimaryKey(String deId);

    int updateByExampleSelective(@Param("record") FDetail record, @Param("example") FDetailQuery example);

    int updateByExample(@Param("record") FDetail record, @Param("example") FDetailQuery example);

    int updateByPrimaryKeySelective(FDetail record);

    int updateByPrimaryKey(FDetail record);
}