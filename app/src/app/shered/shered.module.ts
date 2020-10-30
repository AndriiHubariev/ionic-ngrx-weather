import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicIconComponent } from './components/dynamicIcon/dynamicIcon.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [DynamicIconComponent],
  exports: [DynamicIconComponent]

})
export class SheredModule { }
