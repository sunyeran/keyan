package com.zs.hibernate.beans;

import java.util.Iterator;
import java.util.List;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.HibernateException;
import org.hibernate.LockMode;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

/**
 * A data access object (DAO) providing persistence and search support for Kdcx
 * entities. Transaction control of the save(), update() and delete() operations
 * can directly support Spring container-managed transactions or they can be
 * augmented to handle user-managed Spring transactions. Each of these methods
 * provides additional information for how to configure it for the desired type
 * of transaction control.
 * 
 * @see com.zs.hibernate.beans.Kdcx
 * @author MyEclipse Persistence Tools
 */

public class KdcxDAO extends HibernateDaoSupport {
	private static final Log log = LogFactory.getLog(KdcxDAO.class);
	// property constants
	public static final String KSH = "ksh";
	public static final String XM = "xm";
	public static final String SJR = "sjr";
	public static final String JTDZ = "jtdz";
	public static final String YZBM = "yzbm";
	public static final String LXDH = "lxdh";
	public static final String YJH = "yjh";

	protected void initDao() {
		// do nothing
	}
	@SuppressWarnings("unchecked")
	public boolean isValid(final String ksh) {
		List list = (List) getHibernateTemplate().execute(new HibernateCallback() {
			public Object doInHibernate(Session session)
					throws HibernateException {
				List userList = session.createCriteria(Lqcx.class).add(
						Restrictions.eq("ksh", ksh)).list();
				return userList;
			}
		});
		if (list.size() > 0) {
			return true;
		} else {
			return false;
		}
	}

	public Kdcx findByKsh(String ksh) {
		String hql="from Kdcx u where u.ksh=?";
		String userlist=ksh;
		List ret=null;
		Object it=null;
		try {
			ret =this.getHibernateTemplate().find(hql,userlist);
			it=ret.iterator();
			it=((Iterator) it).next();
			return (Kdcx)it;
		} catch (RuntimeException re) {
		//	log.error("get failed", re);
			throw re;
		}
	}
	public void save(Kdcx transientInstance) {
		log.debug("saving kdcx instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}
	public void delete(Kdcx persistentInstance) {
		log.debug("deleting Kdcx instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Kdcx findById(java.lang.Integer id) {
		log.debug("getting Kdcx instance with id: " + id);
		try {
			Kdcx instance = (Kdcx) getHibernateTemplate().get(
					"com.zs.hibernate.beans.Kdcx", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	/*public List findByExample(Kdcx instance) {
		log.debug("finding Kdcx instance by example");
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
		log.debug("finding Kdcx instance with property: " + propertyName
				+ ", value: " + value);
		try {
			String queryString = "from Kdcx as model where model."
					+ propertyName + "= ?";
			return getHibernateTemplate().find(queryString, value);
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findByKsh(Object ksh) {
		return findByProperty(KSH, ksh);
	}

	public List findByXm(Object xm) {
		return findByProperty(XM, xm);
	}

	public List findBySjr(Object sjr) {
		return findByProperty(SJR, sjr);
	}

	public List findByJtdz(Object jtdz) {
		return findByProperty(JTDZ, jtdz);
	}

	public List findByYzbm(Object yzbm) {
		return findByProperty(YZBM, yzbm);
	}

	public List findByLxdh(Object lxdh) {
		return findByProperty(LXDH, lxdh);
	}

	public List findByYjh(Object yjh) {
		return findByProperty(YJH, yjh);
	}

	public List findAll() {
		log.debug("finding all Kdcx instances");
		try {
			String queryString = "from Kdcx";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Kdcx merge(Kdcx detachedInstance) {
		log.debug("merging Kdcx instance");
		try {
			Kdcx result = (Kdcx) getHibernateTemplate().merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Kdcx instance) {
		log.debug("attaching dirty Kdcx instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Kdcx instance) {
		log.debug("attaching clean Kdcx instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}
*/
	public static KdcxDAO getFromApplicationContext(ApplicationContext ctx) {
		return (KdcxDAO) ctx.getBean("KdcxDAO");
	}
}