import { Component, OnInit } from '@angular/core';
import { IndexInfo } from './index-info'
import { GetIndexInfoService } from './get-index-info.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  indexInfo: IndexInfo;

  constructor(private getIndexInfoService: GetIndexInfoService) { }
  
  ngOnInit() {
    this.getIndexInfoService.getIndexInfo()
      .then(indexInfo => this.indexInfo = indexInfo);
  }

}
