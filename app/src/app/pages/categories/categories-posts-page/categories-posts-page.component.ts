import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { Category } from 'src/app/models/categorie.model';
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
  private categorySubscription: Subscription;

  constructor(private categoryService: CategoryService, private postService: PostService, private activatedRoute: ActivatedRoute) { }

  public ngOnInit(): void {
      // Checking if the link was redirected by a link.
    if (this.categoryService.categoryObservable != null) {
      this.categorySubscription = this.categoryService.categoryObservable.subscribe((category: Category) => {
        this.category = category;
        this.postList = this.postService.getByCategory(category.getId());
      });
    } else {
      this.activatedRoute.params.subscribe(params => {
        this.category = this.categoryService.getById(params["id"]);
        this.postList = this.postService.getByCategory(params["id"]);
      });
    }
  }

  public ngOnDestroy(): void {
    if (this.categorySubscription != null) this.categorySubscription.unsubscribe();
  }
}
