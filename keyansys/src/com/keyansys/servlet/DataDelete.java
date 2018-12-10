package com.keyansys.servlet;


import java.io.IOException;
import java.text.SimpleDateFormat;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.keyansys.hibernate.beans.Paper;
import com.keyansys.hibernate.beans.PaperDAO;
import com.keyansys.hibernate.beans.Patent;
import com.keyansys.hibernate.beans.PatentDAO;
import com.keyansys.hibernate.beans.Subject;
import com.keyansys.hibernate.beans.SubjectDAO;
import com.keyansys.hibernate.beans.Teaching;
import com.keyansys.hibernate.beans.TeachingDAO;

public class DataDelete extends HttpServlet {
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
	public DataDelete() {
		super();
	}
	public void service(HttpServletRequest request ,
			HttpServletResponse response)
			throws IOException , ServletException
		{
				
		String jsonStr = request.getParameter("data");
        String entity=request.getParameter("entity");
		JSONArray jsonArray = JSONArray.fromObject(jsonStr);
		SimpleDateFormat bartDateFormat = new SimpleDateFormat("yyyy-MM-dd"); 
		System.out.println(jsonStr);
		if("Paper".equals(entity)){
		Paper paper=new Paper();
		paperDAO = new PaperDAO();
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
		paperDAO = (PaperDAO) ctx.getBean("paperDAO");
		  for(int i=0;i<jsonArray.size(); i++){

			JSONObject jsonJ = jsonArray.getJSONObject(i);
		
			String id=jsonJ.getString("paper_id");
			paperDAO.deleteById(id);
			
	      }
	
		}
		if("Patent".equals(entity)){
			Patent patent=new Patent();
			patentDAO = new PatentDAO();
			ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
			patentDAO = (PatentDAO) ctx.getBean("patentDAO");
			  for(int i=0;i<jsonArray.size(); i++){

				JSONObject jsonJ = jsonArray.getJSONObject(i);
			
				String id=jsonJ.getString("patent_id");
				patentDAO.deleteById(id);
				
		      }
		
			}
		if("Subject".equals(entity)){
			Subject subject=new Subject();
			subjectDAO = new SubjectDAO();
			ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
			subjectDAO = (SubjectDAO) ctx.getBean("subjectDAO");
			  for(int i=0;i<jsonArray.size(); i++){

				JSONObject jsonJ = jsonArray.getJSONObject(i);
			
				String id=jsonJ.getString("subject_id");
				subjectDAO.deleteById(id);
				
		      }
		
			}
		if("Teaching".equals(entity)){
			Teaching teaching=new Teaching();
			teachingDAO = new TeachingDAO();
			ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml"); 
			teachingDAO = (TeachingDAO) ctx.getBean("teachingDAO");
			  for(int i=0;i<jsonArray.size(); i++){

				JSONObject jsonJ = jsonArray.getJSONObject(i);
			
				String id=jsonJ.getString("teaching_id");
				teachingDAO.deleteById(id);
				
		      }
		
			}
	  }
}
