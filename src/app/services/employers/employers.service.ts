import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EndpointService } from '../endpoint.service';
import { Observable, throwError, catchError, BehaviorSubject, tap, delay } from 'rxjs';
import { Employers } from './employersRequest';

@Injectable({
  providedIn: 'root'
})
export class EmployersService {

  constructor(private http: HttpClient, private endpointService: EndpointService) { }
  getEmployers(): Observable<any> {
    //pause 3 seconds
    const url = `${this.endpointService.getEndpoint()}employers/listar`;
    return this.http.get(url, { responseType: 'json' }).pipe(
      catchError(this.handleError),delay(1500)
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

}
