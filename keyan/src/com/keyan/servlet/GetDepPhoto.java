package com.keyan.servlet;


import java.io.IOException;
import java.io.PrintWriter;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.keyan.hibernate.beans.PhotoDAO;
import com.keyan.hibernate.beans.User;
import com.keyan.hibernate.dao.UserDAO;
import com.keyan.hibernate.util.Constants;

public class GetDepPhoto extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public GetDepPhoto() {
		super();
	}
	 public PhotoDAO photoDAO;
		
	 public void setPhotoDAO(PhotoDAO photoDAO){
		 this.photoDAO=photoDAO;
	 }
	 public UserDAO userDAO;
	 public UserDAO getUserDAO(){
		 return userDAO;
	 }
	
	 public void setUserDAO(UserDAO userDAO){
		 this.userDAO=userDAO;
	 }
	public void service(HttpServletRequest request ,HttpServletResponse response)
			throws ServletException, IOException{
   	String name=request.getParameter("username");
   	 Map<String , Object> map = new HashMap();
     List list=new ArrayList();
     User userlist =new User();
     String dep=(String)request.getSession().getAttribute(Constants.DEPARTMENT_KEY);
     name=URLDecoder.decode(name,"UTF-8");
   
     System.out.println(dep);
     System.out.println(name);
     
     String hql="from User p where p.department=? and p.name =? ";
     userDAO = new UserDAO();
	 ApplicationContext ctx1 = new ClassPathXmlApplicationContext("applicationContext.xml"); 
	 userDAO = (UserDAO) ctx1.getBean("userDAO");
     userlist=userDAO.getUserBydepAndName(name, dep);
    
     photoDAO = new PhotoDAO();
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
		photoDAO = (PhotoDAO) ctx.getBean("photoDAO");
		//list=photoDAO.getPhotos(userlist.getUserName());
    
    
    	 list=photoDAO.getDepPhotos(dep,userlist.getUserName());
   //  }
		map.put("success",true);
		map.put("data",list); 
		System.out.println(list);
		response.setContentType("application/json;charset=UTF-8"); 
		PrintWriter out = response.getWriter();
		JSONObject result = JSONObject.fromObject(map);
		out.print(result.toString());
}
}

