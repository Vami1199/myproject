package com.xj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.xj.domain.trains.TNote;
import com.xj.domain.trains.TNoteQuery;

public interface TNoteDao {
    int countByExample(TNoteQuery example);

    int deleteByExample(TNoteQuery example);

    int deleteByPrimaryKey(Integer noteId);

    int insert(TNote record);

    int insertSelective(TNote record);

    List<TNote> selectByExampleWithBLOBs(TNoteQuery example);

    List<TNote> selectByExample(TNoteQuery example);

    TNote selectByPrimaryKey(Integer noteId);

    int updateByExampleSelective(@Param("record") TNote record, @Param("example") TNoteQuery example);

    int updateByExampleWithBLOBs(@Param("record") TNote record, @Param("example") TNoteQuery example);

    int updateByExample(@Param("record") TNote record, @Param("example") TNoteQuery example);

    int updateByPrimaryKeySelective(TNote record);

    int updateByPrimaryKeyWithBLOBs(TNote record);

    int updateByPrimaryKey(TNote record);
}