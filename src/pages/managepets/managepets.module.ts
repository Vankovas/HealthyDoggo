import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ManagePetsPage } from './managepets';

@NgModule({
  declarations: [
    ManagePetsPage,
  ],
  imports: [
    IonicPageModule.forChild(ManagePetsPage),
    TranslateModule.forChild()
  ],
  exports: [
    ManagePetsPage
  ]
})
export class ManagePetsPageModule { }
