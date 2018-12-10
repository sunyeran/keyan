package com.keyan.hibernate.services;

import java.util.List;

import com.keyan.hibernate.beans.Photo;

public interface IPhotoService {
	 public void addPhoto(Photo photo, String dep);
	    public List<Photo> getPhotos(String dep);
	   // public List<Photo> getFriendPhotos(String friendEmail);
	    public void remove(String fullFilename, int photoId);
	    

}
