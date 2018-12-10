package com.keyan.hibernate.beans;

import java.util.HashSet;
import java.util.Set;

/**
 * Groups entity. @author MyEclipse Persistence Tools
 */

public class Groups implements java.io.Serializable {

	// Fields

	private Integer id;
	private String name;
	private Set users = new HashSet(0);
	//private Set menus = new HashSet(0);

	// Constructors

	/** default constructor */
	public Groups() {
	}

	/** minimal constructor */
	public Groups(String name) {
		this.name = name;
	}

	/** full constructor */
	public Groups(String name, Set users) {
		this.name = name;
		this.users = users;
		//this.menus = menus;
	}

	// Property accessors

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Set getUsers() {
		return this.users;
	}

	public void setUsers(Set users) {
		this.users = users;
	}

	/*public Set getMenus() {
		return this.menus;
	}

	public void setMenus(Set menus) {
		this.menus = menus;
	}*/

}