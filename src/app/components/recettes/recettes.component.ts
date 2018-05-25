import { Component, OnInit } from '@angular/core';
import {RecettesService} from '../../services/recettes.service';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.css']
})
export class RecettesComponent implements OnInit {

  private recettesService: RecettesService;

  constructor(recettesService: RecettesService) {
    this.recettesService = recettesService;
  }

  ngOnInit() {
    this.loadRecipes();
  }

  public loadRecipes() {
    this.recettesService.getRecipes().subscribe(
      data => {
        console.log(data);
      }
    );
  }

  public addUser() {
    this.recettesService.addUser().subscribe(
      res => {
        console.log(res);
      }
    );
  }


}
