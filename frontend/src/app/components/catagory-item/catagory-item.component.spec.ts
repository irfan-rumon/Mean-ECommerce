import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoryItemComponent } from './catagory-item.component';

describe('CatagoryItemComponent', () => {
  let component: CatagoryItemComponent;
  let fixture: ComponentFixture<CatagoryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatagoryItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatagoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
