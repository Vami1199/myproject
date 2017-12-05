package com.xj.domain.freight;

import java.io.Serializable;
import java.util.Date;

public class FDetail implements Serializable {
    private String deId;

    /**
     * 其他运费id
     */
    private String deOid;

    /**
     * 运单费
     */
    private Long deTransport;

    /**
     * 滞纳金
     */
    private Long deOverdue;

    /**
     * 延时费
     */
    private Long deOvertime;

    /**
     * 治安费
     */
    private Long deSafely;

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

    public String getDeId() {
        return deId;
    }

    public void setDeId(String deId) {
        this.deId = deId == null ? null : deId.trim();
    }

    public String getDeOid() {
        return deOid;
    }

    public void setDeOid(String deOid) {
        this.deOid = deOid == null ? null : deOid.trim();
    }

    public Long getDeTransport() {
        return deTransport;
    }

    public void setDeTransport(Long deTransport) {
        this.deTransport = deTransport;
    }

    public Long getDeOverdue() {
        return deOverdue;
    }

    public void setDeOverdue(Long deOverdue) {
        this.deOverdue = deOverdue;
    }

    public Long getDeOvertime() {
        return deOvertime;
    }

    public void setDeOvertime(Long deOvertime) {
        this.deOvertime = deOvertime;
    }

    public Long getDeSafely() {
        return deSafely;
    }

    public void setDeSafely(Long deSafely) {
        this.deSafely = deSafely;
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
        sb.append(", deId=").append(deId);
        sb.append(", deOid=").append(deOid);
        sb.append(", deTransport=").append(deTransport);
        sb.append(", deOverdue=").append(deOverdue);
        sb.append(", deOvertime=").append(deOvertime);
        sb.append(", deSafely=").append(deSafely);
        sb.append(", createdate=").append(createdate);
        sb.append(", modifydate=").append(modifydate);
        sb.append(", createby=").append(createby);
        sb.append(", modifyby=").append(modifyby);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}