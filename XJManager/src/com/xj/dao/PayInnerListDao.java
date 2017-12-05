package com.xj.dao;

import com.xj.domain.account.PayInnerList;
import com.xj.domain.account.PayInnerListQuery;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface PayInnerListDao {
    int countByExample(PayInnerListQuery example);

    int deleteByExample(PayInnerListQuery example);

    int deleteByPrimaryKey(Integer payInId);

    int insert(PayInnerList record);

    int insertSelective(PayInnerList record);

    List<PayInnerList> selectByExample(PayInnerListQuery example);

    PayInnerList selectByPrimaryKey(Integer payInId);

    int updateByExampleSelective(@Param("record") PayInnerList record, @Param("example") PayInnerListQuery example);

    int updateByExample(@Param("record") PayInnerList record, @Param("example") PayInnerListQuery example);

    int updateByPrimaryKeySelective(PayInnerList record);

    int updateByPrimaryKey(PayInnerList record);
}