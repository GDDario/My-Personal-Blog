package dario.gabriel.mypersonalblog.repository;

import dario.gabriel.mypersonalblog.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    @Query(value = "SELECT * FROM user ORDER BY id LIMIT :page, 50", nativeQuery = true)
    List<User> findByPage(@Param("page") int page);

    Optional<User> findByUsername(String userName);

    @Query(value = "SELECT * FROM user WHERE email = :email", nativeQuery = true)
    User findByEmail(@Param("email") String email);

    User findByEmailAndPassword(String email, String password);

    @Query(value = "UPDATE user SET posts_read = posts_read + 1 WHERE id = :userId", nativeQuery = true)
    void incrementPostsRead(@Param(value = "userId") long userId);
}
