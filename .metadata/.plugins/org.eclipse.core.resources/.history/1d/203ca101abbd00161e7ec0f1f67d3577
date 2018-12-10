package com.keyan.servlet;


import java.io.IOException;
import java.io.PrintWriter;
import java.text.ParseException;
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

import com.keyan.hibernate.dao.UserDAO;

public class ModifyWorkloadLevel extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public ModifyWorkloadLevel() {
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
			
			String positionalTitles = request.getParameter("positionalTitles");
			String workloadLevel = request.getParameter("workloadLevel");
		
			System.out.println(positionalTitles);
			System.out.println(workloadLevel);
			Map<String , Object> map = new HashMap<String, Object>();
			UserDAO userDAO = new UserDAO();
			ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
			userDAO = (UserDAO) ctx.getBean("userDAO");
			//UserDAO userDAO = new UserDAO();			
			try {
				userDAO.saveWorkloadLevel(workloadLevel, positionalTitles);
				map.put("success",true);
				map.put("msg","修改成功！");
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	
			response.setContentType("application/json;charset=UTF-8"); 
			PrintWriter out = response.getWriter();
			JSONObject result = JSONObject.fromObject(map);
			out.print(result);
		}

}


