package com.xj.domain.assay;

import java.io.Serializable;
import java.util.Date;

public class ASampling implements Serializable {
    private String spId;

    /**
     * 矿别
     */
    private String spSource;

    /**
     * 产品
     */
    private String spProduct;

    /**
     * 批次
     */
    private String spBatch;

    /**
     * 吨数
     */
    private Integer spWeight;

    /**
     * 车数
     */
    private Integer spCount;

    /**
     * 采样地
     */
    private String spAddress;

    /**
     * 生产单位
     */
    private String spDepartment;

    /**
     * 班次
     */
    private Byte spClasses;

    /**
     * 主采煤层
     */
    private String spMain;

    /**
     * 含矸率
     */
    private Integer spGangue;

    /**
     * 收货单位
     */
    private String spReciever;

    /**
     * 采样人
     */
    private String spCollecter;

    /**
     * 制样人
     */
    private String spProducer;

    /**
     * 采样开始时间
     */
    private Date spCstart;

    /**
     * 采样结束时间
     */
    private Date spCend;

    /**
     * 制样开始时间
     */
    private Date spPstart;

    /**
     * 制样结束时间
     */
    private Date spPend;

    /**
     * 正常
     */
    private Byte spFlag;

    /**
     * 制定人
     */
    private String spUser;

    /**
     * 制定日期
     */
    private Date spDate;

    /**
     * 填化验单时间
     */
    private Date spWrite;

    /**
     * 审核时间
     */
    private Date spExamine;

    /**
     * 取化验单时间
     */
    private Date spGet;

    /**
     * 填单人
     */
    private String spWriter;

    /**
     * 审核人
     */
    private String spAuditor;

    /**
     * 取件人
     */
    private String spConsignee;

    /**
     * 化验单状态
     */
    private Byte spState;

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

    private String spRemark;

    private static final long serialVersionUID = 1L;

    public String getSpId() {
        return spId;
    }

    public void setSpId(String spId) {
        this.spId = spId == null ? null : spId.trim();
    }

    public String getSpSource() {
        return spSource;
    }

    public void setSpSource(String spSource) {
        this.spSource = spSource == null ? null : spSource.trim();
    }

    public String getSpProduct() {
        return spProduct;
    }

    public void setSpProduct(String spProduct) {
        this.spProduct = spProduct == null ? null : spProduct.trim();
    }

    public String getSpBatch() {
        return spBatch;
    }

    public void setSpBatch(String spBatch) {
        this.spBatch = spBatch == null ? null : spBatch.trim();
    }

    public Integer getSpWeight() {
        return spWeight;
    }

    public void setSpWeight(Integer spWeight) {
        this.spWeight = spWeight;
    }

    public Integer getSpCount() {
        return spCount;
    }

    public void setSpCount(Integer spCount) {
        this.spCount = spCount;
    }

    public String getSpAddress() {
        return spAddress;
    }

    public void setSpAddress(String spAddress) {
        this.spAddress = spAddress == null ? null : spAddress.trim();
    }

    public String getSpDepartment() {
        return spDepartment;
    }

    public void setSpDepartment(String spDepartment) {
        this.spDepartment = spDepartment == null ? null : spDepartment.trim();
    }

    public Byte getSpClasses() {
        return spClasses;
    }

    public void setSpClasses(Byte spClasses) {
        this.spClasses = spClasses;
    }

    public String getSpMain() {
        return spMain;
    }

    public void setSpMain(String spMain) {
        this.spMain = spMain == null ? null : spMain.trim();
    }

    public Integer getSpGangue() {
        return spGangue;
    }

    public void setSpGangue(Integer spGangue) {
        this.spGangue = spGangue;
    }

    public String getSpReciever() {
        return spReciever;
    }

    public void setSpReciever(String spReciever) {
        this.spReciever = spReciever == null ? null : spReciever.trim();
    }

    public String getSpCollecter() {
        return spCollecter;
    }

    public void setSpCollecter(String spCollecter) {
        this.spCollecter = spCollecter == null ? null : spCollecter.trim();
    }

    public String getSpProducer() {
        return spProducer;
    }

