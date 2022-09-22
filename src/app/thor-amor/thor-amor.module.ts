import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThorAmorPageRoutingModule } from './thor-amor-routing.module';

import { ThorAmorPage } from './thor-amor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThorAmorPageRoutingModule
  ],
  declarations: [ThorAmorPage]
})
export class ThorAmorPageModule {}
