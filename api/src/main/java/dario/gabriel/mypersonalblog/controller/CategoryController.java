package dario.gabriel.mypersonalblog.controller;

import dario.gabriel.mypersonalblog.dto.CategoryDTO;
import dario.gabriel.mypersonalblog.model.Category;
import dario.gabriel.mypersonalblog.model.httpResponses.MessageResponse;
import dario.gabriel.mypersonalblog.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;

    @GetMapping("/category")
    public ResponseEntity<List<Category>> getCategories() {
        List<Category> categories = categoryService.getCategories();
        if (categoryService.getCategories().isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(categories);
    }

    @GetMapping("/category/{categoryId}")
    public ResponseEntity<Category> getCategory(@PathVariable long categoryId) {
        Optional<Category> category = categoryService.getCategoryById(categoryId);
        if (category.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(category.get());
    }

    @PostMapping("/category")
    public ResponseEntity<?> createCategory(@RequestBody Category category) {
        category = categoryService.createCategory(category);
        if (category == null) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(category);
    }

    @PutMapping("/category/{categoryId}")
    public ResponseEntity<?> updateCategory(@PathVariable(name = "categoryId") long categoryId, @RequestBody CategoryDTO categoryDTO) {
        if (categoryDTO.getName() == null) {
            MessageResponse messageResponse = new MessageResponse("Please send a json with a properly name.");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(messageResponse);
        }
        Category category = new Category();
        category.setId(categoryId);
        category.setName(categoryDTO.getName());
        category = categoryService.updateCategory(category);
        if (category == null) {
            MessageResponse messageResponse = new MessageResponse("Category not found.");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(messageResponse);
        }
        return ResponseEntity.ok().body(category);
    }

    @DeleteMapping("/category/{categoryId}")
    public ResponseEntity<MessageResponse> deleteCategory(@PathVariable long categoryId) {
        MessageResponse messageResponse = new MessageResponse("Category not found.");
        boolean isDeleted = categoryService.deleteCategory(categoryId);
        if (!isDeleted) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(messageResponse);
        }
        messageResponse.setMessage("Deleted successfully!");
        return ResponseEntity.ok().body(messageResponse);
    }
}
