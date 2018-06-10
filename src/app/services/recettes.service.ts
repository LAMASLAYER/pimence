import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {GlobalService} from './global.service';
import {Recette} from '../models/recette';


@Injectable()
export class RecettesService extends GlobalService {

  public recettes: Array<Recette>;

  public getRecipes():  Observable<Array<Recette>> {
    return this.http
      .get(this.server + '/recettes')
      .map((res: Array<Recette>) => {
        this.recettes = res;
        return this.recettes;
      });
  }

  public update(id: number, r: Recette) {
    return this.http
      .put<Recette>(this.server + '/recettes/' + id , r);
  }

  public delete(id: number) {
    console.log(this.server + '/recettes/' + id);
    return this.http
      .delete(this.server + '/recettes/' + id);
  }

  public add(r: Recette) {
    return this.http
      .post(this.server + '/recettes/', r);
  }
}
