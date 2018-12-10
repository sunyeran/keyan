package com.keyansys.hibernate.beans;

import java.sql.Timestamp;
import java.util.Date;

/**
 * Paper entity. @author MyEclipse Persistence Tools
 */

public class Paper implements java.io.Serializable {

	// Fields

	private Integer paper_id;
	private String name;
	private String username;
	private String department;
	private String paper_name;
	private String first_author;
	private String periodicalName;
	private String issn;
	private String cn;
	private String volume;
	private String core;
	private String pursuant;
	private String approval;
	
	private Date publish_time;
	private Date last_update;

	// Constructors

	/** default constructor */
	public Paper() {
	}

	/** minimal constructor */
	public Paper(Date publish_time) {
		this.publish_time = publish_time;
	}
	
	public Paper(String name,String username, String department, String first_author, String paper_name, String pursuant ) 
	{
		this.name = name;
		this.username = username;
		this.department = department;
		this.first_author = first_author;
		this.paper_name = paper_name;
		this.pursuant = pursuant;
		
		
	}

	/** full constructor */
	public Paper(Integer paper_id,String name,String username, String department, String paper_name,
			String first_author, String periodicalName, String issn, String cn,
			String volume, String core, String approval, String workload,
			Date publishTime, Date last_update) {
		this.paper_id=paper_id;
		this.name = name;
		this.username = username;
		this.department = department;
		this.paper_name = paper_name;
		this.first_author = first_author;
		this.periodicalName = periodicalName;
		this.issn = issn;
		this.cn = cn;
		this.volume = volume;
		this.core = core;
		this.approval = approval;
		
		this.publish_time = publishTime;
		this.last_update = last_update;
	}

	// Property accessors

	public Integer getPaper_id() {
		return this.paper_id;
	}

	public void setPaper_id(Integer paper_id) {
		this.paper_id = paper_id;
	}

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getDepartment() {
		return this.department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public String getPaper_name() {
		return this.paper_name;
	}

	public void setPaper_name(String paper_name) {
		this.paper_name = paper_name;
	}

	public String getFirst_author() {
		return this.first_author;
	}

	public void setFirst_author(String first_author) {
		this.first_author = first_author;
	}

	public String getPeriodicalName() {
		return this.periodicalName;
	}

	public void setPeriodicalName(String periodicalName) {
		this.periodicalName = periodicalName;
	}

	public String getIssn() {
		return this.issn;
	}

	public void setIssn(String issn) {
		this.issn = issn;
	}

	public String getCn() {
		return this.cn;
	}

	public void setCn(String cn) {
		this.cn = cn;
	}

	public String getVolume() {
		return this.volume;
	}

	public void setVolume(String volume) {
		this.volume = volume;
	}

	public String getCore() {
		return this.core;
	}

	public void setCore(String core) {
		this.core = core;
	}

	public String getPursuant() {
		return pursuant;
	}

	public void setPursuant(String pursuant) {
		this.pursuant = pursuant;
	}

	public String getApproval() {
		return this.approval;
	}

	public void setApproval(String approval) {
		this.approval = approval;
	}

	

	public Date getPublish_time() {
		return this.publish_time;
	}

	public void setPublish_time(Date publish_time) {
		this.publish_time = publish_time;
	}

	/*public Timestamp getLastUpdate() {
		return this.last_update;
	}

	public void setLastUpdate(Timestamp lastUpdate) {
		this.last_update = lastUpdate;
	}*/
	
	public Date getLast_update() {
		return last_update;
	}

	public void setLast_update(Date last_update) {
		this.last_update = last_update;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}