import { Component, OnInit } from '@angular/core';
import { AlertDetail } from '../alert-detail';
import { GetAlertListService } from '../get-alert-list.service';

@Component({
  selector: 'app-alert-hist-list',
  templateUrl: './alert-hist-list.component.html',
  styleUrls: ['./alert-hist-list.component.css']
})
export class AlertHistListComponent implements OnInit {
  alertHistList: AlertDetail[];
  selectedAlertDetail: AlertDetail = null;

  constructor(private getAlertListService: GetAlertListService) { }

  ngOnInit() {
    this.getAlertListService.getAlertHistList()
      .then(alertHistList => this.alertHistList = alertHistList);
  }

  showDetail(alertDetail) {
    this.selectedAlertDetail = alertDetail;
  }
}
