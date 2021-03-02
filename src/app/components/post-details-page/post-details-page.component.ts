import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { CommentsService } from 'src/app/services/comments.service';
import { PostsService } from 'src/app/services/posts.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-details-page',
  templateUrl: './post-details-page.component.html',
  styleUrls: ['./post-details-page.component.scss'],
})
export class PostDetailsPageComponent implements OnInit {
  post: Post;
  comments;
  constructor(
    private postsService: PostsService,
    private commentsService: CommentsService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    this.postsService.getStatus(id).subscribe(
      (res) => {
        if (res.status < 400) {
          this.postsService.getPost(id).subscribe((data) => {
            this.post = data;

            if (data) {
              this.commentsService.getComments(id).subscribe((data) => {
                this.comments = data;
              });
            }
          });
        }
      },
      (error) => this.router.navigate(['/page-not-foud'])
    );
  }
}
