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

import com.keyansys.hibernate.beans.GroupsDAO;
import com.keyansys.hibernate.dao.UserDAO;

public class GroupList extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	 public GroupsDAO groupsDAO;
	 public GroupsDAO getGroupsDAO(){
		return groupsDAO;
	 }
	 public void setGroupsDAO(GroupsDAO groupsDAO){
		 this.groupsDAO=groupsDAO;
	 }
	public GroupList() {
		super();
	}

	/**
	 * Destruction of the servlet. <br>
	 */
	public void destroy() {
		super.destroy(); // Just puts "destroy" string in log
		// Put your code here
	}

	/**
	 * Initialization of the servlet. <br>
	 *
	 * @throws ServletException if an error occurs
	 */
	public void init() throws ServletException {
		// Put your code here
	}
	public void service(HttpServletRequest request ,
			HttpServletResponse response)
			throws IOException , ServletException
		{
		   /* String json="{\"success\":true," +
		    		"\"data\":[{" +
		    		"\"id\":\"1\"," +
		    		"\"name\":\"860103\"," +
		    		"\"userName\":\"sunyeran\"," +
		    		"\"department\":\"xxwlzx\"," +
		    		"\"picture\":\"FE03.png\"," +
		    		"\"Group_id\":\"1\"}," +
		    		"{\"id\":\"2\"," +
		    		"\"name\":\"860104\"," +
		    		"\"userName\":\"zhangsan\"," +
		    		"\"department\":\"xxwlzx\"," +
		    		"\"picture\":\"FE03.png\"," +
		    		"\"Group_id\":\"2\"}]" +
		    		"}";*/
			
		    JsonConfig cfg = new JsonConfig(); 
		    cfg.setExcludes(new String[]{"users"});
		    Map<String , Object> map = new HashMap();
			groupsDAO = new GroupsDAO();
			ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
			groupsDAO = (GroupsDAO) ctx.getBean("groupsDAO");
		    List list=new ArrayList();
			list=groupsDAO.findAll();	
					map.put("success",true);
					map.put("data",list);   
							
			response.setContentType("application/json;charset=UTF-8"); 
			PrintWriter out = response.getWriter();
			JSONObject result = JSONObject.fromObject(map,cfg);
			out.print(result.toString());
			//JSONObject result = JSONObject.fromObject(json);	
			//out.print(result.toString());
		}


}
