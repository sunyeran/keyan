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

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import net.sf.json.JSONObject;
import net.sf.json.JsonConfig;
import com.keyan.hibernate.dao.UserDAO;

public class UserList extends HttpServlet {

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
	
	public UserList() {
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
	public void init() throws ServletException {
		// Put your code here
	}
	public void service(HttpServletRequest request ,
			HttpServletResponse response)
			throws IOException , ServletException
		{
		  			
		    JsonConfig cfg = new JsonConfig(); 
		   cfg.setExcludes(new String[]{"users","menus"});
		    Map<String , Object> map = new HashMap();
			userDAO = new UserDAO();
			ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
			userDAO = (UserDAO) ctx.getBean("userDAO");
		    List list=new ArrayList();
			list=userDAO.getUsers();	
					map.put("success",true);
					map.put("data",list);   
							
			response.setContentType("application/json;charset=UTF-8"); 
			PrintWriter out = response.getWriter();
			JSONObject result = JSONObject.fromObject(map,cfg);
			out.print(result.toString());
			//JSONObject result = JSONObject.fromObject(json);	
			//out.print(result.toString());
		}

}
