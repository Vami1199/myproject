package com.xj.domain.freight;

import java.io.Serializable;
import java.util.Date;

public class FOther implements Serializable {
    private String oId;

    /**
     * 其他费用
     */
    private Date oDate;

    /**
     * 车站
     */
    private Byte oStation;

    /**
     * 制定人
     */
    private String oUser;

    /**
     * 制定日期
     */
    private Date oMakedate;

    /**
     * 红蓝单
     */
    private Byte oColor;

    /**
     * 状态
     */
    private Byte oState;

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

    private String oRemark;

    private static final long serialVersionUID = 1L;

    public String getoId() {
        return oId;
    }

    public void setoId(String oId) {
        this.oId = oId == null ? null : oId.trim();
    }

    public Date getoDate() {
        return oDate;
    }

    public void setoDate(Date oDate) {
        this.oDate = oDate;
    }

    public Byte getoStation() {
        return oStation;
    }

    public void setoStation(Byte oStation) {
        this.oStation = oStation;
    }

    public String getoUser() {
        return oUser;
    }

    public void setoUser(String oUser) {
        this.oUser = oUser == null ? null : oUser.trim();
    }

    public Date getoMakedate() {
        return oMakedate;
    }

    public void setoMakedate(Date oMakedate) {
        this.oMakedate = oMakedate;
    }

    public Byte getoColor() {
        return oColor;
    }

    public void setoColor(Byte oColor) {
        this.oColor = oColor;
    }

    public Byte getoState() {
        return oState;
    }

    public void setoState(Byte oState) {
        this.oState = oState;
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

    public String getoRemark() {
        return oRemark;
    }

    public void setoRemark(String oRemark) {
        this.oRemark = oRemark == null ? null : oRemark.trim();
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", oId=").append(oId);
        sb.append(", oDate=").append(oDate);
        sb.append(", oStation=").append(oStation);
        sb.append(", oUser=").append(oUser);
        sb.append(", oMakedate=").append(oMakedate);
        sb.append(", oColor=").append(oColor);
        sb.append(", oState=").append(oState);
        sb.append(", createdate=").append(createdate);
        sb.append(", modifydate=").append(modifydate);
        sb.append(", createby=").append(createby);
        sb.append(", modifyby=").append(modifyby);
        sb.append(", oRemark=").append(oRemark);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}