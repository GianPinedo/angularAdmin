import { Component } from '@angular/core';
import { Employers } from '../../services/employers/employersRequest';
import { EmployersService } from '../../services/employers/employers.service';
import { PostulantesService } from '../../services/postulantes/postulantes.service';
import { Postulantes } from '../../services/postulantes/postulanteRequest';


@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrl: './employers.component.scss'
})
export class EmployersComponent {
  employers: Employers[] = [];
  postulantes: Postulantes[] = [];
  isLoading = false;
  constructor(private employersService: EmployersService,private postulantesService: PostulantesService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.postulantesService.getPostulantes().subscribe({
      next: response => {
        this.postulantes = response.tabla;
      },
      error: error => {
        console.log(error);
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
  

  
}
