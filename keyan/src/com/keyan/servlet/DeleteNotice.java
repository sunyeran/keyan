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

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.keyan.hibernate.beans.NoticeDAO;
import com.keyan.hibernate.dao.UserDAO;

public class DeleteNotice extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
		 public NoticeDAO noticeDAO;
		 public NoticeDAO getNoticeDAO(){
			 return noticeDAO;
		 }
		 public void setNoticeDAO(NoticeDAO noticeDAO){
			 this.noticeDAO=noticeDAO;
		 }
	public DeleteNotice() {
		super();
	}
	public void service(HttpServletRequest request ,
			HttpServletResponse response)
			throws IOException , ServletException
		{
		String id=request.getParameter("id");

	    Map<String , Object> map = new HashMap();
		noticeDAO = new NoticeDAO();
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
		noticeDAO = (NoticeDAO) ctx.getBean("noticeDAO");
	   	noticeDAO.deleteNotice(id);
		map.put("success",true);
				
						
		response.setContentType("application/json;charset=UTF-8"); 
		PrintWriter out = response.getWriter();
		JSONObject result = JSONObject.fromObject(map);
		out.print(result.toString());
		}
}
