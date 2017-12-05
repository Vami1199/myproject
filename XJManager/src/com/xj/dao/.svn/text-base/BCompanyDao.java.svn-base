package com.xj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.xj.domain.base.BCompany;
import com.xj.domain.base.BCompanyQuery;

public interface BCompanyDao {
    int countByExample(BCompanyQuery example);

    int deleteByExample(BCompanyQuery example);

    int deleteByPrimaryKey(String coId);

    int insert(BCompany record);

    int insertSelective(BCompany record);

    List<BCompany> selectByExample(BCompanyQuery example);

    BCompany selectByPrimaryKey(String coId);

    int updateByExampleSelective(@Param("record") BCompany record, @Param("example") BCompanyQuery example);

    int updateByExample(@Param("record") BCompany record, @Param("example") BCompanyQuery example);

    int updateByPrimaryKeySelective(BCompany record);

    int updateByPrimaryKey(BCompany record);
}