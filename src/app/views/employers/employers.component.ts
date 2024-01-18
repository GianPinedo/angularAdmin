import { Component } from '@angular/core';
import { Employers } from '../../services/employers/employersRequest';
import { EmployersService } from '../../services/employers/employers.service';


@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrl: './employers.component.scss'
})
export class EmployersComponent {
  employers: Employers[] = [];
  isLoading = false;
  constructor(private employersService: EmployersService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.employersService.getEmployers().subscribe({
      next: response => {
        this.employers = response.tabla;
      },
      error: error => {
        console.log(error);
      },
      complete: () => {
        this.isLoading = false;
      }
    }
    );
  }
  

  
}
