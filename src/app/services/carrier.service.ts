import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import appConfig from 'appConfig';

function handleError(error: HttpErrorResponse) {
  console.log(error);
  if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
  }
  // Return an observable with a user-facing error message.
  return throwError(
    'Something bad happened; please try again later.');
}

@Injectable({
  providedIn: 'root'
})

export class CarrierService {
  private path = '/tracking/simple/v2/json';

  constructor(private http: HttpClient) {}

  getByID(id: string): Observable<any> {
    return this.http.get<any>(`${appConfig.apiUrl}${this.path}/paynumber/${id}`);
    // return this.http.get<any>(`${appConfig.apiUrl}${this.path}/paynumber/15345592`);

  }
}

