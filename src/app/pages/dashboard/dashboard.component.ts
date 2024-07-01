import { Component } from '@angular/core';
import { Attempt } from 'src/app/core/interfaces/attempt';
import { User } from 'src/app/core/interfaces/user';
import { SharedService } from 'src/app/core/services/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  userDetail: User | null | undefined;
  attempts: Attempt[] = [];
  constructor(private sharedService: SharedService) {}
  ngOnInit(): void {
    this.sharedService.currentUser.subscribe((user) => {
      this.userDetail = user;
      this.attempts = user? user.attempts : [];
    });
  }
}
