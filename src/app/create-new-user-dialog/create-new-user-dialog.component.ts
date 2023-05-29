import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-new-user-dialog',
  templateUrl: './create-new-user-dialog.component.html',
  styleUrls: ['./create-new-user-dialog.component.scss']
})
export class CreateNewUserDialogComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  submitUser(): void {
    if (this.userForm.valid) {
      const user = { name: this.userForm.value.name };
      this.http.post('/api/setuser', user).subscribe(() => {
        window.location.reload();
      });
    }
  }
}
