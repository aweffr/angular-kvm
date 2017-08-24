import { Component, OnInit, Input } from '@angular/core';
import { GetAlertListService } from '../get-alert-list.service';
import { AlertDetail } from '../alert-detail';

@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.css']
})
export class AlertListComponent implements OnInit {
  selectedAlertDetail: AlertDetail;
  @Input() alertList: AlertDetail[];

  constructor(
    private getAlertListService: GetAlertListService
  ) { }

  ngOnInit() {
    this.getAlertListService.getAlertList()
      .then(alertList => this.alertList = alertList);
  }

  showDetail(alertDetail) {
    this.selectedAlertDetail = alertDetail;
  }

}
