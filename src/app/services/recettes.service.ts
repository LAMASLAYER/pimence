import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class RecettesService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  public getRecipes(): Observable<Object> {
    return this.http.get('https://pimence.herokuapp.com/articles');
  }
}
