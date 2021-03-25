import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajComponent } from './maj.component';

describe('MajComponent', () => {
  let component: MajComponent;
  let fixture: ComponentFixture<MajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MajComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
