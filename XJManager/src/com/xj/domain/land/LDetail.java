package com.xj.domain.land;

import java.io.Serializable;
import java.util.Date;

public class LDetail implements Serializable {
    private Integer apId;

    private Integer deId;

    /**
     * 购煤单id
     */
    private Integer deApid;

    /**
     * 收货地点
     */
    private String deAddress;

    /**
     * 产品名称
     */
    private String deProduct;

    /**
     * 单价
     */
    private Long dePrice;

    /**
     * 数量
     */
    private Long deCount;

    /**
     * 金额
     */
    private Long deTotal;

    /**
     * 运价
     */
    private Long deFreight;

    /**
     * 运费
     */
    private Long deCarriage;

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
    private String deRemark;

    private static final long serialVersionUID = 1L;

    public Integer getApId() {
        return apId;
    }

    public void setApId(Integer apId) {
        this.apId = apId;
    }

    public Integer getDeId() {
        return deId;
    }

    public void setDeId(Integer deId) {
        this.deId = deId;
    }

    public Integer getDeApid() {
        return deApid;
    }

    public void setDeApid(Integer deApid) {
        this.deApid = deApid;
    }

    public String getDeAddress() {
        return deAddress;
    }

    public void setDeAddress(String deAddress) {
        this.deAddress = deAddress == null ? null : deAddress.trim();
    }

    public String getDeProduct() {
        return deProduct;
    }

    public void setDeProduct(String deProduct) {
        this.deProduct = deProduct == null ? null : deProduct.trim();
    }

    public Long getDePrice() {
        return dePrice;
    }

    public void setDePrice(Long dePrice) {
        this.dePrice = dePrice;
    }

    public Long getDeCount() {
        return deCount;
    }

    public void setDeCount(Long deCount) {
        this.deCount = deCount;
    }

    public Long getDeTotal() {
        return deTotal;
    }

    public void setDeTotal(Long deTotal) {
        this.deTotal = deTotal;
    }

    public Long getDeFreight() {
        return deFreight;
    }

    public void setDeFreight(Long deFreight) {
        this.deFreight = deFreight;
    }

    public Long getDeCarriage() {
        return deCarriage;
    }

    public void setDeCarriage(Long deCarriage) {
        this.deCarriage = deCarriage;
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

    public String getDeRemark() {
        return deRemark;
    }

    public void setDeRemark(String deRemark) {
        this.deRemark = deRemark == null ? null : deRemark.trim();
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", apId=").append(apId);
        sb.append(", deId=").append(deId);
        sb.append(", deApid=").append(deApid);
        sb.append(", deAddress=").append(deAddress);
        sb.append(", deProduct=").append(deProduct);
        sb.append(", dePrice=").append(dePrice);
        sb.append(", deCount=").append(deCount);
        sb.append(", deTotal=").append(deTotal);
        sb.append(", deFreight=").append(deFreight);
        sb.append(", deCarriage=").append(deCarriage);
        sb.append(", createdate=").append(createdate);
        sb.append(", modifydate=").append(modifydate);
        sb.append(", createby=").append(createby);
        sb.append(", modifyby=").append(modifyby);
        sb.append(", deRemark=").append(deRemark);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}