package com.xj.domain.trainsplan;

import java.io.Serializable;
import java.util.Date;

public class PAddnewday implements Serializable {
    private String anId;

    /**
     * 发站
     */
    private String anStart;

    /**
     * 到站
     */
    private String anEnd;

    /**
     * 批号
     */
    private String anBatch;

    /**
     * 矿别
     */
    private String anSource;

    /**
     * 请车数
     */
    private Integer anTrain;

    /**
     * 确认数
     */
    private Integer anRtrain;

    /**
     * 已发数
     */
    private Integer anRnumber;

    /**
     * 已分配数
     */
    private Integer anAllot;

    /**
     * 待分配数
     */
    private Integer anWait;

    /**
     * 实发吨数
     */
    private Long anWeight;

    /**
     * 煤质要求
     */
    private Integer anQuality;

    /**
     * 结算单位
     */
    private String anPaycompany;

    /**
     * 收货单位
     */
    private String anTakecompany;

    private String anDayid;

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

    private String anRemark;

    private static final long serialVersionUID = 1L;

    public String getAnId() {
        return anId;
    }

    public void setAnId(String anId) {
        this.anId = anId == null ? null : anId.trim();
    }

    public String getAnStart() {
        return anStart;
    }

    public void setAnStart(String anStart) {
        this.anStart = anStart == null ? null : anStart.trim();
    }

    public String getAnEnd() {
        return anEnd;
    }

    public void setAnEnd(String anEnd) {
        this.anEnd = anEnd == null ? null : anEnd.trim();
    }

    public String getAnBatch() {
        return anBatch;
    }

    public void setAnBatch(String anBatch) {
        this.anBatch = anBatch == null ? null : anBatch.trim();
    }

    public String getAnSource() {
        return anSource;
    }

    public void setAnSource(String anSource) {
        this.anSource = anSource == null ? null : anSource.trim();
    }

    public Integer getAnTrain() {
        return anTrain;
    }

    public void setAnTrain(Integer anTrain) {
        this.anTrain = anTrain;
    }

    public Integer getAnRtrain() {
        return anRtrain;
    }

    public void setAnRtrain(Integer anRtrain) {
        this.anRtrain = anRtrain;
    }

    public Integer getAnRnumber() {
        return anRnumber;
    }

    public void setAnRnumber(Integer anRnumber) {
        this.anRnumber = anRnumber;
    }

    public Integer getAnAllot() {
        return anAllot;
    }

    public void setAnAllot(Integer anAllot) {
        this.anAllot = anAllot;
    }

    public Integer getAnWait() {
        return anWait;
    }

    public void setAnWait(Integer anWait) {
        this.anWait = anWait;
    }

    public Long getAnWeight() {
        return anWeight;
    }

    public void setAnWeight(Long anWeight) {
        this.anWeight = anWeight;
    }

    public Integer getAnQuality() {
        return anQuality;
    }

    public void setAnQuality(Integer anQuality) {
        this.anQuality = anQuality;
    }

    public String getAnPaycompany() {
        return anPaycompany;
    }

    public void setAnPaycompany(String anPaycompany) {
        this.anPaycompany = anPaycompany == null ? null : anPaycompany.trim();
    }

    public String getAnTakecompany() {
        return anTakecompany;
    }

    public void setAnTakecompany(String anTakecompany) {
        this.anTakecompany = anTakecompany == null ? null : anTakecompany.trim();
    }

    public String getAnDayid() {
        return anDayid;
    }

    public void setAnDayid(String anDayid) {
        this.anDayid = anDayid == null ? null : anDayid.trim();
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

    public String getAnRemark() {
        return anRemark;
    }

    public void setAnRemark(String anRemark) {
        this.anRemark = anRemark == null ? null : anRemark.trim();
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", anId=").append(anId);
        sb.append(", anStart=").append(anStart);
        sb.append(", anEnd=").append(anEnd);
        sb.append(", anBatch=").append(anBatch);
        sb.append(", anSource=").append(anSource);
        sb.append(", anTrain=").append(anTrain);
        sb.append(", anRtrain=").append(anRtrain);
        sb.append(", anRnumber=").append(anRnumber);
        sb.append(", anAllot=").append(anAllot);
        sb.append(", anWait=").append(anWait);
        sb.append(", anWeight=").append(anWeight);
        sb.append(", anQuality=").append(anQuality);
        sb.append(", anPaycompany=").append(anPaycompany);
        sb.append(", anTakecompany=").append(anTakecompany);
        sb.append(", anDayid=").append(anDayid);
        sb.append(", createdate=").append(createdate);
        sb.append(", modifydate=").append(modifydate);
        sb.append(", createby=").append(createby);
        sb.append(", modifyby=").append(modifyby);
        sb.append(", anRemark=").append(anRemark);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}