import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartoonDetailPageComponent } from './cartoon-detail-page.component';

describe('CartoonDetailPageComponent', () => {
  let component: CartoonDetailPageComponent;
  let fixture: ComponentFixture<CartoonDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartoonDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartoonDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
