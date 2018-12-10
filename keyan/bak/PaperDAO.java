package com.keyan.hibernate.beans;

import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.keyan.hibernate.beans.Paper;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpSession;
import javax.transaction.Transaction;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.HibernateException;
import org.hibernate.LockMode;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.criterion.Example;


/**
 * A data access object (DAO) providing persistence and search support for Paper
 * entities. Transaction control of the save(), update() and delete() operations
 * can directly support Spring container-managed transactions or they can be
 * augmented to handle user-managed Spring transactions. Each of these methods
 * provides additional information for how to configure it for the desired type
 * of transaction control.
 * 
 * @see com.keyan.hibernate.beans.Paper
 * @author MyEclipse Persistence Tools
 * @param <T>
 */
public class PaperDAO extends HibernateDaoSupport implements IPaperDAO   {
	private static final Log log = LogFactory.getLog(PaperDAO.class);
	// property constants
	
	public static final String USERNAME = "username"; 
	public static final String DEPARTMENT = "department";
	public static final String PAPER_NAME = "paper_name";
	public static final String FIRST_AUTHOR = "firstAuthor";
	public static final String SECOND_AUTHOR = "secondAuthor";
	public static final String ISSN = "issn";
	public static final String CN = "cn";
	public static final String VOLUME = "volume";
	public static final String CORE = "core";
	public static final String APPROVAL = "approval";
	public static final String WORKLOAD = "workload";

	//private static final String NAME = name;
	
