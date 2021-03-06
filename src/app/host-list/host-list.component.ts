import { Component, OnInit } from '@angular/core';
import { HostDetail } from '../host-detail';
import { GetHostListService } from '../get-host-list.service';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HostGeneral } from '../host-general';

import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-host-list',
  templateUrl: './host-list.component.html',
  styleUrls: ['./host-list.component.css']
})
export class HostListComponent implements OnInit {

  // @ViewChild('hdrTpl') hdrTpl: TemplateRef<any>;
  // @ViewChild('editTmpl') editTmpl: TemplateRef<any>;

  hostGeneralList: HostGeneral[];
  hostDetailList: HostDetail[];

  closeResult: string;

  constructor(private getHostListService: GetHostListService, private modalService: NgbModal) { }

  ngOnInit() {
    setInterval(() => {
      this.hostGeneralList = [];
      this.getHostListService.getHostList()
        .then(hostGeneralList => this.hostGeneralList = hostGeneralList);
    }, 1000 * 60);
  }
}
