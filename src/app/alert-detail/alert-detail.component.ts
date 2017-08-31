import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { AlertDetail } from '../alert-detail';
import { UserService } from '../user.service';

import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-alert-detail',
  templateUrl: './alert-detail.component.html',
  styles: [`.expired {
    background: cornsilk;
    padding: 15px;
    margin-top: 10px;
    }`,
    `.indanger {
    background: aqua;
    padding: 15px;
    margin-top: 10px;
  }
  `]
})
export class AlertDetailComponent implements OnInit {
  @Input() alertDetail: AlertDetail;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  dismiss(alertDetail: AlertDetail) {
    this.alertDetail.disableUser = true;
    this.userService.dismissAlert(alertDetail.alertId)
      .then(status => status);
  }
}