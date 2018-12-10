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
 * A data access object (DAO) providing persistence and search support for Lqcx
 * entities. Transaction control of the save(), update() and delete() operations
 * can directly support Spring container-managed transactions or they can be
 * augmented to handle user-managed Spring transactions. Each of these methods
 * provides additional information for how to configure it for the desired type
 * of transaction control.
 * 
 * @see com.zs.hibernate.beans.Lqcx
 * @author MyEclipse Persistence Tools
 */

public class LqcxDAO extends HibernateDaoSupport {
	private static final Log log = LogFactory.getLog(LqcxDAO.class);
	// property constants
	public static final String XM = "xm";
	public static final String KSH = "ksh";
	public static final String XBDM = "xbdm";
	public static final String SFZH = "sfzh";
	public static final String LQZY = "lqzy";
	public static final String XI = "xi";
	public static final String SHENG = "sheng";

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

	public void save(Lqcx transientInstance) {
		log.debug("saving Lqcx instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(Lqcx persistentInstance) {
		log.debug("deleting Lqcx instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Lqcx findById(java.lang.Integer id) {
		log.debug("getting Lqcx instance with id: " + id);
		try {
			Lqcx instance = (Lqcx) getHibernateTemplate().get(
					"com.zs.hibernate.beans.Lqcx", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
	public Lqcx findByKsh(String ksh) {
		String hql="from Lqcx u where u.ksh=?";
		String userlist=ksh;
		List ret=null;
		Iterator it=null;
		try {
			ret =this.getHibernateTemplate().find(hql,userlist);
			it=ret.iterator();
			return (Lqcx)it.next();
		} catch (RuntimeException re) {
		//	log.error("get failed", re);
			throw re;
		}
	}
	public List findByExample(Lqcx instance) {
		log.debug("finding Lqcx instance by example");
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
		log.debug("finding Lqcx instance with property: " + propertyName
				+ ", value: " + value);
		try {
			String queryString = "from Lqcx as model where model."
					+ propertyName + "= ?";
			return getHibernateTemplate().find(queryString, value);
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findByXm(Object xm) {
		return findByProperty(XM, xm);
	}

	public List findByKsh(Object ksh) {
		return findByProperty(KSH, ksh);
	}

	public List findByXbdm(Object xbdm) {
		return findByProperty(XBDM, xbdm);
	}

	public List findBySfzh(Object sfzh) {
		return findByProperty(SFZH, sfzh);
	}

	public List findByLqzy(Object lqzy) {
		return findByProperty(LQZY, lqzy);
	}

	public List findByXi(Object xi) {
		return findByProperty(XI, xi);
	}

	public List findBySheng(Object sheng) {
		return findByProperty(SHENG, sheng);
	}

	public List findAll() {
		log.debug("finding all Lqcx instances");
		try {
			String queryString = "from Lqcx";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Lqcx merge(Lqcx detachedInstance) {
		log.debug("merging Lqcx instance");
		try {
			Lqcx result = (Lqcx) getHibernateTemplate().merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Lqcx instance) {
		log.debug("attaching dirty Lqcx instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Lqcx instance) {
		log.debug("attaching clean Lqcx instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static LqcxDAO getFromApplicationContext(ApplicationContext ctx) {
		return (LqcxDAO) ctx.getBean("LqcxDAO");
	}
	public Lqcx findByUsername(String ksh) {
		String hql="from Lqcx u where u.ksh=?";
		String[] userlist=new String[1];
		userlist[0]=ksh;
		
		List ret=null;
		Iterator it=null;
		try {
			ret =this.getHibernateTemplate().find(hql,userlist);
			it=ret.iterator();
			return (Lqcx)it.next();
		} catch (RuntimeException re) {
		//	log.error("get failed", re);
			throw re;
		}
	}
}