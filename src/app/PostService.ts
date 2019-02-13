import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/';
import {Post} from './post.model';
import { map } from 'rxjs/operators';

@Injectable()
export class PostService {
  private _APIURL = 'https://jsonplaceholder.typicode.com/posts';
  private statusText: 'Error';

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    const url = `${this._APIURL}`;
    return this.http.get(url).pipe(
      map((data: any[]) => data.map((item: any) => new Post(
        item.userId,
        item.id,
        item.title,
        item.body,
        item.clicked
      )))
    );
  }
}
