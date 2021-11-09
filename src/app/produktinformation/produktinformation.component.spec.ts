import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduktinformationComponent } from './produktinformation.component';

describe('ProduktinformationComponent', () => {
  let component: ProduktinformationComponent;
  let fixture: ComponentFixture<ProduktinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduktinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduktinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
