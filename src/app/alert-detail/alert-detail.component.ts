import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { AlertDetail } from '../alert-detail';

@Component({
  selector: 'app-alert-detail',
  template: `
  <div *ngIf="alertDetail" [class.expired]="alertDetail.expired">
  <table class="table">
    <tr>
      <td>IP</td>
      <td>{{alertDetail.hostIp}}</td>
    </tr>
    <tr>
      <td>time</td>
      <td>{{alertDetail.time}}</td>
    </tr>
    <tr>
      <td>subject</td>
      <td>{{alertDetail.subject}}</td>
    </tr>
    <tr>
      <td>expired</td>
      <td>{{alertDetail.expired}}</td>
    </tr>
  </table>
  </div>
  `,
  styles: []
})
export class AlertDetailComponent implements OnInit {
  @Input() alertDetail: AlertDetail;
  constructor() { }

  ngOnInit() {
  }

}


`
<table class='table' *ngIf="hostDetail">
<tr>
  <td>IP</td>
  <td>{{hostDetail.hostIp}}</td>
</tr>
<tr>
  <td>CPU负载</td>
  <td>{{hostDetail.cpuLoad}}</td>
</tr>
<tr>
  <td>内存使用情况</td>
  <td>{{hostDetail.memoryDisplay}}</td>
</tr>
<tr>
  <td>磁盘负载</td>
  <td>{{hostDetail.diskUtil}}</td>
</tr>
<tr>
  <td>网络流量</td>
  <td>{{hostDetail.networkDisplay}}</td>
</tr>
</table>
`