import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
  route: ActivatedRoute;
  post: Post;
  @Input() title: string;
  constructor(private router: Router, private postsService: PostsService) {}

  ngOnInit(): void {}
  goBack(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
