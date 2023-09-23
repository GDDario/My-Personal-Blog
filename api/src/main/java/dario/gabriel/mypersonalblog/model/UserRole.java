package dario.gabriel.mypersonalblog.model;

import jakarta.persistence.Table;

@Table(name="user_role")
public class UserRole {
	private Long userId;
	private Long roleId;

	public UserRole() {}
	
	public UserRole(Long userId, Long roleId) {
		super();
		this.userId = userId;
		this.roleId = roleId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public Long getRoleId() {
		return roleId;
	}

	public void setRoleId(Long roleId) {
		this.roleId = roleId;
	}

}
