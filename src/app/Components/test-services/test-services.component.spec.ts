import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestServicesComponent } from './test-services.component';

describe('TestServicesComponent', () => {
  let component: TestServicesComponent;
  let fixture: ComponentFixture<TestServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
