import { Component, OnInit } from '@angular/core';
import {PostService} from './PostService';
import {Post} from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [PostService]
})
export class AppComponent {

  title = 'Angular Reddit';
  posts: Post[] = [];
  clicked = false;

  constructor(private postService: PostService) {}

  getRandomNum(min, max): number {
    return Math.floor(Math.random() * (max - min + 1)) + min ;
  }

  getPosts(): void {
    this.postService.getPosts()
    .subscribe(
      (data: any[]) => this.posts = data,
      error => {
        if (error instanceof Error) {
          console.log('Client-side error occured');
        } else {
          console.log('Server-side error occured');
        }
      }
    );
  }

  toggle(index): void {
    this.posts[index].clicked = !this.posts[index].clicked;
  }

  reset(): void {
    this.posts = [];
  }
}
