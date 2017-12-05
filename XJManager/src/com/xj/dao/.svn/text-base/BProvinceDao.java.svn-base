package com.xj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.xj.domain.base.BProvince;
import com.xj.domain.base.BProvinceQuery;

public interface BProvinceDao {
    int countByExample(BProvinceQuery example);

    int deleteByExample(BProvinceQuery example);

    int deleteByPrimaryKey(Integer pId);

    int insert(BProvince record);

    int insertSelective(BProvince record);

    List<BProvince> selectByExample(BProvinceQuery example);

    BProvince selectByPrimaryKey(Integer pId);

    int updateByExampleSelective(@Param("record") BProvince record, @Param("example") BProvinceQuery example);

    int updateByExample(@Param("record") BProvince record, @Param("example") BProvinceQuery example);

    int updateByPrimaryKeySelective(BProvince record);

    int updateByPrimaryKey(BProvince record);
}