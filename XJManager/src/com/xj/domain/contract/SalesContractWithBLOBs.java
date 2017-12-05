package com.xj.domain.contract;

import java.io.Serializable;

public class SalesContractWithBLOBs extends SalesContract implements Serializable {
    /**
     * 质量数量验收标准及方法
     */
    private String scQualityquantityacceptancecriteriamethods;

    /**
     * 违约责任
     */
    private String scResponsibilitybreach;

    /**
     * 纠纷处理
     */
    private String scDisputesettlement;

    /**
     * 备注
     */
    private String scRemark;

    private static final long serialVersionUID = 1L;

    public String getScQualityquantityacceptancecriteriamethods() {
        return scQualityquantityacceptancecriteriamethods;
    }

    public void setScQualityquantityacceptancecriteriamethods(String scQualityquantityacceptancecriteriamethods) {
        this.scQualityquantityacceptancecriteriamethods = scQualityquantityacceptancecriteriamethods == null ? null : scQualityquantityacceptancecriteriamethods.trim();
    }

    public String getScResponsibilitybreach() {
        return scResponsibilitybreach;
    }

    public void setScResponsibilitybreach(String scResponsibilitybreach) {
        this.scResponsibilitybreach = scResponsibilitybreach == null ? null : scResponsibilitybreach.trim();
    }

    public String getScDisputesettlement() {
        return scDisputesettlement;
    }

    public void setScDisputesettlement(String scDisputesettlement) {
        this.scDisputesettlement = scDisputesettlement == null ? null : scDisputesettlement.trim();
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
        sb.append(", scQualityquantityacceptancecriteriamethods=").append(scQualityquantityacceptancecriteriamethods);
        sb.append(", scResponsibilitybreach=").append(scResponsibilitybreach);
        sb.append(", scDisputesettlement=").append(scDisputesettlement);
        sb.append(", scRemark=").append(scRemark);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}