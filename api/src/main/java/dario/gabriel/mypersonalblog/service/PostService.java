package dario.gabriel.mypersonalblog.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import dario.gabriel.mypersonalblog.repository.CategoryRepository;
import dario.gabriel.mypersonalblog.util.PaginationUtil;
import org.springframework.stereotype.Service;

import dario.gabriel.mypersonalblog.model.Post;
import dario.gabriel.mypersonalblog.repository.PostRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PostService {

	private final PostRepository postRepository;
	private final CategoryRepository categoryRepository;

	public List<Post> getPostsByPage(int page) {
		return this.postRepository.findByPage(PaginationUtil.normalize(page, 10));
	}

	public Post getById(long id) {
		Optional<Post> post = postRepository.findById(id);
        return post.orElse(null);
    }

	public List<Post> getByCategoryId(long id, int page) {
		List<Post> posts = postRepository.findByCategoryId(id, PaginationUtil.normalize(page, 10));
		return posts;
	}

	public Post getByUrlParam(String urlPath) {
		return this.postRepository.findByUrlParam(urlPath);
	}

	public Post createPost(Post post) {
		return postRepository.save(post);
	}

	public Post updatePost(Post post) {
		Optional<Post> searchPost = postRepository.findById(post.getId());
		if (searchPost.isEmpty()) {
			return null;
		}
		Post searchedPost = searchPost.get();
		if (post.getTitle() == null) {
			post.setTitle(searchedPost.getTitle());
		}
		if (post.getDescription() == null) {
			post.setDescription(searchedPost.getDescription());
		}
		if (post.getContent() == null) {
			post.setContent(searchedPost.getContent());
		}
		if (post.getImageId() == null) {
			post.setImageId(searchedPost.getImageId());
		}
		if (post.getCategory() == null || post.getCategory().getId() == 0) {
			post.setCategory(searchedPost.getCategory());
		}
		if (post.getUrlParam() == null) {
			post.setUrlParam(searchedPost.getUrlParam());
		}
		post.setDate(searchPost.get().getDate());
		post.setEditedDate(LocalDateTime.now());
		return createPost(post);
	}

	public boolean deletePost(long id) {
		if (postRepository.findById(id).isEmpty()) {
			return false;
		}
		postRepository.deleteById(id);
		return true;
	}
}
