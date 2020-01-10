import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {QuillModule} from 'ngx-quill';
import {NgSelectModule} from '@ng-select/ng-select';
import {AlertComponent} from './components/alert/alert.component';
import {CommonModule} from '@angular/common';
import {SearchPipe} from './search.pipe';
import {LoginComponent} from './components/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    HttpClientModule,
    QuillModule.forRoot(),
    NgSelectModule,
    CommonModule,
    ReactiveFormsModule,


  ],
  exports: [
    HttpClientModule,
    QuillModule,
    AlertComponent,
    SearchPipe,
    LoginComponent

  ],
  declarations: [
    AlertComponent,
    SearchPipe,
    LoginComponent
  ],

})
export class SharedModule {

}
