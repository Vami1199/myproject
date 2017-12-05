package com.xj.domain.trains;

import java.io.Serializable;

public class TAddheadWithBLOBs extends TAddhead implements Serializable {
    /**
     * 进矿说明
     */
    private String ahDeclare;

    /**
     * 备注
     */
    private String ahRemark;

    private static final long serialVersionUID = 1L;

    public String getAhDeclare() {
        return ahDeclare;
    }

    public void setAhDeclare(String ahDeclare) {
        this.ahDeclare = ahDeclare == null ? null : ahDeclare.trim();
    }

    public String getAhRemark() {
        return ahRemark;
    }

    public void setAhRemark(String ahRemark) {
        this.ahRemark = ahRemark == null ? null : ahRemark.trim();
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", ahDeclare=").append(ahDeclare);
        sb.append(", ahRemark=").append(ahRemark);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}