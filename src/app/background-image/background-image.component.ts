import { Component, Renderer2, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-background-image',
  standalone: true,
  imports: [],
  templateUrl: './background-image.component.html',
  styleUrl: './background-image.component.css',
})
export class BackgroundImageComponent {
  constructor(private renderer: Renderer2) {}
  ngOnInit() {
    this.renderer.setStyle(
      document.body,
      'backgroundImage',
      'url("../assets/image.jpg")'
    );
  }

  ngOnDestroy() {
    document.body.style.backgroundImage = 'none';
  }
}
