package com.zs.servlet;


import java.io.IOException;
import java.io.PrintWriter;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.sf.json.JSONObject;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.zs.hibernate.beans.Cxdate;
import com.zs.hibernate.beans.CxdateDAO;
import com.zs.hibernate.beans.Lqcx;
import com.zs.hibernate.beans.LqcxDAO;

public class GetMsg extends HttpServlet {
	 public CxdateDAO cxdateDAO;
	 public CxdateDAO getCxdateDAO(){
		 return cxdateDAO;
	 }
	 public void setCxdateDAO(CxdateDAO cxdateDAO){
		 this.cxdateDAO=cxdateDAO;
	 }
	/**
	 * Destruction of the servlet. <br>
	 */
	public void service(HttpServletRequest request ,
			HttpServletResponse response)
			throws IOException , ServletException
		{
			request.setCharacterEncoding("utf-8");
	
			 Map<String , Object> dataMap = new HashMap<String, Object>();
		
            cxdateDAO = new CxdateDAO();
			ApplicationContext ctx0 = new ClassPathXmlApplicationContext("applicationContext.xml"); 
			cxdateDAO = (CxdateDAO) ctx0.getBean("cxdateDAO");
			Map<String , Object> map = new HashMap<String, Object>();
			
			List<Cxdate> list=cxdateDAO.findAll();	
	
			String tishi=list.get(0).getTishi();
			
		
			
			
				map.put("success",true);
				
			   dataMap.put("tishi", tishi);
			
			   map.put("data", dataMap);
			 
			
			response.setContentType("application/json;charset=UTF-8"); 
			PrintWriter out = response.getWriter();
			JSONObject result = JSONObject.fromObject(map);
			out.print(result);
		}
	
}
