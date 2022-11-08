import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss'],
})
export class Form2Component implements OnInit {
  form!: FormGroup;
  powers = ['forte', 'fortissimo', 'mostruoso'];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [],
      alterego: [],
      power: [],
      enemy: [],
      planet: [],
      weakness: [],
    });
  }

  onSubmit(): void {
    console.log(this.form);
  }
}
