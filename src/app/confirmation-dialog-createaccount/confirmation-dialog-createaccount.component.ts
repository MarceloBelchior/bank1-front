import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog-createaccount',
  templateUrl: './confirmation-dialog-createaccount.component.html',
  styleUrls: ['./confirmation-dialog-createaccount.component.scss']
})
export class ConfirmationDialogCreateaccountComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmationDialogCreateaccountComponent>) {}

}
