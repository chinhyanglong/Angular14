import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConCComponent } from './conc.component';

describe('ConComponent', () => {
  let component: ConCComponent;
  let fixture: ComponentFixture<ConCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
