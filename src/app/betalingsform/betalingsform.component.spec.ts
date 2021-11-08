import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetalingsformComponent } from './betalingsform.component';

describe('BetalingsformComponent', () => {
  let component: BetalingsformComponent;
  let fixture: ComponentFixture<BetalingsformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetalingsformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetalingsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
