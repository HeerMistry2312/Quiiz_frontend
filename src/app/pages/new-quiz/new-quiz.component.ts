import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/core/services/quiz.service';
import { Answers, UserAnswers } from '../../core/interfaces/answers';
import { Router } from '@angular/router';
import { Questions, newQuizQuestions } from 'src/app/core/interfaces/questions';
import { newQuiz } from 'src/app/core/interfaces/quiz';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-quiz',
  templateUrl: './new-quiz.component.html',
  styleUrls: ['./new-quiz.component.scss'],
})
export class NewQuizComponent implements OnInit {
  quizDetails: newQuiz;
  quizId: string = '';
  questions: newQuizQuestions[] = [];
  answers: UserAnswers = {};
  formSubmitted: boolean = false;
  errorMessage: string = '';
  constructor(
    private quizService: QuizService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.quizService.newQuiz().subscribe({
      next: (res) => {
        this.quizId = res._id;
        this.quizDetails = res;
        this.quizId = res._id;
        this.questions = res.questions;
      },
    });
  }
  onSubmit(form: any): void {
    this.formSubmitted = true;
    if (form.valid) {
      const data = {
        quizid: this.quizId,
        answers: this.answers,
      };
      this.quizService.getScore(data).subscribe({
        next: (res) => {
          this.snackbar.open('Quiz Submitted Successfully', 'Close', {
            duration: 3000,
          });
          this.router.navigate(['main/score'], {state: {scoreData: res}});
        },
        error: (error) => {
          console.error('There was an error retrieving the quiz details!', error);
            this.errorMessage = error.message || 'Sorry, there was a problem loading the quiz. Please try again later.';
        },
      });
    } else {
      this.snackbar.open('Please Answer all the questions', 'Close', {
        duration: 3000,
      });
    }
  }
}
