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

import com.keyan.hibernate.beans.Notice;
import com.keyan.hibernate.beans.NoticeDAO;
import com.keyan.hibernate.beans.User;
import com.keyan.hibernate.dao.UserDAO;

public class AddNotice extends HttpServlet {

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
	public AddNotice() {
		super();
	}
	public void service(HttpServletRequest request ,
			HttpServletResponse response)
			throws IOException , ServletException
		{
		  Notice notice=new Notice();
		  Map<String , Object> map = new HashMap();
		  final Log log = LogFactory.getLog(UserDAO.class);
		  try {
			
		    /* user.setId( Integer.parseInt(jsonObject.getString("id")));
			 user.setUserName(jsonObject.getString("username"));
			 user.setName(jsonObject.getString("name"));
			 user.setDepartment(jsonObject.getString("department"));
			 user.setPicture(jsonObject.getString("picture"));
			 user.setGroups_id(jsonObject.getString("groups_id"));*/
			 notice.setTitle(request.getParameter("title"));
			 notice.setContent(request.getParameter("content"));
			 notice.setSender(request.getParameter("sender"));
		
			noticeDAO=new NoticeDAO();
			ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
			noticeDAO = (NoticeDAO) ctx.getBean("noticeDAO");
			getNoticeDAO().insertNotice(notice);
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
