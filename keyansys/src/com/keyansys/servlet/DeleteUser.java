package com.keyansys.servlet;


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

import com.keyansys.hibernate.dao.UserDAO;

public class DeleteUser extends HttpServlet {
	 public UserDAO userDAO;
	 public UserDAO getUserDAO(){
		 return userDAO;
	 }
	 public void setUserDAO(UserDAO userDAO){
		 this.userDAO=userDAO;
	 }

	/**
	 * Constructor of the object.
	 */
	public DeleteUser() {
		super();
	}
	public void service(HttpServletRequest request ,
			HttpServletResponse response)
			throws IOException , ServletException
		{
		String id=request.getParameter("id");
		System.out.println(id);
	    Map<String , Object> map = new HashMap();
		userDAO = new UserDAO();
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
		userDAO = (UserDAO) ctx.getBean("userDAO");
	   	userDAO.deleteUser(id);
		map.put("success",true);
				
						
		response.setContentType("application/json;charset=UTF-8"); 
		PrintWriter out = response.getWriter();
		JSONObject result = JSONObject.fromObject(map);
		out.print(result.toString());
		}
}
