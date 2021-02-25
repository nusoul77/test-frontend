import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Post } from "src/app/interfaces/post";
import { GetPostsServiceService } from "src/app/services/get-posts-service.service";

@Component({
	selector: "app-detail",
	templateUrl: "./details.component.html",
	styleUrls: ["./details.component.scss"],
})
export class DetailsComponent implements OnInit {
	post: Post;
	constructor(
		private getPostsServiceService: GetPostsServiceService,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		let id = this.route.snapshot.paramMap.get("id");
		this.getPostsServiceService.getPost(id).subscribe((data) => {
			this.post = data;
			console.log(this.post);
		});
	}
}
