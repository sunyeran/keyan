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

import com.keyan.hibernate.beans.Paper;
import com.keyan.hibernate.beans.PaperDAO;

public class PaperCheck extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	/**
	 * Constructor of the object.
	 */
 public PaperDAO paperDAO;
	 
	 public void setPaperDAO(PaperDAO paperDAO){
		 this.paperDAO=paperDAO;
	 }
	public PaperCheck() {
		super();
	}
	public void service(HttpServletRequest request ,
			HttpServletResponse response)
			throws IOException , ServletException
		{
		 Map<String , Object> map = new HashMap();
		int id=Integer.parseInt(request.getParameter("id"));
		
		Paper paper=new Paper();
		paperDAO = new PaperDAO();
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
		paperDAO = (PaperDAO) ctx.getBean("paperDAO");
		paper.setPaper_id(id);
		paper.setApproval("已审核");
		String str="已审核";
		paperDAO.updateById(id,str);
		ctx=null;
		map.put("success",true);
		response.setContentType("application/json;charset=UTF-8"); 
		PrintWriter out = response.getWriter();
		JSONObject result = JSONObject.fromObject(map);
		out.print(result.toString());
}


}
