import { Component, OnInit } from '@angular/core';
import { AuthService } from '@duncanhunter/auth';
import { Observable } from 'rxjs';
import { User } from '@duncanhunter/data-models';

@Component({
  selector: 'duncanhunter-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'layout';
  user$: Observable<User> | undefined;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.user$ = this.authService.user$;
  }
}
