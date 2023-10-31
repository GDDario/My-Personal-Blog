package dario.gabriel.mypersonalblog.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import dario.gabriel.mypersonalblog.model.Role;
import dario.gabriel.mypersonalblog.model.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@Builder
public class UserDTO {
    private long id;
    private String username;
    private String fullName;
    private String email;
    @JsonProperty(value = "picture")
    private String profilePicture;
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private LocalDateTime registerDate;
    private int postsRead;
    private int commentsMade;
    private Role role;

    static public UserDTO createFromEntity(User user) {
        return UserDTO.builder()
                .id(user.getId())
                .username(user.getUsername())
                .fullName(user.getFullName())
                .email(user.getEmail())
                .profilePicture(user.getProfilePicture())
                .registerDate(user.getRegisterDate())
                .postsRead(user.getPostsRead())
                .commentsMade(user.getCommentsMade())
                .role(user.getRole())
                .build();
    }
}
