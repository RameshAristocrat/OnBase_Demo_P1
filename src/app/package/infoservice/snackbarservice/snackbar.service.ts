import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarInfoService {
  sucessHorizontalPosition: MatSnackBarHorizontalPosition = 'right';
  sucessVerticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private _snackBar: MatSnackBar) { }
  durationInSeconds = 0;
  openSucessSnackBar(info) {
    this._snackBar.open(info,'X', {
      duration: this.durationInSeconds * 500,
      horizontalPosition: this.sucessHorizontalPosition,
      verticalPosition: this.sucessVerticalPosition
    });
  }
}
