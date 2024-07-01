import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private snackBar: MatSnackBar) { }
  public handleError(error: HttpErrorResponse) {
    let errorMessage = error.error.message||'An unknown error occurred!';
    this.snackBar.open(errorMessage, 'Close', {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
    return throwError(() => new Error(errorMessage));
  }
}
