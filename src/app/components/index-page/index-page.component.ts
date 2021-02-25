import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { Post } from "src/app/interfaces/post";
import { GetPostsServiceService } from "src/app/services/get-posts-service.service";

@Component({
	selector: "app-index-page",
	templateUrl: "./index-page.component.html",
	styleUrls: ["./index-page.component.scss"],
})
export class IndexPageComponent implements OnInit {
	posts: Post;

	p: number = 1;

	constructor(private getPostsServiceService: GetPostsServiceService) {}

	ngOnInit(): void {
		this.getPostsServiceService.getPosts().subscribe((data) => {
			this.posts = data;
			console.log(this.posts);
		});
	}
}
