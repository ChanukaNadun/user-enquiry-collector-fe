import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEnquiry } from './update-enquiry';

describe('UpdateEnquiry', () => {
  let component: UpdateEnquiry;
  let fixture: ComponentFixture<UpdateEnquiry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateEnquiry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEnquiry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
