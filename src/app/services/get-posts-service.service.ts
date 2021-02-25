import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map } from "rxjs/operators";
import { Post } from "../interfaces/post";

@Injectable({
	providedIn: "root",
})
export class GetPostsServiceService {
	constructor(private http: HttpClient) {}

	getPosts() {
		return this.http.get("https://jsonplaceholder.typicode.com/posts").pipe(
			map((res: Post) => {
				return res;
			})
		);
	}
}
