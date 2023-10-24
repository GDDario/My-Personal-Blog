package dario.gabriel.mypersonalblog.controller;

import dario.gabriel.mypersonalblog.model.Role;
import dario.gabriel.mypersonalblog.model.User;
import dario.gabriel.mypersonalblog.service.JwtService;
import dario.gabriel.mypersonalblog.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    private final JwtService jwtService;

    @GetMapping("/user")
    public ResponseEntity<List<User>> getUsers(@RequestParam(defaultValue = "1") int page) {
        List<User> users = userService.getUsers(page);
        if (users.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(users);
    }

    @GetMapping("/user/auth")
    public ResponseEntity<User> getUserByJwt(@RequestHeader("Authorization") String authorizationHeader) {
        String jwt = authorizationHeader.substring(7);
        String username = jwtService.extractUsername(jwt);
        User user = userService.getUserByUsername(username);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(user);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<?> getUserById(@PathVariable long userId) {
        Optional<User> user = userService.getUserById(userId);
        if (user.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(user.get());
    }

    @PostMapping("/role")
    public ResponseEntity<Role> createRole(@RequestBody Role role) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/role").toUriString());
        return ResponseEntity.created(uri).body(userService.saveRole(role));
    }

    @PostMapping("/role/addtouser")
    public ResponseEntity<?> addRoleToUser(@RequestBody RoleToUserForm form) {
        userService.addRoleToUser(form.username, form.roleName);
        return ResponseEntity.ok().build();
    }

    static class RoleToUserForm {
        public String username;
        public String roleName;
    }
}
