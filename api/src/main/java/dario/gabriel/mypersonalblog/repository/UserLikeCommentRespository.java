package dario.gabriel.mypersonalblog.repository;

import dario.gabriel.mypersonalblog.model.UserLikeComment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserLikeCommentRespository extends JpaRepository<dario.gabriel.mypersonalblog.model.UserLikeComment, Long> {
    @Query(value = "SELECT * FROM user_like_comment WHERE user_id = :userId AND comment_id = :commentId LIMIT 1", nativeQuery = true)
    UserLikeComment findByUserIdAndCommentId(@Param(value = "userId") long userId, @Param(value = "commentId") long commentId);

    @Query(value = "DELETE FROM user_like_comment WHERE user_id = :userId AND comment_id = :commentId", nativeQuery = true)
    void deleteByCommentIdAndUserId(@Param(value = "commentId") long commentId, @Param(value = "userId") long userId);
}
