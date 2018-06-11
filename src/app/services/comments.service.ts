import { Injectable } from '@angular/core';
import {GlobalService} from './global.service';
import {Observable} from 'rxjs/Observable';
import {Comments} from '../models/comments';

@Injectable()
export class CommentsService extends GlobalService {

  public getComments(id: number): Observable<Object> {
    return this.http
      .get(this.server + '/comments?RelatedId=' + id);
  }

  public add(c: Comments) {
    return this.http
      .post(this.server + '/comments/', c);
  }

  public deleteComment(id: number) {
    return this.http
      .delete(this.server + '/comments/' + id);
  }

}
