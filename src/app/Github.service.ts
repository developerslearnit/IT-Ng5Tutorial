import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GithubService {
     constructor(private http: Http) { }


     getUsers(){
          return this.http.get("https://api.github.com/users");
     }

     getUser(username:string){
          return this.http.get(`https://api.github.com/users/${username}`);
     }
     
}