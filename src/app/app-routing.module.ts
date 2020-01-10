import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {HomePageComponent} from './home-page/home-page.component';
import {PostPageComponent} from './post-page/post-page.component';

import {EditPageComponent} from './shared/components/edit-page/edit-page.component';
import {ProfilePageComponent} from './shared/components/profile-page/profile-page.component';


const routes: Routes = [{
  path: '', component: MainLayoutComponent, children: [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: '', component: HomePageComponent},
    {path: 'post/:id', component: PostPageComponent},
    {path: 'edit/:id', component: EditPageComponent},
    {path: 'profile/:id', component: ProfilePageComponent}


  ]
},
  {
    path: 'admin', loadChildren: './admin/admin.module#AdminModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
