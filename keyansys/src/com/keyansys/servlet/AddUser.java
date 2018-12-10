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

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.keyansys.hibernate.beans.User;
import com.keyansys.hibernate.dao.UserDAO;
import com.keyansys.hibernate.util.Constants;

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
		  User user=new User();
		  Map<String , Object> map = new HashMap();
		  final Log log = LogFactory.getLog(UserDAO.class);
		  userDAO=new UserDAO();
			ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
			userDAO = (UserDAO) ctx.getBean("userDAO");
		  try {
			  //String name=(String)request.getSession().getAttribute(Constants.USERNAME_KEY);
			 // String dept=(String)request.getSession().getAttribute(Constants.DEPARTMENT_KEY);
			 // String groupid=(String)request.getSession().getAttribute(Constants.GROUPID_KEY);
			  String id=request.getParameter("id");	
			  String flag=request.getParameter("flag");
			  System.out.println(flag);
			 // System.out.println(id);
			  if(flag.equals("edit")){
				  user.setId(Integer.parseInt(request.getParameter("id")));
				 
				  user.setName(request.getParameter("name")); 
				
				  user.setDepartment(request.getParameter("department"));
				
				  user.setUserName(request.getParameter("userName"));
				  
				  user.setPositionalTitles(request.getParameter("positionalTitles"));
			
				  user.setWorkloadLevel(Integer.parseInt(request.getParameter("workloadLevel")));
				  
				  user.setGroups_id(request.getParameter("Group_id")); 
				  user.setPassword(getUserDAO().getUser(request.getParameter("id")).getPassword());
				 
					getUserDAO().insertUser(user);
					map.put("success",true);
					map.put("msg", "修改教师信息成功！");
			  }
			  else{
					 if(id.equals(""))
				 	  {		
					  user.setName(request.getParameter("name")); 
					  user.setDepartment(request.getParameter("department"));
					  user.setUserName(request.getParameter("userName"));
					  user.setPassword(request.getParameter("userName"));
					  user.setPositionalTitles(request.getParameter("positionalTitles"));
					  user.setWorkloadLevel(Integer.parseInt(request.getParameter("workloadLevel")));
					  user.setGroups_id(request.getParameter("Group_id"));
				 	  }
					 else
					 {   
						 user.setId(Integer.parseInt(request.getParameter("id")));
						 user.setName(request.getParameter("name")); 
						  user.setDepartment(request.getParameter("department"));
						  user.setUserName(request.getParameter("userName"));
						  user.setPassword(request.getParameter("userName"));
						  user.setPositionalTitles(request.getParameter("positionalTitles"));
						  user.setWorkloadLevel(Integer.parseInt(request.getParameter("workloadLevel")));
						  user.setGroups_id(request.getParameter("Group_id")); 
					 }
				
					if(getUserDAO().isExist(request.getParameter("userName"))){
						map.put("msg", "教工号已存在！");
						map.put("success",false);
					}
					else{
					getUserDAO().insertUser(user);
					map.put("success",true);
					map.put("msg", "添加教师成功！");
					}
	     }
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
