import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickmortyDetailsComponent } from './rickmorty-details.component';

describe('RickmortyDetailsComponent', () => {
  let component: RickmortyDetailsComponent;
  let fixture: ComponentFixture<RickmortyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RickmortyDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RickmortyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
