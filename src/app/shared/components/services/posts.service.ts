import {Injectable} from '@angular/core';
import {Post} from '../../interfaces';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {delay, map} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';

@Injectable({providedIn: 'root'})
export class PostsService {


  errorMessage = '';

  constructor(private http: HttpClient) {
  }


  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(environment.DbUrl + '/v1/events', post);

  }

  getPosts(): Observable<Post[]> {
    return this.http.get(environment.DbUrl + '/v1/events')
      .pipe(map((response: { [key: string]: any }) => {
        return Object
          .keys(response)
          .map(key => ({
            ...response[key],
            date: new Date(response[key].date)
          }));

      }));


  }


  updatePost(post: Post): Observable<Post> {
    return this.http.patch<Post>(environment.DbUrl + '/v1/events', post);
  }

  removePost(id: string): Observable<void> {
    return this.http.delete<void>(environment.DbUrl + '/v1/events' + id);
  }

  getById(id: string): Observable<Post> {
    return this.http.get<Post>(environment.DbUrl + '/v1/events' + id)
      .pipe(map((post: Post) => {
        return {
          ...post, id
        };
      }));
  }


}
