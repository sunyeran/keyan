package com.keyan.hibernate.beans;

import java.sql.Timestamp;
import java.util.List;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.LockMode;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.criterion.Example;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

/**
 * A data access object (DAO) providing persistence and search support for
 * Notice entities. Transaction control of the save(), update() and delete()
 * operations can directly support Spring container-managed transactions or they
 * can be augmented to handle user-managed Spring transactions. Each of these
 * methods provides additional information for how to configure it for the
 * desired type of transaction control.
 * 
 * @see com.keyan.hibernate.beans.Notice
 * @author MyEclipse Persistence Tools
 */
public class NoticeDAO extends HibernateDaoSupport implements INotice {
	private static final Log log = LogFactory.getLog(NoticeDAO.class);
	// property constants
	public static final String SENDER = "sender";
	public static final String TITLE = "title";
	public static final String CONTENT = "content";

	public void save(Notice transientInstance) {
		log.debug("saving Notice instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}
	public void updateNotice(Notice transientInstance) {
		log.debug("update Notice instance");
		try {
			getHibernateTemplate().saveOrUpdate(transientInstance);
			log.debug("update successful");
		} catch (RuntimeException re) {
			log.error("update failed", re);
			throw re;
		}
	}
	public void delete(Notice persistentInstance) {
		log.debug("deleting Notice instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Notice findById(java.lang.Integer id) {
		log.debug("getting Notice instance with id: " + id);
		try {
			Notice instance = (Notice) getSession().get(
					"com.keyan.hibernate.beans.Notice", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Notice instance) {
		log.debug("finding Notice instance by example");
		try {
			List results = getSession()
					.createCriteria("com.keyan.hibernate.beans.Notice")
					.add(Example.create(instance)).list();
			log.debug("find by example successful, result size: "
					+ results.size());
			return results;
		} catch (RuntimeException re) {
			log.error("find by example failed", re);
			throw re;
		}
	}

	public List findByProperty(String propertyName, Object value) {
		log.debug("finding Notice instance with property: " + propertyName
				+ ", value: " + value);
		try {
			String queryString = "from Notice as model where model."
					+ propertyName + "= ?";
			Query queryObject = getSession().createQuery(queryString);
			queryObject.setParameter(0, value);
			return queryObject.list();
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findBySender(Object sender) {
		return findByProperty(SENDER, sender);
	}

	public List findByTitle(Object title) {
		return findByProperty(TITLE, title);
	}

	public List findByContent(Object content) {
		return findByProperty(CONTENT, content);
	}

	/*public List findAll(String str) {
		log.debug("finding all Notice instances");
		try {
			//String queryString = "from Notice";
			Query queryObject = getSession().createQuery(str);
			return queryObject.list();
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}*/
	
	public List findAll(String str) {
		List list=getHibernateTemplate().find(str);
		return list;
	}
	public List findAllForPage(String queryString,int pageSize,int page){
		//Session session = this.getHibernateTemplate().getSessionFactory().openSession();
		Query query = getSession().createQuery(queryString);
		//Query   query   =   session.createQuery(queryString); 
		query.setFirstResult(page); 
		query.setMaxResults(pageSize); 
		return query.list();
		//List list= (List)query.list();
		//session.close();
		//return list;
	}
	public Long findCount(String hql){
		Session session = this.getHibernateTemplate().getSessionFactory().openSession();
		return (Long) session.createQuery(hql).uniqueResult();
	}
	public void deleteNotice(String noticeId) {
		Object p = getHibernateTemplate().load(Notice.class, new Integer(noticeId));
		getHibernateTemplate().delete(p);
	}
	
	public Notice merge(Notice detachedInstance) {
		log.debug("merging Notice instance");
		try {
			Notice result = (Notice) getSession().merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Notice instance) {
		log.debug("attaching dirty Notice instance");
		try {
			getSession().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Notice instance) {
		log.debug("attaching clean Notice instance");
		try {
			getSession().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}
}