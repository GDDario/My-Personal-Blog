package dario.gabriel.mypersonalblog.service;

import dario.gabriel.mypersonalblog.model.Category;
import dario.gabriel.mypersonalblog.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public List<Category> getCategories() {
        List<Category> categories = categoryRepository.findAll();
        return categories;
    }

    public Optional<Category> getCategoryById(long id) {
        return categoryRepository.findById(id);
    }

    public Category createCategory(Category category) {
        return categoryRepository.save(category);
    }

    public Category updateCategory(Category category) {
        Optional<Category> searchCategory = categoryRepository.findById(category.getId());
        if (searchCategory.isEmpty()) {
            return null;
        }
        return createCategory(category);
    }

    public boolean deleteCategory(long id) {
        if (categoryRepository.findById(id).isEmpty()) {
            return false;
        }
        categoryRepository.deleteById(id);
        return true;
    }
}
