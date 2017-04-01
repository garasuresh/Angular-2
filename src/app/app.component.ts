import { Component, OnInit } from '@angular/core';
import { PatientService } from './patient.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ PatientService ]
})
export class AppComponent implements OnInit {

    title = 'app works!';
    user = {};

    users = [];
    families = [];

    constructor(private _patientService: PatientService){}

    ngOnInit(){
        this._patientService.getUserDetails().subscribe(resData => this.users = resData);
        this._patientService.getFamilies().subscribe(resData => this.families = resData.results);

        console.log(this.families);
    }

    // Edit user details
    editUser(userData) {
        this.user = userData;
    }

    // Show details
    showDetails(userData){
        this.user = userData;
    }

    // Submit and get user data
    userFormSubmitHandler(user: any) {
        user.id = this.users.length + 1;
        this.users.push(user);
    }
}
