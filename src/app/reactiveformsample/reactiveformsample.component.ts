import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../model/user';
import { Group } from '../model/group';
@Component({
  selector: 'app-reactiveformsample',
  templateUrl: './reactiveformsample.component.html',
  styleUrls: ['./reactiveformsample.component.css']
})
export class ReactiveformsampleComponent implements OnInit {
  userFormGroup: FormGroup;
  groups:Array<Group> =[];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.groups.push({
      groupId:1,
      name:"IT"
    });
    this.groups.push({
      groupId:2,
      name:"Account"
    })
    this.groups.push({
      groupId:3,
      name:"Support"
    })
    this.initializeControls();
  }

  initializeControls() {
    this.userFormGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['',Validators.required],
      role:['',Validators.required],
      group:[[]]
    });
  }
  submitData({value,valid}:{value:User,valid:boolean}) {
    console.log(value);
    console.log("Is Valid",valid);
  }

}
