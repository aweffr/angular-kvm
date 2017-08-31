import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { GetHostListService } from './get-host-list.service'
import { GetAlertListService } from './get-alert-list.service';
import { GetIndexInfoService } from './get-index-info.service'
import { UserService } from './user.service';

import { AlertListComponent } from './alert-list/alert-list.component';
import { HostDetailComponent } from './host-detail/host-detail.component';
import { HostListComponent } from './host-list/host-list.component';
import { AlertHistListComponent } from './alert-hist-list/alert-hist-list.component';
import { AlertDetailComponent } from './alert-detail/alert-detail.component'

import { AppRoutingModule } from './app-routing.module'

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
    AppRoutingModule,
    HttpModule,
    NgxDatatableModule,
    NgbModule.forRoot()
  ],
  providers: [
    GetAlertListService,
    GetHostListService,
    GetIndexInfoService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
