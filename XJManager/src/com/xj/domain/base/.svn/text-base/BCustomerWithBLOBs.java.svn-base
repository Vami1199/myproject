package com.xj.domain.base;

import java.io.Serializable;

public class BCustomerWithBLOBs extends BCustomer implements Serializable {
    private String cQuality;

    private String cCreditdeclare;

    private String cRemark;

    private static final long serialVersionUID = 1L;

    public String getcQuality() {
        return cQuality;
    }

    public void setcQuality(String cQuality) {
        this.cQuality = cQuality == null ? null : cQuality.trim();
    }

    public String getcCreditdeclare() {
        return cCreditdeclare;
    }

    public void setcCreditdeclare(String cCreditdeclare) {
        this.cCreditdeclare = cCreditdeclare == null ? null : cCreditdeclare.trim();
    }

    public String getcRemark() {
        return cRemark;
    }

    public void setcRemark(String cRemark) {
        this.cRemark = cRemark == null ? null : cRemark.trim();
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", cQuality=").append(cQuality);
        sb.append(", cCreditdeclare=").append(cCreditdeclare);
        sb.append(", cRemark=").append(cRemark);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}