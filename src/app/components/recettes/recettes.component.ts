import { Component, OnInit } from '@angular/core';
import {RecettesService} from '../../services/recettes.service';
import {Recette} from '../../models/recette';

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

  constructor(recettesService: RecettesService) {
    this.recettesService = recettesService;
    this.standby = new Recette();
    this.updatedRecette = new Recette();
    this.newArticle = new Recette();
  }

  ngOnInit() {
    this.recettes = [];
    this.loadRecipes();
  }

  public loadRecipes(): void {
    this.recettesService.getRecipes().subscribe(
      data => {
        console.log(data);
        this.recettes = data;
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
    this.updatedRecette.src = src;
    this.recettesService.update(id, this.updatedRecette).subscribe(
      res => window.location.reload()
    );
  }

  public delete(id: number) {
    this.recettesService.delete(id).subscribe();
    window.location.reload();
  }

  public addRecette() {
    this.newArticle.url = 'https://www.youtube.com/embed/' + this.newArticle.url.substring(32, );
    this.recettesService.add(this.newArticle).subscribe(
      res => {
        window.location.reload();
      }
    );
  }
}
