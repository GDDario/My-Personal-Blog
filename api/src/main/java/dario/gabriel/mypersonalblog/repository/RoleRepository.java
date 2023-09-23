package dario.gabriel.mypersonalblog.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import dario.gabriel.mypersonalblog.model.Role;

public interface RoleRepository extends JpaRepository<Role, Long>{
	public Role findByName(String name);
}
