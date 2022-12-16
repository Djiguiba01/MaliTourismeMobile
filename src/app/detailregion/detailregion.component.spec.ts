import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailregionComponent } from './detailregion.component';

describe('DetailregionComponent', () => {
  let component: DetailregionComponent;
  let fixture: ComponentFixture<DetailregionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailregionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
