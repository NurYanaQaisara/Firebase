import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Tab8Page } from './tab8.page';
import { Component } from '@angular/core';


describe('Tab8Page', () => {
  let component: Tab8Page;
  let fixture: ComponentFixture<Tab8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Tab8Page],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

});
