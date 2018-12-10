package com.keyan.hibernate.beans;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.Query;
import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;


//import com.keyan.hibernate.beans.PhotoDAO;

import com.keyan.hibernate.beans.Photo;

public class PhotoDAO extends HibernateDaoSupport implements IPhoto
{private static final Log log = LogFactory.getLog(PaperDAO.class);
	public PhotoDAO(){
		
	}
//	HibernateTemplate template;
	
	@SuppressWarnings("unused")
	private int getUserId(String user) 
	{
		List idList = getHibernateTemplate().find("from User where name=?",user);
		int id = 0;
		if (idList.size() > 0)
		{
			id = Integer.parseInt(String.valueOf(idList.get(0)));
		}
		return id;
	}

	/*@Override
	public List<Photo> getFriendPhotos(String friendEmail)
	{
		int id = getUserId(friendEmail);
		List<Photo> list = null;
		if (id > 0)
		{
			list = template.find("from Photo where userId = ?", new Object[]
			{ id });
		}
		return list;
	}*/
	public void save(Photo transientInstance) {
		log.debug("saving Photo instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}
	@Override
	public void addPhoto(Photo photo, String username)
	{
		//int id = getUserId(username);
		//photo.setUser_id(id);		
		getHibernateTemplate().save(photo);
	}
	/*public List<Photo> getPhotos(String username)
	{try {
		
		Query query = getSession().createQuery("from Photo where username =?");
		query.setString(0, username);
		return query.list();
	} catch (RuntimeException re) {
		log.error("find all failed", re);
		throw re;
	}
	}*/
	public List<Photo> getPhotos(String username)
	{try {
		List list = getHibernateTemplate().find("from Photo where username=?",username);
		return list;
	} catch (RuntimeException re) {
		log.error("find all failed", re);
		throw re;
	}
	}
	public List<Photo> getDepPhotos(String dep,String name)
	{try {
		List list = getHibernateTemplate().find("from Photo where dep =? and username=?", new Object[]{ dep,name });
		return list;
	} catch (RuntimeException re) {
		log.error("find all failed", re);
		throw re;
	}
	}
	/*public List<Photo> getDepPhotos(String dep,String name)
	{try {
		
		Query query = getSession().createQuery("from Photo where dep =? and username=?");
		query.setString(0, dep);
		query.setString(1, name);
		return query.list();
	} catch (RuntimeException re) {
		log.error("find all failed", re);
		throw re;
	}
	}

	@Override
	public List<Photo> getPhotos(String dep)
	{
		List<Photo> list = template.find("from Photo where dep = ?",
				new Object[]
				{ dep });
		return list;
	}*/

	/*public PhotoDAO(HibernateTemplate template)
	{
		super(template);
		// TODO Auto-generated constructor stub
	}*/

	public void delete(String id) {
		Object p = getHibernateTemplate().load(Photo.class, new Integer(id));
		getHibernateTemplate().delete(p);
	}
	/*public void remove(int photoId)
	{
		template.bulkUpdate("delete from Photo where id=?", new Object[]
		{ photoId });
	}*/


}
