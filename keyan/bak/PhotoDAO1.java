package com.keyan.hibernate.beans;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;



public class PhotoDAO1 extends  HibernateDaoSupport  {
	private static final Log log = LogFactory.getLog(SubjectDAO.class);
	private int getUserId(String email) 
	{
		List idList = getHibernateTemplate().find("select id from User where email=?",
				new String[]
				{ email });
		int id = 0;
		if (idList.size() > 0)
		{
			id = Integer.parseInt(String.valueOf(idList.get(0)));
		}
		return id;
	}

	
	public List<Photo> getFriendPhotos(String friendEmail)
	{
		int id = getUserId(friendEmail);
		List<Photo> list = null;
		if (id > 0)
		{
			list = getHibernateTemplate().find("from Photo where userId = ?", new Object[]
			{ id });
		}
		return list;
	}

	
	public void addPhoto(Photo photo, String email)
	{
		int id = getUserId(email);
		photo.setUserId(id);		
		getHibernateTemplate().save(photo);
	}


	public List<Photo> getPhotos(int albumId)
	{
		List<Photo> list = getHibernateTemplate().find("from Photo where albumId = ?",
				new Object[]
				{ albumId });
		return list;
	}

	public void remove(int photoId)
	{
		getHibernateTemplate().bulkUpdate("delete from Photo where id=?", new Object[]
		{ photoId });
	}


}
