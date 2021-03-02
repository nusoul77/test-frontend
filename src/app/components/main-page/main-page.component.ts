import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  posts: Post[];
  sidePosts: Post[];
  p: number = 1;
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((data) => {
      this.posts = data.reverse();
      this.sidePosts = this.posts.splice(
        this.posts.length - 25,
        this.posts.length
      );
      this.posts = this.posts.splice(0, this.posts.length - 25);
    });
  }
}
