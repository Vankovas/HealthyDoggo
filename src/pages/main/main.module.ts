import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { MainPage } from "./main";
import { RoundProgressModule } from "angular-svg-round-progressbar";
@NgModule({
  declarations: [MainPage],
  imports: [IonicPageModule.forChild(MainPage), RoundProgressModule]
})
export class MainPageModule {}
