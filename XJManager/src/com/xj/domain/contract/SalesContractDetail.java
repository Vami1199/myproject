package com.xj.domain.contract;

import java.io.Serializable;
import java.util.Date;

public class SalesContractDetail implements Serializable {
    private String scdId;

    private String scdScid;

    /**
     * 收货单位
     */
    private String scdReceivingunit;

    /**
     * 发站
     */
    private String scdHairstanding;

    /**
     * 到站
     */
    private String scdArrivestation;

    /**
     * 产品名称
     */
    private String scdProductname;

    /**
     * 质量标准
     */
    private String scdQualitystandard;

    /**
     * 单价
     */
    private Long scdUnitprice;

    /**
     * 指标类型
     */
    private String scdIndextype;

    /**
     * 指标名称
     */
    private String scdIndexname;

    /**
     * 运输方式
     */
    private String scdShippingtype;

    /**
     * 计量单位
     */
    private String scdMeasuringunit;

    /**
     * 发热量（qnet、ar）
     */
    private Long scdCalorificvalue;

    /**
     * 全水份（Mt%）
     */
    private Long scdTotalmoisture;

    /**
     * 挥发份（Vdaf%）
     */
    private Long scdVolatilematter;

    /**
     * 供应总量
     */
    private Long scdSupplytotal;

    /**
     * 一月
     */
    private Long scdJanuary;

    /**
     * 二月
     */
    private Long scdFebruary;

    /**
     * 三月
     */
    private Long scdMarch;

    /**
     * 四月
     */
    private Long scdApril;

    /**
     * 五月
     */
    private Long scdMay;

    /**
     * 六月
     */
    private Long scdJune;

    /**
     * 七月
     */
    private Long scdJuly;

    /**
     * 八月
     */
    private Long scdAugust;

    /**
     * 九月
     */
    private Long scdSeptember;

    /**
     * 十月
     */
    private Long scdOctober;

    /**
     * 十一月
     */
    private Long scdNovember;

    /**
     * 十二月
     */
    private Long scdDecember;

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

    /**
     * 备注
     */
    private String scdRemark;

    private static final long serialVersionUID = 1L;

    public String getScdId() {
        return scdId;
    }

    public void setScdId(String scdId) {
        this.scdId = scdId == null ? null : scdId.trim();
    }

    public String getScdScid() {
        return scdScid;
    }

    public void setScdScid(String scdScid) {
        this.scdScid = scdScid == null ? null : scdScid.trim();
    }

    public String getScdReceivingunit() {
        return scdReceivingunit;
    }

    public void setScdReceivingunit(String scdReceivingunit) {
        this.scdReceivingunit = scdReceivingunit == null ? null : scdReceivingunit.trim();
    }

    public String getScdHairstanding() {
        return scdHairstanding;
    }

    public void setScdHairstanding(String scdHairstanding) {
        this.scdHairstanding = scdHairstanding == null ? null : scdHairstanding.trim();
    }

    public String getScdArrivestation() {
        return scdArrivestation;
    }

    public void setScdArrivestation(String scdArrivestation) {
        this.scdArrivestation = scdArrivestation == null ? null : scdArrivestation.trim();
    }

    public String getScdProductname() {
        return scdProductname;
    }

    public void setScdProductname(String scdProductname) {
        this.scdProductname = scdProductname == null ? null : scdProductname.trim();
    }

    public String getScdQualitystandard() {
        return scdQualitystandard;
    }

    public void setScdQualitystandard(String scdQualitystandard) {
        this.scdQualitystandard = scdQualitystandard == null ? null : scdQualitystandard.trim();
    }

    public Long getScdUnitprice() {
        return scdUnitprice;
    }

    public void setScdUnitprice(Long scdUnitprice) {
        this.scdUnitprice = scdUnitprice;
    }

    public String getScdIndextype() {
        return scdIndextype;
    }

    public void setScdIndextype(String scdIndextype) {
        this.scdIndextype = scdIndextype == null ? null : scdIndextype.trim();
    }

    public String getScdIndexname() {
        return scdIndexname;
    }

    public void setScdIndexname(String scdIndexname) {
        this.scdIndexname = scdIndexname == null ? null : scdIndexname.trim();
    }

    public String getScdShippingtype() {
        return scdShippingtype;
    }

    public void setScdShippingtype(String scdShippingtype) {
        this.scdShippingtype = scdShippingtype == null ? null : scdShippingtype.trim();
    }

    public String getScdMeasuringunit() {
        return scdMeasuringunit;
    }

    public void setScdMeasuringunit(String scdMeasuringunit) {
        this.scdMeasuringunit = scdMeasuringunit == null ? null : scdMeasuringunit.trim();
    }

    public Long getScdCalorificvalue() {
        return scdCalorificvalue;
    }

