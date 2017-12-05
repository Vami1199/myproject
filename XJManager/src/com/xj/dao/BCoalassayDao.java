package com.xj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.xj.domain.base.BCoalassay;
import com.xj.domain.base.BCoalassayQuery;

public interface BCoalassayDao {
    int countByExample(BCoalassayQuery example);

    int deleteByExample(BCoalassayQuery example);

    int deleteByPrimaryKey(String caId);

    int insert(BCoalassay record);

    int insertSelective(BCoalassay record);

    List<BCoalassay> selectByExampleWithBLOBs(BCoalassayQuery example);

    List<BCoalassay> selectByExample(BCoalassayQuery example);

    BCoalassay selectByPrimaryKey(String caId);

    int updateByExampleSelective(@Param("record") BCoalassay record, @Param("example") BCoalassayQuery example);

    int updateByExampleWithBLOBs(@Param("record") BCoalassay record, @Param("example") BCoalassayQuery example);

    int updateByExample(@Param("record") BCoalassay record, @Param("example") BCoalassayQuery example);

    int updateByPrimaryKeySelective(BCoalassay record);

    int updateByPrimaryKeyWithBLOBs(BCoalassay record);

    int updateByPrimaryKey(BCoalassay record);
}