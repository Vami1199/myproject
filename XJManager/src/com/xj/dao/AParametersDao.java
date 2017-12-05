package com.xj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.xj.domain.assay.AParameters;
import com.xj.domain.assay.AParametersQuery;

public interface AParametersDao {
    int countByExample(AParametersQuery example);

    int deleteByExample(AParametersQuery example);

    int deleteByPrimaryKey(String pmId);

    int insert(AParameters record);

    int insertSelective(AParameters record);

    List<AParameters> selectByExample(AParametersQuery example);

    AParameters selectByPrimaryKey(String pmId);

    int updateByExampleSelective(@Param("record") AParameters record, @Param("example") AParametersQuery example);

    int updateByExample(@Param("record") AParameters record, @Param("example") AParametersQuery example);

    int updateByPrimaryKeySelective(AParameters record);

    int updateByPrimaryKey(AParameters record);
}