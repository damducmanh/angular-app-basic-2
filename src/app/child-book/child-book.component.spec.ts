import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildBookComponent } from './child-book.component';

describe('ChildBookComponent', () => {
  let component: ChildBookComponent;
  let fixture: ComponentFixture<ChildBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
