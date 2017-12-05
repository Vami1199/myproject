package com.xj.domain.trainsplan;

import java.io.Serializable;
import java.util.Date;

public class PAddrequest implements Serializable {
    private String addId;

    /**
     * 关联的合同id,后面的字段都由合同生成
     */
    private String addContractid;

    /**
     * 到站局别
     */
    private String addArrive;

    /**
     * 结算单位
     */
    private String addPaycompany;

    /**
     * 收货单位
     */
    private String addTakecompany;

    /**
     * 运输起始日期
     */
    private Date addStarttime;

    /**
     * 运输终止日期
     */
    private Date addEndtime;

    /**
     * 发站
     */
    private String addStart;

    /**
     * 到站
     */
    private String addEnd;

    /**
     * 省份
     */
    private String addProvince;

    /**
     * 行业
     */
    private String addIndustry;

    /**
     * 申请车数
     */
    private Integer addTrainnumber;

    /**
     * 申请吨数
     */
    private Long addWerght;

    /**
     * 月请车计划表头
     */
    private String addMid;

    private String addBatch;

    /**
     * 确认车数
     */
    private Integer addRnumber;

    /**
     * 确认吨数
     */
    private Long addRweight;

    /**
     * 实际发车数
     */
    private Integer addRealtrain;

    /**
     * 实际吨数
     */
    private Long addRealweight;

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

    private String addRemark;

    private static final long serialVersionUID = 1L;

    public String getAddId() {
        return addId;
    }

    public void setAddId(String addId) {
        this.addId = addId == null ? null : addId.trim();
    }

    public String getAddContractid() {
        return addContractid;
    }

    public void setAddContractid(String addContractid) {
        this.addContractid = addContractid == null ? null : addContractid.trim();
    }

    public String getAddArrive() {
        return addArrive;
    }

    public void setAddArrive(String addArrive) {
        this.addArrive = addArrive == null ? null : addArrive.trim();
    }

    public String getAddPaycompany() {
        return addPaycompany;
    }

    public void setAddPaycompany(String addPaycompany) {
        this.addPaycompany = addPaycompany == null ? null : addPaycompany.trim();
    }

    public String getAddTakecompany() {
        return addTakecompany;
    }

    public void setAddTakecompany(String addTakecompany) {
        this.addTakecompany = addTakecompany == null ? null : addTakecompany.trim();
    }

    public Date getAddStarttime() {
        return addStarttime;
    }

    public void setAddStarttime(Date addStarttime) {
        this.addStarttime = addStarttime;
    }

    public Date getAddEndtime() {
        return addEndtime;
    }

    public void setAddEndtime(Date addEndtime) {
        this.addEndtime = addEndtime;
    }

    public String getAddStart() {
        return addStart;
    }

    public void setAddStart(String addStart) {
        this.addStart = addStart == null ? null : addStart.trim();
    }

    public String getAddEnd() {
        return addEnd;
    }

    public void setAddEnd(String addEnd) {
        this.addEnd = addEnd == null ? null : addEnd.trim();
    }

    public String getAddProvince() {
        return addProvince;
    }

    public void setAddProvince(String addProvince) {
        this.addProvince = addProvince == null ? null : addProvince.trim();
    }

    public String getAddIndustry() {
        return addIndustry;
    }

    public void setAddIndustry(String addIndustry) {
        this.addIndustry = addIndustry == null ? null : addIndustry.trim();
    }

    public Integer getAddTrainnumber() {
        return addTrainnumber;
    }

    public void setAddTrainnumber(Integer addTrainnumber) {
        this.addTrainnumber = addTrainnumber;
    }

    public Long getAddWerght() {
        return addWerght;
    }

    public void setAddWerght(Long addWerght) {
        this.addWerght = addWerght;
    }

    public String getAddMid() {
        return addMid;
    }

    public void setAddMid(String addMid) {
        this.addMid = addMid == null ? null : addMid.trim();
    }

    public String getAddBatch() {
        return addBatch;
    }

    public void setAddBatch(String addBatch) {
        this.addBatch = addBatch == null ? null : addBatch.trim();
    }

    public Integer getAddRnumber() {
        return addRnumber;
    }

    public void setAddRnumber(Integer addRnumber) {
        this.addRnumber = addRnumber;
    }

    public Long getAddRweight() {
        return addRweight;
    }

    public void setAddRweight(Long addRweight) {
        this.addRweight = addRweight;
    }

    public Integer getAddRealtrain() {
        return addRealtrain;
    }

    public void setAddRealtrain(Integer addRealtrain) {
        this.addRealtrain = addRealtrain;
    }

    public Long getAddRealweight() {
        return addRealweight;
    }

    public void setAddRealweight(Long addRealweight) {
        this.addRealweight = addRealweight;
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

    public String getAddRemark() {
        return addRemark;
    }

    public void setAddRemark(String addRemark) {
        this.addRemark = addRemark == null ? null : addRemark.trim();
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", addId=").append(addId);
        sb.append(", addContractid=").append(addContractid);
        sb.append(", addArrive=").append(addArrive);
        sb.append(", addPaycompany=").append(addPaycompany);
        sb.append(", addTakecompany=").append(addTakecompany);
        sb.append(", addStarttime=").append(addStarttime);
        sb.append(", addEndtime=").append(addEndtime);
        sb.append(", addStart=").append(addStart);
        sb.append(", addEnd=").append(addEnd);
        sb.append(", addProvince=").append(addProvince);
        sb.append(", addIndustry=").append(addIndustry);
        sb.append(", addTrainnumber=").append(addTrainnumber);
        sb.append(", addWerght=").append(addWerght);
        sb.append(", addMid=").append(addMid);
        sb.append(", addBatch=").append(addBatch);
        sb.append(", addRnumber=").append(addRnumber);
        sb.append(", addRweight=").append(addRweight);
        sb.append(", addRealtrain=").append(addRealtrain);
        sb.append(", addRealweight=").append(addRealweight);
        sb.append(", createdate=").append(createdate);
        sb.append(", modifydate=").append(modifydate);
        sb.append(", createby=").append(createby);
        sb.append(", modifyby=").append(modifyby);
        sb.append(", addRemark=").append(addRemark);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}