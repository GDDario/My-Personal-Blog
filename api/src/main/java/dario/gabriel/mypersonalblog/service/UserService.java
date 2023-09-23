package dario.gabriel.mypersonalblog.service;

import java.util.List;

import org.springframework.stereotype.Service;

import dario.gabriel.mypersonalblog.model.Role;
import dario.gabriel.mypersonalblog.model.User;
import dario.gabriel.mypersonalblog.repository.RoleRepository;
import dario.gabriel.mypersonalblog.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class UserService {
	private final UserRepository userRepository;
	private final RoleRepository roleRepository;
	
	public User saveUser(User user) {
		System.out.println("Saving new user to the database");
		return userRepository.save(user);
	}

	public Role saveRole(Role role) {
		System.out.println("Saving new role to the database");
		return roleRepository.save(role);
	}

	public void addRoleToUser(String username, String roleName) {
//		System.out.println("Adding role to user in database");
//		User user = userRepository.findByUsername(username);
//		Role role = roleRepository.findByName(roleName);
//		user.setRole(role);
	}
	
	public User getUser(String username) {
		System.out.println("Fetching user");
		return userRepository.findByUsername(username);
	}
	
	public List<User> getUsers() {
		System.out.println("Fetching all users");
		return userRepository.findAll();
	}
}
