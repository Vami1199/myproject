package com.xj.domain.pay;

import java.io.Serializable;
import java.util.Date;

public class PayList implements Serializable {
    private String payId;

    /**
     * 结算日期
     */
    private Date payDate;

    /**
     * 结算单位
     */
    private Integer payCustomerid;

    /**
     * 收货单位
     */
    private String payReciever;

    /**
     * 发运日期
     */
    private Date payTdate;

    /**
     * 车数
     */
    private Integer payCount;

    /**
     * 矿发吨位
     */
    private Integer payWeight;

    /**
     * 矿发热值
     */
    private Integer payCalorific;

    /**
     * 单价
     */
    private Long payPrice;

    /**
     * 金额
     */
    private Long payTotal;

    /**
     * 专用线费用
     */
    private Long payDedicated;

    /**
     * 运费
     */
    private Long payTransport;

    /**
     * 机车运费
     */
    private Long payTrain;

    /**
     * 运输服务费
     */
    private Long payServe;

    /**
     * 发运单位
     */
    private String payDepartment;

    /**
     * 制作人
     */
    private String payUser;

    /**
     * 审核人
     */
    private String payAuditor;

    /**
     * 审定人
     */
    private String payDecider;

    /**
     * 状态
     */
    private String payState;

    /**
     * text
     */
    private String payRemark;

    private static final long serialVersionUID = 1L;

    public String getPayId() {
        return payId;
    }

    public void setPayId(String payId) {
        this.payId = payId == null ? null : payId.trim();
    }

    public Date getPayDate() {
        return payDate;
    }

    public void setPayDate(Date payDate) {
        this.payDate = payDate;
    }

    public Integer getPayCustomerid() {
        return payCustomerid;
    }

    public void setPayCustomerid(Integer payCustomerid) {
        this.payCustomerid = payCustomerid;
    }

    public String getPayReciever() {
        return payReciever;
    }

    public void setPayReciever(String payReciever) {
        this.payReciever = payReciever == null ? null : payReciever.trim();
    }

    public Date getPayTdate() {
        return payTdate;
    }

    public void setPayTdate(Date payTdate) {
        this.payTdate = payTdate;
    }

    public Integer getPayCount() {
        return payCount;
    }

    public void setPayCount(Integer payCount) {
        this.payCount = payCount;
    }

    public Integer getPayWeight() {
        return payWeight;
    }

    public void setPayWeight(Integer payWeight) {
        this.payWeight = payWeight;
    }

    public Integer getPayCalorific() {
        return payCalorific;
    }

    public void setPayCalorific(Integer payCalorific) {
        this.payCalorific = payCalorific;
    }

    public Long getPayPrice() {
        return payPrice;
    }

    public void setPayPrice(Long payPrice) {
        this.payPrice = payPrice;
    }

    public Long getPayTotal() {
        return payTotal;
    }

    public void setPayTotal(Long payTotal) {
        this.payTotal = payTotal;
    }

    public Long getPayDedicated() {
        return payDedicated;
    }

    public void setPayDedicated(Long payDedicated) {
        this.payDedicated = payDedicated;
    }

    public Long getPayTransport() {
        return payTransport;
    }

    public void setPayTransport(Long payTransport) {
        this.payTransport = payTransport;
    }

    public Long getPayTrain() {
        return payTrain;
    }

    public void setPayTrain(Long payTrain) {
        this.payTrain = payTrain;
    }

    public Long getPayServe() {
        return payServe;
    }

    public void setPayServe(Long payServe) {
        this.payServe = payServe;
    }

    public String getPayDepartment() {
        return payDepartment;
    }

    public void setPayDepartment(String payDepartment) {
        this.payDepartment = payDepartment == null ? null : payDepartment.trim();
    }

    public String getPayUser() {
        return payUser;
    }

    public void setPayUser(String payUser) {
        this.payUser = payUser == null ? null : payUser.trim();
    }

    public String getPayAuditor() {
        return payAuditor;
    }

    public void setPayAuditor(String payAuditor) {
        this.payAuditor = payAuditor == null ? null : payAuditor.trim();
    }

    public String getPayDecider() {
        return payDecider;
    }

    public void setPayDecider(String payDecider) {
        this.payDecider = payDecider == null ? null : payDecider.trim();
    }

    public String getPayState() {
        return payState;
    }

    public void setPayState(String payState) {
        this.payState = payState == null ? null : payState.trim();
    }

    public String getPayRemark() {
        return payRemark;
    }

    public void setPayRemark(String payRemark) {
        this.payRemark = payRemark == null ? null : payRemark.trim();
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", payId=").append(payId);
        sb.append(", payDate=").append(payDate);
        sb.append(", payCustomerid=").append(payCustomerid);
        sb.append(", payReciever=").append(payReciever);
        sb.append(", payTdate=").append(payTdate);
        sb.append(", payCount=").append(payCount);
        sb.append(", payWeight=").append(payWeight);
        sb.append(", payCalorific=").append(payCalorific);
        sb.append(", payPrice=").append(payPrice);
        sb.append(", payTotal=").append(payTotal);
        sb.append(", payDedicated=").append(payDedicated);
        sb.append(", payTransport=").append(payTransport);
        sb.append(", payTrain=").append(payTrain);
        sb.append(", payServe=").append(payServe);
        sb.append(", payDepartment=").append(payDepartment);
        sb.append(", payUser=").append(payUser);
        sb.append(", payAuditor=").append(payAuditor);
        sb.append(", payDecider=").append(payDecider);
        sb.append(", payState=").append(payState);
        sb.append(", payRemark=").append(payRemark);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}