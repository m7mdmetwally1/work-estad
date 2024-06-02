import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KwafelModuleModule } from './kwafel-module/kwafel-module.module';

@Component({
  selector: 'app-kwafel',
  standalone: true,
  imports: [RouterOutlet, KwafelModuleModule],
  templateUrl: './kwafel.component.html',
  styleUrl: './kwafel.component.css',
})
export class KwafelComponent {}
