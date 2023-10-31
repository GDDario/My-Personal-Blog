package dario.gabriel.mypersonalblog.service;

import dario.gabriel.mypersonalblog.dto.CommentDTO;
import dario.gabriel.mypersonalblog.dto.httpRequests.CommentLikeDTO;
import dario.gabriel.mypersonalblog.dto.httpRequests.CreateCommentDTO;
import dario.gabriel.mypersonalblog.dto.httpResponses.MessageResponse;
import dario.gabriel.mypersonalblog.model.Comment;
import dario.gabriel.mypersonalblog.model.User;
import dario.gabriel.mypersonalblog.model.UserLikeComment;
import dario.gabriel.mypersonalblog.repository.CommentRepository;
import dario.gabriel.mypersonalblog.repository.UserLikeCommentRespository;
import dario.gabriel.mypersonalblog.repository.UserRepository;
import dario.gabriel.mypersonalblog.util.PaginationUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;
    private final UserRepository userRepository;
    private final UserLikeCommentRespository userLikeCommentRepository;

    public ResponseEntity<?> getByPostId(long id, int page, long userId) {
        List<Comment> comments = commentRepository.findByPostId(id, PaginationUtil.normalize(page, 10));
        if (comments.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        List<CommentDTO> commentDTOs = new ArrayList<>();
        for (Comment comment : comments) {
            CommentDTO commentDTO = CommentDTO.createFromEntity(comment);
            if (userId != 0) {
                System.out.println("User id: " + userId + ", commentId: " + comment.getId());
                System.out.println("USER: " + userLikeCommentRepository.findByUserIdAndCommentId(userId, comment.getId()));
                commentDTO.setCurrentUserLiked(userLikeCommentRepository.findByUserIdAndCommentId(userId, comment.getId()) != null);
            }
            commentDTOs.add(commentDTO);
        }

        return ResponseEntity.ok().body(commentDTOs);
    }

    public List<Comment> getById(long id, int page) {
        return commentRepository.findByIdAndPage(id, PaginationUtil.normalize(page, 5));
    }

    public ResponseEntity<?> createComment(CreateCommentDTO dto) {
        Optional<User> user = this.userRepository.findById(dto.getUserId());

        if (user.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(MessageResponse.builder().message("User not found.").build());
        }

        Comment comment = this.commentRepository.save(Comment.builder()
                .user(user.get())
                .postId(dto.getPostId())
                .date(dto.getDate())
                .content(dto.getContent())
                .build());

        return ResponseEntity.status(HttpStatus.CREATED).body(CommentDTO.createFromEntity(comment));
    }

    public ResponseEntity<?> addLikeToComment(CommentLikeDTO dto) {
        if (!userRepository.existsById(dto.getUserId())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(MessageResponse.builder().message("User not found.").build());
        }
        if (!commentRepository.existsById(dto.getCommentId())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(MessageResponse.builder().message("Comment not found.").build());
        }

        userLikeCommentRepository.save(
                UserLikeComment.builder()
                        .commentId(dto.getCommentId())
                        .userId(dto.getUserId())
                        .build()
        );
        commentRepository.addLike(dto.getCommentId());

        return ResponseEntity.ok().build();
    }

    public ResponseEntity<?> removeLikeFromComment(CommentLikeDTO dto) {
        commentRepository.removeLike(dto.getCommentId());
        userLikeCommentRepository.deleteByCommentIdAndUserId(dto.getCommentId(), dto.getUserId());
        return ResponseEntity.ok().build();
    }

    public ResponseEntity<?> deleteCommentById(long id) {
        commentRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
