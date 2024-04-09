import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirCromoComponent } from './subir-cromo.component';

describe('SubirCromoComponent', () => {
  let component: SubirCromoComponent;
  let fixture: ComponentFixture<SubirCromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubirCromoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubirCromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
