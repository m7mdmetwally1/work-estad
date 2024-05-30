import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-numbers',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './numbers.component.html',
  styleUrl: './numbers.component.css',
})
export class NumbersComponent {
  constructor(private formbuilder: FormBuilder) {}
  addNumberForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    number: new FormControl(''),
  });
  submitted = false;

  newManData = [{ name: '', number: '' }, ,];

  get f(): { [key: string]: AbstractControl } {
    return this.addNumberForm.controls;
  }

  ngOnInit() {
    this.addNumberForm = this.formbuilder.group({
      name: ['', [Validators.required]],
      number: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.addNumberForm.invalid) {
      return;
    }

    const number = this.addNumberForm.get('number')?.value;
    const name = this.addNumberForm.get('name')?.value;

    this.newManData.push({ name, number });

    // this.addNumberForm.reset();
  }
}
