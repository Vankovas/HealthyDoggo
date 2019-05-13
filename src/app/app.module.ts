import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

import { AboutPage } from "../pages/about/about";
import { ManagePetsPage } from "../pages/managepets/managepets";
import { TabsPage } from "../pages/tabs/tabs";
import { MainPage } from "../pages/main/main";
import { StatisticsPage } from "../pages/statistics/statistics";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { RoundProgressModule } from "angular-svg-round-progressbar";
import { from } from "rxjs/observable/from";
import { DogProvider } from "../providers/dog/dog";
import { HttpClientModule } from "@angular/common/http";
import { MainPageModule } from "../pages/main/main.module";
import { ManagePetsPageModule } from "../pages/managepets/managepets.module";
import { StatisticsPageModule } from "../pages/statistics/statistics.module";
import { TabsPageModule } from "../pages/tabs/tabs.module";

@NgModule({
  declarations: [MyApp, AboutPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    RoundProgressModule,
    HttpClientModule,
    MainPageModule,
    ManagePetsPageModule,
    StatisticsPageModule,
    TabsPageModule
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ManagePetsPage,
    TabsPage,

    MainPage,
    StatisticsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DogProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule {}
