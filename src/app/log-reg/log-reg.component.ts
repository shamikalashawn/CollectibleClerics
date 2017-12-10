import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../data/user';

@Component({
  selector: 'app-log-reg',
  templateUrl: './log-reg.component.html',
  styleUrls: ['./log-reg.component.css']
})
export class LogRegComponent implements OnInit {
  pwd_conf: string;
  loginUser = new User();
  registerUser = new User();
  logRegErrors: string[] = []
  registerFail: Boolean = false;

  constructor(private _user: UserService, private _router: Router) { }

  ngOnInit() {
    this.loginUser = new User();
    this.registerUser = new User();
  }
//HANDLE ERRORS AND PUSH TO LOGREGERRORS

  submitRegister(user){
    console.log('logReg component sending registration info: ', user);
    this._user.register(user)
      .then(user => {
        console.log('user: ', user);
        if (!(user instanceof Error)){
          this.registerUser = new User();
          if (user.status == "admin") {
            this._router.navigate(['/dashboard']);
          }
          else {
            this._router.navigate(['/theodex']);
          }
        }
        else {
          console.log("Please register with an alternate email or username.");
        }
      })
      .catch(error => {
        this.registerFail = true;
        console.log("registerFail var: ", this.registerFail);
        console.log('(ts file)error registering user from logReg component: ', error);
      })
  }

  submitLogin(user){
    this._user.login(user)
      .then(user => {
        this.loginUser = new User();
        if (user.status == "admin") {
          this._router.navigate(['/dashboard']);
        }
        else{
          this._router.navigate(['/theodex']);
        }
      })
      .catch(error => {
        console.log('error logging in: ', error);
      })
  }

}
