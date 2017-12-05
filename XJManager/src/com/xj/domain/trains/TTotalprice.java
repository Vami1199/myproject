package com.xj.domain.trains;

import java.io.Serializable;
import java.util.Date;

public class TTotalprice implements Serializable {
    /**
     * 编号
     */
    private String tpId;

    /**
     * 运输日期
     */
    private Date tpTransporttime;

    /**
     * 火车头id
     */
    private String tpAhid;

    /**
     * 运费总额
     */
    private Long tpTransportprice;

    /**
     * 其他费用
     */
    private Long tpOtherprice;

    /**
     * 合计金额
     */
    private Long tpTotal;

    /**
     * 回执结算
     */
    private Byte tpReceipt;

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

    public String getTpId() {
        return tpId;
    }

    public void setTpId(String tpId) {
        this.tpId = tpId == null ? null : tpId.trim();
    }

    public Date getTpTransporttime() {
        return tpTransporttime;
    }

    public void setTpTransporttime(Date tpTransporttime) {
        this.tpTransporttime = tpTransporttime;
    }

    public String getTpAhid() {
        return tpAhid;
    }

    public void setTpAhid(String tpAhid) {
        this.tpAhid = tpAhid == null ? null : tpAhid.trim();
    }

    public Long getTpTransportprice() {
        return tpTransportprice;
    }

    public void setTpTransportprice(Long tpTransportprice) {
        this.tpTransportprice = tpTransportprice;
    }

    public Long getTpOtherprice() {
        return tpOtherprice;
    }

    public void setTpOtherprice(Long tpOtherprice) {
        this.tpOtherprice = tpOtherprice;
    }

    public Long getTpTotal() {
        return tpTotal;
    }

    public void setTpTotal(Long tpTotal) {
        this.tpTotal = tpTotal;
    }

    public Byte getTpReceipt() {
        return tpReceipt;
    }

    public void setTpReceipt(Byte tpReceipt) {
        this.tpReceipt = tpReceipt;
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
        sb.append(", tpId=").append(tpId);
        sb.append(", tpTransporttime=").append(tpTransporttime);
        sb.append(", tpAhid=").append(tpAhid);
        sb.append(", tpTransportprice=").append(tpTransportprice);
        sb.append(", tpOtherprice=").append(tpOtherprice);
        sb.append(", tpTotal=").append(tpTotal);
        sb.append(", tpReceipt=").append(tpReceipt);
        sb.append(", createdate=").append(createdate);
        sb.append(", modifydate=").append(modifydate);
        sb.append(", createby=").append(createby);
        sb.append(", modifyby=").append(modifyby);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}