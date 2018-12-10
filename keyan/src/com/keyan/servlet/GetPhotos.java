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

import net.sf.json.JSONObject;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.keyan.hibernate.beans.PaperDAO;
import com.keyan.hibernate.beans.PhotoDAO;
import com.keyan.hibernate.util.Constants;

public class GetPhotos extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	 public PhotoDAO photoDAO;
		
	 public void setPhotoDAO(PhotoDAO photoDAO){
		 this.photoDAO=photoDAO;
	 }
	public GetPhotos() {
		super();
	}
	public void service(HttpServletRequest request ,HttpServletResponse response)
			throws ServletException, IOException{
     Map<String , Object> map = new HashMap();
     List list=new ArrayList();
     String user=(String)request.getSession().getAttribute(Constants.USERNAME_KEY);
     String dep=(String)request.getSession().getAttribute(Constants.DEPARTMENT_KEY);
     System.out.println(dep);
     photoDAO = new PhotoDAO();
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
		photoDAO = (PhotoDAO) ctx.getBean("photoDAO");
		list=photoDAO.getPhotos(user);
		map.put("success",true);
		map.put("data",list); 
	
		response.setContentType("application/json;charset=UTF-8"); 
		PrintWriter out = response.getWriter();
		JSONObject result = JSONObject.fromObject(map);
		out.print(result.toString());
}
}
