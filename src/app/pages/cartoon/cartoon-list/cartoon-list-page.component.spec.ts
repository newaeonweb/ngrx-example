import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartoonListPageComponent } from './cartoon-list-page.component';

describe('CartoonListPageComponent', () => {
  let component: CartoonListPageComponent;
  let fixture: ComponentFixture<CartoonListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartoonListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartoonListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
