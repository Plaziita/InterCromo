import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisCromosComponent } from './mis-cromos.component';

describe('MisCromosComponent', () => {
  let component: MisCromosComponent;
  let fixture: ComponentFixture<MisCromosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MisCromosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MisCromosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
