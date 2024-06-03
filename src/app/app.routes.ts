import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { KwafelComponent } from './kwafel/kwafel.component';
import { D3waFardysComponent } from './d3wa-fardys/d3wa-fardys.component';
import { DayWorkComponent } from './day-work/day-work.component';
import { MosquesComponent } from './mosques/mosques.component';
import { YouthLessonsComponent } from './youth-lessons/youth-lessons.component';
import { BackgroundImageComponent } from './background-image/background-image.component';

export const routes: Routes = [
  {
    path: '',
    component: BackgroundImageComponent,
  },
  {
    path: 'kwafel',
    loadChildren: () =>
      import('./kwafel/kwafel-module/kwafel-module.module').then(
        (m) => m.KwafelModuleModule
      ),
    component: KwafelComponent,
  },
  {
    path: 'd3waFrdya',
    component: D3waFardysComponent,
  },
  {
    path: 'dayWork',
    component: DayWorkComponent,
  },
  {
    path: 'mosques',
    component: MosquesComponent,
  },
  {
    path: 'youthLessonss',
    loadChildren: () =>
      import('./youth-lessons/youth-module/youth-module.module').then(
        (m) => m.YouthModuleModule
      ),
  },
];
