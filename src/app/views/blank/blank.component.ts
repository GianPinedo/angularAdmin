import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';
import { User } from 'src/app/services/auth/user';
@Component({
  selector: 'app-blank',
  standalone: true,
  imports: [],
  templateUrl: './blank.component.html',
  styleUrl: './blank.component.scss'
})
export class BlankComponent {
  nombreUsuario?: string = '';
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    //get usrdata from localstorage
    var userData = localStorage.getItem('userData');
    if(userData){
      this.nombreUsuario = userData;
    }
  }
  
}
