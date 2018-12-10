package com.zs.servlet;


import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.sf.json.JSONObject;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;


import com.zs.hibernate.beans.CxdateDAO;

public class ResetTishi extends HttpServlet {
	public ResetTishi() {
		super();
	}
	public CxdateDAO cxdateDAO;
	 
	 public CxdateDAO getCxdateDAO(){
		 return cxdateDAO;
	 }
	 public void setCxdateDAO(CxdateDAO cxdateDAO){
		 this.cxdateDAO=cxdateDAO;
	 }
	public void service(HttpServletRequest request ,
			HttpServletResponse response)
			throws IOException , ServletException
		{
			request.setCharacterEncoding("utf-8");
			HttpSession session = request.getSession();
			System.out.println(request.getParameter("tishi"));
			String flag = "t";
			
			String tishi=request.getParameter("tishi");
			Map<String , Object> map = new HashMap<String, Object>();
			CxdateDAO cxdateDAO = new CxdateDAO();
			ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
			cxdateDAO = (CxdateDAO) ctx.getBean("cxdateDAO");
			//UserDAO userDAO = new UserDAO();			
			if(cxdateDAO.isExist("t")){

				map.put("success",true);
				map.put("msg","更新成功！");
				cxdateDAO.savePartData(tishi,flag);
				
				
				
			}
			else{
				map.put("success",false);
				map.put("msg","更新失败！");	
				
			}
			response.setContentType("application/json;charset=UTF-8"); 
			PrintWriter out = response.getWriter();
			JSONObject result = JSONObject.fromObject(map);
			out.print(result);
		}

}