    public void setSpProducer(String spProducer) {
        this.spProducer = spProducer == null ? null : spProducer.trim();
    }

    public Date getSpCstart() {
        return spCstart;
    }

    public void setSpCstart(Date spCstart) {
        this.spCstart = spCstart;
    }

    public Date getSpCend() {
        return spCend;
    }

    public void setSpCend(Date spCend) {
        this.spCend = spCend;
    }

    public Date getSpPstart() {
        return spPstart;
    }

    public void setSpPstart(Date spPstart) {
        this.spPstart = spPstart;
    }

    public Date getSpPend() {
        return spPend;
    }

    public void setSpPend(Date spPend) {
        this.spPend = spPend;
    }

    public Byte getSpFlag() {
        return spFlag;
    }

    public void setSpFlag(Byte spFlag) {
        this.spFlag = spFlag;
    }

    public String getSpUser() {
        return spUser;
    }

    public void setSpUser(String spUser) {
        this.spUser = spUser == null ? null : spUser.trim();
    }

    public Date getSpDate() {
        return spDate;
    }

    public void setSpDate(Date spDate) {
        this.spDate = spDate;
    }

    public Date getSpWrite() {
        return spWrite;
    }

    public void setSpWrite(Date spWrite) {
        this.spWrite = spWrite;
    }

    public Date getSpExamine() {
        return spExamine;
    }

    public void setSpExamine(Date spExamine) {
        this.spExamine = spExamine;
    }

    public Date getSpGet() {
        return spGet;
    }

    public void setSpGet(Date spGet) {
        this.spGet = spGet;
    }

    public String getSpWriter() {
        return spWriter;
    }

    public void setSpWriter(String spWriter) {
        this.spWriter = spWriter == null ? null : spWriter.trim();
    }

    public String getSpAuditor() {
        return spAuditor;
    }

    public void setSpAuditor(String spAuditor) {
        this.spAuditor = spAuditor == null ? null : spAuditor.trim();
    }

    public String getSpConsignee() {
        return spConsignee;
    }

    public void setSpConsignee(String spConsignee) {
        this.spConsignee = spConsignee == null ? null : spConsignee.trim();
    }

    public Byte getSpState() {
        return spState;
    }

    public void setSpState(Byte spState) {
        this.spState = spState;
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

    public String getSpRemark() {
        return spRemark;
    }

    public void setSpRemark(String spRemark) {
        this.spRemark = spRemark == null ? null : spRemark.trim();
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", spId=").append(spId);
        sb.append(", spSource=").append(spSource);
        sb.append(", spProduct=").append(spProduct);
        sb.append(", spBatch=").append(spBatch);
        sb.append(", spWeight=").append(spWeight);
        sb.append(", spCount=").append(spCount);
        sb.append(", spAddress=").append(spAddress);
        sb.append(", spDepartment=").append(spDepartment);
        sb.append(", spClasses=").append(spClasses);
        sb.append(", spMain=").append(spMain);
        sb.append(", spGangue=").append(spGangue);
        sb.append(", spReciever=").append(spReciever);
        sb.append(", spCollecter=").append(spCollecter);
        sb.append(", spProducer=").append(spProducer);
        sb.append(", spCstart=").append(spCstart);
        sb.append(", spCend=").append(spCend);
        sb.append(", spPstart=").append(spPstart);
        sb.append(", spPend=").append(spPend);
        sb.append(", spFlag=").append(spFlag);
        sb.append(", spUser=").append(spUser);
        sb.append(", spDate=").append(spDate);
        sb.append(", spWrite=").append(spWrite);
        sb.append(", spExamine=").append(spExamine);
        sb.append(", spGet=").append(spGet);
        sb.append(", spWriter=").append(spWriter);
        sb.append(", spAuditor=").append(spAuditor);
        sb.append(", spConsignee=").append(spConsignee);
        sb.append(", spState=").append(spState);
        sb.append(", createdate=").append(createdate);
        sb.append(", modifydate=").append(modifydate);
        sb.append(", createby=").append(createby);
        sb.append(", modifyby=").append(modifyby);
        sb.append(", spRemark=").append(spRemark);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}