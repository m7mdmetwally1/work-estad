import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { YouthDistributionComponent } from '../youth-distribution/youth-distribution.component';

const routes: Routes = [
  {
    path: 'people-distribution',
    component: YouthDistributionComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class YouthRoutingModule {}
