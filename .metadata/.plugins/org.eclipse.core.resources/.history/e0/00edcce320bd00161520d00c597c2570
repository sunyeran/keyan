package com.keyan.servlet;


import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Date;
import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.Map;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.keyan.hibernate.beans.Paper;
import com.keyan.hibernate.beans.PaperDAO;
import com.keyan.hibernate.beans.Patent;
import com.keyan.hibernate.beans.PatentDAO;
import com.keyan.hibernate.beans.Subject;
import com.keyan.hibernate.beans.SubjectDAO;
import com.keyan.hibernate.beans.Teaching;
import com.keyan.hibernate.beans.TeachingDAO;
import com.keyan.hibernate.util.Constants;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

public class DataUpdate extends HttpServlet {

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
	/**
	 * Constructor of the object.
	 */
	public DataUpdate() {
		super();
	}
	public void service(HttpServletRequest request ,
			HttpServletResponse response)
			throws IOException , ServletException
		{
		Map<String , Object> map = new HashMap<String, Object>();
		Map<String , Object> data = new HashMap<String, Object>();
		String user=(String)request.getSession().getAttribute(Constants.USERNAME_KEY);
		String name=(String)request.getSession().getAttribute(Constants.NAME_KEY);
		
	    String dept=(String)request.getSession().getAttribute(Constants.DEPARTMENT_KEY);			
		String jsonStr = request.getParameter("data");
        String entity=request.getParameter("entity");
		JSONArray jsonArray = JSONArray.fromObject(jsonStr);
		SimpleDateFormat bartDateFormat = new SimpleDateFormat("yyyy-MM-dd"); 
		//SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		System.out.println(jsonStr);
		if("Paper".equals(entity)){
		Paper paper=new Paper();
		paperDAO = new PaperDAO();
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
		paperDAO = (PaperDAO) ctx.getBean("paperDAO");
		  for(int i=0;i<jsonArray.size(); i++){

			JSONObject jsonJ = jsonArray.getJSONObject(i);
			/*if(jsonJ.containsKey("paper_id")){
				paper.setPaper_id(new Integer(jsonJ.getString("paper_id")));
				
				 }*/
			paper.setPaper_id(new Integer(jsonJ.getString("paper_id")));
			paper.setName(name);
			paper.setUsername(user);
			paper.setDepartment(dept);
			paper.setFirst_author(jsonJ.getString("first_author"));
			paper.setSecond_author(jsonJ.getString("second_author"));
			paper.setPaper_name(jsonJ.getString("paper_name"));
			paper.setIssn(jsonJ.getString("issn"));
			paper.setCn(jsonJ.getString("cn"));
			try {
				paper.setPublish_time(bartDateFormat.parse(jsonJ.getString("publish_time")));
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			//paper.setApproval(jsonJ.getString("approval"));
			paper.setVolume(jsonJ.getString("volume"));
			paper.setCore(jsonJ.getString("core"));
			paper.setApproval(jsonJ.getString("approval"));
			//paper.setApproval("未审核");
			try {
				paper.setLast_update(bartDateFormat.parse(jsonJ.getString("last_update")));
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			//paper.setWorkload(jsonJ.getString("workload"));
			//String sdate=df.format(Date.valueOf(jsonJ.getString("last_update")));
			//paper.setLast_update(Timestamp.valueOf(sdate));
			
			paperDAO.update(paper);
		  }
		}
		else if("Patent".equals(entity)){
			Patent patent=new Patent();
			patentDAO = new PatentDAO();
			ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
			patentDAO = (PatentDAO) ctx.getBean("patentDAO");
			  for(int i=0;i<jsonArray.size(); i++){
				JSONObject jsonJ = jsonArray.getJSONObject(i);
				patent.setPatent_id(new Integer(jsonJ.getString("patent_id")));
				patent.setName(name);
				patent.setUsername(user);
				patent.setDepartment(dept);
				patent.setPatent_name(jsonJ.getString("patent_name"));
				patent.setPatent_person(jsonJ.getString("patent_person"));
				patent.setPatent_type(jsonJ.getString("patent_type"));
				patent.setInventor(jsonJ.getString("inventor"));
				try {
					patent.setAcceptance_time(bartDateFormat.parse(jsonJ.getString("acceptance_time")));
					patent.setAuthorized(bartDateFormat.parse(jsonJ.getString("authorized")));
				} catch (ParseException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				patent.setImplement(jsonJ.getString("implement"));
				patent.setApply_no(jsonJ.getString("apply_no"));
				patent.setIs_school(jsonJ.getString("is_school"));
				patent.setApproval(jsonJ.getString("approval"));
				try {
					patent.setLast_update(bartDateFormat.parse(jsonJ.getString("last_update")));
				} catch (ParseException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				patentDAO.update(patent);
		      }
			
		}
		else if("Subject".equals(entity)){
			Subject subject=new Subject();
			subjectDAO = new SubjectDAO();
			ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
			subjectDAO = (SubjectDAO) ctx.getBean("subjectDAO");
			  for(int i=0;i<jsonArray.size(); i++){
				JSONObject jsonJ = jsonArray.getJSONObject(i);
				subject.setName(name);
				subject.setUsername(user);
				subject.setDepartment(dept);
				subject.setSubject_id(new Integer(jsonJ.getString("subject_id")));
				subject.setSubjectName(jsonJ.getString("subjectName"));
				subject.setSubjectNo(jsonJ.getString("subjectNo"));
				subject.setIsFirstUnit(jsonJ.getString("isFirstUnit"));
				subject.setHead(jsonJ.getString("head"));
				try {
					subject.setProjectTime(bartDateFormat.parse(jsonJ.getString("projectTime")));
					subject.setConcludingTime(bartDateFormat.parse(jsonJ.getString("concludingTime")));
				} catch (ParseException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				subject.setParticipants(jsonJ.getString("participants"));
				subject.setProjectDept(jsonJ.getString("projectDept"));
				subject.setSubjectType(jsonJ.getString("subjectType"));
				subject.setOutboundFunds(jsonJ.getDouble("outboundFunds"));
				subject.setSelfFunding(jsonJ.getDouble("selfFunding"));
				subject.setApproval(jsonJ.getString("approval"));
				try {
					subject.setLast_update(bartDateFormat.parse(jsonJ.getString("last_update")));
				} catch (ParseException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				subjectDAO.update(subject);
		      }
			
		}
		else if("Teaching".equals(entity)){
			Teaching teaching=new Teaching();
			teachingDAO = new TeachingDAO();
			ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
			teachingDAO = (TeachingDAO) ctx.getBean("teachingDAO");
			  for(int i=0;i<jsonArray.size(); i++){
				JSONObject jsonJ = jsonArray.getJSONObject(i);
				teaching.setName(name);
				teaching.setUsername(user);
				teaching.setDepartment(dept);
				teaching.setTeaching_id(new Integer(jsonJ.getString("teaching_id")));
				teaching.setTeaching_name(jsonJ.getString("teaching_name"));
				//teaching.setUsername(jsonJ.getString("username"));
				//teaching.setDepartment(jsonJ.getString("department"));
				teaching.setFirst_author(jsonJ.getString("first_author"));
				teaching.setSecond_author(jsonJ.getString("second_author"));
				teaching.setPress(jsonJ.getString("press"));
				teaching.setIsbn(jsonJ.getString("isbn"));
				try {
					teaching.setPublish_time(bartDateFormat.parse(jsonJ.getString("publish_time")));
					} catch (ParseException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				teaching.setCip(jsonJ.getString("cip"));
				teaching.setNature(jsonJ.getString("nature"));
				teaching.setApproval(jsonJ.getString("approval"));
				teaching.setType(jsonJ.getString("type"));
				teaching.setWords(jsonJ.getDouble("words"));
				teaching.setApproval(jsonJ.getString("approval"));
				try {
					teaching.setLast_update(bartDateFormat.parse(jsonJ.getString("last_update")));
				} catch (ParseException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				teachingDAO.update(teaching);
		      }
			
		}
		
		map.put("success",true);
		map.put("msg","数据保存成功");	
		data.put("data", map);
		response.setContentType("text/json;charset=UTF-8"); 
		PrintWriter out = response.getWriter();
		JSONObject result = JSONObject.fromObject(data);
		out.print(result.toString());
		
		
		}
	

}
