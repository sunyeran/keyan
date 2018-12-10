package com.keyan.servlet;


import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.sf.json.JSONObject;
public class SessionFilter implements Filter{
	  public void destroy() {
	        // TODO Auto-generated method stub
	    }
	  @Override
	    public void doFilter(ServletRequest request, ServletResponse response,
	            FilterChain chain) throws IOException, ServletException {
	        HttpServletRequest httpRequest = (HttpServletRequest) request;
	        HttpServletResponse httpResponse = (HttpServletResponse) response;
	        HttpSession session = httpRequest.getSession();
	        // 登陆url
	        Map<String , Object> map = new HashMap<String, Object>();
	        response.setContentType("text/html;charset=UTF-8");
	        // 超时处理，ajax请求超时设置超时状态，页面请求超时则返回提示并重定向
	        String username = (String) session.getAttribute("username");
	        if(null == username || username=="")
	        {
	       // session.invalidate();  
	        map.put("flag",true);	
			response.setContentType("application/json;charset=UTF-8"); 
			PrintWriter out = response.getWriter();
			JSONObject result = JSONObject.fromObject(map);
			out.print(result);
	       // httpResponse.setHeader("sessionstatus", "timeout");
	        }
	       else {
	    	 
	            chain.doFilter(request, response);
	        }
	    }
	    @Override
	    public void init(FilterConfig arg0) throws ServletException {
	        // TODO Auto-generated method stub
	    }
	}
