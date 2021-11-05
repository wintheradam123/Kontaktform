import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetalingAdresseComponent } from './betaling-adresse.component';

describe('BetalingAdresseComponent', () => {
  let component: BetalingAdresseComponent;
  let fixture: ComponentFixture<BetalingAdresseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetalingAdresseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetalingAdresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
