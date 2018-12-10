package com.keyan.hibernate.beans;

import java.util.Date;

/**
 * AbstractAwards entity provides the base persistence definition of the Awards
 * entity. @author MyEclipse Persistence Tools
 */

public abstract class AbstractAwards  implements
		java.io.Serializable {

	// Fields

	private Integer id;
	private String name;
	private String author;
	private String othorAuthor;
	private String awardName;
	private String awarder;
	private String awardLevel;
	private Date awardTime;

	// Constructors

	/** default constructor */
	public AbstractAwards() {
	}

	/** minimal constructor */
	public AbstractAwards(Integer id) {
		this.id = id;
	}

	/** full constructor */
	public AbstractAwards(Integer id, String name, String author,
			String othorAuthor, String awardName, String awarder,
			String awardLevel, Date awardTime) {
		this.id = id;
		this.name = name;
		this.author = author;
		this.othorAuthor = othorAuthor;
		this.awardName = awardName;
		this.awarder = awarder;
		this.awardLevel = awardLevel;
		this.awardTime = awardTime;
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

	public String getAuthor() {
		return this.author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getOthorAuthor() {
		return this.othorAuthor;
	}

	public void setOthorAuthor(String othorAuthor) {
		this.othorAuthor = othorAuthor;
	}

	public String getAwardName() {
		return this.awardName;
	}

	public void setAwardName(String awardName) {
		this.awardName = awardName;
	}

	public String getAwarder() {
		return this.awarder;
	}

	public void setAwarder(String awarder) {
		this.awarder = awarder;
	}

	public String getAwardLevel() {
		return this.awardLevel;
	}

	public void setAwardLevel(String awardLevel) {
		this.awardLevel = awardLevel;
	}

	public Date getAwardTime() {
		return this.awardTime;
	}

	public void setAwardTime(Date awardTime) {
		this.awardTime = awardTime;
	}

}