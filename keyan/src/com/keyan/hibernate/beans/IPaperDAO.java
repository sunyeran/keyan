package com.keyan.hibernate.beans;

import java.util.List;

public interface IPaperDAO {
	public void save(Paper transientInstance);
	public void update(Paper transientInstance);
	public void deleteById(String id);
	public void delete(Paper persistentInstance);
	public Paper findById(java.lang.Integer id);
	public int getCount(String hql,String user,String begindate,String enddate);
	public List findAll(String str);
	
}
