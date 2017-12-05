package com.xj.domain.trains;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

public class TAddwagon implements Serializable {
    /**
     * 车号
     */
    private String awNumber;

    /**
     * 车型
     */
    private Byte awType;

    /**
     * 载重
     */
    private BigDecimal awTotal;

    /**
     * 自重
     */
    private BigDecimal awOwn;

    /**
     * 轨道编号
     */
    private Byte awPathway;

    /**
     * 车头id
     */
    private String awAhid;

    /**
     * 日请车id
     */
    private String awDid;

    /**
     * 到站
     */
    private String awEnd;

    /**
     * 收货单位
     */
    private String awCustomer;

    /**
     * 产品名称
     */
    private String awProduct;

    /**
     * 煤质要求
     */
    private String awQuality;

    /**
     * 称重时间
     */
    private String awTime;

    /**
     * 毛重
     */
    private BigDecimal awProbable;

    /**
     * 亏
     */
    private Long awLoss;

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

    private static final long serialVersionUID = 1L;

    public String getAwNumber() {
        return awNumber;
    }

    public void setAwNumber(String awNumber) {
        this.awNumber = awNumber == null ? null : awNumber.trim();
    }

    public Byte getAwType() {
        return awType;
    }

    public void setAwType(Byte awType) {
        this.awType = awType;
    }

    public BigDecimal getAwTotal() {
        return awTotal;
    }

    public void setAwTotal(BigDecimal awTotal) {
        this.awTotal = awTotal;
    }

    public BigDecimal getAwOwn() {
        return awOwn;
    }

    public void setAwOwn(BigDecimal awOwn) {
        this.awOwn = awOwn;
    }

    public Byte getAwPathway() {
        return awPathway;
    }

    public void setAwPathway(Byte awPathway) {
        this.awPathway = awPathway;
    }

    public String getAwAhid() {
        return awAhid;
    }

    public void setAwAhid(String awAhid) {
        this.awAhid = awAhid == null ? null : awAhid.trim();
    }

    public String getAwDid() {
        return awDid;
    }

    public void setAwDid(String awDid) {
        this.awDid = awDid == null ? null : awDid.trim();
    }

    public String getAwEnd() {
        return awEnd;
    }

    public void setAwEnd(String awEnd) {
        this.awEnd = awEnd == null ? null : awEnd.trim();
    }

    public String getAwCustomer() {
        return awCustomer;
    }

    public void setAwCustomer(String awCustomer) {
        this.awCustomer = awCustomer == null ? null : awCustomer.trim();
    }

    public String getAwProduct() {
        return awProduct;
    }

    public void setAwProduct(String awProduct) {
        this.awProduct = awProduct == null ? null : awProduct.trim();
    }

    public String getAwQuality() {
        return awQuality;
    }

    public void setAwQuality(String awQuality) {
        this.awQuality = awQuality == null ? null : awQuality.trim();
    }

    public String getAwTime() {
        return awTime;
    }

    public void setAwTime(String awTime) {
        this.awTime = awTime == null ? null : awTime.trim();
    }

    public BigDecimal getAwProbable() {
        return awProbable;
    }

    public void setAwProbable(BigDecimal awProbable) {
        this.awProbable = awProbable;
    }

    public Long getAwLoss() {
        return awLoss;
    }

    public void setAwLoss(Long awLoss) {
        this.awLoss = awLoss;
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

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", awNumber=").append(awNumber);
        sb.append(", awType=").append(awType);
        sb.append(", awTotal=").append(awTotal);
        sb.append(", awOwn=").append(awOwn);
        sb.append(", awPathway=").append(awPathway);
        sb.append(", awAhid=").append(awAhid);
        sb.append(", awDid=").append(awDid);
        sb.append(", awEnd=").append(awEnd);
        sb.append(", awCustomer=").append(awCustomer);
        sb.append(", awProduct=").append(awProduct);
        sb.append(", awQuality=").append(awQuality);
        sb.append(", awTime=").append(awTime);
        sb.append(", awProbable=").append(awProbable);
        sb.append(", awLoss=").append(awLoss);
        sb.append(", createdate=").append(createdate);
        sb.append(", modifydate=").append(modifydate);
        sb.append(", createby=").append(createby);
        sb.append(", modifyby=").append(modifyby);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}