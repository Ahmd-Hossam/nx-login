import { User } from '@duncanhunter/data-models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject$ = new BehaviorSubject<User>({
    username: '',
    id: 0,
    country: '',
    token: '',
    role: '',
  });
  user$ = this.userSubject$.asObservable();

  constructor(private httpClient: HttpClient) {}
  login(authenticate: any): Observable<any> {
    return this.httpClient.post('http://localhost:3000/login', authenticate);
  }
}
