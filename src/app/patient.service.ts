import { Injectable } from '@angular/core';

@Injectable()
export class PatientService {
  listPatients(){
    return [
      {"id":1,"name": "Suresh Gara", "age": 27, "email": "suresh.g@comakeit.com"},
      {"id":2,"name": "Santi Kumar", "age": 40, "email": "santi.g@comakeit.com"},
      {"id":3,"name": "Pani", "age": 33, "email": "pani.g@comakeit.com"},
      {"id":4,"name": "PM Liju", "age": 34, "email": "pmliju@comakeit.com"}
    ];
  }

}
