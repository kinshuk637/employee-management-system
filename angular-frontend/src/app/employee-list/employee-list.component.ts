import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { NgFor } from '@angular/common';
import { EmployeeService } from '../employee.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
  
  constructor(private employeeService: EmployeeService){ }

  ngOnInit(): void {
    this.getEmployees();
  }
  
  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      
      this.employees=data;
    });
  }
}
