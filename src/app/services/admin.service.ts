import { Injectable } from '@angular/core';
import {GlobalService} from './global.service';
import {Login} from '../models/login';

@Injectable()
export class AdminService extends GlobalService {

  private unAuthorized: boolean;

  public login(l: Login) {
    return this.http.get(this.server + '/users?username=' + l.username)
      .map(res => {
        if(res[0] !== undefined) {
          if (l.username === res[0]['username']) {
            console.log('Good user !');
            console.log(res);
          } else {
            console.log('Bad user !');
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
}
