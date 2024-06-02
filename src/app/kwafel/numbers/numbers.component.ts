import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { AngularFireModule } from 'angularfire2';
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
import { FirebaseServiceService } from '../../service/firebase-service.service';

@Component({
  selector: 'app-numbers',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './numbers.component.html',
  styleUrl: './numbers.component.css',
})
export class NumbersComponent {
  userDoc: any;
  constructor(
    private formbuilder: FormBuilder,
    private firebaseService: FirebaseServiceService
  ) {}
  addNumberForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    number: new FormControl(''),
  });
  submitted = false;

  newManData: { username: string; number: string }[] = [];

  get f(): { [key: string]: AbstractControl } {
    return this.addNumberForm.controls;
  }

  ngOnInit() {
    let data = this.firebaseService.readingData();
    console.log(data);

    data.forEach((subArray) => {
      subArray.forEach((item: any) => {
        this.newManData.push({ username: item.username, number: item.number });
      });
    });

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

    // this.newManData.push({ name, number });
    this.firebaseService.addUserProfile(name, number);

    // this.addNumberForm.reset();
  }
}
