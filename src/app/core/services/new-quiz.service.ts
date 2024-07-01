import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { newQuiz } from '../interfaces/quiz';
import { newQuizQuestions } from '../interfaces/questions';

@Injectable({
  providedIn: 'root',
})
export class NewQuizService {
  constructor(private fb: FormBuilder) {}
  createQuizForm(quiz: newQuiz): FormGroup {
    const questionFormGroups = quiz.questions.map((question) =>
      this.createQuestionFormGroup(question)
    );

    return this.fb.group({
      quizId: [quiz._id],
      questions: this.fb.array(questionFormGroups),
    });
  }

  private createQuestionFormGroup(question: newQuizQuestions): FormGroup {
    const optionsFormArray = this.fb.array(
      question.options.map((option) => this.fb.control(false))
    );

    return this.fb.group({
      text: [question.text],
      options: optionsFormArray,
    });
  }
}
