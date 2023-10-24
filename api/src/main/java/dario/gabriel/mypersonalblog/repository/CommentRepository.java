package dario.gabriel.mypersonalblog.repository;

import dario.gabriel.mypersonalblog.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {

}
