import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import { IndexInfo } from './index-info'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  private toggleAlertUrl = "http://172.16.15.146:8080/api/dismissAlert"
  constructor(private http: Http) { }

  dismissAlert(alertId: number): Promise<number> {
    return this.http.get(this.toggleAlertUrl, { params: { 'alertId': alertId, 'value': true } })
      .toPromise()
      .then(response => response.status);
  }

}
