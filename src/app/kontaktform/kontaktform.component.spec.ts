import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontaktformComponent } from './kontaktform.component';

describe('KontaktformComponent', () => {
  let component: KontaktformComponent;
  let fixture: ComponentFixture<KontaktformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KontaktformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KontaktformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
