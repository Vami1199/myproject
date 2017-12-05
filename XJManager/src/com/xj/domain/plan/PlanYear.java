package com.xj.domain.plan;

import java.io.Serializable;
import java.util.Date;

public class PlanYear implements Serializable {
    private String yId;

    /**
     * 年度
     */
    private Integer yYear;

    /**
     * 计划销量
     */
    private Integer yPlan;

    private Integer yOne;

    private Integer yTwo;

    private Integer yThree;

    private Integer yFour;

    private Integer yFive;

    private Integer ySix;

    private Integer ySeven;

    private Integer yEight;

    private Integer yNine;

    private Integer yTen;

    private Integer yEleven;

    private Integer yTwelve;

    /**
     * 指定人
     */
    private String yUser;

    /**
     * 指定日期
     */
    private Date yDate;

    /**
     * 制定部门
     */
    private String yDepartment;

    /**
     * 状态
     */
    private Byte yState;

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

    private String yRemark;

    private static final long serialVersionUID = 1L;

    public String getyId() {
        return yId;
    }

    public void setyId(String yId) {
        this.yId = yId == null ? null : yId.trim();
    }

    public Integer getyYear() {
        return yYear;
    }

    public void setyYear(Integer yYear) {
        this.yYear = yYear;
    }

    public Integer getyPlan() {
        return yPlan;
    }

    public void setyPlan(Integer yPlan) {
        this.yPlan = yPlan;
    }

    public Integer getyOne() {
        return yOne;
    }

    public void setyOne(Integer yOne) {
        this.yOne = yOne;
    }

    public Integer getyTwo() {
        return yTwo;
    }

    public void setyTwo(Integer yTwo) {
        this.yTwo = yTwo;
    }

    public Integer getyThree() {
        return yThree;
    }

    public void setyThree(Integer yThree) {
        this.yThree = yThree;
    }

    public Integer getyFour() {
        return yFour;
    }

    public void setyFour(Integer yFour) {
        this.yFour = yFour;
    }

    public Integer getyFive() {
        return yFive;
    }

    public void setyFive(Integer yFive) {
        this.yFive = yFive;
    }

    public Integer getySix() {
        return ySix;
    }

    public void setySix(Integer ySix) {
        this.ySix = ySix;
    }

    public Integer getySeven() {
        return ySeven;
    }

    public void setySeven(Integer ySeven) {
        this.ySeven = ySeven;
    }

    public Integer getyEight() {
        return yEight;
    }

    public void setyEight(Integer yEight) {
        this.yEight = yEight;
    }

    public Integer getyNine() {
        return yNine;
    }

    public void setyNine(Integer yNine) {
        this.yNine = yNine;
    }

    public Integer getyTen() {
        return yTen;
    }

    public void setyTen(Integer yTen) {
        this.yTen = yTen;
    }

    public Integer getyEleven() {
        return yEleven;
    }

    public void setyEleven(Integer yEleven) {
        this.yEleven = yEleven;
    }

    public Integer getyTwelve() {
        return yTwelve;
    }

    public void setyTwelve(Integer yTwelve) {
        this.yTwelve = yTwelve;
    }

    public String getyUser() {
        return yUser;
    }

    public void setyUser(String yUser) {
        this.yUser = yUser == null ? null : yUser.trim();
    }

    public Date getyDate() {
        return yDate;
    }

    public void setyDate(Date yDate) {
        this.yDate = yDate;
    }

    public String getyDepartment() {
        return yDepartment;
    }

    public void setyDepartment(String yDepartment) {
        this.yDepartment = yDepartment == null ? null : yDepartment.trim();
    }

    public Byte getyState() {
        return yState;
    }

    public void setyState(Byte yState) {
        this.yState = yState;
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

    public String getyRemark() {
        return yRemark;
    }

    public void setyRemark(String yRemark) {
        this.yRemark = yRemark == null ? null : yRemark.trim();
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", yId=").append(yId);
        sb.append(", yYear=").append(yYear);
        sb.append(", yPlan=").append(yPlan);
        sb.append(", yOne=").append(yOne);
        sb.append(", yTwo=").append(yTwo);
        sb.append(", yThree=").append(yThree);
        sb.append(", yFour=").append(yFour);
        sb.append(", yFive=").append(yFive);
        sb.append(", ySix=").append(ySix);
        sb.append(", ySeven=").append(ySeven);
        sb.append(", yEight=").append(yEight);
        sb.append(", yNine=").append(yNine);
        sb.append(", yTen=").append(yTen);
        sb.append(", yEleven=").append(yEleven);
        sb.append(", yTwelve=").append(yTwelve);
        sb.append(", yUser=").append(yUser);
        sb.append(", yDate=").append(yDate);
        sb.append(", yDepartment=").append(yDepartment);
        sb.append(", yState=").append(yState);
        sb.append(", createdate=").append(createdate);
        sb.append(", modifydate=").append(modifydate);
        sb.append(", createby=").append(createby);
        sb.append(", modifyby=").append(modifyby);
        sb.append(", yRemark=").append(yRemark);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}