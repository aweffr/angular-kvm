import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { GetHostListService } from './get-host-list.service'
import { GetAlertListService } from './get-alert-list.service';
import { AlertListComponent } from './alert-list/alert-list.component';
import { HostDetailComponent } from './host-detail/host-detail.component';
import { HostListComponent } from './host-list/host-list.component';
import { AlertHistListComponent } from './alert-hist-list/alert-hist-list.component';
import { AlertDetailComponent } from './alert-detail/alert-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    AlertListComponent,
    HostDetailComponent,
    HostListComponent,
    AlertHistListComponent,
    AlertDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/alertList',
        pathMatch: 'full'
      },
      {
        path: 'alertList',
        component: AlertListComponent
      },
      {
        path: 'hostList',
        component: HostListComponent
      },
      {
        path: 'hostDetail/:host',
        component: HostDetailComponent        
      },
      {
        path: 'alertHistList',
        component: AlertHistListComponent
      }
    ]),
    HttpModule
  ],
  providers: [
    GetAlertListService,
    GetHostListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
