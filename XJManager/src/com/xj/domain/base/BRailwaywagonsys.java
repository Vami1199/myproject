package com.xj.domain.base;

import java.io.Serializable;

public class BRailwaywagonsys implements Serializable {
    private String rwId;

    /**
     * 车皮编号前缀
     */
    private Integer rwStart;

    /**
     * 前缀位数
     */
    private Integer rwSnum;

    /**
     * 车皮类型
     */
    private Byte rwType;

    /**
     * 载重
     */
    private Float rwWeight;

    /**
     * 自重
     */
    private Float rwSelf;

    private String rwRemark;

    private static final long serialVersionUID = 1L;

    public String getRwId() {
        return rwId;
    }

    public void setRwId(String rwId) {
        this.rwId = rwId == null ? null : rwId.trim();
    }

    public Integer getRwStart() {
        return rwStart;
    }

    public void setRwStart(Integer rwStart) {
        this.rwStart = rwStart;
    }

    public Integer getRwSnum() {
        return rwSnum;
    }

    public void setRwSnum(Integer rwSnum) {
        this.rwSnum = rwSnum;
    }

    public Byte getRwType() {
        return rwType;
    }

    public void setRwType(Byte rwType) {
        this.rwType = rwType;
    }

    public Float getRwWeight() {
        return rwWeight;
    }

    public void setRwWeight(Float rwWeight) {
        this.rwWeight = rwWeight;
    }

    public Float getRwSelf() {
        return rwSelf;
    }

    public void setRwSelf(Float rwSelf) {
        this.rwSelf = rwSelf;
    }

    public String getRwRemark() {
        return rwRemark;
    }

    public void setRwRemark(String rwRemark) {
        this.rwRemark = rwRemark == null ? null : rwRemark.trim();
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", rwId=").append(rwId);
        sb.append(", rwStart=").append(rwStart);
        sb.append(", rwSnum=").append(rwSnum);
        sb.append(", rwType=").append(rwType);
        sb.append(", rwWeight=").append(rwWeight);
        sb.append(", rwSelf=").append(rwSelf);
        sb.append(", rwRemark=").append(rwRemark);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}