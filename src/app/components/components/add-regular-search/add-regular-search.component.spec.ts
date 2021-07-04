import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRegularSearchComponent } from './add-regular-search.component';

describe('AddRegularSearchComponent', () => {
  let component: AddRegularSearchComponent;
  let fixture: ComponentFixture<AddRegularSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRegularSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRegularSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
