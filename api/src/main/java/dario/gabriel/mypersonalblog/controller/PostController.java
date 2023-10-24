package dario.gabriel.mypersonalblog.controller;

import dario.gabriel.mypersonalblog.model.Post;
import dario.gabriel.mypersonalblog.model.User;
import dario.gabriel.mypersonalblog.model.httpResponses.MessageResponse;
import dario.gabriel.mypersonalblog.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class PostController {
	
	private final PostService postService;
	
	@GetMapping("/post")
	public ResponseEntity<List<Post>> getPosts(@RequestParam(defaultValue = "1") int page) {
		List<Post> posts = postService.getPostsByPage(page);
		if (posts.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok().body(posts);
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

	@GetMapping("/post/category/{categoryId}")
	public ResponseEntity<?> getPostByCategoryId(@PathVariable(value = "categoryId") long categoryId, @RequestParam(defaultValue = "1") int page) {
		List<Post> posts = this.postService.getByCategoryId(categoryId, page);
		return ResponseEntity.ok().body(posts);
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
