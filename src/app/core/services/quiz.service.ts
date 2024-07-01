import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetQuiz, Quiz, newQuiz } from '../interfaces/quiz';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}
  url: string = 'http://localhost:3001';
  getQuiz(id: string): Observable<GetQuiz> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<GetQuiz>(`${this.url}/user/quiz/${id}`, { headers });
  }

  newQuiz(): Observable<newQuiz> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<newQuiz>(`${this.url}/user/quiz`, { headers });
  }
  getScore(data:any):Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.url}/user/score`,data, { headers });
  }
}
