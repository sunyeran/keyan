package com.keyansys.servlet;


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
import net.sf.json.JsonConfig;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.keyansys.hibernate.beans.NoticeDAO;
import com.keyansys.hibernate.util.JsonDateValueProcessor;

public class NoticeList extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
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
	public NoticeList() {
		super();
	}
	public void service(HttpServletRequest request ,
			HttpServletResponse response)
			throws IOException , ServletException
		{
		  			
		  int start=Integer.parseInt(request.getParameter("start"));
		  int limit=Integer.parseInt(request.getParameter("limit"));
		    Map<String , Object> map = new HashMap();
			noticeDAO = new NoticeDAO();
			ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
			noticeDAO = (NoticeDAO) ctx.getBean("noticeDAO");
		    List list=new ArrayList();
		    String hql="from Notice order by last_update desc";
		    String hql_count="select count(*) as num from Notice order by last_update desc";
			list=noticeDAO.findAllForPage(hql, limit, start);
			Long totalCount=noticeDAO.findCount(hql_count);
			
					map.put("success",true);
					map.put("data",list);   
					map.put("total", totalCount);
			 JsonConfig jf = new JsonConfig();  
		     jf.registerJsonValueProcessor(java.sql.Timestamp.class, new JsonDateValueProcessor());  
		     jf.registerJsonValueProcessor(java.util.Date.class, new JsonDateValueProcessor());
			response.setContentType("application/json;charset=UTF-8"); 
			PrintWriter out = response.getWriter();
			JSONObject result = JSONObject.fromObject(map,jf);
			out.print(result.toString());
		}

}

