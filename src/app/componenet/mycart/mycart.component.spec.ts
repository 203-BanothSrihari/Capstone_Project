import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycartComponent } from './mycart.component';

describe('MycartComponent', () => {
  let component: MycartComponent;
  let fixture: ComponentFixture<MycartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MycartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/*
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  */

  it('should create', () => {
    expect(component.title).toEqual('mycartcomponent');
  });
});
