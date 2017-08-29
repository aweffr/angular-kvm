import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GetHostListService } from './get-host-list.service'
import { GetAlertListService } from './get-alert-list.service';
import { AlertListComponent } from './alert-list/alert-list.component';
import { HostDetailComponent } from './host-detail/host-detail.component';
import { HostListComponent } from './host-list/host-list.component';
import { AlertHistListComponent } from './alert-hist-list/alert-hist-list.component';
import { AlertDetailComponent } from './alert-detail/alert-detail.component'

const routes: Routes = [
    {
        path: '',
        redirectTo: '/hostList',
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
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}