import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostInterface } from 'src/app/interfaces/post.interface';
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
  public category: Category = new Category({});
  public posts: Post[] = [];
  public isLoading: boolean = true;
  public page: number = 1;

  constructor(private categoryService: CategoryService, private postService: PostService, private activatedRoute: ActivatedRoute) { }

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.isLoading = true;
      this.posts = [];
      this.categoryService.selectCategory(params["id"]);
      this.postService.getByCategory(params["id"]).subscribe((response: PostInterface[]) => {
        this.category = new Category({ id: response[0].category.id, name: response[0].category.name });
        for (let i = 0; i < response.length; i++) {
          this.posts.push(new Post(
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

        this.isLoading = false;
      });
    });
  }

  public getPageMainTitle(): string {
    if (this.isLoading) {
      return "...";
    }

    if (this.posts.length > 0) {
      return this.category.getName();
    }

    return "No posts avaliable for this category.";
  }

  public ngOnDestroy(): void {
  }
}
