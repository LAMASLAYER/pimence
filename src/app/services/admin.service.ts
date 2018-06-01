import { Injectable } from '@angular/core';
import {GlobalService} from './global.service';
import {Login} from '../models/login';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AdminService extends GlobalService {

  private unAuthorized: boolean;
  private wrongPassword: boolean;

  public login(l: Login):Observable<void> {
    this.setUnAuthorize(false);
    this.setWrongPassword(false);
    return this.http.get(this.server + '/users?username=' + l.username)
      .map(res => {
        if(res[0] !== undefined) {
          console.log(res);
          console.log(l.username + res[0]['usrname'] + l.password + res[0]['password'])
          if (l.username === res[0]['usrname'] && l.password !== res[0]['password']) {
            this.setWrongPassword(true);
          }else if (l.username === res[0]['usrname'] && l.password === res[0]['password']) {
            if(localStorage.getItem('userCredentials') !== res[0]['crendtials']) {
              localStorage.setItem('userCredentials', (res[0]['crendtials']).toString());
              this.router.navigate(['home']);
            }else {
              this.router.navigate(['home']);
            }
          }
        }else {
          this.setUnAuthorize(true);
        }
      })
  }

  public setUnAuthorize(value: boolean) {
    this.unAuthorized = value;
  }

  public getUnAuthorize(): boolean {
    return this.unAuthorized
  }

  public setWrongPassword(value: boolean) {
    this.wrongPassword = value;
  }

  public getWrongPassword(): boolean {
    return this.wrongPassword
  }
}
