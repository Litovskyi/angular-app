import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Post} from '../shared/interfaces';
import {PostsService} from '../shared/components/services/posts.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  form: FormGroup;
  searchStr = '';

  posts$: Observable<Post[]>;


  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
    this.posts$ = this.postsService.getPosts();
  }
}
