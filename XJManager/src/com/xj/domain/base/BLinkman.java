package com.xj.domain.base;

import java.io.Serializable;
import java.util.Date;

public class BLinkman implements Serializable {
    private String lId;

    private String lName;

    private String lDuty;

    private String lPhone;

    private String lFax;

    private String lTelephone;

    private String lEmail;

    private String lSex;

    private String lCard;

    private String lBirthplace;

    private String lAddress;

    private Byte lAge;

    private String lEducation;

    private Byte lIntime;

    private Integer lCid;

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

    private String lDescription;

    private static final long serialVersionUID = 1L;

    public String getlId() {
        return lId;
    }

    public void setlId(String lId) {
        this.lId = lId == null ? null : lId.trim();
    }

    public String getlName() {
        return lName;
    }

    public void setlName(String lName) {
        this.lName = lName == null ? null : lName.trim();
    }

    public String getlDuty() {
        return lDuty;
    }

    public void setlDuty(String lDuty) {
        this.lDuty = lDuty == null ? null : lDuty.trim();
    }

    public String getlPhone() {
        return lPhone;
    }

    public void setlPhone(String lPhone) {
        this.lPhone = lPhone == null ? null : lPhone.trim();
    }

    public String getlFax() {
        return lFax;
    }

    public void setlFax(String lFax) {
        this.lFax = lFax == null ? null : lFax.trim();
    }

    public String getlTelephone() {
        return lTelephone;
    }

    public void setlTelephone(String lTelephone) {
        this.lTelephone = lTelephone == null ? null : lTelephone.trim();
    }

    public String getlEmail() {
        return lEmail;
    }

    public void setlEmail(String lEmail) {
        this.lEmail = lEmail == null ? null : lEmail.trim();
    }

    public String getlSex() {
        return lSex;
    }

    public void setlSex(String lSex) {
        this.lSex = lSex == null ? null : lSex.trim();
    }

    public String getlCard() {
        return lCard;
    }

    public void setlCard(String lCard) {
        this.lCard = lCard == null ? null : lCard.trim();
    }

    public String getlBirthplace() {
        return lBirthplace;
    }

    public void setlBirthplace(String lBirthplace) {
        this.lBirthplace = lBirthplace == null ? null : lBirthplace.trim();
    }

    public String getlAddress() {
        return lAddress;
    }

    public void setlAddress(String lAddress) {
        this.lAddress = lAddress == null ? null : lAddress.trim();
    }

    public Byte getlAge() {
        return lAge;
    }

    public void setlAge(Byte lAge) {
        this.lAge = lAge;
    }

    public String getlEducation() {
        return lEducation;
    }

    public void setlEducation(String lEducation) {
        this.lEducation = lEducation == null ? null : lEducation.trim();
    }

    public Byte getlIntime() {
        return lIntime;
    }

    public void setlIntime(Byte lIntime) {
        this.lIntime = lIntime;
    }

    public Integer getlCid() {
        return lCid;
    }

    public void setlCid(Integer lCid) {
        this.lCid = lCid;
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

    public String getlDescription() {
        return lDescription;
    }

    public void setlDescription(String lDescription) {
        this.lDescription = lDescription == null ? null : lDescription.trim();
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", lId=").append(lId);
        sb.append(", lName=").append(lName);
        sb.append(", lDuty=").append(lDuty);
        sb.append(", lPhone=").append(lPhone);
        sb.append(", lFax=").append(lFax);
        sb.append(", lTelephone=").append(lTelephone);
        sb.append(", lEmail=").append(lEmail);
        sb.append(", lSex=").append(lSex);
        sb.append(", lCard=").append(lCard);
        sb.append(", lBirthplace=").append(lBirthplace);
        sb.append(", lAddress=").append(lAddress);
        sb.append(", lAge=").append(lAge);
        sb.append(", lEducation=").append(lEducation);
        sb.append(", lIntime=").append(lIntime);
        sb.append(", lCid=").append(lCid);
        sb.append(", createdate=").append(createdate);
        sb.append(", modifydate=").append(modifydate);
        sb.append(", createby=").append(createby);
        sb.append(", modifyby=").append(modifyby);
        sb.append(", lDescription=").append(lDescription);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}