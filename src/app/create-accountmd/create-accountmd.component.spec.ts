import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountmdComponent } from './create-accountmd.component';

describe('CreateAccountmdComponent', () => {
  let component: CreateAccountmdComponent;
  let fixture: ComponentFixture<CreateAccountmdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAccountmdComponent]
    });
    fixture = TestBed.createComponent(CreateAccountmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
