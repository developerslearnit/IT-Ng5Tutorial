import { Person } from './../Person';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { GithubService } from '../Github.service';
//import { Person } from '../Person';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.css']
})
export class HelloworldComponent implements OnInit {
  users: any[];
  constructor(private githubService: GithubService) {


  }

  ngOnInit() {
    this.githubService.getUsers().subscribe((val) => {
      this.users = val.json();
      console.log("this.users",this.users);
    });
  }


}
