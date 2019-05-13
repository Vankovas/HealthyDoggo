import { Component } from "@angular/core";

import { AboutPage } from "../about/about";
import { MainPage } from "../main/main";
import { ManagePetsPage} from "../managepets/managepets"
import { StatisticsPage } from '../statistics/statistics';

@Component({
  templateUrl: "tabs.html"
})

export class TabsPage {
  tab1Root = MainPage;
  tab3Root = AboutPage;
  tab4Root = ManagePetsPage;
  tab5Root = StatisticsPage;
  constructor() {}
}
