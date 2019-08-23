import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticPageLayoutComponent } from './static-page-layout.component';

describe('StaticPageLayoutComponent', () => {
  let component: StaticPageLayoutComponent;
  let fixture: ComponentFixture<StaticPageLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticPageLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
