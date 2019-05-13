import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { AddPetModal } from './add-pet-modal';

@NgModule({
  declarations: [
    AddPetModal,
  ],
  imports: [
    IonicPageModule.forChild(AddPetModal),
    TranslateModule.forChild()
  ],
  exports: [
    AddPetModal
  ]
})
export class ItemCreatePageModule { }
