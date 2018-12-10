package com.keyan.servlet;


import java.io.IOException;
import java.io.PrintWriter;
import org.apache.commons.lang.StringUtils;
import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
public class SessionFilter implements Filter{
	  public void destroy() {
	        // TODO Auto-generated method stub
	    }
	  private String excludedPages;  
	  
	  private String[] excludedPageArray; 
	  @Override
	    public void doFilter(ServletRequest request, ServletResponse response,
	            FilterChain chain) throws IOException, ServletException {
	        HttpServletRequest httpRequest = (HttpServletRequest) request;
	        HttpServletResponse httpResponse = (HttpServletResponse) response;
	        HttpSession session = httpRequest.getSession();
	        // 登陆url
	        response.setContentType("text/html;charset=UTF-8");
	        boolean isExcludedPage = false;  
	        for (String page : excludedPageArray) {//判断是否在过滤url之外  
	        if(((HttpServletRequest) request).getServletPath().equals(page)){  
	        isExcludedPage = true;  
	        break;  
	        }  
	        }  
	        if (isExcludedPage) {//在过滤url之外  
	        chain.doFilter(request, response);  
	        } else {//不在过滤url之外，判断session是否存在  
	       // HttpSession session = ((HttpServletRequest) request).getSession();  
	        // 超时处理，ajax请求超时设置超时状态，页面请求超时则返回提示并重定向
	        String username = (String) session.getAttribute("username");
	        String dep = (String) session.getAttribute("dep");
	        if(null == username || username==""||null ==dep||dep=="")
	        {
	       // session.invalidate();  
	        //httpResponse.setHeader("sessionstatus", "timeout");
	        	((HttpServletResponse) response).sendRedirect("index.html"); 
	        }
	       else {
	    	  chain.doFilter(request, response);
	        }
	    }
	  }
	    @Override
	    public void init(FilterConfig fConfig) throws ServletException {  
	    	excludedPages = fConfig.getInitParameter("excludedPages");  
	    	if (StringUtils.isNotEmpty(excludedPages)) {  
	    	excludedPageArray = excludedPages.split(",");  
	    	}  
	    	return;  
	    	}  
	}
