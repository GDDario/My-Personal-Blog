package dario.gabriel.mypersonalblog.repository;

import dario.gabriel.mypersonalblog.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    @Query(value = "SELECT * FROM comment WHERE id = :id or comment_id = :id ORDER BY id DESC LIMIT :page, 5", nativeQuery = true)
    List<Comment> findByIdAndPage(@Param("id") long id, @Param("page") int page);

    @Query(value = "SELECT * FROM comment WHERE post_id = :postId ORDER BY id DESC LIMIT :page, 10", nativeQuery = true)
    List<Comment> findByPostId(@Param("postId") long postId, @Param("page") int page);

    @Query(value = "UPDATE comment SET likes = likes + 1 WHERE id = :commentId", nativeQuery = true)
    void addLike(@Param("commentId") long commentId);

    @Query(value = "UPDATE comment SET likes = likes - 1 WHERE id = :commentId", nativeQuery = true)
    void removeLike(@Param("commentId") long commentId);
}
