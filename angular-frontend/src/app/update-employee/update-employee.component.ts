import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute,Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit {
  id: number;
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private router:Router, private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

  updateEmployee() {
    this.employeeService.updateEmployee( this.id, this.employee)
    .subscribe(data => {
      console.log(data);
      this.employee = new Employee();
      this.goToList();
    }, error => console.log(error));
    }

  goToList(){
    this.router.navigate(['/employees']);
  }

  onSubmit() {
    this.updateEmployee();
  } 

}
