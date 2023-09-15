import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public postList: Post[];
  public isLoading: boolean = false;
  public page: number = 1;

  constructor(private postService: PostService) { }

  public ngOnInit(): void {
    this.fakeLoading();
    this.postList = this.postService.getLastPosts(this.page);
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
}
