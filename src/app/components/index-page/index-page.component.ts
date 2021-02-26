import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss'],
})
export class IndexPageComponent implements OnInit {
  posts: Post[];
  sidePosts: Post[];
  p: number = 1;
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((data: []) => {
      this.posts = data;
      this.sidePosts = this.posts.slice(0, 20);
      // console.log(this.posts);
      // console.log(this.sidePosts);
    });
  }
}
