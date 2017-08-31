import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import { IndexInfo } from './index-info'

@Injectable()
export class GetIndexInfoService {
  private indexInfoUrl = "http://10.205.208.47:8080/api/getIndexInfo"
  constructor(private http: Http) { }

  getIndexInfo(): Promise<IndexInfo> {
    return this.http.get(this.indexInfoUrl)
      .toPromise()
      .then(response => response.json().data as IndexInfo)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
