import { Component, OnInit } from '@angular/core';
import { HostDetail } from '../host-detail';
import { GetHostListService } from '../get-host-list.service';

@Component({
  selector: 'app-host-list',
  templateUrl: './host-list.component.html',
  styleUrls: ['./host-list.component.css']
})
export class HostListComponent implements OnInit {

  hostList: string[];

  constructor(private getHostListService: GetHostListService) { }

  ngOnInit() {
    this.getHostListService.getHostList()
      .then(hostList => this.hostList = hostList);
  }

}
