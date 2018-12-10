package com.keyan.hibernate.beans;

import java.util.List;

public interface IPhoto {
	public void addPhoto(Photo photo, String dep);
    public List<Photo> getPhotos(String dep);
   // public List<Photo> getFriendPhotos(String friendEmail);
    public void remove(int photoId);
}


