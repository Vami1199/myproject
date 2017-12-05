package com.xj.domain.base;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

public class BCustomer implements Serializable {
    private Integer cId;

    /**
     * 所属行业
     */
    private Integer cIid;

    private Byte cType;

    private String cName;

    private String cShort;

    private Byte cDepartment;

    private Byte cCompanytype;

    private String cScope;

    private String cLegal;

    private String cConsignor;

    private String cBank;

    private String cAccount;

    private Byte cCredit;

    private BigDecimal cLimit;

    private BigDecimal cRegisteredcapital;

    private String cTaxnumber;

    private String cSid;

    private String cPostcode;

    private String cLinkman;

    private String cPhone;

    private String cFax;

    private String cHomepage;

    private String cEmail;

    private String cCountry;

    private String cProvince;

    private String cCityaddress;

    private Byte cIselectricity;

    private Byte cState;

    /**
     * 质量认证说明
     */
    private String cQuality;

    /**
     * 信用说明
     */
    private String cCreditdeclare;

    /**
     * 内部机构名称
     */
    private String cInnername;

    /**
     * 内部机构id
     */
    private String cInnerid;

    private String cRemark;

    private Byte cIdentifying;

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

    public Integer getcId() {
        return cId;
    }

    public void setcId(Integer cId) {
        this.cId = cId;
    }

    public Integer getcIid() {
        return cIid;
    }

    public void setcIid(Integer cIid) {
        this.cIid = cIid;
    }

    public Byte getcType() {
        return cType;
    }

    public void setcType(Byte cType) {
        this.cType = cType;
    }

    public String getcName() {
        return cName;
    }

    public void setcName(String cName) {
        this.cName = cName == null ? null : cName.trim();
    }

    public String getcShort() {
        return cShort;
    }

    public void setcShort(String cShort) {
        this.cShort = cShort == null ? null : cShort.trim();
    }

    public Byte getcDepartment() {
        return cDepartment;
    }

    public void setcDepartment(Byte cDepartment) {
        this.cDepartment = cDepartment;
    }

    public Byte getcCompanytype() {
        return cCompanytype;
    }

    public void setcCompanytype(Byte cCompanytype) {
        this.cCompanytype = cCompanytype;
    }

    public String getcScope() {
        return cScope;
    }

    public void setcScope(String cScope) {
        this.cScope = cScope == null ? null : cScope.trim();
    }

    public String getcLegal() {
        return cLegal;
    }

    public void setcLegal(String cLegal) {
        this.cLegal = cLegal == null ? null : cLegal.trim();
    }

    public String getcConsignor() {
        return cConsignor;
    }

    public void setcConsignor(String cConsignor) {
        this.cConsignor = cConsignor == null ? null : cConsignor.trim();
    }

    public String getcBank() {
        return cBank;
    }

    public void setcBank(String cBank) {
        this.cBank = cBank == null ? null : cBank.trim();
    }

    public String getcAccount() {
        return cAccount;
    }

    public void setcAccount(String cAccount) {
        this.cAccount = cAccount == null ? null : cAccount.trim();
    }

    public Byte getcCredit() {
        return cCredit;
    }

    public void setcCredit(Byte cCredit) {
        this.cCredit = cCredit;
    }

    public BigDecimal getcLimit() {
        return cLimit;
    }

    public void setcLimit(BigDecimal cLimit) {
        this.cLimit = cLimit;
    }

    public BigDecimal getcRegisteredcapital() {
        return cRegisteredcapital;
    }

    public void setcRegisteredcapital(BigDecimal cRegisteredcapital) {
        this.cRegisteredcapital = cRegisteredcapital;
    }

    public String getcTaxnumber() {
        return cTaxnumber;
    }

    public void setcTaxnumber(String cTaxnumber) {
        this.cTaxnumber = cTaxnumber == null ? null : cTaxnumber.trim();
    }

    public String getcSid() {
        return cSid;
    }

    public void setcSid(String cSid) {
        this.cSid = cSid == null ? null : cSid.trim();
    }

    public String getcPostcode() {
        return cPostcode;
    }

    public void setcPostcode(String cPostcode) {
        this.cPostcode = cPostcode == null ? null : cPostcode.trim();
    }

    public String getcLinkman() {
        return cLinkman;
    }

    public void setcLinkman(String cLinkman) {
        this.cLinkman = cLinkman == null ? null : cLinkman.trim();
    }

    public String getcPhone() {
        return cPhone;
    }

    public void setcPhone(String cPhone) {
        this.cPhone = cPhone == null ? null : cPhone.trim();
    }

