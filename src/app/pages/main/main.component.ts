import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/core/services/user.service';
import { SharedService } from 'src/app/core/services/shared.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  user: User | null | undefined;
  errorMessage: string = '';
  constructor(private userService: UserService, private sharedService:SharedService) {
    this.getdetails();
  }
  getdetails() {
    this.userService.getUser().subscribe({
      next: (response) => {
        this.user = response;
        this.sharedService.changeUser(this.user!);
      },
      error: (error) => {
        console.error('There was an error retrieving the quiz details!', error);
          this.errorMessage = error.message || 'Sorry, there was a problem loading the quiz. Please try again later.';
      },
    });
  }

}
