import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
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
