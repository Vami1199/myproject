package com.xj.dao;

import com.xj.domain.base.BCoaltype;
import com.xj.domain.base.BCoaltypeQuery;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface BCoaltypeDao {
    int countByExample(BCoaltypeQuery example);

    int deleteByExample(BCoaltypeQuery example);

    int deleteByPrimaryKey(Integer ctId);

    int insert(BCoaltype record);

    int insertSelective(BCoaltype record);

    List<BCoaltype> selectByExampleWithBLOBs(BCoaltypeQuery example);

    List<BCoaltype> selectByExample(BCoaltypeQuery example);

    BCoaltype selectByPrimaryKey(Integer ctId);

    int updateByExampleSelective(@Param("record") BCoaltype record, @Param("example") BCoaltypeQuery example);

    int updateByExampleWithBLOBs(@Param("record") BCoaltype record, @Param("example") BCoaltypeQuery example);

    int updateByExample(@Param("record") BCoaltype record, @Param("example") BCoaltypeQuery example);

    int updateByPrimaryKeySelective(BCoaltype record);

    int updateByPrimaryKeyWithBLOBs(BCoaltype record);

    int updateByPrimaryKey(BCoaltype record);
}