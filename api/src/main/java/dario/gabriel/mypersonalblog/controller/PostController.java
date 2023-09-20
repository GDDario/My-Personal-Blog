package dario.gabriel.mypersonalblog.controller;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import dario.gabriel.mypersonalblog.model.Post;

@RestController
public class PostController {
	
	@GetMapping("/post")
	public ArrayList<Post> getPost() {
		ArrayList<Post> posts = new ArrayList<>();
		Post post = new Post();
		post.setId(1);
		post.setTitle("Open Source 1");
		post.setUrlPath("open-source-1");
		posts.add(post);
		return posts;
	}
}
