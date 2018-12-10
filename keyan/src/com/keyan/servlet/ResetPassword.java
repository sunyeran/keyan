package com.keyan.servlet;


import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.sf.json.JSONObject;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.keyan.hibernate.beans.PaperDAO;
import com.keyan.hibernate.beans.User;
import com.keyan.hibernate.dao.UserDAO;
import com.keyan.hibernate.util.Constants;

public class ResetPassword extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public ResetPassword() {
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
		{
			request.setCharacterEncoding("utf-8");
			HttpSession session = request.getSession();
			
			String username = request.getParameter("username");
			
			System.out.println(username);
			Map<String , Object> map = new HashMap<String, Object>();
			UserDAO userDAO = new UserDAO();
			ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
			userDAO = (UserDAO) ctx.getBean("userDAO");
			//UserDAO userDAO = new UserDAO();			
			if(userDAO.isExist(username)){

				map.put("success",true);
				map.put("msg","重置密码成功！");
				userDAO.savePartData(username, username);
				
				
				
			}
			else{
				map.put("success",false);
				map.put("msg","无此用户！");	
				
			}
			response.setContentType("application/json;charset=UTF-8"); 
			PrintWriter out = response.getWriter();
			JSONObject result = JSONObject.fromObject(map);
			out.print(result);
		}

}

