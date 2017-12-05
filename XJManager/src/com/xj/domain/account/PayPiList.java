package com.xj.domain.account;

import java.io.Serializable;
import java.util.Date;

public class PayPiList implements Serializable {
    /**
     * 编号
     */
    private Integer payPiId;

    /**
     * 收货单位
     */
    private Integer payPiSale;

    /**
     * 购货单位
     */
    private Integer payPiBuy;

    /**
     * 单位
     */
    private Integer payPiMain;

    /**
     * 日期
     */
    private Date payPiDate;

    /**
     * 项目
     */
    private String payPiProjects;

    /**
     * 不含税收入
     */
    private Long payPiNoIncome;

    /**
     * 购销量
     */
    private Long payPiPurchases;

    /**
     * 综合煤质
     */
    private Long payPiCoalQuality;

    /**
     * 综合售价
     */
    private Long payPiPrice;

    private static final long serialVersionUID = 1L;

    public Integer getPayPiId() {
        return payPiId;
    }

    public void setPayPiId(Integer payPiId) {
        this.payPiId = payPiId;
    }

    public Integer getPayPiSale() {
        return payPiSale;
    }

    public void setPayPiSale(Integer payPiSale) {
        this.payPiSale = payPiSale;
    }

    public Integer getPayPiBuy() {
        return payPiBuy;
    }

    public void setPayPiBuy(Integer payPiBuy) {
        this.payPiBuy = payPiBuy;
    }

    public Integer getPayPiMain() {
        return payPiMain;
    }

    public void setPayPiMain(Integer payPiMain) {
        this.payPiMain = payPiMain;
    }

    public Date getPayPiDate() {
        return payPiDate;
    }

    public void setPayPiDate(Date payPiDate) {
        this.payPiDate = payPiDate;
    }

    public String getPayPiProjects() {
        return payPiProjects;
    }

    public void setPayPiProjects(String payPiProjects) {
        this.payPiProjects = payPiProjects == null ? null : payPiProjects.trim();
    }

    public Long getPayPiNoIncome() {
        return payPiNoIncome;
    }

    public void setPayPiNoIncome(Long payPiNoIncome) {
        this.payPiNoIncome = payPiNoIncome;
    }

    public Long getPayPiPurchases() {
        return payPiPurchases;
    }

    public void setPayPiPurchases(Long payPiPurchases) {
        this.payPiPurchases = payPiPurchases;
    }

    public Long getPayPiCoalQuality() {
        return payPiCoalQuality;
    }

    public void setPayPiCoalQuality(Long payPiCoalQuality) {
        this.payPiCoalQuality = payPiCoalQuality;
    }

    public Long getPayPiPrice() {
        return payPiPrice;
    }

    public void setPayPiPrice(Long payPiPrice) {
        this.payPiPrice = payPiPrice;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", payPiId=").append(payPiId);
        sb.append(", payPiSale=").append(payPiSale);
        sb.append(", payPiBuy=").append(payPiBuy);
        sb.append(", payPiMain=").append(payPiMain);
        sb.append(", payPiDate=").append(payPiDate);
        sb.append(", payPiProjects=").append(payPiProjects);
        sb.append(", payPiNoIncome=").append(payPiNoIncome);
        sb.append(", payPiPurchases=").append(payPiPurchases);
        sb.append(", payPiCoalQuality=").append(payPiCoalQuality);
        sb.append(", payPiPrice=").append(payPiPrice);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}