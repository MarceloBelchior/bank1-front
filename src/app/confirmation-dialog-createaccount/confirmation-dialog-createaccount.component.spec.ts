import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDialogCreateaccountComponent } from './confirmation-dialog-createaccount.component';

describe('ConfirmationDialogCreateaccountComponent', () => {
  let component: ConfirmationDialogCreateaccountComponent;
  let fixture: ComponentFixture<ConfirmationDialogCreateaccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmationDialogCreateaccountComponent]
    });
    fixture = TestBed.createComponent(ConfirmationDialogCreateaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
