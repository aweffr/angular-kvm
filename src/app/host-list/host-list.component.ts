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

  columns = [];
  rows = [];
  defaultSorter = [{ prop: 'alertNum', dir: 'desc' }];


  constructor(private getHostListService: GetHostListService) { }

  ngOnInit() {
    this.getHostListService.getHostList()
      .then(hostList => this.hostList = hostList);
    this.columns = [
      { name: '节点IP', prop: 'hostIp', sortable: true, draggable: false, resizeable: false },
      { name: 'Ping', prop: 'icmpPingDisplay', sortable: true, minWidth: 200, draggable: false, resizeable: false },
      { name: '报警数', prop: 'alertNum', sortable: true, draggable: false, resizeable: false, cellTemplate: this.editTmpl}
    ];
    this.getHostListService.getHostDetailList()
      .then(hostDetailList => this.hostDetailList = hostDetailList)
      .then(hostDetailList => {
        for (let hostDetail of hostDetailList) {
          let temp = { hostIp: hostDetail.hostIp, icmpPingDisplay: hostDetail.icmpPingDisplay, alertNum: 2 };
          this.rows.push(temp);
        }
      });
    console.log(this.editTmpl);
  }

}
