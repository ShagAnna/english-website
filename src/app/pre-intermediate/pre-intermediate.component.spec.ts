import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreIntermediateComponent } from './pre-intermediate.component';

describe('PreIntermediateComponent', () => {
  let component: PreIntermediateComponent;
  let fixture: ComponentFixture<PreIntermediateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreIntermediateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreIntermediateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
