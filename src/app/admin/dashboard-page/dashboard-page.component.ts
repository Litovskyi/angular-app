import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from '../../shared/components/services/posts.service';
import {AlertService} from '../../shared/components/services/alert.service';
import {Post} from '../../shared/interfaces';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  pSub: Subscription;
  dSub: Subscription;
  searchStr = '';

  constructor(
    private postsService: PostsService,
    private alertService: AlertService
  ) {
  }

  ngOnInit() {
    this.pSub = this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  remove(id: string) {
    this.dSub = this.postsService.removePost(id)
      .subscribe(() => {
        this.posts = this.posts.filter(post => post.id !== id);
        this.alertService.warning('Post has been deleted');
      });


  }

  ngOnDestroy(): void {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }

    if (this.dSub) {
      this.dSub.unsubscribe();
    }
  }
}
