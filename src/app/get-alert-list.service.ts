import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import { AlertDetail } from './alert-detail';

@Injectable()
export class GetAlertListService {

  private alertListUrl = "http://10.205.208.47:8080/api/getAlertList";
  private alertHistListUrl = "http://10.205.208.47:8080/api/getAlertHistory?length=24";

  constructor(private http: Http) { }

  getAlertList(): Promise<AlertDetail[]> {
    return this.http.get(this.alertListUrl)
      .toPromise()
      .then(response => response.json().data as AlertDetail[])
      .catch(this.handleError);
  }

  getAlertHistList(): Promise<AlertDetail[]> {
    return this.http.get(this.alertHistListUrl)
      .toPromise()
      .then(response => response.json().data as AlertDetail[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
