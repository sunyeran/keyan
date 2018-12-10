package com.keyan.hibernate.beans;

public class Photo
{   
    private int id;
    private int user_id;
    private String dep;
    private String photo_filename;
    private String content_type;
    public Photo() {
	}
	public int getId()
	{
		return id; 
	}
	public void setId(int id)
	{
		this.id = id;
	}

	public int getUser_id()
	{
		return user_id;
	}
	public void setUser_id(int user_id)
	{
		this.user_id = user_id;
	}
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
	public String getContent_type() {
		return content_type;
	}
	public void setContent_type(String content_type) {
		this.content_type = content_type;
	}
    
}
