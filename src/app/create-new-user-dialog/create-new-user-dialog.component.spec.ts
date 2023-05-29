import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewUserDialogComponent } from './create-new-user-dialog.component';

describe('CreateNewUserDialogComponent', () => {
  let component: CreateNewUserDialogComponent;
  let fixture: ComponentFixture<CreateNewUserDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNewUserDialogComponent]
    });
    fixture = TestBed.createComponent(CreateNewUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
