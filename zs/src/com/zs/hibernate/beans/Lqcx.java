package com.zs.hibernate.beans;

/**
 * Lqcx entity. @author MyEclipse Persistence Tools
 */

public class Lqcx implements java.io.Serializable {

	// Fields

	private Integer id;
	private String xm;
	private String ksh;
	private String xbdm;
	
	private String lqzy;
	private String xi;
	private String sheng;

	// Constructors

	/** default constructor */
	public Lqcx() {
	}

	/** full constructor */
	public Lqcx(String xm, String ksh, String xbdm, String lqzy,
			String xi, String sheng) {
		this.xm = xm;
		this.ksh = ksh;
		this.xbdm = xbdm;
		
		this.lqzy = lqzy;
		this.xi = xi;
		this.sheng = sheng;
	}

	// Property accessors

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getXm() {
		return this.xm;
	}

	public void setXm(String xm) {
		this.xm = xm;
	}

	public String getKsh() {
		return this.ksh;
	}

	public void setKsh(String ksh) {
		this.ksh = ksh;
	}

	public String getXbdm() {
		return this.xbdm;
	}

	public void setXbdm(String xbdm) {
		this.xbdm = xbdm;
	}

	

	public String getLqzy() {
		return this.lqzy;
	}

	public void setLqzy(String lqzy) {
		this.lqzy = lqzy;
	}

	public String getXi() {
		return this.xi;
	}

	public void setXi(String xi) {
		this.xi = xi;
	}

	public String getSheng() {
		return this.sheng;
	}

	public void setSheng(String sheng) {
		this.sheng = sheng;
	}

}