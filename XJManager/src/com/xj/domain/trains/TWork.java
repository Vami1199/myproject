package com.xj.domain.trains;

import java.io.Serializable;
import java.util.Date;

public class TWork implements Serializable {
    private Integer wId;

    /**
     * 日期
     */
    private Date wDate;

    /**
     * 交班人
     */
    private String wTurner;

    /**
     * 值班
     */
    private String wOnwork;

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

    private String wRemark;

    private static final long serialVersionUID = 1L;

    public Integer getwId() {
        return wId;
    }

    public void setwId(Integer wId) {
        this.wId = wId;
    }

    public Date getwDate() {
        return wDate;
    }

    public void setwDate(Date wDate) {
        this.wDate = wDate;
    }

    public String getwTurner() {
        return wTurner;
    }

    public void setwTurner(String wTurner) {
        this.wTurner = wTurner == null ? null : wTurner.trim();
    }

    public String getwOnwork() {
        return wOnwork;
    }

    public void setwOnwork(String wOnwork) {
        this.wOnwork = wOnwork == null ? null : wOnwork.trim();
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

    public String getwRemark() {
        return wRemark;
    }

    public void setwRemark(String wRemark) {
        this.wRemark = wRemark == null ? null : wRemark.trim();
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", wId=").append(wId);
        sb.append(", wDate=").append(wDate);
        sb.append(", wTurner=").append(wTurner);
        sb.append(", wOnwork=").append(wOnwork);
        sb.append(", createdate=").append(createdate);
        sb.append(", modifydate=").append(modifydate);
        sb.append(", createby=").append(createby);
        sb.append(", modifyby=").append(modifyby);
        sb.append(", wRemark=").append(wRemark);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}