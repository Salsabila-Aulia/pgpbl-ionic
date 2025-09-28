import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatepointionicPageRoutingModule } from './createpointionic-routing.module';

import { CreatepointionicPage } from './createpointionic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatepointionicPageRoutingModule
  ],
  declarations: [CreatepointionicPage]
})
export class CreatepointionicPageModule {}
