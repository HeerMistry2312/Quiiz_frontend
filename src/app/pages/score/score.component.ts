import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Score } from 'src/app/core/interfaces/score';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {
  scoreData: Score;
  scoreMessage: string;
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.scoreData = navigation.extras.state['scoreData'];
    }
  }
  ngOnInit(): void {
    if (this.scoreData) {
      const score = this.scoreData.score;
      if (score > 90) {
        this.scoreMessage = 'Well done!';
      } else if (score > 60) {
        this.scoreMessage = 'Good job!';
      } else if (score > 50) {
        this.scoreMessage = 'Nice try!';
      } else if (score >= 30) {
        this.scoreMessage = 'Need to improve.';
      } else {
        this.scoreMessage = 'Work harder!';
      }
    }
  }
}
