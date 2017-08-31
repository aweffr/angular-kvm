import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import { HostDetail } from './host-detail';
import { HostGeneral } from './host-general';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GetHostListService {
  private hostListUrl = "http://172.16.15.146:8080/api/getHostList"
  private hostDetailUrl = 'http://172.16.15.146:8080/api/getHostDetail'
  private hostListDetailUrl = 'http://172.16.15.146:8080/api/getData'

  constructor(private http: Http) { }

  getHostList(): Promise<HostGeneral[]> {
    return this.http.get(this.hostListUrl)
      .toPromise()
      .then(response => response.json().data as HostGeneral[])
      .catch(this.handleError);
  }

  getHostDetail(hostIP: string): Promise<HostDetail> {
    return this.http.get(this.hostDetailUrl, { params: { 'hostIP': hostIP } })
      .toPromise()
      .then(response => response.json().data as HostDetail)
      .catch(this.handleError);
  }

  getHostDetailList(): Promise<HostDetail[]> {
    return this.http.get(this.hostListDetailUrl)
      .toPromise()
      .then(response => response.json().data as HostDetail[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
