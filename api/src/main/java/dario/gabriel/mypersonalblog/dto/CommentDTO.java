package dario.gabriel.mypersonalblog.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import dario.gabriel.mypersonalblog.model.Comment;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Builder
@Data
@RequiredArgsConstructor
@AllArgsConstructor
public class CommentDTO {
    private long id;
    private int likes;
    private String content;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime date = null;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime editedDate = null;
    @JsonProperty(value = "user")
    private UserDTO userDTO;
    private boolean currentUserLiked;

    static public CommentDTO createFromEntity(Comment comment) {
        return CommentDTO.builder()
                .id(comment.getId())
                .likes(comment.getLikes())
                .content(comment.getContent())
                .date(comment.getDate())
                .editedDate(comment.getEditedDate())
                .userDTO(UserDTO.createFromEntity(comment.getUser()))
                .build();
    }}
