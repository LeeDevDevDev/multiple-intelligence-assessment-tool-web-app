import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/common/auth.service';
import { UserService } from '../../services/user.service';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isSigningIn = false;
  signInForm: FormGroup;
  signInError: string;

  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group(
      {
        email: [null, [Validators.email, Validators.required]],
        password: [null, [Validators.required]]
      },
      { updateOn: 'submit' }
    );
  }

  onSignInSubmit() {
    for (const i in this.signInForm.controls) {
      if (this.signInForm.controls) {
        this.signInForm.controls[i].markAsDirty();
        this.signInForm.controls[i].updateValueAndValidity();
      }
    }
    if (this.signInForm.invalid) {
      return;
    }
    this.isSigningIn = true;

    this.userService
      .getUserByEmail(this.signInForm.controls.email.value)
      .pipe(take(1))
      .subscribe(userRes => {
        if (userRes[0].role === 'student') {
          this.signInError = "The account entered is a student's account";
          this.isSigningIn = false;
          return;
        }

        this.signIn();
      });
  }

  private signIn() {
    this.authService
      .signIn(
        this.signInForm.controls.email.value,
        this.signInForm.controls.password.value
      )
      .then(res => {
        this.signInError = '';
        this.authService.user$.subscribe(user => {
          this.router.navigate(['/home']);
        });
      })
      .catch(err => {
        if (err.code === 'auth/wrong-password') {
          this.signInError = 'Wrong email or password.';
        } else if (err.code === 'auth/user-not-found') {
          this.signInError = 'Email is not in use.';
        }
      })
      .finally(() => {
        this.isSigningIn = false;
      });
  }
}
