import {Injectable} from '@angular/core';
import  { LoginService } from  './login.service';

@Injectable()
export class DataServiceService {
  private data: any = [];
constructor(private loginservice:LoginService){}
  addData(names: any) {
    this.data.push(names);
this.loginservice.writeTolog(' Hello ' + names);
  }
  getData()
  {
    return this.data;
  }
}
