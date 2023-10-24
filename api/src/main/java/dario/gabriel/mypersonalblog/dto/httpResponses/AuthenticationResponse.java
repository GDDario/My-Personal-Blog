package dario.gabriel.mypersonalblog.dto.httpResponses;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Builder
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class AuthenticationResponse {
    @Setter
    private String token;
    @Setter
    @JsonProperty("message")
    private String failMessage;
}
