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

public class AddUser extends HttpServlet {

	 /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
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
	public AddUser() {
		super();
	}
	
	public void service(HttpServletRequest request ,
			HttpServletResponse response)
			throws IOException , ServletException
		{
		Map<String , Object> map = new HashMap();
		final Log log = LogFactory.getLog(UserDAO.class);
		try {
			request.setCharacterEncoding("utf-8");
			String id = request.getParameter("id");
			String name = request.getParameter("name");
			String userName = request.getParameter("userName");
			String department = request.getParameter("department");
			String groups_id = request.getParameter("Group_id");
			System.out.println(userName);
			System.out.println(name);
			System.out.println(department);
			System.out.println(groups_id);
			//System.out.println(id);
			/*String name = "860103";
			String userName ="sunyeran";
			String department = "网络中心";
			String groups_id ="2";*/
			User user=new User();
			//user.setId(id);
			user.setName(name);
			user.setUserName(userName);
			user.setDepartment(department);
			user.setPassword(userName);
			user.setGroups_id(groups_id);
			userDAO=new UserDAO();
			ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
			userDAO = (UserDAO) ctx.getBean("userDAO");
			getUserDAO().insertUser(user);
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
