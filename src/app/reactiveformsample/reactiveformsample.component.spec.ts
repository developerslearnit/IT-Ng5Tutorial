import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveformsampleComponent } from './reactiveformsample.component';

describe('ReactiveformsampleComponent', () => {
  let component: ReactiveformsampleComponent;
  let fixture: ComponentFixture<ReactiveformsampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveformsampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveformsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
