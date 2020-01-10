import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Data, Params, Router} from '@angular/router';
import {PostsService} from '../shared/components/services/posts.service';
import {Post} from '../shared/interfaces';
import {Observable} from 'rxjs';
import {delay, map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  date: Data = new Date();
  post$: Observable<Post>;

  constructor(
    private postsService: PostsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {

    this.post$ = this.route.params
      .pipe(switchMap((params: Params) => {
        return this.postsService.getById(params['id']);
      }));

  }


}
