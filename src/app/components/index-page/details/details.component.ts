import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Post } from "src/app/interfaces/post";
import { GetCommentsServiceService } from "src/app/services/get-comments-service.service";
import { GetPostsServiceService } from "src/app/services/get-posts-service.service";

@Component({
	selector: "app-detail",
	templateUrl: "./details.component.html",
	styleUrls: ["./details.component.scss"],
})
export class DetailsComponent implements OnInit {
	post: Post;
	comments;
	constructor(
		private getPostsServiceService: GetPostsServiceService,
		private getCommentsServiceService: GetCommentsServiceService,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		let id = this.route.snapshot.paramMap.get("id");

		this.getPostsServiceService.getPost(id).subscribe((data) => {
			this.post = data;
			console.log(this.post);
		});

		this.getCommentsServiceService.getComments(id).subscribe((data) => {
			this.comments = data;
			console.log(this.post);
		});
	}
}
