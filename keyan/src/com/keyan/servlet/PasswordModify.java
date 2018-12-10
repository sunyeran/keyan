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

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.keyan.hibernate.beans.User;
import com.keyan.hibernate.dao.UserDAO;
import com.keyan.hibernate.util.Constants;

public class PasswordModify extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public UserDAO userDAO;
	 
	 public UserDAO getUserDAO(){
		 return userDAO;
	 }
	 public void setUserDAO(UserDAO userDAO){
		 this.userDAO=userDAO;
	 }
	public PasswordModify() {
		super();
	}
	public void service(HttpServletRequest request ,
			HttpServletResponse response)
			throws IOException , ServletException
		{
		  //User user=new User();
		  Map<String , Object> map = new HashMap();
		  final Log log = LogFactory.getLog(UserDAO.class);
		  try {
			  String username=(String)request.getSession().getAttribute(Constants.USERNAME_KEY);
			 
			  String pass=request.getParameter("pass");
			//  System.out.print(username);
			 		
			//String hql="update User u set u.password =:password where u.name = :name";
			userDAO=new UserDAO();
			ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
			userDAO = (UserDAO) ctx.getBean("userDAO");
			getUserDAO().savePartData(pass,username);
			map.put("success",true);
			
			//log.debug("save successful");
		} catch (RuntimeException re) {
			map.put("success",false);
			log.error("save failed", re);
			throw re;
		}
			
		response.setContentType("application/json;charset=UTF-8"); 
		PrintWriter out = response.getWriter();
		JSONObject result = JSONObject.fromObject(map);
		out.print(result.toString());	
	}

}
