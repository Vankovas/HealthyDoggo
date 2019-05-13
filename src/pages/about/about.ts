import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  name: string;
  dogBreedData: any;
  dogBreed: any;
  dogHeight: any;
  dogWeight: any;
  dogLength: any;


  constructor(public navCtrl: NavController) {

    this.name = 'Rex';
    this.dogWeight = 0;
    this.dogHeight = 0;
    this.dogLength = 0;


    this.dogBreedData = [
        { text: 'Labrador Retriever', value: 'labradorRetriever' },
        { text: 'Bulldog', value: 'bulldog' },
        { text: 'Poodle', value: 'poodle' },
        { text: 'German Shepherd', value: 'germanShepherd' },
        { text: 'Other', value: 'other' }
    ];

    // Pre-selected object with different object reference      
    this.dogBreed = { text: 'Bulldog', value: 'bulldog' };
  }

  compareFn(option1: any, option2: any) {
      return option1.value === option2.value;
  }

  monthChange(val: any) {
    console.log('Month Change:', val);
  }

  yearChange(val: any) {
    console.log('Year Change:', val);
  }
  

}
