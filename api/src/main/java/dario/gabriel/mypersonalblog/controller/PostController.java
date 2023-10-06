package dario.gabriel.mypersonalblog.controller;

import java.util.List;

import dario.gabriel.mypersonalblog.dto.CategoryDTO;
import dario.gabriel.mypersonalblog.model.Category;
import dario.gabriel.mypersonalblog.model.httpResponses.MessageResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import dario.gabriel.mypersonalblog.model.Post;
import dario.gabriel.mypersonalblog.service.PostService;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class PostController {
	
	private final PostService postService;
	
	@GetMapping("/post")
	public List<Post> getPosts() {
		return this.postService.getAll();
	}
	
	@GetMapping("/post/{postId}")
	public ResponseEntity<?> getPostById(@PathVariable(value = "postId") long id) {
		Post post = this.postService.getById(id);
		if (post == null) {
			MessageResponse messageResponse = new MessageResponse("Post not found.");
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(messageResponse);
		}
		return ResponseEntity.ok().body(post);
	}

	@GetMapping("/post/url-param/{urlParam}")
	public ResponseEntity<?> getPostByPathUrl(@PathVariable(value = "urlParam") String urlParam) {
		Post post = this.postService.getByUrlParam(urlParam);
		if (post == null) {
			MessageResponse messageResponse = new MessageResponse("Post not found.");
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(messageResponse);
		}
		return ResponseEntity.ok().body(post);
	}

	@PostMapping("/post")
	public ResponseEntity<?> createPost(@RequestBody Post post) {
		Post newPost = postService.createPost(post);
		if (newPost == null) {
			MessageResponse messageResponse = new MessageResponse("The server could not create the post.");
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(messageResponse);
		}
		return ResponseEntity.status(HttpStatus.CREATED).body(newPost);
	}

	@PutMapping("/post/{postId}")
	public ResponseEntity<?> updatePost(@PathVariable(name = "postId") long postId, @RequestBody Post post) {
		post.setId(postId);
		Post updatedPost = postService.updatePost(post);
		if (updatedPost == null) {
			MessageResponse messageResponse = new MessageResponse("Post not found");
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(messageResponse);
		}
		return ResponseEntity.ok().body(updatedPost);
	}

	@DeleteMapping("/post/{postId}")
	public ResponseEntity<MessageResponse> deletePost(@PathVariable long postId) {
		MessageResponse messageResponse = new MessageResponse("Post not found.");
		boolean isDeleted = postService.deletePost(postId);
		if (!isDeleted) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(messageResponse);
		}
		messageResponse.setMessage("Deleted successfully!");
		return ResponseEntity.ok().body(messageResponse);
	}
}
