import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Answers } from 'src/app/core/interfaces/answers';
import { Attempt } from 'src/app/core/interfaces/attempt';
import { Questions } from 'src/app/core/interfaces/questions';
import { GetQuiz, Quiz } from 'src/app/core/interfaces/quiz';
import { User } from 'src/app/core/interfaces/user';
import { QuizService } from 'src/app/core/services/quiz.service';
import { SharedService } from 'src/app/core/services/shared.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent {
  quizDetail: GetQuiz|null|undefined;
  questions:Questions[]=[]
  quizId: string | null = null;
  answers: Answers[]=[]
  errorMessage: string = '';
  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.quizId = params.get('quizId');
      if (this.quizId) {
        this.quizService.getQuiz(this.quizId).subscribe({
          next: (response) => {
            this.quizDetail = response;
            this.questions = response.questions;
            this.answers = response.userAnswer
          },
          error: (error) => {
            console.error('There was an error retrieving the quiz details!', error);
              this.errorMessage = error.message || 'Sorry, there was a problem loading the quiz. Please try again later.';
          },
        });
      }
    });
  }
}
