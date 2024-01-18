import { Injectable } from '@angular/core';
import { LoginRequest } from './lohginRequest';
import { User } from './user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError, BehaviorSubject, tap } from 'rxjs';
import { EndpointService } from '../endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentUserData: BehaviorSubject<User> =  new BehaviorSubject<User>({id:0,});
  currentUserLoginOn: BehaviorSubject<boolean> =  new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private endpointService: EndpointService) { }
  

  login(credentials: LoginRequest):Observable<any>{
    const endpoint = this.endpointService.getEndpoint();
    var data = {
      "usuario": credentials.usuario,
      "password": credentials.password
    }
    return this.http.post(`${endpoint}usuario/login_bd`, data,
     {responseType: 'json'}).pipe(
        tap((response: any) => {
          if(response.success == true){
            localStorage.setItem('token', response.result);
            this.currentUserLoginOn.next(true);
            this.currentUserData.next(response.user);
            localStorage.setItem('userData', response.user[0].nombres);
          }
        }),
        catchError(this.handleError)
     );
  }
  private handleError(error: HttpErrorResponse){
    if(error.status == 0){
      console.log('An error occurred:', error.error);
    }else{
      console.log(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(()=>{console.log("Algo salio mal")});
  }

  logout(){
    localStorage.removeItem('token');
    this.currentUserLoginOn.next(false);
    this.currentUserData.next({id:0});
  }

  get UserData():Observable<User>{
    return this.currentUserData.asObservable();
  }
 
}
