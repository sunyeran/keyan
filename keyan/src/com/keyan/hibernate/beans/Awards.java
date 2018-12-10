package com.keyan.hibernate.beans;

import java.util.Date;

/**
 * Awards entity. @author MyEclipse Persistence Tools
 */
public class Awards extends AbstractAwards implements java.io.Serializable {

	// Constructors

	/** default constructor */
	public Awards() {
	}

	/** minimal constructor */
	public Awards(Integer id) {
		super(id);
	}

	/** full constructor */
	public Awards(Integer id, String name, String author, String othorAuthor,
			String awardName, String awarder, String awardLevel, Date awardTime) {
		super(id, name, author, othorAuthor, awardName, awarder, awardLevel,
				awardTime);
	}

}
