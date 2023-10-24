package dario.gabriel.mypersonalblog.controller;

import dario.gabriel.mypersonalblog.dto.httpResponses.AuthenticationRequest;
import dario.gabriel.mypersonalblog.dto.httpResponses.AuthenticationResponse;
import dario.gabriel.mypersonalblog.dto.httpResponses.RegisterRequest;
import dario.gabriel.mypersonalblog.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthenticationController {

	@Autowired
	private final AuthenticationService authenticationService;
	
	@PostMapping("/register")
	public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) {
		return ResponseEntity.ok(authenticationService.register(request));
	}

	@PostMapping("/authenticate")
	public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
		return ResponseEntity.ok(authenticationService.authenticate(request));
	}
}
