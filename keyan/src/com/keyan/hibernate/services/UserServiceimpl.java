package com.keyan.hibernate.services;
import com.keyan.hibernate.dao.UserDAO;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
@Entity
public class UserServiceimpl implements UserService {
	@ManyToOne
	private UserDAO ud = new UserDAO();
	//private PhotoDao  pd = null;
	//依赖注入2个DAO组件所需的setter方法
	public UserDAO getUserDAO()
	{
		return ud;
	}
	public void setUserDAO(UserDAO ud)
	{
		this.ud = ud;
	}
	/*public void setPhotoDao(PhotoDao pd)
	{
		this.pd = pd;
	}*/
	
			/**
			 * 验证用户登录是否成功。
			 * @param name 登录的用户名
			 * @param pass 登录的密码
			 * @return 用户登录的结果，成功返回true，否则返回false
			 */
			public boolean userLogin(String name , String pass)
			{
				return ud.isValid(name, pass);
				
			}	


	}


