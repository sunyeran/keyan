package com.keyan.hibernate.beans;

import java.io.Serializable;

import org.springframework.orm.hibernate3.HibernateTemplate;

public class ParentDAOImpl implements IParentDAO
{
    HibernateTemplate template;
	public ParentDAOImpl(HibernateTemplate template)
	{
		this.template = template;
	}
	public Object getEntity(Class entityClass, Serializable id)
	{
		return template.get(entityClass, id);
	}
}
 