import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AnyadirAmigoComponent } from './anyadir-amigo.component';

describe('AnyadirAmigoComponent', () => {
  let component: AnyadirAmigoComponent;
  let fixture: ComponentFixture<AnyadirAmigoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AnyadirAmigoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnyadirAmigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
