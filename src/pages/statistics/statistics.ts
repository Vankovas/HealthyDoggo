import { Component,ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, DateTime } from 'ionic-angular';
import Chart from 'chart.js';

import { DogProvider } from "../../providers/dog/dog";
import { updateDate } from 'ionic-angular/umd/util/datetime-util';

/**
 * Generated class for the StatisticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html',
})
export class StatisticsPage {
    token: string;
    currentMinutes: number = 1;
    activityDays: any[] = [];
    activeMinutesDayList: any[] = [];
    returnDayList: any[] = [];

    todayDate: any;
    todayLightActivity: number;
    todayMediumActivity: number;
    todayHeavyActivity: number;
    todayScore: string;
    todaySteps: number;
    todayTarget: number;
    todayTotalActivity: number;

    stats: string = 'today';
    provider: DogProvider;

      constructor(
            public navCtrl: NavController, 
            public navParams: NavParams,
            private cf: ChangeDetectorRef,
            private dogProvider: DogProvider,
            ) {
                this.provider = dogProvider;    
            }

            
  segmentChanged()
  {
    this.cf.detectChanges();
    this.movementToday();
    this.movementTotal();
  }


  async ionViewDidLoad() {
    console.log('ionViewDidLoad StatisticsPage');

    this.token = await this.provider.getAuth();
    var goal_response = await this.provider.getCurrentMinutesToday();
    this.currentMinutes =
      goal_response.data.days[
        goal_response.data.days.length - 1
      ].total_activity;

      this.loadAlldata();
    this.segmentChanged();
  }

  async loadAlldata(){
      var response = await this.provider.getCurrentMinutesToday();
      console.log(response.data.days);
   response.data.days.forEach(object => {
       this.returnDayList.push(object.date);
       this.activeMinutesDayList.push(object.total_activity)
   });

   this.todayDate =  response.data.days[
    response.data.days.length - 1
  ].date;

  this.todaySteps = response.data.days[
    response.data.days.length - 1
  ].steps;

  this.todayLightActivity = response.data.days[
    response.data.days.length - 1
  ].light_activity;

  this.todayMediumActivity = response.data.days[
    response.data.days.length - 1
  ].medium_activity;

  this.todayHeavyActivity = response.data.days[
    response.data.days.length - 1
  ].heavy_activity;

  this.todayScore = response.data.days[
    response.data.days.length - 1
  ].score;

  }

  movementToday(){
   
    var ctx = "movementTodayChart";
    var data = [];
    var movementTodayChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["light", "medium", "heavy"],
        datasets: [{
            label: 'Intensity per minute',
            data: [this.todayLightActivity, this.todayMediumActivity, this.todayHeavyActivity],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)'
            ],
            borderWidth: 1
            }]
          },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
  });
}

movementTotal(){
    var ctx = "movementTotalChart";
    var average = [];
    while(average.length < this.activeMinutesDayList.length){
        average.push(25);
    }
    var movementTotalChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.returnDayList,
        datasets: [{
            label: '% activity dogname',
            data: this.activeMinutesDayList,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
            ],
            borderWidth: 1
            },{
            label: '% average',
            data: average,
            backgroundColor: [
                'rgba(0, 255, 0, 0.2)',
         
            ],
            borderColor: [
                'rgba(0, 255, 0, 1)',
            ],
            borderWidth: 1
        
            }]
          },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
  });
}




}
