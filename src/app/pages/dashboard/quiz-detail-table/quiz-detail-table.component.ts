import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Attempt } from 'src/app/core/interfaces/attempt';

@Component({
  selector: 'app-quiz-detail-table',
  templateUrl: './quiz-detail-table.component.html',
  styleUrls: ['./quiz-detail-table.component.scss'],
})
export class QuizDetailTableComponent {
  @Input() attempts: Attempt[] = [];
  constructor(private router:Router) {
  }
  showQuiz(id:string){
    this.router.navigate(['/main/quiz',{quizId: id}])
  }
}
