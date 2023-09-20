package dario.gabriel.mypersonalblog.model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;	

@Entity
public class Post {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String title;
	private String description;
	private String content;
	private LocalDateTime date;
	private LocalDateTime editedDate;
	private String imageId;
	@ManyToOne
	private Category category;
	private String urlPath;	

	public Post() {
	}

	public Post(long id, String title, String description, String content, LocalDateTime date, LocalDateTime editedDate,
			String imageId, Category category, String urlPath) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.content = content;
		this.date = date;
		this.editedDate = editedDate;
		this.imageId = imageId;
		this.category = category;
		this.urlPath = urlPath;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public LocalDateTime getDate() {
		return date;
	}

	public void setDate(LocalDateTime date) {
		this.date = date;
	}

	public LocalDateTime getEditedDate() {
		return editedDate;
	}

	public void setEditedDate(LocalDateTime editedDate) {
		this.editedDate = editedDate;
	}

	public String getImageId() {
		return imageId;
	}

	public void setImageId(String imageId) {
		this.imageId = imageId;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public String getUrlPath() {
		return urlPath;
	}

	public void setUrlPath(String urlPath) {
		this.urlPath = urlPath;
	}
}
