package com.keyan.hibernate.dao;

import java.util.List;

import com.keyan.hibernate.beans.User;

public interface IUserDAO {

	public boolean isValid(final String username, final String password);

	public boolean isExist(String username);

	public void insertUser(User user);

	public User getUser(String userid);

	public List getUsers();

	public void deleteUser(String userid);
}
