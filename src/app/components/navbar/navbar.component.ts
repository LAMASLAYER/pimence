import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit() {
  }


  public goYoutube() {
    window.open('https://www.youtube.com/channel/UC99duNPf5BxFKBe8vvx1F2Q', '_self');
  }

  public goRecettes() {
    this.router.navigate(['recettes']);
  }
}