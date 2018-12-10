package com.keyan.servlet;


import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import net.sf.json.JsonConfig;
//import net.sf.json.JsonConfig;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.transaction.annotation.Transactional;

import com.keyan.hibernate.beans.Paper;
import com.keyan.hibernate.beans.PaperDAO;
import com.keyan.hibernate.beans.Patent;
import com.keyan.hibernate.beans.PatentDAO;
import com.keyan.hibernate.beans.Subject;
import com.keyan.hibernate.beans.SubjectDAO;
import com.keyan.hibernate.beans.Teaching;
import com.keyan.hibernate.beans.TeachingDAO;
import com.keyan.hibernate.util.Constants;
import com.keyan.hibernate.util.JsonDateValueProcessor;


public class DataList extends HttpServlet {

	/**
	 * Constructor of the object.
	 */

	 public PaperDAO paperDAO;
	
	 public void setPaperDAO(PaperDAO paperDAO){
		 this.paperDAO=paperDAO;
	 }
	 public PatentDAO patentDAO;
	 
	 public void setPatentDAO(PatentDAO patentDAO){
		 this.patentDAO=patentDAO;
	 }
     public SubjectDAO subjectDAO;
	 
	 public void setSubjectDAO(SubjectDAO subjectDAO){
		 this.subjectDAO=subjectDAO;
	 }
     public TeachingDAO teachingDAO;
	 
