package com.keyan.hibernate.beans;

public class Photo
{   
    private int id;
    private String username;
    private String dep;
    private String photo_filename;
    private String file_path;
    public Photo() {
	}
    public Photo(String dep) {
    	this.dep=dep;
   	}
	public int getId()
	{
		return id; 
	}
	public void setId(int id)
	{
		this.id = id;
	}

	/*public int getUser_id()
	{
		return user_id;
	}
	public void setUser_id(int user_id)
	{
		this.user_id = user_id;
	}*/
	public String getDep()
	{
		return dep;
	}
	public void setDep(String dep)
	{
		this.dep = dep;
	}
	
	
	public String getPhoto_filename() {
		return photo_filename;
	}
	public void setPhoto_filename(String photo_filename) {
		this.photo_filename = photo_filename;
	}
	
	public String getFile_path() {
		return file_path;
	}
	public void setFile_path(String file_path) {
		this.file_path = file_path;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
    
}
