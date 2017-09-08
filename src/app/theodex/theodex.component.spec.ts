import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheodexComponent } from './theodex.component';

describe('TheodexComponent', () => {
  let component: TheodexComponent;
  let fixture: ComponentFixture<TheodexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheodexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheodexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
