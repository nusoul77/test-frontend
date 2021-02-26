import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { CommentsService } from 'src/app/services/comments.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-detail',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  post: Post;
  comments;
  constructor(
    private postsService: PostsService,
    private commentsService: CommentsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    this.postsService.getPost(id).subscribe((data) => {
      this.post = data;
      console.log(this.post);
    });

    this.commentsService.getComments(id).subscribe((data) => {
      this.comments = data;
      console.log(this.post);
    });
  }
}
