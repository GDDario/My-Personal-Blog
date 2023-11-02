package dario.gabriel.mypersonalblog.repository;

import dario.gabriel.mypersonalblog.model.UserReadPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;

@Repository
public interface UserReadPostRepository extends JpaRepository<UserReadPost, Long> {
    @Query(value = "INSERT INTO user_read_post (user_id, post_id, date) values (:userId, :postId, :date)", nativeQuery = true)
    void save(@Param(value = "userId") long userId, @Param(value = "postId") long postId, @Param(value = "date") LocalDateTime date);
}
