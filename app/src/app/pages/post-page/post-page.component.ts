import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {
  @ViewChild("postContent") private postContent: ElementRef;
  public post: Post;
  public content: SafeHtml;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService, private sanitizer: DomSanitizer) {
   }

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.post = this.postService.getByUrlPath(params["urlPath"]);
      this.content = this.sanitizer.bypassSecurityTrustHtml(this.post.getContent());
    });
  }
}
