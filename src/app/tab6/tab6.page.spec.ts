import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Tab6Page } from './tab6.page';
import { Component } from '@angular/core';


describe('Tab6Page', () => {
  let component: Tab6Page;
  let fixture: ComponentFixture<Tab6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Tab6Page],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

});
