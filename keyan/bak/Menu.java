package com.keyan.hibernate.beans;

import java.util.HashSet;
import java.util.Set;

/**
 * Menu entity. @author MyEclipse Persistence Tools
 */

public class Menu implements java.io.Serializable {

	// Fields

	private Integer id;
	private Menu menu;
	private String text;
	private String iconCls;
	private String className;
	private Set groupses = new HashSet(0);
	private Set menus = new HashSet(0);

	// Constructors

	/** default constructor */
	public Menu() {
	}

	/** minimal constructor */
	public Menu(String text) {
		this.text = text;
	}

	/** full constructor */
	public Menu(Menu menu, String text, String iconCls, String className,
			Set groupses, Set menus) {
		this.menu = menu;
		this.text = text;
		this.iconCls = iconCls;
		this.className = className;
		this.groupses = groupses;
		this.menus = menus;
	}

	// Property accessors

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Menu getMenu() {
		return this.menu;
	}

	public void setMenu(Menu menu) {
		this.menu = menu;
	}

	public String getText() {
		return this.text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public String getIconCls() {
		return this.iconCls;
	}

	public void setIconCls(String iconCls) {
		this.iconCls = iconCls;
	}

	public String getClassName() {
		return this.className;
	}

	public void setClassName(String className) {
		this.className = className;
	}

	public Set getGroupses() {
		return this.groupses;
	}

	public void setGroupses(Set groupses) {
		this.groupses = groupses;
	}

	public Set getMenus() {
		return this.menus;
	}

	public void setMenus(Set menus) {
		this.menus = menus;
	}

}