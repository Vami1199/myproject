package com.xj.domain.land;

import java.io.Serializable;
import java.util.Date;

public class LWeight implements Serializable {
    private Integer eId;

    /**
     * 购煤单ID
     */
    private Integer eApplyid;

    /**
     * 空车过磅日期
     */
    private Date eEmptydate;

    /**
     * 重车过磅日期
     */
    private Date eFulldate;

    /**
     * 矿别
     */
    private String eSource;

    /**
     * 订单类型
     */
    private Byte eOrder;

    /**
     * 订单编号
     */
    private String eOrdernum;

    /**
     * 客户id
     */
    private Integer eCustomerid;

    /**
     * 收货人
     */
    private String eReciever;

    /**
     * 发往地点
     */
    private String eBourn;

    /**
     * 港站
     */
    private Byte eHarbor;

    /**
     * 运输类型
     */
    private Byte eType;

    /**
     * 运输里程
     */
    private Integer eLength;

    /**
     * 运价
     */
    private Long ePrice;

    /**
     * 过磅物品
     */
    private Byte eGoods;

    /**
     * 产品名称
     */
    private Byte eProduct;

    /**
     * 计量单位
     */
    private String eUnit;

    /**
     * 累计发煤量
     */
    private Integer eTotalnum;

    /**
     * 订单结余量
     */
    private Integer eSurplus;

    /**
     * 库房
     */
    private String eEntrepot;

    /**
     * 空车称重时间
     */
    private String eEmptytime;

    /**
     * 重车称重时间
     */
    private String eFulltime;

    /**
     * 车型
     */
    private String eCartype;

    /**
     * 车号
     */
    private String eCarnum;

    /**
     * 载重
     */
    private Integer eWeight;

    /**
     * 皮重
     */
    private Integer eWargon;

    /**
     * 运输单位
     */
    private String eTransport;

    /**
     * 承运人
     */
    private String eUser;

    /**
     * 司磅员
     */
    private String eOperator;

    /**
     * 监察员
     */
    private String eInspector;

    /**
     * 红蓝标记
     */
    private Byte eFlag;

    /**
     * 记账状态
     */
    private Byte eState;

    /**
     * 磅单状态
     */
    private Byte eCondition;

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

    private String eRemark;

    private static final long serialVersionUID = 1L;

    public Integer geteId() {
        return eId;
    }

    public void seteId(Integer eId) {
        this.eId = eId;
    }

    public Integer geteApplyid() {
        return eApplyid;
    }

    public void seteApplyid(Integer eApplyid) {
        this.eApplyid = eApplyid;
    }

    public Date geteEmptydate() {
        return eEmptydate;
    }

    public void seteEmptydate(Date eEmptydate) {
        this.eEmptydate = eEmptydate;
    }

    public Date geteFulldate() {
        return eFulldate;
    }

    public void seteFulldate(Date eFulldate) {
        this.eFulldate = eFulldate;
    }

    public String geteSource() {
        return eSource;
    }

    public void seteSource(String eSource) {
        this.eSource = eSource == null ? null : eSource.trim();
    }

    public Byte geteOrder() {
        return eOrder;
    }

    public void seteOrder(Byte eOrder) {
        this.eOrder = eOrder;
    }

    public String geteOrdernum() {
        return eOrdernum;
    }

    public void seteOrdernum(String eOrdernum) {
        this.eOrdernum = eOrdernum == null ? null : eOrdernum.trim();
    }

    public Integer geteCustomerid() {
        return eCustomerid;
    }

    public void seteCustomerid(Integer eCustomerid) {
        this.eCustomerid = eCustomerid;
    }

    public String geteReciever() {
        return eReciever;
    }

    public void seteReciever(String eReciever) {
        this.eReciever = eReciever == null ? null : eReciever.trim();
    }

    public String geteBourn() {
        return eBourn;
    }

    public void seteBourn(String eBourn) {
        this.eBourn = eBourn == null ? null : eBourn.trim();
    }

    public Byte geteHarbor() {
        return eHarbor;
    }

    public void seteHarbor(Byte eHarbor) {
        this.eHarbor = eHarbor;
    }

    public Byte geteType() {
        return eType;
    }

    public void seteType(Byte eType) {
        this.eType = eType;
    }

    public Integer geteLength() {
        return eLength;
    }

    public void seteLength(Integer eLength) {
        this.eLength = eLength;
    }

    public Long getePrice() {
        return ePrice;
    }

    public void setePrice(Long ePrice) {
        this.ePrice = ePrice;
    }

    public Byte geteGoods() {
        return eGoods;
    }

    public void seteGoods(Byte eGoods) {
        this.eGoods = eGoods;
    }

    public Byte geteProduct() {
        return eProduct;
    }

    public void seteProduct(Byte eProduct) {
        this.eProduct = eProduct;
    }

    public String geteUnit() {
        return eUnit;
    }

    public void seteUnit(String eUnit) {
        this.eUnit = eUnit == null ? null : eUnit.trim();
    }

