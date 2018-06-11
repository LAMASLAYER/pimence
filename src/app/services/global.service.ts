import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map'

@Injectable()
export class GlobalService {


  public router: Router;
  public http: HttpClient;
  public server: string = 'https://pimencedb.herokuapp.com';

  constructor(http: HttpClient, router: Router) {
    this.http = http;
    this.router = router;
  }

}
