package com.keyan.servlet;


import javax.servlet.http.HttpServlet;



	import java.io.IOException;
	import java.io.PrintWriter;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;
	import java.util.HashMap;
	import java.util.Map;

	import javax.servlet.ServletException;
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

	public class EditNotice extends HttpServlet {

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
		public EditNotice() {
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
				  String id=request.getParameter("notice_id");
				 // SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); 
				 //  String date = format.format(new Date()); 
			   	if(id.equals(""))
			   	{		
				 notice.setTitle(request.getParameter("title"));
				 notice.setContent(request.getParameter("content"));
				 notice.setSender("科研处");
				 notice.setLast_update(new Date());
				// notice.setLastUpdate(Timestamp.valueOf(date));
			   	}
			   	else{
			   	 notice.setNotice_id(Integer.parseInt(request.getParameter("notice_id")));
			    notice.setTitle(request.getParameter("title"));
				 notice.setContent(request.getParameter("content"));
				 notice.setSender("科研处");
				 notice.setLast_update(new Date());
				// notice.setLastUpdate(Timestamp.valueOf(date));
			   	}
				noticeDAO=new NoticeDAO();
				ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
				noticeDAO = (NoticeDAO) ctx.getBean("noticeDAO");
				getNoticeDAO().updateNotice(notice);
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
