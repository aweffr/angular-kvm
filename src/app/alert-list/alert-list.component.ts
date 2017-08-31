import { Component, OnInit, Input } from '@angular/core';
import { GetAlertListService } from '../get-alert-list.service';
import { GetHostListService } from '../get-host-list.service';
import { AlertDetail } from '../alert-detail';
import { HostGeneral } from '../host-general';

@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.css']
})
export class AlertListComponent implements OnInit {
  hostGeneralList: HostGeneral[];


  constructor(
    private getHostListService: GetHostListService
  ) { }

  update(): void {
    this.getHostListService.getHostList()
      .then(hostGeneralList => this.hostGeneralList = hostGeneralList);
  }

  ngOnInit() {

    this.update();
    
    setInterval(() => {
      console.log("update!");
      this.getHostListService.getHostList()
        .then(hostGeneralList => this.hostGeneralList = hostGeneralList);
    }, 60 * 1000);
  }

}