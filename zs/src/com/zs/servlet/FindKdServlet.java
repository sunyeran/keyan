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
import com.zs.hibernate.beans.Kdcx;
import com.zs.hibernate.beans.KdcxDAO;


public class FindKdServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public FindKdServlet() {
		super();
	}

	/**
	 * Destruction of the servlet. <br>
	 */
	 public KdcxDAO kdcxDAO;
	 public KdcxDAO getKdcxDAO(){
		 return kdcxDAO;
	 }
	 public void setKdcxDAO(KdcxDAO kdcxDAO){
		 this.kdcxDAO=kdcxDAO;
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
				 Map<String , Object> dataMap = new HashMap<String, Object>();
				String ksh = (String) session.getAttribute("ksh");
			    cxdateDAO = new CxdateDAO();
				ApplicationContext ctx0 = new ClassPathXmlApplicationContext("applicationContext.xml"); 
				cxdateDAO = (CxdateDAO) ctx0.getBean("cxdateDAO");
				Map<String , Object> map = new HashMap<String, Object>();
				kdcxDAO = new KdcxDAO();
				ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
				kdcxDAO = (KdcxDAO) ctx.getBean("kdcxDAO");
				List<Cxdate> list=cxdateDAO.findAll();	
				Date now = new Date(); 
				SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");//可以方便地修改日期格式
				String dqdate = dateFormat.format( now );
				try {
					now=dateFormat.parse(dqdate);
				} catch (ParseException e1) {
					// TODO Auto-generated catch block
					e1.printStackTrace();
				}
						
				Date d1= list.get(0).getKdstart();
				String ds1= dateFormat.format( d1 );
				try {
					d1 =dateFormat.parse(ds1);
				} catch (ParseException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				Date d2= list.get(0).getKdend();
				String ds2= dateFormat.format( d2 );
				try {
					d2=dateFormat.parse(ds2);
				} catch (ParseException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				
				if((now.getTime()<d1.getTime())||(now.getTime()>d2.getTime())){
					map.put("success",false);
					map.put("msg","对不起，现在还不是查询时间，请在规定的时间查询。谢谢。");
				}else{	
				if(kdcxDAO.isValid(ksh)){

					map.put("success",true);
					map.put("msg","恭喜你已被天津滨海职业学院录取！");
					Kdcx kdcx=kdcxDAO.findByKsh(ksh);
				/*	session.setAttribute("users", users);
					String department=users.getDepartment();
					String groupid=users.getGroups_id();
					String username=users.getUserName();
					String name=users.getName();
					map.put("name",name);*/
					dataMap.put("ksh", kdcx.getKsh());
				   dataMap.put("xm", kdcx.getXm());
				   dataMap.put("sjr", kdcx.getSjr());
				   dataMap.put("jtdz", kdcx.getJtdz());
				   dataMap.put("yzbm", kdcx.getYzbm());
				   dataMap.put("lxdh", kdcx.getLxdh());
				   dataMap.put("yjh", kdcx.getYjh()); 
				   map.put("data", dataMap);
				}
				else{
					map.put("success",false);
					map.put("msg","抱歉,你未被我院录取。");	
				
				}
				}
				response.setContentType("application/json;charset=UTF-8"); 
				PrintWriter out = response.getWriter();
				JSONObject result = JSONObject.fromObject(map);
				out.print(result);
			}
    
}
