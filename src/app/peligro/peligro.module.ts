import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeligroPageRoutingModule } from './peligro-routing.module';

import { PeligroPage } from './peligro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeligroPageRoutingModule
  ],
  declarations: [PeligroPage]
})
export class PeligroPageModule {}
