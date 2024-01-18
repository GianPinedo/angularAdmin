import { Injectable } from '@angular/core';
import { API_ENDPOINT } from '../../config';

@Injectable({
  providedIn: 'root',
})
export class EndpointService {
  getEndpoint(): string {
    return API_ENDPOINT;
  }
}
