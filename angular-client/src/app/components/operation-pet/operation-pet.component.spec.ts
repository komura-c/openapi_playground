import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationPetComponent } from './operation-pet.component';

describe('OperationPetComponent', () => {
  let component: OperationPetComponent;
  let fixture: ComponentFixture<OperationPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationPetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OperationPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
