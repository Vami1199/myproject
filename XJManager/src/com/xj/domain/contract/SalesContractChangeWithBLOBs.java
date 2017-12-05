package com.xj.domain.contract;

import java.io.Serializable;

public class SalesContractChangeWithBLOBs extends SalesContractChange implements Serializable {
    /**
     * 变更描述
     */
    private String scChangedescription;

    /**
     * 备注
     */
    private String scRemark;

    private static final long serialVersionUID = 1L;

    public String getScChangedescription() {
        return scChangedescription;
    }

    public void setScChangedescription(String scChangedescription) {
        this.scChangedescription = scChangedescription == null ? null : scChangedescription.trim();
    }

    public String getScRemark() {
        return scRemark;
    }

    public void setScRemark(String scRemark) {
        this.scRemark = scRemark == null ? null : scRemark.trim();
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", scChangedescription=").append(scChangedescription);
        sb.append(", scRemark=").append(scRemark);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}