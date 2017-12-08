package com.xj.dao;

import com.xj.domain.account.PayList;
import com.xj.domain.account.PayListQuery;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface PayListDao {
    int countByExample(PayListQuery example);

    int deleteByExample(PayListQuery example);

    int deleteByPrimaryKey(String payId);

    int insert(PayList record);

    int insertSelective(PayList record);

    List<PayList> selectByExampleWithBLOBs(PayListQuery example);

    List<PayList> selectByExample(PayListQuery example);

    PayList selectByPrimaryKey(String payId);

    int updateByExampleSelective(@Param("record") PayList record, @Param("example") PayListQuery example);

    int updateByExampleWithBLOBs(@Param("record") PayList record, @Param("example") PayListQuery example);

    int updateByExample(@Param("record") PayList record, @Param("example") PayListQuery example);

    int updateByPrimaryKeySelective(PayList record);

    int updateByPrimaryKeyWithBLOBs(PayList record);

    int updateByPrimaryKey(PayList record);
}