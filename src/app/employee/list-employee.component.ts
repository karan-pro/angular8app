import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee.model'
@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
employees:Employee[]=[{
  id:1,
  name:'Mark',
  gender:'Male',
  contactPreference:'Email',
  email:'mark@gmail.com',
  dateofBirth:new Date('12/2/1994'),
  department:'IT',
  isActive:true,
  photoPath:'assets/images/mark.png'
},
{
  id:2,
  name:'John',
  gender:'Male',
  contactPreference:'Email',
  email:'john@gmail.com',
  dateofBirth:new Date('08/22/1995'),
  department:'IT',
  isActive:true,
  photoPath:'assets/images/john.png'
},
{
  id:3,
  name:'Mary',
  gender:'Female',
  contactPreference:'Email',
  email:'mary@gmail.com',
  dateofBirth:new Date('04/13/1990'),
  department:'IT',
  isActive:true,
  photoPath:'assets/images/mary.png'
}
];
  constructor() { }

  ngOnInit() {
  }

}
