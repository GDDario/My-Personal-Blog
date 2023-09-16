import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
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
  public postList: Post[];
  public isLoading: boolean = false;
  public page: number = 1;
  private observedCategory: Subscription;

  constructor(private categoryService: CategoryService, private postService: PostService, private activatedRoute: ActivatedRoute) { }

  public ngOnInit(): void {
    this.fakeLoading();

    let isClicked = true;
    if (this.categoryService.observedCategory == undefined) {
      isClicked = false;
    } else {
      this.observedCategory = this.categoryService.observedCategory.subscribe((category: Category) => {
        this.category = category;
      });
    }

    this.activatedRoute.params.subscribe(params => {
      if (!isClicked) this.category = this.categoryService.getById(params["id"]);
      this.postList = this.postService.getByCategory(params["id"]);
    });
  }

  /**
   * Use for development only
   */
  private fakeLoading(): void {
    let count = 1;
    setInterval(() => {
      if (count == 2) {
        //this.isLoading = false;
      }
      count++;
    }, 1000);
  }

  public ngOnDestroy(): void {
    this.observedCategory.unsubscribe();
  }
}
