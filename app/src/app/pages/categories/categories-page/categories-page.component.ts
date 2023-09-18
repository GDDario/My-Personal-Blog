import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { Category } from 'src/app/models/categorie.model';
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
    let categories: Category[] = this.categoryService.getCategories();
    let categoryPosts: { category: Category, posts: Post[] }[] = [];

    for (let i = 0; i < categories.length; i++) {
      categoryPosts[i] = { category: categories[i], posts: this.postService.getByCategory(categories[i].getId()) };
    }

    this.categoryPosts = categoryPosts;
  }

  public seeMorePosts(category: Category): void {
    //this.categoryService.categoryObservable = new Observable((subscriber: Subscriber<Category>) => {
    //  subscriber.next(category);
    //});
    this.router.navigate(["categories", category.getId()]);
  }
}
