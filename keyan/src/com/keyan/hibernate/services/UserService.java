package com.keyan.hibernate.services;

public interface UserService
{
	/**
	 * ��֤�û���¼�Ƿ�ɹ���
	 * @param name ��¼���û���
	 * @param pass ��¼������
	 * @return �û���¼�Ľ�����ɹ�����true�����򷵻�false
	 */
	boolean userLogin(String name , String pass);


}
