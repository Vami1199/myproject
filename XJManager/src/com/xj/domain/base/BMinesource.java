package com.xj.domain.base;

import java.io.Serializable;
import java.util.Date;

public class BMinesource implements Serializable {
    private Integer sourceId;

    private String sourceName;

    private String sourceCompanyid;

    private String sourceCompanyname;

    private String sourceCompanyshort;

    private Double sourceSulphur;

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

    private String sourceRemark;

    private static final long serialVersionUID = 1L;

    public Integer getSourceId() {
        return sourceId;
    }

    public void setSourceId(Integer sourceId) {
        this.sourceId = sourceId;
    }

    public String getSourceName() {
        return sourceName;
    }

    public void setSourceName(String sourceName) {
        this.sourceName = sourceName == null ? null : sourceName.trim();
    }

    public String getSourceCompanyid() {
        return sourceCompanyid;
    }

    public void setSourceCompanyid(String sourceCompanyid) {
        this.sourceCompanyid = sourceCompanyid == null ? null : sourceCompanyid.trim();
    }

    public String getSourceCompanyname() {
        return sourceCompanyname;
    }

    public void setSourceCompanyname(String sourceCompanyname) {
        this.sourceCompanyname = sourceCompanyname == null ? null : sourceCompanyname.trim();
    }

    public String getSourceCompanyshort() {
        return sourceCompanyshort;
    }

    public void setSourceCompanyshort(String sourceCompanyshort) {
        this.sourceCompanyshort = sourceCompanyshort == null ? null : sourceCompanyshort.trim();
    }

    public Double getSourceSulphur() {
        return sourceSulphur;
    }

    public void setSourceSulphur(Double sourceSulphur) {
        this.sourceSulphur = sourceSulphur;
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

    public String getSourceRemark() {
        return sourceRemark;
    }

    public void setSourceRemark(String sourceRemark) {
        this.sourceRemark = sourceRemark == null ? null : sourceRemark.trim();
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", sourceId=").append(sourceId);
        sb.append(", sourceName=").append(sourceName);
        sb.append(", sourceCompanyid=").append(sourceCompanyid);
        sb.append(", sourceCompanyname=").append(sourceCompanyname);
        sb.append(", sourceCompanyshort=").append(sourceCompanyshort);
        sb.append(", sourceSulphur=").append(sourceSulphur);
        sb.append(", createdate=").append(createdate);
        sb.append(", modifydate=").append(modifydate);
        sb.append(", createby=").append(createby);
        sb.append(", modifyby=").append(modifyby);
        sb.append(", sourceRemark=").append(sourceRemark);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}