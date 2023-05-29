import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  standalone: true,
  imports: [MatTableModule],
  // styleUrls: ['./user.component.css'] // Comment out or remove this line
})
export class UserComponent implements OnInit {
  users!: any[];
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadUsers();
  }
  openUserDialog(): void {
    const name = prompt('Enter name:');
    if (name) {
      const user = { name: name };
      this.http.post('http://localhost:5115/api/User/Users', user).subscribe(() => {
        this.loadUsers();
      });
    }
  }



  goToAccountPage(userId: number): void {
    this.router.navigate(['/account', userId]);
  }
  loadUsers(): void {
    this.http.get<any[]>('http://localhost:5115/api/User/Users')
      .subscribe(users => {
        this.users = users;
        this.snackBar.open('User Api worked as propely', 'Close', {
          duration: 3000 // Specify the duration in milliseconds
        });
      },
      error => {
        this.snackBar.open('Error to load Users ', 'Close', {
          duration: 3000 // Specify the duration in milliseconds
        });
      });
  }
}
