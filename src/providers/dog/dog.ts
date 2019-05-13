import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import * as $ from "jquery";
@Injectable()
export class DogProvider {
  constructor(public http: HttpClient) {}

  public async getAuth() {
    let final_token: string;
    var form = new FormData();
    form.append("username", "vannkovas@gmail.com");
    -form.append("password", "12345678");
    form.append("client_id", "9");
    form.append("client_secret", "BUwfQ9mciMi6knE9Y6UdzbNiPYBjyutPT0COwchG");
    form.append("grant_type", "password");

    var settings = {
      async: true,
      crossDomain: true,
      url: "https://cors-anywhere.herokuapp.com/https://fontys.atris.life/oauth/token",
      method: "POST",
      headers: {},
      processData: false,
      contentType: false,
      mimeType: "multipart/form-data",
      data: form
    };

    await $.ajax(settings).done(function(response) {
      let obj = JSON.parse(response);
      final_token = obj.token_type + " " + obj.access_token;
      //console.log(final_token);
    });
    return final_token;
  }

  public async getPersons() {
    var response_return;
    var settings = {
      async: true,
      crossDomain: true,
      url: "https://cors-anywhere.herokuapp.com/https://fontys.atris.life/api/persons",
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: await this.getAuth()
      },
      data: ""
    };

    await $.ajax(settings).done(function(response) {
      // console.log(response.data);
      response_return = response.data;
    });
    return response_return;
  }

  /**
   * Current Minutes Today (Already walked minutes for today)
   */
  public async getCurrentMinutesToday() {
    var response_return;
    var settings = {
      async: true,
      crossDomain: true,
      url: "https://cors-anywhere.herokuapp.com/https://fontys.atris.life/api/persons/3/data",
      method: "GET",
      headers: {
        Authorization: await this.getAuth()
      }
    };

    await $.ajax(settings).done(function(response) {
      // console.log(response);
      console.log(response.data.days[response.data.days.length-1].total_activity);
      response_return = response;
    });
    return response_return;
  }

  public async getTargetMinutes() {
    var response_return;
    var settings = {
      async: true,
      crossDomain: true,
      url: "https://cors-anywhere.herokuapp.com/https://fontys.atris.life/api/persons/3/target",
      method: "GET",
      headers: {
        Authorization: await this.getAuth()
      }
    };

    await $.ajax(settings).done(function(response) {
      console.log(response);
      response_return = response;
    });
    return response_return;
  }
}
