import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-create-accountmd',
  templateUrl: './create-accountmd.component.html',
  styleUrls: ['./create-accountmd.component.scss']
})
export class CreateAccountmdComponent {
  @Output() createAccount = new EventEmitter<any>();
  @Output() cancelCreate = new EventEmitter<void>();
  account: any = { name: '', balance: 0 };

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onSubmit() {
    if (this.account.name && this.account.balance) {
      const userId = 'replace-with-actual-user-id'; // Replace with the actual user ID

      this.http.post(`/api/createaccount/${userId}`, this.account).subscribe(
        (response: any) => {
          // Account created successfully
        //  this.accountCreated.emit(response);
          this.account = { name: '', balance: 0 };
        },
        (error: any) => {
          // Handle error
        }
      );
    }
  }

  cancel() {
    this.cancelCreate.emit();
  }
}
