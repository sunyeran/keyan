package com.zs.hibernate.beans;

import java.util.Date;

/**
 * Cxdate entity. @author MyEclipse Persistence Tools
 */

public class Cxdate implements java.io.Serializable {

	// Fields

	private Integer id;
	private String flag;
	private String tishi;
	private Date cxstart;
	private Date cxend;
	private Date kdstart;
	private Date kdend;

	// Constructors

	/** default constructor */
	public Cxdate() {
	}

	/** full constructor */
	public Cxdate(String flag,String tishi, Date cxstart, Date cxend, Date kdstart,
			Date kdend) {
		this.setFlag(flag);
		this.tishi = tishi;
		this.cxstart = cxstart;
		this.cxend = cxend;
		this.kdstart = kdstart;
		this.kdend = kdend;
	}

	// Property accessors

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTishi() {
		return this.tishi;
	}

	public void setTishi(String tishi) {
		this.tishi = tishi;
	}

	public Date getCxstart() {
		return this.cxstart;
	}

	public void setCxstart(Date cxstart) {
		this.cxstart = cxstart;
	}

	public Date getCxend() {
		return this.cxend;
	}

	public void setCxend(Date cxend) {
		this.cxend = cxend;
	}

	public Date getKdstart() {
		return this.kdstart;
	}

	public void setKdstart(Date kdstart) {
		this.kdstart = kdstart;
	}

	public Date getKdend() {
		return this.kdend;
	}

	public void setKdend(Date kdend) {
		this.kdend = kdend;
	}

	public String getFlag() {
		return flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
	}

}