package com.xj.dao;

import com.xj.domain.contract.SalesContract;
import com.xj.domain.contract.SalesContractQuery;
import com.xj.domain.contract.SalesContractWithBLOBs;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface SalesContractDao {
    int countByExample(SalesContractQuery example);

    int deleteByExample(SalesContractQuery example);

    int deleteByPrimaryKey(String scId);

    int insert(SalesContractWithBLOBs record);

    int insertSelective(SalesContractWithBLOBs record);

    List<SalesContractWithBLOBs> selectByExampleWithBLOBs(SalesContractQuery example);

    List<SalesContract> selectByExample(SalesContractQuery example);

    SalesContractWithBLOBs selectByPrimaryKey(String scId);

    int updateByExampleSelective(@Param("record") SalesContractWithBLOBs record, @Param("example") SalesContractQuery example);

    int updateByExampleWithBLOBs(@Param("record") SalesContractWithBLOBs record, @Param("example") SalesContractQuery example);

    int updateByExample(@Param("record") SalesContract record, @Param("example") SalesContractQuery example);

    int updateByPrimaryKeySelective(SalesContractWithBLOBs record);

    int updateByPrimaryKeyWithBLOBs(SalesContractWithBLOBs record);

    int updateByPrimaryKey(SalesContract record);
}