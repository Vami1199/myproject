package com.xj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.xj.domain.contract.SalesContractChange;
import com.xj.domain.contract.SalesContractChangeQuery;
import com.xj.domain.contract.SalesContractChangeWithBLOBs;

public interface SalesContractChangeDao {
    int countByExample(SalesContractChangeQuery example);

    int deleteByExample(SalesContractChangeQuery example);

    int deleteByPrimaryKey(Integer scContractid);

    int insert(SalesContractChangeWithBLOBs record);

    int insertSelective(SalesContractChangeWithBLOBs record);

    List<SalesContractChangeWithBLOBs> selectByExampleWithBLOBs(SalesContractChangeQuery example);

    List<SalesContractChange> selectByExample(SalesContractChangeQuery example);

    SalesContractChangeWithBLOBs selectByPrimaryKey(Integer scContractid);

    int updateByExampleSelective(@Param("record") SalesContractChangeWithBLOBs record, @Param("example") SalesContractChangeQuery example);

    int updateByExampleWithBLOBs(@Param("record") SalesContractChangeWithBLOBs record, @Param("example") SalesContractChangeQuery example);

    int updateByExample(@Param("record") SalesContractChange record, @Param("example") SalesContractChangeQuery example);

    int updateByPrimaryKeySelective(SalesContractChangeWithBLOBs record);

    int updateByPrimaryKeyWithBLOBs(SalesContractChangeWithBLOBs record);

    int updateByPrimaryKey(SalesContractChange record);
}