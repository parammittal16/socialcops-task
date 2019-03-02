import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StAboutComponent } from './st-about.component';

describe('StAboutComponent', () => {
  let component: StAboutComponent;
  let fixture: ComponentFixture<StAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
