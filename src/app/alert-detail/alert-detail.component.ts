import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { AlertDetail } from '../alert-detail';

@Component({
  selector: 'app-alert-detail',
  templateUrl: './alert-detail.component.html',
  styles: [`.expired {
    background: cornsilk;
    padding: 10px;
    margin-top: 10px;
    }`,
    `.indanger {
    background: aqua;
    padding: 10px;
    margin-top: 10px;
  }
  `]
})
export class AlertDetailComponent implements OnInit {
  @Input() alertDetail: AlertDetail;
  constructor() { }

  ngOnInit() {
  }

}