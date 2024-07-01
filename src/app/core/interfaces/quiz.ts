import { Answers } from './answers';
import { Questions, newQuizQuestions } from './questions';

export interface Quiz {
  _id?: string;
  questions: Questions[];
  scores: any;
  title: string;
}
export interface GetQuiz {
  _id?: string;
  title: string;
  score: number;
  userAnswer: Answers[];
  questions: Questions[];
}

export interface newQuiz {
  _id?: string;
  title: string;
  questions: newQuizQuestions[];
}
