package com.keyan.servlet;


import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
//import javax.persistence.Entity;
//import javax.servlet.annotation.*;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import net.sf.json.JSONObject;

import com.keyan.hibernate.beans.User;
import com.keyan.hibernate.dao.UserDAO;
import com.keyan.hibernate.util.Constants;

public class LoginServlet extends HttpServlet {
	 public UserDAO userDAO;
	 public UserDAO getUserDAO(){
		 return userDAO;
	 }
	 public void setUserDAO(UserDAO userDAO){
		 this.userDAO=userDAO;
	 }
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	/**
	 * Constructor of the object.
	 */
	public LoginServlet() {
		super();
	}
	
	public void init() throws ServletException {
		// Put your code here
		
	}
	public void service(HttpServletRequest request ,
			HttpServletResponse response)
			throws IOException , ServletException
		{
			request.setCharacterEncoding("utf-8");
			HttpSession session = request.getSession();
			
			String user = request.getParameter("user");
			String pass = request.getParameter("password");
			session.setAttribute("username", user);
			
			Map<String , Object> map = new HashMap<String, Object>();
			userDAO = new UserDAO();
			ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
			userDAO = (UserDAO) ctx.getBean("userDAO");
				
			if(userDAO.isValid(user, pass)){

				map.put("success",true);
				map.put("msg","login success");
				User users=userDAO.findByUsername(user,pass);
				session.setAttribute("users", users);
				String department=users.getDepartment();
				String groupid=users.getGroups_id();
				String username=users.getUserName();
				String name=users.getName();
				map.put("name",name);
				
				
				
				session.setAttribute(Constants.DEPARTMENT_KEY, department);
				session.setAttribute(Constants.GROUPID_KEY, groupid);
				session.setAttribute(Constants.USERNAME_KEY, username);
				session.setAttribute(Constants.NAME_KEY, name);
			//	setCookie("name",name,30*24*60,response);
			    
			
			}
			else{
				map.put("success",false);
				map.put("msg","登录失败,用户名或密码错误！");	
			
			}
			
			response.setContentType("application/json;charset=UTF-8"); 
			PrintWriter out = response.getWriter();
			JSONObject result = JSONObject.fromObject(map);
			out.print(result);
		}
	/*public static void setCookie(String name, String value, Integer time,HttpServletResponse response) {   
	       try {   
	           //关键点   
	           value = URLEncoder.encode(value,"UTF-8");  
	  
	       } catch (UnsupportedEncodingException e) { }  
	       SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm");
			String loginDate = sdf.format(new Date());
	       Cookie cookie = new Cookie(name, value);  
	       cookie.setMaxAge(time);
	       cookie.setPath("/");   
	       response.addCookie(cookie);   
	       cookie = new Cookie("loginDate", loginDate);
	       cookie.setMaxAge(time);
	       cookie.setPath("/");
	       response.addCookie(cookie); 
	   }   */
}
