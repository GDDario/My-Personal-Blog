package dario.gabriel.mypersonalblog.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;

@Builder
@RequiredArgsConstructor
@AllArgsConstructor
@Data
public class ReadPostDTO {
    private int userId;
    private int postId;
    private LocalDateTime date;

    @Override
    public String toString() {
        return "ReadPostDTO{" +
                "userId=" + userId +
                ", postId=" + postId +
                ", date=" + date +
                '}';
    }
}
