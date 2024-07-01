import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { ContentComponent } from './main/content/content.component';
import { FooterComponent } from './main/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuizComponent } from './quiz/quiz.component';
import { ScoreComponent } from './score/score.component';
import { QuizDetailTableComponent } from './dashboard/quiz-detail-table/quiz-detail-table.component';
import { QuestionsComponent } from './quiz/questions/questions.component';
import { NewQuizComponent } from './new-quiz/new-quiz.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    DashboardComponent,
    QuizComponent,
    ScoreComponent,
    QuizDetailTableComponent,
    QuestionsComponent,
    NewQuizComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    FormsModule,
  ],
})
export class PagesModule {}
