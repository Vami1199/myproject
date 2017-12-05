package com.xj.dao;

import com.xj.domain.base.BCustomer;
import com.xj.domain.base.BCustomerQuery;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface BCustomerDao {
    int countByExample(BCustomerQuery example);

    int deleteByExample(BCustomerQuery example);

    int deleteByPrimaryKey(Integer cId);

    int insert(BCustomer record);

    int insertSelective(BCustomer record);

    List<BCustomer> selectByExample(BCustomerQuery example);

    BCustomer selectByPrimaryKey(Integer cId);

    int updateByExampleSelective(@Param("record") BCustomer record, @Param("example") BCustomerQuery example);

    int updateByExample(@Param("record") BCustomer record, @Param("example") BCustomerQuery example);

    int updateByPrimaryKeySelective(BCustomer record);

    int updateByPrimaryKey(BCustomer record);
}