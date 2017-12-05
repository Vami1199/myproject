package com.xj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.xj.domain.assay.ASampling;
import com.xj.domain.assay.ASamplingQuery;

public interface ASamplingDao {
    int countByExample(ASamplingQuery example);

    int deleteByExample(ASamplingQuery example);

    int deleteByPrimaryKey(String spId);

    int insert(ASampling record);

    int insertSelective(ASampling record);

    List<ASampling> selectByExampleWithBLOBs(ASamplingQuery example);

    List<ASampling> selectByExample(ASamplingQuery example);

    ASampling selectByPrimaryKey(String spId);

    int updateByExampleSelective(@Param("record") ASampling record, @Param("example") ASamplingQuery example);

    int updateByExampleWithBLOBs(@Param("record") ASampling record, @Param("example") ASamplingQuery example);

    int updateByExample(@Param("record") ASampling record, @Param("example") ASamplingQuery example);

    int updateByPrimaryKeySelective(ASampling record);

    int updateByPrimaryKeyWithBLOBs(ASampling record);

    int updateByPrimaryKey(ASampling record);
}