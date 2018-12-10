package com.keyan.servlet;


import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.keyan.hibernate.beans.Subject;
import com.keyan.hibernate.beans.SubjectDAO;

public class SubjectUncheck extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public SubjectUncheck() {
		super();
	}

	public SubjectDAO subjectDAO;
	 
	 public void setSubjectDAO(SubjectDAO subjectDAO){
		 this.subjectDAO=subjectDAO;
	 }
	
	public void service(HttpServletRequest request ,
			HttpServletResponse response)
			throws IOException , ServletException
		{
		 Map<String , Object> map = new HashMap();
		int id=Integer.parseInt(request.getParameter("id"));
		System.out.println(id);
		Subject subject=new Subject();
		subjectDAO = new SubjectDAO();
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
		subjectDAO = (SubjectDAO) ctx.getBean("subjectDAO");
		subject.setSubject_id(id);
		subject.setApproval("未审核");
		String str="未审核";
		subjectDAO.updateById(id,str);
		map.put("success",true);
		response.setContentType("application/json;charset=UTF-8"); 
		PrintWriter out = response.getWriter();
		JSONObject result = JSONObject.fromObject(map);
		out.print(result.toString());
}
}

