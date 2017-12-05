package com.xj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.xj.domain.trainsplan.PAddrequest;
import com.xj.domain.trainsplan.PAddrequestQuery;

public interface PAddrequestDao {
    int countByExample(PAddrequestQuery example);

    int deleteByExample(PAddrequestQuery example);

    int deleteByPrimaryKey(String addId);

    int insert(PAddrequest record);

    int insertSelective(PAddrequest record);

    List<PAddrequest> selectByExampleWithBLOBs(PAddrequestQuery example);

    List<PAddrequest> selectByExample(PAddrequestQuery example);

    PAddrequest selectByPrimaryKey(String addId);

    int updateByExampleSelective(@Param("record") PAddrequest record, @Param("example") PAddrequestQuery example);

    int updateByExampleWithBLOBs(@Param("record") PAddrequest record, @Param("example") PAddrequestQuery example);

    int updateByExample(@Param("record") PAddrequest record, @Param("example") PAddrequestQuery example);

    int updateByPrimaryKeySelective(PAddrequest record);

    int updateByPrimaryKeyWithBLOBs(PAddrequest record);

    int updateByPrimaryKey(PAddrequest record);
}