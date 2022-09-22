import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JujutsuPageRoutingModule } from './jujutsu-routing.module';

import { JujutsuPage } from './jujutsu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JujutsuPageRoutingModule
  ],
  declarations: [JujutsuPage]
})
export class JujutsuPageModule {}
