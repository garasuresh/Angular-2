import { Injectable } from '@angular/core';
import {Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class PatientService {

  private _url: string = 'apiData/employees.json';
  private _headers = {
        'X-Parse-Application-Id': "KdJjWiZBfWvlJ6X1vhT5HmgR2xM35lba99ZxZghC",
        'X-Parse-REST-API-Key': "ZZLDfBFe7eSmvKAKWa5Ve3Nq3CR86nBB5u53Jx43",
        'Content-Type': 'application/json'
  };

  constructor(private _http: Http){}

  getUserDetails(){
    return this._http.get(this._url).map((res:Response) => res.json());
  }

  getFamilies() {
    let headers = new Headers(this._headers);
    let familiesUrl = "https://parseapi.back4app.com/classes/families";
    return this._http.get(familiesUrl, {headers: headers}).map((res:Response) => res.json());
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
