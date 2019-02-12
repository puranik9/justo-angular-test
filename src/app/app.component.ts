import { Component, ViewChild } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

interface Post {
  userId: string;
  id: string;
  title: string;
  body: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  title = 'Angular Reddit';
  apiURL = 'https://jsonplaceholder.typicode.com/posts';
  posts = [];
  clicked = false;

  constructor(private http: HttpClient) { }

  getRandomNum(min, max): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getPosts(): void {
    this.http.get(this.apiURL).subscribe(
      data => this.posts.push(...data),
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side error occured');
        } else {
          console.log('Server-side error occured');
        }
      });
  }

  toggle(index): void {
    this.posts[index].clicked = !this.posts[index].clicked;
  }

  reset(): void {
    this.posts = [];
  }
}
