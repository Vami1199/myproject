package com.xj.domain.base;

import java.io.Serializable;
import java.util.Date;

public class BRailwaysubbureau implements Serializable {
    private Integer subbureauId;

    private String subbureauName;

    private Integer subbureauAdminid;

    private Byte subbureauIskey;

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

    private String subbureauRemark;

    private static final long serialVersionUID = 1L;

    public Integer getSubbureauId() {
        return subbureauId;
    }

    public void setSubbureauId(Integer subbureauId) {
        this.subbureauId = subbureauId;
    }

    public String getSubbureauName() {
        return subbureauName;
    }

    public void setSubbureauName(String subbureauName) {
        this.subbureauName = subbureauName == null ? null : subbureauName.trim();
    }

    public Integer getSubbureauAdminid() {
        return subbureauAdminid;
    }

    public void setSubbureauAdminid(Integer subbureauAdminid) {
        this.subbureauAdminid = subbureauAdminid;
    }

    public Byte getSubbureauIskey() {
        return subbureauIskey;
    }

    public void setSubbureauIskey(Byte subbureauIskey) {
        this.subbureauIskey = subbureauIskey;
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

    public String getSubbureauRemark() {
        return subbureauRemark;
    }

    public void setSubbureauRemark(String subbureauRemark) {
        this.subbureauRemark = subbureauRemark == null ? null : subbureauRemark.trim();
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", subbureauId=").append(subbureauId);
        sb.append(", subbureauName=").append(subbureauName);
        sb.append(", subbureauAdminid=").append(subbureauAdminid);
        sb.append(", subbureauIskey=").append(subbureauIskey);
        sb.append(", createdate=").append(createdate);
        sb.append(", modifydate=").append(modifydate);
        sb.append(", createby=").append(createby);
        sb.append(", modifyby=").append(modifyby);
        sb.append(", subbureauRemark=").append(subbureauRemark);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}