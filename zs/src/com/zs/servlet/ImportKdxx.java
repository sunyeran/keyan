package com.zs.servlet;


import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import jxl.Cell;
import jxl.Sheet;
import jxl.Workbook;
import net.sf.json.JSONObject;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.zs.hibernate.beans.Kdcx;
import com.zs.hibernate.beans.KdcxDAO;


public class ImportKdxx extends HttpServlet {
	public KdcxDAO kdcxDAO;
	
	 public void setKdcxDAO(KdcxDAO kdcxDAO){
		 this.kdcxDAO=kdcxDAO;
	 }
	public void service(HttpServletRequest request ,HttpServletResponse response)
			throws ServletException, IOException{
		Map<String , Object> map = new HashMap<String, Object>();
		ArrayList arrayList=new ArrayList();
		List<Map> list = null; 
		String filrDir=uploadFile(request);
		filrDir=filrDir+"\\2017kd.xls";
		list=jxlExlToList(filrDir);
		Kdcx kdcx=new Kdcx();
		kdcxDAO=new KdcxDAO();
		
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
		kdcxDAO = (KdcxDAO) ctx.getBean("kdcxDAO");
	//	 SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		for(int i=0;i<list.size();i++){ 
			 Map<String,Object> map1 = list.get(i);
			
			 kdcx.setXm(map1.get("xm").toString());
          //System.out.println(paper.getName());
			 kdcx.setKsh(map1.get("ksh").toString());
			 kdcx.setSjr(map1.get("sjr").toString());
			 kdcx.setJtdz(map1.get("jtdz").toString());
			 kdcx.setYzbm(map1.get("yzbm").toString());
			 kdcx.setLxdh(map1.get("lxdh").toString());
			 kdcx.setYjh(map1.get("yjh").toString());
          kdcxDAO.save(kdcx);
                  
		}
	//	lqcxDAO.save(lqcx);
       System.out.println(list);
		map.put("success",true);
		map.put("msg", "文件上传成功！");
		map.put("data", list);
		response.setContentType("application/json;charset=UTF-8"); 
		PrintWriter out = response.getWriter();
		JSONObject result = JSONObject.fromObject(map);
		out.print(result.toString());
		
	}
	public String uploadFile(HttpServletRequest request) {

       String savePath = this.getServletContext().getRealPath("/importexcel");
		//创建文件夹  
       File dirFile = new File(savePath);  
       if (!dirFile.exists()) {  
           dirFile.mkdirs();  
       }  
       String tempPath = this.getServletContext().getRealPath("/tempdir");
		//创建临时文件夹
       File dirTempFile = new File(tempPath);  
       if (!dirTempFile.exists()) {  
           dirTempFile.mkdirs();  
       }  

       DiskFileItemFactory  factory = new DiskFileItemFactory();  
       factory.setSizeThreshold(20 * 1024 * 1024*2); //设定使用内存超过5M时，将产生临时文件并存储于临时目录中。     
       factory.setRepository(new File(tempPath)); //设定存储临时文件的目录。     
       ServletFileUpload upload = new ServletFileUpload(factory);  
       upload.setHeaderEncoding("UTF-8");  
       try {  

           request.setCharacterEncoding("UTF-8");  
           List<?> items = upload.parseRequest(request);  
           Iterator<?> itr = items.iterator();  

           while (itr.hasNext())   
           {  
               FileItem item = (FileItem) itr.next();  
               if (!item.isFormField()) {  //如果是文件
                   try{  
                       String fileName = item.getName();  
                        if(fileName.indexOf("+") >= 0){
                           fileName = fileName.replaceAll("\\+","_");
                        }
                       File uploadedFile = new File(savePath, fileName);
                       OutputStream os = new FileOutputStream(uploadedFile);  
                       InputStream is = item.getInputStream();  
                       byte buf[] = new byte[1024];//可以修改 1024 以提高读取速度  
                       int length = 0;    
                       while( (length = is.read(buf)) > 0 ){    
                           os.write(buf, 0, length);    
                       }    
                       //关闭流    
                       os.flush();  
                       os.close();    
                       is.close();
                  //     savePath.add(fileName);
                   }catch(Exception e){  
                       e.printStackTrace();  
                   }  
               }          
           }   
        /*   String allPath = StringUtils.join(path, ",");
           path.clear();*/
           return savePath; 
       } catch (Exception e) {  
           // TODO Auto-generated catch block  
           e.printStackTrace();  
           return "";
       }  
   }
	
	 public static List<Map> jxlExlToList(String inPutFileName) {  
	        Workbook book = null;  
	        List<Map> list = null;  
	        try {  
	            File os = new File(inPutFileName);  
	            if (!os.exists()) {  
	                // 如果指定文件不存在，则新建该文件  
	                os.createNewFile();  
	            }  
	  
	            book = Workbook.getWorkbook(os);// 创建一个新的写入工作簿  
	            Sheet sheet = book.getSheet(0);  
	            int totalRows = sheet.getRows();  
	            int totalColumns = sheet.getColumns();  
	            Cell[] cell = sheet.getRow(0);  
	            if(totalColumns<=0){  
	                return null;  
	            }  
	            //读取第一行作为Map中的key  
	            List tableHeaderlist = new ArrayList();  
	            for (int i = 0; i < totalColumns; i++) {  
	                tableHeaderlist.add(cell[i].getContents());  
	            }  
	  
	            //将每一行存为Map集合，然后存为list  
	            list = new ArrayList();  
	            Map rowData = new LinkedHashMap();  
	            for (int i = 1; i < totalRows; i++) {  
	                cell = sheet.getRow(i);  
	                rowData = new LinkedHashMap(totalColumns);  
	                for (int j = 0; j < totalColumns; j++) {  
	                    rowData.put(tableHeaderlist.get(j), cell[j].getContents());  
	                }  
	                list.add(rowData);  
	            }  
	  
	            System.out.println("工作簿读取数据成功！");  
	              
	            book.close();// 关闭  
	        } catch (Exception e) {  
	            e.printStackTrace();  
	        }  
	          
	        return list;  
	    }  
	  
	}  
  
 

