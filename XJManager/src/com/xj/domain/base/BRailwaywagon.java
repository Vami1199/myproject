package com.xj.domain.base;

import java.io.Serializable;
import java.util.Date;

public class BRailwaywagon implements Serializable {
    private Integer csId;

    private Integer csType;

    private Integer csLoad;

    private Integer csDeadload;

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

    private static final long serialVersionUID = 1L;

    public Integer getCsId() {
        return csId;
    }

    public void setCsId(Integer csId) {
        this.csId = csId;
    }

    public Integer getCsType() {
        return csType;
    }

    public void setCsType(Integer csType) {
        this.csType = csType;
    }

    public Integer getCsLoad() {
        return csLoad;
    }

    public void setCsLoad(Integer csLoad) {
        this.csLoad = csLoad;
    }

    public Integer getCsDeadload() {
        return csDeadload;
    }

    public void setCsDeadload(Integer csDeadload) {
        this.csDeadload = csDeadload;
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

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", csId=").append(csId);
        sb.append(", csType=").append(csType);
        sb.append(", csLoad=").append(csLoad);
        sb.append(", csDeadload=").append(csDeadload);
        sb.append(", createdate=").append(createdate);
        sb.append(", modifydate=").append(modifydate);
        sb.append(", createby=").append(createby);
        sb.append(", modifyby=").append(modifyby);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}