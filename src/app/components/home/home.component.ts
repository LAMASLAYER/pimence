import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public mainTitle: String;

  constructor() { }

  ngOnInit() {
    this.mainTitle = 'NE MANQUEZ PAS NOTRE DERNIERE RECETTE';
  }

}
