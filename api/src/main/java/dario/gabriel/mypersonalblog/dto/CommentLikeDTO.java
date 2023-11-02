package dario.gabriel.mypersonalblog.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@Builder
@RequiredArgsConstructor
@AllArgsConstructor
public class CommentLikeDTO {
    private long userId;
    private long commentId;
}
