package com.xj.domain.freight;

import java.io.Serializable;
import java.util.Date;

public class FAdvance implements Serializable {
    private String adId;

    /**
     * 费用项目
     */
    private Byte adType;

    /**
     * 车站
     */
    private Byte adStation;

    /**
     * 预付金额
     */
    private Long adPrice;

    /**
     * 制定人
     */
    private String adUser;

    /**
     * 制定日期
     */
    private Date adDate;

    /**
     * 红蓝单
     */
    private Byte adColor;

    /**
     * 状态
     */
    private Byte adState;

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

    private String adRemark;

    private static final long serialVersionUID = 1L;

    public String getAdId() {
        return adId;
    }

    public void setAdId(String adId) {
        this.adId = adId == null ? null : adId.trim();
    }

    public Byte getAdType() {
        return adType;
    }

    public void setAdType(Byte adType) {
        this.adType = adType;
    }

    public Byte getAdStation() {
        return adStation;
    }

    public void setAdStation(Byte adStation) {
        this.adStation = adStation;
    }

    public Long getAdPrice() {
        return adPrice;
    }

    public void setAdPrice(Long adPrice) {
        this.adPrice = adPrice;
    }

    public String getAdUser() {
        return adUser;
    }

    public void setAdUser(String adUser) {
        this.adUser = adUser == null ? null : adUser.trim();
    }

    public Date getAdDate() {
        return adDate;
    }

    public void setAdDate(Date adDate) {
        this.adDate = adDate;
    }

    public Byte getAdColor() {
        return adColor;
    }

    public void setAdColor(Byte adColor) {
        this.adColor = adColor;
    }

    public Byte getAdState() {
        return adState;
    }

    public void setAdState(Byte adState) {
        this.adState = adState;
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

    public String getAdRemark() {
        return adRemark;
    }

    public void setAdRemark(String adRemark) {
        this.adRemark = adRemark == null ? null : adRemark.trim();
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", adId=").append(adId);
        sb.append(", adType=").append(adType);
        sb.append(", adStation=").append(adStation);
        sb.append(", adPrice=").append(adPrice);
        sb.append(", adUser=").append(adUser);
        sb.append(", adDate=").append(adDate);
        sb.append(", adColor=").append(adColor);
        sb.append(", adState=").append(adState);
        sb.append(", createdate=").append(createdate);
        sb.append(", modifydate=").append(modifydate);
        sb.append(", createby=").append(createby);
        sb.append(", modifyby=").append(modifyby);
        sb.append(", adRemark=").append(adRemark);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}