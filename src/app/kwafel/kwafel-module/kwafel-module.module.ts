import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KwafelRoutingModule } from '../kwafel-routing/kwafel-routing.module';
import { NumbersComponent } from '../numbers/numbers.component';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { AngularFireModule } from 'angularfire2';
import { environment } from './../../../environments/environments';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    KwafelRoutingModule,

  ],
})
export class KwafelModuleModule {}
