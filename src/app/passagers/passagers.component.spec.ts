import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagersComponent } from './passagers.component';

describe('PassagersComponent', () => {
  let component: PassagersComponent;
  let fixture: ComponentFixture<PassagersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassagersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
