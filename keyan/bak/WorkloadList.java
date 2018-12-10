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
import net.sf.json.JSONObject;
import net.sf.json.JsonConfig;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.keyan.hibernate.beans.PaperDAO;
import com.keyan.hibernate.util.Constants;
import com.keyan.hibernate.util.JsonDateValueProcessor;

public class WorkloadList extends HttpServlet {
	 /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	public PaperDAO paperDAO;
	
	 public void setPaperDAO(PaperDAO paperDAO){
		 this.paperDAO=paperDAO;
	 }

	/**
	 * Constructor of the object.
	 */
	public WorkloadList() {
		super();
	}
	public void service(HttpServletRequest request ,
			HttpServletResponse response)
			throws IOException , ServletException
		{   //Session session = HibernateSessionFactory.getSession();
		    //Object obj[]=null;
		 Map<String , Object> map = new HashMap();
		    List list=new ArrayList();
		    String user=(String)request.getSession().getAttribute(Constants.USERNAME_KEY);
		    System.out.println(user);
		    String hql="from Paper  where username='"+user+"'";
		    //String hql="select new Paper(p.username,p.department,p.first_author,p.paper_name,p.workload) from Paper as p where p.username='"+user+"'";
		    paperDAO = new PaperDAO();
			ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
			paperDAO = (PaperDAO) ctx.getBean("paperDAO");
		    //list=paperDAO.findInPaper(hql);
			list=paperDAO.findAll(hql);
			 /*for(int i=0;i<list.size();i++){
		        Object[] obj = (Object[])list.get(i);
		        Paper paper = new Paper();
		        paper.setUsername(obj[0].toString());
		        paper.setDepartment(obj[1].toString());
		        paper.setFirst_author(obj[2].toString());
		        paper.setPaper_name(obj[3].toString());
		        paper.setWorkload(obj[4].toString());
		        plist.add(paper);
			}
			for(int i=0;i<list.size();i++){
		            //此时取出来的是一个对象数组
		             obj=(Object[])list.get(i);}*/
			map.put("success",true);
			map.put("data",list);  		
			 JsonConfig jf = new JsonConfig();  
		        //jf.registerJsonValueProcessor(java.sql.Timestamp.class, new DateJsonValueProcessor("yyyy-MM-dd HH:mm:ss"));  
		     jf.registerJsonValueProcessor(java.sql.Timestamp.class, new JsonDateValueProcessor());  
		     jf.registerJsonValueProcessor(java.util.Date.class, new JsonDateValueProcessor());
			response.setContentType("application/json;charset=UTF-8"); 
			PrintWriter out = response.getWriter();
			JSONObject result = JSONObject.fromObject(map,jf);
			out.print(result.toString());
		}

}
