import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable, catchError } from 'rxjs';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient,private errorHandler: ErrorHandlerService) {}

  url: string = 'http://localhost:3001';

  createUser(userData: User): Observable<User> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<User>(`${this.url}/user/create`,userData,{headers}).pipe(catchError((error: HttpErrorResponse) => {
      return this.errorHandler.handleError(error);
    }))

  }

  loginUser(username:string,password:string):Observable<any>{
    const userdata = {username:username,password:password}
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<User>(`${this.url}/user/login`,userdata,{headers}).pipe(catchError((error: HttpErrorResponse) => {
      return this.errorHandler.handleError(error);
    }))
  }

  getUser():Observable<User>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<User>(`${this.url}/user/details`,{headers})
  }


}
