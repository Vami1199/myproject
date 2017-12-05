package com.xj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.xj.domain.trainsplan.PDayrequest;
import com.xj.domain.trainsplan.PDayrequestQuery;

public interface PDayrequestDao {
    int countByExample(PDayrequestQuery example);

    int deleteByExample(PDayrequestQuery example);

    int deleteByPrimaryKey(String dId);

    int insert(PDayrequest record);

    int insertSelective(PDayrequest record);

    List<PDayrequest> selectByExampleWithBLOBs(PDayrequestQuery example);

    List<PDayrequest> selectByExample(PDayrequestQuery example);

    PDayrequest selectByPrimaryKey(String dId);

    int updateByExampleSelective(@Param("record") PDayrequest record, @Param("example") PDayrequestQuery example);

    int updateByExampleWithBLOBs(@Param("record") PDayrequest record, @Param("example") PDayrequestQuery example);

    int updateByExample(@Param("record") PDayrequest record, @Param("example") PDayrequestQuery example);

    int updateByPrimaryKeySelective(PDayrequest record);

    int updateByPrimaryKeyWithBLOBs(PDayrequest record);

    int updateByPrimaryKey(PDayrequest record);
}