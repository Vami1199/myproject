package com.xj.domain.contract;

import java.io.Serializable;
import java.util.Date;

public class SalesContract implements Serializable {
    private String scId;

    /**
     * 出卖方
     */
    private String scSellerid;

    /**
     * 出卖方地址
     */
    private String scSelleraddress;

    /**
     * 出卖方法人代表
     */
    private String scSellercorporaterepresentative;

    /**
     * 出卖方委托代理人
     */
    private String scSelleragent;

    /**
     * 出卖方开户银行
     */
    private String scSelleropeningbank;

    /**
     * 出卖方账号
     */
    private String scSelleraccountnnmber;

    /**
     * 出卖方税号
     */
    private String scSellerdutyparagraph;

    /**
     * 出卖方电话
     */
    private String scSellertelephone;

    /**
     * 出卖方传真
     */
    private String scSellerfax;

    /**
     * 出卖方邮编
     */
    private Integer scSellerzipcode;

    /**
     * 出卖方电报
     */
    private String scSellertelegraph;

    /**
     * 买受方
     */
    private Integer scBuyer;

    /**
     * 买受方地址
     */
    private String scBuyeraddress;

    /**
     * 买受方法人代表
     */
    private String scBuyercorporaterepresentative;

    /**
     * 买受方委托代理人
     */
    private String scBuyeragent;

    /**
     * 买受方开户银行
     */
    private String scBuyeropeningbank;

    /**
     * 买受方账号
     */
    private String scBuyeraccountnumber;

    /**
     * 买受方税号
     */
    private String scBuyerdutyparagraph;

    /**
     * 买受方电话
     */
    private String scBuyertelephone;

    /**
     * 买受方传真
     */
    private String scBuyerfax;

    /**
     * 买受方邮编
     */
    private String scBuyerzipcode;

    /**
     * 买受方电报
     */
    private String scBuyertelegraph;

    /**
     * 年份
     */
    private Date scYear;

    /**
     * 起始时间
     */
    private Date scStartingtime;

    /**
     * 截止时间
     */
    private Date scDeadline;

    /**
     * 经办人
     */
    private String scOperator;

    /**
     * 签订时间
     */
    private Date scSigningtime;

    /**
     * 签订地点
     */
    private String scSigningplace;

    /**
     * 约定周期
     */
    private String scAgreedcycle;

    /**
     * 每周最少量
     */
    private Integer scWeeklyleast;

    /**
     * 客户行业
     */
    private Integer scCustomerdustry;

    /**
     * 客户部别
     */
    private Integer scCustomerservicedepartment;

    /**
     * 合同类型
     */
    private Integer scContracttype;

    /**
     * 是否以质论价
     */
    private Integer scQualityprice;

    /**
     * 交（提）货方式
     */
    private String scDeliverymode;

    /**
     * 执行单位
     */
    private String scExecutableunit;

    /**
     * 计算方法
     */
    private String scMeteringmethod;

    /**
     * 运输方式
     */
    private Integer scShippingtype;

    /**
     * 运费负担
     */
    private String scFreightburden;

    /**
     * 煤炭单价
     */
    private Long scCoalunitprice;

    /**
     * 价格说明
     */
    private String scPricedescription;

    /**
     * 结算方式
     */
    private Integer scSettlementmethod;

    /**
     * 结算说明
     */
    private String scSettlementstatement;

    /**
     * 公证单位
     */
    private String scNotaryunit;

    /**
     * 公证意见
     */
    private String scNotarialopinions;

    /**
     * 主合同编号
     */
    private String scMastercontractid;

    /**
     * 结算单位
     */
    private Integer scSettlementunit;

    /**
     * 状态
     */
    private Integer scStatus;

    /**
     * 合同标记
     */
    private Integer scContractmark;

    /**
     * 合同总量
     */
    private Long scContractamount;

    /**
     * 兑换率
     */
    private Long scCashrate;

