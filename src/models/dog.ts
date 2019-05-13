export class Dog {
    name: string;
    dogBreed: any;
    dogHeight: any;
    dogWeight: any;
    dogLength: any;
    profilePic: any;
    constructor(name: string, dogBreed: any, dogWeight: any, dogHeight: any, dogLength: any) {
        this.name = name;
        this.dogBreed = dogBreed;
        this.dogHeight = dogHeight;
        this.dogWeight = dogWeight;
        this.dogLength = dogLength;
        this.profilePic = "https://limnlcdn.akamaized.net/Assets/Images_Upload/2017/09/19/HOND_iStock-636475496.jpg"
    }
}

export interface Dog {
    [prop: string]: any;
}