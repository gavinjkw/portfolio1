import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){}

  submitEmail(emailData) {
    return this._http.post('/api/submit-form', emailData.value)
  }
}