	public Long findCount(String hql){
		Session session = this.getHibernateTemplate().getSessionFactory().openSession();
		return (Long) session.createQuery(hql).uniqueResult();
	}
	public void save(Paper transientInstance) {
		log.debug("saving Paper instance");
		try {
			getSession().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}
	public void update(Paper transientInstance) {
		log.debug("saving Paper instance");
		try {
			
			getHibernateTemplate().saveOrUpdate(transientInstance);
			//getSession().flush();
			//return transientInstance.getPaper_id();
		} catch (RuntimeException re) {
			log.error("update failed", re);
			throw re;
		}
	}
	public void deleteById(String id) {
		Object p = getHibernateTemplate().load(Paper.class, new Integer(id));
		getHibernateTemplate().delete(p);
	}


	public void delete(Paper persistentInstance) {
		log.debug("deleting Paper instance");
		try {
			getSession().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
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
	public Paper findById(java.lang.Integer id) {
		log.debug("getting Paper instance with id: " + id);
		try {
			Paper instance = (Paper) getSession().get(
					"com.keyan.hibernate.beans.Paper", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
	public Paper findByPapername(String paper_name) {
		log.debug("getting Paper instance with id: " + paper_name);
		try {
			Paper instance = (Paper) getSession().get(
					"com.keyan.hibernate.beans.Paper", paper_name);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
	public List findByExample(Paper instance) {
		log.debug("finding Paper instance by example");
		try {
			List results = getSession()
					.createCriteria("com.keyan.hibernate.beans.Paper")
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
		log.debug("finding Paper instance with property: " + propertyName
				+ ", value: " + value);
		try {
			String queryString = "from Paper as model where model."
					+ propertyName + "= ?";
			Query queryObject = getSession().createQuery(queryString);
			queryObject.setParameter(0, value);
			return queryObject.list();
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}
	public int getCount(String hql,String user,String begindate,String enddate)
            throws HibernateException {
		/*try {
			//Session session = this.getHibernateTemplate().getSessionFactory().openSession();
			Integer count = (Integer)getHibernateTemplate().find(hql,new String[]{"user","begindate","enddate"}).listIterator().next();
			  return count.intValue();
		
        } catch (Exception e) {
            throw new HibernateException("ooo");
        }finally {
    		getSession().close();
            
        }*/
		/*org.hibernate.Transaction tx=null;
		Session session=null;
		try {
			session = this.getHibernateTemplate().getSessionFactory().getCurrentSession();
			tx=session.beginTransaction();
		Query query = getSession().createQuery(hql);
        query.setString(0, user);
        query.setString(1, begindate);
        query.setString(2, enddate);
        int count=((Number) query.uniqueResult()).intValue();
       // query=null;
        tx.commit();
        return count;
		} catch (HibernateException e) {
            throw e;
        }finally {
        	if(tx!=null){
        		tx.rollback();
        	}
    		HibernateSessionFactory.closeSession();
            
        }*/
		
		try {
			//Session session = this.getHibernateTemplate().getSessionFactory().openSession();
			Session session = this.getHibernateTemplate().getSessionFactory().openSession();
		Query query = session.createQuery(hql);
        query.setString(0, user);
        query.setString(1, begindate);
        query.setString(2, enddate);
        int count=((Number) query.uniqueResult()).intValue();
        return count;
        } catch (Exception e) {
            throw new HibernateException("ooo");
        }finally {
        	session.close();
        	
        }
    }
	public int getCoPaperCount(String hql,String user,String begindate,String enddate)
            throws HibernateException {
		
		
		try {
			//Session session = this.getHibernateTemplate().getSessionFactory().openSession();
			Session session = this.getHibernateTemplate().getSessionFactory().openSession();
		Query query = session.createQuery(hql);
        query.setString(0, user);
        query.setString(1, user);
        query.setString(2, begindate);
        query.setString(3, enddate);
        int count=((Number) query.uniqueResult()).intValue();
        return count;
        } catch (Exception e) {
            throw new HibernateException("ooo");
        }finally {
        	session.close();
        	
        }
    }
	/*public List findByUsername(Object username) {
		return findByProperty(USERNAME, username);
	}

	public List findByDepartment(Object department) {
		return findByProperty(DEPARTMENT, department);
	}

	public List findByPaperName(Object paper_name) {
		return findByProperty(PAPER_NAME, paper_name);
	}

	public List findByFirstAuthor(Object firstAuthor) {
		return findByProperty(FIRST_AUTHOR, firstAuthor);
	}

	public List findBySecondAuthor(Object secondAuthor) {
		return findByProperty(SECOND_AUTHOR, secondAuthor);
	}

	public List findByIssn(Object issn) {
		return findByProperty(ISSN, issn);
	}

	public List findByCn(Object cn) {
		return findByProperty(CN, cn);
	}

	public List findByVolume(Object volume) {
		return findByProperty(VOLUME, volume);
	}

	public List findByCore(Object core) {
		return findByProperty(CORE, core);
	}

	public List findByApproval(Object approval) {
		return findByProperty(APPROVAL, approval);
	}

	public List findByWorkload(Object workload) {
		return findByProperty(WORKLOAD, workload);
	}*/

	public List findAll(String str) {
		log.debug("finding all Paper instances");
		try {
			//String queryString = "from Paper";
			Query queryObject = getSession().createQuery(str);
			return queryObject.list();
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}
	public List findPaper(String str,String paperName) {
		log.debug("finding all Paper instances");
		try {
			//String queryString = "from Paper";
			/*Query queryObject = getSession().createQuery(str);
			List <Paper>paperlist=queryObject.list();
			return paperlist;*/
			str=str+"\""+paperName+"\"";
			List list = this.getSession().createSQLQuery(str).addEntity(Paper.class).list();
		
			return list;
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}
		public List findInPaper(String str) {
			log.debug("finding all Paper instances");
			try {
				String queryString = "select p.username,p.department,p.first_author,p.paper_name,p.workload from Paper p where username=?";
				Query queryObject = getSession().createQuery(queryString);
				queryObject.setString(0, str);
				return queryObject.list();
			} catch (RuntimeException re) {
				log.error("find all failed", re);
				throw re;
			}
	}
	public List getPaper() {
		return getHibernateTemplate().find("select username,department,first_author,paper_name,workload from Paper");
	}
	public Paper merge(Paper detachedInstance) {
		log.debug("merging Paper instance");
		try {
			Paper result = (Paper) getSession().merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Paper instance) {
		log.debug("attaching dirty Paper instance");
		try {
			getSession().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Paper instance) {
		log.debug("attaching clean Paper instance");
		try {
			getSession().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}
	public void updateById(int id,String approval) {
		// TODO Auto-generated method stub
		try {
			//String str="update Paper p set p.approval='已审核' where p.paper_id=id";
			Query query=getSession().createQuery("update Paper p set p.approval=? where p.paper_id=?");
			query.setString(0, approval);
			query.setInteger(1, id);
			query.executeUpdate();
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}
	
}