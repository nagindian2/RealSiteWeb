import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbanksComponent } from './listbanks.component';

describe('ListbanksComponent', () => {
  let component: ListbanksComponent;
  let fixture: ComponentFixture<ListbanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListbanksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListbanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
