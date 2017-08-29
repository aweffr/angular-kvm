import 'rxjs/add/operator/switchMap';

import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { HostDetail } from '../host-detail';
import { GetHostListService } from '../get-host-list.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-host-detail',
  templateUrl: './host-detail.component.html',
  styleUrls: ['./host-detail.component.css']
})
export class HostDetailComponent implements OnInit {
  @Input() hostDetail: HostDetail;

  constructor(
    private getHostListService: GetHostListService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.getHostListService.getHostDetail(params.get('host')))
      .subscribe(hostDetail => this.hostDetail = hostDetail);
  }

  goBack(): void {
    this.location.back();
  }

}
