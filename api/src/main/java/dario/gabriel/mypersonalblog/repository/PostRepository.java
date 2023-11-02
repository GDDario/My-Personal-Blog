package dario.gabriel.mypersonalblog.repository;

import dario.gabriel.mypersonalblog.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    @Query(value = "SELECT * FROM post ORDER BY id DESC LIMIT :page, 10", nativeQuery = true)
    List<Post> findByPage(@Param("page") int page);

    @Query(value = "SELECT * FROM post WHERE category_id = :categoryId ORDER BY id DESC LIMIT :page, 10", nativeQuery = true)
    List<Post> findByCategoryId(@Param("categoryId") long categoryId, @Param("page") int page);

    @Query(value = "SELECT * FROM post WHERE url_param = :urlParam", nativeQuery = true)
    Post findByUrlParam(@Param("urlParam") String urlParam);

    @Query(value = "UPDATE post SET views = views + 1 WHERE id = :postId", nativeQuery = true)
    void incrementView(@Param(value = "postId") long postId);
}
