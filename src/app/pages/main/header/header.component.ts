import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
[x: string]: any;
  constructor(private route: Router) {}
  logout() {
    localStorage.clear();
    this.route.navigate(['/login']);
  }
  startQuiz(){
    this.route.navigate(['main/startQuiz']);
  }
}
