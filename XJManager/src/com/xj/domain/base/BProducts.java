package com.xj.domain.base;

import java.io.Serializable;
import java.util.Date;

public class BProducts implements Serializable {
    private Integer pId;

    private String pName;

    private Integer pCoaltype;

    private Integer pVarieties;

    private String pMeasurementunit;

    private String pProductionunit;

    private Integer pApplicationrange;

    private Integer pAvailability;

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

    private String pRemark;

    private static final long serialVersionUID = 1L;

    public Integer getpId() {
        return pId;
    }

    public void setpId(Integer pId) {
        this.pId = pId;
    }

    public String getpName() {
        return pName;
    }

    public void setpName(String pName) {
        this.pName = pName == null ? null : pName.trim();
    }

    public Integer getpCoaltype() {
        return pCoaltype;
    }

    public void setpCoaltype(Integer pCoaltype) {
        this.pCoaltype = pCoaltype;
    }

    public Integer getpVarieties() {
        return pVarieties;
    }

    public void setpVarieties(Integer pVarieties) {
        this.pVarieties = pVarieties;
    }

    public String getpMeasurementunit() {
        return pMeasurementunit;
    }

    public void setpMeasurementunit(String pMeasurementunit) {
        this.pMeasurementunit = pMeasurementunit == null ? null : pMeasurementunit.trim();
    }

    public String getpProductionunit() {
        return pProductionunit;
    }

    public void setpProductionunit(String pProductionunit) {
        this.pProductionunit = pProductionunit == null ? null : pProductionunit.trim();
    }

    public Integer getpApplicationrange() {
        return pApplicationrange;
    }

    public void setpApplicationrange(Integer pApplicationrange) {
        this.pApplicationrange = pApplicationrange;
    }

    public Integer getpAvailability() {
        return pAvailability;
    }

    public void setpAvailability(Integer pAvailability) {
        this.pAvailability = pAvailability;
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

    public String getpRemark() {
        return pRemark;
    }

    public void setpRemark(String pRemark) {
        this.pRemark = pRemark == null ? null : pRemark.trim();
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", pId=").append(pId);
        sb.append(", pName=").append(pName);
        sb.append(", pCoaltype=").append(pCoaltype);
        sb.append(", pVarieties=").append(pVarieties);
        sb.append(", pMeasurementunit=").append(pMeasurementunit);
        sb.append(", pProductionunit=").append(pProductionunit);
        sb.append(", pApplicationrange=").append(pApplicationrange);
        sb.append(", pAvailability=").append(pAvailability);
        sb.append(", createdate=").append(createdate);
        sb.append(", modifydate=").append(modifydate);
        sb.append(", createby=").append(createby);
        sb.append(", modifyby=").append(modifyby);
        sb.append(", pRemark=").append(pRemark);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}