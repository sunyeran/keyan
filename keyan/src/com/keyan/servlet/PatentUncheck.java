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

import com.keyan.hibernate.beans.Patent;
import com.keyan.hibernate.beans.PatentDAO;

public class PatentUncheck extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public PatentDAO patentDAO;
	 
	 public void setPatentDAO(PatentDAO patentDAO){
		 this.patentDAO=patentDAO;
	 }
	public PatentUncheck() {
		super();
	}

	public void service(HttpServletRequest request ,
			HttpServletResponse response)
			throws IOException , ServletException
		{
		 Map<String , Object> map = new HashMap();
		int id=Integer.parseInt(request.getParameter("id"));
	
		Patent patent=new Patent();
		patentDAO = new PatentDAO();
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
		patentDAO = (PatentDAO) ctx.getBean("patentDAO");
		patent.setPatent_id(id);
		patent.setApproval("未审核");
		String approval="未审核";
		patentDAO.updateById(id,approval);
		map.put("success",true);
		response.setContentType("application/json;charset=UTF-8"); 
		PrintWriter out = response.getWriter();
		JSONObject result = JSONObject.fromObject(map);
		out.print(result.toString());
}

}
