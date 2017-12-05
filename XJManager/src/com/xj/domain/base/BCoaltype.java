package com.xj.domain.base;

import java.io.Serializable;

public class BCoaltype implements Serializable {
    private Integer ctId;

    private String ctName;

    private String ctRemark;

    private static final long serialVersionUID = 1L;

    public Integer getCtId() {
        return ctId;
    }

    public void setCtId(Integer ctId) {
        this.ctId = ctId;
    }

    public String getCtName() {
        return ctName;
    }

    public void setCtName(String ctName) {
        this.ctName = ctName == null ? null : ctName.trim();
    }

    public String getCtRemark() {
        return ctRemark;
    }

    public void setCtRemark(String ctRemark) {
        this.ctRemark = ctRemark == null ? null : ctRemark.trim();
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", ctId=").append(ctId);
        sb.append(", ctName=").append(ctName);
        sb.append(", ctRemark=").append(ctRemark);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}