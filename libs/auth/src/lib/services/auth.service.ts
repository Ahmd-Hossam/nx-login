import { User } from '@duncanhunter/data-models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

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

  constructor(private httpClient: HttpClient) {
    const user: any = localStorage.getItem('user');
    if (user) {
      this.userSubject$.next(user);
    }
  }
  login(authenticate: any): Observable<any> {
    return this.httpClient
      .post('http://localhost:3000/login', authenticate)
      .pipe(
        tap((user: any) => {
          this.userSubject$.next(user);
          localStorage.setItem('user', JSON.stringify(user));
        })
      );
  }
}
