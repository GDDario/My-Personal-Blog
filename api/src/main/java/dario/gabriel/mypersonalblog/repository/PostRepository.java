package dario.gabriel.mypersonalblog.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dario.gabriel.mypersonalblog.model.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

}
