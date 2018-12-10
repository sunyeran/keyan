package com.keyan.hibernate.daoimpl;

import java.io.Serializable;
import java.sql.Connection;
import java.util.Collection;
import java.util.List;

import javax.persistence.Entity;
import org.hibernate.Hibernate;
import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.keyan.hibernate.dao.BaseDAO;

/** 统一数据访问接口实现 
 * @param <T>*/
@Entity
@SuppressWarnings("unchecked")
public class BaseDAOImpl extends HibernateDaoSupport implements BaseDAO {
	
	/** 保存或更新指定的持久化对�?*/
	public void save(Object obj) {
		getHibernateTemplate().save(obj);
	}
	
	/** 保存或更新指定的持久化对�?*/
	public void saveOrUpdate(Object obj) {
		getHibernateTemplate().saveOrUpdate(obj);
	}
	
	/** 删除指定ID的持久化对象 */
	public void deleteById(Class clazz, Serializable id) {
		getHibernateTemplate().delete(getHibernateTemplate().load(clazz, id));			
	}
	
	/** 删除指定ID的持久化对象 */
	public void delete(Object obj) {
		getHibernateTemplate().delete(obj);			
	}
	
	/** 加载指定ID的持久化对象 */
	public Object loadById(Class clazz, Serializable id) {
		return getHibernateTemplate().get(clazz, id);
	}
	
	/**加载满足条件的持久化对象*/
	public Object loadObject(String hql) {
		final String hql1 = hql;
		Object obj = null;
		List list = getHibernateTemplate().find(hql1);
		if(list.size()>0)obj=list.get(0);	
		return obj;
	}
	
	/** 查询指定类的满足条件的持久化对象 */
	public List findByHql(String hql) {
		try{
			final String hql1 = hql;
			return getHibernateTemplate().find(hql1);
		}
		catch (Exception e) {
			e.printStackTrace();
		}return null;
	}
	public List find(String hql , Object... params)
	{
		// ������ѯ
		Query query = getSessionFactory().getCurrentSession()
			.createQuery(hql);
		// Ϊ����ռλ����HQL������ò���
		for(int i = 0 , len = params.length ; i < len ; i++)
		{
			query.setParameter(i + "" , params[i]);
		}
		return (List)query.list();
	}
	
	/** 装载指定类的查询结果 */
	/*public List findInProperty(String clazz, String propertyName, String value) {
		String hql = "from "+clazz+" as model where model." + propertyName + " in (" + value + ")";
		return getHibernateTemplate().find(hql);
	}
	
	*//** 装载指定类的查询结果 *//*
	public List findLikeProperty(String clazz, String propertyName, String value) {
		String hql = "from "+clazz+" as model where model."	+ propertyName + " like ?";
		return getHibernateTemplate().find(hql, value);
	}
	
	*//** 装载指定类的查询结果 *//*
	public List findByProperty(String clazz, String propertyName, Object value) {
		String hql = "from "+clazz+" as model where model."	+ propertyName + "= ?";
		return getHibernateTemplate().find(hql, value);
	}
	
	*//** 装载指定类的查询结果 *//*
	public List findByProperty(String clazz, String[] propertyName, Object[] value) {
		String hsql = "from "+clazz+" as model where 1=1";
		for (int i = 0; i < propertyName.length; i++) {
			hsql += " and model." + propertyName[i] + "= ?";
		}
		return getHibernateTemplate().find(hsql, value);
	}
	*/
	//** 装载指定类的�?��持久化对�?*//*
	public List listAll(String clazz) {
		return getHibernateTemplate().find("from "+clazz);
	}
	
	/** 条件更新数据 */
	public int update(String hql) {
		final String hql1 = hql; 
		return ((Integer)getHibernateTemplate().execute(new HibernateCallback(){
			public Object doInHibernate(Session session) throws HibernateException{
				Query query = session.createQuery(hql1);
				return query.executeUpdate();
			}
		})).intValue();	
	}
	
	/** 统计指定类的�?��持久化对�?*/
	public int countAll(String clazz) {
		final String hql = "select count(*) from "+clazz;
		Long count = (Long)getHibernateTemplate().execute(new HibernateCallback(){
			public Object doInHibernate(Session session) throws HibernateException{
				Query query = session.createQuery(hql);
				query.setMaxResults(1);
				return query.uniqueResult();
			}
		});	
		return count.intValue();
	}

	/** 统计指定类的查询结果 */
	public int countQuery(String hql) {
		final String counthql = hql;
		Long count = (Long)getHibernateTemplate().execute(new HibernateCallback(){
			public Object doInHibernate(Session session) throws HibernateException{
				Query query = session.createQuery(counthql);
				query.setMaxResults(1);
				return query.uniqueResult();
			}
		});
		return count.intValue();
	}
	
	/** 分页装载指定类的查询结果 */
	/*public List findInProperty(String clazz, String propertyName, String value, int start, int limit) {
		String hql = "from "+clazz+" as model where model." + propertyName + " in (" + value + ")";
		return this.findByHql(hql, start, limit);
	}
	
	*//** 分页装载指定类的查询结果 *//*
	public List findLikeProperty(String clazz, String propertyName, String value, int start, int limit) {
		String hql = "from "+clazz+" as model where model."	+ propertyName + " like '"+value+"%'";
		return this.findByHql(hql, start, limit);
	}
	
	*//** 分页装载指定类的查询结果 *//*
	public List findByProperty(String clazz, String propertyName, String value, int start, int limit) {
		String hql = "from "+clazz+" as model where model."	+ propertyName + "= '"+value+"'";
		return this.findByHql(hql, start, limit);
	}
	
	*//** 分页装载指定类的查询结果 *//*
	public List findByProperty(String clazz, String[] propertyName, Object[] value, int start, int limit) {
		String hql = "from "+clazz+" as model where 1=1";
		for (int i = 0; i < propertyName.length; i++) {
			hql += " and model." + propertyName[i] + "= '"+value[i]+"'";
		}
		return this.findByHql(hql, start, limit);
	}
*/
	/** 分页装载指定类的�?��持久化对�?*/
	public List listAll(String clazz, int start, int limit) {
		final int pStart = start;
		final int pLimit = limit;
		final String hql = "from "+clazz;
		List list = getHibernateTemplate().executeFind(new HibernateCallback(){
			public Object doInHibernate(Session session) throws HibernateException{
				Query query = session.createQuery(hql);
				query.setMaxResults(pLimit);
				query.setFirstResult(pStart);
				List result = query.list();
				if (!Hibernate.isInitialized(result))Hibernate.initialize(result);
				return result;
			}
		});	
		return list;
	}
	
	/** 分页查询指定类的满足条件的持久化对象 */
	public List findByHql(String hql, int start, int limit) {
		final int pStart = start;
		final int pLimit = limit;
		final String hql1 = hql;
		return getHibernateTemplate().executeFind(new HibernateCallback(){
			public Object doInHibernate(Session session) throws HibernateException{
				Query query = session.createQuery(hql1);
				query.setMaxResults(pLimit);
				query.setFirstResult(pStart);
				List result = query.list();
				if (!Hibernate.isInitialized(result))Hibernate.initialize(result);
				return result;
			}
		});	
	}
	/** 从连接池中取得一个JDBC连接 */
	@SuppressWarnings("deprecation")
	public Connection getConnection() {
		return getHibernateTemplate().getSessionFactory().getCurrentSession().connection();
	}
		 
	/**  批量保存、修�?*/
	public void saveOrUpdateAll(Collection collection) {
		getHibernateTemplate().saveOrUpdateAll(collection);
	}

	
	

}