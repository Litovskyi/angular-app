import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../interfaces';
import {PostsService} from '../services/posts.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  @Input() post: Post;

  constructor(private postsService: PostsService) {
  }

}