    /**
     * 是否变更
     */
    private Byte scIschange;

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
     * 是否是主合同
     */
    private Byte scIsmain;

    private static final long serialVersionUID = 1L;

    public String getScId() {
        return scId;
    }

    public void setScId(String scId) {
        this.scId = scId == null ? null : scId.trim();
    }

    public String getScSellerid() {
        return scSellerid;
    }

    public void setScSellerid(String scSellerid) {
        this.scSellerid = scSellerid == null ? null : scSellerid.trim();
    }

    public String getScSelleraddress() {
        return scSelleraddress;
    }

    public void setScSelleraddress(String scSelleraddress) {
        this.scSelleraddress = scSelleraddress == null ? null : scSelleraddress.trim();
    }

    public String getScSellercorporaterepresentative() {
        return scSellercorporaterepresentative;
    }

    public void setScSellercorporaterepresentative(String scSellercorporaterepresentative) {
        this.scSellercorporaterepresentative = scSellercorporaterepresentative == null ? null : scSellercorporaterepresentative.trim();
    }

    public String getScSelleragent() {
        return scSelleragent;
    }

    public void setScSelleragent(String scSelleragent) {
        this.scSelleragent = scSelleragent == null ? null : scSelleragent.trim();
    }

    public String getScSelleropeningbank() {
        return scSelleropeningbank;
    }

    public void setScSelleropeningbank(String scSelleropeningbank) {
        this.scSelleropeningbank = scSelleropeningbank == null ? null : scSelleropeningbank.trim();
    }

    public String getScSelleraccountnnmber() {
        return scSelleraccountnnmber;
    }

    public void setScSelleraccountnnmber(String scSelleraccountnnmber) {
        this.scSelleraccountnnmber = scSelleraccountnnmber == null ? null : scSelleraccountnnmber.trim();
    }

    public String getScSellerdutyparagraph() {
        return scSellerdutyparagraph;
    }

    public void setScSellerdutyparagraph(String scSellerdutyparagraph) {
        this.scSellerdutyparagraph = scSellerdutyparagraph == null ? null : scSellerdutyparagraph.trim();
    }

    public String getScSellertelephone() {
        return scSellertelephone;
    }

    public void setScSellertelephone(String scSellertelephone) {
        this.scSellertelephone = scSellertelephone == null ? null : scSellertelephone.trim();
    }

    public String getScSellerfax() {
        return scSellerfax;
    }

    public void setScSellerfax(String scSellerfax) {
        this.scSellerfax = scSellerfax == null ? null : scSellerfax.trim();
    }

    public Integer getScSellerzipcode() {
        return scSellerzipcode;
    }

    public void setScSellerzipcode(Integer scSellerzipcode) {
        this.scSellerzipcode = scSellerzipcode;
    }

    public String getScSellertelegraph() {
        return scSellertelegraph;
    }

    public void setScSellertelegraph(String scSellertelegraph) {
        this.scSellertelegraph = scSellertelegraph == null ? null : scSellertelegraph.trim();
    }

    public Integer getScBuyer() {
        return scBuyer;
    }

    public void setScBuyer(Integer scBuyer) {
        this.scBuyer = scBuyer;
    }

    public String getScBuyeraddress() {
        return scBuyeraddress;
    }

    public void setScBuyeraddress(String scBuyeraddress) {
        this.scBuyeraddress = scBuyeraddress == null ? null : scBuyeraddress.trim();
    }

    public String getScBuyercorporaterepresentative() {
        return scBuyercorporaterepresentative;
    }

    public void setScBuyercorporaterepresentative(String scBuyercorporaterepresentative) {
        this.scBuyercorporaterepresentative = scBuyercorporaterepresentative == null ? null : scBuyercorporaterepresentative.trim();
    }

    public String getScBuyeragent() {
        return scBuyeragent;
    }

    public void setScBuyeragent(String scBuyeragent) {
        this.scBuyeragent = scBuyeragent == null ? null : scBuyeragent.trim();
    }

