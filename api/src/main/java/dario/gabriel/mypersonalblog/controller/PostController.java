package dario.gabriel.mypersonalblog.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import dario.gabriel.mypersonalblog.model.Post;
import dario.gabriel.mypersonalblog.service.PostService;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class PostController {
	
	private final PostService postService;
	
	@GetMapping("/post")
	public List<Post> getPost() {
		return this.postService.getAll();
	}
	
	@GetMapping("/post/{id}")
	@ResponseBody
	public Post getPost(@PathVariable(value = "id") long id) {
		Post post = this.postService.getByid(id);
		System.out.println("Searching for" + id);
		return post;
	}
}
