package com.keyan.hibernate.beans;

/**
 * UserId entity. @author MyEclipse Persistence Tools
 */

public class UserId implements java.io.Serializable {

	// Fields

	private Integer id;
	private Integer groupsId;

	// Constructors

	/** default constructor */
	public UserId() {
	}

	/** full constructor */
	public UserId(Integer id, Integer groupsId) {
		this.id = id;
		this.groupsId = groupsId;
	}

	// Property accessors

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getGroupsId() {
		return this.groupsId;
	}

	public void setGroupsId(Integer groupsId) {
		this.groupsId = groupsId;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof UserId))
			return false;
		UserId castOther = (UserId) other;

		return ((this.getId() == castOther.getId()) || (this.getId() != null
				&& castOther.getId() != null && this.getId().equals(
				castOther.getId())))
				&& ((this.getGroupsId() == castOther.getGroupsId()) || (this
						.getGroupsId() != null
						&& castOther.getGroupsId() != null && this
						.getGroupsId().equals(castOther.getGroupsId())));
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result + (getId() == null ? 0 : this.getId().hashCode());
		result = 37 * result
				+ (getGroupsId() == null ? 0 : this.getGroupsId().hashCode());
		return result;
	}

}