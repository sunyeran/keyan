package com.keyan.hibernate.services;
import com.keyan.hibernate.dao.UserDAO;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
@Entity
public class UserServiceimpl implements UserService {
	@ManyToOne
	private UserDAO ud = new UserDAO();
	//private PhotoDao  pd = null;
	//����ע��2��DAO��������setter����
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
			 * ��֤�û���¼�Ƿ�ɹ���
			 * @param name ��¼���û���
			 * @param pass ��¼������
			 * @return �û���¼�Ľ�����ɹ�����true�����򷵻�false
			 */
			public boolean userLogin(String name , String pass)
			{
				return ud.isValid(name, pass);
				
			}	


	}


