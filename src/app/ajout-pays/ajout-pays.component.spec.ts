import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPaysComponent } from './ajout-pays.component';

describe('AjoutPaysComponent', () => {
  let component: AjoutPaysComponent;
  let fixture: ComponentFixture<AjoutPaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutPaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
