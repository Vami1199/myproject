package com.xj.dao;

import com.xj.domain.base.Recive;
import com.xj.domain.base.ReciveQuery;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface ReciveDao {
    int countByExample(ReciveQuery example);

    int deleteByExample(ReciveQuery example);

    int deleteByPrimaryKey(String recid);

    int insert(Recive record);

    int insertSelective(Recive record);

    List<Recive> selectByExample(ReciveQuery example);

    Recive selectByPrimaryKey(String recid);

    int updateByExampleSelective(@Param("record") Recive record, @Param("example") ReciveQuery example);

    int updateByExample(@Param("record") Recive record, @Param("example") ReciveQuery example);

    int updateByPrimaryKeySelective(Recive record);

    int updateByPrimaryKey(Recive record);
}