import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Androidchild2Component } from './androidchild2.component';

describe('Androidchild2Component', () => {
  let component: Androidchild2Component;
  let fixture: ComponentFixture<Androidchild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Androidchild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Androidchild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
