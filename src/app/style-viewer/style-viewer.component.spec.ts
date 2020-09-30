import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleViewerComponent } from './style-viewer.component';

describe('StyleViewerComponent', () => {
  let component: StyleViewerComponent;
  let fixture: ComponentFixture<StyleViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
