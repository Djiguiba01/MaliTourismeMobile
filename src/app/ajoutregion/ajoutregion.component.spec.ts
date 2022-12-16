import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutregionComponent } from './ajoutregion.component';

describe('AjoutregionComponent', () => {
  let component: AjoutregionComponent;
  let fixture: ComponentFixture<AjoutregionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutregionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
