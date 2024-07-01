import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './authentication/signup/signup.component';
import { LoginComponent } from './authentication/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { AuthGuard } from './core/route-guards/auth.guard';
import { ContentComponent } from './pages/main/content/content.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { ScoreComponent } from './pages/score/score.component';
import { NewQuizComponent } from './pages/new-quiz/new-quiz.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/signup',
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: '',
        component: ContentComponent,
        children: [
          { path: '', component: DashboardComponent },
          { path: 'quiz', component: QuizComponent },
          { path: 'startQuiz', component: NewQuizComponent },
          { path: 'score', component: ScoreComponent }
        ],
      },
    ],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