	 public void setTeachingDAO(TeachingDAO teachingDAO){
		 this.teachingDAO=teachingDAO;
	 }
	public DataList() {
		super();
	}
	 @Transactional(readOnly = true, rollbackFor = Throwable.class)
	public void service(HttpServletRequest request ,
			HttpServletResponse response)
			throws IOException , ServletException
		{    String user=(String)request.getSession().getAttribute(Constants.USERNAME_KEY);
		     String dept=(String)request.getSession().getAttribute(Constants.DEPARTMENT_KEY);
		     String groupid=(String)request.getSession().getAttribute(Constants.GROUPID_KEY);
		     System.out.println(user);
		     System.out.println(dept);
		     System.out.println(groupid);
		    Map<String , Object> map = new HashMap();
		    List list=new ArrayList();
		    String entity=request.getParameter("entity");
		    String hql="from "+entity;
		    String hql1="";
		    if(groupid.equals("2")){
		    	hql1=" where department="+"'"+dept+"'";	
		    	hql=hql+hql1;}
		    else if(groupid.equals("3")){
		    	hql1=" where username="+"'"+user+"'";		   
		    	hql=hql+hql1; }
		    else{
		    	hql1=" where";
		    	hql="from "+entity;
		    }
		        
		   // System.out.println(entity);
		    if("Paper".equals(entity)){
		        hql="from "+entity;
		    	hql1=" where username="+"'"+user+"'";		   
			   	hql=hql+hql1; 
			   	paperDAO = new PaperDAO();
				ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
				paperDAO = (PaperDAO) ctx.getBean("paperDAO");
			   // List<Paper> list=new ArrayList<Paper>();
				list=paperDAO.findAll(hql);
				
		    }
		    else if("PaperCheck".equals(entity)){
		    	if(groupid.equals("1"))
		    		hql="from Paper "+hql1+" approval='未审核'";
		    	else
		    	hql="from Paper "+hql1+"and approval='未审核'";
				paperDAO = new PaperDAO();
				ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
				paperDAO = (PaperDAO) ctx.getBean("paperDAO");
			   // List<Paper> list=new ArrayList<Paper>();
				list=paperDAO.findAll(hql);
				
		    }
		    else if("PaperUncheck".equals(entity)){
		    	if(groupid.equals("1"))
		    		hql="from Paper "+hql1+" approval='已审核'";
		    	else
		    	hql="from Paper "+hql1+"and approval='已审核'";
				paperDAO = new PaperDAO();
				ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
				paperDAO = (PaperDAO) ctx.getBean("paperDAO");
			   // List<Paper> list=new ArrayList<Paper>();
				list=paperDAO.findAll(hql);
				
		    }
		    else if("Patent".equals(entity)){
		    	hql="from "+entity;
		    	hql1=" where username="+"'"+user+"'";		   
			   	hql=hql+hql1; 
		    	patentDAO = new PatentDAO();
				ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
				patentDAO = (PatentDAO) ctx.getBean("patentDAO");
			  //  List<Patent> list=new ArrayList<Patent>();
				list=patentDAO.findAll(hql);
				
		    }
		    else if("PatentCheck".equals(entity)){
		    	if(groupid.equals("1"))
		    		hql="from Patent "+hql1+" approval='未审核'";
		    	else
		    	hql="from Patent "+hql1+"and approval='未审核'";
		    	patentDAO = new PatentDAO();
				ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
				patentDAO = (PatentDAO) ctx.getBean("patentDAO");
			  //  List<Patent> list=new ArrayList<Patent>();
				list=patentDAO.findAll(hql);
				
		    }
		    else if("PatentUncheck".equals(entity)){
		    	if(groupid.equals("1"))
		    		hql="from Patent "+hql1+" approval='已审核'";
		    	else
		    	hql="from Patent "+hql1+"and approval='已审核'";
				patentDAO = new PatentDAO();
				ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
				patentDAO = (PatentDAO) ctx.getBean("patentDAO");
			   // List<Paper> list=new ArrayList<Paper>();
				list=patentDAO.findAll(hql);
				
		    }
		    else if("Subject".equals(entity)){
		    	hql="from "+entity;
		    	hql1=" where username="+"'"+user+"'";		   
			   	hql=hql+hql1; 
		    	subjectDAO = new SubjectDAO();
				ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
				subjectDAO = (SubjectDAO) ctx.getBean("subjectDAO");
			  //  List<Subject> list=new ArrayList<Subject>();
				list=subjectDAO.findAll(hql);
				
			}
		    else if("SubjectCheck".equals(entity)){
		    	
		    	if(groupid.equals("1"))
		    		hql="from Subject "+hql1+" approval='未审核'";
		    	else
		    	hql="from Subject "+hql1+"and approval='未审核'";
		    	subjectDAO = new SubjectDAO();
				ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
				subjectDAO = (SubjectDAO) ctx.getBean("subjectDAO");
			  //  List<Teaching> list=new ArrayList<Teaching>();
				list=subjectDAO.findAll(hql);
				
			    }
		    else if("SubjectUncheck".equals(entity)){
		    	if(groupid.equals("1"))
		    		hql="from Subject "+hql1+" approval='已审核'";
		    	else
		    	hql="from Subject "+hql1+"and approval='已审核'";
		    	subjectDAO = new SubjectDAO();
				ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
				subjectDAO = (SubjectDAO) ctx.getBean("subjectDAO");
			  //  List<Teaching> list=new ArrayList<Teaching>();
				list=subjectDAO.findAll(hql);
				
			    }
		    else if("Teaching".equals(entity)){
		    	hql="from "+entity;
		    	hql1=" where username="+"'"+user+"'";		   
			   	hql=hql+hql1; 
		    	teachingDAO = new TeachingDAO();
				ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
				teachingDAO = (TeachingDAO) ctx.getBean("teachingDAO");
			  //  List<Teaching> list=new ArrayList<Teaching>();
				list=teachingDAO.findAll(hql);
				
			    }	 
		    else if("TeachingCheck".equals(entity)){
		    	if(groupid.equals("1"))
		    		hql="from Teaching "+hql1+" approval='未审核'";
		    	else
		    	hql="from Teaching "+hql1+"and approval='未审核'";
		    	teachingDAO = new TeachingDAO();
				ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
				teachingDAO = (TeachingDAO) ctx.getBean("teachingDAO");
			  //  List<Teaching> list=new ArrayList<Teaching>();
				list=teachingDAO.findAll(hql);
				
			    }	 
		    else if("TeachingUncheck".equals(entity)){
		    	if(groupid.equals("1"))
		    		hql="from Teaching "+hql1+" approval='已审核'";
		    	else
		    	hql="from Teaching "+hql1+"and approval='已审核'";
		    	teachingDAO = new TeachingDAO();
				ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
				teachingDAO = (TeachingDAO) ctx.getBean("teachingDAO");
			  //  List<Teaching> list=new ArrayList<Teaching>();
				list=teachingDAO.findAll(hql);
				
			    }	
		    map.put("success",true);
			map.put("data",list);  	
			// JSONArray ja = new JSONArray();  
		     JsonConfig jf = new JsonConfig();  
		        //jf.registerJsonValueProcessor(java.sql.Timestamp.class, new DateJsonValueProcessor("yyyy-MM-dd HH:mm:ss"));  
		     jf.registerJsonValueProcessor(java.sql.Timestamp.class, new JsonDateValueProcessor());  
		     jf.registerJsonValueProcessor(java.util.Date.class, new JsonDateValueProcessor());
			response.setContentType("application/json;charset=UTF-8"); 
			PrintWriter out = response.getWriter();
			JSONObject result = JSONObject.fromObject(map,jf);
			out.print(result.toString());
			//JSONObject result = JSONObject.fromObject(json);	
			//out.print(result.toString());
		}
}
