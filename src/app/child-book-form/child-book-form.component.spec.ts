import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildBookFormComponent } from './child-book-form.component';

describe('ChildBookFormComponent', () => {
  let component: ChildBookFormComponent;
  let fixture: ComponentFixture<ChildBookFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildBookFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildBookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
