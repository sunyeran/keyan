package com.keyan.servlet;


import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.keyan.hibernate.util.Constants;

public class GetPhoto1 extends HttpServlet
{
	// 图像文件名
	private String photo_filename;
	// 相册的ID
	

	public void setPhoto_filename(String photo_filename)
	{
		this.photo_filename = photo_filename;
	}




	public void service(HttpServletRequest request ,
			HttpServletResponse response)
			throws IOException , ServletException
	{   String dep=(String)request.getSession().getAttribute(Constants.DEPARTMENT_KEY);
	    String user=(String)request.getSession().getAttribute(Constants.USERNAME_KEY);
	    String filename=request.getParameter("photo_filename");
		try
		{
			 
			 String path =  "e:\\upload" +  File.separator + dep+  File.separator +user
					+ File.separator+"photo"+ File.separator;
			String photoFilename = path + filename;
			
			OutputStream os = response.getOutputStream();
			FileInputStream fis = new FileInputStream(photoFilename);
			byte[] buffer = new byte[8192];
			int n = 0;
			while ((n = fis.read(buffer)) > 0)
			{
				os.write(buffer, 0, n);
			}
			fis.close();

		}
		catch (Exception e)
		{

		}
		
	}

}
