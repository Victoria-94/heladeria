import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DautherComponent } from './dauther.component';

describe('DautherComponent', () => {
  let component: DautherComponent;
  let fixture: ComponentFixture<DautherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DautherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DautherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
