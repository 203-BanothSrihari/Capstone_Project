import {  TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NgModule } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('DashboardComponent', () => {
  // let component: DashboardComponent;
  // let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
     
      imports:[
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserModule,
        ReactiveFormsModule,
        NgModule,
        FormsModule,
        BrowserDynamicTestingModule
      ],
      declarations: [ DashboardComponent ]
      
    })
    .compileComponents();
  
  });

  
  // beforeEach(() => {
  //   fixture = TestBed.createComponent(DashboardComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  

  
  // it('should create app', () => {
  //   expect(component).toBeTruthy();
  // });

  

  it('should create ', () => {
    const fixture=TestBed.createComponent(DashboardComponent);
    const app=fixture.componentInstance;
    spyOn(app, 'Search').and.callThrough;
    expect(app.title).toEqual('dashcomponent');
  });
/*
  it(`should have title as 'dashboardcomponent'`, () => {
    const fixture=TestBed.createComponent(DashboardComponent);
    fixture.detectChanges();
    const compiled=fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('dashboard-component is running');

  });
  */
});
function component(component: any) {
  throw new Error('Function not implemented.');
}

