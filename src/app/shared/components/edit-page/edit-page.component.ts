import {Component, OnInit} from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Post} from '../../interfaces';


@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {

  form: FormGroup;

  post: Post;

  ngOnInit(): void {
    this.form = new FormGroup({
      image: new FormControl(),
      title: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required)
    });
  }


}
