import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Dog } from '../../models/dog';
import { request } from 'request';
import { from } from 'rxjs/observable/from';

@IonicPage()
@Component({
    selector: 'page-manage-pets',
    templateUrl: 'managepets.html'
})
export class ManagePetsPage {
    ownedDogs: Dog[] = [];
    dog1: Dog;
    dog2: Dog;

    constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

        this.dog1 = new Dog("Dribbel", "Bulldog", 20, 35, 45);
        this.dog2 = new Dog("Pieter", "Pug", 12, 24, 31);
        this.ownedDogs.push(this.dog1);
        this.ownedDogs.push(this.dog2)


        console.log(this.ownedDogs);
        console.log(this.dog1.profilePic);
    }

    ionViewDidLoad() {
        this.testRequest();
    }


    addPet() {
        let addPetModal = this.modalCtrl.create('AddPetModal');

        addPetModal.onDidDismiss(dog => {
            if (dog) {
                this.ownedDogs.push(dog)
            }
        })
        addPetModal.present();
    }

    testRequest() {

        //var request = require("request");

        var options = {
            method: 'POST',
            url: 'https://fontys.atris.life/oauth/token',
            headers:
            {
                'Postman-Token': '3b4bb723-919f-4f86-9f2b-26e0b609f407',
                'cache-control': 'no-cache',
                'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
            },
            formData:
            {
                username: 'tommygoossens@ziggo.nl',
                password: 'Bn5eh7fp',
                client_id: '9',
                client_secret: 'BUwfQ9mciMi6knE9Y6UdzbNiPYBjyutPT0COwchG',
                grant_type: 'password'
            }
        };


    }

    // request(options: any, function(error, response, body):any {
    //     if (error) throw new Error(error);

    //     console.log(body);
    // }

    deletePet(pet) {
        // this.ownedDogs.delete(pet);
    }

}