    public String getScBuyeropeningbank() {
        return scBuyeropeningbank;
    }

    public void setScBuyeropeningbank(String scBuyeropeningbank) {
        this.scBuyeropeningbank = scBuyeropeningbank == null ? null : scBuyeropeningbank.trim();
    }

    public String getScBuyeraccountnumber() {
        return scBuyeraccountnumber;
    }

    public void setScBuyeraccountnumber(String scBuyeraccountnumber) {
        this.scBuyeraccountnumber = scBuyeraccountnumber == null ? null : scBuyeraccountnumber.trim();
    }

    public String getScBuyerdutyparagraph() {
        return scBuyerdutyparagraph;
    }

    public void setScBuyerdutyparagraph(String scBuyerdutyparagraph) {
        this.scBuyerdutyparagraph = scBuyerdutyparagraph == null ? null : scBuyerdutyparagraph.trim();
    }

    public String getScBuyertelephone() {
        return scBuyertelephone;
    }

    public void setScBuyertelephone(String scBuyertelephone) {
        this.scBuyertelephone = scBuyertelephone == null ? null : scBuyertelephone.trim();
    }

    public String getScBuyerfax() {
        return scBuyerfax;
    }

    public void setScBuyerfax(String scBuyerfax) {
        this.scBuyerfax = scBuyerfax == null ? null : scBuyerfax.trim();
    }

    public String getScBuyerzipcode() {
        return scBuyerzipcode;
    }

    public void setScBuyerzipcode(String scBuyerzipcode) {
        this.scBuyerzipcode = scBuyerzipcode == null ? null : scBuyerzipcode.trim();
    }

    public String getScBuyertelegraph() {
        return scBuyertelegraph;
    }

    public void setScBuyertelegraph(String scBuyertelegraph) {
        this.scBuyertelegraph = scBuyertelegraph == null ? null : scBuyertelegraph.trim();
    }

    public Date getScYear() {
        return scYear;
    }

    public void setScYear(Date scYear) {
        this.scYear = scYear;
    }

    public Date getScStartingtime() {
        return scStartingtime;
    }

    public void setScStartingtime(Date scStartingtime) {
        this.scStartingtime = scStartingtime;
    }

    public Date getScDeadline() {
        return scDeadline;
    }

    public void setScDeadline(Date scDeadline) {
        this.scDeadline = scDeadline;
    }

    public String getScOperator() {
        return scOperator;
    }

    public void setScOperator(String scOperator) {
        this.scOperator = scOperator == null ? null : scOperator.trim();
    }

    public Date getScSigningtime() {
        return scSigningtime;
    }

    public void setScSigningtime(Date scSigningtime) {
        this.scSigningtime = scSigningtime;
    }

    public String getScSigningplace() {
        return scSigningplace;
    }

    public void setScSigningplace(String scSigningplace) {
        this.scSigningplace = scSigningplace == null ? null : scSigningplace.trim();
    }

    public String getScAgreedcycle() {
        return scAgreedcycle;
    }

    public void setScAgreedcycle(String scAgreedcycle) {
        this.scAgreedcycle = scAgreedcycle == null ? null : scAgreedcycle.trim();
    }

    public Integer getScWeeklyleast() {
        return scWeeklyleast;
    }

    public void setScWeeklyleast(Integer scWeeklyleast) {
        this.scWeeklyleast = scWeeklyleast;
    }

    public Integer getScCustomerdustry() {
        return scCustomerdustry;
    }

    public void setScCustomerdustry(Integer scCustomerdustry) {
        this.scCustomerdustry = scCustomerdustry;
    }

    public Integer getScCustomerservicedepartment() {
        return scCustomerservicedepartment;
    }

    public void setScCustomerservicedepartment(Integer scCustomerservicedepartment) {
        this.scCustomerservicedepartment = scCustomerservicedepartment;
    }

    public Integer getScContracttype() {
        return scContracttype;
    }

    public void setScContracttype(Integer scContracttype) {
        this.scContracttype = scContracttype;
    }

