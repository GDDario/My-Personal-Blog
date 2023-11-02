package dario.gabriel.mypersonalblog.dto.httpResponses;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Builder
@Data
@RequiredArgsConstructor
@AllArgsConstructor
public class UserPostAnswerResponse {
    private String answer;
}
