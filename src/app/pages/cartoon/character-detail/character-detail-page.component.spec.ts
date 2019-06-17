import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDetailPageComponent } from './character-detail-page.component';

describe('CartoonDetailPageComponent', () => {
  let component: CharacterDetailPageComponent;
  let fixture: ComponentFixture<CharacterDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterDetailPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
