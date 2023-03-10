import { Component, OnInit } from '@angular/core';
import { AuthService } from '@duncanhunter/auth';
import { User } from '@duncanhunter/data-models';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'duncanhunter-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  user$: Observable<User> | undefined;
  constructor(
    private authService: AuthService,
    private toastr: ToastrService
  ) {}
  ngOnInit() {
    this.user$ = this.authService.user$;
  }

  logout() {
    localStorage.clear();
    this.toastr.success('Logged out successfully !');
  }
}
