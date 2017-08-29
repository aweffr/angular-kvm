import { Component, OnInit } from '@angular/core';
import { HostDetail } from '../host-detail';
import { GetHostListService } from '../get-host-list.service';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-host-list',
  templateUrl: './host-list.component.html',
  styleUrls: ['./host-list.component.css']
})
export class HostListComponent implements OnInit {

  // @ViewChild('hdrTpl') hdrTpl: TemplateRef<any>;
  // @ViewChild('editTmpl') editTmpl: TemplateRef<any>;

  hostList: string[];
  hostDetailList: HostDetail[];

  closeResult: string;

  constructor(private getHostListService: GetHostListService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getHostListService.getHostList()
      .then(hostList => this.hostList = hostList);
    this.getHostListService.getHostDetailList()
      .then(hostDetailList => this.hostDetailList = hostDetailList);
  }
}
