import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickmortyListComponent } from './rickmorty-list.component';

describe('RickmortyListComponent', () => {
  let component: RickmortyListComponent;
  let fixture: ComponentFixture<RickmortyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RickmortyListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RickmortyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
