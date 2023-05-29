import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { CurrencyPipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogCreateaccountComponent } from '../confirmation-dialog-createaccount/confirmation-dialog-createaccount.component';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  standalone: true,
  imports: [MatTableModule],
})




export class AccountComponent implements OnInit {
  userId!: string ; // Change the type to string for GUID
  accounts!: any[] ;
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol','demo-delete'];
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['userId']; // Extract the userId from the route parameters as a string
      this.loadAccounts(this.userId); // Call the method to load the accounts
    });
  }
  openConfirmationDialog(accountid: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.deleteAccount(accountid);
      }
    });
  }


  openNewAccountConfirmationDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogCreateaccountComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        const data = { UserId: this.userId  };
        this.http.post(`http://localhost:5115/api/Account/Create`,data).subscribe(() => {
          this.snackBar.open('Create success', 'Close', {
            duration: 3000 // Specify the duration in milliseconds
          });
          this.loadAccounts(this.userId);
        }, error => {
          this.snackBar.open(error.error, 'Close', {
            duration: 3000 // Specify the duration in milliseconds
          });
        });
      }
    });
  }

  deleteAccount(accountid: string): void {
    const data = { UserId: this.userId, AccountId: accountid  };
    this.http.post(`http://localhost:5115/api/Account/${this.userId}/DeleteAccount`,data).subscribe(() => {
      this.snackBar.open('Delete success', 'Close', {
        duration: 3000 // Specify the duration in milliseconds
      });
      this.loadAccounts(this.userId);
    }, error => {
      this.snackBar.open(error.error, 'Close', {
        duration: 3000 // Specify the duration in milliseconds
      });
    });
  }

  openWithdrawDialog(accountid: string): void {
    const balance = prompt('Enter value of withdraw:');
    if (balance) {

      const data = { balance: balance };
      this.http.post(`http://localhost:5115/api/Account/${accountid}/${balance}/withdraw`, data).subscribe(() => {
        this.snackBar.open('Withdraw success', 'Close', {
          duration: 3000 // Specify the duration in milliseconds
        });
        this.loadAccounts(this.userId);
      }, error => {
        this.snackBar.open(error.error, 'Close', {
          duration: 3000 // Specify the duration in milliseconds
        });
      });

    }
  }

  openDepositDialog(accountid: string): void {
    const balance = prompt('Enter value of deposit:');
    if (balance) {

      const data = { balance: balance };
      this.http.post(`http://localhost:5115/api/Account/${accountid}/${balance}/deposit`, data).subscribe(() => {
        this.snackBar.open('Withdraw success', 'Close', {
          duration: 3000 // Specify the duration in milliseconds
        });
        this.loadAccounts(this.userId);
      }, error => {
        this.snackBar.open(error.error, 'Close', {
          duration: 3000 // Specify the duration in milliseconds
        });
      });

    }
  }

  loadAccounts(userId: string): void {
    const url = `http://localhost:5115/api/Account/${userId}`;
    this.http.get<any[]>(url).subscribe(
      accounts => {
        this.accounts = accounts;
        this.snackBar.open('Data is load', 'Close', {
          duration: 3000 // Specify the duration in milliseconds
        });
      },
      error => {
        this.snackBar.open('Your message here', 'Close', {
          duration: 3000 // Specify the duration in milliseconds
        });
      }
    );
  }
}