    public Integer getScQualityprice() {
        return scQualityprice;
    }

    public void setScQualityprice(Integer scQualityprice) {
        this.scQualityprice = scQualityprice;
    }

    public String getScDeliverymode() {
        return scDeliverymode;
    }

    public void setScDeliverymode(String scDeliverymode) {
        this.scDeliverymode = scDeliverymode == null ? null : scDeliverymode.trim();
    }

    public String getScExecutableunit() {
        return scExecutableunit;
    }

    public void setScExecutableunit(String scExecutableunit) {
        this.scExecutableunit = scExecutableunit == null ? null : scExecutableunit.trim();
    }

    public String getScMeteringmethod() {
        return scMeteringmethod;
    }

    public void setScMeteringmethod(String scMeteringmethod) {
        this.scMeteringmethod = scMeteringmethod == null ? null : scMeteringmethod.trim();
    }

    public Integer getScShippingtype() {
        return scShippingtype;
    }

    public void setScShippingtype(Integer scShippingtype) {
        this.scShippingtype = scShippingtype;
    }

    public String getScFreightburden() {
        return scFreightburden;
    }

    public void setScFreightburden(String scFreightburden) {
        this.scFreightburden = scFreightburden == null ? null : scFreightburden.trim();
    }

    public Long getScCoalunitprice() {
        return scCoalunitprice;
    }

    public void setScCoalunitprice(Long scCoalunitprice) {
        this.scCoalunitprice = scCoalunitprice;
    }

    public String getScPricedescription() {
        return scPricedescription;
    }

    public void setScPricedescription(String scPricedescription) {
        this.scPricedescription = scPricedescription == null ? null : scPricedescription.trim();
    }

    public Integer getScSettlementmethod() {
        return scSettlementmethod;
    }

    public void setScSettlementmethod(Integer scSettlementmethod) {
        this.scSettlementmethod = scSettlementmethod;
    }

    public String getScSettlementstatement() {
        return scSettlementstatement;
    }

    public void setScSettlementstatement(String scSettlementstatement) {
        this.scSettlementstatement = scSettlementstatement == null ? null : scSettlementstatement.trim();
    }

    public String getScNotaryunit() {
        return scNotaryunit;
    }

    public void setScNotaryunit(String scNotaryunit) {
        this.scNotaryunit = scNotaryunit == null ? null : scNotaryunit.trim();
    }

    public String getScNotarialopinions() {
        return scNotarialopinions;
    }

    public void setScNotarialopinions(String scNotarialopinions) {
        this.scNotarialopinions = scNotarialopinions == null ? null : scNotarialopinions.trim();
    }

    public String getScMastercontractid() {
        return scMastercontractid;
    }

    public void setScMastercontractid(String scMastercontractid) {
        this.scMastercontractid = scMastercontractid == null ? null : scMastercontractid.trim();
    }

    public Integer getScSettlementunit() {
        return scSettlementunit;
    }

    public void setScSettlementunit(Integer scSettlementunit) {
        this.scSettlementunit = scSettlementunit;
    }

    public Integer getScStatus() {
        return scStatus;
    }

    public void setScStatus(Integer scStatus) {
        this.scStatus = scStatus;
    }

    public Integer getScContractmark() {
        return scContractmark;
    }

    public void setScContractmark(Integer scContractmark) {
        this.scContractmark = scContractmark;
    }

    public Long getScContractamount() {
        return scContractamount;
    }

    public void setScContractamount(Long scContractamount) {
        this.scContractamount = scContractamount;
    }

    public Long getScCashrate() {
        return scCashrate;
    }

    public void setScCashrate(Long scCashrate) {
        this.scCashrate = scCashrate;
    }

    public Byte getScIschange() {
        return scIschange;
    }

