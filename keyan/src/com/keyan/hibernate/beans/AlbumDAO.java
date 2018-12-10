package com.keyan.hibernate.beans;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.Query;
import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;



public class AlbumDAO extends HibernateDaoSupport  {
	private static final Log log = LogFactory.getLog(SubjectDAO.class);

	public int addAlbum(Album album)
	{
		getHibernateTemplate().save(album);		
		List id = getHibernateTemplate().find(
				"select id from Album where email=? and name=?", new String[]
				{ album.getEmail(), album.getName() });
		if (id.size() > 0)
		{
			return Integer.parseInt(String.valueOf(id.get(0)));
		}
		return -1;
	}



	
	public List<Album> getAlbums(String email)
	{	String hql=	"from Album where email="+email;
	Query queryObject = getSession().createQuery(hql);
	return queryObject.list();
	}

}
