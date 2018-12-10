package com.keyan.servlet;


import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.keyan.hibernate.beans.PhotoDAO;

public class DeletePhoto extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public DeletePhoto() {
		super();
	}
	 public PhotoDAO photoDAO;
		
	 public void setPhotoDAO(PhotoDAO photoDAO){
		 this.photoDAO=photoDAO;
	 }
	
	public void service(HttpServletRequest request ,
			HttpServletResponse response)
			throws IOException , ServletException
	{   Map<String , Object> map = new HashMap();
	    PrintWriter out = response.getWriter();
	    photoDAO = new PhotoDAO();
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
		photoDAO = (PhotoDAO) ctx.getBean("photoDAO");
		String id=request.getParameter("ids");
		//System.out.println(id);
		String path=request.getParameter("paths");
	    String photo_filename=request.getParameter("files");
	   // System.out.println(path);
	   // System.out.println(photo_filename);
		try
		{
			String fullFilename=path+photo_filename;
			fullFilename="D:/tomcat6/webapps"+fullFilename;  
			//System.out.println(fullFilename);
			File file=new File(fullFilename);
			
			if(file.exists()){
				file.delete();
			}
			photoDAO.delete(id);
			map.put("success",true);
			//map.put("msg","file delete success！"); 
		
			response.setContentType("application/json;charset=UTF-8"); 
			
			JSONObject result = JSONObject.fromObject(map);
			out.print(result.toString());
		}catch (Exception e)
		{
			out.println("图片删除失败！");
		}
	}
}