    public String getcFax() {
        return cFax;
    }

    public void setcFax(String cFax) {
        this.cFax = cFax == null ? null : cFax.trim();
    }

    public String getcHomepage() {
        return cHomepage;
    }

    public void setcHomepage(String cHomepage) {
        this.cHomepage = cHomepage == null ? null : cHomepage.trim();
    }

    public String getcEmail() {
        return cEmail;
    }

    public void setcEmail(String cEmail) {
        this.cEmail = cEmail == null ? null : cEmail.trim();
    }

    public String getcCountry() {
        return cCountry;
    }

    public void setcCountry(String cCountry) {
        this.cCountry = cCountry == null ? null : cCountry.trim();
    }

    public String getcProvince() {
        return cProvince;
    }

    public void setcProvince(String cProvince) {
        this.cProvince = cProvince == null ? null : cProvince.trim();
    }

    public String getcCityaddress() {
        return cCityaddress;
    }

    public void setcCityaddress(String cCityaddress) {
        this.cCityaddress = cCityaddress == null ? null : cCityaddress.trim();
    }

    public Byte getcIselectricity() {
        return cIselectricity;
    }

    public void setcIselectricity(Byte cIselectricity) {
        this.cIselectricity = cIselectricity;
    }

    public Byte getcState() {
        return cState;
    }

    public void setcState(Byte cState) {
        this.cState = cState;
    }

    public String getcQuality() {
        return cQuality;
    }

    public void setcQuality(String cQuality) {
        this.cQuality = cQuality == null ? null : cQuality.trim();
    }

    public String getcCreditdeclare() {
        return cCreditdeclare;
    }

    public void setcCreditdeclare(String cCreditdeclare) {
        this.cCreditdeclare = cCreditdeclare == null ? null : cCreditdeclare.trim();
    }

    public String getcInnername() {
        return cInnername;
    }

    public void setcInnername(String cInnername) {
        this.cInnername = cInnername == null ? null : cInnername.trim();
    }

    public String getcInnerid() {
        return cInnerid;
    }

    public void setcInnerid(String cInnerid) {
        this.cInnerid = cInnerid == null ? null : cInnerid.trim();
    }

    public String getcRemark() {
        return cRemark;
    }

    public void setcRemark(String cRemark) {
        this.cRemark = cRemark == null ? null : cRemark.trim();
    }

    public Byte getcIdentifying() {
        return cIdentifying;
    }

    public void setcIdentifying(Byte cIdentifying) {
        this.cIdentifying = cIdentifying;
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
        sb.append(", cId=").append(cId);
        sb.append(", cIid=").append(cIid);
        sb.append(", cType=").append(cType);
        sb.append(", cName=").append(cName);
        sb.append(", cShort=").append(cShort);
        sb.append(", cDepartment=").append(cDepartment);
        sb.append(", cCompanytype=").append(cCompanytype);
        sb.append(", cScope=").append(cScope);
        sb.append(", cLegal=").append(cLegal);
        sb.append(", cConsignor=").append(cConsignor);
        sb.append(", cBank=").append(cBank);
        sb.append(", cAccount=").append(cAccount);
        sb.append(", cCredit=").append(cCredit);
        sb.append(", cLimit=").append(cLimit);
        sb.append(", cRegisteredcapital=").append(cRegisteredcapital);
        sb.append(", cTaxnumber=").append(cTaxnumber);
        sb.append(", cSid=").append(cSid);
        sb.append(", cPostcode=").append(cPostcode);
        sb.append(", cLinkman=").append(cLinkman);
        sb.append(", cPhone=").append(cPhone);
        sb.append(", cFax=").append(cFax);
        sb.append(", cHomepage=").append(cHomepage);
        sb.append(", cEmail=").append(cEmail);
        sb.append(", cCountry=").append(cCountry);
        sb.append(", cProvince=").append(cProvince);
        sb.append(", cCityaddress=").append(cCityaddress);
        sb.append(", cIselectricity=").append(cIselectricity);
        sb.append(", cState=").append(cState);
        sb.append(", cQuality=").append(cQuality);
        sb.append(", cCreditdeclare=").append(cCreditdeclare);
        sb.append(", cInnername=").append(cInnername);
        sb.append(", cInnerid=").append(cInnerid);
        sb.append(", cRemark=").append(cRemark);
        sb.append(", cIdentifying=").append(cIdentifying);
        sb.append(", createdate=").append(createdate);
        sb.append(", modifydate=").append(modifydate);
        sb.append(", createby=").append(createby);
        sb.append(", modifyby=").append(modifyby);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}