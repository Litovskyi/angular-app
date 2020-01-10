import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

// tslint:disable-next-line:import-spacing
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AdminLayoutComponent} from './shared/components/admin-layout/admin-layout.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import {AuthService} from './shared/services/auth.service';
import {AppModule} from '../app.module';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations:
    [AdminLayoutComponent,
      LoginPageComponent,
      DashboardPageComponent
    ],

  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent},
          {path: 'dashboard', component: DashboardPageComponent}


        ]
      }
    ]),

  ],
  exports: [RouterModule],
  providers: [AuthService]
})

export class AdminModule {

}
