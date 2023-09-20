import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from 'src/app/models/category.model';
import { Post } from 'src/app/models/post.model';
import { CategoryService } from 'src/app/services/category.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.css']
})
export class CategoriesPageComponent implements OnInit {
  public categoryPosts: { category: Category, posts: Post[] }[];

  constructor(private postService: PostService, private categoryService: CategoryService, private router: Router) { }

  public ngOnInit(): void {
    this.categoryService.getCategories().subscribe((categories: Category[]) => {
      let categoryPosts: { category: Category, posts: Post[] }[] = [];

      for (let i = 0; i < categories.length; i++) {
        categoryPosts[i] = { category: categories[i], posts: this.postService.getByCategory(categories[i].getId()) };
      }

      this.categoryPosts = categoryPosts;
    });
  }

  public seeMorePosts(category: Category): void {
    this.categoryService.categorySubject.next(category);
    this.router.navigate(["categories", category.getId()]);
  }
}
