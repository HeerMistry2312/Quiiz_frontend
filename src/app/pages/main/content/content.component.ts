import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { User } from 'src/app/core/interfaces/user';
import { SharedService } from '../../../core/services/shared.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  userDetail: User | null | undefined;

  constructor(private sharedService: SharedService) {}
  ngOnInit(): void {
    this.sharedService.currentUser.subscribe(user => {
      this.userDetail = user;
    });
  }

}
