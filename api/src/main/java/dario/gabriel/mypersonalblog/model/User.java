package dario.gabriel.mypersonalblog.model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String username;
	private String fullName;
	private String email;
	private LocalDateTime registerDate;
	private int postsRead;
	private int commentsMade;

	public User(Long id, String username, String fullName, String email, LocalDateTime registerDate, int postsRead,
			int commentsMade) {
		super();
		this.id = id;
		this.username = username;
		this.fullName = fullName;
		this.email = email;
		this.registerDate = registerDate;
		this.postsRead = postsRead;
		this.commentsMade = commentsMade;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public LocalDateTime getRegisterDate() {
		return registerDate;
	}

	public void setRegisterDate(LocalDateTime registerDate) {
		this.registerDate = registerDate;
	}

	public int getPostsRead() {
		return postsRead;
	}

	public void setPostsRead(int postsRead) {
		this.postsRead = postsRead;
	}

	public int getCommentsMade() {
		return commentsMade;
	}

	public void setCommentsMade(int commentsMade) {
		this.commentsMade = commentsMade;
	}
}
