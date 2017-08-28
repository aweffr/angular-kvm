import { Component, OnInit } from '@angular/core';
import { HostDetail } from '../host-detail';
import { GetHostListService } from '../get-host-list.service';
import { TemplateRef, ViewChild } from '@angular/core'
@Component({
  selector: 'app-host-list',
  templateUrl: './host-list.component.html',
  styleUrls: ['./host-list.component.css']
})
export class HostListComponent implements OnInit {

  @ViewChild('hdrTpl') hdrTpl: TemplateRef<any>;
  @ViewChild('editTmpl') editTmpl: TemplateRef<any>;

  hostList: string[];
  hostDetailList: HostDetail[];

  constructor(private getHostListService: GetHostListService) { }

  ngOnInit() {
    this.getHostListService.getHostList()
      .then(hostList => this.hostList = hostList);
    this.getHostListService.getHostDetailList()
      .then(hostDetailList => this.hostDetailList = hostDetailList);
    console.log(this.editTmpl);
  }

}
