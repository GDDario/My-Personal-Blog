package dario.gabriel.mypersonalblog.repository;

import java.util.List;
import java.util.Optional;

import lombok.NonNull;
import org.springframework.data.jpa.repository.JpaRepository;

import dario.gabriel.mypersonalblog.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Long>{
	@Query(value = "SELECT * FROM user ORDER BY id LIMIT :page, 50", nativeQuery = true)
	public List<User> findAll(@Param("page") int page);

	public Optional<User> findByUsername(String userName);

	@Query(value = "SELECT * FROM user WHERE email = :email", nativeQuery = true)
	public User findByEmail(@Param("email") String email);

	public User findByEmailAndPassword(String email, String password);

}
