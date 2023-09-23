package dario.gabriel.mypersonalblog.service;

import java.util.List;

import org.springframework.stereotype.Service;

import dario.gabriel.mypersonalblog.model.Post;
import dario.gabriel.mypersonalblog.repository.PostRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PostService {

	private final PostRepository postRepository;
		
	public Post getByid(long id) {
		return this.postRepository.findById(id).get();
	}
	
	public List<Post> getAll() {
		return this.postRepository.findAll();
	}
}