    public Integer geteTotalnum() {
        return eTotalnum;
    }

    public void seteTotalnum(Integer eTotalnum) {
        this.eTotalnum = eTotalnum;
    }

    public Integer geteSurplus() {
        return eSurplus;
    }

    public void seteSurplus(Integer eSurplus) {
        this.eSurplus = eSurplus;
    }

    public String geteEntrepot() {
        return eEntrepot;
    }

    public void seteEntrepot(String eEntrepot) {
        this.eEntrepot = eEntrepot == null ? null : eEntrepot.trim();
    }

    public String geteEmptytime() {
        return eEmptytime;
    }

    public void seteEmptytime(String eEmptytime) {
        this.eEmptytime = eEmptytime == null ? null : eEmptytime.trim();
    }

    public String geteFulltime() {
        return eFulltime;
    }

    public void seteFulltime(String eFulltime) {
        this.eFulltime = eFulltime == null ? null : eFulltime.trim();
    }

    public String geteCartype() {
        return eCartype;
    }

    public void seteCartype(String eCartype) {
        this.eCartype = eCartype == null ? null : eCartype.trim();
    }

    public String geteCarnum() {
        return eCarnum;
    }

    public void seteCarnum(String eCarnum) {
        this.eCarnum = eCarnum == null ? null : eCarnum.trim();
    }

    public Integer geteWeight() {
        return eWeight;
    }

    public void seteWeight(Integer eWeight) {
        this.eWeight = eWeight;
    }

    public Integer geteWargon() {
        return eWargon;
    }

    public void seteWargon(Integer eWargon) {
        this.eWargon = eWargon;
    }

    public String geteTransport() {
        return eTransport;
    }

    public void seteTransport(String eTransport) {
        this.eTransport = eTransport == null ? null : eTransport.trim();
    }

    public String geteUser() {
        return eUser;
    }

    public void seteUser(String eUser) {
        this.eUser = eUser == null ? null : eUser.trim();
    }

    public String geteOperator() {
        return eOperator;
    }

    public void seteOperator(String eOperator) {
        this.eOperator = eOperator == null ? null : eOperator.trim();
    }

    public String geteInspector() {
        return eInspector;
    }

    public void seteInspector(String eInspector) {
        this.eInspector = eInspector == null ? null : eInspector.trim();
    }

    public Byte geteFlag() {
        return eFlag;
    }

    public void seteFlag(Byte eFlag) {
        this.eFlag = eFlag;
    }

    public Byte geteState() {
        return eState;
    }

    public void seteState(Byte eState) {
        this.eState = eState;
    }

    public Byte geteCondition() {
        return eCondition;
    }

    public void seteCondition(Byte eCondition) {
        this.eCondition = eCondition;
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

    public String geteRemark() {
        return eRemark;
    }

    public void seteRemark(String eRemark) {
        this.eRemark = eRemark == null ? null : eRemark.trim();
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", eId=").append(eId);
        sb.append(", eApplyid=").append(eApplyid);
        sb.append(", eEmptydate=").append(eEmptydate);
        sb.append(", eFulldate=").append(eFulldate);
        sb.append(", eSource=").append(eSource);
        sb.append(", eOrder=").append(eOrder);
        sb.append(", eOrdernum=").append(eOrdernum);
        sb.append(", eCustomerid=").append(eCustomerid);
        sb.append(", eReciever=").append(eReciever);
        sb.append(", eBourn=").append(eBourn);
        sb.append(", eHarbor=").append(eHarbor);
        sb.append(", eType=").append(eType);
        sb.append(", eLength=").append(eLength);
        sb.append(", ePrice=").append(ePrice);
        sb.append(", eGoods=").append(eGoods);
        sb.append(", eProduct=").append(eProduct);
        sb.append(", eUnit=").append(eUnit);
        sb.append(", eTotalnum=").append(eTotalnum);
        sb.append(", eSurplus=").append(eSurplus);
        sb.append(", eEntrepot=").append(eEntrepot);
        sb.append(", eEmptytime=").append(eEmptytime);
        sb.append(", eFulltime=").append(eFulltime);
        sb.append(", eCartype=").append(eCartype);
        sb.append(", eCarnum=").append(eCarnum);
        sb.append(", eWeight=").append(eWeight);
        sb.append(", eWargon=").append(eWargon);
        sb.append(", eTransport=").append(eTransport);
        sb.append(", eUser=").append(eUser);
        sb.append(", eOperator=").append(eOperator);
        sb.append(", eInspector=").append(eInspector);
        sb.append(", eFlag=").append(eFlag);
        sb.append(", eState=").append(eState);
        sb.append(", eCondition=").append(eCondition);
        sb.append(", createdate=").append(createdate);
        sb.append(", modifydate=").append(modifydate);
        sb.append(", createby=").append(createby);
        sb.append(", modifyby=").append(modifyby);
        sb.append(", eRemark=").append(eRemark);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}