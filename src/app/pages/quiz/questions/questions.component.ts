import { Component, Input, OnChanges } from '@angular/core';
import { Questions } from 'src/app/core/interfaces/questions';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent{
  @Input() questions: Questions[] = [];
  @Input() answers: any
  constructor() {}
  isUserAnswerCorrect(index: number): boolean {
    const question = this.questions[index];
    const userAnswer = this.answers[index]?.answer;
    return question.options.some(option => option.isCorrect && option.text === userAnswer);
  }

  getCorrectAnswer(index: number): string {
    const question = this.questions[index];
    const correctOption = question.options.find(option => option.isCorrect);
    return correctOption ? correctOption.text : '';
  }
}
