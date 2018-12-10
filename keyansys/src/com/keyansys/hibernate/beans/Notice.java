package com.keyansys.hibernate.beans;

import java.sql.Timestamp;
import java.util.Date;

/**
 * Notice entity. @author MyEclipse Persistence Tools
 */

public class Notice implements java.io.Serializable {

	// Fields

	private Integer notice_id;
	private String sender;
	private String title;
	private String content;
	private Date last_update;

	// Constructors

	/** default constructor */
	public Notice() {
	}

	/** full constructor */
	public Notice(Integer notice_id,String sender, String title, String content,
			Date last_update) {
		this.notice_id = notice_id;
		this.sender = sender;
		this.title = title;
		this.content = content;
		this.last_update = last_update;
	}

	// Property accessors

	public Integer getNotice_id() {
		return this.notice_id;
	}

	public void setNotice_id(Integer notice_id) {
		this.notice_id = notice_id;
	}

	public String getSender() {
		return this.sender;
	}

	public void setSender(String sender) {
		this.sender = sender;
	}

	public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return this.content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Date getLast_update() {
		return this.last_update;
	}

	public void setLast_update(Date last_update) {
		this.last_update = last_update;
	}

}