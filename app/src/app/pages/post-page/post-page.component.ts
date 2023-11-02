import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { PostInterface } from 'src/app/interfaces/post.interface';
import { Category } from 'src/app/models/category.model';
import { Post } from 'src/app/models/post.model';
import { CategoryService } from 'src/app/services/category.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {
  public isLoading: boolean = true;
  public post: Post = new Post({});
  public content: SafeHtml;
  public showComments: boolean = false;
  public

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService, private categoryService: CategoryService, private sanitizer: DomSanitizer) {
  }

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.postService.getByUrlPath(params["urlParam"]).subscribe((response: PostInterface) => {
        this.post = new Post({
          id: response.id,
          title: response.title,
          description: response.description,
          content: response.content,
          dateString: response.date,
          editDateString: response.editDate,
          imageId: response.imageId,
          category: new Category({ id: response.category.id, name: response.category.name }),
          urlParam: response.urlParam,
        });
        this.categoryService.selectCategory(this.post.getCategory().getId());
        this.content = this.sanitizer.bypassSecurityTrustHtml(this.post.getContent());
        this.isLoading = false;
      });
    });
  }
}
