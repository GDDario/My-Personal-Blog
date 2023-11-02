package dario.gabriel.mypersonalblog.controller;

import dario.gabriel.mypersonalblog.dto.CommentLikeDTO;
import dario.gabriel.mypersonalblog.dto.CreateCommentDTO;
import dario.gabriel.mypersonalblog.model.Comment;
import dario.gabriel.mypersonalblog.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/comment")
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;

    /**
     * Route used for getting the comments of a comment, like in cascade.
     *
     * @param id   the id of the father comment.
     * @param page number of the page. The default value is 2 because usually the comments already have children
     *             per default.
     * @return a list of comments related to another.
     */
    @GetMapping("/{id}")
    public ResponseEntity<?> getCommentsById(@PathVariable(value = "id") long id, @RequestParam(defaultValue = "2") int page) {
        List<Comment> comments = commentService.getById(id, page);
        if (comments.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok().body(comments);
    }

    @GetMapping("/post/{id}/{userId}")
    public ResponseEntity<?> getCommentsByPostId(@PathVariable(value = "id") long id, @PathVariable(required = false, value = "userId") long userId, @RequestParam(defaultValue = "1") int page) {
        return commentService.getByPostId(id, page, userId);
    }

    @PostMapping
    public ResponseEntity<?> createComment(@RequestBody CreateCommentDTO dto) {
        return commentService.createComment(dto);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> deleteComment(@PathVariable(value = "id") long id) {
        return commentService.deleteCommentById(id);
    }

    @PostMapping("/like")
    public ResponseEntity<?> addLikeToComment(@RequestBody CommentLikeDTO dto) {
        return commentService.addLikeToComment(dto);
    }

    @PutMapping("/like")
    public ResponseEntity<?> removeLikeFromComment(@RequestBody CommentLikeDTO dto) {
        return commentService.removeLikeFromComment(dto);
    }
}
