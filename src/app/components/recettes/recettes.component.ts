import { Component, OnInit } from '@angular/core';
import {RecettesService} from '../../services/recettes.service';
import {Recette} from '../../models/recette';
import {CommentsService} from '../../services/comments.service';
import {Comments} from '../../models/comments';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.css']
})
export class RecettesComponent implements OnInit {

  private recettesService: RecettesService;
  private edition: boolean;
  public recettes: Array<Recette>;
  public standby: Recette;
  public updatedRecette;
  public focusedId: number;
  public newArticle: Recette;
  private commentsService: CommentsService;
  public comments: any;
  public newComment: Comments;
  public admin: string;

  constructor(recettesService: RecettesService, commentsService: CommentsService) {
    this.recettesService = recettesService;
    this.standby = new Recette();
    this.updatedRecette = new Recette();
    this.newArticle = new Recette();
    this.newComment = new Comments();
    this.commentsService = commentsService;
  }

  ngOnInit() {
    if (localStorage.getItem('userCredentials')!= null){
      this.admin = localStorage.getItem('userCredentials')
    }
    this.recettes = [];
    this.loadRecipes();
  }

  public loadRecipes(): void {
    this.recettesService.getRecipes().subscribe(
      data => {
        this.recettes = data;
        this.loadComments(this.recettes['id']);
      }
    );
  }

  public getCredentials(): string {
    return localStorage.getItem('userCredentials');
  }

  public setEdition(value: boolean): void {
    this.edition = value;
  }

  public getEdition(): boolean {
    return this.edition;
  }

  public update(id: number, title: string, article: string, src: string) {
    this.updatedRecette.title = title;
    this.updatedRecette.article = article;
    this.updatedRecette.url = src;
    this.recettesService.update(id, this.updatedRecette).subscribe(
      res => this.loadRecipes()
    );
  }

  public delete(id: number) {
    this.recettesService.delete(id).subscribe(
      res => this.loadRecipes();
    );
  }

  public addRecette() {
    this.newArticle.url = 'https://www.youtube.com/embed/' + this.newArticle.url.substring(32, );
    this.recettesService.add(this.newArticle).subscribe(
      res => {
        this.loadRecipes();
      }
    );
  }

  public loadComments(id: number) {
    this.commentsService.getComments(id).subscribe(
      res => {
        this.comments = res;
      }
    )
  }

  public addComment(id: number) {
    this.newComment.relatedId = id;
    console.log("Post:" + this.newComment);
    this.commentsService.add(this.newComment).subscribe(
      res => {
        this.loadComments(id);
      }
    );
  }

  public deleteComment(id: number, focus: number) {
    this.commentsService.deleteComment(id).subscribe(
      res => {
        this.loadComments(focus);
      }
    )
  }
}
