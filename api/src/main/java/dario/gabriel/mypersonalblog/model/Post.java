package dario.gabriel.mypersonalblog.model;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

@Entity
public class Post {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String title;
	private String description;
	private String content;
	@CreationTimestamp
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private LocalDateTime date = LocalDateTime.now();
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private LocalDateTime editedDate;
	private String imageId;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "category_id")
	private Category category;
	private String urlParam;

	public Post() {
	}

	public Post(Long id, String title, String description, String content, LocalDateTime date, LocalDateTime editedDate,
			String imageId, Category category, String urlParam) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.content = content;
		this.date = date;
		this.editedDate = editedDate;
		this.imageId = imageId;
		this.category = category;
		this.urlParam = urlParam;
	}

	public long getId() {
		return id;
	}

	public void setId(Long id) {
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

	public String getUrlParam() {
		return urlParam;
	}

	public void setUrlParam(String urlParam) {
		this.urlParam = urlParam;
	}
}
