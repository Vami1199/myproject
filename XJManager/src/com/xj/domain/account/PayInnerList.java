package com.xj.domain.account;

import java.io.Serializable;

public class PayInnerList implements Serializable {
    /**
     * 编号
     */
    private Integer payInId;

    /**
     * 商品名称
     */
    private String payInProductName;

    /**
     * 不含税收入
     */
    private Long payInNoIncom;

    /**
     * 购销量
     */
    private Long payInPurchases;

    /**
     * 不含税售价
     */
    private Long payInPrice;

    /**
     * 预结算单编号
     */
    private Integer payPiId;

    /**
     * 补不含税收入
     */
    private Long payInFillNoIncom;

    /**
     * 补不含税购销量
     */
    private Long payInFillPurchases;

    /**
     * 补不含税售价
     */
    private Long payInFillPrice;

    /**
     * 单位
     */
    private Integer payInMain;

    /**
     * 购货单位
     */
    private Integer payInBuy;

    /**
     * 销货单位
     */
    private Integer payInSale;

    private static final long serialVersionUID = 1L;

    public Integer getPayInId() {
        return payInId;
    }

    public void setPayInId(Integer payInId) {
        this.payInId = payInId;
    }

    public String getPayInProductName() {
        return payInProductName;
    }

    public void setPayInProductName(String payInProductName) {
        this.payInProductName = payInProductName == null ? null : payInProductName.trim();
    }

    public Long getPayInNoIncom() {
        return payInNoIncom;
    }

    public void setPayInNoIncom(Long payInNoIncom) {
        this.payInNoIncom = payInNoIncom;
    }

    public Long getPayInPurchases() {
        return payInPurchases;
    }

    public void setPayInPurchases(Long payInPurchases) {
        this.payInPurchases = payInPurchases;
    }

    public Long getPayInPrice() {
        return payInPrice;
    }

    public void setPayInPrice(Long payInPrice) {
        this.payInPrice = payInPrice;
    }

    public Integer getPayPiId() {
        return payPiId;
    }

    public void setPayPiId(Integer payPiId) {
        this.payPiId = payPiId;
    }

    public Long getPayInFillNoIncom() {
        return payInFillNoIncom;
    }

    public void setPayInFillNoIncom(Long payInFillNoIncom) {
        this.payInFillNoIncom = payInFillNoIncom;
    }

    public Long getPayInFillPurchases() {
        return payInFillPurchases;
    }

    public void setPayInFillPurchases(Long payInFillPurchases) {
        this.payInFillPurchases = payInFillPurchases;
    }

    public Long getPayInFillPrice() {
        return payInFillPrice;
    }

    public void setPayInFillPrice(Long payInFillPrice) {
        this.payInFillPrice = payInFillPrice;
    }

    public Integer getPayInMain() {
        return payInMain;
    }

    public void setPayInMain(Integer payInMain) {
        this.payInMain = payInMain;
    }

    public Integer getPayInBuy() {
        return payInBuy;
    }

    public void setPayInBuy(Integer payInBuy) {
        this.payInBuy = payInBuy;
    }

    public Integer getPayInSale() {
        return payInSale;
    }

    public void setPayInSale(Integer payInSale) {
        this.payInSale = payInSale;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", payInId=").append(payInId);
        sb.append(", payInProductName=").append(payInProductName);
        sb.append(", payInNoIncom=").append(payInNoIncom);
        sb.append(", payInPurchases=").append(payInPurchases);
        sb.append(", payInPrice=").append(payInPrice);
        sb.append(", payPiId=").append(payPiId);
        sb.append(", payInFillNoIncom=").append(payInFillNoIncom);
        sb.append(", payInFillPurchases=").append(payInFillPurchases);
        sb.append(", payInFillPrice=").append(payInFillPrice);
        sb.append(", payInMain=").append(payInMain);
        sb.append(", payInBuy=").append(payInBuy);
        sb.append(", payInSale=").append(payInSale);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}