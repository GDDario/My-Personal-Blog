package dario.gabriel.mypersonalblog.util;

import lombok.Builder;

@Builder
public class AuthenticationResponse {
	private String token;

	public String getToken() {
		return token;
	}

	public AuthenticationResponse() {

	}

	public AuthenticationResponse(String token) {
		super();
		this.token = token;
	}

	public void setToken(String token) {
		this.token = token;
	}
}
