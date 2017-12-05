package com.xj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.xj.domain.contract.ContractDeskCountManagement;
import com.xj.domain.contract.ContractDeskCountManagementQuery;

public interface ContractDeskCountManagementDao {
    int countByExample(ContractDeskCountManagementQuery example);

    int deleteByExample(ContractDeskCountManagementQuery example);

    int deleteByPrimaryKey(Integer cmContractid);

    int insert(ContractDeskCountManagement record);

    int insertSelective(ContractDeskCountManagement record);

    List<ContractDeskCountManagement> selectByExampleWithBLOBs(ContractDeskCountManagementQuery example);

    List<ContractDeskCountManagement> selectByExample(ContractDeskCountManagementQuery example);

    ContractDeskCountManagement selectByPrimaryKey(Integer cmContractid);

    int updateByExampleSelective(@Param("record") ContractDeskCountManagement record, @Param("example") ContractDeskCountManagementQuery example);

    int updateByExampleWithBLOBs(@Param("record") ContractDeskCountManagement record, @Param("example") ContractDeskCountManagementQuery example);

    int updateByExample(@Param("record") ContractDeskCountManagement record, @Param("example") ContractDeskCountManagementQuery example);

    int updateByPrimaryKeySelective(ContractDeskCountManagement record);

    int updateByPrimaryKeyWithBLOBs(ContractDeskCountManagement record);

    int updateByPrimaryKey(ContractDeskCountManagement record);
}