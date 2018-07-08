import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Androidchild1Component } from './androidchild1.component';

describe('Androidchild1Component', () => {
  let component: Androidchild1Component;
  let fixture: ComponentFixture<Androidchild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Androidchild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Androidchild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
