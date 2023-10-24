import { Component, OnInit } from '@angular/core';
import { PostInterface } from 'src/app/interfaces/post.interface';
import { Category } from 'src/app/models/category.model';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public lastPosts: Post[] = [];
  public isLoading: boolean = false;
  public page: number = 1;

  constructor(private postService: PostService) { }

  public ngOnInit(): void {

    this.postService.getLastPosts(this.page).subscribe((response: PostInterface[]) => {
      for (let i = 0; i < response.length; i++) {
        this.lastPosts.push(new Post(
          {
            id: response[i].id,
            title: response[i].title,
            description: response[i].description,
            dateString: response[i].date,
            editDateString: response[i].editDate,
            imageId: response[i].imageId,
            category: new Category({id: response[i].category.id, name: response[i].category.name}),
            urlParam: response[i].urlParam,
          }
        ));
      }
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
}
