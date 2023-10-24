import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private _snackBar: MatSnackBar) { }
  openSnackBar(msg: any, action: string = "Done") {
    this._snackBar.open(msg, action, {
      duration: 10000,
      verticalPosition: 'top',
    });
  }
}
