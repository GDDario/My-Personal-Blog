import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryInterface } from 'src/app/interfaces/category.interface';

import { PostInterface } from 'src/app/interfaces/post.interface';
import { Category } from 'src/app/models/category.model';
import { Post } from 'src/app/models/post.model';
import { CategoryService } from 'src/app/services/category.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.css']
})
export class CategoriesPageComponent implements OnInit, OnDestroy {
  public categoryPosts: { category: Category, posts: Post[] }[];
  private categoriesSubscription: Subscription;
  private postsSubscription: Subscription;

  constructor(private postService: PostService, private categoryService: CategoryService, private router: Router) { }

  public ngOnInit(): void {
    this.categoryService.loadCategories();

    this.categoriesSubscription = this.categoryService.categoriesSubject.subscribe((categories: Category[]) => {
      let categoryPosts: { category: Category, posts: Post[] }[] = [];

      for (let i = 0; i < categories.length; i++) {
        let posts: Post[] = [];
        this.postsSubscription = this.postService.getByCategory(categories[i].getId()).subscribe((response: PostInterface[]) => {
          for (let i = 0; i < response.length; i++) {
            posts.push(new Post(
              {
                id: response[i].id,
                title: response[i].title,
                description: response[i].description,
                content: response[i].content,
                dateString: response[i].date,
                editDateString: response[i].editDate,
                imageId: response[i].imageId,
                category: new Category({ id: response[i].category.id, name: response[i].category.name }),
                urlParam: response[i].urlParam,
              }));
          }
        });
        categoryPosts[i] = { category: new Category({ id: categories[i].getId(), name: categories[i].getName() }), posts: posts };
      }

      this.categoryPosts = categoryPosts;
    });
  }

  public seeMorePosts(category: Category): void {
    this.router.navigate(["categories", category.getId()]);
  }

  public ngOnDestroy(): void {
    this.categoriesSubscription.unsubscribe();
    this.postsSubscription.unsubscribe();
  }
}
