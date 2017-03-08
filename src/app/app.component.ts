import { Component } from '@angular/core';
import {DataServiceService} from './data-service.service';
import {LoginService} from "./login.service";

@Component({
  selector: 'app-root',
  template:`
<h1 align="center"> Service Implementation </h1>
<button (click)="CallService(input.value)"> Color Service</button>
<button (click)="OnStore(input.value)"> Store Data </button>
<button (click)="onGet()"> Refresh List </button>


C Name:- <input type="text" #input>
Roll Number:- <input type="text" >

<h3 align="Center"> Get Student Name </h3>
<ul>
<li *ngFor="let rolls of items"> {{rolls}}</li>
</ul>
`,

  providers:[DataServiceService]
})
export class AppComponent {
  items:any[]=[];
  constructor (private logservice:LoginService,private dataservice:DataServiceService){}
  CallService(value:string){
    this.logservice.writeTolog(value);
    this.logservice.studentinfo(234,"Aniket");

  }
  OnStore(value:any){
    this.dataservice.addData(value);
  }
  onGet(){

this.items=this.dataservice.getData();
  }
}
