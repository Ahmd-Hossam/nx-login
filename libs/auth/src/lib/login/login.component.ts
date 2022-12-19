import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs';
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
    private toastr: ToastrService
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
        console.log('respons is ', res);
        this.toastr.success('logged in successfully!');
      },
      (err) => {
        this.toastr.error(`${err.message}`.split(':')[3]);
      }
    );
  }
}
