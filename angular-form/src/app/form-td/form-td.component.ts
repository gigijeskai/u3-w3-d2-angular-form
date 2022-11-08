import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SuperHero } from '../classes/super-hero';

@Component({
  selector: 'app-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.scss'],
})
export class FormTDComponent implements OnInit {
  myHero: SuperHero = new SuperHero();
  @ViewChild('hero') myForm!: NgForm;

  constructor() {}

  ngOnInit(): void {}

  addHero() {
    this.myHero = this.myForm.value.name;
    this.myHero = this.myForm.value.alterego;
    this.myHero = this.myForm.value.power;
    this.myHero = this.myForm.value.enemy;
    this.myHero = this.myForm.value.planet;
    this.myHero = this.myForm.value.weakness;
    console.log(this.myHero);
  }
}
