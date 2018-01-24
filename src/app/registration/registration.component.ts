import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: any = {};
  username: any;
  password: any;
  constructor() { 
    this.user.username = "Simon";
  }

  ngOnInit() {
  }

  submitData() {
    var data = {
      username: this.user.username,
      password: this.user.password
    }

    console.log(data);

  }

}
