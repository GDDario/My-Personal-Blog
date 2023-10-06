package dario.gabriel.mypersonalblog.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import dario.gabriel.mypersonalblog.model.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    @Query(value = "SELECT * FROM post WHERE url_param = :urlParam", nativeQuery = true)
    public Post findByUrlParam(@Param("urlParam") String urlParam);
}
