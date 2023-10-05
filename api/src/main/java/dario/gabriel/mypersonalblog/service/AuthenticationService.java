package dario.gabriel.mypersonalblog.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import dario.gabriel.mypersonalblog.model.Role;
import dario.gabriel.mypersonalblog.model.User;
import dario.gabriel.mypersonalblog.repository.UserRepository;
import dario.gabriel.mypersonalblog.model.httpResponses.AuthenticationRequest;
import dario.gabriel.mypersonalblog.model.httpResponses.AuthenticationResponse;
import dario.gabriel.mypersonalblog.model.httpResponses.RegisterRequest;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthenticationResponse register(RegisterRequest request) {
        var user = User.builder()
                .fullName(request.getFullName())
                .username(request.getUsername())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(new Role(2L, "User"))
                .build();
        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder().token(jwtToken).build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
		var user = userRepository.findByEmail(request.getEmail());
		if (user == null) {
            return AuthenticationResponse.builder().failMessage("Invalid credentials").build();
        }
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder().token(jwtToken).build();
    }
}