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

import com.keyan.hibernate.dao.UserDAO;
import com.keyan.hibernate.util.Constants;

public class StatisticsAllMenu extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public StatisticsAllMenu() {
		super();
	}

	 public UserDAO userDAO;
	 public UserDAO getUserDAO(){
		 return userDAO;
	 }
	 public void setUserDAO(UserDAO userDAO){
		 this.userDAO=userDAO;
	 }
	
	public void service(HttpServletRequest request ,
			HttpServletResponse response)
			throws IOException , ServletException
	{    // String dep=(String)request.getSession().getAttribute(Constants.DEPARTMENT_KEY);
	    // System.out.println(dep);
		 Map<String , Object> map = new HashMap();
			userDAO = new UserDAO();
			ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
			userDAO = (UserDAO) ctx.getBean("userDAO");
		    List list=new ArrayList();
		   
		    String hql="select u.department from User u group by u.department";
			list=userDAO.getUsersBydep(hql);	
			
			String item="[" ;
			 for(int    i=0;    i<list.size();    i++)    { 
                item += "{\"text\":\"" + list.get(i) + "\",\"leaf\":true},";
             }
			 String finalJson = item.substring(0, item.length() - 1) + "]";
			
         	response.setContentType("application/json;charset=UTF-8"); 
			PrintWriter out = response.getWriter();
			//JSONObject result = JSONObject.fromObject(map);
			out.print(finalJson);
}
}

