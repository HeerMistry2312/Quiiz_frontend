import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { LoginComponent } from './authentication/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthUserInterceptor } from './interceptors/auth-user.interceptor';
import { PagesModule } from './pages/pages.module';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
@NgModule({
  declarations: [AppComponent, SignupComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PagesModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
  ],
  providers: [
    MatSnackBar,
    { provide: HTTP_INTERCEPTORS, useClass: AuthUserInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
