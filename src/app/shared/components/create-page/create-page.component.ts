import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Post} from '../../interfaces';
import {PostsService} from '../services/posts.service';
import {pipe} from 'rxjs';
import {AlertService} from '../services/alert.service';


@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {


  form: FormGroup;
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();

  title = '';
  text = '';
  name = '';
  image: any[];

  constructor(
    private alertService: AlertService,
    private postsService: PostsService
  ) {
  }


  ngOnInit() {
    this.form = new FormGroup({
      image: new FormControl(),
      title: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required)
    });
  }

  onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.image = event.target.result;

      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  submit() {
    if (this.form.invalid) {
      return;
    }


    const post: Post = {
      img: this.form.value.image,
      id: this.form.value.id,
      title: this.form.value.title,
      text: this.form.value.text,
      name: this.form.value.name,
      date: new Date()
    };

    this.postsService.createPost(post).subscribe(() => {
      this.form.reset();
      this.alertService.success('Post created');

    });


  }


}
