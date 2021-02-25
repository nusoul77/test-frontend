import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GetPostsServiceService } from "src/app/services/get-posts-service.service";

@Component({
	selector: "app-detail",
	templateUrl: "./details.component.html",
	styleUrls: ["./details.component.scss"],
})
export class DetailsComponent implements OnInit {
	id: string;
	post;
	constructor(
		private route: ActivatedRoute,
		private getPostsServiceService: GetPostsServiceService
	) {}

	ngOnInit(): void {
		this.id = this.route.snapshot.paramMap.get("id");
		this.getPostsServiceService.getPost(this.id).subscribe((data) => {
			this.post = data;
			console.log(this.post);
		});
	}

	getPost() {}
}
