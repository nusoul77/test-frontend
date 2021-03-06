import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts;
  status: any;

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
      map((res: Post[]) => {
        this.posts = res;
        return res;
      })
    );
  }

  getPost(id) {
    return this.http
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .pipe(
        map((res: Post) => {
          return res;
        })
      );
  }

  getStatus(id) {
    return this.http
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        observe: 'response',
      })
      .pipe((response) => response);
  }
}
