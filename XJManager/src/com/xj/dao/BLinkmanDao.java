package com.xj.dao;

import com.xj.domain.base.BLinkman;
import com.xj.domain.base.BLinkmanQuery;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface BLinkmanDao {
    int countByExample(BLinkmanQuery example);

    int deleteByExample(BLinkmanQuery example);

    int deleteByPrimaryKey(String lId);

    int insert(BLinkman record);

    int insertSelective(BLinkman record);

    List<BLinkman> selectByExampleWithBLOBs(BLinkmanQuery example);

    List<BLinkman> selectByExample(BLinkmanQuery example);

    BLinkman selectByPrimaryKey(String lId);

    int updateByExampleSelective(@Param("record") BLinkman record, @Param("example") BLinkmanQuery example);

    int updateByExampleWithBLOBs(@Param("record") BLinkman record, @Param("example") BLinkmanQuery example);

    int updateByExample(@Param("record") BLinkman record, @Param("example") BLinkmanQuery example);

    int updateByPrimaryKeySelective(BLinkman record);

    int updateByPrimaryKeyWithBLOBs(BLinkman record);

    int updateByPrimaryKey(BLinkman record);
}