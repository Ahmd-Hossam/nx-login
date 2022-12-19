import { Router } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'duncanhunter-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() submit: EventEmitter<any> = new EventEmitter();
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.build();
  }
  build() {
    this.form = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  login() {
    console.log('form value', this.form.value);
    this.submit.emit(this.form.value);
    this.authService.login(this.form.value).subscribe(
      (res) => {
        this.toastr.success('logged in successfully!');
        this.router.navigate(['/products']);
        this.form.reset();
      },
      (err) => {
        this.toastr.error(`${err.message}`.split(':')[3]);
      }
    );
  }
}
