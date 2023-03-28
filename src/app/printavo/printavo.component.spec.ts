import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintavoComponent } from './printavo.component';

describe('PrintavoComponent', () => {
  let component: PrintavoComponent;
  let fixture: ComponentFixture<PrintavoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintavoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintavoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
