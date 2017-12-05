package com.xj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.xj.domain.trains.TTotalprice;
import com.xj.domain.trains.TTotalpriceQuery;

public interface TTotalpriceDao {
    int countByExample(TTotalpriceQuery example);

    int deleteByExample(TTotalpriceQuery example);

    int deleteByPrimaryKey(String tpId);

    int insert(TTotalprice record);

    int insertSelective(TTotalprice record);

    List<TTotalprice> selectByExample(TTotalpriceQuery example);

    TTotalprice selectByPrimaryKey(String tpId);

    int updateByExampleSelective(@Param("record") TTotalprice record, @Param("example") TTotalpriceQuery example);

    int updateByExample(@Param("record") TTotalprice record, @Param("example") TTotalpriceQuery example);

    int updateByPrimaryKeySelective(TTotalprice record);

    int updateByPrimaryKey(TTotalprice record);
}