export class LoginService {
  writeTolog(logmsg: string) {
    alert("You will see "   +logmsg);
    document.body.style.backgroundColor=logmsg;
  }
  studentinfo(rollnumber:number, name:string){
    console.log(rollnumber,name);
}
}
