import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class PatientService {

  private _url: string = 'apiData/employees.json';
  constructor(private _http: Http){}

  getUserDetails(){
    return this._http.get(this._url).map((res:Response) => res.json());
  }

  listPatients(){
    return [
      {"id":1,"name": "Suresh Gara", "age": 27, "email": "suresh.g@comakeit.com"},
      {"id":2,"name": "Santi Kumar", "age": 40, "email": "santi.g@comakeit.com"},
      {"id":3,"name": "Pani", "age": 33, "email": "pani.g@comakeit.com"},
      {"id":4,"name": "PM Liju", "age": 34, "email": "pmliju@comakeit.com"}
    ];
  }

}
