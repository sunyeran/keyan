package com.keyan.servlet;


	
import java.io.IOException;
import java.io.PrintWriter;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

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

public class ExportDepWorkload extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public ExportDepWorkload() {
		super();
	}

	public UserDAO userDAO;
	 public UserDAO getUserDAO(){
		 return userDAO;
	 }
	
	 public void setUserDAO(UserDAO userDAO){
		 this.userDAO=userDAO;
	 }
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
	
	public void service(HttpServletRequest request ,
			HttpServletResponse response)
			throws IOException , ServletException
		{   
		  	String dept=(String)request.getSession().getAttribute(Constants.DEPARTMENT_KEY);
		  	
		    Map<String , Object> map = new HashMap<String, Object>();
		    userDAO = new UserDAO();
			ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
			userDAO = (UserDAO) ctx.getBean("userDAO");
		    String hql="from User u where department='"+dept+"'";
		    List <User>list =new ArrayList<User>();
		    List statisticsAll=new ArrayList<Map<String, Object>>();
		    Map <String , Object>statistics=new HashMap<String, Object>();
		    list=userDAO.getUsersBydep(hql);
		    for(int i=0;i<list.size();i++){
		    	String name=list.get(i).getName();
		    	int workloadLevel=list.get(i).getWorkloadLevel();
		    	statistics=statistics(name,dept,workloadLevel);
		    	statisticsAll.add(statistics);
		    	//System.out.println(statisticsAll.get(i));
		    }
		    map.put("success",true);
			map.put("data",statisticsAll);
		    response.setContentType("application/json;charset=UTF-8"); 
			PrintWriter out = response.getWriter();
			JSONObject result = JSONObject.fromObject(map);
			out.print(result.toString());
		}
	public Map<String, Object> statistics(String name,String dept,int workloadLevel)
			throws IOException , ServletException{
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
	    double teachingGrade=0;
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
	    String isComplete =null;
		
	    Calendar now = Calendar.getInstance();  
	    int year= now.get(Calendar.YEAR); 
	    String begindate=Integer.toString(year-1)+"-12-01";
	    String enddate=now.get(Calendar.YEAR)+"-11-30";
	    //String begindate=Integer.toString(Integer.parseInt(year)-1)+"-09-01";
	    paperDAO = new PaperDAO();
		ApplicationContext ctx1 = new ClassPathXmlApplicationContext("applicationContext.xml"); 
		paperDAO= (PaperDAO) ctx1.getBean("paperDAO");
		//String hql0 = "select count(p.paper_name) from Paper p where p.name =? and (p.first_author ='' or p.first_author ='无') and (p.publish_time between ? and ?) and p.core='交流论文' and p.approval='已审核' ";
		String hql0 = "select count(p.paper_name) from Paper p where p.name ='"+name+"' and (p.first_author ='' or p.first_author ='无') and (p.publish_time between '"+begindate+"' and '"+enddate+"') and p.core='交流论文' and p.approval='已审核' ";
	  	
		//paperExchangeCount = paperDAO.getCount(hql0,name,begindate,enddate);
		paperExchangeCount = paperDAO.getCount(hql0);
		
	  	//String hql01 = "select count(p.paper_name) from Paper p where p.first_author!='' and p.first_author !='无' and p.name!=p.first_author and (p.name =? or p.first_author =?) and (p.publish_time between ? and ?) and p.core='交流论文' and p.approval='已审核' ";
		String hql01 = "select count(p.paper_name) from Paper p where p.first_author!='' and p.first_author !='无' and p.name!=p.first_author and (p.name ='"+name+"' or p.first_author ='"+name+"') and (p.publish_time between '"+begindate+"' and '"+enddate+"') and p.core='交流论文' and p.approval='已审核' ";
		Co_PaperExchangeCount = paperDAO.getCoPaperCount(hql01);
		//Co_PaperExchangeCount = paperDAO.getCoPaperCount(hql01,name,begindate,enddate);
	  	totalPaperExchangeCount=Co_PaperExchangeCount+paperExchangeCount;
	  	
	  	String hql1 = "select count(p.paper_name) from Paper p where p.name ='"+name+"' and (p.first_author ='' or p.first_author ='无') and (p.publish_time between '"+begindate+"' and '"+enddate+"') and p.core='核心刊物' and p.approval='已审核' ";
	  	paperCoreCount=paperDAO.getCount(hql1);
	  	String hql11 = "select count(p.paper_name) from Paper p where p.first_author!='' and p.first_author !='无' and p.name!=p.first_author and (p.name ='"+name+"' or p.first_author ='"+name+"') and (p.publish_time between '"+begindate+"' and '"+enddate+"') and p.core='核心刊物' and p.approval='已审核' ";
	  	Co_PaperCoreCount = paperDAO.getCoPaperCount(hql11);
	  	
	  	String hql2 = "select count(p.paper_name) from Paper p where p.name ='"+name+"' and (p.first_author ='' or p.first_author ='无') and (p.publish_time between '"+begindate+"' and '"+enddate+"') and p.core='普通刊物' and p.approval='已审核' ";
	  	paperCommonCount=paperDAO.getCount(hql2);
	  	String hql21 = "select count(p.paper_name) from Paper p where p.first_author!='' and p.first_author !='无' and p.name!=p.first_author and (p.name ='"+name+"' or p.first_author ='"+name+"') and (p.publish_time between '"+begindate+"' and '"+enddate+"') and p.core='普通刊物' and p.approval='已审核' ";
	  	Co_PaperCommonCount = paperDAO.getCoPaperCount(hql21);
	  	
	  	String hql3 = "select count(p.paper_name) from Paper p where p.name ='"+name+"' and (p.first_author ='' or p.first_author ='无') and (p.publish_time between '"+begindate+"' and '"+enddate+"') and p.core='校内刊物' and p.approval='已审核' ";
	  	paperInnerCount=paperDAO.getCount(hql3);
	  	String hql31 = "select count(p.paper_name) from Paper p where p.first_author!='' and p.first_author !='无' and p.name!=p.first_author and (p.name ='"+name+"' or p.first_author ='"+name+"') and (p.publish_time between '"+begindate+"' and '"+enddate+"') and p.core='校内刊物' and p.approval='已审核' ";
	  	Co_PaperInnerCount = paperDAO.getCoPaperCount(hql31);
	  	
	  	int co_paper_num=Co_PaperCoreCount+Co_PaperCommonCount+Co_PaperInnerCount;
	  	
	  	int paperNum=paperCoreCount+paperCommonCount+paperInnerCount;
	  	paperGrade=Constants.CORE_PAPER_GRADE*paperCoreCount+Constants.ORDINARY_PAPER_GRADE*paperCommonCount+Constants.SCHOOL_PAPER_GRADE*paperInnerCount+Constants.EXCHANGE_PAPER_GRADE
       *paperExchangeCount+Constants.CO_EXCHANGE_PAPER_GRADE*Co_PaperExchangeCount+Constants.CO_CORE_PAPER_GRADE*Co_PaperCoreCount+Constants.CO_COMMON_PAPER_GRADE*Co_PaperCommonCount+Constants.CO_SCHOOL_PAPER_GRADE*Co_PaperInnerCount;
	  	ctx1=null;
	  	
	  	patentDAO = new PatentDAO();
		ApplicationContext ctx2 = new ClassPathXmlApplicationContext("applicationContext.xml"); 
		patentDAO = (PatentDAO) ctx2.getBean("patentDAO");
	  	String hql4 = "select count(p.patent_name) from Patent p where p.name ='"+name+"' and (p.authorized between '"+begindate+"' and '"+enddate+"') and p.patent_type='发明与实用新型专利' and p.approval='已审核'";
	  	patentCount1=patentDAO.getCount(hql4);
	 
		patentDAO = (PatentDAO) ctx2.getBean("patentDAO");//如不加上此句话则会出现session为空的异常
	  	String hql5 = "select count(p.patent_name) from Patent p where p.name ='"+name+"' and (p.authorized between '"+begindate+"' and '"+enddate+"') and p.patent_type='外观设计型专利' and p.approval='已审核'";
	  	patentCount2=patentDAO.getCount(hql5);
	  	patentCount=patentCount1+patentCount2;
	  	patentGrade=Constants.PATENT_WG_GRADE*patentCount2+Constants.PATENT_FM_GRADE*patentCount1;
	  	ctx2=null;
	  	
	  	teachingDAO = new TeachingDAO();
		ApplicationContext ctx3 = new ClassPathXmlApplicationContext("applicationContext.xml"); 
		teachingDAO = (TeachingDAO) ctx3.getBean("teachingDAO");
	  	String hql6 = "from Teaching p where p.name =? and (p.publish_time between ? and ?)and p.type='专著' and p.approval='已审核'";
	  	List<Teaching> monographList=new ArrayList<Teaching>();
	  	monographList=teachingDAO.findByType(hql6,name,begindate,enddate);
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
	  	
		teachingDAO = (TeachingDAO) ctx3.getBean("teachingDAO");//如不加上此句话则会出现session为空的异常
	  	String hql7 = "from Teaching p where p.name =? and (p.publish_time between ? and ?)and p.type='教材' and p.approval='已审核'";
	  	List<Teaching> teachingList=new ArrayList<Teaching>();
	  	teachingList=teachingDAO.findByType(hql7,name,begindate,enddate);
	  	for(int i=0;    i<teachingList.size(); i++)    { 
	  		if("国家级出版社".equals(teachingList.get(i).getNature())){
		  		  teachingGrade1=teachingGrade1+(teachingList.get(i).getWords())*Constants.TEACHING_GJ_GRADE;
		  		}
		  		else{
		  		  teachingGrade2=teachingGrade2+(teachingList.get(i).getWords())*Constants.TEACHING_SS_GRADE;	
		  		}
	  		teachingWords=teachingWords+teachingList.get(i).getWords();
	  	}
	  	teaching_JC_Grade=teachingGrade1+teachingGrade2;
	  	teachingGrade=teaching_ZZ_Grade+teaching_JC_Grade;
	  	ctx3=null;
	  	
	  	subjectDAO = new SubjectDAO();
		ApplicationContext ctx4= new ClassPathXmlApplicationContext("applicationContext.xml"); 
		subjectDAO = (SubjectDAO) ctx4.getBean("subjectDAO");
		String subjectBeginDate=Integer.toString(now.get(Calendar.YEAR)-3)+"-12-01";
		String hql8 = "from Subject p where p.name =? and (p.concludingTime between ? and ?)and p.head='主持人'and p.subjectType='国家级课题' and p.approval='已审核'";
	  	List<Subject> subjectList1=new ArrayList<Subject>();
	  	subjectList1=subjectDAO.findByType(hql8,name,subjectBeginDate,enddate);
	  	System.out.println("startdate is:"+subjectBeginDate);
		System.out.println("enddate is:"+enddate);	
	  	for(int i=0;    i<subjectList1.size(); i++)    { 
	  	   subjectGrade1=subjectGrade1+Constants.SUBJECT_GJ_HEAD_GRADE;
		   subjectCount1++;
		  	}
	  	subjectBeginDate=Integer.toString(now.get(Calendar.YEAR)-1)+"-12-01";
	  	subjectDAO = (SubjectDAO) ctx4.getBean("subjectDAO");//如不加上此句话则会出现session为空的异常
	  	String hql9 = "from Subject p where p.name =? and (p.concludingTime between ? and ?)and p.head='参与人'and p.subjectType='国家级课题' and p.approval='已审核'";
	  	subjectList1=subjectDAO.findByType(hql9,name,subjectBeginDate,enddate);	
	  	System.out.println("startdate is:"+subjectBeginDate);
		System.out.println("enddate is:"+enddate);	
	  	for(int i=0;    i<subjectList1.size(); i++)    { 	
	  		subjectGrade2=subjectGrade2+Constants.SUBJECT_GJ_NOTHEAD_GRADE;	
			subjectCount2++;
		  		
	   	}	
	  	subjectGj=subjectGj+subjectGrade1+subjectGrade2;//国家级课题分数
	  	
	  	subjectBeginDate=Integer.toString(now.get(Calendar.YEAR)-3)+"-12-01";
		subjectDAO = (SubjectDAO) ctx4.getBean("subjectDAO");//如不加上此句话则会出现session为空的异常
	  	String hql10= "from Subject p where p.name =? and (p.concludingTime between ? and ?)and p.head='主持人'and p.subjectType='省市级课题' and p.approval='已审核'";
	  //	List<Subject> subjectList2=new ArrayList<Subject>();
	  	subjectList1=subjectDAO.findByType(hql10,name,subjectBeginDate,enddate);
	  	System.out.println("startdate is:"+subjectBeginDate);
		System.out.println("enddate is:"+enddate);	
	  	for(int i=0;    i<subjectList1.size(); i++)    { 
	  			  subjectGrade3=subjectGrade3+Constants.SUBJECT_SS_HEAD_GRADE;
		  	      subjectCount3++;
		}
	  	subjectBeginDate=Integer.toString(now.get(Calendar.YEAR)-1)+"-12-01";
	  	subjectDAO = (SubjectDAO) ctx4.getBean("subjectDAO");//如不加上此句话则会出现session为空的异常
	  	String hql16 = "from Subject p where p.name =? and (p.concludingTime between ? and ?)and p.head='参与人'and p.subjectType='省市级课题' and p.approval='已审核'";
	  	subjectList1=subjectDAO.findByType(hql16,name,subjectBeginDate,enddate);	
	  	System.out.println("startdate is:"+subjectBeginDate);
		System.out.println("enddate is:"+enddate);	
	  	for(int i=0; i<subjectList1.size(); i++)    {  		
	  	
	  				subjectGrade4=subjectGrade4+Constants.SUBJECT_SS_NOTHEAD_GRADE;	
		  			subjectCount4++;
		  		}
	   	
	  	subjectSs=subjectSs+subjectGrade3+subjectGrade4;//省市级课题分数
	  	
	  	subjectBeginDate=Integer.toString(now.get(Calendar.YEAR)-2)+"-12-01";
		subjectDAO = (SubjectDAO) ctx4.getBean("subjectDAO");//如不加上此句话则会出现session为空的异常
	 	String hql12 = "from Subject p where p.name =? and (p.concludingTime between ? and ?)and p.head='主持人'and p.subjectType='委局级课题' and p.approval='已审核'";
	  	//List<Subject> subjectList3=new ArrayList<Subject>();
	  	subjectList1=subjectDAO.findByType(hql12,name,subjectBeginDate,enddate);
	  	System.out.println("startdate is:"+subjectBeginDate);
		System.out.println("enddate is:"+enddate);	
	  	for(int i=0;    i<subjectList1.size(); i++)    { 
	  			  subjectGrade5=subjectGrade5+Constants.SUBJECT_WJ_HEAD_GRADE;
		  	      subjectCount5++;
		  		}
	  	subjectBeginDate=Integer.toString(now.get(Calendar.YEAR)-1)+"-12-01";
	  	subjectDAO = (SubjectDAO) ctx4.getBean("subjectDAO");//如不加上此句话则会出现session为空的异常
	  	String hql13 = "from Subject p where p.name =? and (p.concludingTime between ? and ?)and p.head='参与人'and p.subjectType='委局级课题' and p.approval='已审核'";
	  	subjectList1=subjectDAO.findByType(hql13,name,subjectBeginDate,enddate);	
	  	System.out.println("startdate is:"+subjectBeginDate);
		System.out.println("enddate is:"+enddate);	
	  	for(int i=0; i<subjectList1.size(); i++)    {
	  	 			subjectGrade6=subjectGrade6+Constants.SUBJECT_WJ_NOTHEAD_GRADE;	
		  			subjectCount6++;
		}
	  	subjectWj=subjectWj+subjectGrade5+subjectGrade6;//委局级课题分数
	  	subjectBeginDate=Integer.toString(now.get(Calendar.YEAR)-2)+"-12-01";
		subjectDAO = (SubjectDAO) ctx4.getBean("subjectDAO");//如不加上此句话则会出现session为空的异常
	  	String hql14 = "from Subject p where p.name =? and (p.concludingTime between ? and ?)and p.head='主持人'and p.subjectType='校级课题' and p.approval='已审核'";
	  	//List<Subject> subjectList4=new ArrayList<Subject>();
	  	subjectList1=subjectDAO.findByType(hql14,name,subjectBeginDate,enddate);
	  	System.out.println("startdate is:"+subjectBeginDate);
		System.out.println("enddate is:"+enddate);	
	   	for(int i=0;  i<subjectList1.size(); i++)    { 
	  			  subjectGrade7=subjectGrade7+Constants.SUBJECT_XN_HEAD_GRADE;
		          subjectCount7++;
		}
	   	subjectBeginDate=Integer.toString(now.get(Calendar.YEAR)-1)+"-12-01";

	  	subjectDAO = (SubjectDAO) ctx4.getBean("subjectDAO");//如不加上此句话则会出现session为空的异常
	  	String hql15 = "from Subject p where p.name =? and (p.concludingTime between ? and ?)and p.head='参与人'and p.subjectType='校级课题' and p.approval='已审核'";
	  	subjectList1=subjectDAO.findByType(hql15,name,subjectBeginDate,enddate);	
	  	System.out.println("startdate is:"+subjectBeginDate);
		System.out.println("enddate is:"+enddate);	
	  	for(int i=0; i<subjectList1.size(); i++)    {
				subjectGrade8=subjectGrade8+Constants.SUBJECT_XN_NOTHEAD_GRADE;	
				subjectCount8++;
	  	}
	   	subjectXn=subjectXn+subjectGrade7+subjectGrade8;//校内课题分数
	
	   	subjectHead=subjectCount1+subjectCount3+subjectCount5+subjectCount7;
	   	subjectNothead=subjectCount2+subjectCount4+subjectCount6+subjectCount8;
	   //	int subjectCount=subjectHead+subjectNothead;
	   
	  	subjectGrade=subjectGj+subjectSs+subjectWj+subjectXn;
	    ctx4=null;
	    workload=paperGrade+patentGrade+teachingGrade+subjectGrade;
	    if(workload>=workloadLevel)
	    	isComplete="已完成";
	    else
	    	isComplete="未完成";
	    dataMap.put("name", name);
	  	dataMap.put("department", dept);
	  	dataMap.put("paper_num", paperNum);
	  	dataMap.put("co_paper_num", co_paper_num);
	  	dataMap.put("monograph_num", monographWords);
	  	dataMap.put("teaching_num", teachingWords);
	  	dataMap.put("subject_num", subjectHead);
	  	dataMap.put("participation_issues", subjectNothead);
	  	dataMap.put("patent_num", patentCount);
	  	dataMap.put("exchange_paper", totalPaperExchangeCount);
	  	dataMap.put("workload", workload);
	  	dataMap.put("isComplete", isComplete);
		return dataMap;
	}

}

