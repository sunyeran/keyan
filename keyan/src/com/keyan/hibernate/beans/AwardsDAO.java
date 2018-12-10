package com.keyan.hibernate.beans;

import java.util.Date;
import java.util.List;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.LockMode;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

/**
 * A data access object (DAO) providing persistence and search support for
 * Awards entities. Transaction control of the save(), update() and delete()
 * operations can directly support Spring container-managed transactions or they
 * can be augmented to handle user-managed Spring transactions. Each of these
 * methods provides additional information for how to configure it for the
 * desired type of transaction control.
 * 
 * @see com.keyan.hibernate.beans.Awards
 * @author MyEclipse Persistence Tools
 */

public class AwardsDAO extends HibernateDaoSupport {
	private static final Log log = LogFactory.getLog(AwardsDAO.class);
	// property constants
	public static final String NAME = "name";
	public static final String AUTHOR = "author";
	public static final String OTHOR_AUTHOR = "othorAuthor";
	public static final String AWARD_NAME = "awardName";
	public static final String AWARDER = "awarder";
	public static final String AWARD_LEVEL = "awardLevel";

	protected void initDao() {
		// do nothing
	}

	public void save(Awards transientInstance) {
		log.debug("saving Awards instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(Awards persistentInstance) {
		log.debug("deleting Awards instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Awards findById(java.lang.Integer id) {
		log.debug("getting Awards instance with id: " + id);
		try {
			Awards instance = (Awards) getHibernateTemplate().get(
					"com.keyan.hibernate.beans.Awards", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Awards instance) {
		log.debug("finding Awards instance by example");
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
		log.debug("finding Awards instance with property: " + propertyName
				+ ", value: " + value);
		try {
			String queryString = "from Awards as model where model."
					+ propertyName + "= ?";
			return getHibernateTemplate().find(queryString, value);
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findByName(Object name) {
		return findByProperty(NAME, name);
	}

	public List findByAuthor(Object author) {
		return findByProperty(AUTHOR, author);
	}

	public List findByOthorAuthor(Object othorAuthor) {
		return findByProperty(OTHOR_AUTHOR, othorAuthor);
	}

	public List findByAwardName(Object awardName) {
		return findByProperty(AWARD_NAME, awardName);
	}

	public List findByAwarder(Object awarder) {
		return findByProperty(AWARDER, awarder);
	}

	public List findByAwardLevel(Object awardLevel) {
		return findByProperty(AWARD_LEVEL, awardLevel);
	}

	public List findAll() {
		log.debug("finding all Awards instances");
		try {
			String queryString = "from Awards";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Awards merge(Awards detachedInstance) {
		log.debug("merging Awards instance");
		try {
			Awards result = (Awards) getHibernateTemplate().merge(
					detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Awards instance) {
		log.debug("attaching dirty Awards instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Awards instance) {
		log.debug("attaching clean Awards instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static AwardsDAO getFromApplicationContext(ApplicationContext ctx) {
		return (AwardsDAO) ctx.getBean("AwardsDAO");
	}
}