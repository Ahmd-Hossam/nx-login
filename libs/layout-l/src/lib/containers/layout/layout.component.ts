import { Component, OnInit } from '@angular/core';
import { AuthService } from '@duncanhunter/auth';
import { User } from '@duncanhunter/data-models';
import { Observable } from 'rxjs';

@Component({
  selector: 'duncanhunter-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  user$: Observable<User> | undefined;
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.user$ = this.authService.user$;
  }
}
