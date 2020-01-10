import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {HomePageComponent} from './home-page/home-page.component';
import {PostPageComponent} from './post-page/post-page.component';
import {PostComponent} from './shared/components/post/post.component';
import {CreatePageComponent} from './shared/components/create-page/create-page.component';
import {EditPageComponent} from './shared/components/edit-page/edit-page.component';
import {ProfilePageComponent} from './shared/components/profile-page/profile-page.component';
import {CategoriesComponent} from './shared/components/categories/categories.component';
import {SharedModule} from './shared/shared.module';
import {SearchPipe} from './shared/search.pipe';
import {NgSelectModule} from '@ng-select/ng-select';
import {AlertService} from './shared/components/services/alert.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    PostPageComponent,
    PostComponent,
    CreatePageComponent,
    EditPageComponent,
    ProfilePageComponent,
    CategoriesComponent


  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    NgSelectModule,
    BrowserAnimationsModule
  ],
  providers: [AlertService],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
