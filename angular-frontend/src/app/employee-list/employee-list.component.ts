import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { NgFor } from '@angular/common';
import { EmployeeService } from '../employee.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [NgFor],
  providers:[HttpClient,HttpClientModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{

  employees: Employee[];
  
  constructor(private employeeService: EmployeeService, private router: Router){ }

  ngOnInit(): void {
    this.getEmployees();
  }
  
  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      
      this.employees=data;
    });
  }

  employeeDetails(id: number){
    this.router.navigate(['employee-details',id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee',id]);
  }

  deleteEmployee(id: number){
    const isConfirmed = window.confirm('Are you sure you want to delete this record?');
    if (isConfirmed) {
      this.employeeService.deleteEmployee(id).subscribe(data => {
        console.log(data);
        this.getEmployees();
      });
    }
  }
}
