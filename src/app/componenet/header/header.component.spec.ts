import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
//  let component: HeaderComponent;
//  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ,
        HttpClient
      ]
    })
    .compileComponents();
  });
/*
  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
*/

  /*
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  */

  it('should create', () => {
    const fixture =TestBed.createComponent(HeaderComponent);
    const component= fixture.componentInstance;
    expect(component.title).toEqual('headercomponent');
  });

});
