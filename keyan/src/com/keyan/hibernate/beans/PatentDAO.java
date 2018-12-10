package com.keyan.hibernate.beans;

import java.sql.Timestamp;
import java.text.ParsePosition;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.HibernateException;
import org.hibernate.LockMode;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.criterion.Example;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

/**
 * A data access object (DAO) providing persistence and search support for
 * Patent entities. Transaction control of the save(), update() and delete()
 * operations can directly support Spring container-managed transactions or they
 * can be augmented to handle user-managed Spring transactions. Each of these
 * methods provides additional information for how to configure it for the
 * desired type of transaction control.
 * 
 * @see com.keyan.hibernate.beans.Patent
 * @author MyEclipse Persistence Tools
 */
public class PatentDAO extends HibernateDaoSupport implements IPatentDAO{
	private static final Log log = LogFactory.getLog(PatentDAO.class);
	// property constants
	public static final String PATENT_NAME = "patentName";
	public static final String PATENT_PERSON = "patentPerson";
	public static final String INVENTOR = "inventor";
	public static final String PATENT_TYPE = "patentType";
	public static final String APPLY_NO = "applyNo";
	public static final String IS_SCHOOL = "isSchool";
	public static final String IMPLEMENT = "implement";
	/*public Long findCount(String hql){
		Session session = this.getHibernateTemplate().getSessionFactory().openSession();
		return (Long) session.createQuery(hql).uniqueResult();
	}*/
	public Long findCount(String hql){
		Long count = (Long)getHibernateTemplate().find(hql).listIterator().next();
		return  count;
	}
	public void save(Patent transientInstance) {
		log.debug("saving Patent instance");
		try {
			getSession().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}
	public void updateById(int id,String str) {
		log.debug("update Patent instance");
		try {
			Query query=getSession().createQuery("update Patent p set p.approval=? where p.patent_id=?");
			query.setString(0, str);
			query.setInteger(1, id);
			query.executeUpdate();
		/*	Object p = getHibernateTemplate().load(Patent.class, new Integer(id));
			getHibernateTemplate().saveOrUpdate(p);
			log.debug("delete successful");*/
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}
	public int update(Patent transientInstance) {
			log.debug("saving Patent instance");
			try {
				getHibernateTemplate().saveOrUpdate(transientInstance);
				return transientInstance.getPatent_id();
			} catch (RuntimeException re) {
				log.error("save failed", re);
				throw re;
			}
		}
	public void deleteById(String id) {
		log.debug("deleting Patent instance");
		try {
			Object p = getHibernateTemplate().load(Patent.class, new Integer(id));
			getHibernateTemplate().delete(p);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}
	@SuppressWarnings("unchecked")
	public List<Patent> findAllForPage(String queryString,int pageSize,int page){
		Session session = getSession();
		List<Patent> list = session.createQuery(queryString)
				.setFirstResult(page)
				.setMaxResults(pageSize).list();
		releaseSession(session);
		return list;
	
	}
	/*public List findAllForPage(String queryString,int pageSize,int page){
		Query query = getSession().createQuery(queryString);
		query.setFirstResult(page); 
		query.setMaxResults(pageSize); 
		return query.list();
		
	}*/
	public Patent findById(java.lang.Integer id) {
		log.debug("getting Patent instance with id: " + id);
		try {
			Patent instance = (Patent) getSession().get(
					"com.keyan.hibernate.beans.Patent", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Patent instance) {
		log.debug("finding Patent instance by example");
		try {
			List results = getSession()
					.createCriteria("com.keyan.hibernate.beans.Patent")
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
		log.debug("finding Patent instance with property: " + propertyName
				+ ", value: " + value);
		try {
			String queryString = "from Patent as model where model."
					+ propertyName + "= ?";
			Query queryObject = getSession().createQuery(queryString);
			queryObject.setParameter(0, value);
			return queryObject.list();
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findByPatentName(Object patentName) {
		return findByProperty(PATENT_NAME, patentName);
	}

	public List findByPatentPerson(Object patentPerson) {
		return findByProperty(PATENT_PERSON, patentPerson);
	}

	public List findByInventor(Object inventor) {
		return findByProperty(INVENTOR, inventor);
	}

	public List findByPatentType(Object patentType) {
		return findByProperty(PATENT_TYPE, patentType);
	}

	public List findByApplyNo(Object applyNo) {
		return findByProperty(APPLY_NO, applyNo);
	}

	public List findByIsSchool(Object isSchool) {
		return findByProperty(IS_SCHOOL, isSchool);
	}

	public List findByImplement(Object implement) {
		return findByProperty(IMPLEMENT, implement);
	}
	public int getCount(String hql,String user,String begindate,String enddate)
            throws HibernateException {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		ParsePosition pos1 = new ParsePosition(0);
		final Date date1 = sdf.parse(begindate,pos1);
		ParsePosition pos2 = new ParsePosition(0);
		final Date date2 = sdf.parse(enddate,pos2);
		Long count = (Long)getHibernateTemplate().find(hql, new Object[]{user,date1,date2}).listIterator().next();
		return (int) count.intValue();
    }
	@SuppressWarnings("unchecked")
	public List<Patent> findAll(String str) {
		List<Patent> list=getHibernateTemplate().find(str);
		return list;
	}
/*
	public List findAll(String str) {
		log.debug("finding all Patent instances");
		try {
			//String queryString = "from Paper";
			Query queryObject = getSession().createQuery(str);
			return queryObject.list();
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Patent merge(Patent detachedInstance) {
		log.debug("merging Patent instance");
		try {
			Patent result = (Patent) getSession().merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Patent instance) {
		log.debug("attaching dirty Patent instance");
		try {
			getSession().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Patent instance) {
		log.debug("attaching clean Patent instance");
		try {
			getSession().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}*/
	public static PatentDAO getFromApplicationContext(ApplicationContext ctx) {
		return (PatentDAO) ctx.getBean("patentDAO");
	}
}