package com.keyan.hibernate.beans;

/**
 * User entity. @author MyEclipse Persistence Tools
 */

public class User implements java.io.Serializable {

	// Fields

	private UserId id;
	private Groups groups;
	private String name;
	private String userName;
	private String password;
	private String department;
	private String picture;

	// Constructors

	/** default constructor */
	public User() {
	}

	/** minimal constructor */
	public User(UserId id, Groups groups, String name, String userName,
			String password, String department) {
		this.id = id;
		this.groups = groups;
		this.name = name;
		this.userName = userName;
		this.password = password;
		this.department = department;
	}

	/** full constructor */
	public User(UserId id, Groups groups, String name, String userName,
			String password, String department, String picture) {
		this.id = id;
		this.groups = groups;
		this.name = name;
		this.userName = userName;
		this.password = password;
		this.department = department;
		this.picture = picture;
	}

	// Property accessors

	public UserId getId() {
		return this.id;
	}

	public void setId(UserId id) {
		this.id = id;
	}

	public Groups getGroups() {
		return this.groups;
	}

	public void setGroups(Groups groups) {
		this.groups = groups;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUserName() {
		return this.userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getDepartment() {
		return this.department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public String getPicture() {
		return this.picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}

}