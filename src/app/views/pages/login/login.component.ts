import { Component } from '@angular/core';
import { FormBuilder,FormsModule,ReactiveFormsModule ,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/auth/login.service';
import { LoginRequest } from '../../../services/auth/lohginRequest';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLoading: boolean = false;
  errorServerMsg: string = '';
  errorMsg: string = '';
  invalidCredentials: boolean = false;
  loginForm = this.formBuilder.group({
      usuario: ['47265268',[Validators.required]],
      password: ['', Validators.required]
  });
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
    ) {}
  
  ngOnInit(): void {
  }
  
  login(){
    if(this.loginForm.valid){
      this.isLoading = true;
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
        next: response => {
          var data = (response);
          if(data.success){
            this.router.navigate(['/dashboard']);
          }else{
            this.errorMsg = data.message;
            this.invalidCredentials = true;
          }
        },
        error: error => {
          console.log(error);
          this.errorServerMsg = error.message;
        },
        complete: () => {
          console.log("complete");
          this.isLoading = false;
        }
      });
      this.loginForm.reset();
    }else{
      this.loginForm.markAllAsTouched();
      alert("Formulario no valido");
    }
  }
}
