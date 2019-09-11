import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {department} from '../models/departments.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker'
import { Employee } from '../Models/employee.model'

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  previewphoto:boolean=false;
  employeeForm:boolean=false;
  Datepickerconfig:Partial<BsDatepickerConfig>;
  departments:department[]=[
  {id:1,name:'Help Desk'},
  {id:2,name:'IT'},
  {id:3,name:'Payroll'},
  {id:4,name:'HR'}
];
employee:Employee={
  id:null,
  name:null,
  gender:null,
  email:null,
  phonenumber:null,
  contactPreference:null,
  isActive:null,
  dateofBirth:null,
  department:null,
  photoPath:null
};


  constructor() {
this.Datepickerconfig=Object.assign(
  {},
  {containerClass:'theme-dark-blue',
  adaptivePosition: true   
});
  }
togglephotopreview(){
  this.previewphoto=!this.previewphoto;
}




  ngOnInit() {
  }
saveEmployee(empform:NgForm): void{
console.log(empform);
}
}