    public void setScIschange(Byte scIschange) {
        this.scIschange = scIschange;
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

    public Byte getScIsmain() {
        return scIsmain;
    }

    public void setScIsmain(Byte scIsmain) {
        this.scIsmain = scIsmain;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", scId=").append(scId);
        sb.append(", scSellerid=").append(scSellerid);
        sb.append(", scSelleraddress=").append(scSelleraddress);
        sb.append(", scSellercorporaterepresentative=").append(scSellercorporaterepresentative);
        sb.append(", scSelleragent=").append(scSelleragent);
        sb.append(", scSelleropeningbank=").append(scSelleropeningbank);
        sb.append(", scSelleraccountnnmber=").append(scSelleraccountnnmber);
        sb.append(", scSellerdutyparagraph=").append(scSellerdutyparagraph);
        sb.append(", scSellertelephone=").append(scSellertelephone);
        sb.append(", scSellerfax=").append(scSellerfax);
        sb.append(", scSellerzipcode=").append(scSellerzipcode);
        sb.append(", scSellertelegraph=").append(scSellertelegraph);
        sb.append(", scBuyer=").append(scBuyer);
        sb.append(", scBuyeraddress=").append(scBuyeraddress);
        sb.append(", scBuyercorporaterepresentative=").append(scBuyercorporaterepresentative);
        sb.append(", scBuyeragent=").append(scBuyeragent);
        sb.append(", scBuyeropeningbank=").append(scBuyeropeningbank);
        sb.append(", scBuyeraccountnumber=").append(scBuyeraccountnumber);
        sb.append(", scBuyerdutyparagraph=").append(scBuyerdutyparagraph);
        sb.append(", scBuyertelephone=").append(scBuyertelephone);
        sb.append(", scBuyerfax=").append(scBuyerfax);
        sb.append(", scBuyerzipcode=").append(scBuyerzipcode);
        sb.append(", scBuyertelegraph=").append(scBuyertelegraph);
        sb.append(", scYear=").append(scYear);
        sb.append(", scStartingtime=").append(scStartingtime);
        sb.append(", scDeadline=").append(scDeadline);
        sb.append(", scOperator=").append(scOperator);
        sb.append(", scSigningtime=").append(scSigningtime);
        sb.append(", scSigningplace=").append(scSigningplace);
        sb.append(", scAgreedcycle=").append(scAgreedcycle);
        sb.append(", scWeeklyleast=").append(scWeeklyleast);
        sb.append(", scCustomerdustry=").append(scCustomerdustry);
        sb.append(", scCustomerservicedepartment=").append(scCustomerservicedepartment);
        sb.append(", scContracttype=").append(scContracttype);
        sb.append(", scQualityprice=").append(scQualityprice);
        sb.append(", scDeliverymode=").append(scDeliverymode);
        sb.append(", scExecutableunit=").append(scExecutableunit);
        sb.append(", scMeteringmethod=").append(scMeteringmethod);
        sb.append(", scShippingtype=").append(scShippingtype);
        sb.append(", scFreightburden=").append(scFreightburden);
        sb.append(", scCoalunitprice=").append(scCoalunitprice);
        sb.append(", scPricedescription=").append(scPricedescription);
        sb.append(", scSettlementmethod=").append(scSettlementmethod);
        sb.append(", scSettlementstatement=").append(scSettlementstatement);
        sb.append(", scNotaryunit=").append(scNotaryunit);
        sb.append(", scNotarialopinions=").append(scNotarialopinions);
        sb.append(", scMastercontractid=").append(scMastercontractid);
        sb.append(", scSettlementunit=").append(scSettlementunit);
        sb.append(", scStatus=").append(scStatus);
        sb.append(", scContractmark=").append(scContractmark);
        sb.append(", scContractamount=").append(scContractamount);
        sb.append(", scCashrate=").append(scCashrate);
        sb.append(", scIschange=").append(scIschange);
        sb.append(", createdate=").append(createdate);
        sb.append(", modifydate=").append(modifydate);
        sb.append(", createby=").append(createby);
        sb.append(", modifyby=").append(modifyby);
        sb.append(", scIsmain=").append(scIsmain);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}