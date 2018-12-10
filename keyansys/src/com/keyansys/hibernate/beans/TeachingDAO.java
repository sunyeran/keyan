package com.keyansys.hibernate.beans;

import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

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
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

/**
 * A data access object (DAO) providing persistence and search support for
 * Teaching entities. Transaction control of the save(), update() and delete()
 * operations can directly support Spring container-managed transactions or they
 * can be augmented to handle user-managed Spring transactions. Each of these
 * methods provides additional information for how to configure it for the
 * desired type of transaction control.
 * 
 * @see com.keyan.hibernate.beans.Teaching
 * @author MyEclipse Persistence Tools
 */
public class TeachingDAO extends HibernateDaoSupport  implements ITeachingDAO
{
	private static final Log log = LogFactory.getLog(TeachingDAO.class);
/*public Long findCount(String hql){
		Session session = this.getHibernateTemplate().getSessionFactory().openSession();
		return (Long) session.createQuery(hql).uniqueResult();
	}*/	
	public Long findCount(String hql){
		Long count = (Long)getHibernateTemplate().find(hql).listIterator().next();
		return  count;
	}
public void update(Teaching transientInstance) {
		log.debug("saving Teaching instance");
		try {
			getHibernateTemplate().saveOrUpdate(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}
public void deleteById(String id) {
	log.debug("deleting Teaching instance");
	try {
		Object p = getHibernateTemplate().load(Teaching.class, new Integer(id));
		getHibernateTemplate().delete(p);
		log.debug("delete successful");
	} catch (RuntimeException re) {
		log.error("delete failed", re);
		throw re;
	}
  }
@SuppressWarnings("unchecked")
public List<Teaching> findAllForPage(String queryString,int pageSize,int page){
	Session session = getSession();
	List<Teaching> list = session.createQuery(queryString)
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
public List<Teaching> findAll(String str) {
	List<Teaching> list=getHibernateTemplate().find(str);
	return list;
}
@SuppressWarnings("unchecked")
public List <Teaching>findByType(String str,String user,String begindate,String enddate) {
SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
	
	ParsePosition pos1 = new ParsePosition(0);
	final Date date1 = sdf.parse(begindate,pos1);
	ParsePosition pos2 = new ParsePosition(0);
	final Date date2 = sdf.parse(enddate,pos2);
	
	List<Teaching> list=getHibernateTemplate().find(str, new Object[]{user,date1,date2});
	return list;
   }
public int getCount(String hql,String user,String begindate,String enddate)
        throws HibernateException {

  
    
    Query query = getSession().createQuery(hql);

    query.setString(0, user);
    query.setString(1, begindate);
    query.setString(2, enddate);
    try {
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
		Query query=getSession().createQuery("update Teaching p set p.approval=? where p.teaching_id=?");
		query.setString(0, approval);
		query.setInteger(1, id);
		query.executeUpdate();
	} catch (RuntimeException re) {
		log.error("审核失败", re);
		throw re;
	}
}
public static TeachingDAO getFromApplicationContext(ApplicationContext ctx) {
	return (TeachingDAO) ctx.getBean("teachingDAO");
}
}