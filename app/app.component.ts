import { Component } from "@angular/core";

import * as permissions from "nativescript-permissions";
declare var android;

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public counter: number = 16;

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    public onTap() {
        this.counter--;
    }

    public getPermission(){
          permissions.requestPermissions([android.Manifest.permission.CAMERA,
                                        android.Manifest.permission.ACCESS_NETWORK_STATE], 
                                        "App Needs The Following permissions")
            .then(()=>{
                console.log("Permission Granted !");
               // Code for using network state and camera goes here
            })
            .catch(()=>{
                console.log("Permission Denied !");
            });
    }
}
