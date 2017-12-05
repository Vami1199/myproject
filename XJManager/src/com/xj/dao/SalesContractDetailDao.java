package com.xj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.xj.domain.contract.SalesContractDetail;
import com.xj.domain.contract.SalesContractDetailQuery;

public interface SalesContractDetailDao {
    int countByExample(SalesContractDetailQuery example);

    int deleteByExample(SalesContractDetailQuery example);

    int deleteByPrimaryKey(String scdId);

    int insert(SalesContractDetail record);

    int insertSelective(SalesContractDetail record);

    List<SalesContractDetail> selectByExampleWithBLOBs(SalesContractDetailQuery example);

    List<SalesContractDetail> selectByExample(SalesContractDetailQuery example);

    SalesContractDetail selectByPrimaryKey(String scdId);

    int updateByExampleSelective(@Param("record") SalesContractDetail record, @Param("example") SalesContractDetailQuery example);

    int updateByExampleWithBLOBs(@Param("record") SalesContractDetail record, @Param("example") SalesContractDetailQuery example);

    int updateByExample(@Param("record") SalesContractDetail record, @Param("example") SalesContractDetailQuery example);

    int updateByPrimaryKeySelective(SalesContractDetail record);

    int updateByPrimaryKeyWithBLOBs(SalesContractDetail record);

    int updateByPrimaryKey(SalesContractDetail record);
}