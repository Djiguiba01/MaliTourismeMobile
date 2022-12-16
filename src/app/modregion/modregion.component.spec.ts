import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModregionComponent } from './modregion.component';

describe('ModregionComponent', () => {
  let component: ModregionComponent;
  let fixture: ComponentFixture<ModregionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModregionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
