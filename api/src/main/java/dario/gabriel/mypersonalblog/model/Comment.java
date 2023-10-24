package dario.gabriel.mypersonalblog.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int likes;
    private String content;
    private LocalDateTime date;
    private LocalDateTime editedDate;
    @Column(name = "comment_id")
    private int relatedCommentId;
    @ManyToMany()
    private List<Comment> answers;
//
//    public Comment() {
//
//    }
//
//    public Comment(Long id, int likes, String content, LocalDateTime date, LocalDateTime editedDate, int relatedCommentId, Comment[] answers) {
//        this.id = id;
//        this.likes = likes;
//        this.content = content;
//        this.date = date;
//        this.editedDate = editedDate;
//        this.relatedCommentId = relatedCommentId;
//        this.answers = answers;
//    }
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public int getLikes() {
//        return likes;
//    }
//
//    public void setLikes(int likes) {
//        this.likes = likes;
//    }
//
//    public String getContent() {
//        return content;
//    }
//
//    public void setContent(String content) {
//        this.content = content;
//    }
//
//    public LocalDateTime getDate() {
//        return date;
//    }
//
//    public void setDate(LocalDateTime date) {
//        this.date = date;
//    }
//
//    public LocalDateTime getEditedDate() {
//        return editedDate;
//    }
//
//    public void setEditedDate(LocalDateTime editedDate) {
//        this.editedDate = editedDate;
//    }
//
//    public int getRelatedCommentId() {
//        return relatedCommentId;
//    }
//
//    public void setRelatedCommentId(int relatedCommentId) {
//        this.relatedCommentId = relatedCommentId;
//    }
//
//    public Comment[] getAnswers() {
//        return answers;
//    }
//
//    public void setAnswers(Comment[] answers) {
//        this.answers = answers;
//    }
}
