package com.zs.hibernate.beans;

import java.util.Date;
import java.util.List;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.HibernateException;
import org.hibernate.LockMode;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;



/**
 * A data access object (DAO) providing persistence and search support for
 * Cxdate entities. Transaction control of the save(), update() and delete()
 * operations can directly support Spring container-managed transactions or they
 * can be augmented to handle user-managed Spring transactions. Each of these
 * methods provides additional information for how to configure it for the
 * desired type of transaction control.
 * 
 * @see com.zs.hibernate.beans.Cxdate
 * @author MyEclipse Persistence Tools
 */

public class CxdateDAO extends HibernateDaoSupport {
	private static final Log log = LogFactory.getLog(CxdateDAO.class);
	// property constants
	public static final String TISHI = "tishi";

	protected void initDao() {
		// do nothing
	}
	public boolean isExist(final String name) {
		List list = (List) getHibernateTemplate().execute(new HibernateCallback() {
			public Object doInHibernate(Session session)
					throws HibernateException {
				List result = session.createCriteria(Cxdate.class).add(
						Restrictions.eq("flag", name)).list();
				return result;
			}
		});
		if (list.size() > 0) {
			return true;
		} else {
			return false;
		}
	}
	public void savePartData(String tishi,String flag)
            throws HibernateException {
		
		try {
			Query query=getSession().createQuery("update Cxdate u set u.tishi=? where u.flag=?");
			query.setString(0, tishi);
			query.setString(1, flag);
			query.executeUpdate();
		} catch (RuntimeException re) {
			log.error("¸üÐÂÊ§°Ü", re);
			throw re;
		}
	}
	public void save(Cxdate transientInstance) {
		log.debug("saving Cxdate instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(Cxdate persistentInstance) {
		log.debug("deleting Cxdate instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Cxdate findById(java.lang.Integer id) {
		log.debug("getting Cxdate instance with id: " + id);
		try {
			Cxdate instance = (Cxdate) getHibernateTemplate().get(
					"com.zs.hibernate.beans.Cxdate", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Cxdate instance) {
		log.debug("finding Cxdate instance by example");
		try {
			List results = getHibernateTemplate().findByExample(instance);
			log.debug("find by example successful, result size: "
					+ results.size());
			return results;
		} catch (RuntimeException re) {
			log.error("find by example failed", re);
			throw re;
		}
	}

	public List findByProperty(String propertyName, Object value) {
		log.debug("finding Cxdate instance with property: " + propertyName
				+ ", value: " + value);
		try {
			String queryString = "from Cxdate as model where model."
					+ propertyName + "= ?";
			return getHibernateTemplate().find(queryString, value);
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findByTishi(Object tishi) {
		return findByProperty(TISHI, tishi);
	}

	@SuppressWarnings("unchecked")
	public List<Cxdate> findAll() {
		log.debug("finding all Cxdate instances");
		try {
			String queryString = "from Cxdate";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Cxdate merge(Cxdate detachedInstance) {
		log.debug("merging Cxdate instance");
		try {
			Cxdate result = (Cxdate) getHibernateTemplate().merge(
					detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Cxdate instance) {
		log.debug("attaching dirty Cxdate instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Cxdate instance) {
		log.debug("attaching clean Cxdate instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static CxdateDAO getFromApplicationContext(ApplicationContext ctx) {
		return (CxdateDAO) ctx.getBean("CxdateDAO");
	}
}