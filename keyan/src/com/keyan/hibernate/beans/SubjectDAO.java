package com.keyan.hibernate.beans;

import java.sql.Timestamp;
import java.text.ParseException;
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
 * Subject entities. Transaction control of the save(), update() and delete()
 * operations can directly support Spring container-managed transactions or they
 * can be augmented to handle user-managed Spring transactions. Each of these
 * methods provides additional information for how to configure it for the
 * desired type of transaction control.
 * 
 * @see com.keyan.hibernate.beans.Subject
 * @author MyEclipse Persistence Tools
 */
public class SubjectDAO extends HibernateDaoSupport implements ISubjectDAO {
	private static final Log log = LogFactory.getLog(SubjectDAO.class);
	// property constants
	/*	public static final String SUBJECT_NAME = "subjectName";
	public static final String SUBJECT_NO = "subjectNo";
	public static final String IS_FIRST_UNIT = "isFirstUnit";
	public static final String HEAD = "head";
	public static final String PARTICIPANTS = "participants";
	public static final String PROJECT_DEPT = "projectDept";
	public static final String OUTBOUND_FUNDS = "outboundFunds";
	public static final String SELF_FUNDING = "selfFunding";
	public static final String APPRAISAL_DEPT = "appraisalDept";
*/
/*public Long findCount(String hql){
		Session session = this.getHibernateTemplate().getSessionFactory().openSession();
		return (Long) session.createQuery(hql).uniqueResult();
	}*/
	public Long findCount(String hql){
		Long count = (Long)getHibernateTemplate().find(hql).listIterator().next();
		return  count;
	}
public void update(Subject transientInstance) {
		log.debug("saving Subject instance");
		try {
			getHibernateTemplate().saveOrUpdate(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}
public void deleteById(String id) {
	log.debug("deleting Subject instance");
	try {
		Object p = getHibernateTemplate().load(Subject.class, new Integer(id));
		getHibernateTemplate().delete(p);
		log.debug("delete successful");
	} catch (RuntimeException re) {
		log.error("delete failed", re);
		throw re;
	}
  }
@SuppressWarnings("unchecked")
public List<Subject> findAllForPage(String queryString,int pageSize,int page){
	Session session = getSession();
	List<Subject> list = session.createQuery(queryString)
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

@SuppressWarnings("unchecked")
public List<Subject> findAll(String str) {
	List<Subject> list=getHibernateTemplate().find(str);
	return list;
}
/*public List <Subject>findByType(String str,String user,String begindate,String enddate) {
	log.debug("finding all Teaching instances");
	try {
		Query query = getSession().createQuery(str);
		query.setString(0, user);
		query.setString(1, begindate);
	    query.setString(2, enddate);
		return query.list();
	} catch (RuntimeException re) {
		log.error("find all failed", re);
		throw re;
	}finally {
    	getSession().close();
    }
	
   }*/
@SuppressWarnings("unchecked")
public List <Subject>findByType(String str,String user,String begindate,String enddate) throws Exception {
	log.debug("finding all Teaching instances");
SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
	
	ParsePosition pos1 = new ParsePosition(0);
	final Date date1 = sdf.parse(begindate,pos1);
	ParsePosition pos2 = new ParsePosition(0);
	final Date date2 = sdf.parse(enddate,pos2);
	
	List<Subject> list=getHibernateTemplate().find(str, new Object[]{user,date1,date2});
	return list;
}
/**@SuppressWarnings("unchecked")
public List <Subject>findByType(final String name,final String begindate,final String enddate) throws Exception {
	log.debug("finding all Teaching instances");
	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
	
	ParsePosition pos1 = new ParsePosition(0);
	final Date date1 = sdf.parse(begindate,pos1);
	ParsePosition pos2 = new ParsePosition(0);
	final Date date2 = sdf.parse(enddate,pos2);
	System.out.println(begindate);
	System.out.println(enddate);
	System.out.println(date1);
	System.out.println(date2);
	List list=(List)getHibernateTemplate().executeFind(new HibernateCallback(){
		public Object doInHibernate(Session session)throws HibernateException{
			List result=session.createCriteria(Subject.class).add(Restrictions.eq("name", name))
					.add(Restrictions.ge("concludingTime", date1))
			.add(Restrictions.le("concludingTime", date2)).list();
			return result;
		}
	});
	return list;
	
   }*/

public int getCount(String hql,String user,String begindate,String enddate)
        throws HibernateException {
	  try {
		//  Session session = this.getHibernateTemplate().getSessionFactory().openSession();
	Query query = getSession().createQuery(hql);
    query.setString(0, user);
    query.setString(1, begindate);
    query.setString(2, enddate);
  
    	int count=((Number) query.uniqueResult()).intValue();
    	
        return count;
    } catch (Exception e) {
        throw new HibernateException("ooo");
    } finally {
    	getSession().close();
    }
}
public void updateById(int id,String approval) {
	// TODO Auto-generated method stub
	try {
		//String str="update Paper p set p.approval='已审核' where p.paper_id=id";
		Query query=getSession().createQuery("update Subject p set p.approval=? where p.subject_id=?");
		query.setString(0, approval);
		query.setInteger(1, id);
		query.executeUpdate();
	} catch (RuntimeException re) {
		log.error("审核失败", re);
		throw re;
	}finally {
    	getSession().close();
    }
}
/*
	public Subject findById(java.lang.Integer id) {
		log.debug("getting Subject instance with id: " + id);
		try {
			Subject instance = (Subject) getSession().get(
					"com.keyan.hibernate.beans.Subject", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Subject instance) {
		log.debug("finding Subject instance by example");
		try {
			List results = getSession()
					.createCriteria("com.keyan.hibernate.beans.Subject")
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
		log.debug("finding Subject instance with property: " + propertyName
				+ ", value: " + value);
		try {
			String queryString = "from Subject as model where model."
					+ propertyName + "= ?";
			Query queryObject = getSession().createQuery(queryString);
			queryObject.setParameter(0, value);
			return queryObject.list();
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findBySubjectName(Object subjectName) {
		return findByProperty(SUBJECT_NAME, subjectName);
	}

	public List findBySubjectNo(Object subjectNo) {
		return findByProperty(SUBJECT_NO, subjectNo);
	}

	public List findByIsFirstUnit(Object isFirstUnit) {
		return findByProperty(IS_FIRST_UNIT, isFirstUnit);
	}

	public List findByHead(Object head) {
		return findByProperty(HEAD, head);
	}

	public List findByParticipants(Object participants) {
		return findByProperty(PARTICIPANTS, participants);
	}

	public List findByProjectDept(Object projectDept) {
		return findByProperty(PROJECT_DEPT, projectDept);
	}

	public List findByOutboundFunds(Object outboundFunds) {
		return findByProperty(OUTBOUND_FUNDS, outboundFunds);
	}

	public List findBySelfFunding(Object selfFunding) {
		return findByProperty(SELF_FUNDING, selfFunding);
	}

	public List findByAppraisalDept(Object appraisalDept) {
		return findByProperty(APPRAISAL_DEPT, appraisalDept);
	}

	public List findAll() {
		log.debug("finding all Subject instances");
		try {
			String queryString = "from Subject";
			Query queryObject = getSession().createQuery(queryString);
			return queryObject.list();
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Subject merge(Subject detachedInstance) {
		log.debug("merging Subject instance");
		try {
			Subject result = (Subject) getSession().merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Subject instance) {
		log.debug("attaching dirty Subject instance");
		try {
			getSession().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}
	public void attachClean(Subject instance) {
		log.debug("attaching clean Subject instance");
		try {
			getSession().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}*/
public static SubjectDAO getFromApplicationContext(ApplicationContext ctx) {
	return (SubjectDAO) ctx.getBean("subjectDAO");
}

}