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

import com.keyan.hibernate.beans.Teaching;
import com.keyan.hibernate.beans.TeachingDAO;

public class TeachingCheck extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public TeachingCheck() {
		super();
	}
 public TeachingDAO teachingDAO;
	 
	 public void setTeachingDAO(TeachingDAO teachingDAO){
		 this.teachingDAO=teachingDAO;
	 }
	
	public void service(HttpServletRequest request ,
			HttpServletResponse response)
			throws IOException , ServletException
		{
		 Map<String , Object> map = new HashMap();
		int id=Integer.parseInt(request.getParameter("id"));
		System.out.println(id);
		Teaching teaching=new Teaching();
		teachingDAO = new TeachingDAO();
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
		teachingDAO = (TeachingDAO) ctx.getBean("teachingDAO");
		teaching.setTeaching_id(id);
		teaching.setApproval("已审核");
		String str="已审核";
		teachingDAO.updateById(id,str);
		map.put("success",true);
		response.setContentType("application/json;charset=UTF-8"); 
		PrintWriter out = response.getWriter();
		JSONObject result = JSONObject.fromObject(map);
		out.print(result.toString());
}
}
