package com.keyan.servlet;


import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
//import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.keyan.hibernate.beans.PaperDAO;
import com.keyan.hibernate.beans.PatentDAO;
import com.keyan.hibernate.beans.Subject;
import com.keyan.hibernate.beans.SubjectDAO;
import com.keyan.hibernate.beans.Teaching;
import com.keyan.hibernate.beans.TeachingDAO;
import com.keyan.hibernate.beans.User;
import com.keyan.hibernate.dao.UserDAO;
import com.keyan.hibernate.util.Constants;

import net.sf.json.JSONObject;

public class Workload extends HttpServlet {

	
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
	 public PatentDAO patentDAO;
	 
	 public void setPatentDAO(PatentDAO patentDAO){
		 this.patentDAO=patentDAO;
	 }
     public SubjectDAO subjectDAO;
	 
	 public void setSubjectDAO(SubjectDAO subjectDAO){
		 this.subjectDAO=subjectDAO;
	 }
     public TeachingDAO teachingDAO;
	 
	 public void setTeachingDAO(TeachingDAO teachingDAO){
		 this.teachingDAO=teachingDAO;
	 }
	public Workload() {
		super();
	}
	public void service(HttpServletRequest request ,
			HttpServletResponse response)
			throws IOException , ServletException
		{
		  			
		 //   JsonConfig cfg = new JsonConfig(); 
		 //  cfg.setExcludes(new String[]{"users","menus"});
		    Map<String , Object> map = new HashMap<String, Object>();
		    Map<String , Object> dataMap = new HashMap<String, Object>();
		    int paperCoreCount=0;
		    int paperCommonCount=0;
		    int paperInnerCount=0;
		    int paperExchangeCount=0;
		    int totalPaperExchangeCount=0;
		    int Co_PaperExchangeCount=0;
		    int Co_PaperCoreCount=0;
		    int Co_PaperCommonCount=0;
		    int Co_PaperInnerCount=0;
		    int paperGrade=0;
		//    int paperCount=0;
		    int patentCount1=0;
		    int patentCount2=0;
		    int patentCount=0;
		    int patentGrade=0;
		    double monographWords=0;
		    double teachingWords=0;
		    double teachingGrade1=0;
		    double teachingGrade2=0;
		    double teaching_ZZ_Grade=0;
		    double teaching_JC_Grade=0;
		    int subjectHead=0;
		    int subjectNothead=0;
		    int subjectCount1=0;
		    int subjectCount2=0;
		    int subjectCount3=0;
		    int subjectCount4=0;
		    int subjectCount5=0;
		    int subjectCount6=0;
		    int subjectCount7=0;
		    int subjectCount8=0;
		    int subjectGrade1=0;
		    int subjectGrade2=0;
		    int subjectGrade3=0;
		    int subjectGrade4=0;
		    int subjectGrade5=0;
		    int subjectGrade6=0;
		    int subjectGrade7=0;
		    int subjectGrade8=0;
		    int subjectGj=0;
		    int subjectSs=0;
		    int subjectWj=0;
		    int subjectXn=0;
		    int subjectGrade=0;
		    double workload=0;
		 //   Calendar now = Calendar.getInstance();  
		    String username=(String)request.getSession().getAttribute(Constants.USERNAME_KEY);
		    UserDAO userDAO=new UserDAO();
		    ApplicationContext ctx0 = new ClassPathXmlApplicationContext("applicationContext.xml"); 
			userDAO = (UserDAO) ctx0.getBean("userDAO");
			User user=userDAO.getUserByUsername(username);
			String name=user.getName();
		    String year=request.getParameter("year");
		    String enddate=year+"-11-30";
		    //String begindate=Integer.toString(Integer.parseInt(year)-1)+"-09-01";
		    String begindate=Integer.toString(Integer.parseInt(year)-1)+"-12-01";
		  //  paperDAO = new PaperDAO();
			ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
		//	paperDAO = (PaperDAO) ctx1.getBean("paperDAO");
			paperDAO =PaperDAO.getFromApplicationContext(ctx);
			String hql0 = "select count(p.paper_name) from Paper p where p.name =? and (p.first_author ='' or p.first_author ='无') and (p.publish_time between ? and ?) and p.core='交流论文'";
		  	paperExchangeCount = paperDAO.getCount(hql0,name,begindate,enddate);
		
		  	String hql01 = "select count(p.paper_name) from Paper p where p.first_author!='' and p.first_author !='无' and p.name!=p.first_author and (p.name =? or p.first_author =?) and (p.publish_time between ? and ?) and p.core='交流论文'";
		  	Co_PaperExchangeCount = paperDAO.getCoPaperCount(hql01,name,begindate,enddate);
		  	totalPaperExchangeCount=Co_PaperExchangeCount+paperExchangeCount;
		  	
		  	String hql1 = "select count(p.paper_name) from Paper p where p.name =? and (p.first_author ='' or p.first_author ='无') and (p.publish_time between ? and ?) and p.core='核心刊物'";
		  	paperCoreCount=paperDAO.getCount(hql1,name,begindate,enddate);
		  	String hql11 = "select count(p.paper_name) from Paper p where p.first_author!='' and p.first_author !='无' and p.name!=p.first_author and (p.name =? or p.first_author =?) and (p.publish_time between ? and ?) and p.core='核心刊物'";
		  	Co_PaperCoreCount = paperDAO.getCoPaperCount(hql11,name,begindate,enddate);
		  	
		  	String hql2 = "select count(p.paper_name) from Paper p where p.name =? and (p.first_author ='' or p.first_author ='无') and (p.publish_time between ? and ?) and p.core='普通刊物'";
		  	paperCommonCount=paperDAO.getCount(hql2,name,begindate,enddate);
		  	String hql21 = "select count(p.paper_name) from Paper p where p.first_author!='' and p.first_author !='无' and p.name!=p.first_author and (p.name =? or p.first_author =?) and (p.publish_time between ? and ?) and p.core='普通刊物'";
		  	Co_PaperCommonCount = paperDAO.getCoPaperCount(hql21,name,begindate,enddate);
		  	
		  	String hql3 = "select count(p.paper_name) from Paper p where p.name =? and (p.first_author ='' or p.first_author ='无') and (p.publish_time between ? and ?) and p.core='校内刊物'";
		  	paperInnerCount=paperDAO.getCount(hql3,name,begindate,enddate);
		  	String hql31 = "select count(p.paper_name) from Paper p where p.first_author!='' and p.first_author !='无' and p.name!=p.first_author and (p.name =? or p.first_author =?) and (p.publish_time between ? and ?) and p.core='校内刊物'";
		  	Co_PaperInnerCount = paperDAO.getCoPaperCount(hql31,name,begindate,enddate);
		  	
		  	int co_paper_num=Co_PaperCoreCount+Co_PaperCommonCount+Co_PaperInnerCount;
		  	
		  	int paperNum=paperCoreCount+paperCommonCount+paperInnerCount;
		  	paperGrade=Constants.CORE_PAPER_GRADE*paperCoreCount+Constants.ORDINARY_PAPER_GRADE*paperCommonCount+Constants.SCHOOL_PAPER_GRADE*paperInnerCount+Constants.EXCHANGE_PAPER_GRADE
	        *paperExchangeCount+Constants.CO_EXCHANGE_PAPER_GRADE*Co_PaperExchangeCount+Constants.CO_CORE_PAPER_GRADE*Co_PaperCoreCount+Constants.CO_COMMON_PAPER_GRADE*Co_PaperCommonCount+Constants.CO_SCHOOL_PAPER_GRADE*Co_PaperInnerCount;
		  	
		  	
		  /* 	patentDAO = new PatentDAO();
			ApplicationContext ctx2 = new ClassPathXmlApplicationContext("applicationContext.xml"); 
			patentDAO = (PatentDAO) ctx2.getBean("patentDAO");*/
		  	patentDAO =PatentDAO.getFromApplicationContext(ctx);
			String hql4 = "select count(p.patent_name) from Patent p where p.username =? and (p.authorized between ? and ?)and p.patent_type='发明与实用新型专利'";
		  	patentCount1=patentDAO.getCount(hql4,username,begindate,enddate);
		  	String hql5 = "select count(p.patent_name) from Patent p where p.username =? and (p.authorized between ? and ?)and p.patent_type='外观设计型专利'";
		  	patentCount2=patentDAO.getCount(hql5,username,begindate,enddate);
		  	patentCount=patentCount1+patentCount2;
		  	patentGrade=Constants.PATENT_WG_GRADE*patentCount2+Constants.PATENT_FM_GRADE*patentCount1;
		  	
		 /* 	teachingDAO = new TeachingDAO();
			ApplicationContext ctx3 = new ClassPathXmlApplicationContext("applicationContext.xml"); 
			teachingDAO = (TeachingDAO) ctx3.getBean("teachingDAO");*/
		  	teachingDAO =TeachingDAO.getFromApplicationContext(ctx);
			String hql6 = "from Teaching p where p.username =? and (p.publish_time between ? and ?)and p.type='专著'";
		  	List<Teaching> monographList=new ArrayList<Teaching>();
		  	monographList=teachingDAO.findByType(hql6,username,begindate,enddate);
		  	for(int i=0;    i<monographList.size(); i++)    { 
		  		if("国家级出版社".equals(monographList.get(i).getNature())){
		  		  teachingGrade1=teachingGrade1+(monographList.get(i).getWords())*Constants.MONOGRAPH_GJ_GRADE;
		  		}
		  		else{
		  		  teachingGrade2=teachingGrade2+(monographList.get(i).getWords())*Constants.MONOGRAPH_SS_GRADE;	
		  		}
		  		monographWords=monographWords+monographList.get(i).getWords();
		  	}
		  	teaching_ZZ_Grade=teachingGrade1+teachingGrade2;
		  	teachingGrade1=0;
		  	teachingGrade2=0;
		  	String hql7 = "from Teaching p where p.username =? and (p.publish_time between ? and ?)and p.type='教材'";
		  	List<Teaching> teachingList=new ArrayList<Teaching>();
		  	teachingList=teachingDAO.findByType(hql7,username,begindate,enddate);
		  	for(int i=0;    i<teachingList.size(); i++)    { 
		  		if("国家级出版社".equals(teachingList.get(i).getNature())){
			  		  teachingGrade1=teachingGrade1+(teachingList.get(i).getWords())*Constants.TEACHING_GJ_GRADE;
			  		}
			  		else{
			  		  teachingGrade2=teachingGrade2+(teachingList.get(i).getWords())*Constants.TEACHING_SS_GRADE;	
			  		}
		  		teachingWords=teachingWords+teachingList.get(i).getWords();
		  	}
		  	double totalWords=teachingWords+monographWords;
		  	teaching_JC_Grade=teachingGrade1+teachingGrade2;
		  	double teachingGrade=teaching_JC_Grade+teaching_ZZ_Grade;
		  /*
		  	subjectDAO = new SubjectDAO();
			ApplicationContext ctx4= new ClassPathXmlApplicationContext("applicationContext.xml"); 
			subjectDAO = (SubjectDAO) ctx4.getBean("subjectDAO");*/
	    	subjectDAO =SubjectDAO.getFromApplicationContext(ctx);
			String subjectBeginDate=Integer.toString(Integer.parseInt(year)-3)+"-12-01";
			String hql8 = "from Subject p where p.username =? and (p.concludingTime between ? and ?)and p.head='主持人'and p.subjectType='国家级课题' ";
		  	List<Subject> subjectList1=new ArrayList<Subject>();
		  	try {
				subjectList1=subjectDAO.findByType(hql8,username,subjectBeginDate,enddate);
			} catch (Exception e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
		  	System.out.println("startdate is:"+subjectBeginDate);
			System.out.println("enddate is:"+enddate);	
		  	for(int i=0;    i<subjectList1.size(); i++)    { 
		  	   subjectGrade1=subjectGrade1+Constants.SUBJECT_GJ_HEAD_GRADE;
			   subjectCount1++;
			  	}
			subjectBeginDate=Integer.toString(Integer.parseInt(year)-1)+"-12-01";
	//	  	subjectDAO = (SubjectDAO) ctx4.getBean("subjectDAO");//如不加上此句话则会出现session为空的异常
		  	String hql9 = "from Subject p where p.username =? and (p.concludingTime between ? and ?)and p.head='参与人'and p.subjectType='国家级课题' ";
		  	try {
				subjectList1=subjectDAO.findByType(hql9,username,subjectBeginDate,enddate);
			} catch (Exception e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}	
		  	System.out.println("startdate is:"+subjectBeginDate);
			System.out.println("enddate is:"+enddate);	
		  	for(int i=0;    i<subjectList1.size(); i++)    { 	
		  		subjectGrade2=subjectGrade2+Constants.SUBJECT_GJ_NOTHEAD_GRADE;	
				subjectCount2++;
			  		
		   	}	
		  	subjectGj=subjectGj+subjectGrade1+subjectGrade2;//国家级课题分数
		  	
		   	subjectBeginDate=Integer.toString(Integer.parseInt(year)-3)+"-12-01";
	//		subjectDAO = (SubjectDAO) ctx4.getBean("subjectDAO");//如不加上此句话则会出现session为空的异常
		  	String hql10= "from Subject p where p.username =? and (p.concludingTime between ? and ?)and p.head='主持人'and p.subjectType='省市级课题'";
		  //	List<Subject> subjectList2=new ArrayList<Subject>();
		  	try {
				subjectList1=subjectDAO.findByType(hql10,username,subjectBeginDate,enddate);
			} catch (Exception e2) {
				// TODO Auto-generated catch block
				e2.printStackTrace();
			}
		 
		  	for(int i=0;    i<subjectList1.size(); i++)    { 
		  			  subjectGrade3=subjectGrade3+Constants.SUBJECT_SS_HEAD_GRADE;
			  	      subjectCount3++;
			}
			subjectBeginDate=Integer.toString(Integer.parseInt(year)-1)+"-12-01";
	//	  	subjectDAO = (SubjectDAO) ctx4.getBean("subjectDAO");//如不加上此句话则会出现session为空的异常
		  	String hql16 = "from Subject p where p.username =? and (p.concludingTime between ? and ?)and p.head='参与人'and p.subjectType='省市级课题'";
		  	try {
				subjectList1=subjectDAO.findByType(hql16,username,subjectBeginDate,enddate);
			} catch (Exception e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}	
		  
		  	for(int i=0; i<subjectList1.size(); i++)    {  		
		  	
		  				subjectGrade4=subjectGrade4+Constants.SUBJECT_SS_NOTHEAD_GRADE;	
			  			subjectCount4++;
			  		}
		   	
		  	subjectSs=subjectSs+subjectGrade3+subjectGrade4;//省市级课题分数
		  	
		  	subjectBeginDate=Integer.toString(Integer.parseInt(year)-2)+"-12-01";
	//		subjectDAO = (SubjectDAO) ctx4.getBean("subjectDAO");//如不加上此句话则会出现session为空的异常
		 	String hql12 = "from Subject p where p.username =? and (p.concludingTime between ? and ?)and p.head='主持人'and p.subjectType='委局级课题'";
		 
		  	try {
				subjectList1=subjectDAO.findByType(hql12,username,subjectBeginDate,enddate);
			} catch (Exception e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
		  
		  	for(int i=0;    i<subjectList1.size(); i++)    { 
		  			  subjectGrade5=subjectGrade5+Constants.SUBJECT_WJ_HEAD_GRADE;
			  	      subjectCount5++;
			  		}
			subjectBeginDate=Integer.toString(Integer.parseInt(year)-1)+"-12-01";
	//	  	subjectDAO = (SubjectDAO) ctx4.getBean("subjectDAO");//如不加上此句话则会出现session为空的异常
		  	String hql13 = "from Subject p where p.username =? and (p.concludingTime between ? and ?)and p.head='参与人'and p.subjectType='委局级课题'";
		  	try {
				subjectList1=subjectDAO.findByType(hql13,username,subjectBeginDate,enddate);
			} catch (Exception e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}	
		  
		  	for(int i=0; i<subjectList1.size(); i++)    {
		  	 			subjectGrade6=subjectGrade6+Constants.SUBJECT_WJ_NOTHEAD_GRADE;	
			  			subjectCount6++;
			}
		  	subjectWj=subjectWj+subjectGrade5+subjectGrade6;//委局级课题分数
		  	subjectBeginDate=Integer.toString(Integer.parseInt(year)-2)+"-12-01";
	//		subjectDAO = (SubjectDAO) ctx4.getBean("subjectDAO");//如不加上此句话则会出现session为空的异常
		  	String hql14 = "from Subject p where p.username =? and (p.concludingTime between ? and ?)and p.head='主持人'and p.subjectType='校级课题'";
		  	//List<Subject> subjectList4=new ArrayList<Subject>();
		  	try {
				subjectList1=subjectDAO.findByType(hql14,username,subjectBeginDate,enddate);
			} catch (Exception e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
	
		   	for(int i=0;  i<subjectList1.size(); i++)    { 
		  			  subjectGrade7=subjectGrade7+Constants.SUBJECT_XN_HEAD_GRADE;
			          subjectCount7++;
			}
		   	subjectBeginDate=Integer.toString(Integer.parseInt(year)-1)+"-12-01";

	//	  	subjectDAO = (SubjectDAO) ctx4.getBean("subjectDAO");//如不加上此句话则会出现session为空的异常
		  	String hql15 = "from Subject p where p.username =? and (p.concludingTime between ? and ?)and p.head='参与人'and p.subjectType='校级课题'";
		  	try {
				subjectList1=subjectDAO.findByType(hql15,username,subjectBeginDate,enddate);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}	
	
		  	for(int i=0; i<subjectList1.size(); i++)    {
					subjectGrade8=subjectGrade8+Constants.SUBJECT_XN_NOTHEAD_GRADE;	
					subjectCount8++;
		  	}
		   	subjectXn=subjectXn+subjectGrade7+subjectGrade8;//校内课题分数
		
		   	subjectHead=subjectCount1+subjectCount3+subjectCount5+subjectCount7;
		   	subjectNothead=subjectCount2+subjectCount4+subjectCount6+subjectCount8;
		   	int subjectCount=subjectHead+subjectNothead;
		   
		  	subjectGrade=subjectGj+subjectSs+subjectWj+subjectXn;
		 
		    workload=paperGrade+patentGrade+teachingGrade+subjectGrade;
		    dataMap.put("paper", paperNum);
		    dataMap.put("co_paper", co_paper_num);
			dataMap.put("exchange_paper", totalPaperExchangeCount);
		    dataMap.put("patent", patentCount);
		    dataMap.put("teaching", totalWords);
		    dataMap.put("subject", subjectCount);
		    dataMap.put("workload", workload);
		    map.put("success", true);
		    map.put("data", dataMap);
		    PrintWriter out = response.getWriter();
			// ��Map��װ��JSONObject�����
			//out.print(new JSONObject(result));
			JSONObject result = JSONObject.fromObject(map);
			out.print(result.toString());
		}

}
