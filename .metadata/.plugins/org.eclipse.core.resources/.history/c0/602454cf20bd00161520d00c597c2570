package com.keyan.servlet;


import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.keyan.hibernate.util.Constants;

import net.sf.json.JSONObject;


public class MenuList extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public MenuList() {
		super();
	}

	
	public void service(HttpServletRequest request ,
			HttpServletResponse response)
			throws IOException , ServletException
		{   String json=null;
		    String groupid=(String)request.getSession().getAttribute(Constants.GROUPID_KEY);
		    if(groupid.equals("1")){
			json="{\"items\":[{" +
					"\"id\":\"1\"," +
					"\"text\":\"科研公告\"," +
					"\"iconCls\":\"menu_admin\"," +
					"\"parent_id\":null," +
					"\"className\":null," +
					"\"leaf\":false," +
				    "\"items\":[{" +
					   
				    	"\"id\":\"3\"," +
				    	"\"text\":\"发布公告\"," +
				    	"\"iconCls\":\"film_edit\"," +
				    	"\"parent_id\":\"1\"," +
				    	"\"className\":\"noticeeditgrid\"," +
				    	"\"leaf\":true}]}," +
					"{\"id\":\"4\"," +
					"\"text\":\"个人科研成果管理\"," +
					"\"iconCls\":\"menu_groups\"," +
					"\"parent_id\":null," +
					"\"className\":null," +
					"\"leaf\":false," +
				     "\"items\":[{" +
				         "\"id\":\"5\"," +
			            "\"text\":\"我的论文\"," +
		     	    	"\"iconCls\":\"menu_reports\"," +
			        	"\"parent_id\":\"4\"," +
		    	    	"\"className\":\"papergrid\"," +
		    	    	"\"leaf\":true}," +
		     	    	"{\"id\":\"6\"," +
		    	    	"\"text\":\"我的课题\"," +
		    	    	"\"iconCls\":\"svg\"," +
		    	    	"\"parent_id\":\"4\"," +
		    	    	"\"className\":\"subjectgrid\"," +
		    	    	"\"leaf\":true}," +
	    		    	"{\"id\":\"7\"," +
		    	    	"\"text\":\"我的专利\"," +
	       		    	"\"iconCls\":\"chart_pie\"," +
	    		    	"\"parent_id\":\"4\"," +
		    	    	"\"className\":\"patentgrid\"," +
		    	    	"\"leaf\":true}," +
		    	    	"{\"id\":\"8\"," +
		    	    	"\"text\":\"我的教材(专著)\"," +
		    	    	"\"iconCls\":\"chart_column\"," +
		    	    	"\"parent_id\":\"4\"," +
		    	    	"\"className\":\"teachinggrid\"," +
		    	    	"\"leaf\":true}]}," +
	        	  "{\"id\":\"9\"," +
			    "\"text\":\"学院科研成果浏览\"," +
				"\"iconCls\":\"menu_admin\"," +
				"\"parent_id\":null," +
				"\"className\":null," +
				"\"leaf\":false," +
				"\"items\":[{" +
			    	    "\"id\":\"10\"," +
				    	"\"text\":\"未审核论文\"," +
				    	"\"iconCls\":\"menu_actor\"," +
				    	"\"parent_id\":\"9\"," +
				    	"\"className\":\"allpapercheckgrid\"," +
				    	"\"leaf\":true}," +
				    	"{\"id\":\"11\"," +
					   	"\"text\":\"已审核论文\"," +
					   	"\"iconCls\":\"menu_category\"," +
		    		   	"\"parent_id\":\"9\"," +
		    		   	"\"className\":\"allpaperuncheckgrid\"," +
					   	"\"leaf\":true}," +
				    	 "{\"id\":\"12\"," +
					   	"\"text\":\"未审核课题\"," +
					   	"\"iconCls\":\"svg\"," +
					   	"\"parent_id\":\"9\"," +
					   	"\"className\":\"allsubjectcheckgrid\"," +
					   	"\"leaf\":true}," +
					   	"{\"id\":\"13\"," +
					   	"\"text\":\"已审核课题\"," +
					   	"\"iconCls\":\"menu_language\"," +
					   	"\"parent_id\":\"9\"," +
					   	"\"className\":\"allsubjectuncheckgrid\"," +
					   	"\"leaf\":true}," +
				    	"{\"id\":\"14\"," +
				    	"\"text\":\"未审核专利\"," +
				    	"\"iconCls\":\"menu_city\"," +
				    	"\"parent_id\":\"9\"," +
				    	"\"className\":\"allpatentcheckgrid\"," +
				    	"\"leaf\":true}," +
				    	"{\"id\":\"15\"," +
					   	"\"text\":\"已审核专利\"," +
					   	"\"iconCls\":\"menu_country\"," +
					   	"\"parent_id\":\"9\"," +
					   	"\"className\":\"allpatentuncheckgrid\"," +
					   	"\"leaf\":true}," +
					   	"{\"id\":\"16\"," +
					   	"\"text\":\"未审核教材\"," +
			    	   	"\"iconCls\":\"menu_cms\"," +
					   	"\"parent_id\":\"9\"," +
					   	"\"className\":\"allteachingcheckgrid\"," +
					   	"\"leaf\":true}," +
				    	"{\"id\":\"17\"," +
				    	"\"text\":\"已审核教材\"," +
				    	"\"iconCls\":\"menu_films\"," +
				    	"\"parent_id\":\"9\"," +
				    	"\"className\":\"allteachinguncheckgrid\"," +
				    	"\"leaf\":true}]}," +
		    	   "{\"id\":\"21\"," +
					"\"text\":\"用户信息管理\"," +
					"\"iconCls\":\"menu_city\"," +
					"\"parent_id\":null," +
					"\"className\":null," +
					"\"leaf\":false," +
	            	"\"items\":[{" +
						       "\"id\":\"22\"," +
						    	"\"text\":\"修改个人密码\"," +
						    	"\"iconCls\":\"icon-msg\"," +
						    	"\"parent_id\":\"21\"," +
						    	"\"className\":\"users\"," +
						    	"\"leaf\":true}," +
						    	"{\"id\":\"23\"," +
						    	"\"text\":\"添加教师\"," +
						    	"\"iconCls\":\"menu_profile\"," +
						    	"\"parent_id\":\"21\"," +
						    	"\"className\":\'users\'," +
						    	"\"leaf\":true}," +
						    	"{\"id\":\"30\"," +
						    	"\"text\":\"修改教师工作量标准\"," +
						    	"\"iconCls\":\"menu_profile\"," +
						    	"\"parent_id\":\"21\"," +
						    	"\"className\":\'modifyworkloadlevel\'," +
						    	"\"leaf\":true}," +
						    	"{\"id\":\"24\"," +
						    	"\"text\":\"重置教师密码\"," +
						    	"\"iconCls\":\"key\"," +
						    	"\"parent_id\":\"21\"," +
						    	"\"className\":\"resetpassword\"," +
						    	"\"leaf\":true}]}," +
			    	 "{\"id\":\"25\"," +
						"\"text\":\"材料上传\"," +
						"\"iconCls\":\"grouping\"," +
						"\"parent_id\":null," +
						"\"className\":null," +
						"\"leaf\":false," +
						"\"items\":[{" +
         	                "\"id\":\"26\"," +
			            	"\"text\":\"上传复印件\"," +
			            	"\"iconCls\":\"menu_groups\"," +
			            	"\"parent_id\":\"25\"," +
			            	"\"className\":\"upload\"," +
			            	"\"leaf\":true}," +
					       "{\"id\":\"27\"," +
					    	"\"text\":\"我的上传复印件\"," +
					    	"\"iconCls\":\"menu_groups\"," +
					    	"\"parent_id\":\"25\"," +
					    	"\"className\":\"photos\"," +
					    	"\"leaf\":true}]}," +
				    	"{\"id\":\"28\"," +
						"\"text\":\"工作量统计\"," +
						"\"iconCls\":\"chart_bar\"," +
						"\"parent_id\":null," +
						"\"className\":null," +
						"\"leaf\":false," +
		            	"\"items\":[{" +
		                      	 "\"id\":\"29\"," +
		                        	"\"text\":\"全院工作量统计\"," +
		                        	"\"iconCls\":\"menu_groups\"," +
		                        	"\"parent_id\":\"28\"," +
		                        	"\"className\":\"statisticsallcontainer\"," +
		                        	"\"leaf\":true}," +
							       "{\"id\":\"30\"," +
							    	"\"text\":\"我已完成的工作量\"," +
							    	"\"iconCls\":\"menu_cms\"," +
							    	"\"parent_id\":\"28\"," +
							    	"\"className\":\"workload\"," +
							    	"\"leaf\":true}]" +
						    "}]}" +
				    "}";
		    }
		    else if(groupid.equals("2")){
		    	json="{\"items\":[{" +
						"\"id\":\"1\"," +
						"\"text\":\"科研公告\"," +
						"\"iconCls\":\"menu_admin\"," +
						"\"parent_id\":null," +
						"\"className\":null," +
						"\"leaf\":false," +
					    "\"items\":[{" +
						    "\"id\":\"2\"," +
					    	"\"text\":\"显示公告\"," +
					    	"\"iconCls\":\"menu_groups\"," +
					    	"\"parent_id\":\"1\"," +
					    	"\"className\":\"noticesgrid\"," +
					    	"\"leaf\":true}]}," +
					   	"{\"id\":\"3\"," +
						"\"text\":\"个人科研成果管理\"," +
						"\"iconCls\":\"menu_staticdata\"," +
						"\"parent_id\":null," +
						"\"className\":null," +
						"\"leaf\":false," +
						"\"items\":[{" +
							    "\"id\":\"4\"," +
						    	"\"text\":\"我的论文\"," +
						    	"\"iconCls\":\"menu_reports\"," +
						    	"\"parent_id\":\"3\"," +
						    	"\"className\":\"papergrid\"," +
						    	"\"leaf\":true}," +
						    	"{\"id\":\"5\"," +
						    	"\"text\":\"我的课题\"," +
						    	"\"iconCls\":\"svg\"," +
						    	"\"parent_id\":\"3\"," +
						    	"\"className\":\"subjectgrid\"," +
						    	"\"leaf\":true}," +
						    	"{\"id\":\"6\"," +
						    	"\"text\":\"我的专利\"," +
						    	"\"iconCls\":\"chart_pie\"," +
						    	"\"parent_id\":\"3\"," +
						    	"\"className\":\"patentgrid\"," +
						    	"\"leaf\":true}," +
						    	"{\"id\":\"7\"," +
						    	"\"text\":\"我的教材(专著)\"," +
						    	"\"iconCls\":\"chart_column\"," +
						    	"\"parent_id\":\"3\"," +
						    	"\"className\":\"teachinggrid\"," +
						    	"\"leaf\":true}]}," +
						    "{\"id\":\"8\"," +
							"\"text\":\"系部科研成果审核\"," +
							"\"iconCls\":\"menu_admin\"," +
							"\"parent_id\":null," +
							"\"className\":null," +
							"\"leaf\":false," +
							"\"items\":[{" +
								    "\"id\":\"9\"," +
							    	"\"text\":\"论文审核\"," +
							    	"\"iconCls\":\"menu_actor\"," +
							    	"\"parent_id\":\"8\"," +
							    	"\"className\":\"papercheckgrid\"," +
							    	"\"leaf\":true}," +
							    	"{\"id\":\"50\"," +
								   	"\"text\":\"撤销论文审核\"," +
								   	"\"iconCls\":\"menu_category\"," +
								   	"\"parent_id\":\"8\"," +
								   	"\"className\":\"paperuncheckgrid\"," +
								   	"\"leaf\":true}," +
							    	 "{\"id\":\"10\"," +
								   	"\"text\":\"课题审核\"," +
								   	"\"iconCls\":\"menu_language\"," +
								   	"\"parent_id\":\"8\"," +
								   	"\"className\":\"subjectcheckgrid\"," +
								   	"\"leaf\":true}," +
								   	"{\"id\":\"51\"," +
								   	"\"text\":\"撤销课题审核\"," +
								   	"\"iconCls\":\"menu_city\"," +
								   	"\"parent_id\":\"8\"," +
								   	"\"className\":\"subjectuncheckgrid\"," +
								   	"\"leaf\":true}," +
							    	"{\"id\":\"11\"," +
							    	"\"text\":\"专利审核\"," +
							    	"\"iconCls\":\"menu_country\"," +
							    	"\"parent_id\":\"8\"," +
							    	"\"className\":\"patentcheckgrid\"," +
							    	"\"leaf\":true}," +
							    	"{\"id\":\"52\"," +
								   	"\"text\":\"撤销专利审核\"," +
								   	"\"iconCls\":\"menu_cms\"," +
								   	"\"parent_id\":\"8\"," +
								   	"\"className\":\"patentuncheckgrid\"," +
								   	"\"leaf\":true}," +
								   	"{\"id\":\"53\"," +
								   	"\"text\":\"教材审核\"," +
								   	"\"iconCls\":\"menu_films\"," +
								   	"\"parent_id\":\"8\"," +
								   	"\"className\":\"teachingcheckgrid\"," +
								   	"\"leaf\":true}," +
							    	"{\"id\":\"12\"," +
							    	"\"text\":\"撤销教材审核\"," +
							    	"\"iconCls\":\"film_add\"," +
							    	"\"parent_id\":\"8\"," +
							    	"\"className\":\"teachinguncheckgrid\"," +
							    	"\"leaf\":true}]}," +
					    "{\"id\":\"13\"," +
						"\"text\":\"个人信息管理\"," +
						"\"iconCls\":\"menu_reports\"," +
						"\"parent_id\":null," +
						"\"className\":null," +
						"\"leaf\":false," +
		            	"\"items\":[{" +
							       "\"id\":\"14\"," +
							    	"\"text\":\"修改个人密码\"," +
							    	"\"iconCls\":\"menu_salesfilmc\"," +
							    	"\"parent_id\":\"13\"," +
							    	"\"className\":\"users\"," +
							    	"\"leaf\":true}]}," +
						    "{\"id\":\"15\"," +
							"\"text\":\"上传图片管理\"," +
							"\"iconCls\":\"image\"," +
							"\"parent_id\":null," +
							"\"className\":null," +
							"\"leaf\":false," +
			            	"\"items\":[{" +
			            	           "\"id\":\"16\"," +
						            	"\"text\":\"上传复印件\"," +
						            	"\"iconCls\":\"svg\"," +
						            	"\"parent_id\":\"15\"," +
						            	"\"className\":\"upload\"," +
						            	"\"leaf\":true}," +
						            	"{\"id\":\"21\"," +
						            	"\"text\":\"部门教师上传的复印件\"," +
						            	"\"iconCls\":\"chart_pie\"," +
						            	"\"parent_id\":\"15\"," +
						            	"\"className\":\"depphotocontainer\"," +
						            	"\"leaf\":true}," +
								       "{\"id\":\"17\"," +
								    	"\"text\":\"我的上传复印件\"," +
								    	"\"iconCls\":\"chart_bar\"," +
								    	"\"parent_id\":\"15\"," +
								    	"\"className\":\"photos\"," +
								    	"\"leaf\":true}]}," +
					    	"{\"id\":\"18\"," +
							"\"text\":\"工作量统计\"," +
							"\"iconCls\":\"chart_column\"," +
							"\"parent_id\":null," +
							"\"className\":null," +
							"\"leaf\":false," +
			            	             "\"items\":[{" +
			                             "\"id\":\"19\"," +
					                    "\"text\":\"部门成果统计及打印\"," +
					    	            "\"iconCls\":\"icon-msg\"," +
					    	            "\"parent_id\":\"18\"," +
					    	            "\"className\":\"statisticscontainer\"," +
					    	            "\"leaf\":true}," +
					    	            "{\"id\":\"21\"," +
					                    "\"text\":\"导出、打印部门人员工作量\"," +
					    	            "\"iconCls\":\"print\"," +
					    	            "\"parent_id\":\"18\"," +
					    	            "\"className\":\"exportdepworkload\"," +
					    	            "\"leaf\":true}," +
					    	            "{\"id\":\"20\"," +
					    	            "\"text\":\"我已完成的工作量\"," +
					    	            "\"iconCls\":\"menu_profile\"," +
					    	            "\"parent_id\":\"18\"," +
					    	            "\"className\":\'workload\'," +
					    	            "\"leaf\":true}]," +
						    "}]}" +
					    "}";
		    }
		    else if(groupid.equals("3")){
		    	json="{\"items\":[{" +
						"\"id\":\"1\"," +
						"\"text\":\"科研公告\"," +
						"\"iconCls\":\"menu_category\"," +
						"\"parent_id\":null," +
						"\"className\":null," +
						"\"leaf\":false," +
					    "\"items\":[{" +
						    "\"id\":\"2\"," +
					    	"\"text\":\"显示公告\"," +
					    	"\"iconCls\":\"menu_city\"," +
					    	"\"parent_id\":\"1\"," +
					    	"\"className\":\"noticesgrid\"," +
					    	"\"leaf\":true}]}," +
					   	"{\"id\":\"3\"," +
						"\"text\":\"个人科研成果管理\"," +
						"\"iconCls\":\"clear_filter\"," +
						"\"parent_id\":null," +
						"\"className\":null," +
						"\"leaf\":false," +
						"\"items\":[{" +
							    "\"id\":\"4\"," +
						    	"\"text\":\"我的论文\"," +
						    	"\"iconCls\":\"menu_groups\"," +
						    	"\"parent_id\":\"3\"," +
						    	"\"className\":\"papergrid\"," +
						    	"\"leaf\":true}," +
						    	"{\"id\":\"5\"," +
						    	"\"text\":\"我的课题\"," +
						    	"\"iconCls\":\"menu_cms\"," +
						    	"\"parent_id\":\"3\"," +
						    	"\"className\":\"subjectgrid\"," +
						    	"\"leaf\":true}," +
						    	"{\"id\":\"6\"," +
						    	"\"text\":\"我的专利\"," +
						    	"\"iconCls\":\"find\"," +
						    	"\"parent_id\":\"3\"," +
						    	"\"className\":\"patentgrid\"," +
						    	"\"leaf\":true}," +
						    	"{\"id\":\"7\"," +
						    	"\"text\":\"我的教材\"," +
						    	"\"iconCls\":\"film_edit\"," +
						    	"\"parent_id\":\"3\"," +
						    	"\"className\":\"teachinggrid\"," +
						    	"\"leaf\":true}," +
						    	"{\"id\":\"8\"," +
						    	"\"text\":\"已被审核的论文\"," +
						    	"\"iconCls\":\"menu_reports\"," +
						    	"\"parent_id\":\"3\"," +
						    	"\"className\":\"teacherpaperuncheckgrid\"," +
						    	"\"leaf\":true}," +
						    	"{\"id\":\"9\"," +
						    	"\"text\":\"已被审核的专利\"," +
						    	"\"iconCls\":\"menu_salesfilmc\"," +
						    	"\"parent_id\":\"3\"," +
						    	"\"className\":\"teacherpatentuncheckgrid\"," +
						    	"\"leaf\":true}," +
						    	"{\"id\":\"10\"," +
						    	"\"text\":\"已被审核的课题\"," +
						    	"\"iconCls\":\"image\"," +
						    	"\"parent_id\":\"3\"," +
						    	"\"className\":\"teachersubjectuncheckgrid\"," +
						    	"\"leaf\":true}," +
						    	"{\"id\":\"11\"," +
						    	"\"text\":\"已被审核的教材\"," +
						    	"\"iconCls\":\"svg\"," +
						    	"\"parent_id\":\"3\"," +
						    	"\"className\":\"teacherteachinguncheckgrid\"," +
						    	"\"leaf\":true}]}," +
					    "{\"id\":\"12\"," +
						"\"text\":\"个人信息管理\"," +
						"\"iconCls\":\"menu_admin\"," +
						"\"parent_id\":null," +
						"\"className\":null," +
						"\"leaf\":false," +
		            	"\"items\":[{" +
							       "\"id\":\"13\"," +
							    	"\"text\":\"修改个人密码\"," +
							    	"\"iconCls\":\"key\"," +
							    	"\"parent_id\":\"12\"," +
							    	"\"className\":\"users\"," +
							    	"\"leaf\":true}]}," +
						    "{\"id\":\"14\"," +
							"\"text\":\"上传图片管理\"," +
							"\"iconCls\":\"image\"," +
							"\"parent_id\":null," +
							"\"className\":null," +
							"\"leaf\":false," +
							"\"items\":[{" +
	            	           "\"id\":\"15\"," +
				            	"\"text\":\"上传复印件\"," +
				            	"\"iconCls\":\"svg\"," +
				            	"\"parent_id\":\"14\"," +
				            	"\"className\":\"upload\"," +
				            	"\"leaf\":true}," +
						       "{\"id\":\"16\"," +
						    	"\"text\":\"我的上传复印件\"," +
						    	"\"iconCls\":\"chart_bar\"," +
						    	"\"parent_id\":\"14\"," +
						    	"\"className\":\"photos\"," +
						    	"\"leaf\":true}]}," +
					    	"{\"id\":\"17\"," +
							"\"text\":\"工作量统计\"," +
							"\"iconCls\":\"chart_column\"," +
							"\"parent_id\":null," +
							"\"className\":null," +
							"\"leaf\":false," +
			            	"\"items\":[{" +
								       "\"id\":\"18\"," +
								    	"\"text\":\"我已完成的工作量\"," +
								    	"\"iconCls\":\"chart_pie\"," +
								    	"\"parent_id\":\"17\"," +
								    	"\"className\":\"workload\"," +
								    	"\"leaf\":true}]" +
							    "}]}" +
					    "}";
		    }
			response.setContentType("application/json;charset=UTF-8"); 
			
			PrintWriter out = response.getWriter();
			// ��Map��װ��JSONObject�����
			//out.print(new JSONObject(result));
			JSONObject result = JSONObject.fromObject(json);
			out.print(result.toString());
			//out.print(result);
			
		}
	/**
	 * Destruction of the servlet. <br>
	 */
	public void destroy() {
		super.destroy(); // Just puts "destroy" string in log
		// Put your code here
	}

	/**
	 * Initialization of the servlet. <br>
	 *
	 * @throws ServletException if an error occurs
	 */
	public void init() throws ServletException {
		// Put your code here
	}

}
