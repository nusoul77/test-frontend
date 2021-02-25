import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map } from "rxjs/operators";
import { Post } from "../interfaces/post";

@Injectable({
	providedIn: "root",
})
export class GetCommentsServiceService {
	comments;

	constructor(private http: HttpClient) {}

	getComments(id) {
		return this.http
			.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
			.pipe(
				map((res: Post) => {
					return (this.comments = res);
				})
			);
	}
}
