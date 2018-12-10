package com.keyan.hibernate.beans;

import java.sql.Timestamp;
import java.util.Date;

/**
 * Teaching entity. @author MyEclipse Persistence Tools
 */

public class Teaching implements java.io.Serializable {

	// Fields

	private Integer teaching_id;
	private String name;
	private String username;
	private String department;
	private String teaching_name;
	private String first_author;
	private String second_author;
	private String press;
	private Date publish_time;
	private String isbn;
	private String cip;
	private double words;
	private String type;
	private String nature;
	private String approval;
	private Date last_update;

	// Constructors

	/** default constructor */
	public Teaching() {
	}

	/** full constructor */
	public Teaching(String name,String username, String department, String teaching_name,
			String first_author, String second_author, String press,
			Date publish_time, String isbn, String cip, double words,
			String type, String nature, String approval, Date last_update) {
		this.name = name;
		this.username = username;
		this.department = department;
		this.teaching_name = teaching_name;
		this.first_author = first_author;
		this.second_author = second_author;
		this.press = press;
		this.publish_time = publish_time;
		this.isbn = isbn;
		this.cip = cip;
		this.words = words;
		this.type = type;
		this.nature = nature;
		this.approval = approval;
		this.last_update = last_update;
	}

	// Property accessors

	public Integer getTeaching_id() {
		return this.teaching_id;
	}

	public void setTeaching_id(Integer teaching_id) {
		this.teaching_id = teaching_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public String getTeaching_name() {
		return this.teaching_name;
	}

	public void setTeaching_name(String teaching_name) {
		this.teaching_name = teaching_name;
	}

	public String getFirst_author() {
		return this.first_author;
	}

	public void setFirst_author(String first_author) {
		this.first_author = first_author;
	}

	public String getSecond_author() {
		return this.second_author;
	}

	public void setSecond_author(String second_author) {
		this.second_author = second_author;
	}

	public String getPress() {
		return this.press;
	}

	public void setPress(String press) {
		this.press = press;
	}

	public Date getPublish_time() {
		return this.publish_time;
	}

	public void setPublish_time(Date publish_time) {
		this.publish_time = publish_time;
	}

	public String getIsbn() {
		return this.isbn;
	}

	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}

	public String getCip() {
		return this.cip;
	}

	public void setCip(String cip) {
		this.cip = cip;
	}

	public double getWords() {
		return this.words;
	}

	public void setWords(double words) {
		this.words = words;
	}

	public String getType() {
		return this.type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getNature() {
		return this.nature;
	}

	public void setNature(String nature) {
		this.nature = nature;
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

	public void setLast_update(Date last_update) {
		this.last_update = last_update;
	}

}