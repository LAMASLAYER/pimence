import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {GlobalService} from './global.service';
import {User} from '../models/user';


@Injectable()
export class RecettesService extends GlobalService {

  public getRecipes(): Observable<Object> {
    return this.http.get(this.server + '/articles');
  }

  public addUser(): Observable<Object> {
    const user = new User();
    user.username = 'test';
    user.password = 'test';
    user.credentials = 0;
    return this.http.post(this.server + '/users', user);
  }


}
