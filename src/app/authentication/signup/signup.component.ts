import { Component, OnInit } from '@angular/core';
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
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  signUpForm: FormGroup;
  errorMessage: string = '';
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private snackbar: MatSnackBar
  ) {
    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      this.userService.createUser(this.signUpForm.value).subscribe({
        next: (response) => {
          this.snackbar.open(
            `${response.username} is Registered Successfully`,
            'Close',
            {
              duration: 3000,
            }
          );
          this.router.navigate(['/login']);
        },
        error: (error)=>{
          console.error('There was an error retrieving the quiz details!', error);
            this.errorMessage = error.message || 'Sorry, there was a problem loading the quiz. Please try again later.';
        }
      });
    }
  }
}
