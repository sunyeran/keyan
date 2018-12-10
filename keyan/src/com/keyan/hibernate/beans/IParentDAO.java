package com.keyan.hibernate.beans;

import java.io.Serializable;

public interface IParentDAO
{
	public Object getEntity(Class entityClass, Serializable id);
}
