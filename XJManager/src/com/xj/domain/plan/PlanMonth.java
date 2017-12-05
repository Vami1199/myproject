package com.xj.domain.plan;

import java.io.Serializable;
import java.util.Date;

public class PlanMonth implements Serializable {
    private String mId;

    /**
     * 年度
     */
    private Integer mYear;

    /**
     * 月份
     */
    private Integer mMonth;

    /**
     * 计划类型
     */
    private Byte mPlantype;

    /**
     * 计划销量
     */
    private Integer mCount;

    /**
     * 运输方式
     */
    private Byte mTransport;

    /**
     * 指定人
     */
    private String yUser;

    /**
     * 指定日期
     */
    private Date yDate;

    /**
     * 制定部门
     */
    private String yDepartment;

    /**
     * 状态
     */
    private Byte yState;

    /**
     * 创建日期
     */
    private Date createdate;

    /**
     * 修改日期
     */
    private Date modifydate;

    /**
     * 创建人
     */
    private String createby;

    /**
     * 修改人
     */
    private String modifyby;

    private String yRemark;

    private static final long serialVersionUID = 1L;

    public String getmId() {
        return mId;
    }

    public void setmId(String mId) {
        this.mId = mId == null ? null : mId.trim();
    }

    public Integer getmYear() {
        return mYear;
    }

    public void setmYear(Integer mYear) {
        this.mYear = mYear;
    }

    public Integer getmMonth() {
        return mMonth;
    }

    public void setmMonth(Integer mMonth) {
        this.mMonth = mMonth;
    }

    public Byte getmPlantype() {
        return mPlantype;
    }

    public void setmPlantype(Byte mPlantype) {
        this.mPlantype = mPlantype;
    }

    public Integer getmCount() {
        return mCount;
    }

    public void setmCount(Integer mCount) {
        this.mCount = mCount;
    }

    public Byte getmTransport() {
        return mTransport;
    }

    public void setmTransport(Byte mTransport) {
        this.mTransport = mTransport;
    }

    public String getyUser() {
        return yUser;
    }

    public void setyUser(String yUser) {
        this.yUser = yUser == null ? null : yUser.trim();
    }

    public Date getyDate() {
        return yDate;
    }

    public void setyDate(Date yDate) {
        this.yDate = yDate;
    }

    public String getyDepartment() {
        return yDepartment;
    }

    public void setyDepartment(String yDepartment) {
        this.yDepartment = yDepartment == null ? null : yDepartment.trim();
    }

    public Byte getyState() {
        return yState;
    }

    public void setyState(Byte yState) {
        this.yState = yState;
    }

    public Date getCreatedate() {
        return createdate;
    }

    public void setCreatedate(Date createdate) {
        this.createdate = createdate;
    }

    public Date getModifydate() {
        return modifydate;
    }

    public void setModifydate(Date modifydate) {
        this.modifydate = modifydate;
    }

    public String getCreateby() {
        return createby;
    }

    public void setCreateby(String createby) {
        this.createby = createby == null ? null : createby.trim();
    }

    public String getModifyby() {
        return modifyby;
    }

    public void setModifyby(String modifyby) {
        this.modifyby = modifyby == null ? null : modifyby.trim();
    }

    public String getyRemark() {
        return yRemark;
    }

    public void setyRemark(String yRemark) {
        this.yRemark = yRemark == null ? null : yRemark.trim();
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", mId=").append(mId);
        sb.append(", mYear=").append(mYear);
        sb.append(", mMonth=").append(mMonth);
        sb.append(", mPlantype=").append(mPlantype);
        sb.append(", mCount=").append(mCount);
        sb.append(", mTransport=").append(mTransport);
        sb.append(", yUser=").append(yUser);
        sb.append(", yDate=").append(yDate);
        sb.append(", yDepartment=").append(yDepartment);
        sb.append(", yState=").append(yState);
        sb.append(", createdate=").append(createdate);
        sb.append(", modifydate=").append(modifydate);
        sb.append(", createby=").append(createby);
        sb.append(", modifyby=").append(modifyby);
        sb.append(", yRemark=").append(yRemark);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}