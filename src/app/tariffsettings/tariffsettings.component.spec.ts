import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffsettingsComponent } from './tariffsettings.component';

describe('TariffsettingsComponent', () => {
  let component: TariffsettingsComponent;
  let fixture: ComponentFixture<TariffsettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TariffsettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TariffsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
