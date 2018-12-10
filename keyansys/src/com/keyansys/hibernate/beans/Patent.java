package com.keyansys.hibernate.beans;

import java.sql.Timestamp;
import java.util.Date;

/**
 * Patent entity. @author MyEclipse Persistence Tools
 */

public class Patent implements java.io.Serializable {

	// Fields

	private Integer patent_id;
	private String name;
	private String username;
	private String department;
	private String patent_name;
	private String patent_person;
	private String inventor;
	private String patent_type;
	private Date acceptance_time;
	private Date authorized;
	private String apply_no;
	private String is_school;
	private String implement;
	private String approval;
	private Date last_update;

	// Constructors

	/** default constructor */
	public Patent() {
	}

	/** full constructor */
	public Patent(String name,String username,String department,String patent_name, String patent_person, String inventor,
			String patent_type, Date acceptance_time, Date authorized,
			String apply_no, String is_school, String implement,String approval,
			Timestamp last_update) {
		this.name = name;
		this.username = username;
		this.department = department;
		this.patent_name = patent_name;
		this.patent_person = patent_person;
		this.inventor = inventor;
		this.patent_type = patent_type;
		this.acceptance_time = acceptance_time;
		this.authorized = authorized;
		this.apply_no = apply_no;
		this.is_school = is_school;
		this.implement = implement;
		this.approval=approval;
		this.last_update = last_update;
	}

	// Property accessors

	public Integer getPatent_id() {
		return this.patent_id;
	}

	public void setPatent_id(Integer patent_id) {
		this.patent_id = patent_id;
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

	public String getPatent_name() {
		return this.patent_name;
	}

	public void setPatent_name(String patent_name) {
		this.patent_name = patent_name;
	}

	public String getPatent_person() {
		return this.patent_person;
	}

	public void setPatent_person(String patent_person) {
		this.patent_person = patent_person;
	}

	public String getInventor() {
		return this.inventor;
	}

	public void setInventor(String inventor) {
		this.inventor = inventor;
	}

	public String getPatent_type() {
		return this.patent_type;
	}

	public void setPatent_type(String patent_type) {
		this.patent_type = patent_type;
	}

	public Date getAcceptance_time() {
		return this.acceptance_time;
	}

	public void setAcceptance_time(Date acceptance_time) {
		this.acceptance_time = acceptance_time;
	}

	public Date getAuthorized() {
		return this.authorized;
	}

	public void setAuthorized(Date authorized) {
		this.authorized = authorized;
	}

	public String getApply_no() {
		return this.apply_no;
	}

	public void setApply_no(String apply_no) {
		this.apply_no = apply_no;
	}

	public String getIs_school() {
		return this.is_school;
	}

	public void setIs_school(String is_school) {
		this.is_school = is_school;
	}

	public String getImplement() {
		return this.implement;
	}

	public void setImplement(String implement) {
		this.implement = implement;
	}
	public String getApproval() {
		return this.approval;
	}

	public void setApproval(String approval) {
		this.approval = approval;
	}

	public Date getLast_update() {
		return this.last_update;
	}

	public void setLast_update(Date date) {
		this.last_update = date;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}