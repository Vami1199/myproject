package com.xj.domain.land;

import java.io.Serializable;
import java.util.Date;

public class LApply implements Serializable {
    private Integer apId;

    /**
     * 开票日期
     */
    private Date apDate;

    /**
     * 客户id
     */
    private Integer apCustomerid;

    /**
     * 执行单位id
     */
    private String apDepartmentid;

    /**
     * 运输单位
     */
    private String apTransport;

    /**
     * 运输方式
     */
    private Byte apMethod;

    /**
     * 付款方式
     */
    private Byte apPay;

    /**
     * 汇票号
     */
    private String apTicket;

    /**
     * 收款员
     */
    private String apReceiver;

    /**
     * 红蓝标记
     */
    private Byte apFlag;

    /**
     * 经办人
     */
    private String apUser;

    /**
     * 开票员
     */
    private String apTicketer;

    /**
     * 相关合同
     */
    private String apContract;

    /**
     * 状态
     */
    private Byte apState;

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

    public Integer getApId() {
        return apId;
    }

    public void setApId(Integer apId) {
        this.apId = apId;
    }

    public Date getApDate() {
        return apDate;
    }

    public void setApDate(Date apDate) {
        this.apDate = apDate;
    }

    public Integer getApCustomerid() {
        return apCustomerid;
    }

    public void setApCustomerid(Integer apCustomerid) {
        this.apCustomerid = apCustomerid;
    }

    public String getApDepartmentid() {
        return apDepartmentid;
    }

    public void setApDepartmentid(String apDepartmentid) {
        this.apDepartmentid = apDepartmentid == null ? null : apDepartmentid.trim();
    }

    public String getApTransport() {
        return apTransport;
    }

    public void setApTransport(String apTransport) {
        this.apTransport = apTransport == null ? null : apTransport.trim();
    }

    public Byte getApMethod() {
        return apMethod;
    }

    public void setApMethod(Byte apMethod) {
        this.apMethod = apMethod;
    }

    public Byte getApPay() {
        return apPay;
    }

    public void setApPay(Byte apPay) {
        this.apPay = apPay;
    }

    public String getApTicket() {
        return apTicket;
    }

    public void setApTicket(String apTicket) {
        this.apTicket = apTicket == null ? null : apTicket.trim();
    }

    public String getApReceiver() {
        return apReceiver;
    }

    public void setApReceiver(String apReceiver) {
        this.apReceiver = apReceiver == null ? null : apReceiver.trim();
    }

    public Byte getApFlag() {
        return apFlag;
    }

    public void setApFlag(Byte apFlag) {
        this.apFlag = apFlag;
    }

    public String getApUser() {
        return apUser;
    }

    public void setApUser(String apUser) {
        this.apUser = apUser == null ? null : apUser.trim();
    }

    public String getApTicketer() {
        return apTicketer;
    }

    public void setApTicketer(String apTicketer) {
        this.apTicketer = apTicketer == null ? null : apTicketer.trim();
    }

    public String getApContract() {
        return apContract;
    }

    public void setApContract(String apContract) {
        this.apContract = apContract == null ? null : apContract.trim();
    }

    public Byte getApState() {
        return apState;
    }

    public void setApState(Byte apState) {
        this.apState = apState;
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
        sb.append(", apId=").append(apId);
        sb.append(", apDate=").append(apDate);
        sb.append(", apCustomerid=").append(apCustomerid);
        sb.append(", apDepartmentid=").append(apDepartmentid);
        sb.append(", apTransport=").append(apTransport);
        sb.append(", apMethod=").append(apMethod);
        sb.append(", apPay=").append(apPay);
        sb.append(", apTicket=").append(apTicket);
        sb.append(", apReceiver=").append(apReceiver);
        sb.append(", apFlag=").append(apFlag);
        sb.append(", apUser=").append(apUser);
        sb.append(", apTicketer=").append(apTicketer);
        sb.append(", apContract=").append(apContract);
        sb.append(", apState=").append(apState);
        sb.append(", createdate=").append(createdate);
        sb.append(", modifydate=").append(modifydate);
        sb.append(", createby=").append(createby);
        sb.append(", modifyby=").append(modifyby);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}