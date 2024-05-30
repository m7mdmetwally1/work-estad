import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KwafelModelModule } from '../../../app/kwafel/kwafel-model/kwafel-model.module';

@Component({
  selector: 'app-kwafel',
  standalone: true,
  imports: [RouterOutlet, KwafelModelModule],
  templateUrl: './kwafel.component.html',
  styleUrl: './kwafel.component.css',
})
export class KwafelComponent {}
