import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works!';
    user = {};

    users = [
        {"id":1,"name": "Suresh Gara", "age": 27, "email": "suresh.g@comakeit.com"},
        {"id":2,"name": "Santi Kumar", "age": 40, "email": "santi.g@comakeit.com"},
        {"id":3,"name": "Pani", "age": 33, "email": "pani.g@comakeit.com"},
        {"id":4,"name": "PM Liju", "age": 34, "email": "pmliju@comakeit.com"}
    ];

    // Edit user details
    editUser(userData) {
        this.user = userData;
    };

    // Show details
    showDetails(userData){
        this.user = userData;
    };

    // Submit and get user data
    userFormSubmitHandler(user: any) {
        user.id = this.users.length + 1;
        this.users.push(user);
    };
}
