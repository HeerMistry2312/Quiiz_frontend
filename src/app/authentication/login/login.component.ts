import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from '../../core/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private snackbar: MatSnackBar,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
      this.userService.loginUser(username, password).subscribe({
        next: (response) => {
          localStorage.setItem('token', response.user);
          this.snackbar.open(`${username} is Logged In Successfull`, 'Close', {
            duration: 300,
          });

          this.router.navigate(['/main']);
        },
        error: (error) => {
          console.error('There was an error retrieving the quiz details!', error);
            this.errorMessage = error.message || 'Sorry, there was a problem loading the quiz. Please try again later.';
        },
      });
    }
  }
}
