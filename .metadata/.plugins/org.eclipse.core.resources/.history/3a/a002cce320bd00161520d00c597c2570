package com.keyan.servlet;


import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;

import org.springframework.context.ApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.keyan.hibernate.beans.PaperDAO;
import com.keyan.hibernate.beans.PatentDAO;
import com.keyan.hibernate.beans.SubjectDAO;
import com.keyan.hibernate.beans.TeachingDAO;

public class BaseServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	protected PaperDAO ppd;
	protected PatentDAO ptd;
	protected SubjectDAO sd;
	protected TeachingDAO td;
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
	public BaseServlet() {
		super();
	}

	/**
	 * Destruction of the servlet. <br>
	 */
	public void destroy() {
		super.destroy(); // Just puts "destroy" string in log
		// Put your code here
	}

	/**
	 * Initialization of the servlet. <br>
	 *
	 * @throws ServletException if an error occurs
	 */
	public void init(ServletConfig config) throws ServletException {
		// Put your code here
		super.init(config);
		paperDAO=new PaperDAO();
		ApplicationContext ctx1=WebApplicationContextUtils.getWebApplicationContext(getServletContext());
	/*	ApplicationContext ctx2=WebApplicationContextUtils.getWebApplicationContext(getServletContext());
		ApplicationContext ctx3=WebApplicationContextUtils.getWebApplicationContext(getServletContext());
		ApplicationContext ctx4=WebApplicationContextUtils.getWebApplicationContext(getServletContext());*/
		ppd=(PaperDAO)ctx1.getBean("paperDAO");
		/*ptd=(PatentDAO)ctx2.getBean("patentDAO");
		sd=(SubjectDAO)ctx3.getBean("subjectDAO");
		td=(TeachingDAO)ctx4.getBean("teachingDAO");*/
		
	}

}