    public void setScdCalorificvalue(Long scdCalorificvalue) {
        this.scdCalorificvalue = scdCalorificvalue;
    }

    public Long getScdTotalmoisture() {
        return scdTotalmoisture;
    }

    public void setScdTotalmoisture(Long scdTotalmoisture) {
        this.scdTotalmoisture = scdTotalmoisture;
    }

    public Long getScdVolatilematter() {
        return scdVolatilematter;
    }

    public void setScdVolatilematter(Long scdVolatilematter) {
        this.scdVolatilematter = scdVolatilematter;
    }

    public Long getScdSupplytotal() {
        return scdSupplytotal;
    }

    public void setScdSupplytotal(Long scdSupplytotal) {
        this.scdSupplytotal = scdSupplytotal;
    }

    public Long getScdJanuary() {
        return scdJanuary;
    }

    public void setScdJanuary(Long scdJanuary) {
        this.scdJanuary = scdJanuary;
    }

    public Long getScdFebruary() {
        return scdFebruary;
    }

    public void setScdFebruary(Long scdFebruary) {
        this.scdFebruary = scdFebruary;
    }

    public Long getScdMarch() {
        return scdMarch;
    }

    public void setScdMarch(Long scdMarch) {
        this.scdMarch = scdMarch;
    }

    public Long getScdApril() {
        return scdApril;
    }

    public void setScdApril(Long scdApril) {
        this.scdApril = scdApril;
    }

    public Long getScdMay() {
        return scdMay;
    }

    public void setScdMay(Long scdMay) {
        this.scdMay = scdMay;
    }

    public Long getScdJune() {
        return scdJune;
    }

    public void setScdJune(Long scdJune) {
        this.scdJune = scdJune;
    }

    public Long getScdJuly() {
        return scdJuly;
    }

    public void setScdJuly(Long scdJuly) {
        this.scdJuly = scdJuly;
    }

    public Long getScdAugust() {
        return scdAugust;
    }

    public void setScdAugust(Long scdAugust) {
        this.scdAugust = scdAugust;
    }

    public Long getScdSeptember() {
        return scdSeptember;
    }

    public void setScdSeptember(Long scdSeptember) {
        this.scdSeptember = scdSeptember;
    }

    public Long getScdOctober() {
        return scdOctober;
    }

    public void setScdOctober(Long scdOctober) {
        this.scdOctober = scdOctober;
    }

    public Long getScdNovember() {
        return scdNovember;
    }

    public void setScdNovember(Long scdNovember) {
        this.scdNovember = scdNovember;
    }

    public Long getScdDecember() {
        return scdDecember;
    }

    public void setScdDecember(Long scdDecember) {
        this.scdDecember = scdDecember;
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

    public String getScdRemark() {
        return scdRemark;
    }

    public void setScdRemark(String scdRemark) {
        this.scdRemark = scdRemark == null ? null : scdRemark.trim();
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", scdId=").append(scdId);
        sb.append(", scdScid=").append(scdScid);
        sb.append(", scdReceivingunit=").append(scdReceivingunit);
        sb.append(", scdHairstanding=").append(scdHairstanding);
        sb.append(", scdArrivestation=").append(scdArrivestation);
        sb.append(", scdProductname=").append(scdProductname);
        sb.append(", scdQualitystandard=").append(scdQualitystandard);
        sb.append(", scdUnitprice=").append(scdUnitprice);
        sb.append(", scdIndextype=").append(scdIndextype);
        sb.append(", scdIndexname=").append(scdIndexname);
        sb.append(", scdShippingtype=").append(scdShippingtype);
        sb.append(", scdMeasuringunit=").append(scdMeasuringunit);
        sb.append(", scdCalorificvalue=").append(scdCalorificvalue);
        sb.append(", scdTotalmoisture=").append(scdTotalmoisture);
        sb.append(", scdVolatilematter=").append(scdVolatilematter);
        sb.append(", scdSupplytotal=").append(scdSupplytotal);
        sb.append(", scdJanuary=").append(scdJanuary);
        sb.append(", scdFebruary=").append(scdFebruary);
        sb.append(", scdMarch=").append(scdMarch);
        sb.append(", scdApril=").append(scdApril);
        sb.append(", scdMay=").append(scdMay);
        sb.append(", scdJune=").append(scdJune);
        sb.append(", scdJuly=").append(scdJuly);
        sb.append(", scdAugust=").append(scdAugust);
        sb.append(", scdSeptember=").append(scdSeptember);
        sb.append(", scdOctober=").append(scdOctober);
        sb.append(", scdNovember=").append(scdNovember);
        sb.append(", scdDecember=").append(scdDecember);
        sb.append(", createdate=").append(createdate);
        sb.append(", modifydate=").append(modifydate);
        sb.append(", createby=").append(createby);
        sb.append(", modifyby=").append(modifyby);
        sb.append(", scdRemark=").append(scdRemark);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}