import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { DogProvider } from "../../providers/dog/dog";
import * as $ from "jquery";
import { AlertController } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-main",
  templateUrl: "main.html"
})
export class MainPage {
  token: string;
  currentMinutes: number = 1;
  goalMinutes: number = 1;
  percentageGoal: number;
  dogName: String;
  dogBreed: String;
  dogAge: number;
  dogWeight: number;
  dogHeight: number;
  dogLength: number;
  dogWeightChange: number;
  provider: DogProvider;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dogProvider: DogProvider,
    private alertCtrl: AlertController
  ) {
    this.provider = dogProvider;
  }

  public changeGoal(current: number, goal: number) {
    this.percentageGoal = (current / goal) * 100;
    this.dogName = "Bobby";
    this.dogBreed = "Labradoedel";
    this.dogAge = 3;
    this.dogWeight = 3;
    this.dogHeight = 52;
    this.dogLength = 63;
  }

  public updateGoal() {
    this.percentageGoal = (this.currentMinutes / this.goalMinutes) * 100;
  }

  async ionViewDidLoad() {
    console.log("ionViewDidLoad MainPage");
    this.changeGoal(0.001, 1);
    this.token = await this.provider.getAuth();
    console.log("in main " + this.token);
    // console.log(await this.provider.getPersons(this.token));
    var goal_response = await this.provider.getCurrentMinutesToday();
    var target_response = await this.provider.getTargetMinutes();
    // console.log(goal_response);
    this.currentMinutes =
      goal_response.data.days[
        goal_response.data.days.length - 1
      ].total_activity;
    this.goalMinutes = target_response.data.active_minutes;
    this.updateGoal();
    this.calculateWeightChange();
  }

  public weightPrompt() {
    let alert = this.alertCtrl.create({
      title: "Update Weight",
      inputs: [
        {
          name: "Weight",
          placeholder: this.dogWeight.toString()
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: data => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Update",
          handler: data => {
            if (data.Weight != this.dogWeight && data.Weight > 0) {
              this.dogWeight = data.Weight;
              this.calculateWeightChange();
            } else {
              console.log("invalid weight or the same as before");
              // return false;
            }
          }
        }
      ]
    });
    alert.present();
  }

  public dimensionsPrompt() {
    let alert = this.alertCtrl.create({
      title: "Update Dimensions",
      inputs: [
        {
          name: "Height",
          placeholder: this.dogHeight.toString()
        },
        {
          name: "Length",
          placeholder: this.dogLength.toString()
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: data => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Update",
          handler: data => {
            if (data.Height != this.dogHeight && data.Height > 10) {
              this.dogHeight = data.Height;
            } else {
              console.log("invalid height or the same as before");
            }
            if (data.Length != this.dogLength && data.Length > 10) {
              this.dogLength = data.Length;
            } else {
              console.log("invalid length or the same as before");
            }
          }
        }
      ]
    });
    alert.present();
  }

  public calculateWeightChange() {
    this.dogWeightChange = 5 - this.dogWeight;
  }

}
