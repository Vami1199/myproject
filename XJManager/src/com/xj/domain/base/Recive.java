package com.xj.domain.base;

import java.io.Serializable;

public class Recive implements Serializable {
    private String recid;

    private Integer cusid;

    private Integer recCusId;

    private static final long serialVersionUID = 1L;

    public String getRecid() {
        return recid;
    }

    public void setRecid(String recid) {
        this.recid = recid == null ? null : recid.trim();
    }

    public Integer getCusid() {
        return cusid;
    }

    public void setCusid(Integer cusid) {
        this.cusid = cusid;
    }

    public Integer getRecCusId() {
        return recCusId;
    }

    public void setRecCusId(Integer recCusId) {
        this.recCusId = recCusId;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", recid=").append(recid);
        sb.append(", cusid=").append(cusid);
        sb.append(", recCusId=").append(recCusId);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}