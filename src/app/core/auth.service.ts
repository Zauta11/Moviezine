import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }



  login(uname: string, pass: string) {
    if(uname === "Giorgi" && pass === "1234") {
      return 200
    }else{
      return 403;
    }
  }
}
