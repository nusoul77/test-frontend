import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map } from "rxjs/operators";
import { Post } from "../interfaces/post";

@Injectable({
	providedIn: "root",
})
export class GetPostsServiceService {
	posts;

	constructor(private http: HttpClient) {}

	getPosts() {
		return this.http.get("https://jsonplaceholder.typicode.com/posts").pipe(
			map((res: Post) => {
				this.posts = res;
				return res;
			})
		);
	}

	getPost(id) {
		return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(
			map((res: Post) => {
				// this.posts = res;
				return res;
			})
		);
		// let post;
		// this.posts = this.getPosts();
		// return (post = Array(this.posts).find((id) => id));
	}
}
