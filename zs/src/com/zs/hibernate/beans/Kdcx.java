package com.zs.hibernate.beans;

/**
 * Kdcx entity. @author MyEclipse Persistence Tools
 */

public class Kdcx implements java.io.Serializable {

	// Fields

	private Integer id;
	private String ksh;
	private String xm;
	private String sjr;
	private String jtdz;
	private String yzbm;
	private String lxdh;
	private String yjh;

	// Constructors

	/** default constructor */
	public Kdcx() {
	}

	/** full constructor */
	public Kdcx(String ksh, String xm, String sjr, String jtdz, String yzbm,
			String lxdh, String yjh) {
		this.ksh = ksh;
		this.xm = xm;
		this.sjr = sjr;
		this.jtdz = jtdz;
		this.yzbm = yzbm;
		this.lxdh = lxdh;
		this.yjh = yjh;
	}

	// Property accessors

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getKsh() {
		return this.ksh;
	}

	public void setKsh(String ksh) {
		this.ksh = ksh;
	}

	public String getXm() {
		return this.xm;
	}

	public void setXm(String xm) {
		this.xm = xm;
	}

	public String getSjr() {
		return this.sjr;
	}

	public void setSjr(String sjr) {
		this.sjr = sjr;
	}

	public String getJtdz() {
		return this.jtdz;
	}

	public void setJtdz(String jtdz) {
		this.jtdz = jtdz;
	}

	public String getYzbm() {
		return this.yzbm;
	}

	public void setYzbm(String yzbm) {
		this.yzbm = yzbm;
	}

	public String getLxdh() {
		return this.lxdh;
	}

	public void setLxdh(String lxdh) {
		this.lxdh = lxdh;
	}

	public String getYjh() {
		return this.yjh;
	}

	public void setYjh(String yjh) {
		this.yjh = yjh;
	}

}