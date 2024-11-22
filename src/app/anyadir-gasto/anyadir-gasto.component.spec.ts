import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AnyadirGastoComponent } from './anyadir-gasto.component';

describe('AnyadirGastoComponent', () => {
  let component: AnyadirGastoComponent;
  let fixture: ComponentFixture<AnyadirGastoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AnyadirGastoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnyadirGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
