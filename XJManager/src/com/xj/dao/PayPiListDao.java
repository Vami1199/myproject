package com.xj.dao;

import com.xj.domain.account.PayPiList;
import com.xj.domain.account.PayPiListQuery;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface PayPiListDao {
    int countByExample(PayPiListQuery example);

    int deleteByExample(PayPiListQuery example);

    int deleteByPrimaryKey(Integer payPiId);

    int insert(PayPiList record);

    int insertSelective(PayPiList record);

    List<PayPiList> selectByExample(PayPiListQuery example);

    PayPiList selectByPrimaryKey(Integer payPiId);

    int updateByExampleSelective(@Param("record") PayPiList record, @Param("example") PayPiListQuery example);

    int updateByExample(@Param("record") PayPiList record, @Param("example") PayPiListQuery example);

    int updateByPrimaryKeySelective(PayPiList record);

    int updateByPrimaryKey(PayPiList record);
}