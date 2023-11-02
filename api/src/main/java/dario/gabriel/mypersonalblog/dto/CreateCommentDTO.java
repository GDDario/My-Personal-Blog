package dario.gabriel.mypersonalblog.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;

@Builder
@Data
@AllArgsConstructor
@RequiredArgsConstructor
public class CreateCommentDTO {
    private long userId;
    private long postId;
    private LocalDateTime date;
    private String content;
}
