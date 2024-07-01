import { Options } from './options';

export interface Questions {
  _id?: string;
  text: string;
  options: Options[];
}

export interface newQuizQuestions{
text: string;
options:string[];
}
