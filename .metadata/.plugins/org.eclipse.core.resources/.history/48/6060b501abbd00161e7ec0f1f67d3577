package com.keyan.servlet;
import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.keyan.hibernate.beans.Photo;
import com.keyan.hibernate.beans.PhotoDAO;
import com.keyan.hibernate.util.Constants;

public class UploadFile extends HttpServlet {
	public PhotoDAO photoDAO;
		
	 public void setPaperDAO(PhotoDAO photoDAO){
		 this.photoDAO=photoDAO;
	 }
	/**
	 * Constructor of the object.
	 */
	public UploadFile() {
		super();
	}
	public void service(HttpServletRequest request ,HttpServletResponse response)
					throws ServletException, IOException{
    Map<String , Object> map = new HashMap();
    String department=(String)request.getSession().getAttribute(Constants.DEPARTMENT_KEY);
    String user=(String)request.getSession().getAttribute(Constants.USERNAME_KEY);
    System.out.println(department);
    System.out.println(user);
	request.setCharacterEncoding("UTF-8") ;

	//在自己的项目中构造出一个用于存放用户照片的文件夹
	String projectpath = this.getServletContext().getRealPath("/upload") ;
	System.out.println("path is:"+projectpath);
	projectpath=projectpath+"/"+department+"/"+user+"/";
	//String projectpath = "f:\\upload" +  File.separator + department+  File.separator +user
	//		+ File.separator;
	File file = new File(projectpath);
	if (!file.exists())
	{
		file.mkdirs();
	}
	//如果此文件夹不存在，则构造此文件夹
	File f = new File(projectpath) ;
	if(!f.exists()){
		f.mkdir() ;
	}
	
	//构造出文件工厂，用于存放JSP页面中传递过来的文件
	DiskFileItemFactory factory = new DiskFileItemFactory() ;
	//设置缓存大小，如果文件大于缓存大小时，则先把文件放到缓存中
	factory.setSizeThreshold(8*1024) ;
	//设置上传文件的保存路径
	factory.setRepository(f) ;

	//产生Servlet上传对象
	ServletFileUpload upload = new ServletFileUpload(factory) ;
	//设置可以上传文件大小的上界4MB
	upload.setSizeMax(8*1024*1024);
	
	try {
		Photo photo=new Photo();
		//取得所有上传文件的信息
		List<FileItem> list = upload.parseRequest(request) ;
		Iterator<FileItem> iter = list.iterator() ;
		while(iter.hasNext()){
			FileItem item = iter.next() ;
			//如果接收到的参数不是一个普通表单(例text等)的元素，那么执行下面代码
			if(!item.isFormField()){
				//String fieldName = item.getFieldName() ;//获得此表单元素的name属性
				String fileName = item.getName() ;//获得文件的完整路径
				String contentType = item.getContentType() ;//获得文件类型
				long fileSize = item.getSize() ;//获得文件大小
				// 从文件的完整路径中截取出文件名
				fileName = fileName.substring(fileName.lastIndexOf("\\") + 1, fileName.length());
				
				//判断是否有图片上传
				if(!("".equals(fileName))&&!(fileName==null)){
					
					//如果上传的文件不是图片，那么不上传
					String allImgExt = ".jpg|.jpeg|.gif|.bmp|.png|" ;
					String extName = fileName.substring(fileName.indexOf("."),fileName.length()) ;
					if(allImgExt.indexOf(extName+"|")==-1){
						//return ;
						map.put("success",false);
						map.put("msg", "只能上传jpg、jpeg、gif、bmp、png文件  ");
						response.setContentType("application/json;charset=UTF-8"); 
						PrintWriter out = response.getWriter();
						JSONObject result = JSONObject.fromObject(map);
						out.print(result.toString());
						break ;
					}
					
					//String filepath = projectpath+fieldName ;
					File uf = new File(projectpath) ;
					//更改文件的保存路径，以防止文件重名的现象出现
					if(!uf.exists()){
						uf.mkdir() ;
					}
                    //此输出路径为保存到数据库中photo字段的路径
					//String insertDB = filepath+"/"+fileName ;
					String insertDB = this.getServletContext().getContextPath()+"/upload"+"/"+department+"/"+user+"/";
                    System.out.println("文件路径："+insertDB+":"+insertDB.length());
					

					File uploadedFile = new File(projectpath, fileName);

					
					try {
						//如果在该文件夹中已经有相同的文件，那么将其删除之后再重新创建（只适用于上传一张照片的情况）
						if(uploadedFile.exists()){
							uploadedFile.delete() ;
						}
						item.write(uploadedFile);
						photoDAO = new PhotoDAO();
						ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
						photoDAO = (PhotoDAO) ctx.getBean("photoDAO");
						
						//photo.setId(3);
						photo.setPhoto_filename(fileName);
						photo.setFile_path(insertDB);
						photo.setDep(department);
						photo.setUsername(user);
						photoDAO.save(photo);
						
						map.put("success",true);
						map.put("msg", "文件上传成功！");
						response.setContentType("application/json;charset=UTF-8"); 
						PrintWriter out = response.getWriter();
						JSONObject result = JSONObject.fromObject(map);
						out.print(result.toString());
										
					} catch (Exception e) {
						e.printStackTrace();
						
					}
					
				}else { 
					// 取得普通的对象（对于像文本框这种类型的使用）
					// 对于普通类型的对象暂不做处理
					//return ;
					map.put("success",false);
					map.put("msg", "请选择上传文件，文件名不能为空！");
					response.setContentType("application/json;charset=UTF-8"); 
					PrintWriter out = response.getWriter();
					JSONObject result = JSONObject.fromObject(map);
					out.print(result.toString());
				}
			}
		}
	} catch (FileUploadException e) {
		// TODO Auto-generated catch block
		map.put("success",false);
		map.put("msg", "文件太大，不能超过8M！");
		response.setContentType("application/json;charset=UTF-8"); 
		PrintWriter out = response.getWriter();
		JSONObject result = JSONObject.fromObject(map);
		out.print(result.toString());
		
		e.printStackTrace();
	}
	

	
	
}	
	
}
