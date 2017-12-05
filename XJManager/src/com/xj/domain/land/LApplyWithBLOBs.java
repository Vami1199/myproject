package com.xj.domain.land;

import java.io.Serializable;

public class LApplyWithBLOBs extends LApply implements Serializable {
    /**
     * 提货期限
     */
    private String apGettime;

    private String apRemark;

    private static final long serialVersionUID = 1L;

    public String getApGettime() {
        return apGettime;
    }

    public void setApGettime(String apGettime) {
        this.apGettime = apGettime == null ? null : apGettime.trim();
    }

    public String getApRemark() {
        return apRemark;
    }

    public void setApRemark(String apRemark) {
        this.apRemark = apRemark == null ? null : apRemark.trim();
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", apGettime=").append(apGettime);
        sb.append(", apRemark=").append(apRemark);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}