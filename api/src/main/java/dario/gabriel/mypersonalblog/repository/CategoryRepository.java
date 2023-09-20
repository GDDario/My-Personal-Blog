package dario.gabriel.mypersonalblog.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dario.gabriel.mypersonalblog.model.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
