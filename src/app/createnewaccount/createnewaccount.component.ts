

import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-createnewaccount',
  templateUrl: './createnewaccount.component.html',
  styleUrls: ['./createnewaccount.component.scss']
})
export class CreatenewaccountComponent {
  constructor(public dialogRef: MatDialogRef<CreatenewaccountComponent>) {}

}
