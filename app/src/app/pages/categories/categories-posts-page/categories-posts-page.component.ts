import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Post } from 'src/app/models/post.model';
import { CategoryService } from 'src/app/services/category.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-categories-posts-page',
  templateUrl: './categories-posts-page.component.html',
  styleUrls: ['./categories-posts-page.component.css']
})
export class CategoriesPostsPageComponent implements OnDestroy {
  public category: Category;
  public postList: Post[] = [];
  public isLoading: boolean = false;
  public page: number = 1;

  constructor(private categoryService: CategoryService, private postService: PostService, private activatedRoute: ActivatedRoute) { }

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.category = this.categoryService.getById(params["id"]);
      this.categoryService.categorySubject.next(this.category);

      this.postList = this.postService.getByCategory(params["id"]);
    });
  }

  public ngOnDestroy(): void {
  }
}
