package com.keyansys.hibernate.beans;

import java.sql.Timestamp;
import java.util.Date;

/**
 * Subject entity. @author MyEclipse Persistence Tools
 */

public class Subject implements java.io.Serializable {

	// Fields

	private Integer subject_id;
	private String name;
	private String username;
	private String department;
	private String subjectName;
	private String subjectNo;
	private String isFirstUnit;
	private String head;
	private String participants;
	private Date projectTime;
	private String projectDept;
	private double outboundFunds;
	private double selfFunding;
	private Date concludingTime;
	private String subjectType;
	private Date last_update;
	private String approval;

	// Constructors

	/** default constructor */
	public Subject() {
	}

	/** minimal constructor */
	public Subject(String subjectName, String subjectNo, String isFirstUnit,
			String head, Date projectTime, String projectDept,
			Date concludingTime) {
		this.subjectName = subjectName;
		this.subjectNo = subjectNo;
		this.isFirstUnit = isFirstUnit;
		this.head = head;
		this.projectTime = projectTime;
		this.projectDept = projectDept;
		this.concludingTime = concludingTime;
	}

	/** full constructor */
	public Subject(String name,String subjectName, String subjectNo, String isFirstUnit,
			String head, String participants, Date projectTime,
			String projectDept, Float outboundFunds, Float selfFunding,
			Date concludingTime, String subjectType, Timestamp lastUpdate) {
		this.name = name;
		this.subjectName = subjectName;
		this.subjectNo = subjectNo;
		this.isFirstUnit = isFirstUnit;
		this.head = head;
		this.participants = participants;
		this.projectTime = projectTime;
		this.projectDept = projectDept;
		this.outboundFunds = outboundFunds;
		this.selfFunding = selfFunding;
		this.concludingTime = concludingTime;
		this.subjectType = subjectType;
		this.last_update = lastUpdate;
	}

	// Property accessors

	public Integer getSubject_id() {
		return this.subject_id;
	}

	public void setSubject_id(Integer subject_id) {
		this.subject_id = subject_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public String getSubjectName() {
		return this.subjectName;
	}

	public void setSubjectName(String subjectName) {
		this.subjectName = subjectName;
	}

	public String getSubjectNo() {
		return this.subjectNo;
	}

	public void setSubjectNo(String subjectNo) {
		this.subjectNo = subjectNo;
	}

	public String getIsFirstUnit() {
		return this.isFirstUnit;
	}

	public void setIsFirstUnit(String isFirstUnit) {
		this.isFirstUnit = isFirstUnit;
	}

	public String getHead() {
		return this.head;
	}

	public void setHead(String head) {
		this.head = head;
	}

	public String getParticipants() {
		return this.participants;
	}

	public void setParticipants(String participants) {
		this.participants = participants;
	}

	public Date getProjectTime() {
		return this.projectTime;
	}

	public void setProjectTime(Date projectTime) {
		this.projectTime = projectTime;
	}

	public String getProjectDept() {
		return this.projectDept;
	}

	public void setProjectDept(String projectDept) {
		this.projectDept = projectDept;
	}

	public double getOutboundFunds() {
		return this.outboundFunds;
	}

	public void setOutboundFunds(double outboundFunds) {
		this.outboundFunds = outboundFunds;
	}

	public double getSelfFunding() {
		return this.selfFunding;
	}

	public void setSelfFunding(double selfFunding) {
		this.selfFunding = selfFunding;
	}

	public Date getConcludingTime() {
		return this.concludingTime;
	}

	public void setConcludingTime(Date concludingTime) {
		this.concludingTime = concludingTime;
	}

	public String getSubjectType() {
		return subjectType;
	}

	public void setSubjectType(String subjectType) {
		this.subjectType = subjectType;
	}

	
	public Date getLast_update() {
		return this.last_update;
	}

	public void setLast_update(Date last_update) {
		this.last_update = last_update;
	}
	
	public String getApproval() {
		return this.approval;
	}
	public void setApproval(String approval) {
		// TODO Auto-generated method stub
		this.approval=approval;
	}

}