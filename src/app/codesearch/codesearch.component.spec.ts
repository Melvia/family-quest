import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodesearchComponent } from './codesearch.component';

describe('CodesearchComponent', () => {
  let component: CodesearchComponent;
  let fixture: ComponentFixture<CodesearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodesearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
