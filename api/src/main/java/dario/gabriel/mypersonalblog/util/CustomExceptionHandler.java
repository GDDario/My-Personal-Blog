package dario.gabriel.mypersonalblog.util;

import dario.gabriel.mypersonalblog.model.httpResponses.MessageResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.io.IOException;
import java.sql.SQLIntegrityConstraintViolationException;

@Component
@ControllerAdvice
public class CustomExceptionHandler {

    @ExceptionHandler(HttpMessageNotReadableException.class)
    protected ResponseEntity<?> handleNoBodyRequest(
            HttpMessageNotReadableException ex, HttpServletRequest request, HttpServletResponse response, @Nullable Object handler)
            throws IOException {
        MessageResponse messageResponse = new MessageResponse("Please send a properly request body.");
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(messageResponse);
    }

    @ExceptionHandler(value = SQLIntegrityConstraintViolationException.class)
    protected ResponseEntity<?> handleEmptyJsonRequest(
            SQLIntegrityConstraintViolationException ex, HttpServletRequest request, HttpServletResponse response, @Nullable Object handler)
            throws IOException {
        MessageResponse messageResponse = new MessageResponse("Please send a properly json body.");
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(messageResponse);
    }

//    @ExceptionHandler(value = ExpiredJwtException.class)
//    protected ResponseEntity<?> handleExpiredJwtException(
//            ExpiredJwtException ex, HttpServletRequest request, HttpServletResponse response, @Nullable Object handler)
//            throws IOException {
//        MessageErrorResponse messageErrorResponse = new MessageErrorResponse("Please send a properly json body.");
//        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(messageErrorResponse);
//    }
}
