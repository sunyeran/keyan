package com.keyan.hibernate.services;

import java.io.File;
import java.util.List;

import com.keyan.hibernate.beans.Photo;
import com.keyan.hibernate.beans.PhotoDAO;

public class PhotoServiceImpl implements IPhotoService
{
	private PhotoDAO photoDAO;

	public PhotoServiceImpl(PhotoDAO photoDAO)
	{
		this.photoDAO = photoDAO;
	}


	public void addPhoto(Photo photo, String dep)
	{
		photoDAO.addPhoto(photo ,dep);
	}

	
	public void remove(String fullFilename, int photoId)
	{
		// 删除文件
		File file = new File(fullFilename);
		if (file.exists())
		{
			file.delete();
		}
		// 删除记录
		photoDAO.remove(photoId);
	}
/*
	@Override
	public List<Photo> getFriendPhotos(String friendEmail)
	{
		return photoDAO.getFriendPhotos(friendEmail);
	} */

	
	public List<Photo> getPhotos(String dep)
	{

		return photoDAO.getPhotos(dep);
	}

}
